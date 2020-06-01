module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\Button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Button = ({
  buttonStyle,
  text
}) => __jsx("button", {
  style: buttonStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, text);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/CertifiedSection.js":
/*!****************************************!*\
  !*** ./components/CertifiedSection.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\CertifiedSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const headerStyle = {};
const sectionStyle = {
  position: "relative",
  backgroundImage: "url(/Vector.svg)",
  backgroundRepeat: "no-repeat",
  height: "800px",
  backgroundSize: "50%",
  backgroundPosition: "-30% 140%"
};
const buttonStyle = {
  textTransform: "Capitalize",
  display: "block",
  margin: "3rem auto",
  letterSpacing: "3px",
  padding: "8px 15px",
  borderRadius: "5px",
  background: "linear-gradient(233.06deg, #FE1903 -61.81%, #F8710F 74.41%)"
};

const CertifiedSection = () => __jsx("div", {
  style: sectionStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "container",
  style: {
    marginTop: "15rem"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 4
  }
}, __jsx("h1", {
  className: "my-5 text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 8
  }
}, "Become a certified photographer"), __jsx("div", {
  className: "col-md-8 mx-auto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 8
  }
}, __jsx("p", {
  className: "text-center",
  style: {
    fontSize: "13px"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 8
  }
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna")), __jsx(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: "Get Started",
  buttonStyle: buttonStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 8
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (CertifiedSection);

/***/ }),

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WorkSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkSub */ "./components/WorkSub.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\Contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const formElementStyle = {
  background: "#0A0F14",
  color: "white",
  border: "none"
};
const buttonStyle = {
  display: "block",
  margin: "auto",
  width: "200px",
  padding: "2px",
  borderRadius: "4px",
  fontSize: "12px",
  letterSpacing: "3px",
  background: "linear-gradient(233.06deg, #FE1903 -61.81%, #F8710F 74.41%) !important"
};

const Contact = () => __jsx("div", {
  style: {
    background: "black",
    padding: "6rem 0rem",
    minHeight: "700px"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 4
  }
}, __jsx("h1", {
  className: "text-center my-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 8
  }
}, "Contact"), __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 8
  }
}, __jsx("div", {
  className: "col-md-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 12
  }
}, __jsx("h2", {
  className: "mt-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 16
  }
}, "Feedbacks"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 16
  }
}, "Get in touch with us and we will serve you to your satisfactions, we would respond to your enquiries as quick as within an hour of you messaging us"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 16
  }
}, "Also let us know what you think about our products and service and how we can improve on them, your positive feedbacks and criticisms are highly regarded and will be put into consideration")), __jsx("div", {
  className: "col-md-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 12
  }
}, __jsx("div", {
  className: "form-row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 16
  }
}, __jsx("div", {
  className: "col-md-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 20
  }
}, __jsx("div", {
  className: "form-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 21
  }
}, __jsx("input", {
  style: formElementStyle,
  className: "form-control",
  type: "text",
  placeholder: "First Name",
  name: "first-name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 29
  }
}))), __jsx("div", {
  className: "col-md-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 20
  }
}, __jsx("div", {
  className: "form-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 25
  }
}, __jsx("input", {
  style: formElementStyle,
  className: "form-control",
  type: "text",
  placeholder: "Last Name",
  name: "last-name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 29
  }
})))), __jsx("div", {
  className: "form-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 16
  }
}, __jsx("input", {
  style: formElementStyle,
  className: "form-control",
  type: "email",
  placeholder: "Email",
  name: "email",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 20
  }
})), __jsx("div", {
  className: "form-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 16
  }
}, __jsx("textarea", {
  style: {
    height: "300px",
    background: "#0A0F14",
    color: "white",
    border: "none"
  },
  className: "form-control",
  type: "text",
  placeholder: "Comment",
  name: "comment",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 20
  }
})), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  text: "Send",
  style: buttonStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 16
  }
})))));

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WorkSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkSub */ "./components/WorkSub.js");
/* harmony import */ var _FooterList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterList */ "./components/FooterList.js");
/* harmony import */ var _FooterSub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterSub */ "./components/FooterSub.js");
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const text1 = ["Photography", "Videography", "Training", "Model shot", "Wedding Coverage", "Video Directing"];
const text2 = ["Photography", "Videography", "Training", "Video Making"];

const Footer = () => __jsx("div", {
  style: {
    background: "#0A0F14",
    paddingBottom: ""
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "container my-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 4
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 8
  }
}, __jsx("div", {
  className: "col-md-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 12
  }
}, __jsx(_FooterList__WEBPACK_IMPORTED_MODULE_2__["default"], {
  text: text1,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 38
  }
})), __jsx("div", {
  className: "col-md-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 12
  }
}, __jsx(_FooterList__WEBPACK_IMPORTED_MODULE_2__["default"], {
  text: text2,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 38
  }
})), __jsx("div", {
  className: "col-md-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 13
  }
}), __jsx("div", {
  className: "col-md-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 13
  }
}, __jsx("img", {
  alt: "Bigtime Logo",
  style: {
    width: "100%"
  },
  src: "/logo2.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 17
  }
}), __jsx("p", {
  className: "text-center text-secondary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 17
  }
}, "info@bigtime.com")))), __jsx(_FooterSub__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/FooterList.js":
/*!**********************************!*\
  !*** ./components/FooterList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Card */ "react-bootstrap/Card");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\FooterList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const buttonStyle = {
  display: "block",
  margin: "auto",
  width: "200px",
  padding: "2px",
  borderRadius: "4px",
  fontSize: "12px",
  letterSpacing: "3px",
  background: "linear-gradient(233.06deg, #FE1903 -61.81%, #F8710F 74.41%)"
};
const textStyle = {
  letterSpacing: "2px"
};

