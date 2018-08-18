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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contents.js":
/*!*********************!*\
  !*** ./contents.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
      <h1><a href="http://async.matthiasjenny.com/">Explorations in Asynchronicity</a> <a href="https://github.com/m1010j/async-explorations"><i class="fab fa-github"></i></a></h1>
      <div class="project-item-detail">
        <a href="http://async.matthiasjenny.com/"><div class="async-explorations-gif"></div></a>
        <div class="project-item-description">
          A benchmark and analysis tool for asynchronous recursive functions
        </div>
      </div>
    </div>
    <div class="project-item">
      <h1><a href="http://www.andor.fun/">Andor</a></h1>
      <div class="project-item-detail">
        <a href="http://www.andor.fun/"><div class="andor-gif"></div></a>
        <div class="project-item-description">
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
        <div class="project-item-description">
          A benchmarking tool for Boolean satisfiability, powered by my boolean-logic library (see below).
        </div>
      </div>
    </div>
    <div class="project-item">
      <h1><a href="https://github.com/m1010j/boolean-logic">boolean-logic</a> <a href="https://github.com/m1010j/boolean-logic"><i class="fab fa-github"></i></a> | <a href="https://www.npmjs.com/package/boolean-logic"><i class="fab fa-npm"></i></a></h1>
      <div class="project-item-detail">
        <a href="https://github.com/m1010j/boolean-logic"><div class="boolean-logic-png"></div></a>
        <div class="project-item-description">
          A lightweight JavaScript library for evaluating formulas of Boolean logic.
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

/* harmony default export */ __webpack_exports__["default"] = (contents);

/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_set_font_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/set_font_size */ "./util/set_font_size.js");
/* harmony import */ var _util_resize_resume__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/resize_resume */ "./util/resize_resume.js");
/* harmony import */ var _util_navigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/navigator */ "./util/navigator.js");
/* harmony import */ var _util_install_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/install_router */ "./util/install_router.js");
/* harmony import */ var _util_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/toggle */ "./util/toggle.js");
/* harmony import */ var _util_event_handlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/event_handlers */ "./util/event_handlers.js");
/* harmony import */ var _contents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contents */ "./contents.js");








document.addEventListener('DOMContentLoaded', function () {
  const main = Array.from(document.getElementsByTagName('main'));
  const navItems = Array.from(document.getElementsByClassName('navitem'));
  const content = document.getElementById('content');

  let hash = 'home';
  if (window.location.hash.length > 0) {
    hash = window.location.hash.slice(1);
  }
  setTimeout(() => {
    main.forEach(el => el.setAttribute('style', 'opacity: 1'));
    Object(_util_toggle__WEBPACK_IMPORTED_MODULE_4__["toggleContent"])(content, navItems, hash);
  }, 100);

  navItems.forEach(navItem => {
    navItem.addEventListener('click', Object(_util_event_handlers__WEBPACK_IMPORTED_MODULE_5__["handleClick"])(navItems, content));
    Object(_util_toggle__WEBPACK_IMPORTED_MODULE_4__["toggleActive"])(navItem, hash);
  });

  Object(_util_set_font_size__WEBPACK_IMPORTED_MODULE_0__["default"])();
  document.addEventListener('resize', _util_resize_resume__WEBPACK_IMPORTED_MODULE_1__["default"]);
  document.addEventListener('orientationchange', _util_set_font_size__WEBPACK_IMPORTED_MODULE_0__["default"]);

  const navItemTexts = Object.keys(_contents__WEBPACK_IMPORTED_MODULE_6__["default"]).sort((a, b) => {
    return _contents__WEBPACK_IMPORTED_MODULE_6__["default"][a][1] - _contents__WEBPACK_IMPORTED_MODULE_6__["default"][b][1];
  });
  Object(_util_install_router__WEBPACK_IMPORTED_MODULE_3__["default"])(navItemTexts, content, navItems);

  const navItemIdx = navItemTexts.indexOf(hash);
  const navigator = new _util_navigator__WEBPACK_IMPORTED_MODULE_2__["default"](navItemTexts, navItemIdx);
  document.onkeydown = navigator.handleKeydown;
  document.addEventListener('touchstart', navigator.handleTouchStart, false);
  document.addEventListener('touchmove', navigator.handleTouchMove, false);
});

