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
var _jsxFileName = "D:\\Personal\\BigTimeProject\\bigtime\\components\\Button.js";
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
var _jsxFileName = "D:\\Personal\\BigTimeProject\\bigtime\\components\\CertifiedSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const headerStyle = {};
const sectionStyle = {
  position: "relative",
  backgroundImage: "url(/Vector.svg)",
  backgroundRepeat: "no-repeat",
  height: "700px",
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
    marginTop: "10rem"
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
var _jsxFileName = "D:\\Personal\\BigTimeProject\\bigtime\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// components/Header.js



const headerStyle = {
  position: "relative",
  background: "url(https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&dpr=4&w=500)",
  // width: "2309px",
  height: "700px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "content",
  fontFamily: "Alegreya Sans",
  fontFtyle: "normal",
  fontWeight: "normal",
  fontSize: "30px",
  lineHeight: "36px",
  color: "white",
  backgroundPosition: "left",
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
var _jsxFileName = "D:\\Personal\\BigTimeProject\\bigtime\\components\\Layout.js";

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
var _jsxFileName = "D:\\Personal\\BigTimeProject\\bigtime\\components\\NavBar.js";

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
var _jsxFileName = "D:\\Personal\\BigTimeProject\\bigtime\\components\\WorkSub.js";
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
    width: '16rem',
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
var _jsxFileName = "D:\\Personal\\BigTimeProject\\bigtime\\components\\Works.js";
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
    background: "#301929",
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
  className: "my-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 8
  }
}, "Discover Our Works"), __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 8
  }
}, __jsx("div", {
  className: "col",
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
    columnNumber: 33
  }
})), __jsx("div", {
  className: "col",
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
    columnNumber: 33
  }
})), __jsx("div", {
  className: "col",
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
    columnNumber: 34
  }
})), __jsx("div", {
  className: "col",
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
    columnNumber: 34
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
var _jsxFileName = "D:\\Personal\\BigTimeProject\\bigtime\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// pages/index.js
{
  /* <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> */
}




const Index = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 21
  }
}, __jsx(_components_Works__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}), __jsx(_components_CertifiedSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
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

module.exports = __webpack_require__(/*! D:\Personal\BigTimeProject\bigtime\pages\index.js */"./pages/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DZXJ0aWZpZWRTZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV29ya1N1Yi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dvcmtzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiIl0sIm5hbWVzIjpbIkJ1dHRvbiIsImJ1dHRvblN0eWxlIiwidGV4dCIsImhlYWRlclN0eWxlIiwic2VjdGlvblN0eWxlIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiaGVpZ2h0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJ0ZXh0VHJhbnNmb3JtIiwiZGlzcGxheSIsIm1hcmdpbiIsImxldHRlclNwYWNpbmciLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsIkNlcnRpZmllZFNlY3Rpb24iLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJmb250RnR5bGUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsImNvbG9yIiwib3BhY2l0eSIsIndpZHRoIiwiYnV0dG9uV2F0Y2hTdHlsZSIsIm1pbldpZHRoIiwiYm9yZGVyIiwibWFyZ2luTGVmdCIsInRleHRXYXRjaCIsImltZ1N0eWxlIiwidGV4dEFsaWduIiwiSGVhZGVyIiwibGF5b3V0U3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwiY29udGVudFN0eWxlIiwiZmxleCIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJuYXZCYXJTdHlsZSIsImxvZ29TdHlsZSIsIk5hdkJhciIsInRleHRTdHlsZSIsIldvcmtTdWIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaW5rIiwicGl4IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIldvcmtzIiwicGFkZGluZ0JvdHRvbSIsIkluZGV4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFB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cEI7O0FBS2VBLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmNvbnN0IEJ1dHRvbiA9ICh7YnV0dG9uU3R5bGUsIHRleHR9KSA9PiAoXHJcbiAgICA8YnV0dG9uICBzdHlsZT17YnV0dG9uU3R5bGV9PlxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxuICBleHBvcnQgZGVmYXVsdCBCdXR0b247IiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcclxuXHJcblxyXG5jb25zdCBoZWFkZXJTdHlsZT17XHJcbiAgICBcclxufSBcclxuXHJcbmNvbnN0IHNlY3Rpb25TdHlsZSA9e1xyXG4gICAgcG9zaXRpb246XCJyZWxhdGl2ZVwiLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOlwidXJsKC9WZWN0b3Iuc3ZnKVwiLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDpcIm5vLXJlcGVhdFwiLFxyXG4gICAgaGVpZ2h0OlwiNzAwcHhcIixcclxuICAgIGJhY2tncm91bmRTaXplOlwiNTAlXCIsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246XCItMzAlIDE0MCVcIixcclxuXHJcblxyXG5cclxufVxyXG5jb25zdCAgYnV0dG9uU3R5bGU9IHtcclxuICAgIHRleHRUcmFuc2Zvcm06IFwiQ2FwaXRhbGl6ZVwiLFxyXG4gICAgZGlzcGxheTpcImJsb2NrXCIsXHJcbiAgICBtYXJnaW46XCIzcmVtIGF1dG9cIixcclxuICAgIGxldHRlclNwYWNpbmc6XCIzcHhcIixcclxuICAgIHBhZGRpbmc6XCI4cHggMTVweFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOlwiNXB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgyMzMuMDZkZWcsICNGRTE5MDMgLTYxLjgxJSwgI0Y4NzEwRiA3NC40MSUpXCIsXHJcblxyXG5cclxufVxyXG5cclxuY29uc3QgQ2VydGlmaWVkU2VjdGlvbiA9ICgpID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3NlY3Rpb25TdHlsZX0+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMHJlbVwifX0gPlxyXG4gICAgICAgPGgxIGNsYXNzTmFtZT1cIm15LTUgdGV4dC1jZW50ZXJcIj5CZWNvbWUgYSBjZXJ0aWZpZWQgcGhvdG9ncmFwaGVyPC9oMT5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggbXgtYXV0b1wiPlxyXG4gICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYTwvcD5cclxuICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgIDxCdXR0b24gIHRleHQ9XCJHZXQgU3RhcnRlZFwiIGJ1dHRvblN0eWxlPXtidXR0b25TdHlsZX0gLz5cclxuICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgQ2VydGlmaWVkU2VjdGlvbjsiLCIvLyBjb21wb25lbnRzL0hlYWRlci5qc1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL05hdkJhclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiXHJcblxyXG5cclxuY29uc3QgaGVhZGVyU3R5bGUgPSB7XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJ1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTI2NDIxMC9wZXhlbHMtcGhvdG8tMTI2NDIxMC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTQmdz01MDApXCIsXHJcbiAgICAvLyB3aWR0aDogXCIyMzA5cHhcIixcclxuICAgIGhlaWdodDogXCI3MDBweFwiLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDpcIm5vLXJlcGVhdFwiLFxyXG4gICAgYmFja2dyb3VuZFNpemU6XCJjb250ZW50XCIsXHJcbiAgICBmb250RmFtaWx5OiBcIkFsZWdyZXlhIFNhbnNcIixcclxuICAgIGZvbnRGdHlsZTogXCJub3JtYWxcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXHJcbiAgICBmb250U2l6ZTogXCIzMHB4XCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjM2cHhcIixcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246XCJsZWZ0XCIsXHJcbiAgICBvcGFjaXR5OjFcclxuICB9O1xyXG5cclxuY29uc3QgYnV0dG9uU3R5bGUgPXtcclxuICB3aWR0aDpcIjIwMHB4XCIsXHJcbiAgcGFkZGluZzpcIjVweFwiLFxyXG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDIzMy4wNmRlZywgI0ZFMTkwMyAtNjEuODElLCAjRjg3MTBGIDc0LjQxJSlcIlxyXG59XHJcblxyXG5jb25zdCBidXR0b25XYXRjaFN0eWxlID17XHJcbiAgbWluV2lkdGg6XCIyMDBweFwiLFxyXG4gIHBhZGRpbmc6XCI1cHhcIixcclxuICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgYm9yZGVyOlwiMnB4IHNvbGlkIHdoaXRlXCIsXHJcbiAgbWFyZ2luTGVmdDpcIjE1cHhcIlxyXG5cclxufVxyXG5jb25zdCB0ZXh0PSBcIlRyYWluaW5nXCI7XHJcbmNvbnN0IHRleHRXYXRjaD0gXCJXYXRjaCBWaWRlb1wiO1xyXG5cclxuICAgY29uc3QgaW1nU3R5bGUgPXtcclxuICAgIG9wYWNpdHk6MSxcclxuICAgIGZvbnRTaXplOlwiMTQwcHhcIixcclxuICAgIGZvbnRXZWlnaHQ6OTAwLFxyXG4gICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbiAgICBtYXJnaW5Ub3A6XCIxNXJlbVwiXHJcbiAgIH1cclxuICBjb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlclwiIHN0eWxlPXtoZWFkZXJTdHlsZX0+XHJcbiAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kIG10LTVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkZXIgbXQtNVwiPlBob3RvZ3JhcGh5IEZvciB0aGUgRnV0dXJlPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmE8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXtpbWdTdHlsZX0gID5cclxuICAgICAgICAgICAgICAgICAgICBCVFNcclxuICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiY2VudGVyV3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGJ1dHRvblN0eWxlPXtidXR0b25TdHlsZX0gdGV4dD17dGV4dH0+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvbldhdGNoU3R5bGV9IHRleHQ9e3RleHRXYXRjaH0+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsIi8vIGNvbXBvbmVudHMvTGF5b3V0LmpzXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5cclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxuICBtYXJnaW46XCIwcHhcIixcclxuICBwYWRkaW5nOlwiMHB4XCJcclxufTtcclxuXHJcbmNvbnN0IGNvbnRlbnRTdHlsZSA9IHtcclxuICBmbGV4OiAxLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCJcclxufTtcclxuXHJcbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cIkxheW91dFwiIHN0eWxlPXtsYXlvdXRTdHlsZX0+XHJcblxyXG4gICAgPEhlYWRlciAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJDb250ZW50XCIgc3R5bGU9e2NvbnRlbnRTdHlsZX0+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsIi8vIGNvbXBvbmVudHMvTmF2QmFyLmpzXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2wnO1xyXG5cclxuXHJcbmNvbnN0IG5hdkJhclN0eWxlID0ge1xyXG4gICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCI2MHB4XCJcclxuICB9O1xyXG4gIGNvbnN0IGxvZ29TdHlsZSA9IHtcclxuICAgIGhlaWdodDpcIjYwcHhcIixcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgTmF2QmFyID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZCYXJDb250YWluZXJcIiBzdHlsZT17bmF2QmFyU3R5bGV9PlxyXG4gICAgPE5hdmJhciBjbGFzc05hbWU9XCJuYXZCYXJDb250YWluZXJcIiBiZz1cIlwiIHZhcmlhbnQ9XCJkYXJrXCIgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCI+PGltZyBzcmM9XCIvbG9nby5wbmdcIiBzdHlsZT17bG9nb1N0eWxlfS8+PC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxyXG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiI2hvbWVcIj5Ib21lPC9OYXYuTGluaz5cclxuICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNmZWF0dXJlc1wiPldvcms8L05hdi5MaW5rPlxyXG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiI3ByaWNpbmdcIj5UcmFpbmluZzwvTmF2Lkxpbms+XHJcbiAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjcHJpY2luZ1wiPkNvbnRhY3Q8L05hdi5MaW5rPlxyXG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiI3ByaWNpbmdcIj5BYm91dDwvTmF2Lkxpbms+XHJcbiAgICAgIDwvTmF2PlxyXG4gICAgPC9OYXZiYXI+XHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICApO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IE5hdkJhcjsiLCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIlxyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCJcclxuXHJcbmNvbnN0IGJ1dHRvblN0eWxlID17XHJcbiAgICBkaXNwbGF5OlwiYmxvY2tcIixcclxuICAgIG1hcmdpbjpcImF1dG9cIixcclxuICAgIHdpZHRoOlwiMjAwcHhcIixcclxuICAgIHBhZGRpbmc6XCIycHhcIixcclxuICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxyXG4gICAgZm9udFNpemU6XCIxMnB4XCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOlwiM3B4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgyMzMuMDZkZWcsICNGRTE5MDMgLTYxLjgxJSwgI0Y4NzEwRiA3NC40MSUpXCJcclxuICB9XHJcblxyXG4gIGNvbnN0IHRleHRTdHlsZSA9e1xyXG4gICAgICBsZXR0ZXJTcGFjaW5nOlwiMnB4XCJcclxuXHJcbiAgfVxyXG5jb25zdCBXb3JrU3ViID0gKHt0ZXh0fSkgPT4gKFxyXG4gICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICcxNnJlbScsIGJhY2tncm91bmRDb2xvcjpcIiMzMDE5MjlcIiB9fT5cclxuICAgIDxhIGhyZWY9e3RleHQubGlua30+PENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9e3RleHQucGl4fSAvPjwvYT5cclxuICAgIDxDYXJkLkJvZHk+XHJcbiAgICA8Q2FyZC5UaXRsZT57dGV4dC50aXRsZX08L0NhcmQuVGl0bGU+XHJcbiAgICAgIDxDYXJkLlRleHQgc3R5bGUgPXt0ZXh0U3R5bGV9PlxyXG4gICAgICAgIHt0ZXh0LmRlc2NyaXB0aW9ufVxyXG4gICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgPEJ1dHRvbiBidXR0b25TdHlsZT17YnV0dG9uU3R5bGV9IHRleHQ9XCJTZWUgbW9yZVwiLz5cclxuICAgIDwvQ2FyZC5Cb2R5PlxyXG4gIDwvQ2FyZD5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IFdvcmtTdWI7IiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFdvcmtTdWIgZnJvbSBcIi4vV29ya1N1YlwiO1xyXG5cclxuY29uc3QgdGV4dD0ge1xyXG4gICAgdGl0bGU6XCJHcmVhdCB1cFwiLFxyXG4gICAgbGluazpcIi9saW5rXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXCIsXHJcbiAgICBwaXg6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjU2NzM3L3BleGVscy1waG90by0yNTY3MzcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCJcclxufVxyXG5jb25zdCBoZWFkZXJTdHlsZT17XHJcbiAgICBcclxufSBcclxuXHJcblxyXG5jb25zdCBXb3JrcyA9ICgpID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzMwMTkyOVwiLCBwYWRkaW5nQm90dG9tOlwiNHJlbVwifX0+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG15LTVcIiA+XHJcbiAgICAgICA8aDEgY2xhc3NOYW1lPVwibXktNVwiPkRpc2NvdmVyIE91ciBXb3JrczwvaDE+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+PFdvcmtTdWIgdGV4dD17dGV4dH0gLz48L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPjxXb3JrU3ViIHRleHQ9e3RleHR9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+PFdvcmtTdWIgdGV4dD17dGV4dH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj48V29ya1N1YiB0ZXh0PXt0ZXh0fSAvPjwvZGl2PlxyXG5cclxuICAgICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKTtcclxuICBleHBvcnQgZGVmYXVsdCBXb3JrczsiLCIvLyBwYWdlcy9pbmRleC5qc1xyXG5cclxuey8qIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIiAvPiAqL31cclxuXHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgV29ya3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvV29ya3NcIjtcclxuaW1wb3J0IENlcnRpZmllZFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2VydGlmaWVkU2VjdGlvblwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IDxMYXlvdXQ+XHJcbiAgICA8V29ya3MgIC8+XHJcbiAgICA8Q2VydGlmaWVkU2VjdGlvbiAvPlxyXG48L0xheW91dD47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQ29sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9OYXZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvUm93XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=