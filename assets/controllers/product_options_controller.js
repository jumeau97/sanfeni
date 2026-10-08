import { Controller } from '@hotwired/stimulus';

/**
 * Fiche produit — sélection des déclinaisons (taille / couleur / …) et
 * quantité.
 *
 * Source de vérité : le payload JSON rendu par le serveur
 * (ProductDetails::getOptionsPayload), qui contient la matrice complète des
 * variations. On peut donc décider côté client, instantanément, si une
 * combinaison existe et si elle est en stock — sans aller au serveur.
 *
 * Le serveur reste le dernier mot : ProductDetails::addToCart() revalide
 * la variation et borne la quantité. Ce contrôleur ne fait que de l'ergonomie.
 *
 * Convention de taille du projet : 1rem = 10px (html { font-size:10px }).
 */
export default class extends Controller {
    static values = { payload: Object, productId: Number };
    static targets = ['option', 'qty', 'summary', 'cta', 'price', 'stock', 'error'];

    connect() {
        this.payload = this.payloadValue;
        this.selections = {}; // attributeId -> valueId
        this.quantity = 1;
        // Le serveur rend le message d'erreur dans un target : s'il est
        // peuplé, le dernier ajout a été refusé (variante en rupture…).
        this.hasError = this.hasErrorTarget && this.errorTarget.textContent.trim() !== '';

        this.restoreState();
        this.sync();
    }

    disconnect() {
        // Rien à libérer : aucun listener global.
    }

    /* ------------------------------------------------------------------
       Événements
       ------------------------------------------------------------------ */

    select(event) {
        event.preventDefault();

        const option = event.currentTarget;
        if (option.disabled) return;

        const attributeId = Number(option.dataset.attributeId);
        const valueId = Number(option.dataset.valueId);

        // Re-cliquer sur l'option déjà choisuse la désélectionne : on
        // laisse l'utilisateur repartir de zéro plutôt que de le bloquer.
        if (this.selections[attributeId] === valueId) {
            delete this.selections[attributeId];
        } else {
            this.selections[attributeId] = valueId;
        }

        this.persistState();
        this.sync();
    }

    increase(event) {
        event.preventDefault();
        const max = this.maxQuantity();
        if (this.quantity < max) {
            this.quantity += 1;
            this.sync();
        }
    }

    decrease(event) {
        event.preventDefault();
        if (this.quantity > 1) {
            this.quantity -= 1;
            this.sync();
        }
    }

    /**
     * Exécuté AVANT live#action sur le bouton (ordre des data-action) :
     * on recopie l'état courant dans les paramètres LiveComponent.
     *
     * Stimulus lit `data-<identifiant>-(.+)-param` au moment du dispatch
     * (stimulus.js, Action.params getter), donc écrire l'attribut ici est
     * suffisant : `live#action` le verra juste après.
     *
     * ⚠ Le nom doit produire la clé `variationId` : l'attribut
     *   `data-live-variation-id-param` capture `variation-id`, camélisé
     *   en `variationId` → argument PHP $variationId.
     */
    prepareAdd() {
        if (this.hasCtaTarget) {
            this.ctaTarget.dataset.liveQuantityParam = String(this.quantity);

            const variation = this.currentVariation();
            if (variation) {
                this.ctaTarget.dataset.liveVariationIdParam = String(variation.id);
            } else {
                // Attribut absent => PHP reçoit la valeur par défaut (null).
                delete this.ctaTarget.dataset.liveVariationIdParam;
            }
        }
    }

    /* ------------------------------------------------------------------
       Calculs
       ------------------------------------------------------------------ */

    /**
     * Une option est cliquable si au moins une variation la contient,
     * correspond à tout le reste de la sélection, et n'est pas en rupture.
     */
    optionAvailable(attributeId, valueId) {
        if (!this.payload.hasVariants) return true;

        const needed = { ...this.selections };
        needed[attributeId] = valueId;
        const wanted = Object.values(needed);

        return this.payload.variations.some((variation) => {
            if (variation.stock <= 0) return false;
            return wanted.every((id) => variation.valueIds.includes(id));
        });
    }

    /**
     * Variation correspondant exactement à la sélection courante
     * (comparaison d'ensembles : chaque côté doit contenir l'autre).
     */
    currentVariation() {
        const selected = Object.values(this.selections);
        if (selected.length === 0) return null;

        return (
            this.payload.variations.find((variation) => {
                if (variation.valueIds.length !== selected.length) return false;
                return selected.every((id) => variation.valueIds.includes(id));
            }) || null
        );
    }

    selectionComplete() {
        if (!this.payload.hasVariants) return true;
        return Object.keys(this.selections).length === this.payload.groups.length;
    }

    /**
     * Plafond de quantité, ou Infinity si le stock n'est pas géré
     * (cas des 12 produits actuels : product.stock = null).
     */
    maxQuantity() {
        if (this.payload.hasVariants) {
            const variation = this.currentVariation();
            return variation ? Math.max(1, variation.stock) : 1;
        }

        const total = this.payload.totalStock;
        return total === null || total === undefined ? Infinity : Math.max(1, total);
    }

