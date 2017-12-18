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


var contents = {
  home: '\n    Hello Home\n  ',
  projects: '\n    <a href="mailto:matthiascjenny@gmail.com">Hello Projects</a>\n  ',
  contact: '\n    Hello Contact\n  ',
  resume: '\n    <center><iframe\n    src="https://docs.google.com/presentation/d/e/2PACX-1vSvbIgZ_s_z-P2f-WrCXbGA4-nrTgCfU6Zr7ozlHnoViAZ92P2syQZyh22_ZTlmtW2dCbyRHFdcNotw/embed?start=false&loop=false&delayms=1000"\n    frameborder="0"\n    allowfullscreen="true"\n    mozallowfullscreen="true"\n    webkitallowfullscreen="true">\n    </iframe></center>\n  '
};

document.addEventListener('DOMContentLoaded', function () {
  var main = Array.from(document.getElementsByTagName('main'));
  var navItems = Array.from(document.getElementsByClassName('navitem'));
  var content = document.getElementById('content');
  setTimeout(function () {
    main.forEach(function (el) {
      return el.setAttribute('style', 'opacity: .85');
    });
    content.innerHTML = contents.home;
  }, 100);

  navItems.forEach(function (navItem) {
    navItem.addEventListener('click', toggleActive(navItems, content));
  });
});

var toggleActive = function toggleActive(navItems, content) {
  return function (e) {
    navItems.forEach(function (navItem) {
      var type = navItem.innerText.toLowerCase();
      if (e.target === navItem) {
        navItem.classList.add(type + '-active');
        navItem.classList.remove(type);
        content.innerHTML = contents[type];
      } else {
        navItem.classList.remove(type + '-active');
        navItem.classList.add(type);
      }
    });
  };
};
// width="100%"
// height="100%"

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map