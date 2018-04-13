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
  home: '\n    <div class="home-content">\n        <div>\n          <img class="portrait" src="./img/matthias-jenny.png" />\n          <div>\n            <p>Hi, I\'m Matthias Jenny, and I\'m a full-stack web developer and teacher with a passion for logic. After writing a <a href="http://dspace.mit.edu/handle/1721.1/113731" target="_blank">PhD thesis</a> on computability theory, conditionals, and non-classical logic at MIT, I am now based in New York City, where I work at <a href="https://www.appacademy.io/">App Academy</a>. I get equally excited about writing sophisticated and efficient algorithms as I do about developing beautiful and responsive user interfaces.</p>\n            <p>In addition to writing software, I also like <a href="https://500px.com/m1010j">taking photos</a>.<p>\n          </div>\n        </div>\n      </div>\n    <div class="home-technologies">\n        <p>Favorite technologies:</p>\n        <div class="home-technologies-icons">\n          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img class="icon" src="./icons/javascript.png" /></a>\n          <a href="https://github.com/facebook/react"><img class="icon" src="./icons/react.png" /></a>\n          <a href="https://www.ruby-lang.org/en/"><img class="icon" src="./icons/ruby.png" /></a>\n          <a href="http://rubyonrails.org/"><img class="icon" src="./icons/rails.png" /></a>\n          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img class="icon" src="./icons/html5.png" /></a>\n          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img class="icon" src="./icons/css3.png" /></a>\n        </div>\n      </div>\n    </div>    \n  ',
  projects: '\n    <div class="project-item">\n      <h1><a href="http://www.andor.fun/">Andor</a></h1>\n      <div class="project-item-detail">\n        <a href="http://www.andor.fun/"><div class="andor-gif"></div></a>\n        <div>\n          An original logic game that teaches players the rules of the Boolean connectives. Built with React, Redux, Cordova, and my boolean-logic library (see below).<br />\n          <div class="play-links">\n            <a href=\'https://play.google.com/store/apps/details?id=io.cordova.andor\' class="badge">\n              <img alt=\'Get Andor on Google Play\' src=\'img/google.svg\'/>\n            </a>\n            <a href=\'https://itunes.apple.com/us/app/andor-learn-logic/id1339495044\' class="badge">\n              <img alt=\'Download Andor on the App Store\' src=\'img/apple.svg\'/>\n            </a>\n            <a href=\'https://www.amazon.com/dp/B079FM48R9/ref=sr_1_1?ie=UTF8&qid=1517356419\' class="badge">\n              <img alt=\'Download Andor on the App Store\' src=\'img/amazon.svg\'/>\n            </a>\n          </div>\n        </div>\n    </div>\n    </div>\n    <div class="project-item">\n      <h1><a href="http://www.matthiasjenny.com/sat-zoo">Sat Zoo</a> <a href="https://github.com/m1010j/sat-zoo"><i class="fab fa-github"></i></a></h1>\n      <div class="project-item-detail">\n        <a href="https://github.com/m1010j/sat-zoo"><div class="sat-zoo-gif"></div></a>\n        <div>\n          A benchmarking tool for Boolean satisfiability, powered by my boolean-logic library (see below).\n        </div>\n      </div>\n    </div>\n    <div class="project-item">\n      <h1><a href="https://github.com/m1010j/boolean-logic">boolean-logic</a> <a href="https://github.com/m1010j/boolean-logic"><i class="fab fa-github"></i></a> | <a href="https://www.npmjs.com/package/boolean-logic"><i class="fab fa-npm"></i></a></h1>\n      <div class="project-item-detail">\n        <a href="https://github.com/m1010j/boolean-logic"><div class="boolean-logic-png"></div></a>\n        <div>\n          A lightweight JavaScript library for evaluating formulas of Boolean logic.\n        </div>\n      </div>\n    </div>\n    <div class="project-item">\n      <h1><a href="http://www.livepoll.info/">LivePoll</a> <a href="https://github.com/m1010j/LivePoll"><i class="fab fa-github"></i></a></h1>\n      <div class="project-item-detail">\n        <a href="http://www.livepoll.info/"><div class="livepoll-gif"></div></a>\n        <div>\n          A Poll Everywhere clone built with Rails, React, Redux, Pusher, and AWS.\n        </div>\n      </div>\n    </div>\n  ',
  resume: '\n  <div class="resume">\n    <div class="iframe-container">\n      <a href="./Matthias_Jenny_Resume.pdf" target="_blank" id="open-resume"><i class="fas fa-external-link-alt"></i></a>\n      <iframe src="' + location.origin + '/resume/index.html"></iframe>\n    </div>\n  </div>\n  ',
  contact: '\n    <div class="contact-content">\n      <p><a href="mailto:matthiascjenny@gmail.com"><i class="fas fa-envelope"></i> matthiascjenny@gmail.com</a></p>\n      <p><a href="https://github.com/m1010j"><i class="fab fa-github"></i> github.com/m1010j</a></p>\n      <p><a href="https://twitter.com/_m1010j_"><i class="fab fa-twitter"></i> twitter.com/_m1010j_</a></p>\n      <p><a href="https://www.linkedin.com/in/m1010j/"><i class="fab fa-linkedin"></i> linkedin.com/in/m1010j</a></p>\n      <p><a href="https://angel.co/m1010j"><i class="fab fa-angellist"></i> angel.co/m1010j</a></p>\n    </div>\n  '
};

