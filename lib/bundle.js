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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Carousel = __webpack_require__(2);

$(window).on("DOMContentLoaded", () => {
  const carousel = new Carousel();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Carousel = __webpack_require__(2);

$(window).on("DOMContentLoaded", () => {
  const carousel = new Carousel();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Carousel = __webpack_require__(2);

$(window).on("DOMContentLoaded", () => {
  const carousel = new Carousel();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Carousel = __webpack_require__(2);

$(window).on("DOMContentLoaded", () => {
  const carousel = new Carousel();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Carousel = __webpack_require__(2);

$(window).on("DOMContentLoaded", () => {
  const carousel = new Carousel();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Carousel = __webpack_require__(2);

$(window).on("DOMContentLoaded", () => {
  const carousel = new Carousel();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Carousel = __webpack_require__(2);

$(window).on("DOMContentLoaded", () => {
  const carousel = new Carousel();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Carousel = __webpack_require__(2);

$(window).on("DOMContentLoaded", () => {
  const carousel = new Carousel();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Carousel = __webpack_require__(2);

$(window).on("DOMContentLoaded", () => {
  const carousel = new Carousel();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Carousel = __webpack_require__(2);

$(window).on("DOMContentLoaded", () => {
  const carousel = new Carousel();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Carousel = __webpack_require__(2);

$(window).on("DOMContentLoaded", () => {
  const carousel = new Carousel();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Carousel = __webpack_require__(2);

$(window).on("DOMContentLoaded", () => {
  const carousel = new Carousel();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Carousel = __webpack_require__(2);

$(window).on("DOMContentLoaded", () => {
  const carousel = new Carousel();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Carousel = __webpack_require__(2);

$(window).on("DOMContentLoaded", () => {
  const carousel = new Carousel();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Carousel = __webpack_require__(2);

$(window).on("DOMContentLoaded", () => {
  const carousel = new Carousel();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.update = this.update.bind(this);
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    let that = this;
    $(".next").on("click",function(){
			that.next();
		});
		$(".prev").on("click",function(){
			that.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				that.previous();
			} else if (e.keyCode === 39) {
				that.next();
			}
		});
  }

  next() {
    if (this.currentSlide !== this.slides - 1) {
			this.currentSlide =
			(this.currentSlide + 1) % this.slides;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  previous() {
    if (this.currentSlide !== 0) {
			this.currentSlide = this.currentSlide - 1;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  update() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}

module.exports = Carousel;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Carousel = __webpack_require__(0);

$(window).on("DOMContentLoaded", () => {
  const carousel = new Carousel();
});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.update = this.update.bind(this);
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    let that = this;
    $(".next").on("click",function(){
			that.next();
		});
		$(".prev").on("click",function(){
			that.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				that.previous();
			} else if (e.keyCode === 39) {
				that.next();
			}
		});
  }

  next() {
    if (this.currentSlide !== this.slides - 1) {
			this.currentSlide =
			(this.currentSlide + 1) % this.slides;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  previous() {
    if (this.currentSlide !== 0) {
			this.currentSlide = this.currentSlide - 1;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  update() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}

module.exports = Carousel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.update = this.update.bind(this);
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    let that = this;
    $(".next").on("click",function(){
			that.next();
		});
		$(".prev").on("click",function(){
			that.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				that.previous();
			} else if (e.keyCode === 39) {
				that.next();
			}
		});
  }

  next() {
    if (this.currentSlide !== this.slides - 1) {
			this.currentSlide =
			(this.currentSlide + 1) % this.slides;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  previous() {
    if (this.currentSlide !== 0) {
			this.currentSlide = this.currentSlide - 1;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  update() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}

module.exports = Carousel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.update = this.update.bind(this);
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    let that = this;
    $(".next").on("click",function(){
			that.next();
		});
		$(".prev").on("click",function(){
			that.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				that.previous();
			} else if (e.keyCode === 39) {
				that.next();
			}
		});
  }

  next() {
    if (this.currentSlide !== this.slides - 1) {
			this.currentSlide =
			(this.currentSlide + 1) % this.slides;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  previous() {
    if (this.currentSlide !== 0) {
			this.currentSlide = this.currentSlide - 1;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  update() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}

module.exports = Carousel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.update = this.update.bind(this);
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    let that = this;
    $(".next").on("click",function(){
			that.next();
		});
		$(".prev").on("click",function(){
			that.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				that.previous();
			} else if (e.keyCode === 39) {
				that.next();
			}
		});
  }

  next() {
    if (this.currentSlide !== this.slides - 1) {
			this.currentSlide =
			(this.currentSlide + 1) % this.slides;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  previous() {
    if (this.currentSlide !== 0) {
			this.currentSlide = this.currentSlide - 1;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  update() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}

module.exports = Carousel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.update = this.update.bind(this);
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    let that = this;
    $(".next").on("click",function(){
			that.next();
		});
		$(".prev").on("click",function(){
			that.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				that.previous();
			} else if (e.keyCode === 39) {
				that.next();
			}
		});
  }

  next() {
    if (this.currentSlide !== this.slides - 1) {
			this.currentSlide =
			(this.currentSlide + 1) % this.slides;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  previous() {
    if (this.currentSlide !== 0) {
			this.currentSlide = this.currentSlide - 1;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  update() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}

module.exports = Carousel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.update = this.update.bind(this);
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    let that = this;
    $(".next").on("click",function(){
			that.next();
		});
		$(".prev").on("click",function(){
			that.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				that.previous();
			} else if (e.keyCode === 39) {
				that.next();
			}
		});
  }

  next() {
    if (this.currentSlide !== this.slides - 1) {
			this.currentSlide =
			(this.currentSlide + 1) % this.slides;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  previous() {
    if (this.currentSlide !== 0) {
			this.currentSlide = this.currentSlide - 1;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  update() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}

module.exports = Carousel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.update = this.update.bind(this);
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    let that = this;
    $(".next").on("click",function(){
			that.next();
		});
		$(".prev").on("click",function(){
			that.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				that.previous();
			} else if (e.keyCode === 39) {
				that.next();
			}
		});
  }

  next() {
    if (this.currentSlide !== this.slides - 1) {
			this.currentSlide =
			(this.currentSlide + 1) % this.slides;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  previous() {
    if (this.currentSlide !== 0) {
			this.currentSlide = this.currentSlide - 1;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  update() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}

module.exports = Carousel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.update = this.update.bind(this);
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    let that = this;
    $(".next").on("click",function(){
			that.next();
		});
		$(".prev").on("click",function(){
			that.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				that.previous();
			} else if (e.keyCode === 39) {
				that.next();
			}
		});
  }

  next() {
    if (this.currentSlide !== this.slides - 1) {
			this.currentSlide =
			(this.currentSlide + 1) % this.slides;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  previous() {
    if (this.currentSlide !== 0) {
			this.currentSlide = this.currentSlide - 1;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  update() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}

module.exports = Carousel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.update = this.update.bind(this);
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    let that = this;
    $(".next").on("click",function(){
			that.next();
		});
		$(".prev").on("click",function(){
			that.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				that.previous();
			} else if (e.keyCode === 39) {
				that.next();
			}
		});
  }

  next() {
    if (this.currentSlide !== this.slides - 1) {
			this.currentSlide =
			(this.currentSlide + 1) % this.slides;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  previous() {
    if (this.currentSlide !== 0) {
			this.currentSlide = this.currentSlide - 1;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  update() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}

module.exports = Carousel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.update = this.update.bind(this);
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    let that = this;
    $(".next").on("click",function(){
			that.next();
		});
		$(".prev").on("click",function(){
			that.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				that.previous();
			} else if (e.keyCode === 39) {
				that.next();
			}
		});
  }

  next() {
    if (this.currentSlide !== this.slides - 1) {
			this.currentSlide =
			(this.currentSlide + 1) % this.slides;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  previous() {
    if (this.currentSlide !== 0) {
			this.currentSlide = this.currentSlide - 1;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  update() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}

module.exports = Carousel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.update = this.update.bind(this);
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    let that = this;
    $(".next").on("click",function(){
			that.next();
		});
		$(".prev").on("click",function(){
			that.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				that.previous();
			} else if (e.keyCode === 39) {
				that.next();
			}
		});
  }

  next() {
    if (this.currentSlide !== this.slides - 1) {
			this.currentSlide =
			(this.currentSlide + 1) % this.slides;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  previous() {
    if (this.currentSlide !== 0) {
			this.currentSlide = this.currentSlide - 1;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  update() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}

module.exports = Carousel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.update = this.update.bind(this);
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    let that = this;
    $(".next").on("click",function(){
			that.next();
		});
		$(".prev").on("click",function(){
			that.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				that.previous();
			} else if (e.keyCode === 39) {
				that.next();
			}
		});
  }

  next() {
    if (this.currentSlide !== this.slides - 1) {
			this.currentSlide =
			(this.currentSlide + 1) % this.slides;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  previous() {
    if (this.currentSlide !== 0) {
			this.currentSlide = this.currentSlide - 1;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  update() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}

module.exports = Carousel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.update = this.update.bind(this);
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    let that = this;
    $(".next").on("click",function(){
			that.next();
		});
		$(".prev").on("click",function(){
			that.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				that.previous();
			} else if (e.keyCode === 39) {
				that.next();
			}
		});
  }

  next() {
    if (this.currentSlide !== this.slides - 1) {
			this.currentSlide =
			(this.currentSlide + 1) % this.slides;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  previous() {
    if (this.currentSlide !== 0) {
			this.currentSlide = this.currentSlide - 1;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  update() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}

module.exports = Carousel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.update = this.update.bind(this);
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    let that = this;
    $(".next").on("click",function(){
			that.next();
		});
		$(".prev").on("click",function(){
			that.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				that.previous();
			} else if (e.keyCode === 39) {
				that.next();
			}
		});
  }

  next() {
    if (this.currentSlide !== this.slides - 1) {
			this.currentSlide =
			(this.currentSlide + 1) % this.slides;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  previous() {
    if (this.currentSlide !== 0) {
			this.currentSlide = this.currentSlide - 1;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  update() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}

module.exports = Carousel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.update = this.update.bind(this);
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    let that = this;
    $(".next").on("click",function(){
			that.next();
		});
		$(".prev").on("click",function(){
			that.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				that.previous();
			} else if (e.keyCode === 39) {
				that.next();
			}
		});
  }

  next() {
    if (this.currentSlide !== this.slides - 1) {
			this.currentSlide =
			(this.currentSlide + 1) % this.slides;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  previous() {
    if (this.currentSlide !== 0) {
			this.currentSlide = this.currentSlide - 1;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  update() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}

module.exports = Carousel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map