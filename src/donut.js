/*
 * @Author: Phantr4x 
 * @Date: 2017-03-10 16:16:24 
 * @Last Modified by: Phantr4x
 * @Last Modified time: 2017-03-10 17:22:28
 */
(function (factory) {
  'use strict';
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
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
    mergeOptions: function (a, b) {
      return Object.assign(a, b);
    },
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
    get: function (key) {
      var tmp;
      var all = this.getAll();
      for (var item in all) {
        if (all.hasOwnProperty(item) && all.hasOwnProperty(key)) {
          tmp = all[key];
        }
      }
      return tmp;
    },
    getAll: function () {
      var tmp = {};
      var cookies = document.cookie === '' ? [] : document.cookie.split(';');
      cookies.length && cookies.forEach(function (item, index, cookies) {
        var pieces = item.replace(/\s+/g, '').split('=');
        tmp[unescape(pieces[0])] = unescape(pieces[1]);
      });
      return tmp;
    },
    // Setter
    set: function (key, value, options) {
      // Merge custom options with default options
      var _opt = { expires: '', domain: '', path: '/', secure: false, httpOnly: false };
      _opt = util.mergeOptions(_opt, options);
      
      var date = new Date();
      date.setTime(date.getTime() + (_opt.expires*60*60*1000));

      var expires = _opt.expires === '' ? '' : '; expires=' + date.toUTCString(),
          domain = _opt.domain === '' ? '' : '; domain=' + _opt.domain,
          path = _opt.path === '/' ? '' : '; path=' + _opt.path,
          secure = _opt.secure === false ? '' : '; secure',
          httpOnly = _opt.httpOnly === false ? '' : '; HttpOnly';
      
      document.cookie = key + '=' + escape(value) + expires + domain + path + secure + httpOnly;
    },
    // Remover
    remove: function (key) {
      this.set(key, '', { expires: -1 });
    },
    removeAll: function () {
      var all = this.getAll();
      for (var item in all) {
        if (all.hasOwnProperty(item)) {
          this.remove(item);
        }
      }
    },
  }

  
  var donut = function () {
    
  }

  donut.cookie = new Cookie();

  
  return donut;
});
