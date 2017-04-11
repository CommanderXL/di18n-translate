(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DI18n"] = factory();
	else
		root["DI18n"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _di18n = __webpack_require__(1);

	_di18n.DI18n.Version = ("0.0.3");

	module.exports = _di18n.DI18n;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DI18n = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _translate = __webpack_require__(2);

	var _translate2 = _interopRequireDefault(_translate);

	var _util = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CLASS_ATTRIBUTE = 'i18n-class';
	var IMG_ATTRIBUTE = 'i18n-img';
	var CONTENT_ATTRIBUTE = 'i18n-content';
	var PLACEHOLDER_ATTRIBUTE = 'i18n-placeholder';
	var LOCALE_PATTERN = /\$\{locale}/g;

	var DI18n = exports.DI18n = function (_T) {
	  _inherits(DI18n, _T);

	  function DI18n() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, DI18n);

	    var _this = _possibleConstructorReturn(this, (DI18n.__proto__ || Object.getPrototypeOf(DI18n)).call(this, options));

	    _this.locale = options.locale || 'en';
	    _this.messages = options.messages || {};
	    _this.isReplace = options.isReplace || false;
	    _this.currMessage = _this.messages[_this.locale];
	    _this.doms = {};

	    if (_this.isReplace) {
	      _this.getDoms();

	      _this.handlerClass();
	      _this.handlerImg();
	      _this.handlerContent();
	      _this.handlerInput();
	    }
	    return _this;
	  }

	  _createClass(DI18n, [{
	    key: 'getDoms',
	    value: function getDoms() {
	      this.doms = {
	        classDoms: document.querySelectorAll('[' + CLASS_ATTRIBUTE + ']'),
	        imgDoms: document.querySelectorAll('[' + IMG_ATTRIBUTE + ']'),
	        contentDoms: document.querySelectorAll('[' + CONTENT_ATTRIBUTE + ']'),
	        inputDoms: document.querySelectorAll('[' + PLACEHOLDER_ATTRIBUTE + ']')
	      };
	    }
	  }, {
	    key: 'handlerClass',
	    value: function handlerClass() {
	      this.doms.classDoms.forEach(function (dom, index) {
	        (0, _util.addClass)(dom, dom.getAttribute(CLASS_ATTRIBUTE));
	      });
	    }
	  }, {
	    key: 'handlerImg',
	    value: function handlerImg() {
	      var _this2 = this;

	      this.doms.imgDoms.forEach(function (dom, index) {
	        var src = dom.getAttribute(IMG_ATTRIBUTE).replace(LOCALE_PATTERN, _this2.locale);
	        dom.src = src;
	      });
	    }
	  }, {
	    key: 'handlerContent',
	    value: function handlerContent() {
	      var _this3 = this;

	      this.doms.contentDoms.forEach(function (dom, index) {
	        var content = dom.getAttribute(CONTENT_ATTRIBUTE);
	        dom.innerHTML = _this3.messages[_this3.locale][content];
	      });
	    }
	  }, {
	    key: 'handlerInput',
	    value: function handlerInput() {
	      var _this4 = this;

	      this.doms.inputDoms.forEach(function (dom, index) {
	        var placeHolderKey = dom.getAttribute(PLACEHOLDER_ATTRIBUTE);
	        dom.setAttribute('placeholder', _this4.currMessage[placeHolderKey]);
	      });
	    }
	  }]);

	  return DI18n;
	}(_translate2.default);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var T = function () {
	  function T(options) {
	    _classCallCheck(this, T);

	    this.locale = options.locale || 'zh';
	    this.messages = options.messages || {};
	  }

	  _createClass(T, [{
	    key: '$t',
	    value: function $t(key) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var str = String(this.messages[this.locale][key]);

	      if (args.length === 1 && _typeof(args[0]) === 'object') {
	        args = args[0];
	      } else {
	        args = {};
	      }

	      if (!args || !args.hasOwnProperty) {
	        args = {};
	      }

	      var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;

	      return str.replace(RE_NARGS, function (match, prefix, i, index) {
	        var result = '';
	        if (str[index - 1] === '{' && str[index + match.length] === '}') {
	          return i;
	        } else {
	          result = args.hasOwnProperty(i) ? args[i] : match;
	          if (!result) {
	            return '';
	          }

	          return result;
	        }
	      });
	    }
	  }]);

	  return T;
	}();

	exports.default = T;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hasClass = hasClass;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	function hasClass(ele, cls) {
	  return new RegExp(cls).test(ele.className || '');
	}

	function addClass(ele, cls) {
	  var _pattern = new RegExp(cls);
	  if (!_pattern.test(ele.className)) ele.className += ' ' + cls;
	  return ele;
	}

	function removeClass(ele, cls) {
	  if (!ele || ele.nodeType !== 1) return;
	  var _pattern = new RegExp(cls);
	  if (_pattern.test(ele.className || '')) ele.className = ele.className.replace(_pattern, '');
	  return ele;
	}

/***/ }
/******/ ])
});
;