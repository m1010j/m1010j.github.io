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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _navigo = __webpack_require__(1);

var _navigo2 = _interopRequireDefault(_navigo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contents = {
  home: '\n    <p><img class="portrait" src="./img/matthias-jenny.png" />Hi, I\'m Matthias Jenny, and I\'m a full-stack web developer and teacher with a passion for logic. I\'m based in New York City and I work at <a href="https://www.appacademy.io/">App Academy</a>. I also like <a href="https://500px.com/m1010j">photography</a>.<p>\n    <p>Favorite technologies:</p>\n    <p>\n      <center>\n        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img class="icon" src="./icons/javascript.png" /></a>\n        <a href="https://github.com/facebook/react"><img class="icon" src="./icons/react.png" /></a>\n        <a href="https://www.ruby-lang.org/en/"><img class="icon" src="./icons/ruby.png" /></a>\n        <a href="http://rubyonrails.org/"><img class="icon" src="./icons/rails.png" /></a>\n        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img class="icon" src="./icons/html5.png" /></a>\n        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img class="icon" src="./icons/css3.png" /></a>\n      </center>\n    </p>\n  ',
  projects: '\n    <div class="project-item">\n      <h1><a href="http://www.andor.fun/">Andor</a></h1>\n      <div class="project-item-detail">\n        <a href="http://www.andor.fun/"><div class="andor-gif"></div></a>\n        <div>\n          An original logic game that teaches players the rules of the Boolean connectives. Built with React, Redux, Cordova, and my boolean-logic library (see below).<br />\n          <div class="play-links">\n            <a href=\'https://play.google.com/store/apps/details?id=io.cordova.andor\' class="badge">\n              <img alt=\'Get Andor on Google Play\' src=\'img/google.svg\'/>\n            </a>\n            <a href=\'https://itunes.apple.com/us/app/andor-learn-logic/id1339495044\' class="badge">\n              <img alt=\'Download Andor on the App Store\' src=\'img/apple.svg\'/>\n            </a>\n            <a href=\'https://www.amazon.com/dp/B079FM48R9/ref=sr_1_1?ie=UTF8&qid=1517356419\' class="badge">\n              <img alt=\'Download Andor on the App Store\' src=\'img/amazon.svg\'/>\n            </a>\n          </div>\n        </div>\n    </div>\n    </div>\n    <div class="project-item">\n      <h1><a href="https://github.com/m1010j/boolean-logic">boolean-logic</a> <a href="https://github.com/m1010j/boolean-logic"><i class="fab fa-github"></i></a> | <a href="https://www.npmjs.com/package/boolean-logic"><i class="fab fa-npm"></i></a></h1>\n      <div class="project-item-detail">\n        <a href="https://github.com/m1010j/boolean-logic"><div class="boolean-logic-png"></div></a>\n        <div>\n          A lightweight JavaScript library for evaluating formulas of Boolean logic.\n        </div>\n      </div>\n    </div>\n    <div class="project-item">\n      <h1><a href="http://www.livepoll.info/">LivePoll</a> <a href="https://github.com/m1010j/LivePoll"><i class="fab fa-github"></i></a></h1>\n      <div class="project-item-detail">\n        <a href="http://www.livepoll.info/"><div class="livepoll-gif"></div></a>\n        <div>\n          A Poll Everywhere clone built with Rails, React, Redux, Pusher, and AWS.\n        </div>\n      </div>\n    </div>\n  ',
  resume: '\n  <div class="resume">\n    <div class="iframe-container">\n      <a href="./Matthias_Jenny_Resume.pdf" target="_blank" id="open-resume"><i class="fas fa-external-link-alt"></i></a>\n      <iframe src="./resume/index.html"></iframe>\n    </div>\n  </div>\n  ',
  contact: '\n    <p><a href="mailto:matthiascjenny@gmail.com"><i class="fas fa-envelope"></i> matthiascjenny@gmail.com</a></p>\n    <p><a href="https://github.com/m1010j"><i class="fab fa-github"></i> github.com/m1010j</a></p>\n    <p><a href="https://www.linkedin.com/in/m1010j/"><i class="fab fa-linkedin"></i> linkedin.com/in/m1010j</a></p>\n    <p><a href="https://twitter.com/_m1010j_"><i class="fab fa-twitter"></i> twitter.com/_m1010j_</a></p>\n\n  '
};

var root = null;
var useHash = true;
var hash = '#';
var router = new _navigo2.default(root, useHash, hash);

document.addEventListener('DOMContentLoaded', function () {
  var main = Array.from(document.getElementsByTagName('main'));
  var navItems = Array.from(document.getElementsByClassName('navitem'));
  var content = document.getElementById('content');
  var hash = 'home';
  if (window.location.hash.length > 0) {
    hash = window.location.hash.slice(1);
  }
  setTimeout(function () {
    main.forEach(function (el) {
      return el.setAttribute('style', 'opacity: 1');
    });
    content.innerHTML = contents[hash];
    if (hash === 'resume') {
      setTimeout(resizeResume, 300);
    }
  }, 100);

  navItems.forEach(function (navItem) {
    navItem.addEventListener('click', toggleActive(navItems, content));
    var type = navItem.innerText.toLowerCase();
    if (hash === type) {
      navItem.classList.add(type + '-active');
      navItem.classList.remove(type);
      window.location = '#' + type;
    } else {
      navItem.classList.remove(type + '-active');
      navItem.classList.add(type);
    }
  });

  var navItemTexts = navItems.map(function (navItem) {
    return navItem.innerText.toLowerCase();
  });

  installRouter(navItemTexts, content);
});

window.addEventListener('resize', resizeResume);

var installRouter = function installRouter(navItemTexts, content) {
  var routers = {};
  navItemTexts.forEach(function (navItemText) {
    routers[navItemText] = function () {
      content.innerHTML = contents[navItemText];
    };
  });

  router.on(routers).resolve();
};

function resizeResume() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var iframe = document.getElementsByTagName('iframe')[0];
  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  var innerHtml = innerDoc.getElementsByTagName('html')[0];
  var openResume = document.getElementById('open-resume');
  var iframeContainer = document.getElementsByClassName('iframe-container')[0];
  if (!iframe || !innerDoc || !innerHtml || !openResume || !iframeContainer) {
    setTimeout(resizeResume, 100);
  } else {
    var multiplier = void 0;
    var factor = void 0;
    if (width >= height) {
      multiplier = 0.5;
      factor = 1684;
    } else {
      multiplier = 0.75;
      factor = 1115;
    }
    iframeContainer.style.opacity = 1;
    iframe.style.width = Math.floor(multiplier * width) + 'px';
    iframe.style.height = Math.floor(multiplier * width * 10.41 / 8) + 'px';
    innerHtml.style.fontSize = width / factor + 'em';
  }
}