const FooterList = ({
  text
}) => __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }
}, text.map((res, key) => __jsx("li", {
  style: {
    listStyle: "none"
  },
  className: "text-secondary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 13
  }
}, res)));

/* harmony default export */ __webpack_exports__["default"] = (FooterList);

/***/ }),

/***/ "./components/FooterSub.js":
/*!*********************************!*\
  !*** ./components/FooterSub.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\FooterSub.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FooterSub = () => __jsx("div", {
  style: {
    background: "black"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "text-default px-5",
  style: {
    height: "80px",
    backgroundColor: "black"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 4
  }
}, __jsx("p", {
  className: "text-secondary",
  style: {
    paddingTop: "2rem"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 6
  }
}, " Copyright 2020", __jsx("span", {
  style: {
    marginLeft: "10rem"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 80
  }
}, "Developed by Vimeron Tech"))));

/* harmony default export */ __webpack_exports__["default"] = (FooterSub);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// components/Header.js



const headerStyle = {
  position: "relative",
  background: "url(https://images.pexels.com/photos/1595233/pexels-photo-1595233.jpeg?auto=compress&cs=tinysrgb&dpr=4&w=500)",
  // width: "2309px",
  minHeight: "700px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "content",
  fontFamily: "Alegreya Sans",
  fontFtyle: "normal",
  fontWeight: "normal",
  fontSize: "30px",
  lineHeight: "36px",
  color: "white",
  backgroundPosition: "left top",
  opacity: 1
};
const buttonStyle = {
  width: "200px",
  padding: "5px",
  background: "linear-gradient(233.06deg, #FE1903 -61.81%, #F8710F 74.41%)"
};
const buttonWatchStyle = {
  minWidth: "200px",
  padding: "5px",
  background: "transparent",
  border: "2px solid white",
  marginLeft: "15px"
};
const text = "Training";
const textWatch = "Watch Video";
const imgStyle = {
  opacity: 1,
  fontSize: "140px",
  fontWeight: 900,
  textAlign: "center",
  marginTop: "15rem"
};

const Header = () => __jsx("div", {
  className: "Header",
  style: headerStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }
}, __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 10
  }
}), __jsx("div", {
  className: "container mt-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 10
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "col-md mt-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 15
  }
}, __jsx("h1", {
  className: "font-weight-bolder mt-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 17
  }
}, "Photography For the Future"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 17
  }
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 17
  }
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 17
  }
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna")), __jsx("div", {
  className: "col-md",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 15
  }
}, __jsx("h1", {
  style: imgStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 19
  }
}, "BTS"), __jsx("div", {
  className: "centerWrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 19
  }
}, __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  buttonStyle: buttonStyle,
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 19
  }
}), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  buttonStyle: buttonWatchStyle,
  text: textWatch,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 19
  }
}))))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// components/Layout.js

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  margin: "0px",
  padding: "0px"
};
const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const Layout = props => __jsx("div", {
  className: "Layout",
  style: layoutStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }
}), __jsx("div", {
  className: "Content",
  style: contentStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }
}, props.children));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/FormControl */ "react-bootstrap/FormControl");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\NavBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// components/NavBar.js





const navBarStyle = {
  background: "transparent",
  color: "white",
  width: "100%",
  height: "60px"
};
const logoStyle = {
  height: "60px"
};

const NavBar = () => __jsx("div", {
  className: "navBarContainer",
  style: navBarStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
}, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
  className: "navBarContainer",
  bg: "",
  variant: "dark",
  className: "navbar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }
}, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default.a.Brand, {
  href: "#home",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }
}, __jsx("img", {
  src: "/logo.png",
  style: logoStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 34
  }
})), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a, {
  className: "ml-auto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 7
  }
}, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#home",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
}, "Home"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#features",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}, "Work"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#pricing",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}, "Training"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#pricing",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }
}, "Contact"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#pricing",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}, "About"))));

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/ServiceCard.js":
/*!***********************************!*\
  !*** ./components/ServiceCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WorkSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkSub */ "./components/WorkSub.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\ServiceCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const text = {
  title: "Great up",
  link: "/link",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  pix: "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
};
const buttonStyle = {
  display: "block",
  margin: "1rem auto  3rem  auto",
  width: "200px",
  padding: "2px",
  borderRadius: "4px",
  fontSize: "12px",
  letterSpacing: "3px",
  background: "linear-gradient(233.06deg, #FE1903 -61.81%, #F8710F 74.41%)"
};

