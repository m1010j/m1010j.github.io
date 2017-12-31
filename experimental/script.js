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
  home: '\n    <p><img class="portrait" src="./img/matthias-jenny.png" />Hi, I\'m Matthias Jenny, and I\'m a full-stack web developer and teacher with a passion for logic. I\'m based in New York City and I work at <a href="https://www.appacademy.io/">App Academy</a>. I also like <a href="https://500px.com/m1010j">photography</a>.<p>\n    <p>Favorite technologies:</p>\n    <p>\n      <center>\n        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img class="icon" src="./icons/javascript.png" /></a>\n        <a href="https://github.com/facebook/react"><img class="icon" src="./icons/react.png" /></a>\n        <a href="https://www.ruby-lang.org/en/"><img class="icon" src="./icons/ruby.png" /></a>\n        <a href="http://rubyonrails.org/"><img class="icon" src="./icons/rails.png" /></a>\n        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img class="icon" src="./icons/html5.png" /></a>\n        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img class="icon" src="./icons/css3.png" /></a>\n      </center>\n    </p>\n  ',
  projects: '\n    <p>\n      <h1>Andor</h1>\n      <h2><a href="http://matthiasjenny.com/andor/">Live</a> | <a href="https://github.com/m1010j/andor">GitHub</a></h2>\n      <img src="./img/andor.gif" class="project-gif" />\n      An original logic game that teaches players the rules of the Boolean connectives. Built with React and Redux.\n    </p>\n    <p>\n      <h1>LivePoll</h1>\n      <h2><a href="http://live--poll.herokuapp.com">Live</a> | <a href="https://github.com/m1010j/LivePoll">GitHub</a></h2>\n      <img src="./img/livepoll.gif" class="project-gif" />\n      A Poll Everywhere clone built with Rails, React, Redux, Pusher, and AWS.\n    </p>\n  ',
  resume: '\n  <p><a href="./Matthias_Jenny_Resume.pdf"><i class="fa fa-download" aria-hidden="true"></i> Download resume</a></p>\n  <center><iframe\n  src="https://docs.google.com/presentation/d/e/2PACX-1vSvbIgZ_s_z-P2f-WrCXbGA4-nrTgCfU6Zr7ozlHnoViAZ92P2syQZyh22_ZTlmtW2dCbyRHFdcNotw/embed?start=false&loop=false&delayms=1000"\n  frameborder="0"\n  allowfullscreen="true"\n  mozallowfullscreen="true"\n  webkitallowfullscreen="true">\n  </iframe></center>\n  ',
  contact: '\n    <p><a href="mailto:matthiascjenny@gmail.com"><i class="fas fa-envelope"></i> matthiascjenny@gmail.com</a></p>\n    <p><a href="https://github.com/m1010j"><i class="fab fa-github"></i> github.com/m1010j</a></p>\n    <p><a href="https://www.linkedin.com/in/m1010j/"><i class="fab fa-linkedin"></i> linkedin.com/in/m1010j</a></p>\n\n  '
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