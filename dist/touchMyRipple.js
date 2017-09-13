(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var touchMyRipple = function touchMyRipple() {

    var defaultSettings = {
        area: '',
        color: 'rgba(255, 255, 255, 0.4)',
        offsetEl: null,
        eventListener: 'click'
    };

    function ripple(els, rippleColor, eventListener) {
        for (var i = 0; i < els.length; i += 1) {
            var currentBtn = els[i];

            currentBtn.addEventListener(eventListener, function (e) {
                var PageX = void 0;
                var PageY = void 0;

                if (eventListener.match(/touch/) && eventListener.match(/touch/)[0].length > 0) {
                    PageX = e.changedTouches[0].pageX;
                    PageY = e.changedTouches[0].pageY;
                } else {
                    PageX = e.x;
                    PageY = e.y;
                }

                var el = this.getBoundingClientRect(),
                    btnWidth = this.clientWidth,
                    rippleOffset = defaultSettings.offsetEl,
                    headerHeight = rippleOffset ? rippleOffset.clientHeight : 0,
                    btnOffsetTop = el.top + headerHeight,
                    btnOffsetLeft = el.left,
                    posMouseX = PageX,
                    posMouseY = PageY + headerHeight,
                    rippleX = posMouseX - btnOffsetLeft,
                    rippleY = posMouseY - btnOffsetTop;

                var baseCSS = 'position: absolute;\n                               width: ' + btnWidth * 2 + 'px;\n                               height: ' + btnWidth * 2 + 'px;\n                               border-radius: 50%;\n                               transition: transform 700ms, opacity 700ms;\n                               transition-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);\n                               background: ' + rippleColor + ';\n                               background-position: center;\n                               background-repeat: no-repeat;\n                               background-size: 100%;\n                               top: ' + (rippleY - btnWidth) + 'px;\n                               left: ' + (rippleX - btnWidth) + 'px;\n                               transform: scale(0);\n                               pointer-events: none;';

                // Prepare the dom
                var rippleEffect = document.createElement('span');
                rippleEffect.style.cssText = baseCSS;

                // Add some css for prevent errors
                this.style.overflow = 'hidden';

                if (window.getComputedStyle(this).position !== 'absolute' || window.getComputedStyle(this).position !== 'fixed') {

                    this.style.position = 'relative';
                }

                this.appendChild(rippleEffect);

                // start animation
                setTimeout(function () {
                    rippleEffect.style.cssText = baseCSS + ' transform: scale(1); opacity: 0;';
                }, 50);

                setTimeout(function () {
                    rippleEffect.remove();
                }, 700);
            });
        }
    }
    function attachRippleToAttribute(area, rippleColor, eventListener) {
        var attributeEl = document.querySelectorAll(area + ' [data-animation=\'ripple\']');

        if (attributeEl.length > 0) {
            ripple(attributeEl, rippleColor, eventListener);
        } else {
            throw new Error('Selector/s not found');
        }
    }

    function attachRippleToSelectors(selectors, rippleColor, eventListener) {
        var selectorsEl = void 0;

        if (selectors) {
            selectorsEl = document.querySelectorAll(selectors);
        } else {
            throw new Error('You have to enter at least 1 selector');
        }

        if (selectorsEl.length <= 0) {
            console.warn('No element found');
        }

        ripple(selectorsEl, rippleColor, eventListener);
    }

    var tmripple = {
        init: function init(data) {
            try {
                defaultSettings.area = data && data.area ? data.area : defaultSettings.area;
                defaultSettings.color = data && data.color ? data.color : defaultSettings.color;
                defaultSettings.offsetEl = data && data.offsetEl ? this.setOffsetEl(data.offsetEl) : defaultSettings.offsetEl;
                defaultSettings.eventListener = data && data.eventListener ? data.eventListener : defaultSettings.eventListener;

                attachRippleToAttribute(defaultSettings.area, defaultSettings.color, defaultSettings.eventListener);
            } catch (e) {
                console.error(e.message);
                console.error(e);
            }
        },
        attachToSelectors: function attachToSelectors(data) {
            try {
                var rippleColor = data.color || defaultSettings.color;
                var eventListener = data.eventListener || defaultSettings.eventListener;

                attachRippleToSelectors(data.selectors, rippleColor, eventListener);
            } catch (e) {
                console.error(e.message);
                console.error(e);
            }
        },
        setOffsetEl: function setOffsetEl(el) {
            defaultSettings.offsetEl = document.querySelector(el);
        }
    };
    return tmripple;
};

exports.default = touchMyRipple();
var tmripple = exports.tmripple = touchMyRipple();

/***/ })
/******/ ])));