const ServiceCard = () => __jsx("div", {
  style: {
    border: "1px solid white",
    padding: "3rem 1rem 1rem 1rem"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }
}, __jsx("p", {
  className: "text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  buttonStyle: buttonStyle,
  text: "Photography",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}), __jsx("p", {
  className: "text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  buttonStyle: buttonStyle,
  text: "Movie Making",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }
}), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }
}), __jsx("p", {
  className: "text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  buttonStyle: buttonStyle,
  text: "Model Works",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (ServiceCard);

/***/ }),

/***/ "./components/Services.js":
/*!********************************!*\
  !*** ./components/Services.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ServiceCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceCard */ "./components/ServiceCard.js");
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\Services.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const text = {
  title: "Great up",
  link: "/link",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  pix: "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
};
const ContainerStyle = {
  position: "relative",
  background: "url( https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&dpr=4&w=500)",
  // width: "2309px",
  height: "800px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "content",
  fontFamily: "Alegreya Sans",
  fontFtyle: "normal",
  fontWeight: "normal",
  fontSize: "30px",
  lineHeight: "36px",
  color: "white",
  backgroundPosition: "left top",
  opacity: 1
};

const Service = () => __jsx("div", {
  style: ContainerStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "container my-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 4
  }
}, __jsx("h1", {
  className: "my-5 text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 8
  }
}, "Service"), __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 8
  }
}, __jsx("div", {
  className: "col-md-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 12
  }
}, __jsx(_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 38
  }
})))));

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ }),

/***/ "./components/WorkSub.js":
/*!*******************************!*\
  !*** ./components/WorkSub.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Card */ "react-bootstrap/Card");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\WorkSub.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const buttonStyle = {
  display: "block",
  margin: "auto",
  width: "200px",
  padding: "2px",
  borderRadius: "4px",
  fontSize: "12px",
  letterSpacing: "3px",
  background: "linear-gradient(233.06deg, #FE1903 -61.81%, #F8710F 74.41%)"
};
const textStyle = {
  letterSpacing: "2px"
};

const WorkSub = ({
  text
}) => __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
  style: {
    backgroundColor: "#301929"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }
}, __jsx("a", {
  href: text.link,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Img, {
  variant: "top",
  src: text.pix,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 25
  }
})), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Title, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }
}, text.title), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Text, {
  style: textStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }
}, text.description), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  buttonStyle: buttonStyle,
  text: "See more",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (WorkSub);

/***/ }),

/***/ "./components/Works.js":
/*!*****************************!*\
  !*** ./components/Works.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WorkSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkSub */ "./components/WorkSub.js");
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\Works.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const text = {
  title: "Great up",
  link: "/link",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  pix: "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
};
const headerStyle = {};

const Works = () => __jsx("div", {
  style: {
    background: "#0A0F14",
    minHeight: "800px",
    paddingBottom: "4rem"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "container my-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 4
  }
}, __jsx("h1", {
  className: "",
  style: {
    marginBottom: "6rem",
    marginTop: "4rem"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 8
  }
}, "Discover Our Works"), __jsx("div", {
  className: "row ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 8
  }
}, __jsx("div", {
  className: "col-md-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 12
  }
}, __jsx(_WorkSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 38
  }
})), __jsx("div", {
  className: "col-md-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 12
  }
}, __jsx(_WorkSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 38
  }
})), __jsx("div", {
  className: "col-md-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 13
  }
}, __jsx(_WorkSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 39
  }
})), __jsx("div", {
  className: "col-md-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 13
  }
}, __jsx(_WorkSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 39
  }
})))));

/* harmony default export */ __webpack_exports__["default"] = (Works);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Works__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Works */ "./components/Works.js");
/* harmony import */ var _components_CertifiedSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CertifiedSection */ "./components/CertifiedSection.js");
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Services */ "./components/Services.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// pages/index.js
{
  /* <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> */
}







const Index = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 21
  }
}, __jsx(_components_Works__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}), __jsx(_components_CertifiedSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
}), __jsx(_components_Services__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }
}), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Viktor\Desktop\Pazon\Bigtime-Project\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Card":
/*!***************************************!*\
  !*** external "react-bootstrap/Card" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Card");

/***/ }),