var root = null;
var useHash = true;
var hash = '#';
var router = new _navigo2.default(root, useHash, hash);

document.addEventListener('DOMContentLoaded', function () {
  var main = Array.from(document.getElementsByTagName('main'));
  var navItems = Array.from(document.getElementsByClassName('navitem'));
  var boxShadow = document.getElementById('box-shadow');
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

  setFontSize();
});

window.addEventListener('resize', resizeResume);

window.addEventListener('orientationchange', setFontSize);

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
  setFontSize();
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

function isMobile() {
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

function setFontSize() {
  if (isMobile()) {
    if (window.innerHeight < window.innerWidth) {
      document.getElementsByTagName('html')[0].style.fontSize = '1em';
    } else {
      document.getElementsByTagName('html')[0].style.fontSize = '1.5em';
    }
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("Navigo",[],t):"object"==typeof exports?exports.Navigo=t():e.Navigo=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function i(e,t,n){this.root=null,this._routes=[],this._useHash=t,this._hash="undefined"==typeof n?"#":n,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!t&&o(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=t?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):t&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function s(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function r(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce(function(e,n,o){return null===e&&(e={}),e[t[o]]=decodeURIComponent(n),e},null):null}function a(e){var t,n=[];return t=e instanceof RegExp?e:new RegExp(e.replace(i.PARAMETER_REGEXP,function(e,t,o){return n.push(o),i.REPLACE_VARIABLE_REGEXP}).replace(i.WILDCARD_REGEXP,i.REPLACE_WILDCARD)+i.FOLLOWED_BY_SLASH_REGEXP,i.MATCH_REGEXP_FLAGS),{regexp:t,paramNames:n}}function u(e){return e.replace(/\/$/,"").split("/").length}function h(e,t){return u(t)-u(e)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.map(function(t){var n=a(s(t.route)),o=n.regexp,i=n.paramNames,u=e.replace(/^\/+/,"/").match(o),h=r(u,i);return!!u&&{match:u,route:t,params:h}}).filter(function(e){return e})}function d(e,t){return l(e,t)[0]||!1}function c(e,t){var n=t.map(function(t){return""===t.route||"*"===t.route?e:e.split(new RegExp(t.route+"($|/)"))[0]}),o=s(e);return n.length>1?n.reduce(function(e,t){return e.length>t.length&&(e=t),e},n[0]):1===n.length?n[0]:o}function f(){return!!("undefined"!=typeof window&&"onhashchange"in window)}function _(e){return e.split(/\?(.*)?$/).slice(1).join("")}function p(e,t,n){var i,s=e,r=function(e){return e.split(/\?(.*)?$/)[0]};return"undefined"==typeof n&&(n="#"),o()&&!t?s=r(e).split(n)[0]:(i=e.split(n),s=r(i.length>1?i[1]:i[0])),s}function v(e,t,n){if(t&&"object"===("undefined"==typeof t?"undefined":g(t))){if(t.before)return void t.before(function(){var o=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];o&&(e(),t.after&&t.after(n))},n);if(t.after)return e(),void(t.after&&t.after(n))}e()}function R(e,t,n){if(o()&&!t)return!1;if(!e.match(n))return!1;var i=e.split(n);return i.length<2||""===i[1]}Object.defineProperty(t,"__esModule",{value:!0});var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i.prototype={helpers:{match:d,root:c,clean:s,getOnlyURL:p},navigate:function(e,t){var n;return e=e||"",this._usePushState?(n=(t?"":this._getRoot()+"/")+e.replace(/^\/+/,"/"),n=n.replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",n),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var e=this,t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];if("function"==typeof n[0])this._defaultHandler={handler:n[0],hooks:n[1]};else if(n.length>=2)if("/"===n[0]){var i=n[1];"object"===g(n[1])&&(i=n[1].uses),this._defaultHandler={handler:i,hooks:n[2]}}else this._add(n[0],n[1],n[2]);else if("object"===g(n[0])){var s=Object.keys(n[0]).sort(h);s.forEach(function(t){e.on(t,n[0][t])})}return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(t,n){return n.handler!==e&&t.push(n),t},[]),this},notFound:function(e,t){return this._notFoundHandler={handler:e,hooks:t},this},resolve:function(e){var t,o,i=this,s=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(s=s.replace(new RegExp("^/"+this._hash),"/"));var r=_(e||this._cLoc()),a=p(s,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&a===this._lastRouteResolved.url&&r===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(o=d(a,this._routes))?(this._callLeave(),this._lastRouteResolved={url:a,query:r,hooks:o.route.hooks,params:o.params,name:o.route.name},t=o.route.handler,v(function(){v(function(){o.route.route instanceof RegExp?t.apply(void 0,n(o.match.slice(1,o.match.length))):t(o.params,r)},o.route.hooks,o.params,i._genericHooks)},this._genericHooks,o.params),o):this._defaultHandler&&(""===a||"/"===a||a===this._hash||R(a,this._useHash,this._hash))?(v(function(){v(function(){i._callLeave(),i._lastRouteResolved={url:a,query:r,hooks:i._defaultHandler.hooks},i._defaultHandler.handler(r)},i._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&v(function(){v(function(){i._callLeave(),i._lastRouteResolved={url:a,query:r,hooks:i._notFoundHandler.hooks},i._notFoundHandler.handler(r)},i._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(t){t.hasListenerAttached||(t.addEventListener("click",function(n){var o=e.getLinkPath(t);e._destroyed||(n.preventDefault(),e.navigate(o.replace(/\/+$/,"").replace(/^\/+/,"/")))}),t.hasListenerAttached=!0)})},generate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._routes.reduce(function(n,o){var i;if(o.name===e){n=o.route;for(i in t)n=n.toString().replace(":"+i,t[i])}return n},"");return this._useHash?this._hash+n:n},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,e?this._historyAPIUpdateMethod="replaceState":this._historyAPIUpdateMethod="pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return"undefined"==typeof e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){o()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof e&&(e=encodeURI(e)),"object"===("undefined"==typeof t?"undefined":g(t))?this._routes.push({route:e,handler:t.uses,name:t.as,hooks:n||t.hooks}):this._routes.push({route:e,handler:t,hooks:n}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=c(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if(f())window.addEventListener("hashchange",this._onLocationChange);else{var t=this._cLoc(),n=void 0,o=void 0;o=function(){n=e._cLoc(),t!==n&&(t=n,e.resolve()),e._listeningInterval=setTimeout(o,200)},o()}},_cLoc:function(){return"undefined"!=typeof window?"undefined"!=typeof window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:s(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){this._lastRouteResolved&&this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.leave&&this._lastRouteResolved.hooks.leave(this._lastRouteResolved.params)}},i.PARAMETER_REGEXP=/([:*])(\w+)/g,i.WILDCARD_REGEXP=/\*/g,i.REPLACE_VARIABLE_REGEXP="([^/]+)",i.REPLACE_WILDCARD="(?:.*)",i.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",i.MATCH_REGEXP_FLAGS="",t["default"]=i,e.exports=t["default"]}])});
//# sourceMappingURL=navigo.min.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map