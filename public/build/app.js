(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");

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

var headerCart = document.getElementById('header-cart');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  console.log("loren header", event.target);
  // if (event.target === headerCart) {
  headerCart.classList.remove('isVisible');
  // }
};
document.addEventListener('DOMContentLoaded', function () {
  var promoCheckbox = document.getElementById('Product_isPromotion');
  var promoPriceField = document.getElementById('Product_offPercent');

  // Cible le parent du champ pour cacher tout le bloc du formulaire
  var promoPriceFieldContainer = promoPriceField.closest('.promotion');

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

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
// assets/bootstrap.js


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

/***/ }),

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./csrf_protection_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/csrf_protection_controller.js",
	"./details_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/details_controller.js",
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js",
	"./modal_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/modal_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_chartjs_dist_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-chartjs/dist/controller.js */ "./vendor/symfony/ux-chartjs/assets/dist/controller.js");
/* harmony import */ var _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live_controller.js */ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js");
/* harmony import */ var _symfony_ux_live_component_dist_live_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live.min.css */ "./vendor/symfony/ux-live-component/assets/dist/live.min.css");
/* harmony import */ var _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @symfony/ux-turbo/dist/turbo_controller.js */ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-chartjs--chart': _symfony_ux_chartjs_dist_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  'live': _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  'symfony--ux-turbo--turbo-core': _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_3__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/csrf_protection_controller.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/csrf_protection_controller.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
    constructor(context) {
        super(context);
        this.__stimulusLazyController = true;
    }
    initialize() {
        if (this.application.controllers.find((controller) => {
            return controller.identifier === this.identifier && controller.__stimulusLazyController;
        })) {
            return;
        }
        Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_core-js_modules_es_array-buffer_constructor_js-node_modules_core-js_modu-cebe39"), __webpack_require__.e("assets_controllers_csrf_protection_controller_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/csrf_protection_controller.js */ "./assets/controllers/csrf_protection_controller.js")).then((controller) => {
            this.application.register(this.identifier, controller.default);
        });
    }
};


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/details_controller.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/details_controller.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "next",
    value: function next(event) {
      console.log("lorem");
    }
  }, {
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello details';
      window.addEventListener('toggle:status', function (event) {
        console.log("ooohps");
      });
    }
  }, {
    key: "toggleState",
    value: function toggleState(event) {
      // console.log("changement d'etat");
      console.log(event);
      // const id = event.currentTarget.dataset.orderdetailId
      // const response = await fetch(`/admin/orderdetail/${id}/toggle-state`, { method: 'POST' })
      // if (response.ok) {
      //     location.reload()
      // }
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/modal_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/modal_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }





















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    var _this;
    _classCallCheck(this, _default);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, _default, [].concat(args));
    _defineProperty(_this, "component", null);
    _defineProperty(_this, "alertBox", null);
    return _this;
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "connect",
    value: function connect() {
      var _this2 = this;
      window.addEventListener('modal:open', function (event) {
        // -----------------------
        if (window.innerWidth < 992) {
          _this2.alertBox = document.getElementById('mobile-cart-popup');

          // On affiche le bandeau
          _this2.alertBox.classList.add('active');
          console.log("event", _this2.element);
          // On le cache automatiquement après 3 secondes
          setTimeout(function () {
            _this2.alertBox.classList.remove('active');
          }, 3000);
        }
        // ----------------
        _this2.component = document.getElementById('header-cart');
        _this2.component.addEventListener('click', _this2.openModal());
        // console.log("component",component);
        console.log("event", _this2.element);
        setTimeout(function () {
          _this2.component.classList.remove('isVisible');
        }, 5000);
      });
    }
  }, {
    key: "openModal",
    value: function openModal() {
      // this.modal.style.display = "block";
      // window.alert("lorem ipsum")
      console.log(this.component.style.visibility);
      // this.component.style.visibility = 'visible';
      this.component.classList.add('isVisible');
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.modal.hide();
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__.Controller);
_defineProperty(_default, "targets", ['modalElement']);


/***/ }),

/***/ "./vendor/symfony/ux-chartjs/assets/dist/controller.js":
/*!*************************************************************!*\
  !*** ./vendor/symfony/ux-chartjs/assets/dist/controller.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller_default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }




























function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// src/controller.ts


if (chart_js__WEBPACK_IMPORTED_MODULE_29__.registerables) {
  chart_js__WEBPACK_IMPORTED_MODULE_29__.Chart.register.apply(chart_js__WEBPACK_IMPORTED_MODULE_29__.Chart, _toConsumableArray(chart_js__WEBPACK_IMPORTED_MODULE_29__.registerables));
}
var isChartInitialized = false;
var controller_default = /*#__PURE__*/function (_Controller) {
  function controller_default() {
    var _this;
    _classCallCheck(this, controller_default);
    _this = _callSuper(this, controller_default, arguments);
    _this.chart = null;
    return _this;
  }
  _inherits(controller_default, _Controller);
  return _createClass(controller_default, [{
    key: "connect",
    value: function connect() {
      if (!isChartInitialized) {
        isChartInitialized = true;
        this.dispatchEvent("init", {
          Chart: chart_js__WEBPACK_IMPORTED_MODULE_29__.Chart
        });
      }
      if (!(this.element instanceof HTMLCanvasElement)) {
        throw new Error("Invalid element");
      }
      var payload = this.viewValue;
      if (Array.isArray(payload.options) && 0 === payload.options.length) {
        payload.options = {};
      }
      this.dispatchEvent("pre-connect", {
        options: payload.options,
        config: payload
      });
      var canvasContext = this.element.getContext("2d");
      if (!canvasContext) {
        throw new Error("Could not getContext() from Element");
      }
      this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_29__.Chart(canvasContext, payload);
      this.dispatchEvent("connect", {
        chart: this.chart
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.dispatchEvent("disconnect", {
        chart: this.chart
      });
      if (this.chart) {
        this.chart.destroy();
        this.chart = null;
      }
    }
    /**
     * If the underlying data or options change, let's update the chart!
     */
  }, {
    key: "viewValueChanged",
    value: function viewValueChanged() {
      if (this.chart) {
        var viewValue = {
          data: this.viewValue.data,
          options: this.viewValue.options
        };
        if (Array.isArray(viewValue.options) && 0 === viewValue.options.length) {
          viewValue.options = {};
        }
        this.dispatchEvent("view-value-change", viewValue);
        this.chart.data = viewValue.data;
        this.chart.options = viewValue.options;
        this.chart.update();
        var parentElement = this.element.parentElement;
        if (parentElement && this.chart.options.responsive) {
          var originalWidth = parentElement.style.width;
          parentElement.style.width = "".concat(parentElement.offsetWidth + 1, "px");
          setTimeout(function () {
            parentElement.style.width = originalWidth;
          }, 0);
        }
      }
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: "chartjs"
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_28__.Controller);
controller_default.values = {
  view: Object
};


/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live.min.css":
/*!*******************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live.min.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js":
/*!*************************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live_controller.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component),
/* harmony export */   "default": () => (/* binding */ LiveControllerDefault),
/* harmony export */   getComponent: () => (/* binding */ getComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_parse_float_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.number.parse-float.js */ "./node_modules/core-js/modules/es.number.parse-float.js");
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! core-js/modules/esnext.iterator.reduce.js */ "./node_modules/core-js/modules/esnext.iterator.reduce.js");
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! core-js/modules/esnext.iterator.some.js */ "./node_modules/core-js/modules/esnext.iterator.some.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ "./node_modules/core-js/modules/web.url-search-params.delete.js");
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ "./node_modules/core-js/modules/web.url-search-params.has.js");
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ "./node_modules/core-js/modules/web.url-search-params.size.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
















































































function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// src/live_controller.ts


// src/Backend/BackendRequest.ts
var BackendRequest_default = /*#__PURE__*/function () {
  function BackendRequest_default(promise, actions, updateModels) {
    var _this = this;
    _classCallCheck(this, BackendRequest_default);
    this.isResolved = false;
    this.promise = promise;
    this.promise.then(function (response) {
      _this.isResolved = true;
      return response;
    });
    this.actions = actions;
    this.updatedModels = updateModels;
  }
  /**
   * Does this BackendRequest contain at least on action in targetedActions?
   */
  return _createClass(BackendRequest_default, [{
    key: "containsOneOfActions",
    value: function containsOneOfActions(targetedActions) {
      return this.actions.filter(function (action) {
        return targetedActions.includes(action);
      }).length > 0;
    }
    /**
     * Does this BackendRequest includes updates for any of these models?
     */
  }, {
    key: "areAnyModelsUpdated",
    value: function areAnyModelsUpdated(targetedModels) {
      return this.updatedModels.filter(function (model) {
        return targetedModels.includes(model);
      }).length > 0;
    }
  }]);
}();

// src/Backend/RequestBuilder.ts
var RequestBuilder_default = /*#__PURE__*/function () {
  function RequestBuilder_default(url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "post";
    _classCallCheck(this, RequestBuilder_default);
    this.url = url;
    this.method = method;
  }
  return _createClass(RequestBuilder_default, [{
    key: "buildRequest",
    value: function buildRequest(props, actions, updated, children, updatedPropsFromParent, files) {
      var splitUrl = this.url.split("?");
      var _splitUrl = _slicedToArray(splitUrl, 1),
        url = _splitUrl[0];
      var _splitUrl2 = _slicedToArray(splitUrl, 2),
        queryString = _splitUrl2[1];
      var params = new URLSearchParams(queryString || "");
      var fetchOptions = {};
      fetchOptions.headers = {
        Accept: "application/vnd.live-component+html",
        "X-Requested-With": "XMLHttpRequest",
        "X-Live-Url": window.location.pathname + window.location.search
      };
      var totalFiles = Object.entries(files).reduce(function (total, current) {
        return total + current.length;
      }, 0);
      var hasFingerprints = Object.keys(children).length > 0;
      if (actions.length === 0 && totalFiles === 0 && this.method === "get" && this.willDataFitInUrl(JSON.stringify(props), JSON.stringify(updated), params, JSON.stringify(children), JSON.stringify(updatedPropsFromParent))) {
        params.set("props", JSON.stringify(props));
        params.set("updated", JSON.stringify(updated));
        if (Object.keys(updatedPropsFromParent).length > 0) {
          params.set("propsFromParent", JSON.stringify(updatedPropsFromParent));
        }
        if (hasFingerprints) {
          params.set("children", JSON.stringify(children));
        }
        fetchOptions.method = "GET";
      } else {
        fetchOptions.method = "POST";
        var requestData = {
          props: props,
          updated: updated
        };
        if (Object.keys(updatedPropsFromParent).length > 0) {
          requestData.propsFromParent = updatedPropsFromParent;
        }
        if (hasFingerprints) {
          requestData.children = children;
        }
        if (actions.length > 0) {
          if (actions.length === 1) {
            requestData.args = actions[0].args;
            url += "/".concat(encodeURIComponent(actions[0].name));
          } else {
            url += "/_batch";
            requestData.actions = actions;
          }
        }
        var formData = new FormData();
        formData.append("data", JSON.stringify(requestData));
        for (var _i = 0, _Object$entries = Object.entries(files); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          var length = value.length;
          for (var i = 0; i < length; ++i) {
            formData.append(key, value[i]);
          }
        }
        fetchOptions.body = formData;
      }
      var paramsString = params.toString();
      return {
        url: "".concat(url).concat(paramsString.length > 0 ? "?".concat(paramsString) : ""),
        fetchOptions: fetchOptions
      };
    }
  }, {
    key: "willDataFitInUrl",
    value: function willDataFitInUrl(propsJson, updatedJson, params, childrenJson, propsFromParentJson) {
      var urlEncodedJsonData = new URLSearchParams(propsJson + updatedJson + childrenJson + propsFromParentJson).toString();
      return (urlEncodedJsonData + params.toString()).length < 1500;
    }
  }]);
}();

// src/Backend/Backend.ts
var Backend_default = /*#__PURE__*/function () {
  function Backend_default(url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "post";
    _classCallCheck(this, Backend_default);
    this.requestBuilder = new RequestBuilder_default(url, method);
  }
  return _createClass(Backend_default, [{
    key: "makeRequest",
    value: function makeRequest(props, actions, updated, children, updatedPropsFromParent, files) {
      var _this$requestBuilder$ = this.requestBuilder.buildRequest(props, actions, updated, children, updatedPropsFromParent, files),
        url = _this$requestBuilder$.url,
        fetchOptions = _this$requestBuilder$.fetchOptions;
      return new BackendRequest_default(fetch(url, fetchOptions), actions.map(function (backendAction) {
        return backendAction.name;
      }), Object.keys(updated));
    }
  }]);
}();

// src/Backend/BackendResponse.ts
var BackendResponse_default = /*#__PURE__*/function () {
  function BackendResponse_default(response) {
    _classCallCheck(this, BackendResponse_default);
    this.response = response;
  }
  return _createClass(BackendResponse_default, [{
    key: "getBody",
    value: function () {
      var _getBody = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (this.body) {
                _context.n = 2;
                break;
              }
              _context.n = 1;
              return this.response.text();
            case 1:
              this.body = _context.v;
            case 2:
              return _context.a(2, this.body);
          }
        }, _callee, this);
      }));
      function getBody() {
        return _getBody.apply(this, arguments);
      }
      return getBody;
    }()
  }, {
    key: "getLiveUrl",
    value: function getLiveUrl() {
      if (void 0 === this.liveUrl) {
        this.liveUrl = this.response.headers.get("X-Live-Url");
      }
      return this.liveUrl;
    }
  }]);
}();

// src/Util/getElementAsTagText.ts
function getElementAsTagText(element) {
  return element.innerHTML ? element.outerHTML.slice(0, element.outerHTML.indexOf(element.innerHTML)) : element.outerHTML;
}

// src/ComponentRegistry.ts
var componentMapByElement = /* @__PURE__ */new WeakMap();
var componentMapByComponent = /* @__PURE__ */new Map();
var registerComponent = function registerComponent(component) {
  componentMapByElement.set(component.element, component);
  componentMapByComponent.set(component, component.name);
};
var unregisterComponent = function unregisterComponent(component) {
  componentMapByElement["delete"](component.element);
  componentMapByComponent["delete"](component);
};
var getComponent = function getComponent(element) {
  return new Promise(function (resolve, reject) {
    var count = 0;
    var maxCount = 10;
    var interval = setInterval(function () {
      var component = componentMapByElement.get(element);
      if (component) {
        clearInterval(interval);
        resolve(component);
      }
      count++;
      if (count > maxCount) {
        clearInterval(interval);
        reject(new Error("Component not found for element ".concat(getElementAsTagText(element))));
      }
    }, 5);
  });
};
var findComponents = function findComponents(currentComponent, onlyParents, onlyMatchName) {
  var components = [];
  componentMapByComponent.forEach(function (componentName, component) {
    if (onlyParents && (currentComponent === component || !component.element.contains(currentComponent.element))) {
      return;
    }
    if (onlyMatchName && componentName !== onlyMatchName) {
      return;
    }
    components.push(component);
  });
  return components;
};
var findChildren = function findChildren(currentComponent) {
  var children = [];
  componentMapByComponent.forEach(function (componentName, component) {
    if (currentComponent === component) {
      return;
    }
    if (!currentComponent.element.contains(component.element)) {
      return;
    }
    var foundChildComponent = false;
    componentMapByComponent.forEach(function (childComponentName, childComponent) {
      if (foundChildComponent) {
        return;
      }
      if (childComponent === component) {
        return;
      }
      if (childComponent.element.contains(component.element)) {
        foundChildComponent = true;
      }
    });
    children.push(component);
  });
  return children;
};
var findParent = function findParent(currentComponent) {
  var parentElement = currentComponent.element.parentElement;
  while (parentElement) {
    var component = componentMapByElement.get(parentElement);
    if (component) {
      return component;
    }
    parentElement = parentElement.parentElement;
  }
  return null;
};

// src/Directive/directives_parser.ts
function parseDirectives(content) {
  var directives = [];
  if (!content) {
    return directives;
  }
  var currentActionName = "";
  var currentArgumentValue = "";
  var currentArguments = [];
  var currentModifiers = [];
  var state = "action";
  var getLastActionName = function getLastActionName() {
    if (currentActionName) {
      return currentActionName;
    }
    if (directives.length === 0) {
      throw new Error("Could not find any directives");
    }
    return directives[directives.length - 1].action;
  };
  var pushInstruction = function pushInstruction() {
    directives.push({
      action: currentActionName,
      args: currentArguments,
      modifiers: currentModifiers,
      getString: function getString() {
        return content;
      }
    });
    currentActionName = "";
    currentArgumentValue = "";
    currentArguments = [];
    currentModifiers = [];
    state = "action";
  };
  var pushArgument = function pushArgument() {
    currentArguments.push(currentArgumentValue.trim());
    currentArgumentValue = "";
  };
  var pushModifier = function pushModifier() {
    if (currentArguments.length > 1) {
      throw new Error("The modifier \"".concat(currentActionName, "()\" does not support multiple arguments."));
    }
    currentModifiers.push({
      name: currentActionName,
      value: currentArguments.length > 0 ? currentArguments[0] : null
    });
    currentActionName = "";
    currentArguments = [];
    state = "action";
  };
  for (var i = 0; i < content.length; i++) {
    var _char = content[i];
    switch (state) {
      case "action":
        if (_char === "(") {
          state = "arguments";
          break;
        }
        if (_char === " ") {
          if (currentActionName) {
            pushInstruction();
          }
          break;
        }
        if (_char === "|") {
          pushModifier();
          break;
        }
        currentActionName += _char;
        break;
      case "arguments":
        if (_char === ")") {
          pushArgument();
          state = "after_arguments";
          break;
        }
        if (_char === ",") {
          pushArgument();
          break;
        }
        currentArgumentValue += _char;
        break;
      case "after_arguments":
        if (_char === "|") {
          pushModifier();
          break;
        }
        if (_char !== " ") {
          throw new Error("Missing space after ".concat(getLastActionName(), "()"));
        }
        pushInstruction();
        break;
    }
  }
  switch (state) {
    case "action":
    case "after_arguments":
      if (currentActionName) {
        pushInstruction();
      }
      break;
    default:
      throw new Error("Did you forget to add a closing \")\" after \"".concat(currentActionName, "\"?"));
  }
  return directives;
}

// src/string_utils.ts
function combineSpacedArray(parts) {
  var finalParts = [];
  parts.forEach(function (part) {
    finalParts.push.apply(finalParts, _toConsumableArray(trimAll(part).split(" ")));
  });
  return finalParts;
}
function trimAll(str) {
  return str.replace(/[\s]+/g, " ").trim();
}
function normalizeModelName(model) {
  return model.replace(/\[]$/, "").split("[").map(function (s) {
    return s.replace("]", "");
  }).join(".");
}

// src/dom_utils.ts
function getValueFromElement(element, valueStore) {
  if (element instanceof HTMLInputElement) {
    if (element.type === "checkbox") {
      var modelNameData = getModelDirectiveFromElement(element, false);
      if (modelNameData !== null) {
        var modelValue = valueStore.get(modelNameData.action);
        if (Array.isArray(modelValue)) {
          return getMultipleCheckboxValue(element, modelValue);
        }
        if (Object(modelValue) === modelValue) {
          return getMultipleCheckboxValue(element, Object.values(modelValue));
        }
      }
      if (element.hasAttribute("value")) {
        return element.checked ? element.getAttribute("value") : null;
      }
      return element.checked;
    }
    return inputValue(element);
  }
  if (element instanceof HTMLSelectElement) {
    if (element.multiple) {
      return Array.from(element.selectedOptions).map(function (el) {
        return el.value;
      });
    }
    return element.value;
  }
  if (element.hasAttribute("data-value")) {
    return element.dataset.value;
  }
  if ("value" in element) {
    return element.value;
  }
  if (element.hasAttribute("value")) {
    return element.getAttribute("value");
  }
  return null;
}
function setValueOnElement(element, value) {
  if (element instanceof HTMLInputElement) {
    if (element.type === "file") {
      return;
    }
    if (element.type === "radio") {
      element.checked = element.value == value;
      return;
    }
    if (element.type === "checkbox") {
      if (Array.isArray(value)) {
        element.checked = value.some(function (val) {
          return val == element.value;
        });
      } else if (element.hasAttribute("value")) {
        element.checked = element.value == value;
      } else {
        element.checked = value;
      }
      return;
    }
  }
  if (element instanceof HTMLSelectElement) {
    var arrayWrappedValue = [].concat(value).map(function (value2) {
      return "".concat(value2);
    });
    Array.from(element.options).forEach(function (option) {
      option.selected = arrayWrappedValue.includes(option.value);
    });
    return;
  }
  value = value === void 0 ? "" : value;
  element.value = value;
}
function getAllModelDirectiveFromElements(element) {
  if (!element.dataset.model) {
    return [];
  }
  var directives = parseDirectives(element.dataset.model);
  directives.forEach(function (directive) {
    if (directive.args.length > 0) {
      throw new Error("The data-model=\"".concat(element.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
    }
    directive.action = normalizeModelName(directive.action);
  });
  return directives;
}
function getModelDirectiveFromElement(element) {
  var throwOnMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dataModelDirectives = getAllModelDirectiveFromElements(element);
  if (dataModelDirectives.length > 0) {
    return dataModelDirectives[0];
  }
  if (element.getAttribute("name")) {
    var formElement = element.closest("form");
    if (formElement && "model" in formElement.dataset) {
      var directives = parseDirectives(formElement.dataset.model || "*");
      var directive = directives[0];
      if (directive.args.length > 0) {
        throw new Error("The data-model=\"".concat(formElement.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
      }
      directive.action = normalizeModelName(element.getAttribute("name"));
      return directive;
    }
  }
  if (!throwOnMissing) {
    return null;
  }
  throw new Error("Cannot determine the model name for \"".concat(getElementAsTagText(element), "\": the element must either have a \"data-model\" (or \"name\" attribute living inside a <form data-model=\"*\">)."));
}
function elementBelongsToThisComponent(element, component) {
  if (component.element === element) {
    return true;
  }
  if (!component.element.contains(element)) {
    return false;
  }
  var closestLiveComponent = element.closest('[data-controller~="live"]');
  return closestLiveComponent === component.element;
}
function cloneHTMLElement(element) {
  var newElement = element.cloneNode(true);
  if (!(newElement instanceof HTMLElement)) {
    throw new Error("Could not clone element");
  }
  return newElement;
}
function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  if (template.content.childElementCount > 1) {
    throw new Error("Component HTML contains ".concat(template.content.childElementCount, " elements, but only 1 root element is allowed."));
  }
  var child = template.content.firstElementChild;
  if (!child) {
    throw new Error("Child not found");
  }
  if (!(child instanceof HTMLElement)) {
    throw new Error("Created element is not an HTMLElement: ".concat(html.trim()));
  }
  return child;
}
var getMultipleCheckboxValue = function getMultipleCheckboxValue(element, currentValues) {
  var finalValues = _toConsumableArray(currentValues);
  var value = inputValue(element);
  var index = currentValues.indexOf(value);
  if (element.checked) {
    if (index === -1) {
      finalValues.push(value);
    }
    return finalValues;
  }
  if (index > -1) {
    finalValues.splice(index, 1);
  }
  return finalValues;
};
var inputValue = function inputValue(element) {
  return element.dataset.value ? element.dataset.value : element.value;
};
function isTextualInputElement(el) {
  return el instanceof HTMLInputElement && ["text", "email", "password", "search", "tel", "url"].includes(el.type);
}
function isTextareaElement(el) {
  return el instanceof HTMLTextAreaElement;
}
function isNumericalInputElement(element) {
  return element instanceof HTMLInputElement && ["number", "range"].includes(element.type);
}

// src/HookManager.ts
var HookManager_default = /*#__PURE__*/function () {
  function HookManager_default() {
    _classCallCheck(this, HookManager_default);
    this.hooks = /* @__PURE__ */new Map();
  }
  return _createClass(HookManager_default, [{
    key: "register",
    value: function register(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      hooks.push(callback);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "unregister",
    value: function unregister(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      var index = hooks.indexOf(callback);
      if (index === -1) {
        return;
      }
      hooks.splice(index, 1);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "triggerHook",
    value: function triggerHook(hookName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var hooks = this.hooks.get(hookName) || [];
      hooks.forEach(function (callback) {
        return callback.apply(void 0, args);
      });
    }
  }]);
}();

// ../../../node_modules/.pnpm/idiomorph@0.3.0/node_modules/idiomorph/dist/idiomorph.esm.js
var Idiomorph = function () {
  "use strict";

  var EMPTY_SET = /* @__PURE__ */new Set();
  var defaults = {
    morphStyle: "outerHTML",
    callbacks: {
      beforeNodeAdded: noOp,
      afterNodeAdded: noOp,
      beforeNodeMorphed: noOp,
      afterNodeMorphed: noOp,
      beforeNodeRemoved: noOp,
      afterNodeRemoved: noOp,
      beforeAttributeUpdated: noOp
    },
    head: {
      style: "merge",
      shouldPreserve: function shouldPreserve(elt) {
        return elt.getAttribute("im-preserve") === "true";
      },
      shouldReAppend: function shouldReAppend(elt) {
        return elt.getAttribute("im-re-append") === "true";
      },
      shouldRemove: noOp,
      afterHeadMorphed: noOp
    }
  };
  function morph(oldNode, newContent) {
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (oldNode instanceof Document) {
      oldNode = oldNode.documentElement;
    }
    if (typeof newContent === "string") {
      newContent = parseContent(newContent);
    }
    var normalizedContent = normalizeContent(newContent);
    var ctx = createMorphContext(oldNode, normalizedContent, config);
    return morphNormalizedContent(oldNode, normalizedContent, ctx);
  }
  function morphNormalizedContent(oldNode, normalizedNewContent, ctx) {
    if (ctx.head.block) {
      var oldHead = oldNode.querySelector("head");
      var newHead = normalizedNewContent.querySelector("head");
      if (oldHead && newHead) {
        var promises = handleHeadElement(newHead, oldHead, ctx);
        Promise.all(promises).then(function () {
          morphNormalizedContent(oldNode, normalizedNewContent, Object.assign(ctx, {
            head: {
              block: false,
              ignore: true
            }
          }));
        });
        return;
      }
    }
    if (ctx.morphStyle === "innerHTML") {
      morphChildren(normalizedNewContent, oldNode, ctx);
      return oldNode.children;
    } else if (ctx.morphStyle === "outerHTML" || ctx.morphStyle == null) {
      var bestMatch = findBestNodeMatch(normalizedNewContent, oldNode, ctx);
      var previousSibling = bestMatch === null || bestMatch === void 0 ? void 0 : bestMatch.previousSibling;
      var nextSibling = bestMatch === null || bestMatch === void 0 ? void 0 : bestMatch.nextSibling;
      var morphedNode = morphOldNodeTo(oldNode, bestMatch, ctx);
      if (bestMatch) {
        return insertSiblings(previousSibling, morphedNode, nextSibling);
      } else {
        return [];
      }
    } else {
      throw "Do not understand how to morph style " + ctx.morphStyle;
    }
  }
  function ignoreValueOfActiveElement(possibleActiveElement, ctx) {
    return ctx.ignoreActiveValue && possibleActiveElement === document.activeElement;
  }
  function morphOldNodeTo(oldNode, newContent, ctx) {
    if (ctx.ignoreActive && oldNode === document.activeElement) {} else if (newContent == null) {
      if (ctx.callbacks.beforeNodeRemoved(oldNode) === false) return oldNode;
      oldNode.remove();
      ctx.callbacks.afterNodeRemoved(oldNode);
      return null;
    } else if (!isSoftMatch(oldNode, newContent)) {
      if (ctx.callbacks.beforeNodeRemoved(oldNode) === false) return oldNode;
      if (ctx.callbacks.beforeNodeAdded(newContent) === false) return oldNode;
      oldNode.parentElement.replaceChild(newContent, oldNode);
      ctx.callbacks.afterNodeAdded(newContent);
      ctx.callbacks.afterNodeRemoved(oldNode);
      return newContent;
    } else {
      if (ctx.callbacks.beforeNodeMorphed(oldNode, newContent) === false) return oldNode;
      if (oldNode instanceof HTMLHeadElement && ctx.head.ignore) {} else if (oldNode instanceof HTMLHeadElement && ctx.head.style !== "morph") {
        handleHeadElement(newContent, oldNode, ctx);
      } else {
        syncNodeFrom(newContent, oldNode, ctx);
        if (!ignoreValueOfActiveElement(oldNode, ctx)) {
          morphChildren(newContent, oldNode, ctx);
        }
      }
      ctx.callbacks.afterNodeMorphed(oldNode, newContent);
      return oldNode;
    }
  }
  function morphChildren(newParent, oldParent, ctx) {
    var nextNewChild = newParent.firstChild;
    var insertionPoint = oldParent.firstChild;
    var newChild;
    while (nextNewChild) {
      newChild = nextNewChild;
      nextNewChild = newChild.nextSibling;
      if (insertionPoint == null) {
        if (ctx.callbacks.beforeNodeAdded(newChild) === false) return;
        oldParent.appendChild(newChild);
        ctx.callbacks.afterNodeAdded(newChild);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }
      if (isIdSetMatch(newChild, insertionPoint, ctx)) {
        morphOldNodeTo(insertionPoint, newChild, ctx);
        insertionPoint = insertionPoint.nextSibling;
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }
      var idSetMatch = findIdSetMatch(newParent, oldParent, newChild, insertionPoint, ctx);
      if (idSetMatch) {
        insertionPoint = removeNodesBetween(insertionPoint, idSetMatch, ctx);
        morphOldNodeTo(idSetMatch, newChild, ctx);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }
      var softMatch = findSoftMatch(newParent, oldParent, newChild, insertionPoint, ctx);
      if (softMatch) {
        insertionPoint = removeNodesBetween(insertionPoint, softMatch, ctx);
        morphOldNodeTo(softMatch, newChild, ctx);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }
      if (ctx.callbacks.beforeNodeAdded(newChild) === false) return;
      oldParent.insertBefore(newChild, insertionPoint);
      ctx.callbacks.afterNodeAdded(newChild);
      removeIdsFromConsideration(ctx, newChild);
    }
    while (insertionPoint !== null) {
      var tempNode = insertionPoint;
      insertionPoint = insertionPoint.nextSibling;
      removeNode(tempNode, ctx);
    }
  }
  function ignoreAttribute(attr, to, updateType, ctx) {
    if (attr === "value" && ctx.ignoreActiveValue && to === document.activeElement) {
      return true;
    }
    return ctx.callbacks.beforeAttributeUpdated(attr, to, updateType) === false;
  }
  function syncNodeFrom(from, to, ctx) {
    var type = from.nodeType;
    if (type === 1) {
      var fromAttributes = from.attributes;
      var toAttributes = to.attributes;
      var _iterator = _createForOfIteratorHelper(fromAttributes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var fromAttribute = _step.value;
          if (ignoreAttribute(fromAttribute.name, to, "update", ctx)) {
            continue;
          }
          if (to.getAttribute(fromAttribute.name) !== fromAttribute.value) {
            to.setAttribute(fromAttribute.name, fromAttribute.value);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      for (var i = toAttributes.length - 1; 0 <= i; i--) {
        var toAttribute = toAttributes[i];
        if (ignoreAttribute(toAttribute.name, to, "remove", ctx)) {
          continue;
        }
        if (!from.hasAttribute(toAttribute.name)) {
          to.removeAttribute(toAttribute.name);
        }
      }
    }
    if (type === 8 || type === 3) {
      if (to.nodeValue !== from.nodeValue) {
        to.nodeValue = from.nodeValue;
      }
    }
    if (!ignoreValueOfActiveElement(to, ctx)) {
      syncInputValue(from, to, ctx);
    }
  }
  function syncBooleanAttribute(from, to, attributeName, ctx) {
    if (from[attributeName] !== to[attributeName]) {
      var ignoreUpdate = ignoreAttribute(attributeName, to, "update", ctx);
      if (!ignoreUpdate) {
        to[attributeName] = from[attributeName];
      }
      if (from[attributeName]) {
        if (!ignoreUpdate) {
          to.setAttribute(attributeName, from[attributeName]);
        }
      } else {
        if (!ignoreAttribute(attributeName, to, "remove", ctx)) {
          to.removeAttribute(attributeName);
        }
      }
    }
  }
  function syncInputValue(from, to, ctx) {
    if (from instanceof HTMLInputElement && to instanceof HTMLInputElement && from.type !== "file") {
      var fromValue = from.value;
      var toValue = to.value;
      syncBooleanAttribute(from, to, "checked", ctx);
      syncBooleanAttribute(from, to, "disabled", ctx);
      if (!from.hasAttribute("value")) {
        if (!ignoreAttribute("value", to, "remove", ctx)) {
          to.value = "";
          to.removeAttribute("value");
        }
      } else if (fromValue !== toValue) {
        if (!ignoreAttribute("value", to, "update", ctx)) {
          to.setAttribute("value", fromValue);
          to.value = fromValue;
        }
      }
    } else if (from instanceof HTMLOptionElement) {
      syncBooleanAttribute(from, to, "selected", ctx);
    } else if (from instanceof HTMLTextAreaElement && to instanceof HTMLTextAreaElement) {
      var _fromValue = from.value;
      var _toValue = to.value;
      if (ignoreAttribute("value", to, "update", ctx)) {
        return;
      }
      if (_fromValue !== _toValue) {
        to.value = _fromValue;
      }
      if (to.firstChild && to.firstChild.nodeValue !== _fromValue) {
        to.firstChild.nodeValue = _fromValue;
      }
    }
  }
  function handleHeadElement(newHeadTag, currentHead, ctx) {
    var added = [];
    var removed = [];
    var preserved = [];
    var nodesToAppend = [];
    var headMergeStyle = ctx.head.style;
    var srcToNewHeadNodes = /* @__PURE__ */new Map();
    var _iterator2 = _createForOfIteratorHelper(newHeadTag.children),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var newHeadChild = _step2.value;
        srcToNewHeadNodes.set(newHeadChild.outerHTML, newHeadChild);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(currentHead.children),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var currentHeadElt = _step3.value;
        var inNewContent = srcToNewHeadNodes.has(currentHeadElt.outerHTML);
        var isReAppended = ctx.head.shouldReAppend(currentHeadElt);
        var isPreserved = ctx.head.shouldPreserve(currentHeadElt);
        if (inNewContent || isPreserved) {
          if (isReAppended) {
            removed.push(currentHeadElt);
          } else {
            srcToNewHeadNodes["delete"](currentHeadElt.outerHTML);
            preserved.push(currentHeadElt);
          }
        } else {
          if (headMergeStyle === "append") {
            if (isReAppended) {
              removed.push(currentHeadElt);
              nodesToAppend.push(currentHeadElt);
            }
          } else {
            if (ctx.head.shouldRemove(currentHeadElt) !== false) {
              removed.push(currentHeadElt);
            }
          }
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    nodesToAppend.push.apply(nodesToAppend, _toConsumableArray(srcToNewHeadNodes.values()));
    log("to append: ", nodesToAppend);
    var promises = [];
    var _loop = function _loop() {
      var newNode = _nodesToAppend[_i2];
      log("adding: ", newNode);
      var newElt = document.createRange().createContextualFragment(newNode.outerHTML).firstChild;
      log(newElt);
      if (ctx.callbacks.beforeNodeAdded(newElt) !== false) {
        if (newElt.href || newElt.src) {
          var resolve = null;
          var promise = new Promise(function (_resolve) {
            resolve = _resolve;
          });
          newElt.addEventListener("load", function () {
            resolve();
          });
          promises.push(promise);
        }
        currentHead.appendChild(newElt);
        ctx.callbacks.afterNodeAdded(newElt);
        added.push(newElt);
      }
    };
    for (var _i2 = 0, _nodesToAppend = nodesToAppend; _i2 < _nodesToAppend.length; _i2++) {
      _loop();
    }
    for (var _i3 = 0, _removed = removed; _i3 < _removed.length; _i3++) {
      var removedElement = _removed[_i3];
      if (ctx.callbacks.beforeNodeRemoved(removedElement) !== false) {
        currentHead.removeChild(removedElement);
        ctx.callbacks.afterNodeRemoved(removedElement);
      }
    }
    ctx.head.afterHeadMorphed(currentHead, {
      added: added,
      kept: preserved,
      removed: removed
    });
    return promises;
  }
  function log() {}
  function noOp() {}
  function mergeDefaults(config) {
    var finalConfig = {};
    Object.assign(finalConfig, defaults);
    Object.assign(finalConfig, config);
    finalConfig.callbacks = {};
    Object.assign(finalConfig.callbacks, defaults.callbacks);
    Object.assign(finalConfig.callbacks, config.callbacks);
    finalConfig.head = {};
    Object.assign(finalConfig.head, defaults.head);
    Object.assign(finalConfig.head, config.head);
    return finalConfig;
  }
  function createMorphContext(oldNode, newContent, config) {
    config = mergeDefaults(config);
    return {
      target: oldNode,
      newContent: newContent,
      config: config,
      morphStyle: config.morphStyle,
      ignoreActive: config.ignoreActive,
      ignoreActiveValue: config.ignoreActiveValue,
      idMap: createIdMap(oldNode, newContent),
      deadIds: /* @__PURE__ */new Set(),
      callbacks: config.callbacks,
      head: config.head
    };
  }
  function isIdSetMatch(node1, node2, ctx) {
    if (node1 == null || node2 == null) {
      return false;
    }
    if (node1.nodeType === node2.nodeType && node1.tagName === node2.tagName) {
      if (node1.id !== "" && node1.id === node2.id) {
        return true;
      } else {
        return getIdIntersectionCount(ctx, node1, node2) > 0;
      }
    }
    return false;
  }
  function isSoftMatch(node1, node2) {
    if (node1 == null || node2 == null) {
      return false;
    }
    return node1.nodeType === node2.nodeType && node1.tagName === node2.tagName;
  }
  function removeNodesBetween(startInclusive, endExclusive, ctx) {
    while (startInclusive !== endExclusive) {
      var tempNode = startInclusive;
      startInclusive = startInclusive.nextSibling;
      removeNode(tempNode, ctx);
    }
    removeIdsFromConsideration(ctx, endExclusive);
    return endExclusive.nextSibling;
  }
  function findIdSetMatch(newContent, oldParent, newChild, insertionPoint, ctx) {
    var newChildPotentialIdCount = getIdIntersectionCount(ctx, newChild, oldParent);
    var potentialMatch = null;
    if (newChildPotentialIdCount > 0) {
      var potentialMatch2 = insertionPoint;
      var otherMatchCount = 0;
      while (potentialMatch2 != null) {
        if (isIdSetMatch(newChild, potentialMatch2, ctx)) {
          return potentialMatch2;
        }
        otherMatchCount += getIdIntersectionCount(ctx, potentialMatch2, newContent);
        if (otherMatchCount > newChildPotentialIdCount) {
          return null;
        }
        potentialMatch2 = potentialMatch2.nextSibling;
      }
    }
    return potentialMatch;
  }
  function findSoftMatch(newContent, oldParent, newChild, insertionPoint, ctx) {
    var potentialSoftMatch = insertionPoint;
    var nextSibling = newChild.nextSibling;
    var siblingSoftMatchCount = 0;
    while (potentialSoftMatch != null) {
      if (getIdIntersectionCount(ctx, potentialSoftMatch, newContent) > 0) {
        return null;
      }
      if (isSoftMatch(newChild, potentialSoftMatch)) {
        return potentialSoftMatch;
      }
      if (isSoftMatch(nextSibling, potentialSoftMatch)) {
        siblingSoftMatchCount++;
        nextSibling = nextSibling.nextSibling;
        if (siblingSoftMatchCount >= 2) {
          return null;
        }
      }
      potentialSoftMatch = potentialSoftMatch.nextSibling;
    }
    return potentialSoftMatch;
  }
  function parseContent(newContent) {
    var parser = new DOMParser();
    var contentWithSvgsRemoved = newContent.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, "");
    if (contentWithSvgsRemoved.match(/<\/html>/) || contentWithSvgsRemoved.match(/<\/head>/) || contentWithSvgsRemoved.match(/<\/body>/)) {
      var content = parser.parseFromString(newContent, "text/html");
      if (contentWithSvgsRemoved.match(/<\/html>/)) {
        content.generatedByIdiomorph = true;
        return content;
      } else {
        var htmlElement = content.firstChild;
        if (htmlElement) {
          htmlElement.generatedByIdiomorph = true;
          return htmlElement;
        } else {
          return null;
        }
      }
    } else {
      var responseDoc = parser.parseFromString("<body><template>" + newContent + "</template></body>", "text/html");
      var _content = responseDoc.body.querySelector("template").content;
      _content.generatedByIdiomorph = true;
      return _content;
    }
  }
  function normalizeContent(newContent) {
    if (newContent == null) {
      var dummyParent = document.createElement("div");
      return dummyParent;
    } else if (newContent.generatedByIdiomorph) {
      return newContent;
    } else if (newContent instanceof Node) {
      var _dummyParent = document.createElement("div");
      _dummyParent.append(newContent);
      return _dummyParent;
    } else {
      var _dummyParent2 = document.createElement("div");
      for (var _i4 = 0, _arr = _toConsumableArray(newContent); _i4 < _arr.length; _i4++) {
        var elt = _arr[_i4];
        _dummyParent2.append(elt);
      }
      return _dummyParent2;
    }
  }
  function insertSiblings(previousSibling, morphedNode, nextSibling) {
    var stack = [];
    var added = [];
    while (previousSibling != null) {
      stack.push(previousSibling);
      previousSibling = previousSibling.previousSibling;
    }
    while (stack.length > 0) {
      var node = stack.pop();
      added.push(node);
      morphedNode.parentElement.insertBefore(node, morphedNode);
    }
    added.push(morphedNode);
    while (nextSibling != null) {
      stack.push(nextSibling);
      added.push(nextSibling);
      nextSibling = nextSibling.nextSibling;
    }
    while (stack.length > 0) {
      morphedNode.parentElement.insertBefore(stack.pop(), morphedNode.nextSibling);
    }
    return added;
  }
  function findBestNodeMatch(newContent, oldNode, ctx) {
    var currentElement;
    currentElement = newContent.firstChild;
    var bestElement = currentElement;
    var score = 0;
    while (currentElement) {
      var newScore = scoreElement(currentElement, oldNode, ctx);
      if (newScore > score) {
        bestElement = currentElement;
        score = newScore;
      }
      currentElement = currentElement.nextSibling;
    }
    return bestElement;
  }
  function scoreElement(node1, node2, ctx) {
    if (isSoftMatch(node1, node2)) {
      return 0.5 + getIdIntersectionCount(ctx, node1, node2);
    }
    return 0;
  }
  function removeNode(tempNode, ctx) {
    removeIdsFromConsideration(ctx, tempNode);
    if (ctx.callbacks.beforeNodeRemoved(tempNode) === false) return;
    tempNode.remove();
    ctx.callbacks.afterNodeRemoved(tempNode);
  }
  function isIdInConsideration(ctx, id) {
    return !ctx.deadIds.has(id);
  }
  function idIsWithinNode(ctx, id, targetNode) {
    var idSet = ctx.idMap.get(targetNode) || EMPTY_SET;
    return idSet.has(id);
  }
  function removeIdsFromConsideration(ctx, node) {
    var idSet = ctx.idMap.get(node) || EMPTY_SET;
    var _iterator4 = _createForOfIteratorHelper(idSet),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var id = _step4.value;
        ctx.deadIds.add(id);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
  function getIdIntersectionCount(ctx, node1, node2) {
    var sourceSet = ctx.idMap.get(node1) || EMPTY_SET;
    var matchCount = 0;
    var _iterator5 = _createForOfIteratorHelper(sourceSet),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var id = _step5.value;
        if (isIdInConsideration(ctx, id) && idIsWithinNode(ctx, id, node2)) {
          ++matchCount;
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return matchCount;
  }
  function populateIdMapForNode(node, idMap) {
    var nodeParent = node.parentElement;
    var idElements = node.querySelectorAll("[id]");
    var _iterator6 = _createForOfIteratorHelper(idElements),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var elt = _step6.value;
        var current = elt;
        while (current !== nodeParent && current != null) {
          var idSet = idMap.get(current);
          if (idSet == null) {
            idSet = /* @__PURE__ */new Set();
            idMap.set(current, idSet);
          }
          idSet.add(elt.id);
          current = current.parentElement;
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }
  function createIdMap(oldContent, newContent) {
    var idMap = /* @__PURE__ */new Map();
    populateIdMapForNode(oldContent, idMap);
    populateIdMapForNode(newContent, idMap);
    return idMap;
  }
  return {
    morph: morph,
    defaults: defaults
  };
}();

// src/normalize_attributes_for_comparison.ts
function normalizeAttributesForComparison(element) {
  var isFileInput = element instanceof HTMLInputElement && element.type === "file";
  if (!isFileInput) {
    if ("value" in element) {
      element.setAttribute("value", element.value);
    } else if (element.hasAttribute("value")) {
      element.setAttribute("value", "");
    }
  }
  Array.from(element.children).forEach(function (child) {
    normalizeAttributesForComparison(child);
  });
}

// src/morphdom.ts
var syncAttributes = function syncAttributes(fromEl, toEl) {
  for (var i = 0; i < fromEl.attributes.length; i++) {
    var attr = fromEl.attributes[i];
    toEl.setAttribute(attr.name, attr.value);
  }
};
function executeMorphdom(rootFromElement, rootToElement, modifiedFieldElements, getElementValue, externalMutationTracker) {
  var originalElementIdsToSwapAfter = [];
  var originalElementsToPreserve = /* @__PURE__ */new Map();
  var markElementAsNeedingPostMorphSwap = function markElementAsNeedingPostMorphSwap(id, replaceWithClone) {
    var oldElement = originalElementsToPreserve.get(id);
    if (!(oldElement instanceof HTMLElement)) {
      throw new Error("Original element with id ".concat(id, " not found"));
    }
    originalElementIdsToSwapAfter.push(id);
    if (!replaceWithClone) {
      return null;
    }
    var clonedOldElement = cloneHTMLElement(oldElement);
    oldElement.replaceWith(clonedOldElement);
    return clonedOldElement;
  };
  rootToElement.querySelectorAll("[data-live-preserve]").forEach(function (newElement) {
    var id = newElement.id;
    if (!id) {
      throw new Error("The data-live-preserve attribute requires an id attribute to be set on the element");
    }
    var oldElement = rootFromElement.querySelector("#".concat(id));
    if (!(oldElement instanceof HTMLElement)) {
      throw new Error("The element with id \"".concat(id, "\" was not found in the original HTML"));
    }
    newElement.removeAttribute("data-live-preserve");
    originalElementsToPreserve.set(id, oldElement);
    syncAttributes(newElement, oldElement);
  });
  Idiomorph.morph(rootFromElement, rootToElement, {
    callbacks: {
      beforeNodeMorphed: function beforeNodeMorphed(fromEl, toEl) {
        var _fromEl$parentElement;
        if (!(fromEl instanceof Element) || !(toEl instanceof Element)) {
          return true;
        }
        if (fromEl === rootFromElement) {
          return true;
        }
        if (fromEl.id && originalElementsToPreserve.has(fromEl.id)) {
          if (fromEl.id === toEl.id) {
            return false;
          }
          var clonedFromEl = markElementAsNeedingPostMorphSwap(fromEl.id, true);
          if (!clonedFromEl) {
            throw new Error("missing clone");
          }
          Idiomorph.morph(clonedFromEl, toEl);
          return false;
        }
        if (fromEl instanceof HTMLElement && toEl instanceof HTMLElement) {
          if (typeof fromEl.__x !== "undefined") {
            if (!window.Alpine) {
              throw new Error("Unable to access Alpine.js though the global window.Alpine variable. Please make sure Alpine.js is loaded before Symfony UX LiveComponent.");
            }
            if (typeof window.Alpine.morph !== "function") {
              throw new Error("Unable to access Alpine.js morph function. Please make sure the Alpine.js Morph plugin is installed and loaded, see https://alpinejs.dev/plugins/morph for more information.");
            }
            window.Alpine.morph(fromEl.__x, toEl);
          }
          if (externalMutationTracker.wasElementAdded(fromEl)) {
            fromEl.insertAdjacentElement("afterend", toEl);
            return false;
          }
          if (modifiedFieldElements.includes(fromEl)) {
            setValueOnElement(toEl, getElementValue(fromEl));
          }
          if (fromEl === document.activeElement && fromEl !== document.body && null !== getModelDirectiveFromElement(fromEl, false)) {
            setValueOnElement(toEl, getElementValue(fromEl));
          }
          var elementChanges = externalMutationTracker.getChangedElement(fromEl);
          if (elementChanges) {
            elementChanges.applyToElement(toEl);
          }
          if (fromEl.nodeName.toUpperCase() !== "OPTION" && fromEl.isEqualNode(toEl)) {
            var normalizedFromEl = cloneHTMLElement(fromEl);
            normalizeAttributesForComparison(normalizedFromEl);
            var normalizedToEl = cloneHTMLElement(toEl);
            normalizeAttributesForComparison(normalizedToEl);
            if (normalizedFromEl.isEqualNode(normalizedToEl)) {
              return false;
            }
          }
        }
        if (fromEl.hasAttribute("data-skip-morph") || fromEl.id && fromEl.id !== toEl.id) {
          fromEl.innerHTML = toEl.innerHTML;
          return true;
        }
        if ((_fromEl$parentElement = fromEl.parentElement) !== null && _fromEl$parentElement !== void 0 && _fromEl$parentElement.hasAttribute("data-skip-morph")) {
          return false;
        }
        return !fromEl.hasAttribute("data-live-ignore");
      },
      beforeNodeRemoved: function beforeNodeRemoved(node) {
        if (!(node instanceof HTMLElement)) {
          return true;
        }
        if (node.id && originalElementsToPreserve.has(node.id)) {
          markElementAsNeedingPostMorphSwap(node.id, false);
          return true;
        }
        if (externalMutationTracker.wasElementAdded(node)) {
          return false;
        }
        return !node.hasAttribute("data-live-ignore");
      }
    }
  });
  originalElementIdsToSwapAfter.forEach(function (id) {
    var newElement = rootFromElement.querySelector("#".concat(id));
    var originalElement = originalElementsToPreserve.get(id);
    if (!(newElement instanceof HTMLElement) || !(originalElement instanceof HTMLElement)) {
      throw new Error("Missing elements.");
    }
    newElement.replaceWith(originalElement);
  });
}

// src/Rendering/ChangingItemsTracker.ts
var ChangingItemsTracker_default = /*#__PURE__*/function () {
  function ChangingItemsTracker_default() {
    _classCallCheck(this, ChangingItemsTracker_default);
    // e.g. a Map with key "color" & value { original: 'previousValue', new: 'newValue' },
    this.changedItems = /* @__PURE__ */new Map();
    this.removedItems = /* @__PURE__ */new Map();
  }
  /**
   * A "null" previousValue means the item was NOT previously present.
   */
  return _createClass(ChangingItemsTracker_default, [{
    key: "setItem",
    value: function setItem(itemName, newValue, previousValue) {
      if (this.removedItems.has(itemName)) {
        var removedRecord = this.removedItems.get(itemName);
        this.removedItems["delete"](itemName);
        if (removedRecord.original === newValue) {
          return;
        }
      }
      if (this.changedItems.has(itemName)) {
        var originalRecord = this.changedItems.get(itemName);
        if (originalRecord.original === newValue) {
          this.changedItems["delete"](itemName);
          return;
        }
        this.changedItems.set(itemName, {
          original: originalRecord.original,
          "new": newValue
        });
        return;
      }
      this.changedItems.set(itemName, {
        original: previousValue,
        "new": newValue
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(itemName, currentValue) {
      var trueOriginalValue = currentValue;
      if (this.changedItems.has(itemName)) {
        var originalRecord = this.changedItems.get(itemName);
        trueOriginalValue = originalRecord.original;
        this.changedItems["delete"](itemName);
        if (trueOriginalValue === null) {
          return;
        }
      }
      if (!this.removedItems.has(itemName)) {
        this.removedItems.set(itemName, {
          original: trueOriginalValue
        });
      }
    }
  }, {
    key: "getChangedItems",
    value: function getChangedItems() {
      return Array.from(this.changedItems, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          value = _ref2[1]["new"];
        return {
          name: name,
          value: value
        };
      });
    }
  }, {
    key: "getRemovedItems",
    value: function getRemovedItems() {
      return Array.from(this.removedItems.keys());
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.changedItems.size === 0 && this.removedItems.size === 0;
    }
  }]);
}();

// src/Rendering/ElementChanges.ts
var ElementChanges = /*#__PURE__*/function () {
  function ElementChanges() {
    _classCallCheck(this, ElementChanges);
    this.addedClasses = /* @__PURE__ */new Set();
    this.removedClasses = /* @__PURE__ */new Set();
    this.styleChanges = new ChangingItemsTracker_default();
    this.attributeChanges = new ChangingItemsTracker_default();
  }
  return _createClass(ElementChanges, [{
    key: "addClass",
    value: function addClass(className) {
      if (!this.removedClasses["delete"](className)) {
        this.addedClasses.add(className);
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      if (!this.addedClasses["delete"](className)) {
        this.removedClasses.add(className);
      }
    }
  }, {
    key: "addStyle",
    value: function addStyle(styleName, newValue, originalValue) {
      this.styleChanges.setItem(styleName, newValue, originalValue);
    }
  }, {
    key: "removeStyle",
    value: function removeStyle(styleName, originalValue) {
      this.styleChanges.removeItem(styleName, originalValue);
    }
  }, {
    key: "addAttribute",
    value: function addAttribute(attributeName, newValue, originalValue) {
      this.attributeChanges.setItem(attributeName, newValue, originalValue);
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(attributeName, originalValue) {
      this.attributeChanges.removeItem(attributeName, originalValue);
    }
  }, {
    key: "getAddedClasses",
    value: function getAddedClasses() {
      return _toConsumableArray(this.addedClasses);
    }
  }, {
    key: "getRemovedClasses",
    value: function getRemovedClasses() {
      return _toConsumableArray(this.removedClasses);
    }
  }, {
    key: "getChangedStyles",
    value: function getChangedStyles() {
      return this.styleChanges.getChangedItems();
    }
  }, {
    key: "getRemovedStyles",
    value: function getRemovedStyles() {
      return this.styleChanges.getRemovedItems();
    }
  }, {
    key: "getChangedAttributes",
    value: function getChangedAttributes() {
      return this.attributeChanges.getChangedItems();
    }
  }, {
    key: "getRemovedAttributes",
    value: function getRemovedAttributes() {
      return this.attributeChanges.getRemovedItems();
    }
  }, {
    key: "applyToElement",
    value: function applyToElement(element) {
      var _element$classList, _element$classList2;
      (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(this.addedClasses));
      (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(this.removedClasses));
      this.styleChanges.getChangedItems().forEach(function (change) {
        element.style.setProperty(change.name, change.value);
        return;
      });
      this.styleChanges.getRemovedItems().forEach(function (styleName) {
        element.style.removeProperty(styleName);
      });
      this.attributeChanges.getChangedItems().forEach(function (change) {
        element.setAttribute(change.name, change.value);
      });
      this.attributeChanges.getRemovedItems().forEach(function (attributeName) {
        element.removeAttribute(attributeName);
      });
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.addedClasses.size === 0 && this.removedClasses.size === 0 && this.styleChanges.isEmpty() && this.attributeChanges.isEmpty();
    }
  }]);
}();

// src/Rendering/ExternalMutationTracker.ts
var ExternalMutationTracker_default = /*#__PURE__*/function () {
  function ExternalMutationTracker_default(element, shouldTrackChangeCallback) {
    _classCallCheck(this, ExternalMutationTracker_default);
    this.changedElements = /* @__PURE__ */new WeakMap();
    /** For testing */
    this.changedElementsCount = 0;
    this.addedElements = [];
    this.removedElements = [];
    this.isStarted = false;
    this.element = element;
    this.shouldTrackChangeCallback = shouldTrackChangeCallback;
    this.mutationObserver = new MutationObserver(this.onMutations.bind(this));
  }
  return _createClass(ExternalMutationTracker_default, [{
    key: "start",
    value: function start() {
      if (this.isStarted) {
        return;
      }
      this.mutationObserver.observe(this.element, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeOldValue: true
      });
      this.isStarted = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.isStarted) {
        this.mutationObserver.disconnect();
        this.isStarted = false;
      }
    }
  }, {
    key: "getChangedElement",
    value: function getChangedElement(element) {
      return this.changedElements.has(element) ? this.changedElements.get(element) : null;
    }
  }, {
    key: "getAddedElements",
    value: function getAddedElements() {
      return this.addedElements;
    }
  }, {
    key: "wasElementAdded",
    value: function wasElementAdded(element) {
      return this.addedElements.includes(element);
    }
    /**
     * Forces any pending mutations to be handled immediately, then clears the queue.
     */
  }, {
    key: "handlePendingChanges",
    value: function handlePendingChanges() {
      this.onMutations(this.mutationObserver.takeRecords());
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var handledAttributeMutations = /* @__PURE__ */new WeakMap();
      var _iterator7 = _createForOfIteratorHelper(mutations),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var mutation = _step7.value;
          var element = mutation.target;
          if (!this.shouldTrackChangeCallback(element)) {
            continue;
          }
          if (this.isElementAddedByTranslation(element)) {
            continue;
          }
          var isChangeInAddedElement = false;
          var _iterator8 = _createForOfIteratorHelper(this.addedElements),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var addedElement = _step8.value;
              if (addedElement.contains(element)) {
                isChangeInAddedElement = true;
                break;
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          if (isChangeInAddedElement) {
            continue;
          }
          switch (mutation.type) {
            case "childList":
              this.handleChildListMutation(mutation);
              break;
            case "attributes":
              if (!handledAttributeMutations.has(element)) {
                handledAttributeMutations.set(element, []);
              }
              if (!handledAttributeMutations.get(element).includes(mutation.attributeName)) {
                this.handleAttributeMutation(mutation);
                handledAttributeMutations.set(element, [].concat(_toConsumableArray(handledAttributeMutations.get(element)), [mutation.attributeName]));
              }
              break;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "handleChildListMutation",
    value: function handleChildListMutation(mutation) {
      var _this2 = this;
      mutation.addedNodes.forEach(function (node) {
        if (!(node instanceof Element)) {
          return;
        }
        if (_this2.removedElements.includes(node)) {
          _this2.removedElements.splice(_this2.removedElements.indexOf(node), 1);
          return;
        }
        if (_this2.isElementAddedByTranslation(node)) {
          return;
        }
        _this2.addedElements.push(node);
      });
      mutation.removedNodes.forEach(function (node) {
        if (!(node instanceof Element)) {
          return;
        }
        if (_this2.addedElements.includes(node)) {
          _this2.addedElements.splice(_this2.addedElements.indexOf(node), 1);
          return;
        }
        _this2.removedElements.push(node);
      });
    }
  }, {
    key: "handleAttributeMutation",
    value: function handleAttributeMutation(mutation) {
      var element = mutation.target;
      if (!this.changedElements.has(element)) {
        this.changedElements.set(element, new ElementChanges());
        this.changedElementsCount++;
      }
      var changedElement = this.changedElements.get(element);
      switch (mutation.attributeName) {
        case "class":
          this.handleClassAttributeMutation(mutation, changedElement);
          break;
        case "style":
          this.handleStyleAttributeMutation(mutation, changedElement);
          break;
        default:
          this.handleGenericAttributeMutation(mutation, changedElement);
      }
      if (changedElement.isEmpty()) {
        this.changedElements["delete"](element);
        this.changedElementsCount--;
      }
    }
  }, {
    key: "handleClassAttributeMutation",
    value: function handleClassAttributeMutation(mutation, elementChanges) {
      var element = mutation.target;
      var previousValue = mutation.oldValue || "";
      var previousValues = previousValue.match(/((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)/g) || [];
      var newValues = [].slice.call(element.classList);
      var addedValues = newValues.filter(function (value) {
        return !previousValues.includes(value);
      });
      var removedValues = previousValues.filter(function (value) {
        return !newValues.includes(value);
      });
      addedValues.forEach(function (value) {
        elementChanges.addClass(value);
      });
      removedValues.forEach(function (value) {
        elementChanges.removeClass(value);
      });
    }
  }, {
    key: "handleStyleAttributeMutation",
    value: function handleStyleAttributeMutation(mutation, elementChanges) {
      var element = mutation.target;
      var previousValue = mutation.oldValue || "";
      var previousStyles = this.extractStyles(previousValue);
      var newValue = element.getAttribute("style") || "";
      var newStyles = this.extractStyles(newValue);
      var addedOrChangedStyles = Object.keys(newStyles).filter(function (key) {
        return previousStyles[key] === void 0 || previousStyles[key] !== newStyles[key];
      });
      var removedStyles = Object.keys(previousStyles).filter(function (key) {
        return !newStyles[key];
      });
      addedOrChangedStyles.forEach(function (style) {
        elementChanges.addStyle(style, newStyles[style], previousStyles[style] === void 0 ? null : previousStyles[style]);
      });
      removedStyles.forEach(function (style) {
        elementChanges.removeStyle(style, previousStyles[style]);
      });
    }
  }, {
    key: "handleGenericAttributeMutation",
    value: function handleGenericAttributeMutation(mutation, elementChanges) {
      var attributeName = mutation.attributeName;
      var element = mutation.target;
      var oldValue = mutation.oldValue;
      var newValue = element.getAttribute(attributeName);
      if (oldValue === attributeName) {
        oldValue = "";
      }
      if (newValue === attributeName) {
        newValue = "";
      }
      if (!element.hasAttribute(attributeName)) {
        if (oldValue === null) {
          return;
        }
        elementChanges.removeAttribute(attributeName, mutation.oldValue);
        return;
      }
      if (newValue === oldValue) {
        return;
      }
      elementChanges.addAttribute(attributeName, element.getAttribute(attributeName), mutation.oldValue);
    }
  }, {
    key: "extractStyles",
    value: function extractStyles(styles) {
      var styleObject = {};
      styles.split(";").forEach(function (style) {
        var parts = style.split(":");
        if (parts.length === 1) {
          return;
        }
        var property = parts[0].trim();
        styleObject[property] = parts.slice(1).join(":").trim();
      });
      return styleObject;
    }
    /**
     * Helps avoid tracking changes by Chrome's translation feature.
     *
     * When Chrome translates, it mutates the dom in a way that triggers MutationObserver.
     * This includes adding new elements wrapped in a <font> tag. This causes live
     * components to incorrectly think that these new elements should persist through
     * re-renders, causing duplicate text.
     */
  }, {
    key: "isElementAddedByTranslation",
    value: function isElementAddedByTranslation(element) {
      return element.tagName === "FONT" && element.getAttribute("style") === "vertical-align: inherit;";
    }
  }]);
}();

// src/Component/UnsyncedInputsTracker.ts
var UnsyncedInputsTracker_default = /*#__PURE__*/function () {
  function UnsyncedInputsTracker_default(component, modelElementResolver) {
    var _this3 = this;
    _classCallCheck(this, UnsyncedInputsTracker_default);
    this.elementEventListeners = [{
      event: "input",
      callback: function callback(event) {
        return _this3.handleInputEvent(event);
      }
    }];
    this.component = component;
    this.modelElementResolver = modelElementResolver;
    this.unsyncedInputs = new UnsyncedInputContainer();
  }
  return _createClass(UnsyncedInputsTracker_default, [{
    key: "activate",
    value: function activate() {
      var _this4 = this;
      this.elementEventListeners.forEach(function (_ref3) {
        var event = _ref3.event,
          callback = _ref3.callback;
        _this4.component.element.addEventListener(event, callback);
      });
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      var _this5 = this;
      this.elementEventListeners.forEach(function (_ref4) {
        var event = _ref4.event,
          callback = _ref4.callback;
        _this5.component.element.removeEventListener(event, callback);
      });
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      this.unsyncedInputs.markModelAsSynced(modelName);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElement(target);
    }
  }, {
    key: "updateModelFromElement",
    value: function updateModelFromElement(element) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error("Could not update model for non HTMLElement");
      }
      var modelName = this.modelElementResolver.getModelName(element);
      this.unsyncedInputs.add(element, modelName);
    }
  }, {
    key: "getUnsyncedInputs",
    value: function getUnsyncedInputs() {
      return this.unsyncedInputs.allUnsyncedInputs();
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return Array.from(this.unsyncedInputs.getUnsyncedModelNames());
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      this.unsyncedInputs.resetUnsyncedFields();
    }
  }]);
}();
var UnsyncedInputContainer = /*#__PURE__*/function () {
  function UnsyncedInputContainer() {
    _classCallCheck(this, UnsyncedInputContainer);
    this.unsyncedNonModelFields = [];
    this.unsyncedModelNames = [];
    this.unsyncedModelFields = /* @__PURE__ */new Map();
  }
  return _createClass(UnsyncedInputContainer, [{
    key: "add",
    value: function add(element) {
      var modelName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (modelName) {
        this.unsyncedModelFields.set(modelName, element);
        if (!this.unsyncedModelNames.includes(modelName)) {
          this.unsyncedModelNames.push(modelName);
        }
        return;
      }
      this.unsyncedNonModelFields.push(element);
    }
    /**
     * Mark all fields as synced, except for those not bound to a model or whose
     * values are still dirty.
     */
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      var _this6 = this;
      this.unsyncedModelFields.forEach(function (value, key) {
        if (!_this6.unsyncedModelNames.includes(key)) {
          _this6.unsyncedModelFields["delete"](key);
        }
      });
    }
  }, {
    key: "allUnsyncedInputs",
    value: function allUnsyncedInputs() {
      return [].concat(_toConsumableArray(this.unsyncedNonModelFields), _toConsumableArray(this.unsyncedModelFields.values()));
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      var index = this.unsyncedModelNames.indexOf(modelName);
      if (index !== -1) {
        this.unsyncedModelNames.splice(index, 1);
      }
    }
    /**
     * Returns a list of models whose fields have been modified, but whose values
     * have not yet been set onto the data store.
     */
  }, {
    key: "getUnsyncedModelNames",
    value: function getUnsyncedModelNames() {
      return this.unsyncedModelNames;
    }
  }]);
}();

// src/data_manipulation_utils.ts
function getDeepData(data, propertyPath) {
  var _parseDeepData = parseDeepData(data, propertyPath),
    currentLevelData = _parseDeepData.currentLevelData,
    finalKey = _parseDeepData.finalKey;
  if (currentLevelData === void 0) {
    return void 0;
  }
  return currentLevelData[finalKey];
}
var parseDeepData = function parseDeepData(data, propertyPath) {
  var finalData = JSON.parse(JSON.stringify(data));
  var currentLevelData = finalData;
  var parts = propertyPath.split(".");
  for (var i = 0; i < parts.length - 1; i++) {
    currentLevelData = currentLevelData[parts[i]];
  }
  var finalKey = parts[parts.length - 1];
  return {
    currentLevelData: currentLevelData,
    finalData: finalData,
    finalKey: finalKey,
    parts: parts
  };
};

// src/Component/ValueStore.ts
var ValueStore_default = /*#__PURE__*/function () {
  function ValueStore_default(props) {
    _classCallCheck(this, ValueStore_default);
    /**
     * Original, read-only props that represent the original component state.
     *
     * @private
     */
    this.props = {};
    /**
     * A list of props that have been "dirty" (changed) since the last request to the server.
     */
    this.dirtyProps = {};
    /**
     * A list of dirty props that were sent to the server, but the response has
     * not yet been received.
     */
    this.pendingProps = {};
    /**
     * A list of props that the parent wants us to update.
     *
     * These will be sent on the next request to the server.
     */
    this.updatedPropsFromParent = {};
    this.props = props;
  }
  /**
   * Returns the props with the given name.
   *
   * This allows for non-normalized model names - e.g.
   * user[firstName] -> user.firstName and also will fetch
   * deeply (fetching the "firstName" sub-key from the "user" key).
   */
  return _createClass(ValueStore_default, [{
    key: "get",
    value: function get(name) {
      var normalizedName = normalizeModelName(name);
      if (this.dirtyProps[normalizedName] !== void 0) {
        return this.dirtyProps[normalizedName];
      }
      if (this.pendingProps[normalizedName] !== void 0) {
        return this.pendingProps[normalizedName];
      }
      if (this.props[normalizedName] !== void 0) {
        return this.props[normalizedName];
      }
      return getDeepData(this.props, normalizedName);
    }
  }, {
    key: "has",
    value: function has(name) {
      return this.get(name) !== void 0;
    }
    /**
     * Sets data back onto the value store.
     *
     * The name can be in the non-normalized format.
     *
     * Returns true if the new value is different from the existing value.
     */
  }, {
    key: "set",
    value: function set(name, value) {
      var normalizedName = normalizeModelName(name);
      if (this.get(normalizedName) === value) {
        return false;
      }
      this.dirtyProps[normalizedName] = value;
      return true;
    }
  }, {
    key: "getOriginalProps",
    value: function getOriginalProps() {
      return _objectSpread({}, this.props);
    }
  }, {
    key: "getDirtyProps",
    value: function getDirtyProps() {
      return _objectSpread({}, this.dirtyProps);
    }
  }, {
    key: "getUpdatedPropsFromParent",
    value: function getUpdatedPropsFromParent() {
      return _objectSpread({}, this.updatedPropsFromParent);
    }
    /**
     * Called when an update request begins.
     */
  }, {
    key: "flushDirtyPropsToPending",
    value: function flushDirtyPropsToPending() {
      this.pendingProps = _objectSpread({}, this.dirtyProps);
      this.dirtyProps = {};
    }
    /**
     * Called when an update request finishes successfully.
     */
  }, {
    key: "reinitializeAllProps",
    value: function reinitializeAllProps(props) {
      this.props = props;
      this.updatedPropsFromParent = {};
      this.pendingProps = {};
    }
    /**
     * Called after an update request failed.
     */
  }, {
    key: "pushPendingPropsBackToDirty",
    value: function pushPendingPropsBackToDirty() {
      this.dirtyProps = _objectSpread(_objectSpread({}, this.pendingProps), this.dirtyProps);
      this.pendingProps = {};
    }
    /**
     * This is used when a parent component is rendering, and it includes
     * a fresh set of props that should be updated on the child component.
     *
     * The server manages returning only the props that should be updated onto
     * the child, so we don't need to worry about that.
     *
     * The props are stored in a different place, because the existing props
     * have their own checksum and these new props have *their* own checksum.
     * So, on the next render, both need to be sent independently.
     *
     * Returns true if any of the props are different.
     */
  }, {
    key: "storeNewPropsFromParent",
    value: function storeNewPropsFromParent(props) {
      var changed = false;
      for (var _i5 = 0, _Object$entries2 = Object.entries(props); _i5 < _Object$entries2.length; _i5++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i5], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        var currentValue = this.get(key);
        if (currentValue !== value) {
          changed = true;
        }
      }
      if (changed) {
        this.updatedPropsFromParent = props;
      }
      return changed;
    }
  }]);
}();

// src/Component/index.ts
var Component = /*#__PURE__*/function () {
  /**
   * @param element The root element
   * @param name    The name of the component
   * @param props   Readonly component props
   * @param listeners Array of event -> action listeners
   * @param id      Some unique id to identify this component. Needed to be a child component
   * @param backend Backend instance for updating
   * @param elementDriver Class to get "model" name from any element.
   */
  function Component(element, name, props, listeners, id, backend, elementDriver) {
    var _this7 = this;
    _classCallCheck(this, Component);
    /**
     * A fingerprint that identifies the props/input that was used on
     * the server to create this component, especially if it was a
     * child component. This is sent back to the server and can be used
     * to determine if any "input" to the child component changed and thus,
     * if the child component needs to be re-rendered.
     */
    this.fingerprint = "";
    this.defaultDebounce = 150;
    this.backendRequest = null;
    /** Actions that are waiting to be executed */
    this.pendingActions = [];
    /** Files that are waiting to be sent */
    this.pendingFiles = {};
    /** Is a request waiting to be made? */
    this.isRequestPending = false;
    /** Current "timeout" before the pending request should be sent. */
    this.requestDebounceTimeout = null;
    this.element = element;
    this.name = name;
    this.backend = backend;
    this.elementDriver = elementDriver;
    this.id = id;
    this.listeners = /* @__PURE__ */new Map();
    listeners.forEach(function (listener) {
      var _this7$listeners$get;
      if (!_this7.listeners.has(listener.event)) {
        _this7.listeners.set(listener.event, []);
      }
      (_this7$listeners$get = _this7.listeners.get(listener.event)) === null || _this7$listeners$get === void 0 || _this7$listeners$get.push(listener.action);
    });
    this.valueStore = new ValueStore_default(props);
    this.unsyncedInputsTracker = new UnsyncedInputsTracker_default(this, elementDriver);
    this.hooks = new HookManager_default();
    this.resetPromise();
    this.externalMutationTracker = new ExternalMutationTracker_default(this.element, function (element2) {
      return elementBelongsToThisComponent(element2, _this7);
    });
    this.externalMutationTracker.start();
  }
  return _createClass(Component, [{
    key: "addPlugin",
    value: function addPlugin(plugin) {
      plugin.attachToComponent(this);
    }
  }, {
    key: "connect",
    value: function connect() {
      registerComponent(this);
      this.hooks.triggerHook("connect", this);
      this.unsyncedInputsTracker.activate();
      this.externalMutationTracker.start();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      unregisterComponent(this);
      this.hooks.triggerHook("disconnect", this);
      this.clearRequestDebounceTimeout();
      this.unsyncedInputsTracker.deactivate();
      this.externalMutationTracker.stop();
    }
  }, {
    key: "on",
    value: function on(hookName, callback) {
      this.hooks.register(hookName, callback);
    }
  }, {
    key: "off",
    value: function off(hookName, callback) {
      this.hooks.unregister(hookName, callback);
    }
  }, {
    key: "set",
    value: function set(model, value) {
      var reRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var promise = this.nextRequestPromise;
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) {
        throw new Error("Invalid model name \"".concat(model, "\"."));
      }
      var isChanged = this.valueStore.set(modelName, value);
      this.hooks.triggerHook("model:set", model, value, this);
      this.unsyncedInputsTracker.markModelAsSynced(modelName);
      if (reRender && isChanged) {
        this.debouncedStartRequest(debounce);
      }
      return promise;
    }
  }, {
    key: "getData",
    value: function getData(model) {
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) {
        throw new Error("Invalid model \"".concat(model, "\"."));
      }
      return this.valueStore.get(modelName);
    }
  }, {
    key: "action",
    value: function action(name) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var debounce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var promise = this.nextRequestPromise;
      this.pendingActions.push({
        name: name,
        args: args
      });
      this.debouncedStartRequest(debounce);
      return promise;
    }
  }, {
    key: "files",
    value: function files(key, input) {
      this.pendingFiles[key] = input;
    }
  }, {
    key: "render",
    value: function render() {
      var promise = this.nextRequestPromise;
      this.tryStartingRequest();
      return promise;
    }
    /**
     * Returns an array of models the user has modified, but whose model has not
     * yet been updated.
     */
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return this.unsyncedInputsTracker.getUnsyncedModels();
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var onlyMatchingComponentsNamed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.performEmit(name, data, false, onlyMatchingComponentsNamed);
    }
  }, {
    key: "emitUp",
    value: function emitUp(name, data) {
      var onlyMatchingComponentsNamed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.performEmit(name, data, true, onlyMatchingComponentsNamed);
    }
  }, {
    key: "emitSelf",
    value: function emitSelf(name, data) {
      this.doEmit(name, data);
    }
  }, {
    key: "performEmit",
    value: function performEmit(name, data, emitUp, matchingName) {
      var components = findComponents(this, emitUp, matchingName);
      components.forEach(function (component) {
        component.doEmit(name, data);
      });
    }
  }, {
    key: "doEmit",
    value: function doEmit(name, data) {
      var _this8 = this;
      if (!this.listeners.has(name)) {
        return;
      }
      var actions = this.listeners.get(name) || [];
      actions.forEach(function (action) {
        _this8.action(action, data, 1);
      });
    }
  }, {
    key: "isTurboEnabled",
    value: function isTurboEnabled() {
      return typeof Turbo !== "undefined" && !this.element.closest('[data-turbo="false"]');
    }
  }, {
    key: "tryStartingRequest",
    value: function tryStartingRequest() {
      if (!this.backendRequest) {
        this.performRequest();
        return;
      }
      this.isRequestPending = true;
    }
  }, {
    key: "performRequest",
    value: function performRequest() {
      var _this9 = this;
      var thisPromiseResolve = this.nextRequestPromiseResolve;
      this.resetPromise();
      this.unsyncedInputsTracker.resetUnsyncedFields();
      var filesToSend = {};
      for (var _i6 = 0, _Object$entries3 = Object.entries(this.pendingFiles); _i6 < _Object$entries3.length; _i6++) {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i6], 2),
          key = _Object$entries3$_i[0],
          value = _Object$entries3$_i[1];
        if (value.files) {
          filesToSend[key] = value.files;
        }
      }
      var requestConfig = {
        props: this.valueStore.getOriginalProps(),
        actions: this.pendingActions,
        updated: this.valueStore.getDirtyProps(),
        children: {},
        updatedPropsFromParent: this.valueStore.getUpdatedPropsFromParent(),
        files: filesToSend
      };
      this.hooks.triggerHook("request:started", requestConfig);
      this.backendRequest = this.backend.makeRequest(requestConfig.props, requestConfig.actions, requestConfig.updated, requestConfig.children, requestConfig.updatedPropsFromParent, requestConfig.files);
      this.hooks.triggerHook("loading.state:started", this.element, this.backendRequest);
      this.pendingActions = [];
      this.valueStore.flushDirtyPropsToPending();
      this.isRequestPending = false;
      this.backendRequest.promise.then(/*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(response) {
          var _headers$get;
          var backendResponse, html, _i7, _Object$values, input, headers, controls, liveUrl;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                backendResponse = new BackendResponse_default(response);
                _context2.n = 1;
                return backendResponse.getBody();
              case 1:
                html = _context2.v;
                for (_i7 = 0, _Object$values = Object.values(_this9.pendingFiles); _i7 < _Object$values.length; _i7++) {
                  input = _Object$values[_i7];
                  input.value = "";
                }
                headers = backendResponse.response.headers;
                if (!(!((_headers$get = headers.get("Content-Type")) !== null && _headers$get !== void 0 && _headers$get.includes("application/vnd.live-component+html")) && !headers.get("X-Live-Redirect"))) {
                  _context2.n = 2;
                  break;
                }
                controls = {
                  displayError: true
                };
                _this9.valueStore.pushPendingPropsBackToDirty();
                _this9.hooks.triggerHook("response:error", backendResponse, controls);
                if (controls.displayError) {
                  _this9.renderError(html);
                }
                _this9.backendRequest = null;
                thisPromiseResolve(backendResponse);
                return _context2.a(2, response);
              case 2:
                _this9.processRerender(html, backendResponse);
                liveUrl = backendResponse.getLiveUrl();
                if (liveUrl) {
                  history.replaceState(history.state, "", new URL(liveUrl + window.location.hash, window.location.origin));
                }
                _this9.backendRequest = null;
                thisPromiseResolve(backendResponse);
                if (_this9.isRequestPending) {
                  _this9.isRequestPending = false;
                  _this9.performRequest();
                }
                return _context2.a(2, response);
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "processRerender",
    value: function processRerender(html, backendResponse) {
      var _this0 = this;
      var controls = {
        shouldRender: true
      };
      this.hooks.triggerHook("render:started", html, backendResponse, controls);
      if (!controls.shouldRender) {
        return;
      }
      if (backendResponse.response.headers.get("Location")) {
        if (this.isTurboEnabled()) {
          Turbo.visit(backendResponse.response.headers.get("Location"));
        } else {
          window.location.href = backendResponse.response.headers.get("Location") || "";
        }
        return;
      }
      this.hooks.triggerHook("loading.state:finished", this.element);
      var modifiedModelValues = {};
      Object.keys(this.valueStore.getDirtyProps()).forEach(function (modelName) {
        modifiedModelValues[modelName] = _this0.valueStore.get(modelName);
      });
      var newElement;
      try {
        newElement = htmlToElement(html);
        if (!newElement.matches("[data-controller~=live]")) {
          throw new Error("A live component template must contain a single root controller element.");
        }
      } catch (error) {
        console.error("There was a problem with the '".concat(this.name, "' component HTML returned:"), {
          id: this.id
        });
        throw error;
      }
      this.externalMutationTracker.handlePendingChanges();
      this.externalMutationTracker.stop();
      executeMorphdom(this.element, newElement, this.unsyncedInputsTracker.getUnsyncedInputs(), function (element) {
        return getValueFromElement(element, _this0.valueStore);
      }, this.externalMutationTracker);
      this.externalMutationTracker.start();
      var newProps = this.elementDriver.getComponentProps();
      this.valueStore.reinitializeAllProps(newProps);
      var eventsToEmit = this.elementDriver.getEventsToEmit();
      var browserEventsToDispatch = this.elementDriver.getBrowserEventsToDispatch();
      Object.keys(modifiedModelValues).forEach(function (modelName) {
        _this0.valueStore.set(modelName, modifiedModelValues[modelName]);
      });
      eventsToEmit.forEach(function (_ref6) {
        var event = _ref6.event,
          data = _ref6.data,
          target = _ref6.target,
          componentName = _ref6.componentName;
        if (target === "up") {
          _this0.emitUp(event, data, componentName);
          return;
        }
        if (target === "self") {
          _this0.emitSelf(event, data);
          return;
        }
        _this0.emit(event, data, componentName);
      });
      browserEventsToDispatch.forEach(function (_ref7) {
        var event = _ref7.event,
          payload = _ref7.payload;
        _this0.element.dispatchEvent(new CustomEvent(event, {
          detail: payload,
          bubbles: true
        }));
      });
      this.hooks.triggerHook("render:finished", this);
    }
  }, {
    key: "calculateDebounce",
    value: function calculateDebounce(debounce) {
      if (debounce === true) {
        return this.defaultDebounce;
      }
      if (debounce === false) {
        return 0;
      }
      return debounce;
    }
  }, {
    key: "clearRequestDebounceTimeout",
    value: function clearRequestDebounceTimeout() {
      if (this.requestDebounceTimeout) {
        clearTimeout(this.requestDebounceTimeout);
        this.requestDebounceTimeout = null;
      }
    }
  }, {
    key: "debouncedStartRequest",
    value: function debouncedStartRequest(debounce) {
      var _this1 = this;
      this.clearRequestDebounceTimeout();
      this.requestDebounceTimeout = window.setTimeout(function () {
        _this1.render();
      }, this.calculateDebounce(debounce));
    }
    // inspired by Livewire!
  }, {
    key: "renderError",
    value: function renderError(html) {
      var modal = document.getElementById("live-component-error");
      if (modal) {
        modal.innerHTML = "";
      } else {
        modal = document.createElement("div");
        modal.id = "live-component-error";
        modal.style.padding = "50px";
        modal.style.backgroundColor = "rgba(0, 0, 0, .5)";
        modal.style.zIndex = "100000";
        modal.style.position = "fixed";
        modal.style.top = "0px";
        modal.style.bottom = "0px";
        modal.style.left = "0px";
        modal.style.right = "0px";
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
      }
      var iframe = document.createElement("iframe");
      iframe.style.borderRadius = "5px";
      iframe.style.flexGrow = "1";
      modal.appendChild(iframe);
      document.body.prepend(modal);
      document.body.style.overflow = "hidden";
      if (iframe.contentWindow) {
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(html);
        iframe.contentWindow.document.close();
      }
      var closeModal = function closeModal(modal2) {
        if (modal2) {
          modal2.outerHTML = "";
        }
        document.body.style.overflow = "visible";
      };
      modal.addEventListener("click", function () {
        return closeModal(modal);
      });
      modal.setAttribute("tabindex", "0");
      modal.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          closeModal(modal);
        }
      });
      modal.focus();
    }
  }, {
    key: "resetPromise",
    value: function resetPromise() {
      var _this10 = this;
      this.nextRequestPromise = new Promise(function (resolve) {
        _this10.nextRequestPromiseResolve = resolve;
      });
    }
    /**
     * Called on a child component after the parent component render has requested
     * that the child component update its props & re-render if necessary.
     */
  }, {
    key: "_updateFromParentProps",
    value: function _updateFromParentProps(props) {
      var isChanged = this.valueStore.storeNewPropsFromParent(props);
      if (isChanged) {
        this.render();
      }
    }
  }]);
}();
function proxifyComponent(component) {
  return new Proxy(component, {
    get: function get(component2, prop) {
      if (prop in component2 || typeof prop !== "string") {
        if (typeof component2[prop] === "function") {
          var callable = component2[prop];
          return function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return callable.apply(component2, args);
          };
        }
        return Reflect.get(component2, prop);
      }
      if (component2.valueStore.has(prop)) {
        return component2.getData(prop);
      }
      return function (args) {
        return component2.action.apply(component2, [prop, args]);
      };
    },
    set: function set(target, property, value) {
      if (property in target) {
        target[property] = value;
        return true;
      }
      target.set(property, value);
      return true;
    }
  });
}

// src/Component/ElementDriver.ts
var StimulusElementDriver = /*#__PURE__*/function () {
  function StimulusElementDriver(controller) {
    _classCallCheck(this, StimulusElementDriver);
    this.controller = controller;
  }
  return _createClass(StimulusElementDriver, [{
    key: "getModelName",
    value: function getModelName(element) {
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return null;
      }
      return modelDirective.action;
    }
  }, {
    key: "getComponentProps",
    value: function getComponentProps() {
      return this.controller.propsValue;
    }
  }, {
    key: "getEventsToEmit",
    value: function getEventsToEmit() {
      return this.controller.eventsToEmitValue;
    }
  }, {
    key: "getBrowserEventsToDispatch",
    value: function getBrowserEventsToDispatch() {
      return this.controller.eventsToDispatchValue;
    }
  }]);
}();

// src/Directive/get_model_binding.ts
function get_model_binding_default(modelDirective) {
  var shouldRender = true;
  var targetEventName = null;
  var debounce = false;
  var minLength = null;
  var maxLength = null;
  var minValue = null;
  var maxValue = null;
  modelDirective.modifiers.forEach(function (modifier) {
    switch (modifier.name) {
      case "on":
        if (!modifier.value) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " requires a value - e.g. on(change)."));
        }
        if (!["input", "change"].includes(modifier.value)) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " only accepts the arguments \"input\" or \"change\"."));
        }
        targetEventName = modifier.value;
        break;
      case "norender":
        shouldRender = false;
        break;
      case "debounce":
        debounce = modifier.value ? Number.parseInt(modifier.value) : true;
        break;
      case "min_length":
        minLength = modifier.value ? Number.parseInt(modifier.value) : null;
        break;
      case "max_length":
        maxLength = modifier.value ? Number.parseInt(modifier.value) : null;
        break;
      case "min_value":
        minValue = modifier.value ? Number.parseFloat(modifier.value) : null;
        break;
      case "max_value":
        maxValue = modifier.value ? Number.parseFloat(modifier.value) : null;
        break;
      default:
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" in data-model=\"").concat(modelDirective.getString(), "\"."));
    }
  });
  var _modelDirective$actio = modelDirective.action.split(":"),
    _modelDirective$actio2 = _slicedToArray(_modelDirective$actio, 2),
    modelName = _modelDirective$actio2[0],
    innerModelName = _modelDirective$actio2[1];
  return {
    modelName: modelName,
    innerModelName: innerModelName || null,
    shouldRender: shouldRender,
    debounce: debounce,
    targetEventName: targetEventName,
    minLength: minLength,
    maxLength: maxLength,
    minValue: minValue,
    maxValue: maxValue
  };
}

// src/Component/plugins/ChildComponentPlugin.ts
var ChildComponentPlugin_default = /*#__PURE__*/function () {
  function ChildComponentPlugin_default(component) {
    _classCallCheck(this, ChildComponentPlugin_default);
    this.parentModelBindings = [];
    this.component = component;
    var modelDirectives = getAllModelDirectiveFromElements(this.component.element);
    this.parentModelBindings = modelDirectives.map(get_model_binding_default);
  }
  return _createClass(ChildComponentPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this11 = this;
      component.on("request:started", function (requestData) {
        requestData.children = _this11.getChildrenFingerprints();
      });
      component.on("model:set", function (model, value) {
        _this11.notifyParentModelChange(model, value);
      });
    }
  }, {
    key: "getChildrenFingerprints",
    value: function getChildrenFingerprints() {
      var fingerprints = {};
      this.getChildren().forEach(function (child) {
        if (!child.id) {
          throw new Error("missing id");
        }
        fingerprints[child.id] = {
          fingerprint: child.fingerprint,
          tag: child.element.tagName.toLowerCase()
        };
      });
      return fingerprints;
    }
    /**
     * Notifies parent of a model change if desired.
     *
     * This makes the child "behave" like it's a normal `<input>` element,
     * where, when its value changes, the parent is notified.
     */
  }, {
    key: "notifyParentModelChange",
    value: function notifyParentModelChange(modelName, value) {
      var parentComponent = findParent(this.component);
      if (!parentComponent) {
        return;
      }
      this.parentModelBindings.forEach(function (modelBinding) {
        var childModelName = modelBinding.innerModelName || "value";
        if (childModelName !== modelName) {
          return;
        }
        parentComponent.set(modelBinding.modelName, value, modelBinding.shouldRender, modelBinding.debounce);
      });
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      return findChildren(this.component);
    }
  }]);
}();

// src/Component/plugins/LazyPlugin.ts
var LazyPlugin_default = /*#__PURE__*/function () {
  function LazyPlugin_default() {
    _classCallCheck(this, LazyPlugin_default);
    this.intersectionObserver = null;
  }
  return _createClass(LazyPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _component$element$at,
        _this12 = this;
      if ("lazy" !== ((_component$element$at = component.element.attributes.getNamedItem("loading")) === null || _component$element$at === void 0 ? void 0 : _component$element$at.value)) {
        return;
      }
      component.on("connect", function () {
        _this12.getObserver().observe(component.element);
      });
      component.on("disconnect", function () {
        var _this12$intersectionO;
        (_this12$intersectionO = _this12.intersectionObserver) === null || _this12$intersectionO === void 0 || _this12$intersectionO.unobserve(component.element);
      });
    }
  }, {
    key: "getObserver",
    value: function getObserver() {
      if (!this.intersectionObserver) {
        this.intersectionObserver = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.dispatchEvent(new CustomEvent("live:appear"));
              observer.unobserve(entry.target);
            }
          });
        });
      }
      return this.intersectionObserver;
    }
  }]);
}();

// src/Component/plugins/LoadingPlugin.ts
var LoadingPlugin_default = /*#__PURE__*/function () {
  function LoadingPlugin_default() {
    _classCallCheck(this, LoadingPlugin_default);
  }
  return _createClass(LoadingPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this13 = this;
      component.on("loading.state:started", function (element, request) {
        _this13.startLoading(component, element, request);
      });
      component.on("loading.state:finished", function (element) {
        _this13.finishLoading(component, element);
      });
      this.finishLoading(component, component.element);
    }
  }, {
    key: "startLoading",
    value: function startLoading(component, targetElement, backendRequest) {
      this.handleLoadingToggle(component, true, targetElement, backendRequest);
    }
  }, {
    key: "finishLoading",
    value: function finishLoading(component, targetElement) {
      this.handleLoadingToggle(component, false, targetElement, null);
    }
  }, {
    key: "handleLoadingToggle",
    value: function handleLoadingToggle(component, isLoading, targetElement, backendRequest) {
      var _this14 = this;
      if (isLoading) {
        this.addAttributes(targetElement, ["busy"]);
      } else {
        this.removeAttributes(targetElement, ["busy"]);
      }
      this.getLoadingDirectives(component, targetElement).forEach(function (_ref8) {
        var element = _ref8.element,
          directives = _ref8.directives;
        if (isLoading) {
          _this14.addAttributes(element, ["data-live-is-loading"]);
        } else {
          _this14.removeAttributes(element, ["data-live-is-loading"]);
        }
        directives.forEach(function (directive) {
          _this14.handleLoadingDirective(element, isLoading, directive, backendRequest);
        });
      });
    }
  }, {
    key: "handleLoadingDirective",
    value: function handleLoadingDirective(element, isLoading, directive, backendRequest) {
      var _this15 = this;
      var finalAction = parseLoadingAction(directive.action, isLoading);
      var targetedActions = [];
      var targetedModels = [];
      var delay = 0;
      var validModifiers = /* @__PURE__ */new Map();
      validModifiers.set("delay", function (modifier) {
        if (!isLoading) {
          return;
        }
        delay = modifier.value ? Number.parseInt(modifier.value) : 200;
      });
      validModifiers.set("action", function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"action\" in data-loading must have an action name - e.g. action(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedActions.push(modifier.value);
      });
      validModifiers.set("model", function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"model\" in data-loading must have an action name - e.g. model(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedModels.push(modifier.value);
      });
      directive.modifiers.forEach(function (modifier) {
        if (validModifiers.has(modifier.name)) {
          var _validModifiers$get;
          var callable = (_validModifiers$get = validModifiers.get(modifier.name)) !== null && _validModifiers$get !== void 0 ? _validModifiers$get : function () {};
          callable(modifier);
          return;
        }
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" used in data-loading=\"").concat(directive.getString(), "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(", "), "."));
      });
      if (isLoading && targetedActions.length > 0 && backendRequest && !backendRequest.containsOneOfActions(targetedActions)) {
        return;
      }
      if (isLoading && targetedModels.length > 0 && backendRequest && !backendRequest.areAnyModelsUpdated(targetedModels)) {
        return;
      }
      var loadingDirective;
      switch (finalAction) {
        case "show":
          loadingDirective = function loadingDirective() {
            return _this15.showElement(element);
          };
          break;
        case "hide":
          loadingDirective = function loadingDirective() {
            return _this15.hideElement(element);
          };
          break;
        case "addClass":
          loadingDirective = function loadingDirective() {
            return _this15.addClass(element, directive.args);
          };
          break;
        case "removeClass":
          loadingDirective = function loadingDirective() {
            return _this15.removeClass(element, directive.args);
          };
          break;
        case "addAttribute":
          loadingDirective = function loadingDirective() {
            return _this15.addAttributes(element, directive.args);
          };
          break;
        case "removeAttribute":
          loadingDirective = function loadingDirective() {
            return _this15.removeAttributes(element, directive.args);
          };
          break;
        default:
          throw new Error("Unknown data-loading action \"".concat(finalAction, "\""));
      }
      if (delay) {
        window.setTimeout(function () {
          if (backendRequest && !backendRequest.isResolved) {
            loadingDirective();
          }
        }, delay);
        return;
      }
      loadingDirective();
    }
  }, {
    key: "getLoadingDirectives",
    value: function getLoadingDirectives(component, element) {
      var loadingDirectives = [];
      var matchingElements = _toConsumableArray(Array.from(element.querySelectorAll("[data-loading]")));
      matchingElements = matchingElements.filter(function (elt) {
        return elementBelongsToThisComponent(elt, component);
      });
      if (element.hasAttribute("data-loading")) {
        matchingElements = [element].concat(_toConsumableArray(matchingElements));
      }
      matchingElements.forEach(function (element2) {
        if (!(element2 instanceof HTMLElement) && !(element2 instanceof SVGElement)) {
          throw new Error("Invalid Element Type");
        }
        var directives = parseDirectives(element2.dataset.loading || "show");
        loadingDirectives.push({
          element: element2,
          directives: directives
        });
      });
      return loadingDirectives;
    }
  }, {
    key: "showElement",
    value: function showElement(element) {
      element.style.display = "revert";
    }
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      element.style.display = "none";
    }
  }, {
    key: "addClass",
    value: function addClass(element, classes) {
      var _element$classList3;
      (_element$classList3 = element.classList).add.apply(_element$classList3, _toConsumableArray(combineSpacedArray(classes)));
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, classes) {
      var _element$classList4;
      (_element$classList4 = element.classList).remove.apply(_element$classList4, _toConsumableArray(combineSpacedArray(classes)));
      if (element.classList.length === 0) {
        element.removeAttribute("class");
      }
    }
  }, {
    key: "addAttributes",
    value: function addAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.setAttribute(attribute, "");
      });
    }
  }, {
    key: "removeAttributes",
    value: function removeAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    }
  }]);
}();
var parseLoadingAction = function parseLoadingAction(action, isLoading) {
  switch (action) {
    case "show":
      return isLoading ? "show" : "hide";
    case "hide":
      return isLoading ? "hide" : "show";
    case "addClass":
      return isLoading ? "addClass" : "removeClass";
    case "removeClass":
      return isLoading ? "removeClass" : "addClass";
    case "addAttribute":
      return isLoading ? "addAttribute" : "removeAttribute";
    case "removeAttribute":
      return isLoading ? "removeAttribute" : "addAttribute";
  }
  throw new Error("Unknown data-loading action \"".concat(action, "\""));
};

// src/Component/plugins/PageUnloadingPlugin.ts
var PageUnloadingPlugin_default = /*#__PURE__*/function () {
  function PageUnloadingPlugin_default() {
    _classCallCheck(this, PageUnloadingPlugin_default);
    this.isConnected = false;
  }
  return _createClass(PageUnloadingPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this16 = this;
      component.on("render:started", function (html, response, controls) {
        if (!_this16.isConnected) {
          controls.shouldRender = false;
        }
      });
      component.on("connect", function () {
        _this16.isConnected = true;
      });
      component.on("disconnect", function () {
        _this16.isConnected = false;
      });
    }
  }]);
}();

// src/PollingDirector.ts
var PollingDirector_default = /*#__PURE__*/function () {
  function PollingDirector_default(component) {
    _classCallCheck(this, PollingDirector_default);
    this.isPollingActive = true;
    this.pollingIntervals = [];
    this.component = component;
  }
  return _createClass(PollingDirector_default, [{
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.polls.push({
        actionName: actionName,
        duration: duration
      });
      if (this.isPollingActive) {
        this.initiatePoll(actionName, duration);
      }
    }
  }, {
    key: "startAllPolling",
    value: function startAllPolling() {
      var _this17 = this;
      if (this.isPollingActive) {
        return;
      }
      this.isPollingActive = true;
      this.polls.forEach(function (_ref9) {
        var actionName = _ref9.actionName,
          duration = _ref9.duration;
        _this17.initiatePoll(actionName, duration);
      });
    }
  }, {
    key: "stopAllPolling",
    value: function stopAllPolling() {
      this.isPollingActive = false;
      this.pollingIntervals.forEach(function (interval) {
        clearInterval(interval);
      });
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.stopAllPolling();
      this.polls = [];
      this.startAllPolling();
    }
  }, {
    key: "initiatePoll",
    value: function initiatePoll(actionName, duration) {
      var _this18 = this;
      var callback;
      if (actionName === "$render") {
        callback = function callback() {
          _this18.component.render();
        };
      } else {
        callback = function callback() {
          _this18.component.action(actionName, {}, 0);
        };
      }
      var timer = window.setInterval(function () {
        callback();
      }, duration);
      this.pollingIntervals.push(timer);
    }
  }]);
}();

// src/Component/plugins/PollingPlugin.ts
var PollingPlugin_default = /*#__PURE__*/function () {
  function PollingPlugin_default() {
    _classCallCheck(this, PollingPlugin_default);
  }
  return _createClass(PollingPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this19 = this;
      this.element = component.element;
      this.pollingDirector = new PollingDirector_default(component);
      this.initializePolling();
      component.on("connect", function () {
        _this19.pollingDirector.startAllPolling();
      });
      component.on("disconnect", function () {
        _this19.pollingDirector.stopAllPolling();
      });
      component.on("render:finished", function () {
        _this19.initializePolling();
      });
    }
  }, {
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.pollingDirector.addPoll(actionName, duration);
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.pollingDirector.clearPolling();
    }
  }, {
    key: "initializePolling",
    value: function initializePolling() {
      var _this20 = this;
      this.clearPolling();
      if (this.element.dataset.poll === void 0) {
        return;
      }
      var rawPollConfig = this.element.dataset.poll;
      var directives = parseDirectives(rawPollConfig || "$render");
      directives.forEach(function (directive) {
        var duration = 2e3;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case "delay":
              if (modifier.value) {
                duration = Number.parseInt(modifier.value);
              }
              break;
            default:
              console.warn("Unknown modifier \"".concat(modifier.name, "\" in data-poll \"").concat(rawPollConfig, "\"."));
          }
        });
        _this20.addPoll(directive.action, duration);
      });
    }
  }]);
}();

// src/Component/plugins/SetValueOntoModelFieldsPlugin.ts
var SetValueOntoModelFieldsPlugin_default = /*#__PURE__*/function () {
  function SetValueOntoModelFieldsPlugin_default() {
    _classCallCheck(this, SetValueOntoModelFieldsPlugin_default);
  }
  return _createClass(SetValueOntoModelFieldsPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this21 = this;
      this.synchronizeValueOfModelFields(component);
      component.on("render:finished", function () {
        _this21.synchronizeValueOfModelFields(component);
      });
    }
    /**
     * Sets the "value" of all model fields to the component data.
     *
     * This is called when the component initializes and after re-render.
     * Take the following element:
     *
     *      <input data-model="firstName">
     *
     * This method will set the "value" of that element to the value of
     * the "firstName" model.
     */
  }, {
    key: "synchronizeValueOfModelFields",
    value: function synchronizeValueOfModelFields(component) {
      component.element.querySelectorAll("[data-model]").forEach(function (element) {
        if (!(element instanceof HTMLElement)) {
          throw new Error("Invalid element using data-model.");
        }
        if (element instanceof HTMLFormElement) {
          return;
        }
        if (!elementBelongsToThisComponent(element, component)) {
          return;
        }
        var modelDirective = getModelDirectiveFromElement(element);
        if (!modelDirective) {
          return;
        }
        var modelName = modelDirective.action;
        if (component.getUnsyncedModels().includes(modelName)) {
          return;
        }
        if (component.valueStore.has(modelName)) {
          setValueOnElement(element, component.valueStore.get(modelName));
        }
        if (element instanceof HTMLSelectElement && !element.multiple) {
          component.valueStore.set(modelName, getValueFromElement(element, component.valueStore));
        }
      });
    }
  }]);
}();

// src/Component/plugins/ValidatedFieldsPlugin.ts
var ValidatedFieldsPlugin_default = /*#__PURE__*/function () {
  function ValidatedFieldsPlugin_default() {
    _classCallCheck(this, ValidatedFieldsPlugin_default);
  }
  return _createClass(ValidatedFieldsPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this22 = this;
      component.on("model:set", function (modelName) {
        _this22.handleModelSet(modelName, component.valueStore);
      });
    }
  }, {
    key: "handleModelSet",
    value: function handleModelSet(modelName, valueStore) {
      if (valueStore.has("validatedFields")) {
        var validatedFields = _toConsumableArray(valueStore.get("validatedFields"));
        if (!validatedFields.includes(modelName)) {
          validatedFields.push(modelName);
        }
        valueStore.set("validatedFields", validatedFields);
      }
    }
  }]);
}();

// src/live_controller.ts
var _LiveControllerDefault = /*#__PURE__*/function (_Controller) {
  function _LiveControllerDefault() {
    var _this23;
    _classCallCheck(this, _LiveControllerDefault);
    _this23 = _callSuper(this, _LiveControllerDefault, arguments);
    _this23.pendingActionTriggerModelElement = null;
    _this23.elementEventListeners = [{
      event: "input",
      callback: function callback(event) {
        return _this23.handleInputEvent(event);
      }
    }, {
      event: "change",
      callback: function callback(event) {
        return _this23.handleChangeEvent(event);
      }
    }];
    _this23.pendingFiles = {};
    return _this23;
  }
  _inherits(_LiveControllerDefault, _Controller);
  return _createClass(_LiveControllerDefault, [{
    key: "initialize",
    value: function initialize() {
      this.mutationObserver = new MutationObserver(this.onMutations.bind(this));
      this.createComponent();
    }
  }, {
    key: "connect",
    value: function connect() {
      this.connectComponent();
      this.mutationObserver.observe(this.element, {
        attributes: true
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.disconnectComponent();
      this.mutationObserver.disconnect();
    }
    /**
     * Called to update one piece of the model.
     *
     *      <button data-action="live#update" data-model="foo" data-value="5">
     */
  }, {
    key: "update",
    value: function update(event) {
      if (event.type === "input" || event.type === "change") {
        throw new Error("Since LiveComponents 2.3, you no longer need data-action=\"live#update\" on form elements. Found on element: ".concat(getElementAsTagText(event.currentTarget)));
      }
      this.updateModelFromElementEvent(event.currentTarget, null);
    }
  }, {
    key: "action",
    value: function action(event) {
      var _this24 = this;
      var params = event.params;
      if (!params.action) {
        throw new Error("No action name provided on element: ".concat(getElementAsTagText(event.currentTarget), ". Did you forget to add the \"data-live-action-param\" attribute?"));
      }
      var rawAction = params.action;
      var actionArgs = _objectSpread({}, params);
      delete actionArgs.action;
      var directives = parseDirectives(rawAction);
      var debounce = false;
      directives.forEach(function (directive) {
        var pendingFiles = {};
        var validModifiers = /* @__PURE__ */new Map();
        validModifiers.set("stop", function () {
          event.stopPropagation();
        });
        validModifiers.set("self", function () {
          if (event.target !== event.currentTarget) {
            return;
          }
        });
        validModifiers.set("debounce", function (modifier) {
          debounce = modifier.value ? Number.parseInt(modifier.value) : true;
        });
        validModifiers.set("files", function (modifier) {
          if (!modifier.value) {
            pendingFiles = _this24.pendingFiles;
          } else if (_this24.pendingFiles[modifier.value]) {
            pendingFiles[modifier.value] = _this24.pendingFiles[modifier.value];
          }
        });
        directive.modifiers.forEach(function (modifier) {
          if (validModifiers.has(modifier.name)) {
            var _validModifiers$get2;
            var callable = (_validModifiers$get2 = validModifiers.get(modifier.name)) !== null && _validModifiers$get2 !== void 0 ? _validModifiers$get2 : function () {};
            callable(modifier);
            return;
          }
          console.warn("Unknown modifier ".concat(modifier.name, " in action \"").concat(rawAction, "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(", "), "."));
        });
        for (var _i8 = 0, _Object$entries4 = Object.entries(pendingFiles); _i8 < _Object$entries4.length; _i8++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i8], 2),
            key = _Object$entries4$_i[0],
            input = _Object$entries4$_i[1];
          if (input.files) {
            _this24.component.files(key, input);
          }
          delete _this24.pendingFiles[key];
        }
        _this24.component.action(directive.action, actionArgs, debounce);
        if (getModelDirectiveFromElement(event.currentTarget, false)) {
          _this24.pendingActionTriggerModelElement = event.currentTarget;
        }
      });
    }
  }, {
    key: "$render",
    value: function $render() {
      return this.component.render();
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var _this25 = this;
      this.getEmitDirectives(event).forEach(function (_ref0) {
        var name = _ref0.name,
          data = _ref0.data,
          nameMatch = _ref0.nameMatch;
        _this25.component.emit(name, data, nameMatch);
      });
    }
  }, {
    key: "emitUp",
    value: function emitUp(event) {
      var _this26 = this;
      this.getEmitDirectives(event).forEach(function (_ref1) {
        var name = _ref1.name,
          data = _ref1.data,
          nameMatch = _ref1.nameMatch;
        _this26.component.emitUp(name, data, nameMatch);
      });
    }
  }, {
    key: "emitSelf",
    value: function emitSelf(event) {
      var _this27 = this;
      this.getEmitDirectives(event).forEach(function (_ref10) {
        var name = _ref10.name,
          data = _ref10.data;
        _this27.component.emitSelf(name, data);
      });
    }
    /**
     * Update a model value.
     *
     * @param {string} model The model to update
     * @param {any} value The new value
     * @param {boolean} shouldRender Whether a re-render should be triggered
     * @param {number|boolean} debounce
     */
  }, {
    key: "$updateModel",
    value: function $updateModel(model, value) {
      var shouldRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return this.component.set(model, value, shouldRender, debounce);
    }
  }, {
    key: "propsUpdatedFromParentValueChanged",
    value: function propsUpdatedFromParentValueChanged() {
      this.component._updateFromParentProps(this.propsUpdatedFromParentValue);
    }
  }, {
    key: "fingerprintValueChanged",
    value: function fingerprintValueChanged() {
      this.component.fingerprint = this.fingerprintValue;
    }
  }, {
    key: "getEmitDirectives",
    value: function getEmitDirectives(event) {
      var params = event.params;
      if (!params.event) {
        throw new Error("No event name provided on element: ".concat(getElementAsTagText(event.currentTarget), ". Did you forget to add the \"data-live-event-param\" attribute?"));
      }
      var eventInfo = params.event;
      var eventArgs = _objectSpread({}, params);
      delete eventArgs.event;
      var directives = parseDirectives(eventInfo);
      var emits = [];
      directives.forEach(function (directive) {
        var nameMatch = null;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case "name":
              nameMatch = modifier.value;
              break;
            default:
              throw new Error("Unknown modifier ".concat(modifier.name, " in event \"").concat(eventInfo, "\"."));
          }
        });
        emits.push({
          name: directive.action,
          data: eventArgs,
          nameMatch: nameMatch
        });
      });
      return emits;
    }
  }, {
    key: "createComponent",
    value: function createComponent() {
      var _this28 = this;
      var id = this.element.id || null;
      this.component = new Component(this.element, this.nameValue, this.propsValue, this.listenersValue, id, _LiveControllerDefault.backendFactory(this), new StimulusElementDriver(this));
      this.proxiedComponent = proxifyComponent(this.component);
      Object.defineProperty(this.element, "__component", {
        value: this.proxiedComponent,
        writable: true
      });
      if (this.hasDebounceValue) {
        this.component.defaultDebounce = this.debounceValue;
      }
      var plugins = [new LoadingPlugin_default(), new LazyPlugin_default(), new ValidatedFieldsPlugin_default(), new PageUnloadingPlugin_default(), new PollingPlugin_default(), new SetValueOntoModelFieldsPlugin_default(), new ChildComponentPlugin_default(this.component)];
      plugins.forEach(function (plugin) {
        _this28.component.addPlugin(plugin);
      });
    }
  }, {
    key: "connectComponent",
    value: function connectComponent() {
      var _this29 = this;
      this.component.connect();
      this.mutationObserver.observe(this.element, {
        attributes: true
      });
      this.elementEventListeners.forEach(function (_ref11) {
        var event = _ref11.event,
          callback = _ref11.callback;
        _this29.component.element.addEventListener(event, callback);
      });
      this.dispatchEvent("connect");
    }
  }, {
    key: "disconnectComponent",
    value: function disconnectComponent() {
      var _this30 = this;
      this.component.disconnect();
      this.elementEventListeners.forEach(function (_ref12) {
        var event = _ref12.event,
          callback = _ref12.callback;
        _this30.component.element.removeEventListener(event, callback);
      });
      this.dispatchEvent("disconnect");
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, "input");
    }
  }, {
    key: "handleChangeEvent",
    value: function handleChangeEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, "change");
    }
    /**
     * Sets a model given an element and some event.
     *
     * This parses the "data-model" from the element and takes
     * into account modifiers like "debounce", "norender" and "on()".
     *
     * This is used, for example, the grab the new value from an input
     * on "change" and set that new value onto the model.
     *
     * It's also used to, on click, set the value from a button
     * with data-model="" and data-value"".
     *
     * @param element
     * @param eventName If specified (e.g. "input" or "change"), the model may
     *                  skip updating if the on() modifier is passed (e.g. on(change)).
     *                  If not passed, the model will always be updated.
     */
  }, {
    key: "updateModelFromElementEvent",
    value: function updateModelFromElementEvent(element, eventName) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error("Could not update model for non HTMLElement");
      }
      if (element instanceof HTMLInputElement && element.type === "file") {
        var _element$files;
        var key = element.name;
        if ((_element$files = element.files) !== null && _element$files !== void 0 && _element$files.length) {
          this.pendingFiles[key] = element;
        } else if (this.pendingFiles[key]) {
          delete this.pendingFiles[key];
        }
      }
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return;
      }
      var modelBinding = get_model_binding_default(modelDirective);
      if (!modelBinding.targetEventName) {
        modelBinding.targetEventName = "input";
      }
      if (this.pendingActionTriggerModelElement === element) {
        modelBinding.shouldRender = false;
      }
      if (eventName === "change" && modelBinding.targetEventName === "input") {
        modelBinding.targetEventName = "change";
      }
      if (eventName && modelBinding.targetEventName !== eventName) {
        return;
      }
      if (false === modelBinding.debounce) {
        if (modelBinding.targetEventName === "input") {
          modelBinding.debounce = true;
        } else {
          modelBinding.debounce = 0;
        }
      }
      var finalValue = getValueFromElement(element, this.component.valueStore);
      if (isTextualInputElement(element) || isTextareaElement(element)) {
        if (modelBinding.minLength !== null && typeof finalValue === "string" && finalValue.length < modelBinding.minLength) {
          return;
        }
        if (modelBinding.maxLength !== null && typeof finalValue === "string" && finalValue.length > modelBinding.maxLength) {
          return;
        }
      }
      if (isNumericalInputElement(element)) {
        var numericValue = Number(finalValue);
        if (modelBinding.minValue !== null && numericValue < modelBinding.minValue) {
          return;
        }
        if (modelBinding.maxValue !== null && numericValue > modelBinding.maxValue) {
          return;
        }
      }
      this.component.set(modelBinding.modelName, finalValue, modelBinding.shouldRender, modelBinding.debounce);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      detail.controller = this;
      detail.component = this.proxiedComponent;
      this.dispatch(name, {
        detail: detail,
        prefix: "live",
        cancelable: cancelable,
        bubbles: canBubble
      });
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var _this31 = this;
      mutations.forEach(function (mutation) {
        if (mutation.type === "attributes" && mutation.attributeName === "id" && _this31.element.id !== _this31.component.id) {
          _this31.disconnectComponent();
          _this31.createComponent();
          _this31.connectComponent();
        }
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_80__.Controller);
_LiveControllerDefault.values = {
  name: String,
  url: String,
  props: {
    type: Object,
    "default": {}
  },
  propsUpdatedFromParent: {
    type: Object,
    "default": {}
  },
  listeners: {
    type: Array,
    "default": []
  },
  eventsToEmit: {
    type: Array,
    "default": []
  },
  eventsToDispatch: {
    type: Array,
    "default": []
  },
  debounce: {
    type: Number,
    "default": 150
  },
  fingerprint: {
    type: String,
    "default": ""
  },
  requestMethod: {
    type: String,
    "default": "post"
  }
};
_LiveControllerDefault.backendFactory = function (controller) {
  return new Backend_default(controller.urlValue, controller.requestMethodValue);
};
var LiveControllerDefault = _LiveControllerDefault;


/***/ }),

/***/ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js":
/*!*****************************************************************!*\
  !*** ./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ turbo_controller_default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// src/turbo_controller.ts


var turbo_controller_default = /*#__PURE__*/function (_Controller) {
  function turbo_controller_default() {
    _classCallCheck(this, turbo_controller_default);
    return _callSuper(this, turbo_controller_default, arguments);
  }
  _inherits(turbo_controller_default, _Controller);
  return _createClass(turbo_controller_default);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-3dc843"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7RUFDMUN1MEIsYUFBYSxFQUFFO0lBQUV6ckIsSUFBSSxFQUFFOUksTUFBTTtJQUFFLFdBQVM7RUFBTztBQUNqRCxDQUFDO0FBQ0RneEIsc0JBQXNCLENBQUNxQyxjQUFjLEdBQUcsVUFBQ2hKLFVBQVU7RUFBQSxPQUFLLElBQUlsbUIsZUFBZSxDQUFDa21CLFVBQVUsQ0FBQ21LLFFBQVEsRUFBRW5LLFVBQVUsQ0FBQ29LLGtCQUFrQixDQUFDO0FBQUE7QUFDL0gsSUFBSUMscUJBQXFCLEdBQUcxRCxzQkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNnR2xEO0FBQ2dEO0FBQ3ZCO0FBQ3pCLElBQUkyRCx3QkFBd0IsMEJBQUFsOUIsV0FBQTtFQUFBLFNBQUFrOUIseUJBQUE7SUFBQWo5QixlQUFBLE9BQUFpOUIsd0JBQUE7SUFBQSxPQUFBaDlCLFVBQUEsT0FBQWc5Qix3QkFBQSxFQUFBLzhCLFNBQUE7RUFBQTtFQUFBQyxTQUFBLENBQUE4OEIsd0JBQUEsRUFBQWw5QixXQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBNjhCLHdCQUFBO0FBQUEsRUFBaUJwOUIsMkRBQVUsQ0FDdEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2NzcmZfcHJvdGVjdGlvbl9jb250cm9sbGVyLmpzPzViMDMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2RldGFpbHNfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvbW9kYWxfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1jaGFydGpzL2Fzc2V0cy9kaXN0L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL2Rpc3QvbGl2ZS5taW4uY3NzPzk2YzAiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL2Rpc3QvbGl2ZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXR1cmJvL2Fzc2V0cy9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG4vLyBjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG4vLyB0aGlzIFwibW9kaWZpZXNcIiB0aGUganF1ZXJ5IG1vZHVsZTogYWRkaW5nIGJlaGF2aW9yIHRvIGl0XG4vLyB0aGUgYm9vdHN0cmFwIG1vZHVsZSBkb2Vzbid0IGV4cG9ydC9yZXR1cm4gYW55dGhpbmdcbi8vIHJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xuXG4vLyBvciB5b3UgY2FuIGluY2x1ZGUgc3BlY2lmaWMgcGllY2VzXG4vLyByZXF1aXJlKCdib290c3RyYXAvanMvZGlzdC90b29sdGlwJyk7XG4vLyByZXF1aXJlKCdib290c3RyYXAvanMvZGlzdC9wb3BvdmVyJyk7XG5cbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuLy8gICAgICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XG4vLyB9KTtcblxuXG5jb25zdCBoZWFkZXJDYXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1jYXJ0Jyk7XG4vLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJsb3JlbiBoZWFkZXJcIiwgZXZlbnQudGFyZ2V0KTtcbiAgICAvLyBpZiAoZXZlbnQudGFyZ2V0ID09PSBoZWFkZXJDYXJ0KSB7XG4gICAgICAgIGhlYWRlckNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXNWaXNpYmxlJyk7XG4gICAgLy8gfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHByb21vQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUHJvZHVjdF9pc1Byb21vdGlvbicpO1xuICAgIGNvbnN0IHByb21vUHJpY2VGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQcm9kdWN0X29mZlBlcmNlbnQnKTtcblxuXG4gICAgLy8gQ2libGUgbGUgcGFyZW50IGR1IGNoYW1wIHBvdXIgY2FjaGVyIHRvdXQgbGUgYmxvYyBkdSBmb3JtdWxhaXJlXG4gICAgY29uc3QgcHJvbW9QcmljZUZpZWxkQ29udGFpbmVyID0gcHJvbW9QcmljZUZpZWxkLmNsb3Nlc3QoJy5wcm9tb3Rpb24nKTtcblxuICAgIC8vIEZvbmN0aW9uIGRlIGJhc2N1bGVcbiAgICBmdW5jdGlvbiB0b2dnbGVQcm9tb0ZpZWxkKCkge1xuICAgICAgICBpZiAocHJvbW9DaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICBwcm9tb1ByaWNlRmllbGRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9tb1ByaWNlRmllbGRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFwcGVsIGluaXRpYWwgYXUgY2hhcmdlbWVudCBkZSBsYSBwYWdlXG4gICAgdG9nZ2xlUHJvbW9GaWVsZCgpO1xuXG4gICAgLy8gw4ljb3V0ZXVyIGQnw6l2w6luZW1lbnQgc3VyIGxlIGNoYW5nZW1lbnQgZGUgbGEgY2hlY2tib3hcbiAgICBwcm9tb0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRvZ2dsZVByb21vRmllbGQpO1xufSk7XG5cbi8vIGltcG9ydCAnL2Fzc2V0cy9qcy9zaG9wdXMuanMnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXG4gKi9cbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XG5cbiIsIi8vIGFzc2V0cy9ib290c3RyYXAuanNcbmltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG5cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9jc3JmX3Byb3RlY3Rpb25fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2NzcmZfcHJvdGVjdGlvbl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9kZXRhaWxzX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9kZXRhaWxzX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9tb2RhbF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvbW9kYWxfY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBjb250cm9sbGVyXzAgZnJvbSAnQHN5bWZvbnkvdXgtY2hhcnRqcy9kaXN0L2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGNvbnRyb2xsZXJfMSBmcm9tICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9kaXN0L2xpdmVfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgJ0BzeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Rpc3QvbGl2ZS5taW4uY3NzJztcbmltcG9ydCBjb250cm9sbGVyXzIgZnJvbSAnQHN5bWZvbnkvdXgtdHVyYm8vZGlzdC90dXJib19jb250cm9sbGVyLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LWNoYXJ0anMtLWNoYXJ0JzogY29udHJvbGxlcl8wLFxuICAnbGl2ZSc6IGNvbnRyb2xsZXJfMSxcbiAgJ3N5bWZvbnktLXV4LXR1cmJvLS10dXJiby1jb3JlJzogY29udHJvbGxlcl8yLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmNvbnN0IGNvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuX19zdGltdWx1c0xhenlDb250cm9sbGVyID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXBwbGljYXRpb24uY29udHJvbGxlcnMuZmluZCgoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXIuaWRlbnRpZmllciA9PT0gdGhpcy5pZGVudGlmaWVyICYmIGNvbnRyb2xsZXIuX19zdGltdWx1c0xhenlDb250cm9sbGVyO1xuICAgICAgICB9KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGltcG9ydCgnL1VzZXJzL2FsYXNzYW5lc2Fub2dvL01lc19wcm9qZXRzL3ZlbnRlX2VuX2xpZ25lL2Fzc2V0cy9jb250cm9sbGVycy9jc3JmX3Byb3RlY3Rpb25fY29udHJvbGxlci5qcycpLnRoZW4oKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ucmVnaXN0ZXIodGhpcy5pZGVudGlmaWVyLCBjb250cm9sbGVyLmRlZmF1bHQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuZXhwb3J0IHsgY29udHJvbGxlciBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgbmV4dChldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvcmVtXCIpO1xuICAgIH1cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBkZXRhaWxzJztcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZTpzdGF0dXMnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib29vaHBzXCIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICB0b2dnbGVTdGF0ZShldmVudCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoYW5nZW1lbnQgZCdldGF0XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgIC8vIGNvbnN0IGlkID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0Lm9yZGVyZGV0YWlsSWRcbiAgICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FkbWluL29yZGVyZGV0YWlsLyR7aWR9L3RvZ2dsZS1zdGF0ZWAsIHsgbWV0aG9kOiAnUE9TVCcgfSlcbiAgICAgICAgLy8gaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIC8vICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAvLyB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gWydtb2RhbEVsZW1lbnQnXTtcbiAgICBjb21wb25lbnQgPSBudWxsO1xuICAgIGFsZXJ0Qm94ID0gbnVsbDtcblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICB9XG5cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb2RhbDpvcGVuJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyKSB7XG4gICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlLWNhcnQtcG9wdXAnKTtcblxuICAgICAgICAgICAgICAgIC8vIE9uIGFmZmljaGUgbGUgYmFuZGVhdVxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRCb3guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJldmVudFwiLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIC8vIE9uIGxlIGNhY2hlIGF1dG9tYXRpcXVlbWVudCBhcHLDqHMgMyBzZWNvbmRlc1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0Qm94LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWNhcnQnKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuTW9kYWwoKSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbXBvbmVudFwiLGNvbXBvbmVudCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50XCIsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jbGFzc0xpc3QucmVtb3ZlKCdpc1Zpc2libGUnKTtcbiAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG5cbiAgICBvcGVuTW9kYWwoKSB7XG4gICAgICAgIC8vIHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgLy8gd2luZG93LmFsZXJ0KFwibG9yZW0gaXBzdW1cIilcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb21wb25lbnQuc3R5bGUudmlzaWJpbGl0eSlcbiAgICAgICAgLy8gdGhpcy5jb21wb25lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LmFkZCgnaXNWaXNpYmxlJyk7XG4gICAgfVxuXG4gICAgY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5oaWRlKCk7XG4gICAgfVxuXG5cbn1cbiIsIi8vIHNyYy9jb250cm9sbGVyLnRzXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xuaW1wb3J0IHsgQ2hhcnQsIHJlZ2lzdGVyYWJsZXMgfSBmcm9tIFwiY2hhcnQuanNcIjtcbmlmIChyZWdpc3RlcmFibGVzKSB7XG4gIENoYXJ0LnJlZ2lzdGVyKC4uLnJlZ2lzdGVyYWJsZXMpO1xufVxudmFyIGlzQ2hhcnRJbml0aWFsaXplZCA9IGZhbHNlO1xudmFyIGNvbnRyb2xsZXJfZGVmYXVsdCA9IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5jaGFydCA9IG51bGw7XG4gIH1cbiAgY29ubmVjdCgpIHtcbiAgICBpZiAoIWlzQ2hhcnRJbml0aWFsaXplZCkge1xuICAgICAgaXNDaGFydEluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChcImluaXRcIiwge1xuICAgICAgICBDaGFydFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbGVtZW50XCIpO1xuICAgIH1cbiAgICBjb25zdCBwYXlsb2FkID0gdGhpcy52aWV3VmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF5bG9hZC5vcHRpb25zKSAmJiAwID09PSBwYXlsb2FkLm9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICBwYXlsb2FkLm9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KFwicHJlLWNvbm5lY3RcIiwge1xuICAgICAgb3B0aW9uczogcGF5bG9hZC5vcHRpb25zLFxuICAgICAgY29uZmlnOiBwYXlsb2FkXG4gICAgfSk7XG4gICAgY29uc3QgY2FudmFzQ29udGV4dCA9IHRoaXMuZWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKCFjYW52YXNDb250ZXh0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZ2V0Q29udGV4dCgpIGZyb20gRWxlbWVudFwiKTtcbiAgICB9XG4gICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydChjYW52YXNDb250ZXh0LCBwYXlsb2FkKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXCJjb25uZWN0XCIsIHsgY2hhcnQ6IHRoaXMuY2hhcnQgfSk7XG4gIH1cbiAgZGlzY29ubmVjdCgpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXCJkaXNjb25uZWN0XCIsIHsgY2hhcnQ6IHRoaXMuY2hhcnQgfSk7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBJZiB0aGUgdW5kZXJseWluZyBkYXRhIG9yIG9wdGlvbnMgY2hhbmdlLCBsZXQncyB1cGRhdGUgdGhlIGNoYXJ0IVxuICAgKi9cbiAgdmlld1ZhbHVlQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgY29uc3Qgdmlld1ZhbHVlID0geyBkYXRhOiB0aGlzLnZpZXdWYWx1ZS5kYXRhLCBvcHRpb25zOiB0aGlzLnZpZXdWYWx1ZS5vcHRpb25zIH07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2aWV3VmFsdWUub3B0aW9ucykgJiYgMCA9PT0gdmlld1ZhbHVlLm9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHZpZXdWYWx1ZS5vcHRpb25zID0ge307XG4gICAgICB9XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXCJ2aWV3LXZhbHVlLWNoYW5nZVwiLCB2aWV3VmFsdWUpO1xuICAgICAgdGhpcy5jaGFydC5kYXRhID0gdmlld1ZhbHVlLmRhdGE7XG4gICAgICB0aGlzLmNoYXJ0Lm9wdGlvbnMgPSB2aWV3VmFsdWUub3B0aW9ucztcbiAgICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG4gICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICBpZiAocGFyZW50RWxlbWVudCAmJiB0aGlzLmNoYXJ0Lm9wdGlvbnMucmVzcG9uc2l2ZSkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFdpZHRoID0gcGFyZW50RWxlbWVudC5zdHlsZS53aWR0aDtcbiAgICAgICAgcGFyZW50RWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3BhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggKyAxfXB4YDtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcGFyZW50RWxlbWVudC5zdHlsZS53aWR0aCA9IG9yaWdpbmFsV2lkdGg7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQpIHtcbiAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6IFwiY2hhcnRqc1wiIH0pO1xuICB9XG59O1xuY29udHJvbGxlcl9kZWZhdWx0LnZhbHVlcyA9IHtcbiAgdmlldzogT2JqZWN0XG59O1xuZXhwb3J0IHtcbiAgY29udHJvbGxlcl9kZWZhdWx0IGFzIGRlZmF1bHRcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBzcmMvbGl2ZV9jb250cm9sbGVyLnRzXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xuXG4vLyBzcmMvQmFja2VuZC9CYWNrZW5kUmVxdWVzdC50c1xudmFyIEJhY2tlbmRSZXF1ZXN0X2RlZmF1bHQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHByb21pc2UsIGFjdGlvbnMsIHVwZGF0ZU1vZGVscykge1xuICAgIHRoaXMuaXNSZXNvbHZlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5wcm9taXNlLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLmlzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0pO1xuICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgdGhpcy51cGRhdGVkTW9kZWxzID0gdXBkYXRlTW9kZWxzO1xuICB9XG4gIC8qKlxuICAgKiBEb2VzIHRoaXMgQmFja2VuZFJlcXVlc3QgY29udGFpbiBhdCBsZWFzdCBvbiBhY3Rpb24gaW4gdGFyZ2V0ZWRBY3Rpb25zP1xuICAgKi9cbiAgY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5maWx0ZXIoKGFjdGlvbikgPT4gdGFyZ2V0ZWRBY3Rpb25zLmluY2x1ZGVzKGFjdGlvbikpLmxlbmd0aCA+IDA7XG4gIH1cbiAgLyoqXG4gICAqIERvZXMgdGhpcyBCYWNrZW5kUmVxdWVzdCBpbmNsdWRlcyB1cGRhdGVzIGZvciBhbnkgb2YgdGhlc2UgbW9kZWxzP1xuICAgKi9cbiAgYXJlQW55TW9kZWxzVXBkYXRlZCh0YXJnZXRlZE1vZGVscykge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZWRNb2RlbHMuZmlsdGVyKChtb2RlbCkgPT4gdGFyZ2V0ZWRNb2RlbHMuaW5jbHVkZXMobW9kZWwpKS5sZW5ndGggPiAwO1xuICB9XG59O1xuXG4vLyBzcmMvQmFja2VuZC9SZXF1ZXN0QnVpbGRlci50c1xudmFyIFJlcXVlc3RCdWlsZGVyX2RlZmF1bHQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHVybCwgbWV0aG9kID0gXCJwb3N0XCIpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgfVxuICBidWlsZFJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcykge1xuICAgIGNvbnN0IHNwbGl0VXJsID0gdGhpcy51cmwuc3BsaXQoXCI/XCIpO1xuICAgIGxldCBbdXJsXSA9IHNwbGl0VXJsO1xuICAgIGNvbnN0IFssIHF1ZXJ5U3RyaW5nXSA9IHNwbGl0VXJsO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcgfHwgXCJcIik7XG4gICAgY29uc3QgZmV0Y2hPcHRpb25zID0ge307XG4gICAgZmV0Y2hPcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmxpdmUtY29tcG9uZW50K2h0bWxcIixcbiAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXG4gICAgICBcIlgtTGl2ZS1VcmxcIjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaFxuICAgIH07XG4gICAgY29uc3QgdG90YWxGaWxlcyA9IE9iamVjdC5lbnRyaWVzKGZpbGVzKS5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50KSA9PiB0b3RhbCArIGN1cnJlbnQubGVuZ3RoLCAwKTtcbiAgICBjb25zdCBoYXNGaW5nZXJwcmludHMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbikubGVuZ3RoID4gMDtcbiAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDAgJiYgdG90YWxGaWxlcyA9PT0gMCAmJiB0aGlzLm1ldGhvZCA9PT0gXCJnZXRcIiAmJiB0aGlzLndpbGxEYXRhRml0SW5VcmwoXG4gICAgICBKU09OLnN0cmluZ2lmeShwcm9wcyksXG4gICAgICBKU09OLnN0cmluZ2lmeSh1cGRhdGVkKSxcbiAgICAgIHBhcmFtcyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuKSxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpXG4gICAgKSkge1xuICAgICAgcGFyYW1zLnNldChcInByb3BzXCIsIEpTT04uc3RyaW5naWZ5KHByb3BzKSk7XG4gICAgICBwYXJhbXMuc2V0KFwidXBkYXRlZFwiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkKSk7XG4gICAgICBpZiAoT2JqZWN0LmtleXModXBkYXRlZFByb3BzRnJvbVBhcmVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICBwYXJhbXMuc2V0KFwicHJvcHNGcm9tUGFyZW50XCIsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpKTtcbiAgICAgIH1cbiAgICAgIGlmIChoYXNGaW5nZXJwcmludHMpIHtcbiAgICAgICAgcGFyYW1zLnNldChcImNoaWxkcmVuXCIsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuKSk7XG4gICAgICB9XG4gICAgICBmZXRjaE9wdGlvbnMubWV0aG9kID0gXCJHRVRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9IFwiUE9TVFwiO1xuICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB7IHByb3BzLCB1cGRhdGVkIH07XG4gICAgICBpZiAoT2JqZWN0LmtleXModXBkYXRlZFByb3BzRnJvbVBhcmVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICByZXF1ZXN0RGF0YS5wcm9wc0Zyb21QYXJlbnQgPSB1cGRhdGVkUHJvcHNGcm9tUGFyZW50O1xuICAgICAgfVxuICAgICAgaWYgKGhhc0ZpbmdlcnByaW50cykge1xuICAgICAgICByZXF1ZXN0RGF0YS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgfVxuICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICByZXF1ZXN0RGF0YS5hcmdzID0gYWN0aW9uc1swXS5hcmdzO1xuICAgICAgICAgIHVybCArPSBgLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGFjdGlvbnNbMF0ubmFtZSl9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cmwgKz0gXCIvX2JhdGNoXCI7XG4gICAgICAgICAgcmVxdWVzdERhdGEuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJkYXRhXCIsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhKSk7XG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhmaWxlcykpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWVbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmZXRjaE9wdGlvbnMuYm9keSA9IGZvcm1EYXRhO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdXJsOiBgJHt1cmx9JHtwYXJhbXNTdHJpbmcubGVuZ3RoID4gMCA/IGA/JHtwYXJhbXNTdHJpbmd9YCA6IFwiXCJ9YCxcbiAgICAgIGZldGNoT3B0aW9uc1xuICAgIH07XG4gIH1cbiAgd2lsbERhdGFGaXRJblVybChwcm9wc0pzb24sIHVwZGF0ZWRKc29uLCBwYXJhbXMsIGNoaWxkcmVuSnNvbiwgcHJvcHNGcm9tUGFyZW50SnNvbikge1xuICAgIGNvbnN0IHVybEVuY29kZWRKc29uRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoXG4gICAgICBwcm9wc0pzb24gKyB1cGRhdGVkSnNvbiArIGNoaWxkcmVuSnNvbiArIHByb3BzRnJvbVBhcmVudEpzb25cbiAgICApLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuICh1cmxFbmNvZGVkSnNvbkRhdGEgKyBwYXJhbXMudG9TdHJpbmcoKSkubGVuZ3RoIDwgMTUwMDtcbiAgfVxufTtcblxuLy8gc3JjL0JhY2tlbmQvQmFja2VuZC50c1xudmFyIEJhY2tlbmRfZGVmYXVsdCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IodXJsLCBtZXRob2QgPSBcInBvc3RcIikge1xuICAgIHRoaXMucmVxdWVzdEJ1aWxkZXIgPSBuZXcgUmVxdWVzdEJ1aWxkZXJfZGVmYXVsdCh1cmwsIG1ldGhvZCk7XG4gIH1cbiAgbWFrZVJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcykge1xuICAgIGNvbnN0IHsgdXJsLCBmZXRjaE9wdGlvbnMgfSA9IHRoaXMucmVxdWVzdEJ1aWxkZXIuYnVpbGRSZXF1ZXN0KFxuICAgICAgcHJvcHMsXG4gICAgICBhY3Rpb25zLFxuICAgICAgdXBkYXRlZCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgdXBkYXRlZFByb3BzRnJvbVBhcmVudCxcbiAgICAgIGZpbGVzXG4gICAgKTtcbiAgICByZXR1cm4gbmV3IEJhY2tlbmRSZXF1ZXN0X2RlZmF1bHQoXG4gICAgICBmZXRjaCh1cmwsIGZldGNoT3B0aW9ucyksXG4gICAgICBhY3Rpb25zLm1hcCgoYmFja2VuZEFjdGlvbikgPT4gYmFja2VuZEFjdGlvbi5uYW1lKSxcbiAgICAgIE9iamVjdC5rZXlzKHVwZGF0ZWQpXG4gICAgKTtcbiAgfVxufTtcblxuLy8gc3JjL0JhY2tlbmQvQmFja2VuZFJlc3BvbnNlLnRzXG52YXIgQmFja2VuZFJlc3BvbnNlX2RlZmF1bHQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlc3BvbnNlKSB7XG4gICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICB9XG4gIGFzeW5jIGdldEJvZHkoKSB7XG4gICAgaWYgKCF0aGlzLmJvZHkpIHtcbiAgICAgIHRoaXMuYm9keSA9IGF3YWl0IHRoaXMucmVzcG9uc2UudGV4dCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ib2R5O1xuICB9XG4gIGdldExpdmVVcmwoKSB7XG4gICAgaWYgKHZvaWQgMCA9PT0gdGhpcy5saXZlVXJsKSB7XG4gICAgICB0aGlzLmxpdmVVcmwgPSB0aGlzLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiWC1MaXZlLVVybFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGl2ZVVybDtcbiAgfVxufTtcblxuLy8gc3JjL1V0aWwvZ2V0RWxlbWVudEFzVGFnVGV4dC50c1xuZnVuY3Rpb24gZ2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LmlubmVySFRNTCA/IGVsZW1lbnQub3V0ZXJIVE1MLnNsaWNlKDAsIGVsZW1lbnQub3V0ZXJIVE1MLmluZGV4T2YoZWxlbWVudC5pbm5lckhUTUwpKSA6IGVsZW1lbnQub3V0ZXJIVE1MO1xufVxuXG4vLyBzcmMvQ29tcG9uZW50UmVnaXN0cnkudHNcbnZhciBjb21wb25lbnRNYXBCeUVsZW1lbnQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBjb21wb25lbnRNYXBCeUNvbXBvbmVudCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgcmVnaXN0ZXJDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiB7XG4gIGNvbXBvbmVudE1hcEJ5RWxlbWVudC5zZXQoY29tcG9uZW50LmVsZW1lbnQsIGNvbXBvbmVudCk7XG4gIGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LnNldChjb21wb25lbnQsIGNvbXBvbmVudC5uYW1lKTtcbn07XG52YXIgdW5yZWdpc3RlckNvbXBvbmVudCA9IChjb21wb25lbnQpID0+IHtcbiAgY29tcG9uZW50TWFwQnlFbGVtZW50LmRlbGV0ZShjb21wb25lbnQuZWxlbWVudCk7XG4gIGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmRlbGV0ZShjb21wb25lbnQpO1xufTtcbnZhciBnZXRDb21wb25lbnQgPSAoZWxlbWVudCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBsZXQgY291bnQgPSAwO1xuICBjb25zdCBtYXhDb3VudCA9IDEwO1xuICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRNYXBCeUVsZW1lbnQuZ2V0KGVsZW1lbnQpO1xuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgcmVzb2x2ZShjb21wb25lbnQpO1xuICAgIH1cbiAgICBjb3VudCsrO1xuICAgIGlmIChjb3VudCA+IG1heENvdW50KSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoYENvbXBvbmVudCBub3QgZm91bmQgZm9yIGVsZW1lbnQgJHtnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpfWApKTtcbiAgICB9XG4gIH0sIDUpO1xufSk7XG52YXIgZmluZENvbXBvbmVudHMgPSAoY3VycmVudENvbXBvbmVudCwgb25seVBhcmVudHMsIG9ubHlNYXRjaE5hbWUpID0+IHtcbiAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuICBjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcbiAgICBpZiAob25seVBhcmVudHMgJiYgKGN1cnJlbnRDb21wb25lbnQgPT09IGNvbXBvbmVudCB8fCAhY29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoY3VycmVudENvbXBvbmVudC5lbGVtZW50KSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9ubHlNYXRjaE5hbWUgJiYgY29tcG9uZW50TmFtZSAhPT0gb25seU1hdGNoTmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgfSk7XG4gIHJldHVybiBjb21wb25lbnRzO1xufTtcbnZhciBmaW5kQ2hpbGRyZW4gPSAoY3VycmVudENvbXBvbmVudCkgPT4ge1xuICBjb25zdCBjaGlsZHJlbiA9IFtdO1xuICBjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcbiAgICBpZiAoY3VycmVudENvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghY3VycmVudENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGNvbXBvbmVudC5lbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZm91bmRDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuICAgIGNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmZvckVhY2goKGNoaWxkQ29tcG9uZW50TmFtZSwgY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgIGlmIChmb3VuZENoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZENvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGNvbXBvbmVudC5lbGVtZW50KSkge1xuICAgICAgICBmb3VuZENoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjaGlsZHJlbi5wdXNoKGNvbXBvbmVudCk7XG4gIH0pO1xuICByZXR1cm4gY2hpbGRyZW47XG59O1xudmFyIGZpbmRQYXJlbnQgPSAoY3VycmVudENvbXBvbmVudCkgPT4ge1xuICBsZXQgcGFyZW50RWxlbWVudCA9IGN1cnJlbnRDb21wb25lbnQuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB3aGlsZSAocGFyZW50RWxlbWVudCkge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudE1hcEJ5RWxlbWVudC5nZXQocGFyZW50RWxlbWVudCk7XG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG4gICAgcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8vIHNyYy9EaXJlY3RpdmUvZGlyZWN0aXZlc19wYXJzZXIudHNcbmZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlcyhjb250ZW50KSB7XG4gIGNvbnN0IGRpcmVjdGl2ZXMgPSBbXTtcbiAgaWYgKCFjb250ZW50KSB7XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG4gIH1cbiAgbGV0IGN1cnJlbnRBY3Rpb25OYW1lID0gXCJcIjtcbiAgbGV0IGN1cnJlbnRBcmd1bWVudFZhbHVlID0gXCJcIjtcbiAgbGV0IGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgbGV0IGN1cnJlbnRNb2RpZmllcnMgPSBbXTtcbiAgbGV0IHN0YXRlID0gXCJhY3Rpb25cIjtcbiAgY29uc3QgZ2V0TGFzdEFjdGlvbk5hbWUgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICByZXR1cm4gY3VycmVudEFjdGlvbk5hbWU7XG4gICAgfVxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgYW55IGRpcmVjdGl2ZXNcIik7XG4gICAgfVxuICAgIHJldHVybiBkaXJlY3RpdmVzW2RpcmVjdGl2ZXMubGVuZ3RoIC0gMV0uYWN0aW9uO1xuICB9O1xuICBjb25zdCBwdXNoSW5zdHJ1Y3Rpb24gPSAoKSA9PiB7XG4gICAgZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgIGFjdGlvbjogY3VycmVudEFjdGlvbk5hbWUsXG4gICAgICBhcmdzOiBjdXJyZW50QXJndW1lbnRzLFxuICAgICAgbW9kaWZpZXJzOiBjdXJyZW50TW9kaWZpZXJzLFxuICAgICAgZ2V0U3RyaW5nOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pO1xuICAgIGN1cnJlbnRBY3Rpb25OYW1lID0gXCJcIjtcbiAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9IFwiXCI7XG4gICAgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgIGN1cnJlbnRNb2RpZmllcnMgPSBbXTtcbiAgICBzdGF0ZSA9IFwiYWN0aW9uXCI7XG4gIH07XG4gIGNvbnN0IHB1c2hBcmd1bWVudCA9ICgpID0+IHtcbiAgICBjdXJyZW50QXJndW1lbnRzLnB1c2goY3VycmVudEFyZ3VtZW50VmFsdWUudHJpbSgpKTtcbiAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9IFwiXCI7XG4gIH07XG4gIGNvbnN0IHB1c2hNb2RpZmllciA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RpZmllciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcIiBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIGFyZ3VtZW50cy5gKTtcbiAgICB9XG4gICAgY3VycmVudE1vZGlmaWVycy5wdXNoKHtcbiAgICAgIG5hbWU6IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgdmFsdWU6IGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCA/IGN1cnJlbnRBcmd1bWVudHNbMF0gOiBudWxsXG4gICAgfSk7XG4gICAgY3VycmVudEFjdGlvbk5hbWUgPSBcIlwiO1xuICAgIGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICBzdGF0ZSA9IFwiYWN0aW9uXCI7XG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNoYXIgPSBjb250ZW50W2ldO1xuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgIGNhc2UgXCJhY3Rpb25cIjpcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgc3RhdGUgPSBcImFyZ3VtZW50c1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIiBcIikge1xuICAgICAgICAgIGlmIChjdXJyZW50QWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgcHVzaEluc3RydWN0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcInxcIikge1xuICAgICAgICAgIHB1c2hNb2RpZmllcigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRBY3Rpb25OYW1lICs9IGNoYXI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImFyZ3VtZW50c1wiOlxuICAgICAgICBpZiAoY2hhciA9PT0gXCIpXCIpIHtcbiAgICAgICAgICBwdXNoQXJndW1lbnQoKTtcbiAgICAgICAgICBzdGF0ZSA9IFwiYWZ0ZXJfYXJndW1lbnRzXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiLFwiKSB7XG4gICAgICAgICAgcHVzaEFyZ3VtZW50KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgKz0gY2hhcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYWZ0ZXJfYXJndW1lbnRzXCI6XG4gICAgICAgIGlmIChjaGFyID09PSBcInxcIikge1xuICAgICAgICAgIHB1c2hNb2RpZmllcigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyICE9PSBcIiBcIikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBzcGFjZSBhZnRlciAke2dldExhc3RBY3Rpb25OYW1lKCl9KClgKTtcbiAgICAgICAgfVxuICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN3aXRjaCAoc3RhdGUpIHtcbiAgICBjYXNlIFwiYWN0aW9uXCI6XG4gICAgY2FzZSBcImFmdGVyX2FyZ3VtZW50c1wiOlxuICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgIHB1c2hJbnN0cnVjdGlvbigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRGlkIHlvdSBmb3JnZXQgdG8gYWRkIGEgY2xvc2luZyBcIilcIiBhZnRlciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9XCI/YCk7XG4gIH1cbiAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5cbi8vIHNyYy9zdHJpbmdfdXRpbHMudHNcbmZ1bmN0aW9uIGNvbWJpbmVTcGFjZWRBcnJheShwYXJ0cykge1xuICBjb25zdCBmaW5hbFBhcnRzID0gW107XG4gIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICBmaW5hbFBhcnRzLnB1c2goLi4udHJpbUFsbChwYXJ0KS5zcGxpdChcIiBcIikpO1xuICB9KTtcbiAgcmV0dXJuIGZpbmFsUGFydHM7XG59XG5mdW5jdGlvbiB0cmltQWxsKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXHNdKy9nLCBcIiBcIikudHJpbSgpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKSB7XG4gIHJldHVybiBtb2RlbC5yZXBsYWNlKC9cXFtdJC8sIFwiXCIpLnNwbGl0KFwiW1wiKS5tYXAoKHMpID0+IHMucmVwbGFjZShcIl1cIiwgXCJcIikpLmpvaW4oXCIuXCIpO1xufVxuXG4vLyBzcmMvZG9tX3V0aWxzLnRzXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHZhbHVlU3RvcmUpIHtcbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICBjb25zdCBtb2RlbE5hbWVEYXRhID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCBmYWxzZSk7XG4gICAgICBpZiAobW9kZWxOYW1lRGF0YSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtb2RlbFZhbHVlID0gdmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lRGF0YS5hY3Rpb24pO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtb2RlbFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgbW9kZWxWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE9iamVjdChtb2RlbFZhbHVlKSA9PT0gbW9kZWxWYWx1ZSkge1xuICAgICAgICAgIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgT2JqZWN0LnZhbHVlcyhtb2RlbFZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcInZhbHVlXCIpKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNoZWNrZWQgPyBlbGVtZW50LmdldEF0dHJpYnV0ZShcInZhbHVlXCIpIDogbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbGVtZW50LmNoZWNrZWQ7XG4gICAgfVxuICAgIHJldHVybiBpbnB1dFZhbHVlKGVsZW1lbnQpO1xuICB9XG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgoZWwpID0+IGVsLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gIH1cbiAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKSkge1xuICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQudmFsdWU7XG4gIH1cbiAgaWYgKFwidmFsdWVcIiBpbiBlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gIH1cbiAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwidmFsdWVcIikpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHNldFZhbHVlT25FbGVtZW50KGVsZW1lbnQsIHZhbHVlKSB7XG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LnR5cGUgPT09IFwiZmlsZVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlbGVtZW50LnR5cGUgPT09IFwicmFkaW9cIikge1xuICAgICAgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgZWxlbWVudC5jaGVja2VkID0gdmFsdWUuc29tZSgodmFsKSA9PiB2YWwgPT0gZWxlbWVudC52YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwidmFsdWVcIikpIHtcbiAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgY29uc3QgYXJyYXlXcmFwcGVkVmFsdWUgPSBbXS5jb25jYXQodmFsdWUpLm1hcCgodmFsdWUyKSA9PiB7XG4gICAgICByZXR1cm4gYCR7dmFsdWUyfWA7XG4gICAgfSk7XG4gICAgQXJyYXkuZnJvbShlbGVtZW50Lm9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gYXJyYXlXcmFwcGVkVmFsdWUuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZSA9PT0gdm9pZCAwID8gXCJcIiA6IHZhbHVlO1xuICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG59XG5mdW5jdGlvbiBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudC5kYXRhc2V0Lm1vZGVsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0Lm1vZGVsKTtcbiAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICBpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVGhlIGRhdGEtbW9kZWw9XCIke2VsZW1lbnQuZGF0YXNldC5tb2RlbH1cIiBmb3JtYXQgaXMgaW52YWxpZDogaXQgZG9lcyBub3Qgc3VwcG9ydCBwYXNzaW5nIGFyZ3VtZW50cyB0byB0aGUgbW9kZWwuYFxuICAgICAgKTtcbiAgICB9XG4gICAgZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShkaXJlY3RpdmUuYWN0aW9uKTtcbiAgfSk7XG4gIHJldHVybiBkaXJlY3RpdmVzO1xufVxuZnVuY3Rpb24gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCB0aHJvd09uTWlzc2luZyA9IHRydWUpIHtcbiAgY29uc3QgZGF0YU1vZGVsRGlyZWN0aXZlcyA9IGdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzKGVsZW1lbnQpO1xuICBpZiAoZGF0YU1vZGVsRGlyZWN0aXZlcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGRhdGFNb2RlbERpcmVjdGl2ZXNbMF07XG4gIH1cbiAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSkge1xuICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gZWxlbWVudC5jbG9zZXN0KFwiZm9ybVwiKTtcbiAgICBpZiAoZm9ybUVsZW1lbnQgJiYgXCJtb2RlbFwiIGluIGZvcm1FbGVtZW50LmRhdGFzZXQpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZm9ybUVsZW1lbnQuZGF0YXNldC5tb2RlbCB8fCBcIipcIik7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSBkaXJlY3RpdmVzWzBdO1xuICAgICAgaWYgKGRpcmVjdGl2ZS5hcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBUaGUgZGF0YS1tb2RlbD1cIiR7Zm9ybUVsZW1lbnQuZGF0YXNldC5tb2RlbH1cIiBmb3JtYXQgaXMgaW52YWxpZDogaXQgZG9lcyBub3Qgc3VwcG9ydCBwYXNzaW5nIGFyZ3VtZW50cyB0byB0aGUgbW9kZWwuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShlbGVtZW50LmdldEF0dHJpYnV0ZShcIm5hbWVcIikpO1xuICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICB9XG4gIH1cbiAgaWYgKCF0aHJvd09uTWlzc2luZykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgQ2Fubm90IGRldGVybWluZSB0aGUgbW9kZWwgbmFtZSBmb3IgXCIke2dldEVsZW1lbnRBc1RhZ1RleHQoXG4gICAgICBlbGVtZW50XG4gICAgKX1cIjogdGhlIGVsZW1lbnQgbXVzdCBlaXRoZXIgaGF2ZSBhIFwiZGF0YS1tb2RlbFwiIChvciBcIm5hbWVcIiBhdHRyaWJ1dGUgbGl2aW5nIGluc2lkZSBhIDxmb3JtIGRhdGEtbW9kZWw9XCIqXCI+KS5gXG4gICk7XG59XG5mdW5jdGlvbiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpIHtcbiAgaWYgKGNvbXBvbmVudC5lbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCFjb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBjbG9zZXN0TGl2ZUNvbXBvbmVudCA9IGVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtY29udHJvbGxlcn49XCJsaXZlXCJdJyk7XG4gIHJldHVybiBjbG9zZXN0TGl2ZUNvbXBvbmVudCA9PT0gY29tcG9uZW50LmVsZW1lbnQ7XG59XG5mdW5jdGlvbiBjbG9uZUhUTUxFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICBpZiAoIShuZXdFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNsb25lIGVsZW1lbnRcIik7XG4gIH1cbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5mdW5jdGlvbiBodG1sVG9FbGVtZW50KGh0bWwpIHtcbiAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG4gIGh0bWwgPSBodG1sLnRyaW0oKTtcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgaWYgKHRlbXBsYXRlLmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnQgPiAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYENvbXBvbmVudCBIVE1MIGNvbnRhaW5zICR7dGVtcGxhdGUuY29udGVudC5jaGlsZEVsZW1lbnRDb3VudH0gZWxlbWVudHMsIGJ1dCBvbmx5IDEgcm9vdCBlbGVtZW50IGlzIGFsbG93ZWQuYFxuICAgICk7XG4gIH1cbiAgY29uc3QgY2hpbGQgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICBpZiAoIWNoaWxkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2hpbGQgbm90IGZvdW5kXCIpO1xuICB9XG4gIGlmICghKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDcmVhdGVkIGVsZW1lbnQgaXMgbm90IGFuIEhUTUxFbGVtZW50OiAke2h0bWwudHJpbSgpfWApO1xuICB9XG4gIHJldHVybiBjaGlsZDtcbn1cbnZhciBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUgPSAoZWxlbWVudCwgY3VycmVudFZhbHVlcykgPT4ge1xuICBjb25zdCBmaW5hbFZhbHVlcyA9IFsuLi5jdXJyZW50VmFsdWVzXTtcbiAgY29uc3QgdmFsdWUgPSBpbnB1dFZhbHVlKGVsZW1lbnQpO1xuICBjb25zdCBpbmRleCA9IGN1cnJlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBmaW5hbFZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmFsVmFsdWVzO1xuICB9XG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgZmluYWxWYWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gZmluYWxWYWx1ZXM7XG59O1xudmFyIGlucHV0VmFsdWUgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5kYXRhc2V0LnZhbHVlID8gZWxlbWVudC5kYXRhc2V0LnZhbHVlIDogZWxlbWVudC52YWx1ZTtcbmZ1bmN0aW9uIGlzVGV4dHVhbElucHV0RWxlbWVudChlbCkge1xuICByZXR1cm4gZWwgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIFtcInRleHRcIiwgXCJlbWFpbFwiLCBcInBhc3N3b3JkXCIsIFwic2VhcmNoXCIsIFwidGVsXCIsIFwidXJsXCJdLmluY2x1ZGVzKGVsLnR5cGUpO1xufVxuZnVuY3Rpb24gaXNUZXh0YXJlYUVsZW1lbnQoZWwpIHtcbiAgcmV0dXJuIGVsIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzTnVtZXJpY2FsSW5wdXRFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIFtcIm51bWJlclwiLCBcInJhbmdlXCJdLmluY2x1ZGVzKGVsZW1lbnQudHlwZSk7XG59XG5cbi8vIHNyYy9Ib29rTWFuYWdlci50c1xudmFyIEhvb2tNYW5hZ2VyX2RlZmF1bHQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaG9va3MgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICB9XG4gIHJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgIGhvb2tzLnB1c2goY2FsbGJhY2spO1xuICAgIHRoaXMuaG9va3Muc2V0KGhvb2tOYW1lLCBob29rcyk7XG4gIH1cbiAgdW5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICBjb25zdCBpbmRleCA9IGhvb2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaG9va3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLmhvb2tzLnNldChob29rTmFtZSwgaG9va3MpO1xuICB9XG4gIHRyaWdnZXJIb29rKGhvb2tOYW1lLCAuLi5hcmdzKSB7XG4gICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgaG9va3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKC4uLmFyZ3MpKTtcbiAgfVxufTtcblxuLy8gLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2lkaW9tb3JwaEAwLjMuMC9ub2RlX21vZHVsZXMvaWRpb21vcnBoL2Rpc3QvaWRpb21vcnBoLmVzbS5qc1xudmFyIElkaW9tb3JwaCA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgbGV0IEVNUFRZX1NFVCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGxldCBkZWZhdWx0cyA9IHtcbiAgICBtb3JwaFN0eWxlOiBcIm91dGVySFRNTFwiLFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgYmVmb3JlTm9kZUFkZGVkOiBub09wLFxuICAgICAgYWZ0ZXJOb2RlQWRkZWQ6IG5vT3AsXG4gICAgICBiZWZvcmVOb2RlTW9ycGhlZDogbm9PcCxcbiAgICAgIGFmdGVyTm9kZU1vcnBoZWQ6IG5vT3AsXG4gICAgICBiZWZvcmVOb2RlUmVtb3ZlZDogbm9PcCxcbiAgICAgIGFmdGVyTm9kZVJlbW92ZWQ6IG5vT3AsXG4gICAgICBiZWZvcmVBdHRyaWJ1dGVVcGRhdGVkOiBub09wXG4gICAgfSxcbiAgICBoZWFkOiB7XG4gICAgICBzdHlsZTogXCJtZXJnZVwiLFxuICAgICAgc2hvdWxkUHJlc2VydmU6IGZ1bmN0aW9uKGVsdCkge1xuICAgICAgICByZXR1cm4gZWx0LmdldEF0dHJpYnV0ZShcImltLXByZXNlcnZlXCIpID09PSBcInRydWVcIjtcbiAgICAgIH0sXG4gICAgICBzaG91bGRSZUFwcGVuZDogZnVuY3Rpb24oZWx0KSB7XG4gICAgICAgIHJldHVybiBlbHQuZ2V0QXR0cmlidXRlKFwiaW0tcmUtYXBwZW5kXCIpID09PSBcInRydWVcIjtcbiAgICAgIH0sXG4gICAgICBzaG91bGRSZW1vdmU6IG5vT3AsXG4gICAgICBhZnRlckhlYWRNb3JwaGVkOiBub09wXG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBtb3JwaChvbGROb2RlLCBuZXdDb250ZW50LCBjb25maWcgPSB7fSkge1xuICAgIGlmIChvbGROb2RlIGluc3RhbmNlb2YgRG9jdW1lbnQpIHtcbiAgICAgIG9sZE5vZGUgPSBvbGROb2RlLmRvY3VtZW50RWxlbWVudDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBuZXdDb250ZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBuZXdDb250ZW50ID0gcGFyc2VDb250ZW50KG5ld0NvbnRlbnQpO1xuICAgIH1cbiAgICBsZXQgbm9ybWFsaXplZENvbnRlbnQgPSBub3JtYWxpemVDb250ZW50KG5ld0NvbnRlbnQpO1xuICAgIGxldCBjdHggPSBjcmVhdGVNb3JwaENvbnRleHQob2xkTm9kZSwgbm9ybWFsaXplZENvbnRlbnQsIGNvbmZpZyk7XG4gICAgcmV0dXJuIG1vcnBoTm9ybWFsaXplZENvbnRlbnQob2xkTm9kZSwgbm9ybWFsaXplZENvbnRlbnQsIGN0eCk7XG4gIH1cbiAgZnVuY3Rpb24gbW9ycGhOb3JtYWxpemVkQ29udGVudChvbGROb2RlLCBub3JtYWxpemVkTmV3Q29udGVudCwgY3R4KSB7XG4gICAgaWYgKGN0eC5oZWFkLmJsb2NrKSB7XG4gICAgICBsZXQgb2xkSGVhZCA9IG9sZE5vZGUucXVlcnlTZWxlY3RvcihcImhlYWRcIik7XG4gICAgICBsZXQgbmV3SGVhZCA9IG5vcm1hbGl6ZWROZXdDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO1xuICAgICAgaWYgKG9sZEhlYWQgJiYgbmV3SGVhZCkge1xuICAgICAgICBsZXQgcHJvbWlzZXMgPSBoYW5kbGVIZWFkRWxlbWVudChuZXdIZWFkLCBvbGRIZWFkLCBjdHgpO1xuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICBtb3JwaE5vcm1hbGl6ZWRDb250ZW50KG9sZE5vZGUsIG5vcm1hbGl6ZWROZXdDb250ZW50LCBPYmplY3QuYXNzaWduKGN0eCwge1xuICAgICAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgICBibG9jazogZmFsc2UsXG4gICAgICAgICAgICAgIGlnbm9yZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGN0eC5tb3JwaFN0eWxlID09PSBcImlubmVySFRNTFwiKSB7XG4gICAgICBtb3JwaENoaWxkcmVuKG5vcm1hbGl6ZWROZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuICAgICAgcmV0dXJuIG9sZE5vZGUuY2hpbGRyZW47XG4gICAgfSBlbHNlIGlmIChjdHgubW9ycGhTdHlsZSA9PT0gXCJvdXRlckhUTUxcIiB8fCBjdHgubW9ycGhTdHlsZSA9PSBudWxsKSB7XG4gICAgICBsZXQgYmVzdE1hdGNoID0gZmluZEJlc3ROb2RlTWF0Y2gobm9ybWFsaXplZE5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG4gICAgICBsZXQgcHJldmlvdXNTaWJsaW5nID0gYmVzdE1hdGNoPy5wcmV2aW91c1NpYmxpbmc7XG4gICAgICBsZXQgbmV4dFNpYmxpbmcgPSBiZXN0TWF0Y2g/Lm5leHRTaWJsaW5nO1xuICAgICAgbGV0IG1vcnBoZWROb2RlID0gbW9ycGhPbGROb2RlVG8ob2xkTm9kZSwgYmVzdE1hdGNoLCBjdHgpO1xuICAgICAgaWYgKGJlc3RNYXRjaCkge1xuICAgICAgICByZXR1cm4gaW5zZXJ0U2libGluZ3MocHJldmlvdXNTaWJsaW5nLCBtb3JwaGVkTm9kZSwgbmV4dFNpYmxpbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBcIkRvIG5vdCB1bmRlcnN0YW5kIGhvdyB0byBtb3JwaCBzdHlsZSBcIiArIGN0eC5tb3JwaFN0eWxlO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBpZ25vcmVWYWx1ZU9mQWN0aXZlRWxlbWVudChwb3NzaWJsZUFjdGl2ZUVsZW1lbnQsIGN0eCkge1xuICAgIHJldHVybiBjdHguaWdub3JlQWN0aXZlVmFsdWUgJiYgcG9zc2libGVBY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICB9XG4gIGZ1bmN0aW9uIG1vcnBoT2xkTm9kZVRvKG9sZE5vZGUsIG5ld0NvbnRlbnQsIGN0eCkge1xuICAgIGlmIChjdHguaWdub3JlQWN0aXZlICYmIG9sZE5vZGUgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICB9IGVsc2UgaWYgKG5ld0NvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZVJlbW92ZWQob2xkTm9kZSkgPT09IGZhbHNlKSByZXR1cm4gb2xkTm9kZTtcbiAgICAgIG9sZE5vZGUucmVtb3ZlKCk7XG4gICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZVJlbW92ZWQob2xkTm9kZSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2UgaWYgKCFpc1NvZnRNYXRjaChvbGROb2RlLCBuZXdDb250ZW50KSkge1xuICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZVJlbW92ZWQob2xkTm9kZSkgPT09IGZhbHNlKSByZXR1cm4gb2xkTm9kZTtcbiAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVBZGRlZChuZXdDb250ZW50KSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuICAgICAgb2xkTm9kZS5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChuZXdDb250ZW50LCBvbGROb2RlKTtcbiAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3Q29udGVudCk7XG4gICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZVJlbW92ZWQob2xkTm9kZSk7XG4gICAgICByZXR1cm4gbmV3Q29udGVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZU1vcnBoZWQob2xkTm9kZSwgbmV3Q29udGVudCkgPT09IGZhbHNlKSByZXR1cm4gb2xkTm9kZTtcbiAgICAgIGlmIChvbGROb2RlIGluc3RhbmNlb2YgSFRNTEhlYWRFbGVtZW50ICYmIGN0eC5oZWFkLmlnbm9yZSkge1xuICAgICAgfSBlbHNlIGlmIChvbGROb2RlIGluc3RhbmNlb2YgSFRNTEhlYWRFbGVtZW50ICYmIGN0eC5oZWFkLnN0eWxlICE9PSBcIm1vcnBoXCIpIHtcbiAgICAgICAgaGFuZGxlSGVhZEVsZW1lbnQobmV3Q29udGVudCwgb2xkTm9kZSwgY3R4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN5bmNOb2RlRnJvbShuZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuICAgICAgICBpZiAoIWlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50KG9sZE5vZGUsIGN0eCkpIHtcbiAgICAgICAgICBtb3JwaENoaWxkcmVuKG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlTW9ycGhlZChvbGROb2RlLCBuZXdDb250ZW50KTtcbiAgICAgIHJldHVybiBvbGROb2RlO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBtb3JwaENoaWxkcmVuKG5ld1BhcmVudCwgb2xkUGFyZW50LCBjdHgpIHtcbiAgICBsZXQgbmV4dE5ld0NoaWxkID0gbmV3UGFyZW50LmZpcnN0Q2hpbGQ7XG4gICAgbGV0IGluc2VydGlvblBvaW50ID0gb2xkUGFyZW50LmZpcnN0Q2hpbGQ7XG4gICAgbGV0IG5ld0NoaWxkO1xuICAgIHdoaWxlIChuZXh0TmV3Q2hpbGQpIHtcbiAgICAgIG5ld0NoaWxkID0gbmV4dE5ld0NoaWxkO1xuICAgICAgbmV4dE5ld0NoaWxkID0gbmV3Q2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICBpZiAoaW5zZXJ0aW9uUG9pbnQgPT0gbnVsbCkge1xuICAgICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlQWRkZWQobmV3Q2hpbGQpID09PSBmYWxzZSkgcmV0dXJuO1xuICAgICAgICBvbGRQYXJlbnQuYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZUFkZGVkKG5ld0NoaWxkKTtcbiAgICAgICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGlzSWRTZXRNYXRjaChuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCkpIHtcbiAgICAgICAgbW9ycGhPbGROb2RlVG8oaW5zZXJ0aW9uUG9pbnQsIG5ld0NoaWxkLCBjdHgpO1xuICAgICAgICBpbnNlcnRpb25Qb2ludCA9IGluc2VydGlvblBvaW50Lm5leHRTaWJsaW5nO1xuICAgICAgICByZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIG5ld0NoaWxkKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBsZXQgaWRTZXRNYXRjaCA9IGZpbmRJZFNldE1hdGNoKG5ld1BhcmVudCwgb2xkUGFyZW50LCBuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCk7XG4gICAgICBpZiAoaWRTZXRNYXRjaCkge1xuICAgICAgICBpbnNlcnRpb25Qb2ludCA9IHJlbW92ZU5vZGVzQmV0d2VlbihpbnNlcnRpb25Qb2ludCwgaWRTZXRNYXRjaCwgY3R4KTtcbiAgICAgICAgbW9ycGhPbGROb2RlVG8oaWRTZXRNYXRjaCwgbmV3Q2hpbGQsIGN0eCk7XG4gICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGxldCBzb2Z0TWF0Y2ggPSBmaW5kU29mdE1hdGNoKG5ld1BhcmVudCwgb2xkUGFyZW50LCBuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCk7XG4gICAgICBpZiAoc29mdE1hdGNoKSB7XG4gICAgICAgIGluc2VydGlvblBvaW50ID0gcmVtb3ZlTm9kZXNCZXR3ZWVuKGluc2VydGlvblBvaW50LCBzb2Z0TWF0Y2gsIGN0eCk7XG4gICAgICAgIG1vcnBoT2xkTm9kZVRvKHNvZnRNYXRjaCwgbmV3Q2hpbGQsIGN0eCk7XG4gICAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVBZGRlZChuZXdDaGlsZCkgPT09IGZhbHNlKSByZXR1cm47XG4gICAgICBvbGRQYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCk7XG4gICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZUFkZGVkKG5ld0NoaWxkKTtcbiAgICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuICAgIH1cbiAgICB3aGlsZSAoaW5zZXJ0aW9uUG9pbnQgIT09IG51bGwpIHtcbiAgICAgIGxldCB0ZW1wTm9kZSA9IGluc2VydGlvblBvaW50O1xuICAgICAgaW5zZXJ0aW9uUG9pbnQgPSBpbnNlcnRpb25Qb2ludC5uZXh0U2libGluZztcbiAgICAgIHJlbW92ZU5vZGUodGVtcE5vZGUsIGN0eCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGlnbm9yZUF0dHJpYnV0ZShhdHRyLCB0bywgdXBkYXRlVHlwZSwgY3R4KSB7XG4gICAgaWYgKGF0dHIgPT09IFwidmFsdWVcIiAmJiBjdHguaWdub3JlQWN0aXZlVmFsdWUgJiYgdG8gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY3R4LmNhbGxiYWNrcy5iZWZvcmVBdHRyaWJ1dGVVcGRhdGVkKGF0dHIsIHRvLCB1cGRhdGVUeXBlKSA9PT0gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gc3luY05vZGVGcm9tKGZyb20sIHRvLCBjdHgpIHtcbiAgICBsZXQgdHlwZSA9IGZyb20ubm9kZVR5cGU7XG4gICAgaWYgKHR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGZyb21BdHRyaWJ1dGVzID0gZnJvbS5hdHRyaWJ1dGVzO1xuICAgICAgY29uc3QgdG9BdHRyaWJ1dGVzID0gdG8uYXR0cmlidXRlcztcbiAgICAgIGZvciAoY29uc3QgZnJvbUF0dHJpYnV0ZSBvZiBmcm9tQXR0cmlidXRlcykge1xuICAgICAgICBpZiAoaWdub3JlQXR0cmlidXRlKGZyb21BdHRyaWJ1dGUubmFtZSwgdG8sIFwidXBkYXRlXCIsIGN0eCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG8uZ2V0QXR0cmlidXRlKGZyb21BdHRyaWJ1dGUubmFtZSkgIT09IGZyb21BdHRyaWJ1dGUudmFsdWUpIHtcbiAgICAgICAgICB0by5zZXRBdHRyaWJ1dGUoZnJvbUF0dHJpYnV0ZS5uYW1lLCBmcm9tQXR0cmlidXRlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IHRvQXR0cmlidXRlcy5sZW5ndGggLSAxOyAwIDw9IGk7IGktLSkge1xuICAgICAgICBjb25zdCB0b0F0dHJpYnV0ZSA9IHRvQXR0cmlidXRlc1tpXTtcbiAgICAgICAgaWYgKGlnbm9yZUF0dHJpYnV0ZSh0b0F0dHJpYnV0ZS5uYW1lLCB0bywgXCJyZW1vdmVcIiwgY3R4KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZnJvbS5oYXNBdHRyaWJ1dGUodG9BdHRyaWJ1dGUubmFtZSkpIHtcbiAgICAgICAgICB0by5yZW1vdmVBdHRyaWJ1dGUodG9BdHRyaWJ1dGUubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IDggfHwgdHlwZSA9PT0gMykge1xuICAgICAgaWYgKHRvLm5vZGVWYWx1ZSAhPT0gZnJvbS5ub2RlVmFsdWUpIHtcbiAgICAgICAgdG8ubm9kZVZhbHVlID0gZnJvbS5ub2RlVmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghaWdub3JlVmFsdWVPZkFjdGl2ZUVsZW1lbnQodG8sIGN0eCkpIHtcbiAgICAgIHN5bmNJbnB1dFZhbHVlKGZyb20sIHRvLCBjdHgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzeW5jQm9vbGVhbkF0dHJpYnV0ZShmcm9tLCB0bywgYXR0cmlidXRlTmFtZSwgY3R4KSB7XG4gICAgaWYgKGZyb21bYXR0cmlidXRlTmFtZV0gIT09IHRvW2F0dHJpYnV0ZU5hbWVdKSB7XG4gICAgICBsZXQgaWdub3JlVXBkYXRlID0gaWdub3JlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHRvLCBcInVwZGF0ZVwiLCBjdHgpO1xuICAgICAgaWYgKCFpZ25vcmVVcGRhdGUpIHtcbiAgICAgICAgdG9bYXR0cmlidXRlTmFtZV0gPSBmcm9tW2F0dHJpYnV0ZU5hbWVdO1xuICAgICAgfVxuICAgICAgaWYgKGZyb21bYXR0cmlidXRlTmFtZV0pIHtcbiAgICAgICAgaWYgKCFpZ25vcmVVcGRhdGUpIHtcbiAgICAgICAgICB0by5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgZnJvbVthdHRyaWJ1dGVOYW1lXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaWdub3JlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHRvLCBcInJlbW92ZVwiLCBjdHgpKSB7XG4gICAgICAgICAgdG8ucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHN5bmNJbnB1dFZhbHVlKGZyb20sIHRvLCBjdHgpIHtcbiAgICBpZiAoZnJvbSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgdG8gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGZyb20udHlwZSAhPT0gXCJmaWxlXCIpIHtcbiAgICAgIGxldCBmcm9tVmFsdWUgPSBmcm9tLnZhbHVlO1xuICAgICAgbGV0IHRvVmFsdWUgPSB0by52YWx1ZTtcbiAgICAgIHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCBcImNoZWNrZWRcIiwgY3R4KTtcbiAgICAgIHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCBcImRpc2FibGVkXCIsIGN0eCk7XG4gICAgICBpZiAoIWZyb20uaGFzQXR0cmlidXRlKFwidmFsdWVcIikpIHtcbiAgICAgICAgaWYgKCFpZ25vcmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0bywgXCJyZW1vdmVcIiwgY3R4KSkge1xuICAgICAgICAgIHRvLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICB0by5yZW1vdmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChmcm9tVmFsdWUgIT09IHRvVmFsdWUpIHtcbiAgICAgICAgaWYgKCFpZ25vcmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0bywgXCJ1cGRhdGVcIiwgY3R4KSkge1xuICAgICAgICAgIHRvLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGZyb21WYWx1ZSk7XG4gICAgICAgICAgdG8udmFsdWUgPSBmcm9tVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZyb20gaW5zdGFuY2VvZiBIVE1MT3B0aW9uRWxlbWVudCkge1xuICAgICAgc3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sIFwic2VsZWN0ZWRcIiwgY3R4KTtcbiAgICB9IGVsc2UgaWYgKGZyb20gaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50ICYmIHRvIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuICAgICAgbGV0IGZyb21WYWx1ZSA9IGZyb20udmFsdWU7XG4gICAgICBsZXQgdG9WYWx1ZSA9IHRvLnZhbHVlO1xuICAgICAgaWYgKGlnbm9yZUF0dHJpYnV0ZShcInZhbHVlXCIsIHRvLCBcInVwZGF0ZVwiLCBjdHgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChmcm9tVmFsdWUgIT09IHRvVmFsdWUpIHtcbiAgICAgICAgdG8udmFsdWUgPSBmcm9tVmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAodG8uZmlyc3RDaGlsZCAmJiB0by5maXJzdENoaWxkLm5vZGVWYWx1ZSAhPT0gZnJvbVZhbHVlKSB7XG4gICAgICAgIHRvLmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gZnJvbVZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVIZWFkRWxlbWVudChuZXdIZWFkVGFnLCBjdXJyZW50SGVhZCwgY3R4KSB7XG4gICAgbGV0IGFkZGVkID0gW107XG4gICAgbGV0IHJlbW92ZWQgPSBbXTtcbiAgICBsZXQgcHJlc2VydmVkID0gW107XG4gICAgbGV0IG5vZGVzVG9BcHBlbmQgPSBbXTtcbiAgICBsZXQgaGVhZE1lcmdlU3R5bGUgPSBjdHguaGVhZC5zdHlsZTtcbiAgICBsZXQgc3JjVG9OZXdIZWFkTm9kZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgbmV3SGVhZENoaWxkIG9mIG5ld0hlYWRUYWcuY2hpbGRyZW4pIHtcbiAgICAgIHNyY1RvTmV3SGVhZE5vZGVzLnNldChuZXdIZWFkQ2hpbGQub3V0ZXJIVE1MLCBuZXdIZWFkQ2hpbGQpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGN1cnJlbnRIZWFkRWx0IG9mIGN1cnJlbnRIZWFkLmNoaWxkcmVuKSB7XG4gICAgICBsZXQgaW5OZXdDb250ZW50ID0gc3JjVG9OZXdIZWFkTm9kZXMuaGFzKGN1cnJlbnRIZWFkRWx0Lm91dGVySFRNTCk7XG4gICAgICBsZXQgaXNSZUFwcGVuZGVkID0gY3R4LmhlYWQuc2hvdWxkUmVBcHBlbmQoY3VycmVudEhlYWRFbHQpO1xuICAgICAgbGV0IGlzUHJlc2VydmVkID0gY3R4LmhlYWQuc2hvdWxkUHJlc2VydmUoY3VycmVudEhlYWRFbHQpO1xuICAgICAgaWYgKGluTmV3Q29udGVudCB8fCBpc1ByZXNlcnZlZCkge1xuICAgICAgICBpZiAoaXNSZUFwcGVuZGVkKSB7XG4gICAgICAgICAgcmVtb3ZlZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcmNUb05ld0hlYWROb2Rlcy5kZWxldGUoY3VycmVudEhlYWRFbHQub3V0ZXJIVE1MKTtcbiAgICAgICAgICBwcmVzZXJ2ZWQucHVzaChjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChoZWFkTWVyZ2VTdHlsZSA9PT0gXCJhcHBlbmRcIikge1xuICAgICAgICAgIGlmIChpc1JlQXBwZW5kZWQpIHtcbiAgICAgICAgICAgIHJlbW92ZWQucHVzaChjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgICAgICBub2Rlc1RvQXBwZW5kLnB1c2goY3VycmVudEhlYWRFbHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY3R4LmhlYWQuc2hvdWxkUmVtb3ZlKGN1cnJlbnRIZWFkRWx0KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJlbW92ZWQucHVzaChjdXJyZW50SGVhZEVsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG5vZGVzVG9BcHBlbmQucHVzaCguLi5zcmNUb05ld0hlYWROb2Rlcy52YWx1ZXMoKSk7XG4gICAgbG9nKFwidG8gYXBwZW5kOiBcIiwgbm9kZXNUb0FwcGVuZCk7XG4gICAgbGV0IHByb21pc2VzID0gW107XG4gICAgZm9yIChjb25zdCBuZXdOb2RlIG9mIG5vZGVzVG9BcHBlbmQpIHtcbiAgICAgIGxvZyhcImFkZGluZzogXCIsIG5ld05vZGUpO1xuICAgICAgbGV0IG5ld0VsdCA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KG5ld05vZGUub3V0ZXJIVE1MKS5maXJzdENoaWxkO1xuICAgICAgbG9nKG5ld0VsdCk7XG4gICAgICBpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlQWRkZWQobmV3RWx0KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKG5ld0VsdC5ocmVmIHx8IG5ld0VsdC5zcmMpIHtcbiAgICAgICAgICBsZXQgcmVzb2x2ZSA9IG51bGw7XG4gICAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihfcmVzb2x2ZSkge1xuICAgICAgICAgICAgcmVzb2x2ZSA9IF9yZXNvbHZlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG5ld0VsdC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRIZWFkLmFwcGVuZENoaWxkKG5ld0VsdCk7XG4gICAgICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3RWx0KTtcbiAgICAgICAgYWRkZWQucHVzaChuZXdFbHQpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IHJlbW92ZWRFbGVtZW50IG9mIHJlbW92ZWQpIHtcbiAgICAgIGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVSZW1vdmVkKHJlbW92ZWRFbGVtZW50KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgY3VycmVudEhlYWQucmVtb3ZlQ2hpbGQocmVtb3ZlZEVsZW1lbnQpO1xuICAgICAgICBjdHguY2FsbGJhY2tzLmFmdGVyTm9kZVJlbW92ZWQocmVtb3ZlZEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBjdHguaGVhZC5hZnRlckhlYWRNb3JwaGVkKGN1cnJlbnRIZWFkLCB7IGFkZGVkLCBrZXB0OiBwcmVzZXJ2ZWQsIHJlbW92ZWQgfSk7XG4gICAgcmV0dXJuIHByb21pc2VzO1xuICB9XG4gIGZ1bmN0aW9uIGxvZygpIHtcbiAgfVxuICBmdW5jdGlvbiBub09wKCkge1xuICB9XG4gIGZ1bmN0aW9uIG1lcmdlRGVmYXVsdHMoY29uZmlnKSB7XG4gICAgbGV0IGZpbmFsQ29uZmlnID0ge307XG4gICAgT2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZywgZGVmYXVsdHMpO1xuICAgIE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcsIGNvbmZpZyk7XG4gICAgZmluYWxDb25maWcuY2FsbGJhY2tzID0ge307XG4gICAgT2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZy5jYWxsYmFja3MsIGRlZmF1bHRzLmNhbGxiYWNrcyk7XG4gICAgT2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZy5jYWxsYmFja3MsIGNvbmZpZy5jYWxsYmFja3MpO1xuICAgIGZpbmFsQ29uZmlnLmhlYWQgPSB7fTtcbiAgICBPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLmhlYWQsIGRlZmF1bHRzLmhlYWQpO1xuICAgIE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcuaGVhZCwgY29uZmlnLmhlYWQpO1xuICAgIHJldHVybiBmaW5hbENvbmZpZztcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVNb3JwaENvbnRleHQob2xkTm9kZSwgbmV3Q29udGVudCwgY29uZmlnKSB7XG4gICAgY29uZmlnID0gbWVyZ2VEZWZhdWx0cyhjb25maWcpO1xuICAgIHJldHVybiB7XG4gICAgICB0YXJnZXQ6IG9sZE5vZGUsXG4gICAgICBuZXdDb250ZW50LFxuICAgICAgY29uZmlnLFxuICAgICAgbW9ycGhTdHlsZTogY29uZmlnLm1vcnBoU3R5bGUsXG4gICAgICBpZ25vcmVBY3RpdmU6IGNvbmZpZy5pZ25vcmVBY3RpdmUsXG4gICAgICBpZ25vcmVBY3RpdmVWYWx1ZTogY29uZmlnLmlnbm9yZUFjdGl2ZVZhbHVlLFxuICAgICAgaWRNYXA6IGNyZWF0ZUlkTWFwKG9sZE5vZGUsIG5ld0NvbnRlbnQpLFxuICAgICAgZGVhZElkczogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSxcbiAgICAgIGNhbGxiYWNrczogY29uZmlnLmNhbGxiYWNrcyxcbiAgICAgIGhlYWQ6IGNvbmZpZy5oZWFkXG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBpc0lkU2V0TWF0Y2gobm9kZTEsIG5vZGUyLCBjdHgpIHtcbiAgICBpZiAobm9kZTEgPT0gbnVsbCB8fCBub2RlMiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChub2RlMS5ub2RlVHlwZSA9PT0gbm9kZTIubm9kZVR5cGUgJiYgbm9kZTEudGFnTmFtZSA9PT0gbm9kZTIudGFnTmFtZSkge1xuICAgICAgaWYgKG5vZGUxLmlkICE9PSBcIlwiICYmIG5vZGUxLmlkID09PSBub2RlMi5pZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgbm9kZTEsIG5vZGUyKSA+IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBpc1NvZnRNYXRjaChub2RlMSwgbm9kZTIpIHtcbiAgICBpZiAobm9kZTEgPT0gbnVsbCB8fCBub2RlMiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBub2RlMS5ub2RlVHlwZSA9PT0gbm9kZTIubm9kZVR5cGUgJiYgbm9kZTEudGFnTmFtZSA9PT0gbm9kZTIudGFnTmFtZTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVOb2Rlc0JldHdlZW4oc3RhcnRJbmNsdXNpdmUsIGVuZEV4Y2x1c2l2ZSwgY3R4KSB7XG4gICAgd2hpbGUgKHN0YXJ0SW5jbHVzaXZlICE9PSBlbmRFeGNsdXNpdmUpIHtcbiAgICAgIGxldCB0ZW1wTm9kZSA9IHN0YXJ0SW5jbHVzaXZlO1xuICAgICAgc3RhcnRJbmNsdXNpdmUgPSBzdGFydEluY2x1c2l2ZS5uZXh0U2libGluZztcbiAgICAgIHJlbW92ZU5vZGUodGVtcE5vZGUsIGN0eCk7XG4gICAgfVxuICAgIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgZW5kRXhjbHVzaXZlKTtcbiAgICByZXR1cm4gZW5kRXhjbHVzaXZlLm5leHRTaWJsaW5nO1xuICB9XG4gIGZ1bmN0aW9uIGZpbmRJZFNldE1hdGNoKG5ld0NvbnRlbnQsIG9sZFBhcmVudCwgbmV3Q2hpbGQsIGluc2VydGlvblBvaW50LCBjdHgpIHtcbiAgICBsZXQgbmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50ID0gZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5ld0NoaWxkLCBvbGRQYXJlbnQpO1xuICAgIGxldCBwb3RlbnRpYWxNYXRjaCA9IG51bGw7XG4gICAgaWYgKG5ld0NoaWxkUG90ZW50aWFsSWRDb3VudCA+IDApIHtcbiAgICAgIGxldCBwb3RlbnRpYWxNYXRjaDIgPSBpbnNlcnRpb25Qb2ludDtcbiAgICAgIGxldCBvdGhlck1hdGNoQ291bnQgPSAwO1xuICAgICAgd2hpbGUgKHBvdGVudGlhbE1hdGNoMiAhPSBudWxsKSB7XG4gICAgICAgIGlmIChpc0lkU2V0TWF0Y2gobmV3Q2hpbGQsIHBvdGVudGlhbE1hdGNoMiwgY3R4KSkge1xuICAgICAgICAgIHJldHVybiBwb3RlbnRpYWxNYXRjaDI7XG4gICAgICAgIH1cbiAgICAgICAgb3RoZXJNYXRjaENvdW50ICs9IGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBwb3RlbnRpYWxNYXRjaDIsIG5ld0NvbnRlbnQpO1xuICAgICAgICBpZiAob3RoZXJNYXRjaENvdW50ID4gbmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50KSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcG90ZW50aWFsTWF0Y2gyID0gcG90ZW50aWFsTWF0Y2gyLm5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcG90ZW50aWFsTWF0Y2g7XG4gIH1cbiAgZnVuY3Rpb24gZmluZFNvZnRNYXRjaChuZXdDb250ZW50LCBvbGRQYXJlbnQsIG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KSB7XG4gICAgbGV0IHBvdGVudGlhbFNvZnRNYXRjaCA9IGluc2VydGlvblBvaW50O1xuICAgIGxldCBuZXh0U2libGluZyA9IG5ld0NoaWxkLm5leHRTaWJsaW5nO1xuICAgIGxldCBzaWJsaW5nU29mdE1hdGNoQ291bnQgPSAwO1xuICAgIHdoaWxlIChwb3RlbnRpYWxTb2Z0TWF0Y2ggIT0gbnVsbCkge1xuICAgICAgaWYgKGdldElkSW50ZXJzZWN0aW9uQ291bnQoY3R4LCBwb3RlbnRpYWxTb2Z0TWF0Y2gsIG5ld0NvbnRlbnQpID4gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChpc1NvZnRNYXRjaChuZXdDaGlsZCwgcG90ZW50aWFsU29mdE1hdGNoKSkge1xuICAgICAgICByZXR1cm4gcG90ZW50aWFsU29mdE1hdGNoO1xuICAgICAgfVxuICAgICAgaWYgKGlzU29mdE1hdGNoKG5leHRTaWJsaW5nLCBwb3RlbnRpYWxTb2Z0TWF0Y2gpKSB7XG4gICAgICAgIHNpYmxpbmdTb2Z0TWF0Y2hDb3VudCsrO1xuICAgICAgICBuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgICBpZiAoc2libGluZ1NvZnRNYXRjaENvdW50ID49IDIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcG90ZW50aWFsU29mdE1hdGNoID0gcG90ZW50aWFsU29mdE1hdGNoLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICByZXR1cm4gcG90ZW50aWFsU29mdE1hdGNoO1xuICB9XG4gIGZ1bmN0aW9uIHBhcnNlQ29udGVudChuZXdDb250ZW50KSB7XG4gICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICBsZXQgY29udGVudFdpdGhTdmdzUmVtb3ZlZCA9IG5ld0NvbnRlbnQucmVwbGFjZSgvPHN2ZyhcXHNbXj5dKj58PikoW1xcc1xcU10qPyk8XFwvc3ZnPi9naW0sIFwiXCIpO1xuICAgIGlmIChjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvaHRtbD4vKSB8fCBjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvaGVhZD4vKSB8fCBjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvYm9keT4vKSkge1xuICAgICAgbGV0IGNvbnRlbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKG5ld0NvbnRlbnQsIFwidGV4dC9odG1sXCIpO1xuICAgICAgaWYgKGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9odG1sPi8pKSB7XG4gICAgICAgIGNvbnRlbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBodG1sRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgaWYgKGh0bWxFbGVtZW50KSB7XG4gICAgICAgICAgaHRtbEVsZW1lbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBodG1sRWxlbWVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcmVzcG9uc2VEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKFwiPGJvZHk+PHRlbXBsYXRlPlwiICsgbmV3Q29udGVudCArIFwiPC90ZW1wbGF0ZT48L2JvZHk+XCIsIFwidGV4dC9odG1sXCIpO1xuICAgICAgbGV0IGNvbnRlbnQgPSByZXNwb25zZURvYy5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCJ0ZW1wbGF0ZVwiKS5jb250ZW50O1xuICAgICAgY29udGVudC5nZW5lcmF0ZWRCeUlkaW9tb3JwaCA9IHRydWU7XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbm9ybWFsaXplQ29udGVudChuZXdDb250ZW50KSB7XG4gICAgaWYgKG5ld0NvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgY29uc3QgZHVtbXlQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcmV0dXJuIGR1bW15UGFyZW50O1xuICAgIH0gZWxzZSBpZiAobmV3Q29udGVudC5nZW5lcmF0ZWRCeUlkaW9tb3JwaCkge1xuICAgICAgcmV0dXJuIG5ld0NvbnRlbnQ7XG4gICAgfSBlbHNlIGlmIChuZXdDb250ZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgY29uc3QgZHVtbXlQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZHVtbXlQYXJlbnQuYXBwZW5kKG5ld0NvbnRlbnQpO1xuICAgICAgcmV0dXJuIGR1bW15UGFyZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkdW1teVBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmb3IgKGNvbnN0IGVsdCBvZiBbLi4ubmV3Q29udGVudF0pIHtcbiAgICAgICAgZHVtbXlQYXJlbnQuYXBwZW5kKGVsdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZHVtbXlQYXJlbnQ7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGluc2VydFNpYmxpbmdzKHByZXZpb3VzU2libGluZywgbW9ycGhlZE5vZGUsIG5leHRTaWJsaW5nKSB7XG4gICAgbGV0IHN0YWNrID0gW107XG4gICAgbGV0IGFkZGVkID0gW107XG4gICAgd2hpbGUgKHByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICBzdGFjay5wdXNoKHByZXZpb3VzU2libGluZyk7XG4gICAgICBwcmV2aW91c1NpYmxpbmcgPSBwcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nO1xuICAgIH1cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgbGV0IG5vZGUgPSBzdGFjay5wb3AoKTtcbiAgICAgIGFkZGVkLnB1c2gobm9kZSk7XG4gICAgICBtb3JwaGVkTm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBtb3JwaGVkTm9kZSk7XG4gICAgfVxuICAgIGFkZGVkLnB1c2gobW9ycGhlZE5vZGUpO1xuICAgIHdoaWxlIChuZXh0U2libGluZyAhPSBudWxsKSB7XG4gICAgICBzdGFjay5wdXNoKG5leHRTaWJsaW5nKTtcbiAgICAgIGFkZGVkLnB1c2gobmV4dFNpYmxpbmcpO1xuICAgICAgbmV4dFNpYmxpbmcgPSBuZXh0U2libGluZy5uZXh0U2libGluZztcbiAgICB9XG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIG1vcnBoZWROb2RlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHN0YWNrLnBvcCgpLCBtb3JwaGVkTm9kZS5uZXh0U2libGluZyk7XG4gICAgfVxuICAgIHJldHVybiBhZGRlZDtcbiAgfVxuICBmdW5jdGlvbiBmaW5kQmVzdE5vZGVNYXRjaChuZXdDb250ZW50LCBvbGROb2RlLCBjdHgpIHtcbiAgICBsZXQgY3VycmVudEVsZW1lbnQ7XG4gICAgY3VycmVudEVsZW1lbnQgPSBuZXdDb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgbGV0IGJlc3RFbGVtZW50ID0gY3VycmVudEVsZW1lbnQ7XG4gICAgbGV0IHNjb3JlID0gMDtcbiAgICB3aGlsZSAoY3VycmVudEVsZW1lbnQpIHtcbiAgICAgIGxldCBuZXdTY29yZSA9IHNjb3JlRWxlbWVudChjdXJyZW50RWxlbWVudCwgb2xkTm9kZSwgY3R4KTtcbiAgICAgIGlmIChuZXdTY29yZSA+IHNjb3JlKSB7XG4gICAgICAgIGJlc3RFbGVtZW50ID0gY3VycmVudEVsZW1lbnQ7XG4gICAgICAgIHNjb3JlID0gbmV3U2NvcmU7XG4gICAgICB9XG4gICAgICBjdXJyZW50RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50Lm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICByZXR1cm4gYmVzdEVsZW1lbnQ7XG4gIH1cbiAgZnVuY3Rpb24gc2NvcmVFbGVtZW50KG5vZGUxLCBub2RlMiwgY3R4KSB7XG4gICAgaWYgKGlzU29mdE1hdGNoKG5vZGUxLCBub2RlMikpIHtcbiAgICAgIHJldHVybiAwLjUgKyBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgbm9kZTEsIG5vZGUyKTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlTm9kZSh0ZW1wTm9kZSwgY3R4KSB7XG4gICAgcmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCB0ZW1wTm9kZSk7XG4gICAgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZVJlbW92ZWQodGVtcE5vZGUpID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIHRlbXBOb2RlLnJlbW92ZSgpO1xuICAgIGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZCh0ZW1wTm9kZSk7XG4gIH1cbiAgZnVuY3Rpb24gaXNJZEluQ29uc2lkZXJhdGlvbihjdHgsIGlkKSB7XG4gICAgcmV0dXJuICFjdHguZGVhZElkcy5oYXMoaWQpO1xuICB9XG4gIGZ1bmN0aW9uIGlkSXNXaXRoaW5Ob2RlKGN0eCwgaWQsIHRhcmdldE5vZGUpIHtcbiAgICBsZXQgaWRTZXQgPSBjdHguaWRNYXAuZ2V0KHRhcmdldE5vZGUpIHx8IEVNUFRZX1NFVDtcbiAgICByZXR1cm4gaWRTZXQuaGFzKGlkKTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIG5vZGUpIHtcbiAgICBsZXQgaWRTZXQgPSBjdHguaWRNYXAuZ2V0KG5vZGUpIHx8IEVNUFRZX1NFVDtcbiAgICBmb3IgKGNvbnN0IGlkIG9mIGlkU2V0KSB7XG4gICAgICBjdHguZGVhZElkcy5hZGQoaWQpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgbm9kZTEsIG5vZGUyKSB7XG4gICAgbGV0IHNvdXJjZVNldCA9IGN0eC5pZE1hcC5nZXQobm9kZTEpIHx8IEVNUFRZX1NFVDtcbiAgICBsZXQgbWF0Y2hDb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBpZCBvZiBzb3VyY2VTZXQpIHtcbiAgICAgIGlmIChpc0lkSW5Db25zaWRlcmF0aW9uKGN0eCwgaWQpICYmIGlkSXNXaXRoaW5Ob2RlKGN0eCwgaWQsIG5vZGUyKSkge1xuICAgICAgICArK21hdGNoQ291bnQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXRjaENvdW50O1xuICB9XG4gIGZ1bmN0aW9uIHBvcHVsYXRlSWRNYXBGb3JOb2RlKG5vZGUsIGlkTWFwKSB7XG4gICAgbGV0IG5vZGVQYXJlbnQgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IGlkRWxlbWVudHMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWRdXCIpO1xuICAgIGZvciAoY29uc3QgZWx0IG9mIGlkRWxlbWVudHMpIHtcbiAgICAgIGxldCBjdXJyZW50ID0gZWx0O1xuICAgICAgd2hpbGUgKGN1cnJlbnQgIT09IG5vZGVQYXJlbnQgJiYgY3VycmVudCAhPSBudWxsKSB7XG4gICAgICAgIGxldCBpZFNldCA9IGlkTWFwLmdldChjdXJyZW50KTtcbiAgICAgICAgaWYgKGlkU2V0ID09IG51bGwpIHtcbiAgICAgICAgICBpZFNldCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgICAgICAgaWRNYXAuc2V0KGN1cnJlbnQsIGlkU2V0KTtcbiAgICAgICAgfVxuICAgICAgICBpZFNldC5hZGQoZWx0LmlkKTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlSWRNYXAob2xkQ29udGVudCwgbmV3Q29udGVudCkge1xuICAgIGxldCBpZE1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgcG9wdWxhdGVJZE1hcEZvck5vZGUob2xkQ29udGVudCwgaWRNYXApO1xuICAgIHBvcHVsYXRlSWRNYXBGb3JOb2RlKG5ld0NvbnRlbnQsIGlkTWFwKTtcbiAgICByZXR1cm4gaWRNYXA7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtb3JwaCxcbiAgICBkZWZhdWx0c1xuICB9O1xufSgpO1xuXG4vLyBzcmMvbm9ybWFsaXplX2F0dHJpYnV0ZXNfZm9yX2NvbXBhcmlzb24udHNcbmZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGVsZW1lbnQpIHtcbiAgY29uc3QgaXNGaWxlSW5wdXQgPSBlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPT09IFwiZmlsZVwiO1xuICBpZiAoIWlzRmlsZUlucHV0KSB7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGVsZW1lbnQudmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlwiKTtcbiAgICB9XG4gIH1cbiAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGNoaWxkKTtcbiAgfSk7XG59XG5cbi8vIHNyYy9tb3JwaGRvbS50c1xudmFyIHN5bmNBdHRyaWJ1dGVzID0gKGZyb21FbCwgdG9FbCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZyb21FbC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXR0ciA9IGZyb21FbC5hdHRyaWJ1dGVzW2ldO1xuICAgIHRvRWwuc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWx1ZSk7XG4gIH1cbn07XG5mdW5jdGlvbiBleGVjdXRlTW9ycGhkb20ocm9vdEZyb21FbGVtZW50LCByb290VG9FbGVtZW50LCBtb2RpZmllZEZpZWxkRWxlbWVudHMsIGdldEVsZW1lbnRWYWx1ZSwgZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIpIHtcbiAgY29uc3Qgb3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIgPSBbXTtcbiAgY29uc3Qgb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBjb25zdCBtYXJrRWxlbWVudEFzTmVlZGluZ1Bvc3RNb3JwaFN3YXAgPSAoaWQsIHJlcGxhY2VXaXRoQ2xvbmUpID0+IHtcbiAgICBjb25zdCBvbGRFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuZ2V0KGlkKTtcbiAgICBpZiAoIShvbGRFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9yaWdpbmFsIGVsZW1lbnQgd2l0aCBpZCAke2lkfSBub3QgZm91bmRgKTtcbiAgICB9XG4gICAgb3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIucHVzaChpZCk7XG4gICAgaWYgKCFyZXBsYWNlV2l0aENsb25lKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY2xvbmVkT2xkRWxlbWVudCA9IGNsb25lSFRNTEVsZW1lbnQob2xkRWxlbWVudCk7XG4gICAgb2xkRWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZWRPbGRFbGVtZW50KTtcbiAgICByZXR1cm4gY2xvbmVkT2xkRWxlbWVudDtcbiAgfTtcbiAgcm9vdFRvRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbGl2ZS1wcmVzZXJ2ZV1cIikuZm9yRWFjaCgobmV3RWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGlkID0gbmV3RWxlbWVudC5pZDtcbiAgICBpZiAoIWlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZGF0YS1saXZlLXByZXNlcnZlIGF0dHJpYnV0ZSByZXF1aXJlcyBhbiBpZCBhdHRyaWJ1dGUgdG8gYmUgc2V0IG9uIHRoZSBlbGVtZW50XCIpO1xuICAgIH1cbiAgICBjb25zdCBvbGRFbGVtZW50ID0gcm9vdEZyb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuICAgIGlmICghKG9sZEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGVsZW1lbnQgd2l0aCBpZCBcIiR7aWR9XCIgd2FzIG5vdCBmb3VuZCBpbiB0aGUgb3JpZ2luYWwgSFRNTGApO1xuICAgIH1cbiAgICBuZXdFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtbGl2ZS1wcmVzZXJ2ZVwiKTtcbiAgICBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5zZXQoaWQsIG9sZEVsZW1lbnQpO1xuICAgIHN5bmNBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpO1xuICB9KTtcbiAgSWRpb21vcnBoLm1vcnBoKHJvb3RGcm9tRWxlbWVudCwgcm9vdFRvRWxlbWVudCwge1xuICAgIGNhbGxiYWNrczoge1xuICAgICAgYmVmb3JlTm9kZU1vcnBoZWQ6IChmcm9tRWwsIHRvRWwpID0+IHtcbiAgICAgICAgaWYgKCEoZnJvbUVsIGluc3RhbmNlb2YgRWxlbWVudCkgfHwgISh0b0VsIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJvbUVsID09PSByb290RnJvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJvbUVsLmlkICYmIG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLmhhcyhmcm9tRWwuaWQpKSB7XG4gICAgICAgICAgaWYgKGZyb21FbC5pZCA9PT0gdG9FbC5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBjbG9uZWRGcm9tRWwgPSBtYXJrRWxlbWVudEFzTmVlZGluZ1Bvc3RNb3JwaFN3YXAoZnJvbUVsLmlkLCB0cnVlKTtcbiAgICAgICAgICBpZiAoIWNsb25lZEZyb21FbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibWlzc2luZyBjbG9uZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgSWRpb21vcnBoLm1vcnBoKGNsb25lZEZyb21FbCwgdG9FbCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9tRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0b0VsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGZyb21FbC5fX3ggIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LkFscGluZSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgXCJVbmFibGUgdG8gYWNjZXNzIEFscGluZS5qcyB0aG91Z2ggdGhlIGdsb2JhbCB3aW5kb3cuQWxwaW5lIHZhcmlhYmxlLiBQbGVhc2UgbWFrZSBzdXJlIEFscGluZS5qcyBpcyBsb2FkZWQgYmVmb3JlIFN5bWZvbnkgVVggTGl2ZUNvbXBvbmVudC5cIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuQWxwaW5lLm1vcnBoICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIFwiVW5hYmxlIHRvIGFjY2VzcyBBbHBpbmUuanMgbW9ycGggZnVuY3Rpb24uIFBsZWFzZSBtYWtlIHN1cmUgdGhlIEFscGluZS5qcyBNb3JwaCBwbHVnaW4gaXMgaW5zdGFsbGVkIGFuZCBsb2FkZWQsIHNlZSBodHRwczovL2FscGluZWpzLmRldi9wbHVnaW5zL21vcnBoIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuQWxwaW5lLm1vcnBoKGZyb21FbC5fX3gsIHRvRWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIud2FzRWxlbWVudEFkZGVkKGZyb21FbCkpIHtcbiAgICAgICAgICAgIGZyb21FbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCB0b0VsKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1vZGlmaWVkRmllbGRFbGVtZW50cy5pbmNsdWRlcyhmcm9tRWwpKSB7XG4gICAgICAgICAgICBzZXRWYWx1ZU9uRWxlbWVudCh0b0VsLCBnZXRFbGVtZW50VmFsdWUoZnJvbUVsKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmcm9tRWwgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZnJvbUVsICE9PSBkb2N1bWVudC5ib2R5ICYmIG51bGwgIT09IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZnJvbUVsLCBmYWxzZSkpIHtcbiAgICAgICAgICAgIHNldFZhbHVlT25FbGVtZW50KHRvRWwsIGdldEVsZW1lbnRWYWx1ZShmcm9tRWwpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZWxlbWVudENoYW5nZXMgPSBleHRlcm5hbE11dGF0aW9uVHJhY2tlci5nZXRDaGFuZ2VkRWxlbWVudChmcm9tRWwpO1xuICAgICAgICAgIGlmIChlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMuYXBwbHlUb0VsZW1lbnQodG9FbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmcm9tRWwubm9kZU5hbWUudG9VcHBlckNhc2UoKSAhPT0gXCJPUFRJT05cIiAmJiBmcm9tRWwuaXNFcXVhbE5vZGUodG9FbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGcm9tRWwgPSBjbG9uZUhUTUxFbGVtZW50KGZyb21FbCk7XG4gICAgICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkRnJvbUVsKTtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRUb0VsID0gY2xvbmVIVE1MRWxlbWVudCh0b0VsKTtcbiAgICAgICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRUb0VsKTtcbiAgICAgICAgICAgIGlmIChub3JtYWxpemVkRnJvbUVsLmlzRXF1YWxOb2RlKG5vcm1hbGl6ZWRUb0VsKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9tRWwuaGFzQXR0cmlidXRlKFwiZGF0YS1za2lwLW1vcnBoXCIpIHx8IGZyb21FbC5pZCAmJiBmcm9tRWwuaWQgIT09IHRvRWwuaWQpIHtcbiAgICAgICAgICBmcm9tRWwuaW5uZXJIVE1MID0gdG9FbC5pbm5lckhUTUw7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZyb21FbC5wYXJlbnRFbGVtZW50Py5oYXNBdHRyaWJ1dGUoXCJkYXRhLXNraXAtbW9ycGhcIikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICFmcm9tRWwuaGFzQXR0cmlidXRlKFwiZGF0YS1saXZlLWlnbm9yZVwiKTtcbiAgICAgIH0sXG4gICAgICBiZWZvcmVOb2RlUmVtb3ZlZChub2RlKSB7XG4gICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5pZCAmJiBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5oYXMobm9kZS5pZCkpIHtcbiAgICAgICAgICBtYXJrRWxlbWVudEFzTmVlZGluZ1Bvc3RNb3JwaFN3YXAobm9kZS5pZCwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChleHRlcm5hbE11dGF0aW9uVHJhY2tlci53YXNFbGVtZW50QWRkZWQobm9kZSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICFub2RlLmhhc0F0dHJpYnV0ZShcImRhdGEtbGl2ZS1pZ25vcmVcIik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgb3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIuZm9yRWFjaCgoaWQpID0+IHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gcm9vdEZyb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLmdldChpZCk7XG4gICAgaWYgKCEobmV3RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhKG9yaWdpbmFsRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBlbGVtZW50cy5cIik7XG4gICAgfVxuICAgIG5ld0VsZW1lbnQucmVwbGFjZVdpdGgob3JpZ2luYWxFbGVtZW50KTtcbiAgfSk7XG59XG5cbi8vIHNyYy9SZW5kZXJpbmcvQ2hhbmdpbmdJdGVtc1RyYWNrZXIudHNcbnZhciBDaGFuZ2luZ0l0ZW1zVHJhY2tlcl9kZWZhdWx0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBlLmcuIGEgTWFwIHdpdGgga2V5IFwiY29sb3JcIiAmIHZhbHVlIHsgb3JpZ2luYWw6ICdwcmV2aW91c1ZhbHVlJywgbmV3OiAnbmV3VmFsdWUnIH0sXG4gICAgdGhpcy5jaGFuZ2VkSXRlbXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgIHRoaXMucmVtb3ZlZEl0ZW1zID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgfVxuICAvKipcbiAgICogQSBcIm51bGxcIiBwcmV2aW91c1ZhbHVlIG1lYW5zIHRoZSBpdGVtIHdhcyBOT1QgcHJldmlvdXNseSBwcmVzZW50LlxuICAgKi9cbiAgc2V0SXRlbShpdGVtTmFtZSwgbmV3VmFsdWUsIHByZXZpb3VzVmFsdWUpIHtcbiAgICBpZiAodGhpcy5yZW1vdmVkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgY29uc3QgcmVtb3ZlZFJlY29yZCA9IHRoaXMucmVtb3ZlZEl0ZW1zLmdldChpdGVtTmFtZSk7XG4gICAgICB0aGlzLnJlbW92ZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuICAgICAgaWYgKHJlbW92ZWRSZWNvcmQub3JpZ2luYWwgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuY2hhbmdlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkID0gdGhpcy5jaGFuZ2VkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcbiAgICAgIGlmIChvcmlnaW5hbFJlY29yZC5vcmlnaW5hbCA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiBvcmlnaW5hbFJlY29yZC5vcmlnaW5hbCwgbmV3OiBuZXdWYWx1ZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiBwcmV2aW91c1ZhbHVlLCBuZXc6IG5ld1ZhbHVlIH0pO1xuICB9XG4gIHJlbW92ZUl0ZW0oaXRlbU5hbWUsIGN1cnJlbnRWYWx1ZSkge1xuICAgIGxldCB0cnVlT3JpZ2luYWxWYWx1ZSA9IGN1cnJlbnRWYWx1ZTtcbiAgICBpZiAodGhpcy5jaGFuZ2VkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgY29uc3Qgb3JpZ2luYWxSZWNvcmQgPSB0aGlzLmNoYW5nZWRJdGVtcy5nZXQoaXRlbU5hbWUpO1xuICAgICAgdHJ1ZU9yaWdpbmFsVmFsdWUgPSBvcmlnaW5hbFJlY29yZC5vcmlnaW5hbDtcbiAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLmRlbGV0ZShpdGVtTmFtZSk7XG4gICAgICBpZiAodHJ1ZU9yaWdpbmFsVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMucmVtb3ZlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgIHRoaXMucmVtb3ZlZEl0ZW1zLnNldChpdGVtTmFtZSwgeyBvcmlnaW5hbDogdHJ1ZU9yaWdpbmFsVmFsdWUgfSk7XG4gICAgfVxuICB9XG4gIGdldENoYW5nZWRJdGVtcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmNoYW5nZWRJdGVtcywgKFtuYW1lLCB7IG5ldzogdmFsdWUgfV0pID0+ICh7IG5hbWUsIHZhbHVlIH0pKTtcbiAgfVxuICBnZXRSZW1vdmVkSXRlbXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5yZW1vdmVkSXRlbXMua2V5cygpKTtcbiAgfVxuICBpc0VtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZWRJdGVtcy5zaXplID09PSAwICYmIHRoaXMucmVtb3ZlZEl0ZW1zLnNpemUgPT09IDA7XG4gIH1cbn07XG5cbi8vIHNyYy9SZW5kZXJpbmcvRWxlbWVudENoYW5nZXMudHNcbnZhciBFbGVtZW50Q2hhbmdlcyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hZGRlZENsYXNzZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgIHRoaXMucmVtb3ZlZENsYXNzZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgIHRoaXMuc3R5bGVDaGFuZ2VzID0gbmV3IENoYW5naW5nSXRlbXNUcmFja2VyX2RlZmF1bHQoKTtcbiAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMgPSBuZXcgQ2hhbmdpbmdJdGVtc1RyYWNrZXJfZGVmYXVsdCgpO1xuICB9XG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghdGhpcy5yZW1vdmVkQ2xhc3Nlcy5kZWxldGUoY2xhc3NOYW1lKSkge1xuICAgICAgdGhpcy5hZGRlZENsYXNzZXMuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghdGhpcy5hZGRlZENsYXNzZXMuZGVsZXRlKGNsYXNzTmFtZSkpIHtcbiAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG4gIGFkZFN0eWxlKHN0eWxlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpIHtcbiAgICB0aGlzLnN0eWxlQ2hhbmdlcy5zZXRJdGVtKHN0eWxlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpO1xuICB9XG4gIHJlbW92ZVN0eWxlKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgIHRoaXMuc3R5bGVDaGFuZ2VzLnJlbW92ZUl0ZW0oc3R5bGVOYW1lLCBvcmlnaW5hbFZhbHVlKTtcbiAgfVxuICBhZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpIHtcbiAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuc2V0SXRlbShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG4gIH1cbiAgcmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG9yaWdpbmFsVmFsdWUpIHtcbiAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMucmVtb3ZlSXRlbShhdHRyaWJ1dGVOYW1lLCBvcmlnaW5hbFZhbHVlKTtcbiAgfVxuICBnZXRBZGRlZENsYXNzZXMoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmFkZGVkQ2xhc3Nlc107XG4gIH1cbiAgZ2V0UmVtb3ZlZENsYXNzZXMoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLnJlbW92ZWRDbGFzc2VzXTtcbiAgfVxuICBnZXRDaGFuZ2VkU3R5bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKTtcbiAgfVxuICBnZXRSZW1vdmVkU3R5bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKTtcbiAgfVxuICBnZXRDaGFuZ2VkQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpO1xuICB9XG4gIGdldFJlbW92ZWRBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCk7XG4gIH1cbiAgYXBwbHlUb0VsZW1lbnQoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi50aGlzLmFkZGVkQ2xhc3Nlcyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLnRoaXMucmVtb3ZlZENsYXNzZXMpO1xuICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShjaGFuZ2UubmFtZSwgY2hhbmdlLnZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKS5mb3JFYWNoKChzdHlsZU5hbWUpID0+IHtcbiAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVOYW1lKTtcbiAgICB9KTtcbiAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0Q2hhbmdlZEl0ZW1zKCkuZm9yRWFjaCgoY2hhbmdlKSA9PiB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShjaGFuZ2UubmFtZSwgY2hhbmdlLnZhbHVlKTtcbiAgICB9KTtcbiAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCkuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSkgPT4ge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgfSk7XG4gIH1cbiAgaXNFbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGRlZENsYXNzZXMuc2l6ZSA9PT0gMCAmJiB0aGlzLnJlbW92ZWRDbGFzc2VzLnNpemUgPT09IDAgJiYgdGhpcy5zdHlsZUNoYW5nZXMuaXNFbXB0eSgpICYmIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5pc0VtcHR5KCk7XG4gIH1cbn07XG5cbi8vIHNyYy9SZW5kZXJpbmcvRXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIudHNcbnZhciBFeHRlcm5hbE11dGF0aW9uVHJhY2tlcl9kZWZhdWx0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5jaGFuZ2VkRWxlbWVudHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbiAgICAvKiogRm9yIHRlc3RpbmcgKi9cbiAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50ID0gMDtcbiAgICB0aGlzLmFkZGVkRWxlbWVudHMgPSBbXTtcbiAgICB0aGlzLnJlbW92ZWRFbGVtZW50cyA9IFtdO1xuICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2sgPSBzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMub25NdXRhdGlvbnMuYmluZCh0aGlzKSk7XG4gIH1cbiAgc3RhcnQoKSB7XG4gICAgaWYgKHRoaXMuaXNTdGFydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwge1xuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuaXNTdGFydGVkID0gdHJ1ZTtcbiAgfVxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLmlzU3RhcnRlZCkge1xuICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGdldENoYW5nZWRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VkRWxlbWVudHMuaGFzKGVsZW1lbnQpID8gdGhpcy5jaGFuZ2VkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIDogbnVsbDtcbiAgfVxuICBnZXRBZGRlZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmFkZGVkRWxlbWVudHM7XG4gIH1cbiAgd2FzRWxlbWVudEFkZGVkKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5hZGRlZEVsZW1lbnRzLmluY2x1ZGVzKGVsZW1lbnQpO1xuICB9XG4gIC8qKlxuICAgKiBGb3JjZXMgYW55IHBlbmRpbmcgbXV0YXRpb25zIHRvIGJlIGhhbmRsZWQgaW1tZWRpYXRlbHksIHRoZW4gY2xlYXJzIHRoZSBxdWV1ZS5cbiAgICovXG4gIGhhbmRsZVBlbmRpbmdDaGFuZ2VzKCkge1xuICAgIHRoaXMub25NdXRhdGlvbnModGhpcy5tdXRhdGlvbk9ic2VydmVyLnRha2VSZWNvcmRzKCkpO1xuICB9XG4gIG9uTXV0YXRpb25zKG11dGF0aW9ucykge1xuICAgIGNvbnN0IGhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbiAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgIGlmICghdGhpcy5zaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrKGVsZW1lbnQpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uKGVsZW1lbnQpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbGV0IGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgIGZvciAoY29uc3QgYWRkZWRFbGVtZW50IG9mIHRoaXMuYWRkZWRFbGVtZW50cykge1xuICAgICAgICBpZiAoYWRkZWRFbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0NoYW5nZUluQWRkZWRFbGVtZW50KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChtdXRhdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJjaGlsZExpc3RcIjpcbiAgICAgICAgICB0aGlzLmhhbmRsZUNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImF0dHJpYnV0ZXNcIjpcbiAgICAgICAgICBpZiAoIWhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLnNldChlbGVtZW50LCBbXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5nZXQoZWxlbWVudCkuaW5jbHVkZXMobXV0YXRpb24uYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24pO1xuICAgICAgICAgICAgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5zZXQoZWxlbWVudCwgW1xuICAgICAgICAgICAgICAuLi5oYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmdldChlbGVtZW50KSxcbiAgICAgICAgICAgICAgbXV0YXRpb24uYXR0cmlidXRlTmFtZVxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBoYW5kbGVDaGlsZExpc3RNdXRhdGlvbihtdXRhdGlvbikge1xuICAgIG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlKSkge1xuICAgICAgICB0aGlzLnJlbW92ZWRFbGVtZW50cy5zcGxpY2UodGhpcy5yZW1vdmVkRWxlbWVudHMuaW5kZXhPZihub2RlKSwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihub2RlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmFkZGVkRWxlbWVudHMucHVzaChub2RlKTtcbiAgICB9KTtcbiAgICBtdXRhdGlvbi5yZW1vdmVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFkZGVkRWxlbWVudHMuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgICAgdGhpcy5hZGRlZEVsZW1lbnRzLnNwbGljZSh0aGlzLmFkZGVkRWxlbWVudHMuaW5kZXhPZihub2RlKSwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVtb3ZlZEVsZW1lbnRzLnB1c2gobm9kZSk7XG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgIGlmICghdGhpcy5jaGFuZ2VkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cy5zZXQoZWxlbWVudCwgbmV3IEVsZW1lbnRDaGFuZ2VzKCkpO1xuICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHNDb3VudCsrO1xuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VkRWxlbWVudCA9IHRoaXMuY2hhbmdlZEVsZW1lbnRzLmdldChlbGVtZW50KTtcbiAgICBzd2l0Y2ggKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgIGNhc2UgXCJjbGFzc1wiOlxuICAgICAgICB0aGlzLmhhbmRsZUNsYXNzQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3R5bGVcIjpcbiAgICAgICAgdGhpcy5oYW5kbGVTdHlsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBjaGFuZ2VkRWxlbWVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5oYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRFbGVtZW50LmlzRW1wdHkoKSkge1xuICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHNDb3VudC0tO1xuICAgIH1cbiAgfVxuICBoYW5kbGVDbGFzc0F0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBlbGVtZW50Q2hhbmdlcykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlIHx8IFwiXCI7XG4gICAgY29uc3QgcHJldmlvdXNWYWx1ZXMgPSBwcmV2aW91c1ZhbHVlLm1hdGNoKC8oXFxTKykvZ3UpIHx8IFtdO1xuICAgIGNvbnN0IG5ld1ZhbHVlcyA9IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5jbGFzc0xpc3QpO1xuICAgIGNvbnN0IGFkZGVkVmFsdWVzID0gbmV3VmFsdWVzLmZpbHRlcigodmFsdWUpID0+ICFwcmV2aW91c1ZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpO1xuICAgIGNvbnN0IHJlbW92ZWRWYWx1ZXMgPSBwcmV2aW91c1ZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiAhbmV3VmFsdWVzLmluY2x1ZGVzKHZhbHVlKSk7XG4gICAgYWRkZWRWYWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGVsZW1lbnRDaGFuZ2VzLmFkZENsYXNzKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZW1vdmVkVmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBlbGVtZW50Q2hhbmdlcy5yZW1vdmVDbGFzcyh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSBtdXRhdGlvbi5vbGRWYWx1ZSB8fCBcIlwiO1xuICAgIGNvbnN0IHByZXZpb3VzU3R5bGVzID0gdGhpcy5leHRyYWN0U3R5bGVzKHByZXZpb3VzVmFsdWUpO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSB8fCBcIlwiO1xuICAgIGNvbnN0IG5ld1N0eWxlcyA9IHRoaXMuZXh0cmFjdFN0eWxlcyhuZXdWYWx1ZSk7XG4gICAgY29uc3QgYWRkZWRPckNoYW5nZWRTdHlsZXMgPSBPYmplY3Qua2V5cyhuZXdTdHlsZXMpLmZpbHRlcihcbiAgICAgIChrZXkpID0+IHByZXZpb3VzU3R5bGVzW2tleV0gPT09IHZvaWQgMCB8fCBwcmV2aW91c1N0eWxlc1trZXldICE9PSBuZXdTdHlsZXNba2V5XVxuICAgICk7XG4gICAgY29uc3QgcmVtb3ZlZFN0eWxlcyA9IE9iamVjdC5rZXlzKHByZXZpb3VzU3R5bGVzKS5maWx0ZXIoKGtleSkgPT4gIW5ld1N0eWxlc1trZXldKTtcbiAgICBhZGRlZE9yQ2hhbmdlZFN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgZWxlbWVudENoYW5nZXMuYWRkU3R5bGUoXG4gICAgICAgIHN0eWxlLFxuICAgICAgICBuZXdTdHlsZXNbc3R5bGVdLFxuICAgICAgICBwcmV2aW91c1N0eWxlc1tzdHlsZV0gPT09IHZvaWQgMCA/IG51bGwgOiBwcmV2aW91c1N0eWxlc1tzdHlsZV1cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmVtb3ZlZFN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgZWxlbWVudENoYW5nZXMucmVtb3ZlU3R5bGUoc3R5bGUsIHByZXZpb3VzU3R5bGVzW3N0eWxlXSk7XG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlR2VuZXJpY0F0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBlbGVtZW50Q2hhbmdlcykge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgbGV0IG9sZFZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWU7XG4gICAgbGV0IG5ld1ZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgaWYgKG9sZFZhbHVlID09PSBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICBvbGRWYWx1ZSA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChuZXdWYWx1ZSA9PT0gYXR0cmlidXRlTmFtZSkge1xuICAgICAgbmV3VmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICBpZiAob2xkVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZWxlbWVudENoYW5nZXMucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG11dGF0aW9uLm9sZFZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5ld1ZhbHVlID09PSBvbGRWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbGVtZW50Q2hhbmdlcy5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSksIG11dGF0aW9uLm9sZFZhbHVlKTtcbiAgfVxuICBleHRyYWN0U3R5bGVzKHN0eWxlcykge1xuICAgIGNvbnN0IHN0eWxlT2JqZWN0ID0ge307XG4gICAgc3R5bGVzLnNwbGl0KFwiO1wiKS5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgY29uc3QgcGFydHMgPSBzdHlsZS5zcGxpdChcIjpcIik7XG4gICAgICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gcGFydHNbMF0udHJpbSgpO1xuICAgICAgc3R5bGVPYmplY3RbcHJvcGVydHldID0gcGFydHMuc2xpY2UoMSkuam9pbihcIjpcIikudHJpbSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgfVxuICAvKipcbiAgICogSGVscHMgYXZvaWQgdHJhY2tpbmcgY2hhbmdlcyBieSBDaHJvbWUncyB0cmFuc2xhdGlvbiBmZWF0dXJlLlxuICAgKlxuICAgKiBXaGVuIENocm9tZSB0cmFuc2xhdGVzLCBpdCBtdXRhdGVzIHRoZSBkb20gaW4gYSB3YXkgdGhhdCB0cmlnZ2VycyBNdXRhdGlvbk9ic2VydmVyLlxuICAgKiBUaGlzIGluY2x1ZGVzIGFkZGluZyBuZXcgZWxlbWVudHMgd3JhcHBlZCBpbiBhIDxmb250PiB0YWcuIFRoaXMgY2F1c2VzIGxpdmVcbiAgICogY29tcG9uZW50cyB0byBpbmNvcnJlY3RseSB0aGluayB0aGF0IHRoZXNlIG5ldyBlbGVtZW50cyBzaG91bGQgcGVyc2lzdCB0aHJvdWdoXG4gICAqIHJlLXJlbmRlcnMsIGNhdXNpbmcgZHVwbGljYXRlIHRleHQuXG4gICAqL1xuICBpc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24oZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LnRhZ05hbWUgPT09IFwiRk9OVFwiICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikgPT09IFwidmVydGljYWwtYWxpZ246IGluaGVyaXQ7XCI7XG4gIH1cbn07XG5cbi8vIHNyYy9Db21wb25lbnQvVW5zeW5jZWRJbnB1dHNUcmFja2VyLnRzXG52YXIgVW5zeW5jZWRJbnB1dHNUcmFja2VyX2RlZmF1bHQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudCwgbW9kZWxFbGVtZW50UmVzb2x2ZXIpIHtcbiAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgIHsgZXZlbnQ6IFwiaW5wdXRcIiwgY2FsbGJhY2s6IChldmVudCkgPT4gdGhpcy5oYW5kbGVJbnB1dEV2ZW50KGV2ZW50KSB9XG4gICAgXTtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB0aGlzLm1vZGVsRWxlbWVudFJlc29sdmVyID0gbW9kZWxFbGVtZW50UmVzb2x2ZXI7XG4gICAgdGhpcy51bnN5bmNlZElucHV0cyA9IG5ldyBVbnN5bmNlZElucHV0Q29udGFpbmVyKCk7XG4gIH1cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgfSk7XG4gIH1cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICB9KTtcbiAgfVxuICBtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcbiAgICB0aGlzLnVuc3luY2VkSW5wdXRzLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG4gIH1cbiAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQodGFyZ2V0KTtcbiAgfVxuICB1cGRhdGVNb2RlbEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgdXBkYXRlIG1vZGVsIGZvciBub24gSFRNTEVsZW1lbnRcIik7XG4gICAgfVxuICAgIGNvbnN0IG1vZGVsTmFtZSA9IHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIuZ2V0TW9kZWxOYW1lKGVsZW1lbnQpO1xuICAgIHRoaXMudW5zeW5jZWRJbnB1dHMuYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSk7XG4gIH1cbiAgZ2V0VW5zeW5jZWRJbnB1dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHMuYWxsVW5zeW5jZWRJbnB1dHMoKTtcbiAgfVxuICBnZXRVbnN5bmNlZE1vZGVscygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnVuc3luY2VkSW5wdXRzLmdldFVuc3luY2VkTW9kZWxOYW1lcygpKTtcbiAgfVxuICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgIHRoaXMudW5zeW5jZWRJbnB1dHMucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuICB9XG59O1xudmFyIFVuc3luY2VkSW5wdXRDb250YWluZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcyA9IFtdO1xuICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzID0gW107XG4gICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgfVxuICBhZGQoZWxlbWVudCwgbW9kZWxOYW1lID0gbnVsbCkge1xuICAgIGlmIChtb2RlbE5hbWUpIHtcbiAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5zZXQobW9kZWxOYW1lLCBlbGVtZW50KTtcbiAgICAgIGlmICghdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuaW5jbHVkZXMobW9kZWxOYW1lKSkge1xuICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5wdXNoKG1vZGVsTmFtZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcy5wdXNoKGVsZW1lbnQpO1xuICB9XG4gIC8qKlxuICAgKiBNYXJrIGFsbCBmaWVsZHMgYXMgc3luY2VkLCBleGNlcHQgZm9yIHRob3NlIG5vdCBib3VuZCB0byBhIG1vZGVsIG9yIHdob3NlXG4gICAqIHZhbHVlcyBhcmUgc3RpbGwgZGlydHkuXG4gICAqL1xuICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICBpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGFsbFVuc3luY2VkSW5wdXRzKCkge1xuICAgIHJldHVybiBbLi4udGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzLCAuLi50aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMudmFsdWVzKCldO1xuICB9XG4gIG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuaW5kZXhPZihtb2RlbE5hbWUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBtb2RlbHMgd2hvc2UgZmllbGRzIGhhdmUgYmVlbiBtb2RpZmllZCwgYnV0IHdob3NlIHZhbHVlc1xuICAgKiBoYXZlIG5vdCB5ZXQgYmVlbiBzZXQgb250byB0aGUgZGF0YSBzdG9yZS5cbiAgICovXG4gIGdldFVuc3luY2VkTW9kZWxOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy51bnN5bmNlZE1vZGVsTmFtZXM7XG4gIH1cbn07XG5cbi8vIHNyYy9kYXRhX21hbmlwdWxhdGlvbl91dGlscy50c1xuZnVuY3Rpb24gZ2V0RGVlcERhdGEoZGF0YSwgcHJvcGVydHlQYXRoKSB7XG4gIGNvbnN0IHsgY3VycmVudExldmVsRGF0YSwgZmluYWxLZXkgfSA9IHBhcnNlRGVlcERhdGEoZGF0YSwgcHJvcGVydHlQYXRoKTtcbiAgaWYgKGN1cnJlbnRMZXZlbERhdGEgPT09IHZvaWQgMCkge1xuICAgIHJldHVybiB2b2lkIDA7XG4gIH1cbiAgcmV0dXJuIGN1cnJlbnRMZXZlbERhdGFbZmluYWxLZXldO1xufVxudmFyIHBhcnNlRGVlcERhdGEgPSAoZGF0YSwgcHJvcGVydHlQYXRoKSA9PiB7XG4gIGNvbnN0IGZpbmFsRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICBsZXQgY3VycmVudExldmVsRGF0YSA9IGZpbmFsRGF0YTtcbiAgY29uc3QgcGFydHMgPSBwcm9wZXJ0eVBhdGguc3BsaXQoXCIuXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGN1cnJlbnRMZXZlbERhdGEgPSBjdXJyZW50TGV2ZWxEYXRhW3BhcnRzW2ldXTtcbiAgfVxuICBjb25zdCBmaW5hbEtleSA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRMZXZlbERhdGEsXG4gICAgZmluYWxEYXRhLFxuICAgIGZpbmFsS2V5LFxuICAgIHBhcnRzXG4gIH07XG59O1xuXG4vLyBzcmMvQ29tcG9uZW50L1ZhbHVlU3RvcmUudHNcbnZhciBWYWx1ZVN0b3JlX2RlZmF1bHQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgLyoqXG4gICAgICogT3JpZ2luYWwsIHJlYWQtb25seSBwcm9wcyB0aGF0IHJlcHJlc2VudCB0aGUgb3JpZ2luYWwgY29tcG9uZW50IHN0YXRlLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnByb3BzID0ge307XG4gICAgLyoqXG4gICAgICogQSBsaXN0IG9mIHByb3BzIHRoYXQgaGF2ZSBiZWVuIFwiZGlydHlcIiAoY2hhbmdlZCkgc2luY2UgdGhlIGxhc3QgcmVxdWVzdCB0byB0aGUgc2VydmVyLlxuICAgICAqL1xuICAgIHRoaXMuZGlydHlQcm9wcyA9IHt9O1xuICAgIC8qKlxuICAgICAqIEEgbGlzdCBvZiBkaXJ0eSBwcm9wcyB0aGF0IHdlcmUgc2VudCB0byB0aGUgc2VydmVyLCBidXQgdGhlIHJlc3BvbnNlIGhhc1xuICAgICAqIG5vdCB5ZXQgYmVlbiByZWNlaXZlZC5cbiAgICAgKi9cbiAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgIC8qKlxuICAgICAqIEEgbGlzdCBvZiBwcm9wcyB0aGF0IHRoZSBwYXJlbnQgd2FudHMgdXMgdG8gdXBkYXRlLlxuICAgICAqXG4gICAgICogVGhlc2Ugd2lsbCBiZSBzZW50IG9uIHRoZSBuZXh0IHJlcXVlc3QgdG8gdGhlIHNlcnZlci5cbiAgICAgKi9cbiAgICB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSB7fTtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHByb3BzIHdpdGggdGhlIGdpdmVuIG5hbWUuXG4gICAqXG4gICAqIFRoaXMgYWxsb3dzIGZvciBub24tbm9ybWFsaXplZCBtb2RlbCBuYW1lcyAtIGUuZy5cbiAgICogdXNlcltmaXJzdE5hbWVdIC0+IHVzZXIuZmlyc3ROYW1lIGFuZCBhbHNvIHdpbGwgZmV0Y2hcbiAgICogZGVlcGx5IChmZXRjaGluZyB0aGUgXCJmaXJzdE5hbWVcIiBzdWIta2V5IGZyb20gdGhlIFwidXNlclwiIGtleSkuXG4gICAqL1xuICBnZXQobmFtZSkge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG5hbWUpO1xuICAgIGlmICh0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiB0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdO1xuICAgIH1cbiAgICBpZiAodGhpcy5wZW5kaW5nUHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiB0aGlzLnBlbmRpbmdQcm9wc1tub3JtYWxpemVkTmFtZV07XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wc1tub3JtYWxpemVkTmFtZV07XG4gICAgfVxuICAgIHJldHVybiBnZXREZWVwRGF0YSh0aGlzLnByb3BzLCBub3JtYWxpemVkTmFtZSk7XG4gIH1cbiAgaGFzKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQobmFtZSkgIT09IHZvaWQgMDtcbiAgfVxuICAvKipcbiAgICogU2V0cyBkYXRhIGJhY2sgb250byB0aGUgdmFsdWUgc3RvcmUuXG4gICAqXG4gICAqIFRoZSBuYW1lIGNhbiBiZSBpbiB0aGUgbm9uLW5vcm1hbGl6ZWQgZm9ybWF0LlxuICAgKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG5ldyB2YWx1ZSBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgZXhpc3RpbmcgdmFsdWUuXG4gICAqL1xuICBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcbiAgICBpZiAodGhpcy5nZXQobm9ybWFsaXplZE5hbWUpID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZ2V0T3JpZ2luYWxQcm9wcygpIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnByb3BzIH07XG4gIH1cbiAgZ2V0RGlydHlQcm9wcygpIHtcbiAgICByZXR1cm4geyAuLi50aGlzLmRpcnR5UHJvcHMgfTtcbiAgfVxuICBnZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50KCkge1xuICAgIHJldHVybiB7IC4uLnRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCB9O1xuICB9XG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiB1cGRhdGUgcmVxdWVzdCBiZWdpbnMuXG4gICAqL1xuICBmbHVzaERpcnR5UHJvcHNUb1BlbmRpbmcoKSB7XG4gICAgdGhpcy5wZW5kaW5nUHJvcHMgPSB7IC4uLnRoaXMuZGlydHlQcm9wcyB9O1xuICAgIHRoaXMuZGlydHlQcm9wcyA9IHt9O1xuICB9XG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiB1cGRhdGUgcmVxdWVzdCBmaW5pc2hlcyBzdWNjZXNzZnVsbHkuXG4gICAqL1xuICByZWluaXRpYWxpemVBbGxQcm9wcyhwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSB7fTtcbiAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICB9XG4gIC8qKlxuICAgKiBDYWxsZWQgYWZ0ZXIgYW4gdXBkYXRlIHJlcXVlc3QgZmFpbGVkLlxuICAgKi9cbiAgcHVzaFBlbmRpbmdQcm9wc0JhY2tUb0RpcnR5KCkge1xuICAgIHRoaXMuZGlydHlQcm9wcyA9IHsgLi4udGhpcy5wZW5kaW5nUHJvcHMsIC4uLnRoaXMuZGlydHlQcm9wcyB9O1xuICAgIHRoaXMucGVuZGluZ1Byb3BzID0ge307XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgaXMgdXNlZCB3aGVuIGEgcGFyZW50IGNvbXBvbmVudCBpcyByZW5kZXJpbmcsIGFuZCBpdCBpbmNsdWRlc1xuICAgKiBhIGZyZXNoIHNldCBvZiBwcm9wcyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIG9uIHRoZSBjaGlsZCBjb21wb25lbnQuXG4gICAqXG4gICAqIFRoZSBzZXJ2ZXIgbWFuYWdlcyByZXR1cm5pbmcgb25seSB0aGUgcHJvcHMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBvbnRvXG4gICAqIHRoZSBjaGlsZCwgc28gd2UgZG9uJ3QgbmVlZCB0byB3b3JyeSBhYm91dCB0aGF0LlxuICAgKlxuICAgKiBUaGUgcHJvcHMgYXJlIHN0b3JlZCBpbiBhIGRpZmZlcmVudCBwbGFjZSwgYmVjYXVzZSB0aGUgZXhpc3RpbmcgcHJvcHNcbiAgICogaGF2ZSB0aGVpciBvd24gY2hlY2tzdW0gYW5kIHRoZXNlIG5ldyBwcm9wcyBoYXZlICp0aGVpciogb3duIGNoZWNrc3VtLlxuICAgKiBTbywgb24gdGhlIG5leHQgcmVuZGVyLCBib3RoIG5lZWQgdG8gYmUgc2VudCBpbmRlcGVuZGVudGx5LlxuICAgKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYW55IG9mIHRoZSBwcm9wcyBhcmUgZGlmZmVyZW50LlxuICAgKi9cbiAgc3RvcmVOZXdQcm9wc0Zyb21QYXJlbnQocHJvcHMpIHtcbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXQoa2V5KTtcbiAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgdGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50ID0gcHJvcHM7XG4gICAgfVxuICAgIHJldHVybiBjaGFuZ2VkO1xuICB9XG59O1xuXG4vLyBzcmMvQ29tcG9uZW50L2luZGV4LnRzXG52YXIgQ29tcG9uZW50ID0gY2xhc3Mge1xuICAvKipcbiAgICogQHBhcmFtIGVsZW1lbnQgVGhlIHJvb3QgZWxlbWVudFxuICAgKiBAcGFyYW0gbmFtZSAgICBUaGUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSBwcm9wcyAgIFJlYWRvbmx5IGNvbXBvbmVudCBwcm9wc1xuICAgKiBAcGFyYW0gbGlzdGVuZXJzIEFycmF5IG9mIGV2ZW50IC0+IGFjdGlvbiBsaXN0ZW5lcnNcbiAgICogQHBhcmFtIGlkICAgICAgU29tZSB1bmlxdWUgaWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQuIE5lZWRlZCB0byBiZSBhIGNoaWxkIGNvbXBvbmVudFxuICAgKiBAcGFyYW0gYmFja2VuZCBCYWNrZW5kIGluc3RhbmNlIGZvciB1cGRhdGluZ1xuICAgKiBAcGFyYW0gZWxlbWVudERyaXZlciBDbGFzcyB0byBnZXQgXCJtb2RlbFwiIG5hbWUgZnJvbSBhbnkgZWxlbWVudC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHByb3BzLCBsaXN0ZW5lcnMsIGlkLCBiYWNrZW5kLCBlbGVtZW50RHJpdmVyKSB7XG4gICAgLyoqXG4gICAgICogQSBmaW5nZXJwcmludCB0aGF0IGlkZW50aWZpZXMgdGhlIHByb3BzL2lucHV0IHRoYXQgd2FzIHVzZWQgb25cbiAgICAgKiB0aGUgc2VydmVyIHRvIGNyZWF0ZSB0aGlzIGNvbXBvbmVudCwgZXNwZWNpYWxseSBpZiBpdCB3YXMgYVxuICAgICAqIGNoaWxkIGNvbXBvbmVudC4gVGhpcyBpcyBzZW50IGJhY2sgdG8gdGhlIHNlcnZlciBhbmQgY2FuIGJlIHVzZWRcbiAgICAgKiB0byBkZXRlcm1pbmUgaWYgYW55IFwiaW5wdXRcIiB0byB0aGUgY2hpbGQgY29tcG9uZW50IGNoYW5nZWQgYW5kIHRodXMsXG4gICAgICogaWYgdGhlIGNoaWxkIGNvbXBvbmVudCBuZWVkcyB0byBiZSByZS1yZW5kZXJlZC5cbiAgICAgKi9cbiAgICB0aGlzLmZpbmdlcnByaW50ID0gXCJcIjtcbiAgICB0aGlzLmRlZmF1bHREZWJvdW5jZSA9IDE1MDtcbiAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gbnVsbDtcbiAgICAvKiogQWN0aW9ucyB0aGF0IGFyZSB3YWl0aW5nIHRvIGJlIGV4ZWN1dGVkICovXG4gICAgdGhpcy5wZW5kaW5nQWN0aW9ucyA9IFtdO1xuICAgIC8qKiBGaWxlcyB0aGF0IGFyZSB3YWl0aW5nIHRvIGJlIHNlbnQgKi9cbiAgICB0aGlzLnBlbmRpbmdGaWxlcyA9IHt9O1xuICAgIC8qKiBJcyBhIHJlcXVlc3Qgd2FpdGluZyB0byBiZSBtYWRlPyAqL1xuICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuICAgIC8qKiBDdXJyZW50IFwidGltZW91dFwiIGJlZm9yZSB0aGUgcGVuZGluZyByZXF1ZXN0IHNob3VsZCBiZSBzZW50LiAqL1xuICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYmFja2VuZCA9IGJhY2tlbmQ7XG4gICAgdGhpcy5lbGVtZW50RHJpdmVyID0gZWxlbWVudERyaXZlcjtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgaWYgKCF0aGlzLmxpc3RlbmVycy5oYXMobGlzdGVuZXIuZXZlbnQpKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnNldChsaXN0ZW5lci5ldmVudCwgW10pO1xuICAgICAgfVxuICAgICAgdGhpcy5saXN0ZW5lcnMuZ2V0KGxpc3RlbmVyLmV2ZW50KT8ucHVzaChsaXN0ZW5lci5hY3Rpb24pO1xuICAgIH0pO1xuICAgIHRoaXMudmFsdWVTdG9yZSA9IG5ldyBWYWx1ZVN0b3JlX2RlZmF1bHQocHJvcHMpO1xuICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyID0gbmV3IFVuc3luY2VkSW5wdXRzVHJhY2tlcl9kZWZhdWx0KHRoaXMsIGVsZW1lbnREcml2ZXIpO1xuICAgIHRoaXMuaG9va3MgPSBuZXcgSG9va01hbmFnZXJfZGVmYXVsdCgpO1xuICAgIHRoaXMucmVzZXRQcm9taXNlKCk7XG4gICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlciA9IG5ldyBFeHRlcm5hbE11dGF0aW9uVHJhY2tlcl9kZWZhdWx0KFxuICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgKGVsZW1lbnQyKSA9PiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50MiwgdGhpcylcbiAgICApO1xuICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcbiAgfVxuICBhZGRQbHVnaW4ocGx1Z2luKSB7XG4gICAgcGx1Z2luLmF0dGFjaFRvQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbm5lY3QoKSB7XG4gICAgcmVnaXN0ZXJDb21wb25lbnQodGhpcyk7XG4gICAgdGhpcy5ob29rcy50cmlnZ2VySG9vayhcImNvbm5lY3RcIiwgdGhpcyk7XG4gICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuYWN0aXZhdGUoKTtcbiAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG4gIH1cbiAgZGlzY29ubmVjdCgpIHtcbiAgICB1bnJlZ2lzdGVyQ29tcG9uZW50KHRoaXMpO1xuICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soXCJkaXNjb25uZWN0XCIsIHRoaXMpO1xuICAgIHRoaXMuY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCk7XG4gICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZGVhY3RpdmF0ZSgpO1xuICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RvcCgpO1xuICB9XG4gIG9uKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMuaG9va3MucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgfVxuICBvZmYoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5ob29rcy51bnJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjayk7XG4gIH1cbiAgc2V0KG1vZGVsLCB2YWx1ZSwgcmVSZW5kZXIgPSBmYWxzZSwgZGVib3VuY2UgPSBmYWxzZSkge1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICBjb25zdCBtb2RlbE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobW9kZWwpO1xuICAgIGlmICghdGhpcy52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZWwgbmFtZSBcIiR7bW9kZWx9XCIuYCk7XG4gICAgfVxuICAgIGNvbnN0IGlzQ2hhbmdlZCA9IHRoaXMudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCB2YWx1ZSk7XG4gICAgdGhpcy5ob29rcy50cmlnZ2VySG9vayhcIm1vZGVsOnNldFwiLCBtb2RlbCwgdmFsdWUsIHRoaXMpO1xuICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG4gICAgaWYgKHJlUmVuZGVyICYmIGlzQ2hhbmdlZCkge1xuICAgICAgdGhpcy5kZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuICBnZXREYXRhKG1vZGVsKSB7XG4gICAgY29uc3QgbW9kZWxOYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKTtcbiAgICBpZiAoIXRoaXMudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vZGVsIFwiJHttb2RlbH1cIi5gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKTtcbiAgfVxuICBhY3Rpb24obmFtZSwgYXJncyA9IHt9LCBkZWJvdW5jZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuICAgIHRoaXMucGVuZGluZ0FjdGlvbnMucHVzaCh7XG4gICAgICBuYW1lLFxuICAgICAgYXJnc1xuICAgIH0pO1xuICAgIHRoaXMuZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuICBmaWxlcyhrZXksIGlucHV0KSB7XG4gICAgdGhpcy5wZW5kaW5nRmlsZXNba2V5XSA9IGlucHV0O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgdGhpcy50cnlTdGFydGluZ1JlcXVlc3QoKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBtb2RlbHMgdGhlIHVzZXIgaGFzIG1vZGlmaWVkLCBidXQgd2hvc2UgbW9kZWwgaGFzIG5vdFxuICAgKiB5ZXQgYmVlbiB1cGRhdGVkLlxuICAgKi9cbiAgZ2V0VW5zeW5jZWRNb2RlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmdldFVuc3luY2VkTW9kZWxzKCk7XG4gIH1cbiAgZW1pdChuYW1lLCBkYXRhLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQgPSBudWxsKSB7XG4gICAgdGhpcy5wZXJmb3JtRW1pdChuYW1lLCBkYXRhLCBmYWxzZSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkKTtcbiAgfVxuICBlbWl0VXAobmFtZSwgZGF0YSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkID0gbnVsbCkge1xuICAgIHRoaXMucGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgdHJ1ZSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkKTtcbiAgfVxuICBlbWl0U2VsZihuYW1lLCBkYXRhKSB7XG4gICAgdGhpcy5kb0VtaXQobmFtZSwgZGF0YSk7XG4gIH1cbiAgcGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgZW1pdFVwLCBtYXRjaGluZ05hbWUpIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gZmluZENvbXBvbmVudHModGhpcywgZW1pdFVwLCBtYXRjaGluZ05hbWUpO1xuICAgIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICBjb21wb25lbnQuZG9FbWl0KG5hbWUsIGRhdGEpO1xuICAgIH0pO1xuICB9XG4gIGRvRW1pdChuYW1lLCBkYXRhKSB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmVycy5oYXMobmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMubGlzdGVuZXJzLmdldChuYW1lKSB8fCBbXTtcbiAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xuICAgICAgdGhpcy5hY3Rpb24oYWN0aW9uLCBkYXRhLCAxKTtcbiAgICB9KTtcbiAgfVxuICBpc1R1cmJvRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIFR1cmJvICE9PSBcInVuZGVmaW5lZFwiICYmICF0aGlzLmVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtdHVyYm89XCJmYWxzZVwiXScpO1xuICB9XG4gIHRyeVN0YXJ0aW5nUmVxdWVzdCgpIHtcbiAgICBpZiAoIXRoaXMuYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgIHRoaXMucGVyZm9ybVJlcXVlc3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gdHJ1ZTtcbiAgfVxuICBwZXJmb3JtUmVxdWVzdCgpIHtcbiAgICBjb25zdCB0aGlzUHJvbWlzZVJlc29sdmUgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmU7XG4gICAgdGhpcy5yZXNldFByb21pc2UoKTtcbiAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5yZXNldFVuc3luY2VkRmllbGRzKCk7XG4gICAgY29uc3QgZmlsZXNUb1NlbmQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnBlbmRpbmdGaWxlcykpIHtcbiAgICAgIGlmICh2YWx1ZS5maWxlcykge1xuICAgICAgICBmaWxlc1RvU2VuZFtrZXldID0gdmFsdWUuZmlsZXM7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3RDb25maWcgPSB7XG4gICAgICBwcm9wczogdGhpcy52YWx1ZVN0b3JlLmdldE9yaWdpbmFsUHJvcHMoKSxcbiAgICAgIGFjdGlvbnM6IHRoaXMucGVuZGluZ0FjdGlvbnMsXG4gICAgICB1cGRhdGVkOiB0aGlzLnZhbHVlU3RvcmUuZ2V0RGlydHlQcm9wcygpLFxuICAgICAgY2hpbGRyZW46IHt9LFxuICAgICAgdXBkYXRlZFByb3BzRnJvbVBhcmVudDogdGhpcy52YWx1ZVN0b3JlLmdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQoKSxcbiAgICAgIGZpbGVzOiBmaWxlc1RvU2VuZFxuICAgIH07XG4gICAgdGhpcy5ob29rcy50cmlnZ2VySG9vayhcInJlcXVlc3Q6c3RhcnRlZFwiLCByZXF1ZXN0Q29uZmlnKTtcbiAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gdGhpcy5iYWNrZW5kLm1ha2VSZXF1ZXN0KFxuICAgICAgcmVxdWVzdENvbmZpZy5wcm9wcyxcbiAgICAgIHJlcXVlc3RDb25maWcuYWN0aW9ucyxcbiAgICAgIHJlcXVlc3RDb25maWcudXBkYXRlZCxcbiAgICAgIHJlcXVlc3RDb25maWcuY2hpbGRyZW4sXG4gICAgICByZXF1ZXN0Q29uZmlnLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsXG4gICAgICByZXF1ZXN0Q29uZmlnLmZpbGVzXG4gICAgKTtcbiAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKFwibG9hZGluZy5zdGF0ZTpzdGFydGVkXCIsIHRoaXMuZWxlbWVudCwgdGhpcy5iYWNrZW5kUmVxdWVzdCk7XG4gICAgdGhpcy5wZW5kaW5nQWN0aW9ucyA9IFtdO1xuICAgIHRoaXMudmFsdWVTdG9yZS5mbHVzaERpcnR5UHJvcHNUb1BlbmRpbmcoKTtcbiAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0LnByb21pc2UudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGJhY2tlbmRSZXNwb25zZSA9IG5ldyBCYWNrZW5kUmVzcG9uc2VfZGVmYXVsdChyZXNwb25zZSk7XG4gICAgICBjb25zdCBodG1sID0gYXdhaXQgYmFja2VuZFJlc3BvbnNlLmdldEJvZHkoKTtcbiAgICAgIGZvciAoY29uc3QgaW5wdXQgb2YgT2JqZWN0LnZhbHVlcyh0aGlzLnBlbmRpbmdGaWxlcykpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgfVxuICAgICAgY29uc3QgaGVhZGVycyA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzO1xuICAgICAgaWYgKCFoZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKT8uaW5jbHVkZXMoXCJhcHBsaWNhdGlvbi92bmQubGl2ZS1jb21wb25lbnQraHRtbFwiKSAmJiAhaGVhZGVycy5nZXQoXCJYLUxpdmUtUmVkaXJlY3RcIikpIHtcbiAgICAgICAgY29uc3QgY29udHJvbHMgPSB7IGRpc3BsYXlFcnJvcjogdHJ1ZSB9O1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUucHVzaFBlbmRpbmdQcm9wc0JhY2tUb0RpcnR5KCk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soXCJyZXNwb25zZTplcnJvclwiLCBiYWNrZW5kUmVzcG9uc2UsIGNvbnRyb2xzKTtcbiAgICAgICAgaWYgKGNvbnRyb2xzLmRpc3BsYXlFcnJvcikge1xuICAgICAgICAgIHRoaXMucmVuZGVyRXJyb3IoaHRtbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG4gICAgICAgIHRoaXNQcm9taXNlUmVzb2x2ZShiYWNrZW5kUmVzcG9uc2UpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9XG4gICAgICB0aGlzLnByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpO1xuICAgICAgY29uc3QgbGl2ZVVybCA9IGJhY2tlbmRSZXNwb25zZS5nZXRMaXZlVXJsKCk7XG4gICAgICBpZiAobGl2ZVVybCkge1xuICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShcbiAgICAgICAgICBoaXN0b3J5LnN0YXRlLFxuICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgbmV3IFVSTChsaXZlVXJsICsgd2luZG93LmxvY2F0aW9uLmhhc2gsIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gbnVsbDtcbiAgICAgIHRoaXNQcm9taXNlUmVzb2x2ZShiYWNrZW5kUmVzcG9uc2UpO1xuICAgICAgaWYgKHRoaXMuaXNSZXF1ZXN0UGVuZGluZykge1xuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0pO1xuICB9XG4gIHByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpIHtcbiAgICBjb25zdCBjb250cm9scyA9IHsgc2hvdWxkUmVuZGVyOiB0cnVlIH07XG4gICAgdGhpcy5ob29rcy50cmlnZ2VySG9vayhcInJlbmRlcjpzdGFydGVkXCIsIGh0bWwsIGJhY2tlbmRSZXNwb25zZSwgY29udHJvbHMpO1xuICAgIGlmICghY29udHJvbHMuc2hvdWxkUmVuZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoXCJMb2NhdGlvblwiKSkge1xuICAgICAgaWYgKHRoaXMuaXNUdXJib0VuYWJsZWQoKSkge1xuICAgICAgICBUdXJiby52aXNpdChiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoXCJMb2NhdGlvblwiKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpIHx8IFwiXCI7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soXCJsb2FkaW5nLnN0YXRlOmZpbmlzaGVkXCIsIHRoaXMuZWxlbWVudCk7XG4gICAgY29uc3QgbW9kaWZpZWRNb2RlbFZhbHVlcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMudmFsdWVTdG9yZS5nZXREaXJ0eVByb3BzKCkpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgbW9kaWZpZWRNb2RlbFZhbHVlc1ttb2RlbE5hbWVdID0gdGhpcy52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpO1xuICAgIH0pO1xuICAgIGxldCBuZXdFbGVtZW50O1xuICAgIHRyeSB7XG4gICAgICBuZXdFbGVtZW50ID0gaHRtbFRvRWxlbWVudChodG1sKTtcbiAgICAgIGlmICghbmV3RWxlbWVudC5tYXRjaGVzKFwiW2RhdGEtY29udHJvbGxlcn49bGl2ZV1cIikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSBsaXZlIGNvbXBvbmVudCB0ZW1wbGF0ZSBtdXN0IGNvbnRhaW4gYSBzaW5nbGUgcm9vdCBjb250cm9sbGVyIGVsZW1lbnQuXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlICcke3RoaXMubmFtZX0nIGNvbXBvbmVudCBIVE1MIHJldHVybmVkOmAsIHtcbiAgICAgICAgaWQ6IHRoaXMuaWRcbiAgICAgIH0pO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuaGFuZGxlUGVuZGluZ0NoYW5nZXMoKTtcbiAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0b3AoKTtcbiAgICBleGVjdXRlTW9ycGhkb20oXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICBuZXdFbGVtZW50LFxuICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZ2V0VW5zeW5jZWRJbnB1dHMoKSxcbiAgICAgIChlbGVtZW50KSA9PiBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMudmFsdWVTdG9yZSksXG4gICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyXG4gICAgKTtcbiAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG4gICAgY29uc3QgbmV3UHJvcHMgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0Q29tcG9uZW50UHJvcHMoKTtcbiAgICB0aGlzLnZhbHVlU3RvcmUucmVpbml0aWFsaXplQWxsUHJvcHMobmV3UHJvcHMpO1xuICAgIGNvbnN0IGV2ZW50c1RvRW1pdCA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRFdmVudHNUb0VtaXQoKTtcbiAgICBjb25zdCBicm93c2VyRXZlbnRzVG9EaXNwYXRjaCA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCgpO1xuICAgIE9iamVjdC5rZXlzKG1vZGlmaWVkTW9kZWxWYWx1ZXMpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgdGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSk7XG4gICAgfSk7XG4gICAgZXZlbnRzVG9FbWl0LmZvckVhY2goKHsgZXZlbnQsIGRhdGEsIHRhcmdldCwgY29tcG9uZW50TmFtZSB9KSA9PiB7XG4gICAgICBpZiAodGFyZ2V0ID09PSBcInVwXCIpIHtcbiAgICAgICAgdGhpcy5lbWl0VXAoZXZlbnQsIGRhdGEsIGNvbXBvbmVudE5hbWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0ID09PSBcInNlbGZcIikge1xuICAgICAgICB0aGlzLmVtaXRTZWxmKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KGV2ZW50LCBkYXRhLCBjb21wb25lbnROYW1lKTtcbiAgICB9KTtcbiAgICBicm93c2VyRXZlbnRzVG9EaXNwYXRjaC5mb3JFYWNoKCh7IGV2ZW50LCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHtcbiAgICAgICAgICBkZXRhaWw6IHBheWxvYWQsXG4gICAgICAgICAgYnViYmxlczogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKFwicmVuZGVyOmZpbmlzaGVkXCIsIHRoaXMpO1xuICB9XG4gIGNhbGN1bGF0ZURlYm91bmNlKGRlYm91bmNlKSB7XG4gICAgaWYgKGRlYm91bmNlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RGVib3VuY2U7XG4gICAgfVxuICAgIGlmIChkZWJvdW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gZGVib3VuY2U7XG4gIH1cbiAgY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCkge1xuICAgIGlmICh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKSB7XG4gICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICB0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0sIHRoaXMuY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpKTtcbiAgfVxuICAvLyBpbnNwaXJlZCBieSBMaXZld2lyZSFcbiAgcmVuZGVyRXJyb3IoaHRtbCkge1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGl2ZS1jb21wb25lbnQtZXJyb3JcIik7XG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICBtb2RhbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtb2RhbC5pZCA9IFwibGl2ZS1jb21wb25lbnQtZXJyb3JcIjtcbiAgICAgIG1vZGFsLnN0eWxlLnBhZGRpbmcgPSBcIjUwcHhcIjtcbiAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAuNSlcIjtcbiAgICAgIG1vZGFsLnN0eWxlLnpJbmRleCA9IFwiMTAwMDAwXCI7XG4gICAgICBtb2RhbC5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgIG1vZGFsLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICBtb2RhbC5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgbW9kYWwuc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICBtb2RhbC5zdHlsZS5yaWdodCA9IFwiMHB4XCI7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBtb2RhbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICB9XG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICBpZnJhbWUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1cHhcIjtcbiAgICBpZnJhbWUuc3R5bGUuZmxleEdyb3cgPSBcIjFcIjtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChtb2RhbCk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgaWYgKGlmcmFtZS5jb250ZW50V2luZG93KSB7XG4gICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5vcGVuKCk7XG4gICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC53cml0ZShodG1sKTtcbiAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LmNsb3NlKCk7XG4gICAgfVxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWwyKSA9PiB7XG4gICAgICBpZiAobW9kYWwyKSB7XG4gICAgICAgIG1vZGFsMi5vdXRlckhUTUwgPSBcIlwiO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xuICAgIH07XG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlTW9kYWwobW9kYWwpKTtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBtb2RhbC5mb2N1cygpO1xuICB9XG4gIHJlc2V0UHJvbWlzZSgpIHtcbiAgICB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBDYWxsZWQgb24gYSBjaGlsZCBjb21wb25lbnQgYWZ0ZXIgdGhlIHBhcmVudCBjb21wb25lbnQgcmVuZGVyIGhhcyByZXF1ZXN0ZWRcbiAgICogdGhhdCB0aGUgY2hpbGQgY29tcG9uZW50IHVwZGF0ZSBpdHMgcHJvcHMgJiByZS1yZW5kZXIgaWYgbmVjZXNzYXJ5LlxuICAgKi9cbiAgX3VwZGF0ZUZyb21QYXJlbnRQcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IGlzQ2hhbmdlZCA9IHRoaXMudmFsdWVTdG9yZS5zdG9yZU5ld1Byb3BzRnJvbVBhcmVudChwcm9wcyk7XG4gICAgaWYgKGlzQ2hhbmdlZCkge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cbn07XG5mdW5jdGlvbiBwcm94aWZ5Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICByZXR1cm4gbmV3IFByb3h5KGNvbXBvbmVudCwge1xuICAgIGdldChjb21wb25lbnQyLCBwcm9wKSB7XG4gICAgICBpZiAocHJvcCBpbiBjb21wb25lbnQyIHx8IHR5cGVvZiBwcm9wICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50Mltwcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgY29uc3QgY2FsbGFibGUgPSBjb21wb25lbnQyW3Byb3BdO1xuICAgICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxhYmxlLmFwcGx5KGNvbXBvbmVudDIsIGFyZ3MpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGNvbXBvbmVudDIsIHByb3ApO1xuICAgICAgfVxuICAgICAgaWYgKGNvbXBvbmVudDIudmFsdWVTdG9yZS5oYXMocHJvcCkpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDIuZ2V0RGF0YShwcm9wKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoYXJncykgPT4ge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50Mi5hY3Rpb24uYXBwbHkoY29tcG9uZW50MiwgW3Byb3AsIGFyZ3NdKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgIGlmIChwcm9wZXJ0eSBpbiB0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRhcmdldC5zZXQocHJvcGVydHksIHZhbHVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIHNyYy9Db21wb25lbnQvRWxlbWVudERyaXZlci50c1xudmFyIFN0aW11bHVzRWxlbWVudERyaXZlciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoY29udHJvbGxlcikge1xuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gIH1cbiAgZ2V0TW9kZWxOYW1lKGVsZW1lbnQpIHtcbiAgICBjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuICAgIGlmICghbW9kZWxEaXJlY3RpdmUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gbW9kZWxEaXJlY3RpdmUuYWN0aW9uO1xuICB9XG4gIGdldENvbXBvbmVudFByb3BzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXIucHJvcHNWYWx1ZTtcbiAgfVxuICBnZXRFdmVudHNUb0VtaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbGxlci5ldmVudHNUb0VtaXRWYWx1ZTtcbiAgfVxuICBnZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyLmV2ZW50c1RvRGlzcGF0Y2hWYWx1ZTtcbiAgfVxufTtcblxuLy8gc3JjL0RpcmVjdGl2ZS9nZXRfbW9kZWxfYmluZGluZy50c1xuZnVuY3Rpb24gZ2V0X21vZGVsX2JpbmRpbmdfZGVmYXVsdChtb2RlbERpcmVjdGl2ZSkge1xuICBsZXQgc2hvdWxkUmVuZGVyID0gdHJ1ZTtcbiAgbGV0IHRhcmdldEV2ZW50TmFtZSA9IG51bGw7XG4gIGxldCBkZWJvdW5jZSA9IGZhbHNlO1xuICBsZXQgbWluTGVuZ3RoID0gbnVsbDtcbiAgbGV0IG1heExlbmd0aCA9IG51bGw7XG4gIGxldCBtaW5WYWx1ZSA9IG51bGw7XG4gIGxldCBtYXhWYWx1ZSA9IG51bGw7XG4gIG1vZGVsRGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgY2FzZSBcIm9uXCI6XG4gICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIFwib25cIiBtb2RpZmllciBpbiAke21vZGVsRGlyZWN0aXZlLmdldFN0cmluZygpfSByZXF1aXJlcyBhIHZhbHVlIC0gZS5nLiBvbihjaGFuZ2UpLmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghW1wiaW5wdXRcIiwgXCJjaGFuZ2VcIl0uaW5jbHVkZXMobW9kaWZpZXIudmFsdWUpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBcIm9uXCIgbW9kaWZpZXIgaW4gJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX0gb25seSBhY2NlcHRzIHRoZSBhcmd1bWVudHMgXCJpbnB1dFwiIG9yIFwiY2hhbmdlXCIuYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0RXZlbnROYW1lID0gbW9kaWZpZXIudmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm5vcmVuZGVyXCI6XG4gICAgICAgIHNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkZWJvdW5jZVwiOlxuICAgICAgICBkZWJvdW5jZSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1pbl9sZW5ndGhcIjpcbiAgICAgICAgbWluTGVuZ3RoID0gbW9kaWZpZXIudmFsdWUgPyBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWF4X2xlbmd0aFwiOlxuICAgICAgICBtYXhMZW5ndGggPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSkgOiBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtaW5fdmFsdWVcIjpcbiAgICAgICAgbWluVmFsdWUgPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUZsb2F0KG1vZGlmaWVyLnZhbHVlKSA6IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1heF92YWx1ZVwiOlxuICAgICAgICBtYXhWYWx1ZSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlRmxvYXQobW9kaWZpZXIudmFsdWUpIDogbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgaW4gZGF0YS1tb2RlbD1cIiR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuYCk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgW21vZGVsTmFtZSwgaW5uZXJNb2RlbE5hbWVdID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uLnNwbGl0KFwiOlwiKTtcbiAgcmV0dXJuIHtcbiAgICBtb2RlbE5hbWUsXG4gICAgaW5uZXJNb2RlbE5hbWU6IGlubmVyTW9kZWxOYW1lIHx8IG51bGwsXG4gICAgc2hvdWxkUmVuZGVyLFxuICAgIGRlYm91bmNlLFxuICAgIHRhcmdldEV2ZW50TmFtZSxcbiAgICBtaW5MZW5ndGgsXG4gICAgbWF4TGVuZ3RoLFxuICAgIG1pblZhbHVlLFxuICAgIG1heFZhbHVlXG4gIH07XG59XG5cbi8vIHNyYy9Db21wb25lbnQvcGx1Z2lucy9DaGlsZENvbXBvbmVudFBsdWdpbi50c1xudmFyIENoaWxkQ29tcG9uZW50UGx1Z2luX2RlZmF1bHQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudCkge1xuICAgIHRoaXMucGFyZW50TW9kZWxCaW5kaW5ncyA9IFtdO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlcyA9IGdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzKHRoaXMuY29tcG9uZW50LmVsZW1lbnQpO1xuICAgIHRoaXMucGFyZW50TW9kZWxCaW5kaW5ncyA9IG1vZGVsRGlyZWN0aXZlcy5tYXAoZ2V0X21vZGVsX2JpbmRpbmdfZGVmYXVsdCk7XG4gIH1cbiAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgY29tcG9uZW50Lm9uKFwicmVxdWVzdDpzdGFydGVkXCIsIChyZXF1ZXN0RGF0YSkgPT4ge1xuICAgICAgcmVxdWVzdERhdGEuY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuRmluZ2VycHJpbnRzKCk7XG4gICAgfSk7XG4gICAgY29tcG9uZW50Lm9uKFwibW9kZWw6c2V0XCIsIChtb2RlbCwgdmFsdWUpID0+IHtcbiAgICAgIHRoaXMubm90aWZ5UGFyZW50TW9kZWxDaGFuZ2UobW9kZWwsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuICBnZXRDaGlsZHJlbkZpbmdlcnByaW50cygpIHtcbiAgICBjb25zdCBmaW5nZXJwcmludHMgPSB7fTtcbiAgICB0aGlzLmdldENoaWxkcmVuKCkuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmICghY2hpbGQuaWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibWlzc2luZyBpZFwiKTtcbiAgICAgIH1cbiAgICAgIGZpbmdlcnByaW50c1tjaGlsZC5pZF0gPSB7XG4gICAgICAgIGZpbmdlcnByaW50OiBjaGlsZC5maW5nZXJwcmludCxcbiAgICAgICAgdGFnOiBjaGlsZC5lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gZmluZ2VycHJpbnRzO1xuICB9XG4gIC8qKlxuICAgKiBOb3RpZmllcyBwYXJlbnQgb2YgYSBtb2RlbCBjaGFuZ2UgaWYgZGVzaXJlZC5cbiAgICpcbiAgICogVGhpcyBtYWtlcyB0aGUgY2hpbGQgXCJiZWhhdmVcIiBsaWtlIGl0J3MgYSBub3JtYWwgYDxpbnB1dD5gIGVsZW1lbnQsXG4gICAqIHdoZXJlLCB3aGVuIGl0cyB2YWx1ZSBjaGFuZ2VzLCB0aGUgcGFyZW50IGlzIG5vdGlmaWVkLlxuICAgKi9cbiAgbm90aWZ5UGFyZW50TW9kZWxDaGFuZ2UobW9kZWxOYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IHBhcmVudENvbXBvbmVudCA9IGZpbmRQYXJlbnQodGhpcy5jb21wb25lbnQpO1xuICAgIGlmICghcGFyZW50Q29tcG9uZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGFyZW50TW9kZWxCaW5kaW5ncy5mb3JFYWNoKChtb2RlbEJpbmRpbmcpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTW9kZWxOYW1lID0gbW9kZWxCaW5kaW5nLmlubmVyTW9kZWxOYW1lIHx8IFwidmFsdWVcIjtcbiAgICAgIGlmIChjaGlsZE1vZGVsTmFtZSAhPT0gbW9kZWxOYW1lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBhcmVudENvbXBvbmVudC5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgdmFsdWUsIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIsIG1vZGVsQmluZGluZy5kZWJvdW5jZSk7XG4gICAgfSk7XG4gIH1cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIGZpbmRDaGlsZHJlbih0aGlzLmNvbXBvbmVudCk7XG4gIH1cbn07XG5cbi8vIHNyYy9Db21wb25lbnQvcGx1Z2lucy9MYXp5UGx1Z2luLnRzXG52YXIgTGF6eVBsdWdpbl9kZWZhdWx0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbnVsbDtcbiAgfVxuICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBpZiAoXCJsYXp5XCIgIT09IGNvbXBvbmVudC5lbGVtZW50LmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKFwibG9hZGluZ1wiKT8udmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29tcG9uZW50Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmdldE9ic2VydmVyKCkub2JzZXJ2ZShjb21wb25lbnQuZWxlbWVudCk7XG4gICAgfSk7XG4gICAgY29tcG9uZW50Lm9uKFwiZGlzY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyPy51bm9ic2VydmUoY29tcG9uZW50LmVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG4gIGdldE9ic2VydmVyKCkge1xuICAgIGlmICghdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgZW50cnkudGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibGl2ZTphcHBlYXJcIikpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgfVxufTtcblxuLy8gc3JjL0NvbXBvbmVudC9wbHVnaW5zL0xvYWRpbmdQbHVnaW4udHNcbnZhciBMb2FkaW5nUGx1Z2luX2RlZmF1bHQgPSBjbGFzcyB7XG4gIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIGNvbXBvbmVudC5vbihcImxvYWRpbmcuc3RhdGU6c3RhcnRlZFwiLCAoZWxlbWVudCwgcmVxdWVzdCkgPT4ge1xuICAgICAgdGhpcy5zdGFydExvYWRpbmcoY29tcG9uZW50LCBlbGVtZW50LCByZXF1ZXN0KTtcbiAgICB9KTtcbiAgICBjb21wb25lbnQub24oXCJsb2FkaW5nLnN0YXRlOmZpbmlzaGVkXCIsIChlbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLmZpbmlzaExvYWRpbmcoY29tcG9uZW50LCBlbGVtZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLmZpbmlzaExvYWRpbmcoY29tcG9uZW50LCBjb21wb25lbnQuZWxlbWVudCk7XG4gIH1cbiAgc3RhcnRMb2FkaW5nKGNvbXBvbmVudCwgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICB0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoY29tcG9uZW50LCB0cnVlLCB0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCk7XG4gIH1cbiAgZmluaXNoTG9hZGluZyhjb21wb25lbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgICB0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoY29tcG9uZW50LCBmYWxzZSwgdGFyZ2V0RWxlbWVudCwgbnVsbCk7XG4gIH1cbiAgaGFuZGxlTG9hZGluZ1RvZ2dsZShjb21wb25lbnQsIGlzTG9hZGluZywgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICB0aGlzLmFkZEF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgW1wiYnVzeVwiXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbXCJidXN5XCJdKTtcbiAgICB9XG4gICAgdGhpcy5nZXRMb2FkaW5nRGlyZWN0aXZlcyhjb21wb25lbnQsIHRhcmdldEVsZW1lbnQpLmZvckVhY2goKHsgZWxlbWVudCwgZGlyZWN0aXZlcyB9KSA9PiB7XG4gICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBbXCJkYXRhLWxpdmUtaXMtbG9hZGluZ1wiXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgW1wiZGF0YS1saXZlLWlzLWxvYWRpbmdcIl0pO1xuICAgICAgfVxuICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBoYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCkge1xuICAgIGNvbnN0IGZpbmFsQWN0aW9uID0gcGFyc2VMb2FkaW5nQWN0aW9uKGRpcmVjdGl2ZS5hY3Rpb24sIGlzTG9hZGluZyk7XG4gICAgY29uc3QgdGFyZ2V0ZWRBY3Rpb25zID0gW107XG4gICAgY29uc3QgdGFyZ2V0ZWRNb2RlbHMgPSBbXTtcbiAgICBsZXQgZGVsYXkgPSAwO1xuICAgIGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICB2YWxpZE1vZGlmaWVycy5zZXQoXCJkZWxheVwiLCAobW9kaWZpZXIpID0+IHtcbiAgICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRlbGF5ID0gbW9kaWZpZXIudmFsdWUgPyBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogMjAwO1xuICAgIH0pO1xuICAgIHZhbGlkTW9kaWZpZXJzLnNldChcImFjdGlvblwiLCAobW9kaWZpZXIpID0+IHtcbiAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBUaGUgXCJhY3Rpb25cIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBhY3Rpb24oZm9vKS4gSXQncyBtaXNzaW5nIGZvciBcIiR7ZGlyZWN0aXZlLmdldFN0cmluZygpfVwiYFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGFyZ2V0ZWRBY3Rpb25zLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuICAgIH0pO1xuICAgIHZhbGlkTW9kaWZpZXJzLnNldChcIm1vZGVsXCIsIChtb2RpZmllcikgPT4ge1xuICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFRoZSBcIm1vZGVsXCIgaW4gZGF0YS1sb2FkaW5nIG11c3QgaGF2ZSBhbiBhY3Rpb24gbmFtZSAtIGUuZy4gbW9kZWwoZm9vKS4gSXQncyBtaXNzaW5nIGZvciBcIiR7ZGlyZWN0aXZlLmdldFN0cmluZygpfVwiYFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGFyZ2V0ZWRNb2RlbHMucHVzaChtb2RpZmllci52YWx1ZSk7XG4gICAgfSk7XG4gICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICBjb25zdCBjYWxsYWJsZSA9IHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSA/PyAoKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICAgICAgY2FsbGFibGUobW9kaWZpZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIHVzZWQgaW4gZGF0YS1sb2FkaW5nPVwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuIEF2YWlsYWJsZSBtb2RpZmllcnMgYXJlOiAke0FycmF5LmZyb20odmFsaWRNb2RpZmllcnMua2V5cygpKS5qb2luKFwiLCBcIil9LmBcbiAgICAgICk7XG4gICAgfSk7XG4gICAgaWYgKGlzTG9hZGluZyAmJiB0YXJnZXRlZEFjdGlvbnMubGVuZ3RoID4gMCAmJiBiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNMb2FkaW5nICYmIHRhcmdldGVkTW9kZWxzLmxlbmd0aCA+IDAgJiYgYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmFyZUFueU1vZGVsc1VwZGF0ZWQodGFyZ2V0ZWRNb2RlbHMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBsb2FkaW5nRGlyZWN0aXZlO1xuICAgIHN3aXRjaCAoZmluYWxBY3Rpb24pIHtcbiAgICAgIGNhc2UgXCJzaG93XCI6XG4gICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnNob3dFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJoaWRlXCI6XG4gICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmhpZGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJhZGRDbGFzc1wiOlxuICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInJlbW92ZUNsYXNzXCI6XG4gICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYWRkQXR0cmlidXRlXCI6XG4gICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJyZW1vdmVBdHRyaWJ1dGVcIjpcbiAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2ZpbmFsQWN0aW9ufVwiYCk7XG4gICAgfVxuICAgIGlmIChkZWxheSkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmlzUmVzb2x2ZWQpIHtcbiAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGRlbGF5KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbG9hZGluZ0RpcmVjdGl2ZSgpO1xuICB9XG4gIGdldExvYWRpbmdEaXJlY3RpdmVzKGNvbXBvbmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGxvYWRpbmdEaXJlY3RpdmVzID0gW107XG4gICAgbGV0IG1hdGNoaW5nRWxlbWVudHMgPSBbLi4uQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1sb2FkaW5nXVwiKSldO1xuICAgIG1hdGNoaW5nRWxlbWVudHMgPSBtYXRjaGluZ0VsZW1lbnRzLmZpbHRlcigoZWx0KSA9PiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbHQsIGNvbXBvbmVudCkpO1xuICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImRhdGEtbG9hZGluZ1wiKSkge1xuICAgICAgbWF0Y2hpbmdFbGVtZW50cyA9IFtlbGVtZW50LCAuLi5tYXRjaGluZ0VsZW1lbnRzXTtcbiAgICB9XG4gICAgbWF0Y2hpbmdFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50MikgPT4ge1xuICAgICAgaWYgKCEoZWxlbWVudDIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgJiYgIShlbGVtZW50MiBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgRWxlbWVudCBUeXBlXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhlbGVtZW50Mi5kYXRhc2V0LmxvYWRpbmcgfHwgXCJzaG93XCIpO1xuICAgICAgbG9hZGluZ0RpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQyLFxuICAgICAgICBkaXJlY3RpdmVzXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbG9hZGluZ0RpcmVjdGl2ZXM7XG4gIH1cbiAgc2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwicmV2ZXJ0XCI7XG4gIH1cbiAgaGlkZUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG4gIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY29tYmluZVNwYWNlZEFycmF5KGNsYXNzZXMpKTtcbiAgfVxuICByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc2VzKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcbiAgICB9XG4gIH1cbiAgYWRkQXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgXCJcIik7XG4gICAgfSk7XG4gIH1cbiAgcmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgfSk7XG4gIH1cbn07XG52YXIgcGFyc2VMb2FkaW5nQWN0aW9uID0gKGFjdGlvbiwgaXNMb2FkaW5nKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgY2FzZSBcInNob3dcIjpcbiAgICAgIHJldHVybiBpc0xvYWRpbmcgPyBcInNob3dcIiA6IFwiaGlkZVwiO1xuICAgIGNhc2UgXCJoaWRlXCI6XG4gICAgICByZXR1cm4gaXNMb2FkaW5nID8gXCJoaWRlXCIgOiBcInNob3dcIjtcbiAgICBjYXNlIFwiYWRkQ2xhc3NcIjpcbiAgICAgIHJldHVybiBpc0xvYWRpbmcgPyBcImFkZENsYXNzXCIgOiBcInJlbW92ZUNsYXNzXCI7XG4gICAgY2FzZSBcInJlbW92ZUNsYXNzXCI6XG4gICAgICByZXR1cm4gaXNMb2FkaW5nID8gXCJyZW1vdmVDbGFzc1wiIDogXCJhZGRDbGFzc1wiO1xuICAgIGNhc2UgXCJhZGRBdHRyaWJ1dGVcIjpcbiAgICAgIHJldHVybiBpc0xvYWRpbmcgPyBcImFkZEF0dHJpYnV0ZVwiIDogXCJyZW1vdmVBdHRyaWJ1dGVcIjtcbiAgICBjYXNlIFwicmVtb3ZlQXR0cmlidXRlXCI6XG4gICAgICByZXR1cm4gaXNMb2FkaW5nID8gXCJyZW1vdmVBdHRyaWJ1dGVcIiA6IFwiYWRkQXR0cmlidXRlXCI7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2FjdGlvbn1cImApO1xufTtcblxuLy8gc3JjL0NvbXBvbmVudC9wbHVnaW5zL1BhZ2VVbmxvYWRpbmdQbHVnaW4udHNcbnZhciBQYWdlVW5sb2FkaW5nUGx1Z2luX2RlZmF1bHQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgfVxuICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBjb21wb25lbnQub24oXCJyZW5kZXI6c3RhcnRlZFwiLCAoaHRtbCwgcmVzcG9uc2UsIGNvbnRyb2xzKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgY29udHJvbHMuc2hvdWxkUmVuZGVyID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29tcG9uZW50Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBjb21wb25lbnQub24oXCJkaXNjb25uZWN0XCIsICgpID0+IHtcbiAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gc3JjL1BvbGxpbmdEaXJlY3Rvci50c1xudmFyIFBvbGxpbmdEaXJlY3Rvcl9kZWZhdWx0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihjb21wb25lbnQpIHtcbiAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzID0gW107XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gIH1cbiAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgIHRoaXMucG9sbHMucHVzaCh7IGFjdGlvbk5hbWUsIGR1cmF0aW9uIH0pO1xuICAgIGlmICh0aGlzLmlzUG9sbGluZ0FjdGl2ZSkge1xuICAgICAgdGhpcy5pbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuICAgIH1cbiAgfVxuICBzdGFydEFsbFBvbGxpbmcoKSB7XG4gICAgaWYgKHRoaXMuaXNQb2xsaW5nQWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnBvbGxzLmZvckVhY2goKHsgYWN0aW9uTmFtZSwgZHVyYXRpb24gfSkgPT4ge1xuICAgICAgdGhpcy5pbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuICAgIH0pO1xuICB9XG4gIHN0b3BBbGxQb2xsaW5nKCkge1xuICAgIHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzLmZvckVhY2goKGludGVydmFsKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9KTtcbiAgfVxuICBjbGVhclBvbGxpbmcoKSB7XG4gICAgdGhpcy5zdG9wQWxsUG9sbGluZygpO1xuICAgIHRoaXMucG9sbHMgPSBbXTtcbiAgICB0aGlzLnN0YXJ0QWxsUG9sbGluZygpO1xuICB9XG4gIGluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgIGxldCBjYWxsYmFjaztcbiAgICBpZiAoYWN0aW9uTmFtZSA9PT0gXCIkcmVuZGVyXCIpIHtcbiAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5hY3Rpb24oYWN0aW9uTmFtZSwge30sIDApO1xuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9LCBkdXJhdGlvbik7XG4gICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzLnB1c2godGltZXIpO1xuICB9XG59O1xuXG4vLyBzcmMvQ29tcG9uZW50L3BsdWdpbnMvUG9sbGluZ1BsdWdpbi50c1xudmFyIFBvbGxpbmdQbHVnaW5fZGVmYXVsdCA9IGNsYXNzIHtcbiAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gY29tcG9uZW50LmVsZW1lbnQ7XG4gICAgdGhpcy5wb2xsaW5nRGlyZWN0b3IgPSBuZXcgUG9sbGluZ0RpcmVjdG9yX2RlZmF1bHQoY29tcG9uZW50KTtcbiAgICB0aGlzLmluaXRpYWxpemVQb2xsaW5nKCk7XG4gICAgY29tcG9uZW50Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5zdGFydEFsbFBvbGxpbmcoKTtcbiAgICB9KTtcbiAgICBjb21wb25lbnQub24oXCJkaXNjb25uZWN0XCIsICgpID0+IHtcbiAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0b3BBbGxQb2xsaW5nKCk7XG4gICAgfSk7XG4gICAgY29tcG9uZW50Lm9uKFwicmVuZGVyOmZpbmlzaGVkXCIsICgpID0+IHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZVBvbGxpbmcoKTtcbiAgICB9KTtcbiAgfVxuICBhZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKSB7XG4gICAgdGhpcy5wb2xsaW5nRGlyZWN0b3IuYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gIH1cbiAgY2xlYXJQb2xsaW5nKCkge1xuICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLmNsZWFyUG9sbGluZygpO1xuICB9XG4gIGluaXRpYWxpemVQb2xsaW5nKCkge1xuICAgIHRoaXMuY2xlYXJQb2xsaW5nKCk7XG4gICAgaWYgKHRoaXMuZWxlbWVudC5kYXRhc2V0LnBvbGwgPT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXdQb2xsQ29uZmlnID0gdGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbDtcbiAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKHJhd1BvbGxDb25maWcgfHwgXCIkcmVuZGVyXCIpO1xuICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICBsZXQgZHVyYXRpb24gPSAyZTM7XG4gICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgIGNhc2UgXCJkZWxheVwiOlxuICAgICAgICAgICAgaWYgKG1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uID0gTnVtYmVyLnBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgaW4gZGF0YS1wb2xsIFwiJHtyYXdQb2xsQ29uZmlnfVwiLmApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYWRkUG9sbChkaXJlY3RpdmUuYWN0aW9uLCBkdXJhdGlvbik7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIHNyYy9Db21wb25lbnQvcGx1Z2lucy9TZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbi50c1xudmFyIFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luX2RlZmF1bHQgPSBjbGFzcyB7XG4gIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHRoaXMuc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KTtcbiAgICBjb21wb25lbnQub24oXCJyZW5kZXI6ZmluaXNoZWRcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBcInZhbHVlXCIgb2YgYWxsIG1vZGVsIGZpZWxkcyB0byB0aGUgY29tcG9uZW50IGRhdGEuXG4gICAqXG4gICAqIFRoaXMgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpbml0aWFsaXplcyBhbmQgYWZ0ZXIgcmUtcmVuZGVyLlxuICAgKiBUYWtlIHRoZSBmb2xsb3dpbmcgZWxlbWVudDpcbiAgICpcbiAgICogICAgICA8aW5wdXQgZGF0YS1tb2RlbD1cImZpcnN0TmFtZVwiPlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIHNldCB0aGUgXCJ2YWx1ZVwiIG9mIHRoYXQgZWxlbWVudCB0byB0aGUgdmFsdWUgb2ZcbiAgICogdGhlIFwiZmlyc3ROYW1lXCIgbW9kZWwuXG4gICAqL1xuICBzeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpIHtcbiAgICBjb21wb25lbnQuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbW9kZWxdXCIpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbGVtZW50IHVzaW5nIGRhdGEtbW9kZWwuXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGlmICghbW9kZWxEaXJlY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbW9kZWxOYW1lID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uO1xuICAgICAgaWYgKGNvbXBvbmVudC5nZXRVbnN5bmNlZE1vZGVscygpLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGNvbXBvbmVudC52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgIHNldFZhbHVlT25FbGVtZW50KGVsZW1lbnQsIGNvbXBvbmVudC52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQgJiYgIWVsZW1lbnQubXVsdGlwbGUpIHtcbiAgICAgICAgY29tcG9uZW50LnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCBjb21wb25lbnQudmFsdWVTdG9yZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vLyBzcmMvQ29tcG9uZW50L3BsdWdpbnMvVmFsaWRhdGVkRmllbGRzUGx1Z2luLnRzXG52YXIgVmFsaWRhdGVkRmllbGRzUGx1Z2luX2RlZmF1bHQgPSBjbGFzcyB7XG4gIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIGNvbXBvbmVudC5vbihcIm1vZGVsOnNldFwiLCAobW9kZWxOYW1lKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuICAgIH0pO1xuICB9XG4gIGhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgdmFsdWVTdG9yZSkge1xuICAgIGlmICh2YWx1ZVN0b3JlLmhhcyhcInZhbGlkYXRlZEZpZWxkc1wiKSkge1xuICAgICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gWy4uLnZhbHVlU3RvcmUuZ2V0KFwidmFsaWRhdGVkRmllbGRzXCIpXTtcbiAgICAgIGlmICghdmFsaWRhdGVkRmllbGRzLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgdmFsaWRhdGVkRmllbGRzLnB1c2gobW9kZWxOYW1lKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlU3RvcmUuc2V0KFwidmFsaWRhdGVkRmllbGRzXCIsIHZhbGlkYXRlZEZpZWxkcyk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBzcmMvbGl2ZV9jb250cm9sbGVyLnRzXG52YXIgX0xpdmVDb250cm9sbGVyRGVmYXVsdCA9IGNsYXNzIF9MaXZlQ29udHJvbGxlckRlZmF1bHQgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgIHsgZXZlbnQ6IFwiaW5wdXRcIiwgY2FsbGJhY2s6IChldmVudCkgPT4gdGhpcy5oYW5kbGVJbnB1dEV2ZW50KGV2ZW50KSB9LFxuICAgICAgeyBldmVudDogXCJjaGFuZ2VcIiwgY2FsbGJhY2s6IChldmVudCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VFdmVudChldmVudCkgfVxuICAgIF07XG4gICAgdGhpcy5wZW5kaW5nRmlsZXMgPSB7fTtcbiAgfVxuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMub25NdXRhdGlvbnMuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcbiAgfVxuICBjb25uZWN0KCkge1xuICAgIHRoaXMuY29ubmVjdENvbXBvbmVudCgpO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwge1xuICAgICAgYXR0cmlidXRlczogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGRpc2Nvbm5lY3QoKSB7XG4gICAgdGhpcy5kaXNjb25uZWN0Q29tcG9uZW50KCk7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgfVxuICAvKipcbiAgICogQ2FsbGVkIHRvIHVwZGF0ZSBvbmUgcGllY2Ugb2YgdGhlIG1vZGVsLlxuICAgKlxuICAgKiAgICAgIDxidXR0b24gZGF0YS1hY3Rpb249XCJsaXZlI3VwZGF0ZVwiIGRhdGEtbW9kZWw9XCJmb29cIiBkYXRhLXZhbHVlPVwiNVwiPlxuICAgKi9cbiAgdXBkYXRlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiaW5wdXRcIiB8fCBldmVudC50eXBlID09PSBcImNoYW5nZVwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBTaW5jZSBMaXZlQ29tcG9uZW50cyAyLjMsIHlvdSBubyBsb25nZXIgbmVlZCBkYXRhLWFjdGlvbj1cImxpdmUjdXBkYXRlXCIgb24gZm9ybSBlbGVtZW50cy4gRm91bmQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KFxuICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICAgICAgKX1gXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudChldmVudC5jdXJyZW50VGFyZ2V0LCBudWxsKTtcbiAgfVxuICBhY3Rpb24oZXZlbnQpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBldmVudC5wYXJhbXM7XG4gICAgaWYgKCFwYXJhbXMuYWN0aW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBObyBhY3Rpb24gbmFtZSBwcm92aWRlZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoXG4gICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldFxuICAgICAgICApfS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIHRoZSBcImRhdGEtbGl2ZS1hY3Rpb24tcGFyYW1cIiBhdHRyaWJ1dGU/YFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgcmF3QWN0aW9uID0gcGFyYW1zLmFjdGlvbjtcbiAgICBjb25zdCBhY3Rpb25BcmdzID0geyAuLi5wYXJhbXMgfTtcbiAgICBkZWxldGUgYWN0aW9uQXJncy5hY3Rpb247XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdBY3Rpb24pO1xuICAgIGxldCBkZWJvdW5jZSA9IGZhbHNlO1xuICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICBsZXQgcGVuZGluZ0ZpbGVzID0ge307XG4gICAgICBjb25zdCB2YWxpZE1vZGlmaWVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgICB2YWxpZE1vZGlmaWVycy5zZXQoXCJzdG9wXCIsICgpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9KTtcbiAgICAgIHZhbGlkTW9kaWZpZXJzLnNldChcInNlbGZcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZhbGlkTW9kaWZpZXJzLnNldChcImRlYm91bmNlXCIsIChtb2RpZmllcikgPT4ge1xuICAgICAgICBkZWJvdW5jZSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IHRydWU7XG4gICAgICB9KTtcbiAgICAgIHZhbGlkTW9kaWZpZXJzLnNldChcImZpbGVzXCIsIChtb2RpZmllcikgPT4ge1xuICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgcGVuZGluZ0ZpbGVzID0gdGhpcy5wZW5kaW5nRmlsZXM7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZW5kaW5nRmlsZXNbbW9kaWZpZXIudmFsdWVdKSB7XG4gICAgICAgICAgcGVuZGluZ0ZpbGVzW21vZGlmaWVyLnZhbHVlXSA9IHRoaXMucGVuZGluZ0ZpbGVzW21vZGlmaWVyLnZhbHVlXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgIGlmICh2YWxpZE1vZGlmaWVycy5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSA/PyAoKCkgPT4ge1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBVbmtub3duIG1vZGlmaWVyICR7bW9kaWZpZXIubmFtZX0gaW4gYWN0aW9uIFwiJHtyYXdBY3Rpb259XCIuIEF2YWlsYWJsZSBtb2RpZmllcnMgYXJlOiAke0FycmF5LmZyb20oXG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5rZXlzKClcbiAgICAgICAgICApLmpvaW4oXCIsIFwiKX0uYFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICBmb3IgKGNvbnN0IFtrZXksIGlucHV0XSBvZiBPYmplY3QuZW50cmllcyhwZW5kaW5nRmlsZXMpKSB7XG4gICAgICAgIGlmIChpbnB1dC5maWxlcykge1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50LmZpbGVzKGtleSwgaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdGaWxlc1trZXldO1xuICAgICAgfVxuICAgICAgdGhpcy5jb21wb25lbnQuYWN0aW9uKGRpcmVjdGl2ZS5hY3Rpb24sIGFjdGlvbkFyZ3MsIGRlYm91bmNlKTtcbiAgICAgIGlmIChnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsIGZhbHNlKSkge1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAkcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5yZW5kZXIoKTtcbiAgfVxuICBlbWl0KGV2ZW50KSB7XG4gICAgdGhpcy5nZXRFbWl0RGlyZWN0aXZlcyhldmVudCkuZm9yRWFjaCgoeyBuYW1lLCBkYXRhLCBuYW1lTWF0Y2ggfSkgPT4ge1xuICAgICAgdGhpcy5jb21wb25lbnQuZW1pdChuYW1lLCBkYXRhLCBuYW1lTWF0Y2gpO1xuICAgIH0pO1xuICB9XG4gIGVtaXRVcChldmVudCkge1xuICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSwgbmFtZU1hdGNoIH0pID0+IHtcbiAgICAgIHRoaXMuY29tcG9uZW50LmVtaXRVcChuYW1lLCBkYXRhLCBuYW1lTWF0Y2gpO1xuICAgIH0pO1xuICB9XG4gIGVtaXRTZWxmKGV2ZW50KSB7XG4gICAgdGhpcy5nZXRFbWl0RGlyZWN0aXZlcyhldmVudCkuZm9yRWFjaCgoeyBuYW1lLCBkYXRhIH0pID0+IHtcbiAgICAgIHRoaXMuY29tcG9uZW50LmVtaXRTZWxmKG5hbWUsIGRhdGEpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBVcGRhdGUgYSBtb2RlbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGVsIFRoZSBtb2RlbCB0byB1cGRhdGVcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlIFRoZSBuZXcgdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBzaG91bGRSZW5kZXIgV2hldGhlciBhIHJlLXJlbmRlciBzaG91bGQgYmUgdHJpZ2dlcmVkXG4gICAqIEBwYXJhbSB7bnVtYmVyfGJvb2xlYW59IGRlYm91bmNlXG4gICAqL1xuICAkdXBkYXRlTW9kZWwobW9kZWwsIHZhbHVlLCBzaG91bGRSZW5kZXIgPSB0cnVlLCBkZWJvdW5jZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuc2V0KG1vZGVsLCB2YWx1ZSwgc2hvdWxkUmVuZGVyLCBkZWJvdW5jZSk7XG4gIH1cbiAgcHJvcHNVcGRhdGVkRnJvbVBhcmVudFZhbHVlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudC5fdXBkYXRlRnJvbVBhcmVudFByb3BzKHRoaXMucHJvcHNVcGRhdGVkRnJvbVBhcmVudFZhbHVlKTtcbiAgfVxuICBmaW5nZXJwcmludFZhbHVlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudC5maW5nZXJwcmludCA9IHRoaXMuZmluZ2VycHJpbnRWYWx1ZTtcbiAgfVxuICBnZXRFbWl0RGlyZWN0aXZlcyhldmVudCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IGV2ZW50LnBhcmFtcztcbiAgICBpZiAoIXBhcmFtcy5ldmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTm8gZXZlbnQgbmFtZSBwcm92aWRlZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoXG4gICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldFxuICAgICAgICApfS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIHRoZSBcImRhdGEtbGl2ZS1ldmVudC1wYXJhbVwiIGF0dHJpYnV0ZT9gXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBldmVudEluZm8gPSBwYXJhbXMuZXZlbnQ7XG4gICAgY29uc3QgZXZlbnRBcmdzID0geyAuLi5wYXJhbXMgfTtcbiAgICBkZWxldGUgZXZlbnRBcmdzLmV2ZW50O1xuICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZXZlbnRJbmZvKTtcbiAgICBjb25zdCBlbWl0cyA9IFtdO1xuICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICBsZXQgbmFtZU1hdGNoID0gbnVsbDtcbiAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgc3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG4gICAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgIG5hbWVNYXRjaCA9IG1vZGlmaWVyLnZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciAke21vZGlmaWVyLm5hbWV9IGluIGV2ZW50IFwiJHtldmVudEluZm99XCIuYCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZW1pdHMucHVzaCh7XG4gICAgICAgIG5hbWU6IGRpcmVjdGl2ZS5hY3Rpb24sXG4gICAgICAgIGRhdGE6IGV2ZW50QXJncyxcbiAgICAgICAgbmFtZU1hdGNoXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZW1pdHM7XG4gIH1cbiAgY3JlYXRlQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5lbGVtZW50LmlkIHx8IG51bGw7XG4gICAgdGhpcy5jb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KFxuICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgdGhpcy5uYW1lVmFsdWUsXG4gICAgICB0aGlzLnByb3BzVmFsdWUsXG4gICAgICB0aGlzLmxpc3RlbmVyc1ZhbHVlLFxuICAgICAgaWQsXG4gICAgICBfTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmJhY2tlbmRGYWN0b3J5KHRoaXMpLFxuICAgICAgbmV3IFN0aW11bHVzRWxlbWVudERyaXZlcih0aGlzKVxuICAgICk7XG4gICAgdGhpcy5wcm94aWVkQ29tcG9uZW50ID0gcHJveGlmeUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuZWxlbWVudCwgXCJfX2NvbXBvbmVudFwiLCB7XG4gICAgICB2YWx1ZTogdGhpcy5wcm94aWVkQ29tcG9uZW50LFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICBpZiAodGhpcy5oYXNEZWJvdW5jZVZhbHVlKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudC5kZWZhdWx0RGVib3VuY2UgPSB0aGlzLmRlYm91bmNlVmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IHBsdWdpbnMgPSBbXG4gICAgICBuZXcgTG9hZGluZ1BsdWdpbl9kZWZhdWx0KCksXG4gICAgICBuZXcgTGF6eVBsdWdpbl9kZWZhdWx0KCksXG4gICAgICBuZXcgVmFsaWRhdGVkRmllbGRzUGx1Z2luX2RlZmF1bHQoKSxcbiAgICAgIG5ldyBQYWdlVW5sb2FkaW5nUGx1Z2luX2RlZmF1bHQoKSxcbiAgICAgIG5ldyBQb2xsaW5nUGx1Z2luX2RlZmF1bHQoKSxcbiAgICAgIG5ldyBTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbl9kZWZhdWx0KCksXG4gICAgICBuZXcgQ2hpbGRDb21wb25lbnRQbHVnaW5fZGVmYXVsdCh0aGlzLmNvbXBvbmVudClcbiAgICBdO1xuICAgIHBsdWdpbnMuZm9yRWFjaCgocGx1Z2luKSA9PiB7XG4gICAgICB0aGlzLmNvbXBvbmVudC5hZGRQbHVnaW4ocGx1Z2luKTtcbiAgICB9KTtcbiAgfVxuICBjb25uZWN0Q29tcG9uZW50KCkge1xuICAgIHRoaXMuY29tcG9uZW50LmNvbm5lY3QoKTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICB9KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXCJjb25uZWN0XCIpO1xuICB9XG4gIGRpc2Nvbm5lY3RDb21wb25lbnQoKSB7XG4gICAgdGhpcy5jb21wb25lbnQuZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChcImRpc2Nvbm5lY3RcIik7XG4gIH1cbiAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCh0YXJnZXQsIFwiaW5wdXRcIik7XG4gIH1cbiAgaGFuZGxlQ2hhbmdlRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQodGFyZ2V0LCBcImNoYW5nZVwiKTtcbiAgfVxuICAvKipcbiAgICogU2V0cyBhIG1vZGVsIGdpdmVuIGFuIGVsZW1lbnQgYW5kIHNvbWUgZXZlbnQuXG4gICAqXG4gICAqIFRoaXMgcGFyc2VzIHRoZSBcImRhdGEtbW9kZWxcIiBmcm9tIHRoZSBlbGVtZW50IGFuZCB0YWtlc1xuICAgKiBpbnRvIGFjY291bnQgbW9kaWZpZXJzIGxpa2UgXCJkZWJvdW5jZVwiLCBcIm5vcmVuZGVyXCIgYW5kIFwib24oKVwiLlxuICAgKlxuICAgKiBUaGlzIGlzIHVzZWQsIGZvciBleGFtcGxlLCB0aGUgZ3JhYiB0aGUgbmV3IHZhbHVlIGZyb20gYW4gaW5wdXRcbiAgICogb24gXCJjaGFuZ2VcIiBhbmQgc2V0IHRoYXQgbmV3IHZhbHVlIG9udG8gdGhlIG1vZGVsLlxuICAgKlxuICAgKiBJdCdzIGFsc28gdXNlZCB0bywgb24gY2xpY2ssIHNldCB0aGUgdmFsdWUgZnJvbSBhIGJ1dHRvblxuICAgKiB3aXRoIGRhdGEtbW9kZWw9XCJcIiBhbmQgZGF0YS12YWx1ZVwiXCIuXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50XG4gICAqIEBwYXJhbSBldmVudE5hbWUgSWYgc3BlY2lmaWVkIChlLmcuIFwiaW5wdXRcIiBvciBcImNoYW5nZVwiKSwgdGhlIG1vZGVsIG1heVxuICAgKiAgICAgICAgICAgICAgICAgIHNraXAgdXBkYXRpbmcgaWYgdGhlIG9uKCkgbW9kaWZpZXIgaXMgcGFzc2VkIChlLmcuIG9uKGNoYW5nZSkpLlxuICAgKiAgICAgICAgICAgICAgICAgIElmIG5vdCBwYXNzZWQsIHRoZSBtb2RlbCB3aWxsIGFsd2F5cyBiZSB1cGRhdGVkLlxuICAgKi9cbiAgdXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSkge1xuICAgIGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCB1cGRhdGUgbW9kZWwgZm9yIG5vbiBIVE1MRWxlbWVudFwiKTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gXCJmaWxlXCIpIHtcbiAgICAgIGNvbnN0IGtleSA9IGVsZW1lbnQubmFtZTtcbiAgICAgIGlmIChlbGVtZW50LmZpbGVzPy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nRmlsZXNba2V5XSA9IGVsZW1lbnQ7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGVuZGluZ0ZpbGVzW2tleV0pIHtcbiAgICAgICAgZGVsZXRlIHRoaXMucGVuZGluZ0ZpbGVzW2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCBmYWxzZSk7XG4gICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtb2RlbEJpbmRpbmcgPSBnZXRfbW9kZWxfYmluZGluZ19kZWZhdWx0KG1vZGVsRGlyZWN0aXZlKTtcbiAgICBpZiAoIW1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUpIHtcbiAgICAgIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPSBcImlucHV0XCI7XG4gICAgfVxuICAgIGlmICh0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChldmVudE5hbWUgPT09IFwiY2hhbmdlXCIgJiYgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9PT0gXCJpbnB1dFwiKSB7XG4gICAgICBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gXCJjaGFuZ2VcIjtcbiAgICB9XG4gICAgaWYgKGV2ZW50TmFtZSAmJiBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lICE9PSBldmVudE5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGZhbHNlID09PSBtb2RlbEJpbmRpbmcuZGVib3VuY2UpIHtcbiAgICAgIGlmIChtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID09PSBcImlucHV0XCIpIHtcbiAgICAgICAgbW9kZWxCaW5kaW5nLmRlYm91bmNlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZGVsQmluZGluZy5kZWJvdW5jZSA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGZpbmFsVmFsdWUgPSBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuICAgIGlmIChpc1RleHR1YWxJbnB1dEVsZW1lbnQoZWxlbWVudCkgfHwgaXNUZXh0YXJlYUVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgIGlmIChtb2RlbEJpbmRpbmcubWluTGVuZ3RoICE9PSBudWxsICYmIHR5cGVvZiBmaW5hbFZhbHVlID09PSBcInN0cmluZ1wiICYmIGZpbmFsVmFsdWUubGVuZ3RoIDwgbW9kZWxCaW5kaW5nLm1pbkxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kZWxCaW5kaW5nLm1heExlbmd0aCAhPT0gbnVsbCAmJiB0eXBlb2YgZmluYWxWYWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiBmaW5hbFZhbHVlLmxlbmd0aCA+IG1vZGVsQmluZGluZy5tYXhMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNOdW1lcmljYWxJbnB1dEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IG51bWVyaWNWYWx1ZSA9IE51bWJlcihmaW5hbFZhbHVlKTtcbiAgICAgIGlmIChtb2RlbEJpbmRpbmcubWluVmFsdWUgIT09IG51bGwgJiYgbnVtZXJpY1ZhbHVlIDwgbW9kZWxCaW5kaW5nLm1pblZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2RlbEJpbmRpbmcubWF4VmFsdWUgIT09IG51bGwgJiYgbnVtZXJpY1ZhbHVlID4gbW9kZWxCaW5kaW5nLm1heFZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jb21wb25lbnQuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIGZpbmFsVmFsdWUsIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIsIG1vZGVsQmluZGluZy5kZWJvdW5jZSk7XG4gIH1cbiAgZGlzcGF0Y2hFdmVudChuYW1lLCBkZXRhaWwgPSB7fSwgY2FuQnViYmxlID0gdHJ1ZSwgY2FuY2VsYWJsZSA9IGZhbHNlKSB7XG4gICAgZGV0YWlsLmNvbnRyb2xsZXIgPSB0aGlzO1xuICAgIGRldGFpbC5jb21wb25lbnQgPSB0aGlzLnByb3hpZWRDb21wb25lbnQ7XG4gICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbCwgcHJlZml4OiBcImxpdmVcIiwgY2FuY2VsYWJsZSwgYnViYmxlczogY2FuQnViYmxlIH0pO1xuICB9XG4gIG9uTXV0YXRpb25zKG11dGF0aW9ucykge1xuICAgIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09IFwiYXR0cmlidXRlc1wiICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09IFwiaWRcIiAmJiB0aGlzLmVsZW1lbnQuaWQgIT09IHRoaXMuY29tcG9uZW50LmlkKSB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdENvbXBvbmVudCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xuICAgICAgICB0aGlzLmNvbm5lY3RDb21wb25lbnQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcbl9MaXZlQ29udHJvbGxlckRlZmF1bHQudmFsdWVzID0ge1xuICBuYW1lOiBTdHJpbmcsXG4gIHVybDogU3RyaW5nLFxuICBwcm9wczogeyB0eXBlOiBPYmplY3QsIGRlZmF1bHQ6IHt9IH0sXG4gIHByb3BzVXBkYXRlZEZyb21QYXJlbnQ6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiB7fSB9LFxuICBsaXN0ZW5lcnM6IHsgdHlwZTogQXJyYXksIGRlZmF1bHQ6IFtdIH0sXG4gIGV2ZW50c1RvRW1pdDogeyB0eXBlOiBBcnJheSwgZGVmYXVsdDogW10gfSxcbiAgZXZlbnRzVG9EaXNwYXRjaDogeyB0eXBlOiBBcnJheSwgZGVmYXVsdDogW10gfSxcbiAgZGVib3VuY2U6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAxNTAgfSxcbiAgZmluZ2VycHJpbnQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH0sXG4gIHJlcXVlc3RNZXRob2Q6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcInBvc3RcIiB9XG59O1xuX0xpdmVDb250cm9sbGVyRGVmYXVsdC5iYWNrZW5kRmFjdG9yeSA9IChjb250cm9sbGVyKSA9PiBuZXcgQmFja2VuZF9kZWZhdWx0KGNvbnRyb2xsZXIudXJsVmFsdWUsIGNvbnRyb2xsZXIucmVxdWVzdE1ldGhvZFZhbHVlKTtcbnZhciBMaXZlQ29udHJvbGxlckRlZmF1bHQgPSBfTGl2ZUNvbnRyb2xsZXJEZWZhdWx0O1xuZXhwb3J0IHtcbiAgQ29tcG9uZW50LFxuICBMaXZlQ29udHJvbGxlckRlZmF1bHQgYXMgZGVmYXVsdCxcbiAgZ2V0Q29tcG9uZW50XG59O1xuIiwiLy8gc3JjL3R1cmJvX2NvbnRyb2xsZXIudHNcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XG5pbXBvcnQgXCJAaG90d2lyZWQvdHVyYm9cIjtcbnZhciB0dXJib19jb250cm9sbGVyX2RlZmF1bHQgPSBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xufTtcbmV4cG9ydCB7XG4gIHR1cmJvX2NvbnRyb2xsZXJfZGVmYXVsdCBhcyBkZWZhdWx0XG59O1xuIl0sIm5hbWVzIjpbImhlYWRlckNhcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2luZG93Iiwib25jbGljayIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9tb0NoZWNrYm94IiwicHJvbW9QcmljZUZpZWxkIiwicHJvbW9QcmljZUZpZWxkQ29udGFpbmVyIiwiY2xvc2VzdCIsInRvZ2dsZVByb21vRmllbGQiLCJjaGVja2VkIiwic3R5bGUiLCJkaXNwbGF5Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJuZXh0IiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInRvZ2dsZVN0YXRlIiwiZGVmYXVsdCIsIl90aGlzIiwiX2xlbiIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjb25jYXQiLCJfZGVmaW5lUHJvcGVydHkiLCJpbml0aWFsaXplIiwiX3RoaXMyIiwiaW5uZXJXaWR0aCIsImFsZXJ0Qm94IiwiYWRkIiwic2V0VGltZW91dCIsImNvbXBvbmVudCIsIm9wZW5Nb2RhbCIsInZpc2liaWxpdHkiLCJjbG9zZU1vZGFsIiwibW9kYWwiLCJoaWRlIiwiQ2hhcnQiLCJyZWdpc3RlcmFibGVzIiwicmVnaXN0ZXIiLCJhcHBseSIsIl90b0NvbnN1bWFibGVBcnJheSIsImlzQ2hhcnRJbml0aWFsaXplZCIsImNvbnRyb2xsZXJfZGVmYXVsdCIsImNoYXJ0IiwiZGlzcGF0Y2hFdmVudCIsIkhUTUxDYW52YXNFbGVtZW50IiwiRXJyb3IiLCJwYXlsb2FkIiwidmlld1ZhbHVlIiwiaXNBcnJheSIsIm9wdGlvbnMiLCJjb25maWciLCJjYW52YXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImRpc2Nvbm5lY3QiLCJkZXN0cm95Iiwidmlld1ZhbHVlQ2hhbmdlZCIsImRhdGEiLCJ1cGRhdGUiLCJwYXJlbnRFbGVtZW50IiwicmVzcG9uc2l2ZSIsIm9yaWdpbmFsV2lkdGgiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwibmFtZSIsImRpc3BhdGNoIiwiZGV0YWlsIiwicHJlZml4IiwidmFsdWVzIiwidmlldyIsIk9iamVjdCIsImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX25leHQiLCJfdGhyb3ciLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsImZyb20iLCJ0ZXN0IiwicHVzaCIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJCYWNrZW5kUmVxdWVzdF9kZWZhdWx0IiwicHJvbWlzZSIsImFjdGlvbnMiLCJ1cGRhdGVNb2RlbHMiLCJpc1Jlc29sdmVkIiwicmVzcG9uc2UiLCJ1cGRhdGVkTW9kZWxzIiwiY29udGFpbnNPbmVPZkFjdGlvbnMiLCJ0YXJnZXRlZEFjdGlvbnMiLCJmaWx0ZXIiLCJhY3Rpb24iLCJpbmNsdWRlcyIsImFyZUFueU1vZGVsc1VwZGF0ZWQiLCJ0YXJnZXRlZE1vZGVscyIsIm1vZGVsIiwiUmVxdWVzdEJ1aWxkZXJfZGVmYXVsdCIsInVybCIsIm1ldGhvZCIsInVuZGVmaW5lZCIsImJ1aWxkUmVxdWVzdCIsInByb3BzIiwidXBkYXRlZCIsImNoaWxkcmVuIiwidXBkYXRlZFByb3BzRnJvbVBhcmVudCIsImZpbGVzIiwic3BsaXRVcmwiLCJzcGxpdCIsIl9zcGxpdFVybCIsIl9zcGxpdFVybDIiLCJxdWVyeVN0cmluZyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImZldGNoT3B0aW9ucyIsImhlYWRlcnMiLCJBY2NlcHQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VhcmNoIiwidG90YWxGaWxlcyIsImVudHJpZXMiLCJyZWR1Y2UiLCJ0b3RhbCIsImN1cnJlbnQiLCJoYXNGaW5nZXJwcmludHMiLCJrZXlzIiwid2lsbERhdGFGaXRJblVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXQiLCJyZXF1ZXN0RGF0YSIsInByb3BzRnJvbVBhcmVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsImJvZHkiLCJwYXJhbXNTdHJpbmciLCJwcm9wc0pzb24iLCJ1cGRhdGVkSnNvbiIsImNoaWxkcmVuSnNvbiIsInByb3BzRnJvbVBhcmVudEpzb24iLCJ1cmxFbmNvZGVkSnNvbkRhdGEiLCJCYWNrZW5kX2RlZmF1bHQiLCJyZXF1ZXN0QnVpbGRlciIsIm1ha2VSZXF1ZXN0IiwiX3RoaXMkcmVxdWVzdEJ1aWxkZXIkIiwiZmV0Y2giLCJtYXAiLCJiYWNrZW5kQWN0aW9uIiwiQmFja2VuZFJlc3BvbnNlX2RlZmF1bHQiLCJfZ2V0Qm9keSIsIl9jYWxsZWUiLCJfY29udGV4dCIsInRleHQiLCJnZXRCb2R5IiwiZ2V0TGl2ZVVybCIsImxpdmVVcmwiLCJnZXQiLCJnZXRFbGVtZW50QXNUYWdUZXh0IiwiaW5uZXJIVE1MIiwib3V0ZXJIVE1MIiwiaW5kZXhPZiIsImNvbXBvbmVudE1hcEJ5RWxlbWVudCIsIldlYWtNYXAiLCJjb21wb25lbnRNYXBCeUNvbXBvbmVudCIsIk1hcCIsInJlZ2lzdGVyQ29tcG9uZW50IiwidW5yZWdpc3RlckNvbXBvbmVudCIsImdldENvbXBvbmVudCIsInJlamVjdCIsImNvdW50IiwibWF4Q291bnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImZpbmRDb21wb25lbnRzIiwiY3VycmVudENvbXBvbmVudCIsIm9ubHlQYXJlbnRzIiwib25seU1hdGNoTmFtZSIsImNvbXBvbmVudHMiLCJmb3JFYWNoIiwiY29tcG9uZW50TmFtZSIsImNvbnRhaW5zIiwiZmluZENoaWxkcmVuIiwiZm91bmRDaGlsZENvbXBvbmVudCIsImNoaWxkQ29tcG9uZW50TmFtZSIsImNoaWxkQ29tcG9uZW50IiwiZmluZFBhcmVudCIsInBhcnNlRGlyZWN0aXZlcyIsImNvbnRlbnQiLCJkaXJlY3RpdmVzIiwiY3VycmVudEFjdGlvbk5hbWUiLCJjdXJyZW50QXJndW1lbnRWYWx1ZSIsImN1cnJlbnRBcmd1bWVudHMiLCJjdXJyZW50TW9kaWZpZXJzIiwic3RhdGUiLCJnZXRMYXN0QWN0aW9uTmFtZSIsInB1c2hJbnN0cnVjdGlvbiIsIm1vZGlmaWVycyIsImdldFN0cmluZyIsInB1c2hBcmd1bWVudCIsInRyaW0iLCJwdXNoTW9kaWZpZXIiLCJjaGFyIiwiY29tYmluZVNwYWNlZEFycmF5IiwicGFydHMiLCJmaW5hbFBhcnRzIiwicGFydCIsInRyaW1BbGwiLCJzdHIiLCJyZXBsYWNlIiwibm9ybWFsaXplTW9kZWxOYW1lIiwicyIsImpvaW4iLCJnZXRWYWx1ZUZyb21FbGVtZW50IiwidmFsdWVTdG9yZSIsIkhUTUxJbnB1dEVsZW1lbnQiLCJ0eXBlIiwibW9kZWxOYW1lRGF0YSIsImdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQiLCJtb2RlbFZhbHVlIiwiZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiaW5wdXRWYWx1ZSIsIkhUTUxTZWxlY3RFbGVtZW50IiwibXVsdGlwbGUiLCJzZWxlY3RlZE9wdGlvbnMiLCJlbCIsImRhdGFzZXQiLCJzZXRWYWx1ZU9uRWxlbWVudCIsInNvbWUiLCJ2YWwiLCJhcnJheVdyYXBwZWRWYWx1ZSIsInZhbHVlMiIsIm9wdGlvbiIsInNlbGVjdGVkIiwiZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMiLCJkaXJlY3RpdmUiLCJ0aHJvd09uTWlzc2luZyIsImRhdGFNb2RlbERpcmVjdGl2ZXMiLCJmb3JtRWxlbWVudCIsImVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50IiwiY2xvc2VzdExpdmVDb21wb25lbnQiLCJjbG9uZUhUTUxFbGVtZW50IiwibmV3RWxlbWVudCIsImNsb25lTm9kZSIsIkhUTUxFbGVtZW50IiwiaHRtbFRvRWxlbWVudCIsImh0bWwiLCJ0ZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjdXJyZW50VmFsdWVzIiwiZmluYWxWYWx1ZXMiLCJpbmRleCIsInNwbGljZSIsImlzVGV4dHVhbElucHV0RWxlbWVudCIsImlzVGV4dGFyZWFFbGVtZW50IiwiSFRNTFRleHRBcmVhRWxlbWVudCIsImlzTnVtZXJpY2FsSW5wdXRFbGVtZW50IiwiSG9va01hbmFnZXJfZGVmYXVsdCIsImhvb2tzIiwiaG9va05hbWUiLCJjYWxsYmFjayIsInVucmVnaXN0ZXIiLCJ0cmlnZ2VySG9vayIsIklkaW9tb3JwaCIsIkVNUFRZX1NFVCIsIlNldCIsImRlZmF1bHRzIiwibW9ycGhTdHlsZSIsImNhbGxiYWNrcyIsImJlZm9yZU5vZGVBZGRlZCIsIm5vT3AiLCJhZnRlck5vZGVBZGRlZCIsImJlZm9yZU5vZGVNb3JwaGVkIiwiYWZ0ZXJOb2RlTW9ycGhlZCIsImJlZm9yZU5vZGVSZW1vdmVkIiwiYWZ0ZXJOb2RlUmVtb3ZlZCIsImJlZm9yZUF0dHJpYnV0ZVVwZGF0ZWQiLCJoZWFkIiwic2hvdWxkUHJlc2VydmUiLCJlbHQiLCJzaG91bGRSZUFwcGVuZCIsInNob3VsZFJlbW92ZSIsImFmdGVySGVhZE1vcnBoZWQiLCJtb3JwaCIsIm9sZE5vZGUiLCJuZXdDb250ZW50IiwiRG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJwYXJzZUNvbnRlbnQiLCJub3JtYWxpemVkQ29udGVudCIsIm5vcm1hbGl6ZUNvbnRlbnQiLCJjdHgiLCJjcmVhdGVNb3JwaENvbnRleHQiLCJtb3JwaE5vcm1hbGl6ZWRDb250ZW50Iiwibm9ybWFsaXplZE5ld0NvbnRlbnQiLCJibG9jayIsIm9sZEhlYWQiLCJxdWVyeVNlbGVjdG9yIiwibmV3SGVhZCIsInByb21pc2VzIiwiaGFuZGxlSGVhZEVsZW1lbnQiLCJhbGwiLCJhc3NpZ24iLCJpZ25vcmUiLCJtb3JwaENoaWxkcmVuIiwiYmVzdE1hdGNoIiwiZmluZEJlc3ROb2RlTWF0Y2giLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZyIsIm1vcnBoZWROb2RlIiwibW9ycGhPbGROb2RlVG8iLCJpbnNlcnRTaWJsaW5ncyIsImlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50IiwicG9zc2libGVBY3RpdmVFbGVtZW50IiwiaWdub3JlQWN0aXZlVmFsdWUiLCJhY3RpdmVFbGVtZW50IiwiaWdub3JlQWN0aXZlIiwiaXNTb2Z0TWF0Y2giLCJyZXBsYWNlQ2hpbGQiLCJIVE1MSGVhZEVsZW1lbnQiLCJzeW5jTm9kZUZyb20iLCJuZXdQYXJlbnQiLCJvbGRQYXJlbnQiLCJuZXh0TmV3Q2hpbGQiLCJmaXJzdENoaWxkIiwiaW5zZXJ0aW9uUG9pbnQiLCJuZXdDaGlsZCIsImFwcGVuZENoaWxkIiwicmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24iLCJpc0lkU2V0TWF0Y2giLCJpZFNldE1hdGNoIiwiZmluZElkU2V0TWF0Y2giLCJyZW1vdmVOb2Rlc0JldHdlZW4iLCJzb2Z0TWF0Y2giLCJmaW5kU29mdE1hdGNoIiwiaW5zZXJ0QmVmb3JlIiwidGVtcE5vZGUiLCJyZW1vdmVOb2RlIiwiaWdub3JlQXR0cmlidXRlIiwiYXR0ciIsInRvIiwidXBkYXRlVHlwZSIsIm5vZGVUeXBlIiwiZnJvbUF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwidG9BdHRyaWJ1dGVzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsImZyb21BdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJlcnIiLCJ0b0F0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm5vZGVWYWx1ZSIsInN5bmNJbnB1dFZhbHVlIiwic3luY0Jvb2xlYW5BdHRyaWJ1dGUiLCJhdHRyaWJ1dGVOYW1lIiwiaWdub3JlVXBkYXRlIiwiZnJvbVZhbHVlIiwidG9WYWx1ZSIsIkhUTUxPcHRpb25FbGVtZW50IiwibmV3SGVhZFRhZyIsImN1cnJlbnRIZWFkIiwiYWRkZWQiLCJyZW1vdmVkIiwicHJlc2VydmVkIiwibm9kZXNUb0FwcGVuZCIsImhlYWRNZXJnZVN0eWxlIiwic3JjVG9OZXdIZWFkTm9kZXMiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwibmV3SGVhZENoaWxkIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsImN1cnJlbnRIZWFkRWx0IiwiaW5OZXdDb250ZW50IiwiaGFzIiwiaXNSZUFwcGVuZGVkIiwiaXNQcmVzZXJ2ZWQiLCJfbG9vcCIsIm5ld05vZGUiLCJfbm9kZXNUb0FwcGVuZCIsIl9pMiIsIm5ld0VsdCIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiaHJlZiIsInNyYyIsIl9yZXNvbHZlIiwiX2kzIiwiX3JlbW92ZWQiLCJyZW1vdmVkRWxlbWVudCIsInJlbW92ZUNoaWxkIiwia2VwdCIsIm1lcmdlRGVmYXVsdHMiLCJmaW5hbENvbmZpZyIsImlkTWFwIiwiY3JlYXRlSWRNYXAiLCJkZWFkSWRzIiwibm9kZTEiLCJub2RlMiIsInRhZ05hbWUiLCJpZCIsImdldElkSW50ZXJzZWN0aW9uQ291bnQiLCJzdGFydEluY2x1c2l2ZSIsImVuZEV4Y2x1c2l2ZSIsIm5ld0NoaWxkUG90ZW50aWFsSWRDb3VudCIsInBvdGVudGlhbE1hdGNoIiwicG90ZW50aWFsTWF0Y2gyIiwib3RoZXJNYXRjaENvdW50IiwicG90ZW50aWFsU29mdE1hdGNoIiwic2libGluZ1NvZnRNYXRjaENvdW50IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiY29udGVudFdpdGhTdmdzUmVtb3ZlZCIsIm1hdGNoIiwicGFyc2VGcm9tU3RyaW5nIiwiZ2VuZXJhdGVkQnlJZGlvbW9ycGgiLCJodG1sRWxlbWVudCIsInJlc3BvbnNlRG9jIiwiZHVtbXlQYXJlbnQiLCJOb2RlIiwiX2k0IiwiX2FyciIsInN0YWNrIiwibm9kZSIsInBvcCIsImN1cnJlbnRFbGVtZW50IiwiYmVzdEVsZW1lbnQiLCJzY29yZSIsIm5ld1Njb3JlIiwic2NvcmVFbGVtZW50IiwiaXNJZEluQ29uc2lkZXJhdGlvbiIsImlkSXNXaXRoaW5Ob2RlIiwidGFyZ2V0Tm9kZSIsImlkU2V0IiwiX2l0ZXJhdG9yNCIsIl9zdGVwNCIsInNvdXJjZVNldCIsIm1hdGNoQ291bnQiLCJfaXRlcmF0b3I1IiwiX3N0ZXA1IiwicG9wdWxhdGVJZE1hcEZvck5vZGUiLCJub2RlUGFyZW50IiwiaWRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfaXRlcmF0b3I2IiwiX3N0ZXA2Iiwib2xkQ29udGVudCIsIm5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uIiwiaXNGaWxlSW5wdXQiLCJzeW5jQXR0cmlidXRlcyIsImZyb21FbCIsInRvRWwiLCJleGVjdXRlTW9ycGhkb20iLCJyb290RnJvbUVsZW1lbnQiLCJyb290VG9FbGVtZW50IiwibW9kaWZpZWRGaWVsZEVsZW1lbnRzIiwiZ2V0RWxlbWVudFZhbHVlIiwiZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIiLCJvcmlnaW5hbEVsZW1lbnRJZHNUb1N3YXBBZnRlciIsIm9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlIiwibWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwIiwicmVwbGFjZVdpdGhDbG9uZSIsIm9sZEVsZW1lbnQiLCJjbG9uZWRPbGRFbGVtZW50IiwicmVwbGFjZVdpdGgiLCJfZnJvbUVsJHBhcmVudEVsZW1lbnQiLCJFbGVtZW50IiwiY2xvbmVkRnJvbUVsIiwiX194IiwiQWxwaW5lIiwid2FzRWxlbWVudEFkZGVkIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiZWxlbWVudENoYW5nZXMiLCJnZXRDaGFuZ2VkRWxlbWVudCIsImFwcGx5VG9FbGVtZW50Iiwibm9kZU5hbWUiLCJ0b1VwcGVyQ2FzZSIsImlzRXF1YWxOb2RlIiwibm9ybWFsaXplZEZyb21FbCIsIm5vcm1hbGl6ZWRUb0VsIiwib3JpZ2luYWxFbGVtZW50IiwiQ2hhbmdpbmdJdGVtc1RyYWNrZXJfZGVmYXVsdCIsImNoYW5nZWRJdGVtcyIsInJlbW92ZWRJdGVtcyIsInNldEl0ZW0iLCJpdGVtTmFtZSIsIm5ld1ZhbHVlIiwicHJldmlvdXNWYWx1ZSIsInJlbW92ZWRSZWNvcmQiLCJvcmlnaW5hbCIsIm9yaWdpbmFsUmVjb3JkIiwicmVtb3ZlSXRlbSIsImN1cnJlbnRWYWx1ZSIsInRydWVPcmlnaW5hbFZhbHVlIiwiZ2V0Q2hhbmdlZEl0ZW1zIiwiX3JlZiIsIl9yZWYyIiwiZ2V0UmVtb3ZlZEl0ZW1zIiwiaXNFbXB0eSIsInNpemUiLCJFbGVtZW50Q2hhbmdlcyIsImFkZGVkQ2xhc3NlcyIsInJlbW92ZWRDbGFzc2VzIiwic3R5bGVDaGFuZ2VzIiwiYXR0cmlidXRlQ2hhbmdlcyIsImFkZENsYXNzIiwiY2xhc3NOYW1lIiwicmVtb3ZlQ2xhc3MiLCJhZGRTdHlsZSIsInN0eWxlTmFtZSIsIm9yaWdpbmFsVmFsdWUiLCJyZW1vdmVTdHlsZSIsImFkZEF0dHJpYnV0ZSIsImdldEFkZGVkQ2xhc3NlcyIsImdldFJlbW92ZWRDbGFzc2VzIiwiZ2V0Q2hhbmdlZFN0eWxlcyIsImdldFJlbW92ZWRTdHlsZXMiLCJnZXRDaGFuZ2VkQXR0cmlidXRlcyIsImdldFJlbW92ZWRBdHRyaWJ1dGVzIiwiX2VsZW1lbnQkY2xhc3NMaXN0IiwiX2VsZW1lbnQkY2xhc3NMaXN0MiIsImNoYW5nZSIsInNldFByb3BlcnR5IiwicmVtb3ZlUHJvcGVydHkiLCJFeHRlcm5hbE11dGF0aW9uVHJhY2tlcl9kZWZhdWx0Iiwic2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjayIsImNoYW5nZWRFbGVtZW50cyIsImNoYW5nZWRFbGVtZW50c0NvdW50IiwiYWRkZWRFbGVtZW50cyIsInJlbW92ZWRFbGVtZW50cyIsImlzU3RhcnRlZCIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwib25NdXRhdGlvbnMiLCJzdGFydCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJzdG9wIiwiZ2V0QWRkZWRFbGVtZW50cyIsImhhbmRsZVBlbmRpbmdDaGFuZ2VzIiwidGFrZVJlY29yZHMiLCJtdXRhdGlvbnMiLCJoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zIiwiX2l0ZXJhdG9yNyIsIl9zdGVwNyIsIm11dGF0aW9uIiwiaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uIiwiaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCIsIl9pdGVyYXRvcjgiLCJfc3RlcDgiLCJhZGRlZEVsZW1lbnQiLCJoYW5kbGVDaGlsZExpc3RNdXRhdGlvbiIsImhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uIiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImNoYW5nZWRFbGVtZW50IiwiaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbiIsImhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24iLCJoYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24iLCJvbGRWYWx1ZSIsInByZXZpb3VzVmFsdWVzIiwibmV3VmFsdWVzIiwiYWRkZWRWYWx1ZXMiLCJyZW1vdmVkVmFsdWVzIiwicHJldmlvdXNTdHlsZXMiLCJleHRyYWN0U3R5bGVzIiwibmV3U3R5bGVzIiwiYWRkZWRPckNoYW5nZWRTdHlsZXMiLCJyZW1vdmVkU3R5bGVzIiwic3R5bGVzIiwic3R5bGVPYmplY3QiLCJwcm9wZXJ0eSIsIlVuc3luY2VkSW5wdXRzVHJhY2tlcl9kZWZhdWx0IiwibW9kZWxFbGVtZW50UmVzb2x2ZXIiLCJfdGhpczMiLCJlbGVtZW50RXZlbnRMaXN0ZW5lcnMiLCJoYW5kbGVJbnB1dEV2ZW50IiwidW5zeW5jZWRJbnB1dHMiLCJVbnN5bmNlZElucHV0Q29udGFpbmVyIiwiYWN0aXZhdGUiLCJfdGhpczQiLCJfcmVmMyIsImRlYWN0aXZhdGUiLCJfdGhpczUiLCJfcmVmNCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXJrTW9kZWxBc1N5bmNlZCIsIm1vZGVsTmFtZSIsInVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQiLCJnZXRNb2RlbE5hbWUiLCJnZXRVbnN5bmNlZElucHV0cyIsImFsbFVuc3luY2VkSW5wdXRzIiwiZ2V0VW5zeW5jZWRNb2RlbHMiLCJnZXRVbnN5bmNlZE1vZGVsTmFtZXMiLCJyZXNldFVuc3luY2VkRmllbGRzIiwidW5zeW5jZWROb25Nb2RlbEZpZWxkcyIsInVuc3luY2VkTW9kZWxOYW1lcyIsInVuc3luY2VkTW9kZWxGaWVsZHMiLCJfdGhpczYiLCJnZXREZWVwRGF0YSIsInByb3BlcnR5UGF0aCIsIl9wYXJzZURlZXBEYXRhIiwicGFyc2VEZWVwRGF0YSIsImN1cnJlbnRMZXZlbERhdGEiLCJmaW5hbEtleSIsImZpbmFsRGF0YSIsInBhcnNlIiwiVmFsdWVTdG9yZV9kZWZhdWx0IiwiZGlydHlQcm9wcyIsInBlbmRpbmdQcm9wcyIsIm5vcm1hbGl6ZWROYW1lIiwiZ2V0T3JpZ2luYWxQcm9wcyIsIl9vYmplY3RTcHJlYWQiLCJnZXREaXJ0eVByb3BzIiwiZ2V0VXBkYXRlZFByb3BzRnJvbVBhcmVudCIsImZsdXNoRGlydHlQcm9wc1RvUGVuZGluZyIsInJlaW5pdGlhbGl6ZUFsbFByb3BzIiwicHVzaFBlbmRpbmdQcm9wc0JhY2tUb0RpcnR5Iiwic3RvcmVOZXdQcm9wc0Zyb21QYXJlbnQiLCJjaGFuZ2VkIiwiX2k1IiwiX09iamVjdCRlbnRyaWVzMiIsIl9PYmplY3QkZW50cmllczIkX2kiLCJDb21wb25lbnQiLCJsaXN0ZW5lcnMiLCJiYWNrZW5kIiwiZWxlbWVudERyaXZlciIsIl90aGlzNyIsImZpbmdlcnByaW50IiwiZGVmYXVsdERlYm91bmNlIiwiYmFja2VuZFJlcXVlc3QiLCJwZW5kaW5nQWN0aW9ucyIsInBlbmRpbmdGaWxlcyIsImlzUmVxdWVzdFBlbmRpbmciLCJyZXF1ZXN0RGVib3VuY2VUaW1lb3V0IiwibGlzdGVuZXIiLCJfdGhpczckbGlzdGVuZXJzJGdldCIsInVuc3luY2VkSW5wdXRzVHJhY2tlciIsInJlc2V0UHJvbWlzZSIsImVsZW1lbnQyIiwiYWRkUGx1Z2luIiwicGx1Z2luIiwiYXR0YWNoVG9Db21wb25lbnQiLCJjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQiLCJvbiIsIm9mZiIsInJlUmVuZGVyIiwiZGVib3VuY2UiLCJuZXh0UmVxdWVzdFByb21pc2UiLCJpc0NoYW5nZWQiLCJkZWJvdW5jZWRTdGFydFJlcXVlc3QiLCJnZXREYXRhIiwiaW5wdXQiLCJyZW5kZXIiLCJ0cnlTdGFydGluZ1JlcXVlc3QiLCJlbWl0Iiwib25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkIiwicGVyZm9ybUVtaXQiLCJlbWl0VXAiLCJlbWl0U2VsZiIsImRvRW1pdCIsIm1hdGNoaW5nTmFtZSIsIl90aGlzOCIsImlzVHVyYm9FbmFibGVkIiwiVHVyYm8iLCJwZXJmb3JtUmVxdWVzdCIsIl90aGlzOSIsInRoaXNQcm9taXNlUmVzb2x2ZSIsIm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUiLCJmaWxlc1RvU2VuZCIsIl9pNiIsIl9PYmplY3QkZW50cmllczMiLCJfT2JqZWN0JGVudHJpZXMzJF9pIiwicmVxdWVzdENvbmZpZyIsIl9yZWY1IiwiX2NhbGxlZTIiLCJfaGVhZGVycyRnZXQiLCJiYWNrZW5kUmVzcG9uc2UiLCJfaTciLCJfT2JqZWN0JHZhbHVlcyIsImNvbnRyb2xzIiwiX2NvbnRleHQyIiwiZGlzcGxheUVycm9yIiwicmVuZGVyRXJyb3IiLCJwcm9jZXNzUmVyZW5kZXIiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwiVVJMIiwiaGFzaCIsIm9yaWdpbiIsIl94IiwiX3RoaXMwIiwic2hvdWxkUmVuZGVyIiwidmlzaXQiLCJtb2RpZmllZE1vZGVsVmFsdWVzIiwibWF0Y2hlcyIsImVycm9yIiwibmV3UHJvcHMiLCJnZXRDb21wb25lbnRQcm9wcyIsImV2ZW50c1RvRW1pdCIsImdldEV2ZW50c1RvRW1pdCIsImJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoIiwiZ2V0QnJvd3NlckV2ZW50c1RvRGlzcGF0Y2giLCJfcmVmNiIsIl9yZWY3IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiY2FsY3VsYXRlRGVib3VuY2UiLCJjbGVhclRpbWVvdXQiLCJfdGhpczEiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJmbGV4RGlyZWN0aW9uIiwiaWZyYW1lIiwiYm9yZGVyUmFkaXVzIiwiZmxleEdyb3ciLCJwcmVwZW5kIiwib3ZlcmZsb3ciLCJjb250ZW50V2luZG93Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJtb2RhbDIiLCJmb2N1cyIsIl90aGlzMTAiLCJfdXBkYXRlRnJvbVBhcmVudFByb3BzIiwicHJveGlmeUNvbXBvbmVudCIsIlByb3h5IiwiY29tcG9uZW50MiIsInByb3AiLCJjYWxsYWJsZSIsIl9sZW4yIiwiX2tleTIiLCJSZWZsZWN0IiwiU3RpbXVsdXNFbGVtZW50RHJpdmVyIiwiY29udHJvbGxlciIsIm1vZGVsRGlyZWN0aXZlIiwicHJvcHNWYWx1ZSIsImV2ZW50c1RvRW1pdFZhbHVlIiwiZXZlbnRzVG9EaXNwYXRjaFZhbHVlIiwiZ2V0X21vZGVsX2JpbmRpbmdfZGVmYXVsdCIsInRhcmdldEV2ZW50TmFtZSIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJtb2RpZmllciIsInBhcnNlSW50IiwicGFyc2VGbG9hdCIsIl9tb2RlbERpcmVjdGl2ZSRhY3RpbyIsIl9tb2RlbERpcmVjdGl2ZSRhY3RpbzIiLCJpbm5lck1vZGVsTmFtZSIsIkNoaWxkQ29tcG9uZW50UGx1Z2luX2RlZmF1bHQiLCJwYXJlbnRNb2RlbEJpbmRpbmdzIiwibW9kZWxEaXJlY3RpdmVzIiwiX3RoaXMxMSIsImdldENoaWxkcmVuRmluZ2VycHJpbnRzIiwibm90aWZ5UGFyZW50TW9kZWxDaGFuZ2UiLCJmaW5nZXJwcmludHMiLCJnZXRDaGlsZHJlbiIsInRhZyIsInRvTG93ZXJDYXNlIiwicGFyZW50Q29tcG9uZW50IiwibW9kZWxCaW5kaW5nIiwiY2hpbGRNb2RlbE5hbWUiLCJMYXp5UGx1Z2luX2RlZmF1bHQiLCJpbnRlcnNlY3Rpb25PYnNlcnZlciIsIl9jb21wb25lbnQkZWxlbWVudCRhdCIsIl90aGlzMTIiLCJnZXROYW1lZEl0ZW0iLCJnZXRPYnNlcnZlciIsIl90aGlzMTIkaW50ZXJzZWN0aW9uTyIsInVub2JzZXJ2ZSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiTG9hZGluZ1BsdWdpbl9kZWZhdWx0IiwiX3RoaXMxMyIsInJlcXVlc3QiLCJzdGFydExvYWRpbmciLCJmaW5pc2hMb2FkaW5nIiwidGFyZ2V0RWxlbWVudCIsImhhbmRsZUxvYWRpbmdUb2dnbGUiLCJpc0xvYWRpbmciLCJfdGhpczE0IiwiYWRkQXR0cmlidXRlcyIsInJlbW92ZUF0dHJpYnV0ZXMiLCJnZXRMb2FkaW5nRGlyZWN0aXZlcyIsIl9yZWY4IiwiaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZSIsIl90aGlzMTUiLCJmaW5hbEFjdGlvbiIsInBhcnNlTG9hZGluZ0FjdGlvbiIsImRlbGF5IiwidmFsaWRNb2RpZmllcnMiLCJfdmFsaWRNb2RpZmllcnMkZ2V0IiwibG9hZGluZ0RpcmVjdGl2ZSIsInNob3dFbGVtZW50IiwiaGlkZUVsZW1lbnQiLCJsb2FkaW5nRGlyZWN0aXZlcyIsIm1hdGNoaW5nRWxlbWVudHMiLCJTVkdFbGVtZW50IiwibG9hZGluZyIsImNsYXNzZXMiLCJfZWxlbWVudCRjbGFzc0xpc3QzIiwiX2VsZW1lbnQkY2xhc3NMaXN0NCIsImF0dHJpYnV0ZSIsIlBhZ2VVbmxvYWRpbmdQbHVnaW5fZGVmYXVsdCIsImlzQ29ubmVjdGVkIiwiX3RoaXMxNiIsIlBvbGxpbmdEaXJlY3Rvcl9kZWZhdWx0IiwiaXNQb2xsaW5nQWN0aXZlIiwicG9sbGluZ0ludGVydmFscyIsImFkZFBvbGwiLCJhY3Rpb25OYW1lIiwiZHVyYXRpb24iLCJwb2xscyIsImluaXRpYXRlUG9sbCIsInN0YXJ0QWxsUG9sbGluZyIsIl90aGlzMTciLCJfcmVmOSIsInN0b3BBbGxQb2xsaW5nIiwiY2xlYXJQb2xsaW5nIiwiX3RoaXMxOCIsInRpbWVyIiwiUG9sbGluZ1BsdWdpbl9kZWZhdWx0IiwiX3RoaXMxOSIsInBvbGxpbmdEaXJlY3RvciIsImluaXRpYWxpemVQb2xsaW5nIiwiX3RoaXMyMCIsInBvbGwiLCJyYXdQb2xsQ29uZmlnIiwid2FybiIsIlNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luX2RlZmF1bHQiLCJfdGhpczIxIiwic3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMiLCJIVE1MRm9ybUVsZW1lbnQiLCJWYWxpZGF0ZWRGaWVsZHNQbHVnaW5fZGVmYXVsdCIsIl90aGlzMjIiLCJoYW5kbGVNb2RlbFNldCIsInZhbGlkYXRlZEZpZWxkcyIsIl9MaXZlQ29udHJvbGxlckRlZmF1bHQiLCJfdGhpczIzIiwicGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQiLCJoYW5kbGVDaGFuZ2VFdmVudCIsImNyZWF0ZUNvbXBvbmVudCIsImNvbm5lY3RDb21wb25lbnQiLCJkaXNjb25uZWN0Q29tcG9uZW50IiwiY3VycmVudFRhcmdldCIsInVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCIsIl90aGlzMjQiLCJyYXdBY3Rpb24iLCJhY3Rpb25BcmdzIiwic3RvcFByb3BhZ2F0aW9uIiwiX3ZhbGlkTW9kaWZpZXJzJGdldDIiLCJfaTgiLCJfT2JqZWN0JGVudHJpZXM0IiwiX09iamVjdCRlbnRyaWVzNCRfaSIsIiRyZW5kZXIiLCJfdGhpczI1IiwiZ2V0RW1pdERpcmVjdGl2ZXMiLCJfcmVmMCIsIm5hbWVNYXRjaCIsIl90aGlzMjYiLCJfcmVmMSIsIl90aGlzMjciLCJfcmVmMTAiLCIkdXBkYXRlTW9kZWwiLCJwcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWVDaGFuZ2VkIiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudFZhbHVlIiwiZmluZ2VycHJpbnRWYWx1ZUNoYW5nZWQiLCJmaW5nZXJwcmludFZhbHVlIiwiZXZlbnRJbmZvIiwiZXZlbnRBcmdzIiwiZW1pdHMiLCJfdGhpczI4IiwibmFtZVZhbHVlIiwibGlzdGVuZXJzVmFsdWUiLCJiYWNrZW5kRmFjdG9yeSIsInByb3hpZWRDb21wb25lbnQiLCJoYXNEZWJvdW5jZVZhbHVlIiwiZGVib3VuY2VWYWx1ZSIsInBsdWdpbnMiLCJfdGhpczI5IiwiX3JlZjExIiwiX3RoaXMzMCIsIl9yZWYxMiIsImV2ZW50TmFtZSIsIl9lbGVtZW50JGZpbGVzIiwiZmluYWxWYWx1ZSIsIm51bWVyaWNWYWx1ZSIsImNhbkJ1YmJsZSIsImNhbmNlbGFibGUiLCJfdGhpczMxIiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudCIsImV2ZW50c1RvRGlzcGF0Y2giLCJyZXF1ZXN0TWV0aG9kIiwidXJsVmFsdWUiLCJyZXF1ZXN0TWV0aG9kVmFsdWUiLCJMaXZlQ29udHJvbGxlckRlZmF1bHQiLCJ0dXJib19jb250cm9sbGVyX2RlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9