/***/ "react-bootstrap/Col":
/*!**************************************!*\
  !*** external "react-bootstrap/Col" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "react-bootstrap/FormControl":
/*!**********************************************!*\
  !*** external "react-bootstrap/FormControl" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/FormControl");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Row");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DZXJ0aWZpZWRTZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXJTdWIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXJ2aWNlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV29ya1N1Yi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dvcmtzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiIl0sIm5hbWVzIjpbIkJ1dHRvbiIsImJ1dHRvblN0eWxlIiwidGV4dCIsImhlYWRlclN0eWxlIiwic2VjdGlvblN0eWxlIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiaGVpZ2h0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJ0ZXh0VHJhbnNmb3JtIiwiZGlzcGxheSIsIm1hcmdpbiIsImxldHRlclNwYWNpbmciLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsIkNlcnRpZmllZFNlY3Rpb24iLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsImZvcm1FbGVtZW50U3R5bGUiLCJjb2xvciIsImJvcmRlciIsIndpZHRoIiwiQ29udGFjdCIsIm1pbkhlaWdodCIsInRleHQxIiwidGV4dDIiLCJGb290ZXIiLCJwYWRkaW5nQm90dG9tIiwidGV4dFN0eWxlIiwiRm9vdGVyTGlzdCIsIm1hcCIsInJlcyIsImtleSIsImxpc3RTdHlsZSIsIkZvb3RlclN1YiIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmdUb3AiLCJtYXJnaW5MZWZ0IiwiZm9udEZhbWlseSIsImZvbnRGdHlsZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0Iiwib3BhY2l0eSIsImJ1dHRvbldhdGNoU3R5bGUiLCJtaW5XaWR0aCIsInRleHRXYXRjaCIsImltZ1N0eWxlIiwidGV4dEFsaWduIiwiSGVhZGVyIiwibGF5b3V0U3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwiY29udGVudFN0eWxlIiwiZmxleCIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJuYXZCYXJTdHlsZSIsImxvZ29TdHlsZSIsIk5hdkJhciIsInRpdGxlIiwibGluayIsImRlc2NyaXB0aW9uIiwicGl4IiwiU2VydmljZUNhcmQiLCJDb250YWluZXJTdHlsZSIsIlNlcnZpY2UiLCJXb3JrU3ViIiwi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QUMxQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuY29uc3QgQnV0dG9uID0gKHtidXR0b25TdHlsZSwgdGV4dH0pID0+IChcclxuICAgIDxidXR0b24gIHN0eWxlPXtidXR0b25TdHlsZX0+XHJcbiAgICAgICAge3RleHR9XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xyXG5cclxuXHJcbmNvbnN0IGhlYWRlclN0eWxlPXtcclxuICAgIFxyXG59IFxyXG5cclxuY29uc3Qgc2VjdGlvblN0eWxlID17XHJcbiAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCIsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6XCJ1cmwoL1ZlY3Rvci5zdmcpXCIsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0Olwibm8tcmVwZWF0XCIsXHJcbiAgICBoZWlnaHQ6XCI4MDBweFwiLFxyXG4gICAgYmFja2dyb3VuZFNpemU6XCI1MCVcIixcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjpcIi0zMCUgMTQwJVwiLFxyXG5cclxuXHJcblxyXG59XHJcbmNvbnN0ICBidXR0b25TdHlsZT0ge1xyXG4gICAgdGV4dFRyYW5zZm9ybTogXCJDYXBpdGFsaXplXCIsXHJcbiAgICBkaXNwbGF5OlwiYmxvY2tcIixcclxuICAgIG1hcmdpbjpcIjNyZW0gYXV0b1wiLFxyXG4gICAgbGV0dGVyU3BhY2luZzpcIjNweFwiLFxyXG4gICAgcGFkZGluZzpcIjhweCAxNXB4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6XCI1cHhcIixcclxuICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDIzMy4wNmRlZywgI0ZFMTkwMyAtNjEuODElLCAjRjg3MTBGIDc0LjQxJSlcIixcclxuXHJcblxyXG59XHJcblxyXG5jb25zdCBDZXJ0aWZpZWRTZWN0aW9uID0gKCkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17c2VjdGlvblN0eWxlfT5cclxuICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17e21hcmdpblRvcDpcIjE1cmVtXCJ9fSA+XHJcbiAgICAgICA8aDEgY2xhc3NOYW1lPVwibXktNSB0ZXh0LWNlbnRlclwiPkJlY29tZSBhIGNlcnRpZmllZCBwaG90b2dyYXBoZXI8L2gxPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBteC1hdXRvXCI+XHJcbiAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7Zm9udFNpemU6XCIxM3B4XCJ9fT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hPC9wPlxyXG4gICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgPEJ1dHRvbiAgdGV4dD1cIkdldCBTdGFydGVkXCIgYnV0dG9uU3R5bGU9e2J1dHRvblN0eWxlfSAvPlxyXG4gICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKTtcclxuICBleHBvcnQgZGVmYXVsdCBDZXJ0aWZpZWRTZWN0aW9uOyIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXb3JrU3ViIGZyb20gXCIuL1dvcmtTdWJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XHJcblxyXG5jb25zdCBmb3JtRWxlbWVudFN0eWxlPXtcclxuICAgIGJhY2tncm91bmQ6XCIjMEEwRjE0XCIsXHJcbiAgICBjb2xvcjpcIndoaXRlXCIsXHJcbiAgICBib3JkZXI6XCJub25lXCJcclxufSBcclxuXHJcbmNvbnN0IGJ1dHRvblN0eWxlID17XHJcbiAgICBkaXNwbGF5OlwiYmxvY2tcIixcclxuICAgIG1hcmdpbjpcImF1dG9cIixcclxuICAgIHdpZHRoOlwiMjAwcHhcIixcclxuICAgIHBhZGRpbmc6XCIycHhcIixcclxuICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxyXG4gICAgZm9udFNpemU6XCIxMnB4XCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOlwiM3B4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgyMzMuMDZkZWcsICNGRTE5MDMgLTYxLjgxJSwgI0Y4NzEwRiA3NC40MSUpICFpbXBvcnRhbnRcIlxyXG59XHJcblxyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiYmxhY2tcIiwgcGFkZGluZzpcIjZyZW0gMHJlbVwiLCBtaW5IZWlnaHQ6XCI3MDBweFwiLCB9fT5cclxuICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiA+XHJcbiAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktNVwiPkNvbnRhY3Q8L2gxPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC01XCI+RmVlZGJhY2tzPC9oMj5cclxuICAgICAgICAgICAgICAgPHA+R2V0IGluIHRvdWNoIHdpdGggdXMgYW5kIHdlIHdpbGwgc2VydmUgeW91IHRvIHlvdXIgc2F0aXNmYWN0aW9ucywgd2Ugd291bGQgcmVzcG9uZCB0byB5b3VyIGVucXVpcmllcyBhcyBxdWljayBhcyB3aXRoaW4gYW4gaG91ciBvZiB5b3UgbWVzc2FnaW5nIHVzPC9wPlxyXG4gICAgICAgICAgICAgICA8cD5BbHNvIGxldCB1cyBrbm93IHdoYXQgeW91IHRoaW5rIGFib3V0IG91ciBwcm9kdWN0cyBhbmQgc2VydmljZSBhbmQgaG93IHdlIGNhbiBpbXByb3ZlIG9uIHRoZW0sIHlvdXIgcG9zaXRpdmUgZmVlZGJhY2tzIGFuZCBjcml0aWNpc21zIGFyZSBoaWdobHkgcmVnYXJkZWQgYW5kIHdpbGwgYmUgcHV0IGludG8gY29uc2lkZXJhdGlvbjwvcD5cclxuICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIHN0eWxlPXtmb3JtRWxlbWVudFN0eWxlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiIG5hbWUgPVwiZmlyc3QtbmFtZVwiIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBzdHlsZT17Zm9ybUVsZW1lbnRTdHlsZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiIG5hbWUgPVwibGFzdC1uYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtmb3JtRWxlbWVudFN0eWxlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgbmFtZSA9XCJlbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PiBcclxuXHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHN0eWxlPXt7aGVpZ2h0OlwiMzAwcHhcIiwgIGJhY2tncm91bmQ6XCIjMEEwRjE0XCIsIGNvbG9yOlwid2hpdGVcIiwgIGJvcmRlcjpcIm5vbmVcIiwgfX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT0gXCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDb21tZW50XCIgbmFtZT1cImNvbW1lbnRcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj4gXHJcblxyXG4gICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJTZW5kXCIgc3R5bGU9e2J1dHRvblN0eWxlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7IiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFdvcmtTdWIgZnJvbSBcIi4vV29ya1N1YlwiO1xyXG5pbXBvcnQgRm9vdGVyTGlzdCBmcm9tIFwiLi9Gb290ZXJMaXN0XCI7XHJcbmltcG9ydCBGb290ZXJTdWIgZnJvbSBcIi4vRm9vdGVyU3ViXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IHRleHQxPSBbIFwiUGhvdG9ncmFwaHlcIixcIlZpZGVvZ3JhcGh5XCIsXCJUcmFpbmluZ1wiLCBcIk1vZGVsIHNob3RcIiwgXCJXZWRkaW5nIENvdmVyYWdlXCIsIFwiVmlkZW8gRGlyZWN0aW5nXCJdXHJcbmNvbnN0IHRleHQyPSBbIFwiUGhvdG9ncmFwaHlcIixcIlZpZGVvZ3JhcGh5XCIsXCJUcmFpbmluZ1wiLFwiVmlkZW8gTWFraW5nXCJdXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwQTBGMTRcIiwgcGFkZGluZ0JvdHRvbTpcIlwifX0+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG15LTVcIiA+XHJcbiAgICAgICB7LyogPGgxIGNsYXNzTmFtZT1cIm15LTVcIj5EaXNjb3ZlciBPdXIgV29ya3M8L2gxPiAqL31cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPjxGb290ZXJMaXN0IHRleHQ9e3RleHQxfSAvPjwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj48Rm9vdGVyTGlzdCB0ZXh0PXt0ZXh0Mn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIkJpZ3RpbWUgTG9nb1wiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSBzcmM9XCIvbG9nbzIucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc2Vjb25kYXJ5XCI+aW5mb0BiaWd0aW1lLmNvbTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gICAgPEZvb3RlclN1YiAvPlxyXG4gICA8L2Rpdj5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIlxyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCJcclxuXHJcbmNvbnN0IGJ1dHRvblN0eWxlID17XHJcbiAgICBkaXNwbGF5OlwiYmxvY2tcIixcclxuICAgIG1hcmdpbjpcImF1dG9cIixcclxuICAgIHdpZHRoOlwiMjAwcHhcIixcclxuICAgIHBhZGRpbmc6XCIycHhcIixcclxuICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxyXG4gICAgZm9udFNpemU6XCIxMnB4XCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOlwiM3B4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgyMzMuMDZkZWcsICNGRTE5MDMgLTYxLjgxJSwgI0Y4NzEwRiA3NC40MSUpXCJcclxuICB9XHJcblxyXG4gIGNvbnN0IHRleHRTdHlsZSA9e1xyXG4gICAgICBsZXR0ZXJTcGFjaW5nOlwiMnB4XCJcclxuXHJcbiAgfVxyXG5jb25zdCBGb290ZXJMaXN0ID0gKHt0ZXh0fSkgPT4gKFxyXG4gICAgPHVsPlxyXG4gICAgICAgIHt0ZXh0Lm1hcCgocmVzLCBrZXkpPT5cclxuICAgICAgICAgICAgPGxpIHN0eWxlPXt7bGlzdFN0eWxlOlwibm9uZVwifX0gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIj57cmVzfTwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxuICBleHBvcnQgZGVmYXVsdCBGb290ZXJMaXN0OyIsIlxyXG5cclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5jb25zdCBGb290ZXJTdWIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDpcImJsYWNrXCJ9fT5cclxuICBcclxuICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRlZmF1bHQgcHgtNVwiIHN0eWxlPXt7aGVpZ2h0OlwiODBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiLH19PlxyXG4gICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5XCIgc3R5bGU9e3twYWRkaW5nVG9wOlwiMnJlbVwifX0gPiBDb3B5cmlnaHQgMjAyMDxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcmVtXCJ9fT5EZXZlbG9wZWQgYnkgVmltZXJvbiBUZWNoPC9zcGFuPjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuIFxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgRm9vdGVyU3ViOyIsIi8vIGNvbXBvbmVudHMvSGVhZGVyLmpzXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vTmF2QmFyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCJcclxuXHJcblxyXG5jb25zdCBoZWFkZXJTdHlsZSA9IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInVybChodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xNTk1MjMzL3BleGVscy1waG90by0xNTk1MjMzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9NCZ3PTUwMClcIixcclxuICAgIC8vIHdpZHRoOiBcIjIzMDlweFwiLFxyXG4gICAgbWluSGVpZ2h0OiBcIjcwMHB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0Olwibm8tcmVwZWF0XCIsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTpcImNvbnRlbnRcIixcclxuICAgIGZvbnRGYW1pbHk6IFwiQWxlZ3JleWEgU2Fuc1wiLFxyXG4gICAgZm9udEZ0eWxlOiBcIm5vcm1hbFwiLFxyXG4gICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcclxuICAgIGZvbnRTaXplOiBcIjMwcHhcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMzZweFwiLFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjpcImxlZnQgdG9wXCIsXHJcbiAgICBvcGFjaXR5OjFcclxuICB9O1xyXG5cclxuY29uc3QgYnV0dG9uU3R5bGUgPXtcclxuICB3aWR0aDpcIjIwMHB4XCIsXHJcbiAgcGFkZGluZzpcIjVweFwiLFxyXG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDIzMy4wNmRlZywgI0ZFMTkwMyAtNjEuODElLCAjRjg3MTBGIDc0LjQxJSlcIlxyXG59XHJcblxyXG5jb25zdCBidXR0b25XYXRjaFN0eWxlID17XHJcbiAgbWluV2lkdGg6XCIyMDBweFwiLFxyXG4gIHBhZGRpbmc6XCI1cHhcIixcclxuICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgYm9yZGVyOlwiMnB4IHNvbGlkIHdoaXRlXCIsXHJcbiAgbWFyZ2luTGVmdDpcIjE1cHhcIlxyXG5cclxufVxyXG5jb25zdCB0ZXh0PSBcIlRyYWluaW5nXCI7XHJcbmNvbnN0IHRleHRXYXRjaD0gXCJXYXRjaCBWaWRlb1wiO1xyXG5cclxuICAgY29uc3QgaW1nU3R5bGUgPXtcclxuICAgIG9wYWNpdHk6MSxcclxuICAgIGZvbnRTaXplOlwiMTQwcHhcIixcclxuICAgIGZvbnRXZWlnaHQ6OTAwLFxyXG4gICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbiAgICBtYXJnaW5Ub3A6XCIxNXJlbVwiXHJcbiAgIH1cclxuICBjb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlclwiIHN0eWxlPXtoZWFkZXJTdHlsZX0+XHJcbiAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kIG10LTVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkZXIgbXQtNVwiPlBob3RvZ3JhcGh5IEZvciB0aGUgRnV0dXJlPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmE8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXtpbWdTdHlsZX0gID5cclxuICAgICAgICAgICAgICAgICAgICBCVFNcclxuICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiY2VudGVyV3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGJ1dHRvblN0eWxlPXtidXR0b25TdHlsZX0gdGV4dD17dGV4dH0+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvbldhdGNoU3R5bGV9IHRleHQ9e3RleHRXYXRjaH0+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsIi8vIGNvbXBvbmVudHMvTGF5b3V0LmpzXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5cclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxuICBtYXJnaW46XCIwcHhcIixcclxuICBwYWRkaW5nOlwiMHB4XCJcclxufTtcclxuXHJcbmNvbnN0IGNvbnRlbnRTdHlsZSA9IHtcclxuICBmbGV4OiAxLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCJcclxufTtcclxuXHJcbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cIkxheW91dFwiIHN0eWxlPXtsYXlvdXRTdHlsZX0+XHJcblxyXG4gICAgPEhlYWRlciAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJDb250ZW50XCIgc3R5bGU9e2NvbnRlbnRTdHlsZX0+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsIi8vIGNvbXBvbmVudHMvTmF2QmFyLmpzXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2wnO1xyXG5cclxuXHJcbmNvbnN0IG5hdkJhclN0eWxlID0ge1xyXG4gICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCI2MHB4XCJcclxuICB9O1xyXG4gIGNvbnN0IGxvZ29TdHlsZSA9IHtcclxuICAgIGhlaWdodDpcIjYwcHhcIixcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgTmF2QmFyID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZCYXJDb250YWluZXJcIiBzdHlsZT17bmF2QmFyU3R5bGV9PlxyXG4gICAgPE5hdmJhciBjbGFzc05hbWU9XCJuYXZCYXJDb250YWluZXJcIiBiZz1cIlwiIHZhcmlhbnQ9XCJkYXJrXCIgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCI+PGltZyBzcmM9XCIvbG9nby5wbmdcIiBzdHlsZT17bG9nb1N0eWxlfS8+PC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxyXG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiI2hvbWVcIj5Ib21lPC9OYXYuTGluaz5cclxuICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNmZWF0dXJlc1wiPldvcms8L05hdi5MaW5rPlxyXG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiI3ByaWNpbmdcIj5UcmFpbmluZzwvTmF2Lkxpbms+XHJcbiAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjcHJpY2luZ1wiPkNvbnRhY3Q8L05hdi5MaW5rPlxyXG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiI3ByaWNpbmdcIj5BYm91dDwvTmF2Lkxpbms+XHJcbiAgICAgIDwvTmF2PlxyXG4gICAgPC9OYXZiYXI+XHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICApO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IE5hdkJhcjsiLCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgV29ya1N1YiBmcm9tIFwiLi9Xb3JrU3ViXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xyXG5cclxuY29uc3QgdGV4dD0ge1xyXG4gICAgdGl0bGU6XCJHcmVhdCB1cFwiLFxyXG4gICAgbGluazpcIi9saW5rXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXCIsXHJcbiAgICBwaXg6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjU2NzM3L3BleGVscy1waG90by0yNTY3MzcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCJcclxufVxyXG5jb25zdCBidXR0b25TdHlsZSA9e1xyXG4gICAgZGlzcGxheTpcImJsb2NrXCIsXHJcbiAgICBtYXJnaW46XCIxcmVtIGF1dG8gIDNyZW0gIGF1dG9cIixcclxuICAgIHdpZHRoOlwiMjAwcHhcIixcclxuICAgIHBhZGRpbmc6XCIycHhcIixcclxuICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxyXG4gICAgZm9udFNpemU6XCIxMnB4XCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOlwiM3B4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgyMzMuMDZkZWcsICNGRTE5MDMgLTYxLjgxJSwgI0Y4NzEwRiA3NC40MSUpXCJcclxuICB9XHJcblxyXG5jb25zdCBTZXJ2aWNlQ2FyZCA9ICgpID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOlwiMXB4IHNvbGlkIHdoaXRlXCIsIHBhZGRpbmc6XCIzcmVtIDFyZW0gMXJlbSAxcmVtXCJ9fT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kPC9wPlxyXG4gICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvblN0eWxlfSB0ZXh0PVwiUGhvdG9ncmFwaHlcIiAvPiBcclxuXHJcbiAgICAgICAgPHA+PC9wPlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kPC9wPlxyXG4gICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvblN0eWxlfSB0ZXh0PVwiTW92aWUgTWFraW5nXCIgLz4gXHJcblxyXG4gICAgICAgIDxwPjwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kPC9wPlxyXG4gICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvblN0eWxlfSB0ZXh0PVwiTW9kZWwgV29ya3NcIiAvPiBcclxuICAgPC9kaXY+XHJcbiAgKTtcclxuICBleHBvcnQgZGVmYXVsdCBTZXJ2aWNlQ2FyZDsiLCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2VydmljZUNhcmQgZnJvbSBcIi4vU2VydmljZUNhcmRcIjtcclxuXHJcbmNvbnN0IHRleHQ9IHtcclxuICAgIHRpdGxlOlwiR3JlYXQgdXBcIixcclxuICAgIGxpbms6XCIvbGlua1wiLFxyXG4gICAgZGVzY3JpcHRpb246XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFwiLFxyXG4gICAgcGl4OiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzI1NjczNy9wZXhlbHMtcGhvdG8tMjU2NzM3LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiXHJcbn1cclxuY29uc3QgQ29udGFpbmVyU3R5bGU9e1xyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIGJhY2tncm91bmQ6IFwidXJsKCBodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy84MTg5OTIvcGV4ZWxzLXBob3RvLTgxODk5Mi5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTQmdz01MDApXCIsXHJcbiAgICAvLyB3aWR0aDogXCIyMzA5cHhcIixcclxuICAgIGhlaWdodDogXCI4MDBweFwiLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDpcIm5vLXJlcGVhdFwiLFxyXG4gICAgYmFja2dyb3VuZFNpemU6XCJjb250ZW50XCIsXHJcbiAgICBmb250RmFtaWx5OiBcIkFsZWdyZXlhIFNhbnNcIixcclxuICAgIGZvbnRGdHlsZTogXCJub3JtYWxcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXHJcbiAgICBmb250U2l6ZTogXCIzMHB4XCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjM2cHhcIixcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246XCJsZWZ0IHRvcFwiLFxyXG4gICAgb3BhY2l0eToxfSBcclxuXHJcblxyXG5jb25zdCBTZXJ2aWNlID0gKCkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17Q29udGFpbmVyU3R5bGV9PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteS01XCIgPlxyXG4gICAgICAgPGgxIGNsYXNzTmFtZT1cIm15LTUgdGV4dC1jZW50ZXJcIj5TZXJ2aWNlPC9oMT5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPjxTZXJ2aWNlQ2FyZCB0ZXh0PXt0ZXh0fSAvPjwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IFNlcnZpY2U7IiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCJcclxuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiXHJcblxyXG5jb25zdCBidXR0b25TdHlsZSA9e1xyXG4gICAgZGlzcGxheTpcImJsb2NrXCIsXHJcbiAgICBtYXJnaW46XCJhdXRvXCIsXHJcbiAgICB3aWR0aDpcIjIwMHB4XCIsXHJcbiAgICBwYWRkaW5nOlwiMnB4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcclxuICAgIGZvbnRTaXplOlwiMTJweFwiLFxyXG4gICAgbGV0dGVyU3BhY2luZzpcIjNweFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMjMzLjA2ZGVnLCAjRkUxOTAzIC02MS44MSUsICNGODcxMEYgNzQuNDElKVwiXHJcbiAgfVxyXG5cclxuICBjb25zdCB0ZXh0U3R5bGUgPXtcclxuICAgICAgbGV0dGVyU3BhY2luZzpcIjJweFwiXHJcblxyXG4gIH1cclxuY29uc3QgV29ya1N1YiA9ICh7dGV4dH0pID0+IChcclxuICAgIDxDYXJkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjpcIiMzMDE5MjlcIiB9fT5cclxuICAgIDxhIGhyZWY9e3RleHQubGlua30+PENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9e3RleHQucGl4fSAvPjwvYT5cclxuICAgIDxDYXJkLkJvZHk+XHJcbiAgICA8Q2FyZC5UaXRsZT57dGV4dC50aXRsZX08L0NhcmQuVGl0bGU+XHJcbiAgICAgIDxDYXJkLlRleHQgc3R5bGUgPXt0ZXh0U3R5bGV9PlxyXG4gICAgICAgIHt0ZXh0LmRlc2NyaXB0aW9ufVxyXG4gICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgPEJ1dHRvbiBidXR0b25TdHlsZT17YnV0dG9uU3R5bGV9IHRleHQ9XCJTZWUgbW9yZVwiLz5cclxuICAgIDwvQ2FyZC5Cb2R5PlxyXG4gIDwvQ2FyZD5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IFdvcmtTdWI7IiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFdvcmtTdWIgZnJvbSBcIi4vV29ya1N1YlwiO1xyXG5cclxuY29uc3QgdGV4dD0ge1xyXG4gICAgdGl0bGU6XCJHcmVhdCB1cFwiLFxyXG4gICAgbGluazpcIi9saW5rXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXCIsXHJcbiAgICBwaXg6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjU2NzM3L3BleGVscy1waG90by0yNTY3MzcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCJcclxufVxyXG5jb25zdCBoZWFkZXJTdHlsZT17XHJcbiAgICBcclxufSBcclxuXHJcblxyXG5jb25zdCBXb3JrcyA9ICgpID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzBBMEYxNFwiLG1pbkhlaWdodDpcIjgwMHB4XCIsIHBhZGRpbmdCb3R0b206XCI0cmVtXCJ9fT5cclxuICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXktNVwiID5cclxuICAgICAgIDxoMSBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206XCI2cmVtXCIsIG1hcmdpblRvcDpcIjRyZW1cIn19PkRpc2NvdmVyIE91ciBXb3JrczwvaDE+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+PFdvcmtTdWIgdGV4dD17dGV4dH0gLz48L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+PFdvcmtTdWIgdGV4dD17dGV4dH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPjxXb3JrU3ViIHRleHQ9e3RleHR9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj48V29ya1N1YiB0ZXh0PXt0ZXh0fSAvPjwvZGl2PlxyXG5cclxuICAgICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKTtcclxuICBleHBvcnQgZGVmYXVsdCBXb3JrczsiLCIvLyBwYWdlcy9pbmRleC5qc1xyXG5cclxuey8qIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIiAvPiAqL31cclxuXHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgV29ya3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvV29ya3NcIjtcclxuaW1wb3J0IENlcnRpZmllZFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2VydGlmaWVkU2VjdGlvblwiO1xyXG5pbXBvcnQgU2VydmljZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VydmljZXNcIjtcclxuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFjdFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IDxMYXlvdXQ+XHJcbiAgICA8V29ya3MgIC8+XHJcbiAgICA8Q2VydGlmaWVkU2VjdGlvbiAvPlxyXG4gICAgPFNlcnZpY2VzIC8+XHJcbiAgICA8Q29udGFjdCAvPlxyXG4gICAgPEZvb3RlciAvPlxyXG5cclxuPC9MYXlvdXQ+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTmF2XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiKTsiXSwic291cmNlUm9vdCI6IiJ9