    /** Prix affiché : prix de la variation, sinon prix de base. */
    displayPrice() {
        const variation = this.currentVariation();
        const price = variation && variation.price != null ? variation.price : this.payload.basePrice;
        return typeof price === 'number' ? price : null;
    }

    currentStock() {
        if (this.payload.hasVariants) {
            const variation = this.currentVariation();
            return variation ? variation.stock : null;
        }
        return this.payload.totalStock;
    }

    /* ------------------------------------------------------------------
       Rendu
       ------------------------------------------------------------------ */

    sync() {
        if (!this.payload) return;

        // 1. Disponibilité de chaque option, recalculée à chaque sélection
        this.optionTargets.forEach((option) => {
            const attributeId = Number(option.dataset.attributeId);
            const valueId = Number(option.dataset.valueId);
            const isSelected = this.selections[attributeId] === valueId;
            const available = this.optionAvailable(attributeId, valueId);

            option.disabled = !available;
            option.classList.toggle('is-selected', isSelected);
            option.classList.toggle('is-unavailable', !available);
            option.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        });

        // 2. Prix — on ne réécrit que si un prix est connu, pour ne pas
        //    écraser le rendu serveur quand product.price est null.
        if (this.hasPriceTarget) {
            const price = this.displayPrice();
            if (price !== null && price !== undefined) {
                this.priceTarget.textContent =
                    `${Math.round(price).toLocaleString('fr-FR')} FCFA`;
            }
        }

        // 3. Récapitulatif de la sélection
        if (this.hasSummaryTarget) {
            const parts = this.payload.groups.map((group) => {
                const valueId = this.selections[group.id];
                const option = group.options.find((o) => o.id === valueId);
                return option ? `${group.name} : ${option.label}` : null;
            });

            const chosen = parts.filter(Boolean);
            this.summaryTarget.textContent = chosen.length
                ? chosen.join('  ·  ')
                : 'Sélectionnez une option';
            this.summaryTarget.classList.toggle('is-empty', chosen.length === 0);
        }

        // 4. Mention de stock
        if (this.hasStockTarget) {
            const stock = this.currentStock();
            const complete = this.selectionComplete();

            let label = '';
            let tone = '';

            if (this.payload.hasVariants && !complete) {
                label = '';
            } else if (stock === null || stock === undefined) {
                // Stock non géré : aucune mention, comportement historique.
                label = '';
            } else if (stock <= 0) {
                label = 'Rupture de stock';
                tone = 'is-out';
            } else if (stock <= 5) {
                label = `Plus que ${stock} en stock`;
                tone = 'is-low';
            } else {
                label = 'En stock';
                tone = 'is-ok';
            }

            this.stockTarget.textContent = label;
            this.stockTarget.className = `wb-stock ${tone}`.trim();
        }

        // 5. Quantité bornée au nouveau maximum
        const max = this.maxQuantity();
        if (this.quantity > max) this.quantity = max;
        if (this.quantity < 1) this.quantity = 1;

        if (this.hasQtyTarget) {
            this.qtyTarget.textContent = String(this.quantity);
        }
        const minus = this.element.querySelector('[data-role="qty-decrease"]');
        const plus = this.element.querySelector('[data-role="qty-increase"]');
        if (minus) minus.disabled = this.quantity <= 1;
        if (plus) plus.disabled = this.quantity >= max;

        // 6. État du CTA
        if (this.hasCtaTarget) {
            const complete = this.selectionComplete();
            const variation = this.currentVariation();
            const outOfStock = this.payload.hasVariants && (!variation || variation.stock <= 0);
            const productOut =
                !this.payload.hasVariants &&
                this.payload.totalStock !== null &&
                this.payload.totalStock !== undefined &&
                this.payload.totalStock <= 0;

            const blocked = this.hasError || !complete || outOfStock || productOut;
            this.ctaTarget.disabled = blocked;

            const label = this.ctaTarget.querySelector('[data-role="cta-label"]');
            if (label) {
                if (this.hasError) {
                    label.textContent = 'Sélection impossible';
                } else if (!complete) {
                    label.textContent = 'Choisissez vos options';
                } else if (outOfStock || productOut) {
                    label.textContent = 'Rupture de stock';
                } else {
                    label.textContent = 'Ajouter au panier';
                }
            }
        }
    }

    /* ------------------------------------------------------------------
       Persistance — la sélection survit à un re-rendu LiveComponent
       (une action invalide revalide le composant et remplace son HTML).
       ------------------------------------------------------------------ */

    storageKey() {
        return `wb:options:${this.productIdValue}`;
    }

    restoreState() {
        try {
            const raw = window.sessionStorage.getItem(this.storageKey());
            if (!raw) return;
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object') {
                this.selections = parsed.selections || {};
                this.quantity = Math.max(1, parseInt(parsed.quantity, 10) || 1);
            }
        } catch (e) {
            // sessionStorage indisponible (mode privé) : on repart de zéro.
        }
    }

    persistState() {
        try {
            window.sessionStorage.setItem(
                this.storageKey(),
                JSON.stringify({ selections: this.selections, quantity: this.quantity })
            );
        } catch (e) {
            // silencieux
        }
    }
}
