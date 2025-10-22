import './bootstrap.js';
// const $ = require('jquery');
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
// require('bootstrap');

// or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');

// $(document).ready(function() {
//     $('[data-toggle="popover"]').popover();
// });

const headerCart = document.getElementById('header-cart');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    console.log("loren header", event.target);
    // if (event.target === headerCart) {
        headerCart.classList.remove('isVisible');
    // }
}

document.addEventListener('DOMContentLoaded', function () {
    const promoCheckbox = document.getElementById('Product_isPromotion');
    const promoPriceField = document.getElementById('Product_offPercent');


    // Cible le parent du champ pour cacher tout le bloc du formulaire
    const promoPriceFieldContainer = promoPriceField.closest('.promotion');

    // Fonction de bascule
    function togglePromoField() {
        if (promoCheckbox.checked) {
            promoPriceFieldContainer.style.display = 'block';
        } else {
            promoPriceFieldContainer.style.display = 'none';
        }
    }

    // Appel initial au chargement de la page
    togglePromoField();

    // Écouteur d'événement sur le changement de la checkbox
    promoCheckbox.addEventListener('change', togglePromoField);
});

// import '/assets/js/shopus.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