/***/ }),

/***/ "./util/event_handlers.js":
/*!********************************!*\
  !*** ./util/event_handlers.js ***!
  \********************************/
/*! exports provided: handleKeyOrSwipe, handleClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleKeyOrSwipe", function() { return handleKeyOrSwipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleClick", function() { return handleClick; });
/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle */ "./util/toggle.js");


const handleKeyOrSwipe = (navItems, nextLocation) => {
  navItems.forEach(navItem => {
    Object(_toggle__WEBPACK_IMPORTED_MODULE_0__["toggleActive"])(navItem, nextLocation);
  });
};

const handleClick = (navItems, content) => {
  return e => {
    navItems.forEach(navItem => {
      const hash = e.target.innerText.toLowerCase();
      Object(_toggle__WEBPACK_IMPORTED_MODULE_0__["toggleActive"])(navItem, hash);
    });
  };
};

/***/ }),

/***/ "./util/install_router.js":
/*!********************************!*\
  !*** ./util/install_router.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contents */ "./contents.js");
/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle */ "./util/toggle.js");



/* harmony default export */ __webpack_exports__["default"] = ((navItemTexts, content, navItems) => {
  window.onhashchange = e => {
    const hash = e.newURL.split('#')[1];
    if (navItemTexts.includes(hash)) {
      Object(_toggle__WEBPACK_IMPORTED_MODULE_1__["toggleContent"])(content, navItems, hash);
    }
  };
});

/***/ }),

/***/ "./util/navigator.js":
/*!***************************!*\
  !*** ./util/navigator.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_handlers */ "./util/event_handlers.js");


/* harmony default export */ __webpack_exports__["default"] = (class {
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
      Object(_event_handlers__WEBPACK_IMPORTED_MODULE_0__["handleKeyOrSwipe"])(this.navItems, nextLocation);
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
    Object(_event_handlers__WEBPACK_IMPORTED_MODULE_0__["handleKeyOrSwipe"])(this.navItems, nextLocation);
    this.xDown = null;
    this.yDown = null;
  }
});

/***/ }),

/***/ "./util/resize_resume.js":
/*!*******************************!*\
  !*** ./util/resize_resume.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _set_font_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_font_size */ "./util/set_font_size.js");


/* harmony default export */ __webpack_exports__["default"] = (() => {
  Object(_set_font_size__WEBPACK_IMPORTED_MODULE_0__["default"])();
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

/***/ "./util/set_font_size.js":
/*!*******************************!*\
  !*** ./util/set_font_size.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
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

/***/ "./util/toggle.js":
/*!************************!*\
  !*** ./util/toggle.js ***!
  \************************/
/*! exports provided: toggleActive, toggleHash, toggleContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleActive", function() { return toggleActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleHash", function() { return toggleHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleContent", function() { return toggleContent; });
/* harmony import */ var _resize_resume__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize_resume */ "./util/resize_resume.js");
/* harmony import */ var _contents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contents */ "./contents.js");



const toggleActive = (navItem, hash) => {
  const type = navItem.innerText.toLowerCase();
  if (hash === type) {
    toggleHash(type);
  }
};

const toggleHash = type => {
  window.location = `#${type}`;
  if (type === 'resume') {
    setTimeout(_resize_resume__WEBPACK_IMPORTED_MODULE_0__["default"], 500);
  }
};

const toggleContent = (content, navItems, hash) => {
  content.innerHTML = _contents__WEBPACK_IMPORTED_MODULE_1__["default"][hash][0];
  navItems.forEach(navItem => {
    const type = navItem.innerText.toLowerCase();
    if (hash === type) {
      navItem.classList.add(`${type}-active`);
      navItem.classList.remove(type);
    } else {
      navItem.classList.remove(`${type}-active`);
      navItem.classList.add(type);
    }
    if (hash === 'resume') {
      setTimeout(_resize_resume__WEBPACK_IMPORTED_MODULE_0__["default"], 300);
    }
  });
};

/***/ })

/******/ });
//# sourceMappingURL=script.js.map