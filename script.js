/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (() => {
  if (isMobile()) {
    if (window.innerHeight < window.innerWidth) {
      document.getElementsByTagName('html')[0].style.fontSize = '1em';
    } else {
      document.getElementsByTagName('html')[0].style.fontSize = '1.5em';
    }
  }
});

function isMobile() {
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_navigo__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_navigo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_navigo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contents__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_set_font_size__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_resize_resume__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_navigator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_install_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_toggle__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_event_handlers__ = __webpack_require__(9);









document.addEventListener('DOMContentLoaded', function () {
  const main = Array.from(document.getElementsByTagName('main'));
  const navItems = Array.from(document.getElementsByClassName('navitem'));
  const boxShadow = document.getElementById('box-shadow');
  const content = document.getElementById('content');

  const router = new __WEBPACK_IMPORTED_MODULE_0_navigo___default.a(null, true, '#');
  Object(__WEBPACK_IMPORTED_MODULE_5__util_install_router__["a" /* default */])(router, navItems, content);

  let hash = 'home';
  if (window.location.hash.length > 0) {
    hash = window.location.hash.slice(1);
  }
  setTimeout(() => {
    main.forEach(el => el.setAttribute('style', 'opacity: 1'));
    content.innerHTML = __WEBPACK_IMPORTED_MODULE_1__contents__["a" /* default */][hash];
    if (hash === 'resume') {
      setTimeout(__WEBPACK_IMPORTED_MODULE_3__util_resize_resume__["a" /* default */], 300);
    }
  }, 100);

  navItems.forEach(navItem => {
    navItem.addEventListener('click', Object(__WEBPACK_IMPORTED_MODULE_7__util_event_handlers__["a" /* handleClick */])(navItems, content));
    Object(__WEBPACK_IMPORTED_MODULE_6__util_toggle__["a" /* toggleActive */])(navItem, hash);
  });

  Object(__WEBPACK_IMPORTED_MODULE_2__util_set_font_size__["a" /* default */])();
  document.addEventListener('resize', __WEBPACK_IMPORTED_MODULE_3__util_resize_resume__["a" /* default */]);
  document.addEventListener('orientationchange', __WEBPACK_IMPORTED_MODULE_2__util_set_font_size__["a" /* default */]);

  const navItemTexts = Object.keys(__WEBPACK_IMPORTED_MODULE_1__contents__["a" /* default */]).sort((a, b) => {
    return __WEBPACK_IMPORTED_MODULE_1__contents__["a" /* default */][a][1] - __WEBPACK_IMPORTED_MODULE_1__contents__["a" /* default */][b][1];
  });
  const navItemIdx = navItemTexts.indexOf(hash);
  const navigator = new __WEBPACK_IMPORTED_MODULE_4__util_navigator__["a" /* default */](navItemTexts, navItemIdx);
  document.onkeydown = navigator.handleKeydown;
  document.addEventListener('touchstart', navigator.handleTouchStart, false);
  document.addEventListener('touchmove', navigator.handleTouchMove, false);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Navigo = t();
}(this, function () {
  "use strict";
  var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  };function t() {
    return !("undefined" == typeof window || !window.history || !window.history.pushState);
  }function n(e, n, o) {
    this.root = null, this._routes = [], this._useHash = n, this._hash = void 0 === o ? "#" : o, this._paused = !1, this._destroyed = !1, this._lastRouteResolved = null, this._notFoundHandler = null, this._defaultHandler = null, this._usePushState = !n && t(), this._onLocationChange = this._onLocationChange.bind(this), this._genericHooks = null, this._historyAPIUpdateMethod = "pushState", e ? this.root = n ? e.replace(/\/$/, "/" + this._hash) : e.replace(/\/$/, "") : n && (this.root = this._cLoc().split(this._hash)[0].replace(/\/$/, "/" + this._hash)), this._listen(), this.updatePageLinks();
  }function o(e) {
    return e instanceof RegExp ? e : e.replace(/\/+$/, "").replace(/^\/+/, "^/");
  }function i(e) {
    return e.replace(/\/$/, "").split("/").length;
  }function s(e, t) {
    return i(t) - i(e);
  }function r(e, t) {
    return function (e) {
      return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map(function (t) {
        var i = function (e) {
          var t = [];return { regexp: e instanceof RegExp ? e : new RegExp(e.replace(n.PARAMETER_REGEXP, function (e, o, i) {
              return t.push(i), n.REPLACE_VARIABLE_REGEXP;
            }).replace(n.WILDCARD_REGEXP, n.REPLACE_WILDCARD) + n.FOLLOWED_BY_SLASH_REGEXP, n.MATCH_REGEXP_FLAGS), paramNames: t };
        }(o(t.route)),
            s = i.regexp,
            r = i.paramNames,
            a = e.replace(/^\/+/, "/").match(s),
            h = function (e, t) {
          return 0 === t.length ? null : e ? e.slice(1, e.length).reduce(function (e, n, o) {
            return null === e && (e = {}), e[t[o]] = decodeURIComponent(n), e;
          }, null) : null;
        }(a, r);return !!a && { match: a, route: t, params: h };
      }).filter(function (e) {
        return e;
      });
    }(e, t)[0] || !1;
  }function a(e, t) {
    var n = t.map(function (t) {
      return "" === t.route || "*" === t.route ? e : e.split(new RegExp(t.route + "($|/)"))[0];
    }),
        i = o(e);return n.length > 1 ? n.reduce(function (e, t) {
      return e.length > t.length && (e = t), e;
    }, n[0]) : 1 === n.length ? n[0] : i;
  }function h(e, n, o) {
    var i,
        s = function (e) {
      return e.split(/\?(.*)?$/)[0];
    };return void 0 === o && (o = "#"), t() && !n ? s(e).split(o)[0] : (i = e.split(o)).length > 1 ? s(i[1]) : s(i[0]);
  }function u(t, n, o) {
    if (n && "object" === (void 0 === n ? "undefined" : e(n))) {
      if (n.before) return void n.before(function () {
        (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && (t(), n.after && n.after(o));
      }, o);if (n.after) return t(), void (n.after && n.after(o));
    }t();
  }return n.prototype = { helpers: { match: r, root: a, clean: o, getOnlyURL: h }, navigate: function (e, t) {
      var n;return e = e || "", this._usePushState ? (n = (n = (t ? "" : this._getRoot() + "/") + e.replace(/^\/+/, "/")).replace(/([^:])(\/{2,})/g, "$1/"), history[this._historyAPIUpdateMethod]({}, "", n), this.resolve()) : "undefined" != typeof window && (e = e.replace(new RegExp("^" + this._hash), ""), window.location.href = window.location.href.replace(/#$/, "").replace(new RegExp(this._hash + ".*$"), "") + this._hash + e), this;
    }, on: function () {
      for (var t = this, n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];if ("function" == typeof o[0]) this._defaultHandler = { handler: o[0], hooks: o[1] };else if (o.length >= 2) {
        if ("/" === o[0]) {
          var r = o[1];"object" === e(o[1]) && (r = o[1].uses), this._defaultHandler = { handler: r, hooks: o[2] };
        } else this._add(o[0], o[1], o[2]);
      } else "object" === e(o[0]) && Object.keys(o[0]).sort(s).forEach(function (e) {
        t.on(e, o[0][e]);
      });return this;
    }, off: function (e) {
      return null !== this._defaultHandler && e === this._defaultHandler.handler ? this._defaultHandler = null : null !== this._notFoundHandler && e === this._notFoundHandler.handler && (this._notFoundHandler = null), this._routes = this._routes.reduce(function (t, n) {
        return n.handler !== e && t.push(n), t;
      }, []), this;
    }, notFound: function (e, t) {
      return this._notFoundHandler = { handler: e, hooks: t }, this;
    }, resolve: function (e) {
      var n,
          o,
          i = this,
          s = (e || this._cLoc()).replace(this._getRoot(), "");this._useHash && (s = s.replace(new RegExp("^/" + this._hash), "/"));var a = function (e) {
        return e.split(/\?(.*)?$/).slice(1).join("");
      }(e || this._cLoc()),
          l = h(s, this._useHash, this._hash);return !this._paused && (this._lastRouteResolved && l === this._lastRouteResolved.url && a === this._lastRouteResolved.query ? (this._lastRouteResolved.hooks && this._lastRouteResolved.hooks.already && this._lastRouteResolved.hooks.already(this._lastRouteResolved.params), !1) : (o = r(l, this._routes)) ? (this._callLeave(), this._lastRouteResolved = { url: l, query: a, hooks: o.route.hooks, params: o.params, name: o.route.name }, n = o.route.handler, u(function () {
        u(function () {
          o.route.route instanceof RegExp ? n.apply(void 0, o.match.slice(1, o.match.length)) : n(o.params, a);
        }, o.route.hooks, o.params, i._genericHooks);
      }, this._genericHooks, o.params), o) : this._defaultHandler && ("" === l || "/" === l || l === this._hash || function (e, n, o) {
        if (t() && !n) return !1;if (!e.match(o)) return !1;var i = e.split(o);return i.length < 2 || "" === i[1];
      }(l, this._useHash, this._hash)) ? (u(function () {
        u(function () {
          i._callLeave(), i._lastRouteResolved = { url: l, query: a, hooks: i._defaultHandler.hooks }, i._defaultHandler.handler(a);
        }, i._defaultHandler.hooks);
      }, this._genericHooks), !0) : (this._notFoundHandler && u(function () {
        u(function () {
          i._callLeave(), i._lastRouteResolved = { url: l, query: a, hooks: i._notFoundHandler.hooks }, i._notFoundHandler.handler(a);
        }, i._notFoundHandler.hooks);
      }, this._genericHooks), !1));
    }, destroy: function () {
      this._routes = [], this._destroyed = !0, this._lastRouteResolved = null, this._genericHooks = null, clearTimeout(this._listeningInterval), "undefined" != typeof window && (window.removeEventListener("popstate", this._onLocationChange), window.removeEventListener("hashchange", this._onLocationChange));
    }, updatePageLinks: function () {
      var e = this;"undefined" != typeof document && this._findLinks().forEach(function (t) {
        t.hasListenerAttached || (t.addEventListener("click", function (n) {
          if ((n.ctrlKey || n.metaKey) && "a" == n.target.tagName.toLowerCase()) return !1;var o = e.getLinkPath(t);e._destroyed || (n.preventDefault(), e.navigate(o.replace(/\/+$/, "").replace(/^\/+/, "/")));
        }), t.hasListenerAttached = !0);
      });
    }, generate: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = this._routes.reduce(function (n, o) {
        var i;if (o.name === e) for (i in n = o.route, t) n = n.toString().replace(":" + i, t[i]);return n;
      }, "");return this._useHash ? this._hash + n : n;
    }, link: function (e) {
      return this._getRoot() + e;
    }, pause: function () {
      var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];this._paused = e, this._historyAPIUpdateMethod = e ? "replaceState" : "pushState";
    }, resume: function () {
      this.pause(!1);
    }, historyAPIUpdateMethod: function (e) {
      return void 0 === e ? this._historyAPIUpdateMethod : (this._historyAPIUpdateMethod = e, e);
    }, disableIfAPINotAvailable: function () {
      t() || this.destroy();
    }, lastRouteResolved: function () {
      return this._lastRouteResolved;
    }, getLinkPath: function (e) {
      return e.getAttribute("href");
    }, hooks: function (e) {
      this._genericHooks = e;
    }, _add: function (t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;return "string" == typeof t && (t = encodeURI(t)), this._routes.push("object" === (void 0 === n ? "undefined" : e(n)) ? { route: t, handler: n.uses, name: n.as, hooks: o || n.hooks } : { route: t, handler: n, hooks: o }), this._add;
    }, _getRoot: function () {
      return null !== this.root ? this.root : (this.root = a(this._cLoc().split("?")[0], this._routes), this.root);
    }, _listen: function () {
      var e = this;if (this._usePushState) window.addEventListener("popstate", this._onLocationChange);else if ("undefined" != typeof window && "onhashchange" in window) window.addEventListener("hashchange", this._onLocationChange);else {
        var t = this._cLoc(),
            n = void 0,
            o = void 0;(o = function () {
          n = e._cLoc(), t !== n && (t = n, e.resolve()), e._listeningInterval = setTimeout(o, 200);
        })();
      }
    }, _cLoc: function () {
      return "undefined" != typeof window ? void 0 !== window.__NAVIGO_WINDOW_LOCATION_MOCK__ ? window.__NAVIGO_WINDOW_LOCATION_MOCK__ : o(window.location.href) : "";
    }, _findLinks: function () {
      return [].slice.call(document.querySelectorAll("[data-navigo]"));
    }, _onLocationChange: function () {
      this.resolve();
    }, _callLeave: function () {
      var e = this._lastRouteResolved;e && e.hooks && e.hooks.leave && e.hooks.leave(e.params);
    } }, n.PARAMETER_REGEXP = /([:*])(\w+)/g, n.WILDCARD_REGEXP = /\*/g, n.REPLACE_VARIABLE_REGEXP = "([^/]+)", n.REPLACE_WILDCARD = "(?:.*)", n.FOLLOWED_BY_SLASH_REGEXP = "(?:/$|$)", n.MATCH_REGEXP_FLAGS = "", n;
});
//# sourceMappingURL=navigo.min.js.map

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const contents = {
  home: [`
    <div class="home-content">
        <div>
          <img class="portrait" src="./img/matthias-jenny.png" />
          <div>
            <p>Hi, I'm Matthias Jenny, and I'm a full-stack web developer and teacher with a passion for logic. After writing a <a href="http://dspace.mit.edu/handle/1721.1/113731" target="_blank">PhD thesis</a> on computability theory, conditionals, and non-classical logic at MIT, I am now based in New York City, where I work at <a href="https://www.appacademy.io/">App Academy</a>. I get equally excited about writing sophisticated and efficient algorithms as I do about developing beautiful and responsive user interfaces.</p>
            <p>In addition to writing software, I also like <a href="https://500px.com/m1010j">taking photos</a>.<p>
          </div>
        </div>
      </div>
    <div class="home-technologies">
        <p>Favorite technologies:</p>
        <div class="home-technologies-icons">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img class="icon" src="./icons/javascript.png" /></a>
          <a href="https://github.com/facebook/react"><img class="icon" src="./icons/react.png" /></a>
          <a href="https://www.ruby-lang.org/en/"><img class="icon" src="./icons/ruby.png" /></a>
          <a href="http://rubyonrails.org/"><img class="icon" src="./icons/rails.png" /></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img class="icon" src="./icons/html5.png" /></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img class="icon" src="./icons/css3.png" /></a>
        </div>
      </div>
    </div>    
  `, 0],
  projects: [`
    <div class="project-item">
      <h1><a href="http://www.andor.fun/">Andor</a></h1>
      <div class="project-item-detail">
        <a href="http://www.andor.fun/"><div class="andor-gif"></div></a>
        <div>
          An original logic game that teaches players the rules of the Boolean connectives. Built with React, Redux, Cordova, and my boolean-logic library (see below).<br />
          <div class="play-links">
            <a href='https://play.google.com/store/apps/details?id=io.cordova.andor' class="badge">
              <img alt='Get Andor on Google Play' src='img/google.svg'/>
            </a>
            <a href='https://itunes.apple.com/us/app/andor-learn-logic/id1339495044' class="badge">
              <img alt='Download Andor on the App Store' src='img/apple.svg'/>
            </a>
            <a href='https://www.amazon.com/dp/B079FM48R9/ref=sr_1_1?ie=UTF8&qid=1517356419' class="badge">
              <img alt='Download Andor on the App Store' src='img/amazon.svg'/>
            </a>
          </div>
        </div>
    </div>
    </div>
    <div class="project-item">
      <h1><a href="http://www.matthiasjenny.com/sat-zoo">Sat Zoo</a> <a href="https://github.com/m1010j/sat-zoo"><i class="fab fa-github"></i></a></h1>
      <div class="project-item-detail">
        <a href="https://github.com/m1010j/sat-zoo"><div class="sat-zoo-gif"></div></a>
        <div>
          A benchmarking tool for Boolean satisfiability, powered by my boolean-logic library (see below).
        </div>
      </div>
    </div>
    <div class="project-item">
      <h1><a href="https://github.com/m1010j/boolean-logic">boolean-logic</a> <a href="https://github.com/m1010j/boolean-logic"><i class="fab fa-github"></i></a> | <a href="https://www.npmjs.com/package/boolean-logic"><i class="fab fa-npm"></i></a></h1>
      <div class="project-item-detail">
        <a href="https://github.com/m1010j/boolean-logic"><div class="boolean-logic-png"></div></a>
        <div>
          A lightweight JavaScript library for evaluating formulas of Boolean logic.
        </div>
      </div>
    </div>
    <div class="project-item">
      <h1><a href="http://www.livepoll.info/">LivePoll</a> <a href="https://github.com/m1010j/LivePoll"><i class="fab fa-github"></i></a></h1>
      <div class="project-item-detail">
        <a href="http://www.livepoll.info/"><div class="livepoll-gif"></div></a>
        <div>
          A Poll Everywhere clone built with Rails, React, Redux, Pusher, and AWS.
        </div>
      </div>
    </div>
  `, 1],
  resume: [`
  <div class="resume">
    <div class="iframe-container">
      <a href="https://www.matthiasjenny.com/resume/Matthias_Jenny_Resume.pdf" target="_blank" id="open-resume"><i class="fas fa-external-link-alt"></i></a>
      <iframe src="https://www.matthiasjenny.com/resume/index.html"></iframe>
    </div>
  </div>
  `, 2],
  contact: [`
    <div class="contact-content">
      <p><a href="mailto:matthiascjenny@gmail.com"><i class="fas fa-envelope"></i> matthiascjenny@gmail.com</a></p>
      <p><a href="https://github.com/m1010j"><i class="fab fa-github"></i> github.com/m1010j</a></p>
      <p><a href="https://twitter.com/_m1010j_"><i class="fab fa-twitter"></i> twitter.com/_m1010j_</a></p>
      <p><a href="https://www.linkedin.com/in/m1010j/"><i class="fab fa-linkedin"></i> linkedin.com/in/m1010j</a></p>
      <p><a href="https://angel.co/m1010j"><i class="fab fa-angellist"></i> angel.co/m1010j</a></p>
    </div>
  `, 3]
};

/* harmony default export */ __webpack_exports__["a"] = (contents);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__set_font_size__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (() => {
  Object(__WEBPACK_IMPORTED_MODULE_0__set_font_size__["a" /* default */])();
  const width = window.innerWidth;
  const height = window.innerHeight;
  const iframe = document.getElementsByTagName('iframe')[0];
  const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  const innerHtml = innerDoc.getElementsByTagName('html')[0];
  const openResume = document.getElementById('open-resume');
  const iframeContainer = document.getElementsByClassName('iframe-container')[0];
  if (!iframe || !innerDoc || !innerHtml || !openResume || !iframeContainer) {
    setTimeout(resizeResume, 100);
  } else {
    let multiplier;
    let factor;
    if (width >= height) {
      multiplier = 0.5;
      factor = 1684;
    } else {
      multiplier = 0.75;
      factor = 1115;
    }
    iframeContainer.style.opacity = 1;
    iframe.style.width = `${Math.floor(multiplier * width)}px`;
    iframe.style.height = `${Math.floor(multiplier * width * 10.41 / 8)}px`;
    innerHtml.style.fontSize = `${width / factor}em`;
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_handlers__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = (class {
  constructor(navItemTexts, navItemIdx) {
    this.navItemTexts = Object.freeze(navItemTexts);
    this.numNavItems = this.navItemTexts.length;
    this.navItemIdx = navItemIdx;
    this.xDown = null;
    this.yDown = null;
    this.navItems = Array.from(document.getElementsByClassName('navitem'));
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
  }

  handleKeydown(e) {
    const key = e.key;
    if (key === 'ArrowRight' || key === 'ArrowLeft') {
      if (key === 'ArrowRight') {
        this.navItemIdx = (this.navItemIdx + 1) % this.numNavItems;
      } else if (key === 'ArrowLeft') {
        this.navItemIdx = (this.navItemIdx - 1) % this.numNavItems;
        if (this.navItemIdx === -1) {
          this.navItemIdx = 3;
        }
      }
      const nextLocation = this.navItemTexts[this.navItemIdx];
      Object(__WEBPACK_IMPORTED_MODULE_0__event_handlers__["b" /* handleKeyOrSwipe */])(this.navItems, nextLocation);
    }
  }

  handleTouchStart(evt) {
    this.xDown = evt.touches[0].clientX;
    this.yDown = evt.touches[0].clientY;
  }

  handleTouchMove(evt) {
    if (!this.xDown || !this.yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = this.xDown - xUp;
    const yDiff = this.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 20) {
        this.navItemIdx = (this.navItemIdx + 1) % this.numNavItems;
      } else if (xDiff < -20) {
        this.navItemIdx = (this.navItemIdx - 1) % this.numNavItems;
        if (this.navItemIdx === -1) {
          this.navItemIdx = 3;
        }
      }
    }
    const nextLocation = this.navItemTexts[this.navItemIdx];
    Object(__WEBPACK_IMPORTED_MODULE_0__event_handlers__["b" /* handleKeyOrSwipe */])(this.navItems, nextLocation);
    this.xDown = null;
    this.yDown = null;
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resize_resume__ = __webpack_require__(4);


const toggleActive = (navItem, hash) => {
  const type = navItem.innerText.toLowerCase();
  if (hash === type) {
    toggleContent(type);
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = toggleActive;


const toggleContent = type => {
  window.location = `#${type}`;
  if (type === 'resume') {
    setTimeout(__WEBPACK_IMPORTED_MODULE_0__resize_resume__["a" /* default */], 500);
  }
};
/* unused harmony export toggleContent */


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contents__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = ((router, navItems, content) => {
  const routers = {};
  const navItemTexts = navItems.map(navItem => {
    return navItem.innerText.toLowerCase();
  });
  navItemTexts.forEach(navItemText => {
    routers[navItemText] = function () {
      content.innerHTML = __WEBPACK_IMPORTED_MODULE_0__contents__["a" /* default */][navItemText][0];
      navItems.forEach(navItem => {
        const type = navItem.innerText.toLowerCase();
        if (navItemText === type) {
          navItem.classList.add(`${type}-active`);
          navItem.classList.remove(type);
        } else {
          navItem.classList.remove(`${type}-active`);
          navItem.classList.add(type);
        }
      });
    };
  });

  router.on(routers).resolve();
});

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toggle__ = __webpack_require__(6);


const handleKeyOrSwipe = (navItems, nextLocation) => {
  navItems.forEach(navItem => {
    Object(__WEBPACK_IMPORTED_MODULE_0__toggle__["a" /* toggleActive */])(navItem, nextLocation);
  });
};
/* harmony export (immutable) */ __webpack_exports__["b"] = handleKeyOrSwipe;


const handleClick = (navItems, content) => {
  return e => {
    navItems.forEach(navItem => {
      const hash = e.target.innerText.toLowerCase();
      Object(__WEBPACK_IMPORTED_MODULE_0__toggle__["a" /* toggleActive */])(navItem, hash);
    });
  };
};
/* harmony export (immutable) */ __webpack_exports__["a"] = handleClick;


/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map