var toggleActive = function toggleActive(navItems, content) {
  return function (e) {
    navItems.forEach(function (navItem) {
      var type = navItem.innerText.toLowerCase();
      if (e.target === navItem) {
        navItem.classList.add(type + '-active');
        navItem.classList.remove(type);
        window.location = '#' + type;
        if (type === 'resume') {
          setTimeout(resizeResume, 500);
        }
      } else {
        navItem.classList.remove(type + '-active');
        navItem.classList.add(type);
      }
    });
  };
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("Navigo",[],t):"object"==typeof exports?exports.Navigo=t():e.Navigo=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function i(e,t,n){this.root=null,this._routes=[],this._useHash=t,this._hash="undefined"==typeof n?"#":n,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!t&&o(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=t?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):t&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function s(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function r(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce(function(e,n,o){return null===e&&(e={}),e[t[o]]=decodeURIComponent(n),e},null):null}function a(e){var t,n=[];return t=e instanceof RegExp?e:new RegExp(e.replace(i.PARAMETER_REGEXP,function(e,t,o){return n.push(o),i.REPLACE_VARIABLE_REGEXP}).replace(i.WILDCARD_REGEXP,i.REPLACE_WILDCARD)+i.FOLLOWED_BY_SLASH_REGEXP,i.MATCH_REGEXP_FLAGS),{regexp:t,paramNames:n}}function u(e){return e.replace(/\/$/,"").split("/").length}function h(e,t){return u(t)-u(e)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.map(function(t){var n=a(s(t.route)),o=n.regexp,i=n.paramNames,u=e.replace(/^\/+/,"/").match(o),h=r(u,i);return!!u&&{match:u,route:t,params:h}}).filter(function(e){return e})}function d(e,t){return l(e,t)[0]||!1}function c(e,t){var n=t.map(function(t){return""===t.route||"*"===t.route?e:e.split(new RegExp(t.route+"($|/)"))[0]}),o=s(e);return n.length>1?n.reduce(function(e,t){return e.length>t.length&&(e=t),e},n[0]):1===n.length?n[0]:o}function f(){return!!("undefined"!=typeof window&&"onhashchange"in window)}function _(e){return e.split(/\?(.*)?$/).slice(1).join("")}function p(e,t,n){var i,s=e,r=function(e){return e.split(/\?(.*)?$/)[0]};return"undefined"==typeof n&&(n="#"),o()&&!t?s=r(e).split(n)[0]:(i=e.split(n),s=r(i.length>1?i[1]:i[0])),s}function v(e,t,n){if(t&&"object"===("undefined"==typeof t?"undefined":g(t))){if(t.before)return void t.before(function(){var o=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];o&&(e(),t.after&&t.after(n))},n);if(t.after)return e(),void(t.after&&t.after(n))}e()}function R(e,t,n){if(o()&&!t)return!1;if(!e.match(n))return!1;var i=e.split(n);return i.length<2||""===i[1]}Object.defineProperty(t,"__esModule",{value:!0});var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i.prototype={helpers:{match:d,root:c,clean:s,getOnlyURL:p},navigate:function(e,t){var n;return e=e||"",this._usePushState?(n=(t?"":this._getRoot()+"/")+e.replace(/^\/+/,"/"),n=n.replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",n),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var e=this,t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];if("function"==typeof n[0])this._defaultHandler={handler:n[0],hooks:n[1]};else if(n.length>=2)if("/"===n[0]){var i=n[1];"object"===g(n[1])&&(i=n[1].uses),this._defaultHandler={handler:i,hooks:n[2]}}else this._add(n[0],n[1],n[2]);else if("object"===g(n[0])){var s=Object.keys(n[0]).sort(h);s.forEach(function(t){e.on(t,n[0][t])})}return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(t,n){return n.handler!==e&&t.push(n),t},[]),this},notFound:function(e,t){return this._notFoundHandler={handler:e,hooks:t},this},resolve:function(e){var t,o,i=this,s=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(s=s.replace(new RegExp("^/"+this._hash),"/"));var r=_(e||this._cLoc()),a=p(s,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&a===this._lastRouteResolved.url&&r===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(o=d(a,this._routes))?(this._callLeave(),this._lastRouteResolved={url:a,query:r,hooks:o.route.hooks,params:o.params,name:o.route.name},t=o.route.handler,v(function(){v(function(){o.route.route instanceof RegExp?t.apply(void 0,n(o.match.slice(1,o.match.length))):t(o.params,r)},o.route.hooks,o.params,i._genericHooks)},this._genericHooks,o.params),o):this._defaultHandler&&(""===a||"/"===a||a===this._hash||R(a,this._useHash,this._hash))?(v(function(){v(function(){i._callLeave(),i._lastRouteResolved={url:a,query:r,hooks:i._defaultHandler.hooks},i._defaultHandler.handler(r)},i._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&v(function(){v(function(){i._callLeave(),i._lastRouteResolved={url:a,query:r,hooks:i._notFoundHandler.hooks},i._notFoundHandler.handler(r)},i._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(t){t.hasListenerAttached||(t.addEventListener("click",function(n){var o=e.getLinkPath(t);e._destroyed||(n.preventDefault(),e.navigate(o.replace(/\/+$/,"").replace(/^\/+/,"/")))}),t.hasListenerAttached=!0)})},generate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._routes.reduce(function(n,o){var i;if(o.name===e){n=o.route;for(i in t)n=n.toString().replace(":"+i,t[i])}return n},"");return this._useHash?this._hash+n:n},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,e?this._historyAPIUpdateMethod="replaceState":this._historyAPIUpdateMethod="pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return"undefined"==typeof e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){o()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof e&&(e=encodeURI(e)),"object"===("undefined"==typeof t?"undefined":g(t))?this._routes.push({route:e,handler:t.uses,name:t.as,hooks:n||t.hooks}):this._routes.push({route:e,handler:t,hooks:n}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=c(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if(f())window.addEventListener("hashchange",this._onLocationChange);else{var t=this._cLoc(),n=void 0,o=void 0;o=function(){n=e._cLoc(),t!==n&&(t=n,e.resolve()),e._listeningInterval=setTimeout(o,200)},o()}},_cLoc:function(){return"undefined"!=typeof window?"undefined"!=typeof window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:s(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){this._lastRouteResolved&&this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.leave&&this._lastRouteResolved.hooks.leave(this._lastRouteResolved.params)}},i.PARAMETER_REGEXP=/([:*])(\w+)/g,i.WILDCARD_REGEXP=/\*/g,i.REPLACE_VARIABLE_REGEXP="([^/]+)",i.REPLACE_WILDCARD="(?:.*)",i.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",i.MATCH_REGEXP_FLAGS="",t["default"]=i,e.exports=t["default"]}])});
//# sourceMappingURL=navigo.min.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map