/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/Users/Phantr4x/GitHub/donut.js";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * @Author: Phantr4x 
 * @Date: 2017-03-10 16:16:24 
 * @Last Modified by: Phantr4x
 * @Last Modified time: 2017-03-10 17:22:28
 */
(function (factory) {
  'use strict';

  if (( false ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = factory();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    var root;
    if (typeof window !== "undefined") {
      root = window;
    } else if (typeof global !== "undefined") {
      root = global;
    } else if (typeof self !== "undefined") {
      root = self;
    } else {
      root = this;
    }
    root.oOo = root.donut = factory();
  }
})(function (define, module, exports) {
  /**
   * Util
   */
  var util = {
    mergeOptions: function mergeOptions(a, b) {
      return Object.assign(a, b);
    }
  };

  /**
   * Class Cookie
   */
  function Cookie() {
    if (!(this instanceof Cookie)) {
      return new Cookie();
    }
  }
  Cookie.prototype = {
    // Setter
    get: function get(key) {
      var tmp;
      var all = this.getAll();
      for (var item in all) {
        if (all.hasOwnProperty(item) && all.hasOwnProperty(key)) {
          tmp = all[key];
        }
      }
      return tmp;
    },
    getAll: function getAll() {
      var tmp = {};
      var cookies = document.cookie === '' ? [] : document.cookie.split(';');
      cookies.length && cookies.forEach(function (item, index, cookies) {
        var pieces = item.replace(/\s+/g, '').split('=');
        tmp[unescape(pieces[0])] = unescape(pieces[1]);
      });
      return tmp;
    },
    // Setter
    set: function set(key, value, options) {
      // Merge custom options with default options
      var _opt = { expires: '', domain: '', path: '/', secure: false, httpOnly: false };
      _opt = util.mergeOptions(_opt, options);

      var date = new Date();
      date.setTime(date.getTime() + _opt.expires * 60 * 60 * 1000);

      var expires = _opt.expires === '' ? '' : '; expires=' + date.toUTCString(),
          domain = _opt.domain === '' ? '' : '; domain=' + _opt.domain,
          path = _opt.path === '/' ? '' : '; path=' + _opt.path,
          secure = _opt.secure === false ? '' : '; secure',
          httpOnly = _opt.httpOnly === false ? '' : '; HttpOnly';

      document.cookie = key + '=' + escape(value) + expires + domain + path + secure + httpOnly;
    },
    // Remover
    remove: function remove(key) {
      this.set(key, '', { expires: -1 });
    },
    removeAll: function removeAll() {
      var all = this.getAll();
      for (var item in all) {
        if (all.hasOwnProperty(item)) {
          this.remove(item);
        }
      }
    }
  };

  var donut = function donut() {};

  donut.cookie = new Cookie();

  return donut;
});

/***/ })
/******/ ]);
//# sourceMappingURL=donut.bundle.js.map