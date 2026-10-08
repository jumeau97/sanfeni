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


// Panier du header : fermeture au clic ailleurs.
// Garde null : ce composant n'est pas rendu sur toutes les pages.
const headerCart = document.getElementById('header-cart');
window.onclick = function (event) {
    if (headerCart) {
        headerCart.classList.remove('isVisible');
    }
};

// Note : la bascule « promotion » du formulaire produit vit désormais dans
// le back-office sur mesure (templates/admin/product/_form.html.twig) —
// EasyAdmin (et ses IDs #Product_isPromotion / #Product_offPercent) a été retiré.

// import '/assets/js/shopus.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

