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
  background: "url(https://images.pexels.com/photos/1595233/pexels-photo-1595233.jpeg?auto=compress&cs=tinysrgb&dpr=4&w=500)",
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
var _jsxFileName = "D:\\Personal\\BigTimeProject\\bigtime\\components\\ServiceCard.js";
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
var _jsxFileName = "D:\\Personal\\BigTimeProject\\bigtime\\components\\Services.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const text = {
  title: "Great up",
  link: "/link",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  pix: "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
};
const headerStyle = {};

const Service = () => __jsx("div", {
  style: {
    background: "black",
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
  className: "my-5 text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 8
  }
}, "Service"), __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 8
  }
}, __jsx("div", {
  className: "col-md-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 12
  }
}, __jsx(_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
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
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Services */ "./components/Services.js");
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
    lineNumber: 14,
    columnNumber: 21
  }
}, __jsx(_components_Works__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}), __jsx(_components_CertifiedSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}), __jsx(_components_Services__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DZXJ0aWZpZWRTZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VydmljZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dvcmtTdWIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Xb3Jrcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIiJdLCJuYW1lcyI6WyJCdXR0b24iLCJidXR0b25TdHlsZSIsInRleHQiLCJoZWFkZXJTdHlsZSIsInNlY3Rpb25TdHlsZSIsInBvc2l0aW9uIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImhlaWdodCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwidGV4dFRyYW5zZm9ybSIsImRpc3BsYXkiLCJtYXJnaW4iLCJsZXR0ZXJTcGFjaW5nIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJDZXJ0aWZpZWRTZWN0aW9uIiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiZm9udEZ0eWxlIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJjb2xvciIsIm9wYWNpdHkiLCJ3aWR0aCIsImJ1dHRvbldhdGNoU3R5bGUiLCJtaW5XaWR0aCIsImJvcmRlciIsIm1hcmdpbkxlZnQiLCJ0ZXh0V2F0Y2giLCJpbWdTdHlsZSIsInRleHRBbGlnbiIsIkhlYWRlciIsImxheW91dFN0eWxlIiwiZmxleERpcmVjdGlvbiIsImNvbnRlbnRTdHlsZSIsImZsZXgiLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwibmF2QmFyU3R5bGUiLCJsb2dvU3R5bGUiLCJOYXZCYXIiLCJ0aXRsZSIsImxpbmsiLCJkZXNjcmlwdGlvbiIsInBpeCIsIlNlcnZpY2VDYXJkIiwiU2VydmljZSIsInBhZGRpbmdCb3R0b20iLCJ0ZXh0U3R5bGUiLCJXb3JrU3ViIiwiYmFja2dyb3VuZENvbG9yIiwiV29ya3MiLCJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBOztBQUNBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUNDLGFBQUQ7QUFBY0M7QUFBZCxDQUFELEtBQ1g7QUFBUyxPQUFLLEVBQUVELFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDS0MsSUFETCxDQURKOztBQUtpQkYscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkY7QUFDQTtBQUdBLE1BQU1HLFdBQVcsR0FBQyxFQUFsQjtBQUlBLE1BQU1DLFlBQVksR0FBRTtBQUNoQkMsVUFBUSxFQUFDLFVBRE87QUFFaEJDLGlCQUFlLEVBQUMsa0JBRkE7QUFHaEJDLGtCQUFnQixFQUFDLFdBSEQ7QUFJaEJDLFFBQU0sRUFBQyxPQUpTO0FBS2hCQyxnQkFBYyxFQUFDLEtBTEM7QUFNaEJDLG9CQUFrQixFQUFDO0FBTkgsQ0FBcEI7QUFXQSxNQUFPVCxXQUFXLEdBQUU7QUFDaEJVLGVBQWEsRUFBRSxZQURDO0FBRWhCQyxTQUFPLEVBQUMsT0FGUTtBQUdoQkMsUUFBTSxFQUFDLFdBSFM7QUFJaEJDLGVBQWEsRUFBQyxLQUpFO0FBS2hCQyxTQUFPLEVBQUMsVUFMUTtBQU1oQkMsY0FBWSxFQUFDLEtBTkc7QUFPaEJDLFlBQVUsRUFBRTtBQVBJLENBQXBCOztBQVlBLE1BQU1DLGdCQUFnQixHQUFHLE1BQ3JCO0FBQUssT0FBSyxFQUFFZCxZQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRDtBQUFLLFdBQVMsRUFBQyxXQUFmO0FBQTJCLE9BQUssRUFBRTtBQUFDZSxhQUFTLEVBQUM7QUFBWCxHQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k7QUFBSSxXQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FESixFQUVJO0FBQUssV0FBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDQTtBQUFHLFdBQVMsRUFBQyxhQUFiO0FBQTJCLE9BQUssRUFBRTtBQUFDQyxZQUFRLEVBQUM7QUFBVixHQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlIQURBLENBRkosRUFNSSxNQUFDLCtDQUFEO0FBQVMsTUFBSSxFQUFDLGFBQWQ7QUFBNEIsYUFBVyxFQUFFbkIsV0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU5KLENBREMsQ0FESjs7QUFZaUJpQiwrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNGO0FBRUE7QUFDQTtBQUNBO0FBR0EsTUFBTWYsV0FBVyxHQUFHO0FBQ2hCRSxVQUFRLEVBQUUsVUFETTtBQUVoQlksWUFBVSxFQUFFLCtHQUZJO0FBR2hCO0FBQ0FULFFBQU0sRUFBRSxPQUpRO0FBS2hCRCxrQkFBZ0IsRUFBQyxXQUxEO0FBTWhCRSxnQkFBYyxFQUFDLFNBTkM7QUFPaEJZLFlBQVUsRUFBRSxlQVBJO0FBUWhCQyxXQUFTLEVBQUUsUUFSSztBQVNoQkMsWUFBVSxFQUFFLFFBVEk7QUFVaEJILFVBQVEsRUFBRSxNQVZNO0FBV2hCSSxZQUFVLEVBQUUsTUFYSTtBQVloQkMsT0FBSyxFQUFFLE9BWlM7QUFhaEJmLG9CQUFrQixFQUFDLFVBYkg7QUFjaEJnQixTQUFPLEVBQUM7QUFkUSxDQUFwQjtBQWlCQSxNQUFNekIsV0FBVyxHQUFFO0FBQ2pCMEIsT0FBSyxFQUFDLE9BRFc7QUFFakJaLFNBQU8sRUFBQyxLQUZTO0FBR2pCRSxZQUFVLEVBQUU7QUFISyxDQUFuQjtBQU1BLE1BQU1XLGdCQUFnQixHQUFFO0FBQ3RCQyxVQUFRLEVBQUMsT0FEYTtBQUV0QmQsU0FBTyxFQUFDLEtBRmM7QUFHdEJFLFlBQVUsRUFBRSxhQUhVO0FBSXRCYSxRQUFNLEVBQUMsaUJBSmU7QUFLdEJDLFlBQVUsRUFBQztBQUxXLENBQXhCO0FBUUEsTUFBTTdCLElBQUksR0FBRSxVQUFaO0FBQ0EsTUFBTThCLFNBQVMsR0FBRSxhQUFqQjtBQUVHLE1BQU1DLFFBQVEsR0FBRTtBQUNmUCxTQUFPLEVBQUMsQ0FETztBQUVmTixVQUFRLEVBQUMsT0FGTTtBQUdmRyxZQUFVLEVBQUMsR0FISTtBQUlmVyxXQUFTLEVBQUMsUUFKSztBQUtmZixXQUFTLEVBQUM7QUFMSyxDQUFoQjs7QUFPRCxNQUFNZ0IsTUFBTSxHQUFHLE1BQ2I7QUFBSyxXQUFTLEVBQUMsUUFBZjtBQUF3QixPQUFLLEVBQUVoQyxXQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0ssTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREwsRUFFSztBQUFLLFdBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0c7QUFBSyxXQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSSxXQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUhBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlIQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5SEFKRixDQURGLEVBUUU7QUFBSyxXQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k7QUFBSSxPQUFLLEVBQUU4QixRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESixFQUlJO0FBQUssV0FBUyxFQUFFLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDQSxNQUFDLCtDQUFEO0FBQVEsYUFBVyxFQUFFaEMsV0FBckI7QUFBa0MsTUFBSSxFQUFFQyxJQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREEsRUFFQSxNQUFDLCtDQUFEO0FBQVEsYUFBVyxFQUFFMEIsZ0JBQXJCO0FBQXVDLE1BQUksRUFBRUksU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZBLENBSkosQ0FSRixDQURILENBRkwsQ0FERjs7QUE0QmVHLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUY7QUFFQTtBQUVBLE1BQU1DLFdBQVcsR0FBRztBQUNsQnhCLFNBQU8sRUFBRSxNQURTO0FBRWxCeUIsZUFBYSxFQUFFLFFBRkc7QUFHbEI3QixRQUFNLEVBQUUsTUFIVTtBQUlsQm1CLE9BQUssRUFBRSxNQUpXO0FBS2xCZCxRQUFNLEVBQUMsS0FMVztBQU1sQkUsU0FBTyxFQUFDO0FBTlUsQ0FBcEI7QUFTQSxNQUFNdUIsWUFBWSxHQUFHO0FBQ25CQyxNQUFJLEVBQUUsQ0FEYTtBQUVuQjNCLFNBQU8sRUFBRSxNQUZVO0FBR25CeUIsZUFBYSxFQUFFO0FBSEksQ0FBckI7O0FBTUEsTUFBTUcsTUFBTSxHQUFHQyxLQUFLLElBQ2xCO0FBQUssV0FBUyxFQUFDLFFBQWY7QUFBd0IsT0FBSyxFQUFFTCxXQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRUUsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRTtBQUFLLFdBQVMsRUFBQyxTQUFmO0FBQXlCLE9BQUssRUFBRUUsWUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNHRyxLQUFLLENBQUNDLFFBRFQsQ0FIRixDQURGOztBQVVlRixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1HLFdBQVcsR0FBRztBQUNoQjFCLFlBQVUsRUFBRSxhQURJO0FBRWhCUSxPQUFLLEVBQUUsT0FGUztBQUdoQkUsT0FBSyxFQUFFLE1BSFM7QUFJaEJuQixRQUFNLEVBQUU7QUFKUSxDQUFwQjtBQU1FLE1BQU1vQyxTQUFTLEdBQUc7QUFDaEJwQyxRQUFNLEVBQUM7QUFEUyxDQUFsQjs7QUFJQSxNQUFNcUMsTUFBTSxHQUFHLE1BQ2I7QUFBSyxXQUFTLEVBQUMsaUJBQWY7QUFBaUMsT0FBSyxFQUFFRixXQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0EsTUFBQyw2REFBRDtBQUFRLFdBQVMsRUFBQyxpQkFBbEI7QUFBb0MsSUFBRSxFQUFDLEVBQXZDO0FBQTBDLFNBQU8sRUFBQyxNQUFsRDtBQUF5RCxXQUFTLEVBQUMsUUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsNkRBQUQsQ0FBUSxLQUFSO0FBQWMsTUFBSSxFQUFDLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBMkI7QUFBSyxLQUFHLEVBQUMsV0FBVDtBQUFxQixPQUFLLEVBQUVDLFNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBM0IsQ0FERixFQUVFLE1BQUMsMERBQUQ7QUFBSyxXQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQywwREFBRCxDQUFLLElBQUw7QUFBVSxNQUFJLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsRUFFRSxNQUFDLDBEQUFELENBQUssSUFBTDtBQUFVLE1BQUksRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRixFQUdFLE1BQUMsMERBQUQsQ0FBSyxJQUFMO0FBQVUsTUFBSSxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLEVBSUUsTUFBQywwREFBRCxDQUFLLElBQUw7QUFBVSxNQUFJLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsRUFLRSxNQUFDLDBEQUFELENBQUssSUFBTDtBQUFVLE1BQUksRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FMRixDQUZGLENBREEsQ0FERjs7QUFrQmVDLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0Y7QUFDQTtBQUNBO0FBRUEsTUFBTTNDLElBQUksR0FBRTtBQUNSNEMsT0FBSyxFQUFDLFVBREU7QUFFUkMsTUFBSSxFQUFDLE9BRkc7QUFHUkMsYUFBVyxFQUFDLHlFQUhKO0FBSVJDLEtBQUcsRUFBRTtBQUpHLENBQVo7QUFNQSxNQUFNaEQsV0FBVyxHQUFFO0FBQ2ZXLFNBQU8sRUFBQyxPQURPO0FBRWZDLFFBQU0sRUFBQyx1QkFGUTtBQUdmYyxPQUFLLEVBQUMsT0FIUztBQUlmWixTQUFPLEVBQUMsS0FKTztBQUtmQyxjQUFZLEVBQUMsS0FMRTtBQU1mSSxVQUFRLEVBQUMsTUFOTTtBQU9mTixlQUFhLEVBQUMsS0FQQztBQVFmRyxZQUFVLEVBQUU7QUFSRyxDQUFuQjs7QUFXQSxNQUFNaUMsV0FBVyxHQUFHLE1BQ2hCO0FBQUssT0FBSyxFQUFFO0FBQUVwQixVQUFNLEVBQUMsaUJBQVQ7QUFBNEJmLFdBQU8sRUFBQztBQUFwQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFHLFdBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUpBREosRUFFSSxNQUFDLCtDQUFEO0FBQVEsYUFBVyxFQUFFZCxXQUFyQjtBQUFrQyxNQUFJLEVBQUMsYUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUpKLEVBTUk7QUFBRyxXQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFKQU5KLEVBT0ksTUFBQywrQ0FBRDtBQUFRLGFBQVcsRUFBRUEsV0FBckI7QUFBa0MsTUFBSSxFQUFDLGNBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFQSixFQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFUSixFQVVJO0FBQUcsV0FBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxSkFWSixFQVdJLE1BQUMsK0NBQUQ7QUFBUSxhQUFXLEVBQUVBLFdBQXJCO0FBQWtDLE1BQUksRUFBQyxhQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBWEosQ0FESjs7QUFlaUJpRCwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0Y7QUFDQTtBQUVBLE1BQU1oRCxJQUFJLEdBQUU7QUFDUjRDLE9BQUssRUFBQyxVQURFO0FBRVJDLE1BQUksRUFBQyxPQUZHO0FBR1JDLGFBQVcsRUFBQyx5RUFISjtBQUlSQyxLQUFHLEVBQUU7QUFKRyxDQUFaO0FBTUEsTUFBTTlDLFdBQVcsR0FBQyxFQUFsQjs7QUFLQSxNQUFNZ0QsT0FBTyxHQUFHLE1BQ1o7QUFBSyxPQUFLLEVBQUU7QUFBQ2xDLGNBQVUsRUFBQyxPQUFaO0FBQXFCbUMsaUJBQWEsRUFBQztBQUFuQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRDtBQUFLLFdBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k7QUFBSSxXQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUk7QUFBSyxXQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k7QUFBSyxXQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTBCLE1BQUMsb0RBQUQ7QUFBYSxNQUFJLEVBQUVsRCxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQTFCLENBREosQ0FGSixDQURDLENBREo7O0FBVWlCaUQsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCRjtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1sRCxXQUFXLEdBQUU7QUFDZlcsU0FBTyxFQUFDLE9BRE87QUFFZkMsUUFBTSxFQUFDLE1BRlE7QUFHZmMsT0FBSyxFQUFDLE9BSFM7QUFJZlosU0FBTyxFQUFDLEtBSk87QUFLZkMsY0FBWSxFQUFDLEtBTEU7QUFNZkksVUFBUSxFQUFDLE1BTk07QUFPZk4sZUFBYSxFQUFDLEtBUEM7QUFRZkcsWUFBVSxFQUFFO0FBUkcsQ0FBbkI7QUFXRSxNQUFNb0MsU0FBUyxHQUFFO0FBQ2J2QyxlQUFhLEVBQUM7QUFERCxDQUFqQjs7QUFJRixNQUFNd0MsT0FBTyxHQUFHLENBQUM7QUFBQ3BEO0FBQUQsQ0FBRCxLQUNaLE1BQUMsMkRBQUQ7QUFBTSxPQUFLLEVBQUU7QUFBRXlCLFNBQUssRUFBRSxPQUFUO0FBQWtCNEIsbUJBQWUsRUFBQztBQUFsQyxHQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDQTtBQUFHLE1BQUksRUFBRXJELElBQUksQ0FBQzZDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFvQixNQUFDLDJEQUFELENBQU0sR0FBTjtBQUFVLFNBQU8sRUFBQyxLQUFsQjtBQUF3QixLQUFHLEVBQUU3QyxJQUFJLENBQUMrQyxHQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQXBCLENBREEsRUFFQSxNQUFDLDJEQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0EsTUFBQywyREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFhL0MsSUFBSSxDQUFDNEMsS0FBbEIsQ0FEQSxFQUVFLE1BQUMsMkRBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBSyxFQUFHTyxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0duRCxJQUFJLENBQUM4QyxXQURSLENBRkYsRUFLRSxNQUFDLCtDQUFEO0FBQVEsYUFBVyxFQUFFL0MsV0FBckI7QUFBa0MsTUFBSSxFQUFDLFVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFMRixDQUZBLENBREo7O0FBWWlCcUQsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENGO0FBQ0E7QUFFQSxNQUFNcEQsSUFBSSxHQUFFO0FBQ1I0QyxPQUFLLEVBQUMsVUFERTtBQUVSQyxNQUFJLEVBQUMsT0FGRztBQUdSQyxhQUFXLEVBQUMseUVBSEo7QUFJUkMsS0FBRyxFQUFFO0FBSkcsQ0FBWjtBQU1BLE1BQU05QyxXQUFXLEdBQUMsRUFBbEI7O0FBS0EsTUFBTXFELEtBQUssR0FBRyxNQUNWO0FBQUssT0FBSyxFQUFFO0FBQUN2QyxjQUFVLEVBQUMsU0FBWjtBQUF1Qm1DLGlCQUFhLEVBQUM7QUFBckMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0Q7QUFBSyxXQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNJO0FBQUksV0FBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixFQUVJO0FBQUssV0FBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNJO0FBQUssV0FBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFxQixNQUFDLGdEQUFEO0FBQVMsTUFBSSxFQUFFbEQsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQXJCLENBREosRUFFSTtBQUFLLFdBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBcUIsTUFBQyxnREFBRDtBQUFTLE1BQUksRUFBRUEsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQXJCLENBRkosRUFHSztBQUFLLFdBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBcUIsTUFBQyxnREFBRDtBQUFTLE1BQUksRUFBRUEsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQXJCLENBSEwsRUFJSztBQUFLLFdBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBcUIsTUFBQyxnREFBRDtBQUFTLE1BQUksRUFBRUEsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQXJCLENBSkwsQ0FGSixDQURDLENBREo7O0FBY2lCc0Qsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCRjtBQUVBO0FBQUM7QUFBc0c7QUFHdkc7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsTUFBTUMsS0FBSyxHQUFHLE1BQU0sTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ2hCLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURnQixFQUVoQixNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGZ0IsRUFHaEIsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSGdCLENBQXBCOztBQU1lQSxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCBCdXR0b24gPSAoe2J1dHRvblN0eWxlLCB0ZXh0fSkgPT4gKFxyXG4gICAgPGJ1dHRvbiAgc3R5bGU9e2J1dHRvblN0eWxlfT5cclxuICAgICAgICB7dGV4dH1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXHJcblxyXG5cclxuY29uc3QgaGVhZGVyU3R5bGU9e1xyXG4gICAgXHJcbn0gXHJcblxyXG5jb25zdCBzZWN0aW9uU3R5bGUgPXtcclxuICAgIHBvc2l0aW9uOlwicmVsYXRpdmVcIixcclxuICAgIGJhY2tncm91bmRJbWFnZTpcInVybCgvVmVjdG9yLnN2ZylcIixcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6XCJuby1yZXBlYXRcIixcclxuICAgIGhlaWdodDpcIjcwMHB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTpcIjUwJVwiLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOlwiLTMwJSAxNDAlXCIsXHJcblxyXG5cclxuXHJcbn1cclxuY29uc3QgIGJ1dHRvblN0eWxlPSB7XHJcbiAgICB0ZXh0VHJhbnNmb3JtOiBcIkNhcGl0YWxpemVcIixcclxuICAgIGRpc3BsYXk6XCJibG9ja1wiLFxyXG4gICAgbWFyZ2luOlwiM3JlbSBhdXRvXCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOlwiM3B4XCIsXHJcbiAgICBwYWRkaW5nOlwiOHB4IDE1cHhcIixcclxuICAgIGJvcmRlclJhZGl1czpcIjVweFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMjMzLjA2ZGVnLCAjRkUxOTAzIC02MS44MSUsICNGODcxMEYgNzQuNDElKVwiLFxyXG5cclxuXHJcbn1cclxuXHJcbmNvbnN0IENlcnRpZmllZFNlY3Rpb24gPSAoKSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtzZWN0aW9uU3R5bGV9PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7bWFyZ2luVG9wOlwiMTByZW1cIn19ID5cclxuICAgICAgIDxoMSBjbGFzc05hbWU9XCJteS01IHRleHQtY2VudGVyXCI+QmVjb21lIGEgY2VydGlmaWVkIHBob3RvZ3JhcGhlcjwvaDE+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04IG14LWF1dG9cIj5cclxuICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmE8L3A+XHJcbiAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICA8QnV0dG9uICB0ZXh0PVwiR2V0IFN0YXJ0ZWRcIiBidXR0b25TdHlsZT17YnV0dG9uU3R5bGV9IC8+XHJcbiAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IENlcnRpZmllZFNlY3Rpb247IiwiLy8gY29tcG9uZW50cy9IZWFkZXIuanNcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9OYXZCYXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIlxyXG5cclxuXHJcbmNvbnN0IGhlYWRlclN0eWxlID0ge1xyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIGJhY2tncm91bmQ6IFwidXJsKGh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzE1OTUyMzMvcGV4ZWxzLXBob3RvLTE1OTUyMzMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj00Jnc9NTAwKVwiLFxyXG4gICAgLy8gd2lkdGg6IFwiMjMwOXB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiNzAwcHhcIixcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6XCJuby1yZXBlYXRcIixcclxuICAgIGJhY2tncm91bmRTaXplOlwiY29udGVudFwiLFxyXG4gICAgZm9udEZhbWlseTogXCJBbGVncmV5YSBTYW5zXCIsXHJcbiAgICBmb250RnR5bGU6IFwibm9ybWFsXCIsXHJcbiAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxyXG4gICAgZm9udFNpemU6IFwiMzBweFwiLFxyXG4gICAgbGluZUhlaWdodDogXCIzNnB4XCIsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOlwibGVmdCB0b3BcIixcclxuICAgIG9wYWNpdHk6MVxyXG4gIH07XHJcblxyXG5jb25zdCBidXR0b25TdHlsZSA9e1xyXG4gIHdpZHRoOlwiMjAwcHhcIixcclxuICBwYWRkaW5nOlwiNXB4XCIsXHJcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMjMzLjA2ZGVnLCAjRkUxOTAzIC02MS44MSUsICNGODcxMEYgNzQuNDElKVwiXHJcbn1cclxuXHJcbmNvbnN0IGJ1dHRvbldhdGNoU3R5bGUgPXtcclxuICBtaW5XaWR0aDpcIjIwMHB4XCIsXHJcbiAgcGFkZGluZzpcIjVweFwiLFxyXG4gIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICBib3JkZXI6XCIycHggc29saWQgd2hpdGVcIixcclxuICBtYXJnaW5MZWZ0OlwiMTVweFwiXHJcblxyXG59XHJcbmNvbnN0IHRleHQ9IFwiVHJhaW5pbmdcIjtcclxuY29uc3QgdGV4dFdhdGNoPSBcIldhdGNoIFZpZGVvXCI7XHJcblxyXG4gICBjb25zdCBpbWdTdHlsZSA9e1xyXG4gICAgb3BhY2l0eToxLFxyXG4gICAgZm9udFNpemU6XCIxNDBweFwiLFxyXG4gICAgZm9udFdlaWdodDo5MDAsXHJcbiAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxuICAgIG1hcmdpblRvcDpcIjE1cmVtXCJcclxuICAgfVxyXG4gIGNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVhZGVyXCIgc3R5bGU9e2hlYWRlclN0eWxlfT5cclxuICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRlciBtdC01XCI+UGhvdG9ncmFwaHkgRm9yIHRoZSBGdXR1cmU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmE8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hPC9wPlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e2ltZ1N0eWxlfSAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEJUU1xyXG4gICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJjZW50ZXJXcmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvblN0eWxlfSB0ZXh0PXt0ZXh0fT48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBidXR0b25TdHlsZT17YnV0dG9uV2F0Y2hTdHlsZX0gdGV4dD17dGV4dFdhdGNofT48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiLy8gY29tcG9uZW50cy9MYXlvdXQuanNcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcblxyXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIG1hcmdpbjpcIjBweFwiLFxyXG4gIHBhZGRpbmc6XCIwcHhcIlxyXG59O1xyXG5cclxuY29uc3QgY29udGVudFN0eWxlID0ge1xyXG4gIGZsZXg6IDEsXHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIlxyXG59O1xyXG5cclxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiTGF5b3V0XCIgc3R5bGU9e2xheW91dFN0eWxlfT5cclxuXHJcbiAgICA8SGVhZGVyIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRlbnRcIiBzdHlsZT17Y29udGVudFN0eWxlfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiLy8gY29tcG9uZW50cy9OYXZCYXIuanNcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbCc7XHJcblxyXG5cclxuY29uc3QgbmF2QmFyU3R5bGUgPSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjYwcHhcIlxyXG4gIH07XHJcbiAgY29uc3QgbG9nb1N0eWxlID0ge1xyXG4gICAgaGVpZ2h0OlwiNjBweFwiLFxyXG4gIH1cclxuICBcclxuICBjb25zdCBOYXZCYXIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdkJhckNvbnRhaW5lclwiIHN0eWxlPXtuYXZCYXJTdHlsZX0+XHJcbiAgICA8TmF2YmFyIGNsYXNzTmFtZT1cIm5hdkJhckNvbnRhaW5lclwiIGJnPVwiXCIgdmFyaWFudD1cImRhcmtcIiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIj48aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIHN0eWxlPXtsb2dvU3R5bGV9Lz48L05hdmJhci5CcmFuZD5cclxuICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XHJcbiAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjaG9tZVwiPkhvbWU8L05hdi5MaW5rPlxyXG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiI2ZlYXR1cmVzXCI+V29yazwvTmF2Lkxpbms+XHJcbiAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjcHJpY2luZ1wiPlRyYWluaW5nPC9OYXYuTGluaz5cclxuICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNwcmljaW5nXCI+Q29udGFjdDwvTmF2Lkxpbms+XHJcbiAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjcHJpY2luZ1wiPkFib3V0PC9OYXYuTGluaz5cclxuICAgICAgPC9OYXY+XHJcbiAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXb3JrU3ViIGZyb20gXCIuL1dvcmtTdWJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XHJcblxyXG5jb25zdCB0ZXh0PSB7XHJcbiAgICB0aXRsZTpcIkdyZWF0IHVwXCIsXHJcbiAgICBsaW5rOlwiL2xpbmtcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcIixcclxuICAgIHBpeDogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yNTY3MzcvcGV4ZWxzLXBob3RvLTI1NjczNy5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIlxyXG59XHJcbmNvbnN0IGJ1dHRvblN0eWxlID17XHJcbiAgICBkaXNwbGF5OlwiYmxvY2tcIixcclxuICAgIG1hcmdpbjpcIjFyZW0gYXV0byAgM3JlbSAgYXV0b1wiLFxyXG4gICAgd2lkdGg6XCIyMDBweFwiLFxyXG4gICAgcGFkZGluZzpcIjJweFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOlwiNHB4XCIsXHJcbiAgICBmb250U2l6ZTpcIjEycHhcIixcclxuICAgIGxldHRlclNwYWNpbmc6XCIzcHhcIixcclxuICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDIzMy4wNmRlZywgI0ZFMTkwMyAtNjEuODElLCAjRjg3MTBGIDc0LjQxJSlcIlxyXG4gIH1cclxuXHJcbmNvbnN0IFNlcnZpY2VDYXJkID0gKCkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBib3JkZXI6XCIxcHggc29saWQgd2hpdGVcIiwgcGFkZGluZzpcIjNyZW0gMXJlbSAxcmVtIDFyZW1cIn19PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2Q8L3A+XHJcbiAgICAgICAgPEJ1dHRvbiBidXR0b25TdHlsZT17YnV0dG9uU3R5bGV9IHRleHQ9XCJQaG90b2dyYXBoeVwiIC8+IFxyXG5cclxuICAgICAgICA8cD48L3A+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2Q8L3A+XHJcbiAgICAgICAgPEJ1dHRvbiBidXR0b25TdHlsZT17YnV0dG9uU3R5bGV9IHRleHQ9XCJNb3ZpZSBNYWtpbmdcIiAvPiBcclxuXHJcbiAgICAgICAgPHA+PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2Q8L3A+XHJcbiAgICAgICAgPEJ1dHRvbiBidXR0b25TdHlsZT17YnV0dG9uU3R5bGV9IHRleHQ9XCJNb2RlbCBXb3Jrc1wiIC8+IFxyXG4gICA8L2Rpdj5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IFNlcnZpY2VDYXJkOyIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTZXJ2aWNlQ2FyZCBmcm9tIFwiLi9TZXJ2aWNlQ2FyZFwiO1xyXG5cclxuY29uc3QgdGV4dD0ge1xyXG4gICAgdGl0bGU6XCJHcmVhdCB1cFwiLFxyXG4gICAgbGluazpcIi9saW5rXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXCIsXHJcbiAgICBwaXg6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjU2NzM3L3BleGVscy1waG90by0yNTY3MzcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCJcclxufVxyXG5jb25zdCBoZWFkZXJTdHlsZT17XHJcbiAgICBcclxufSBcclxuXHJcblxyXG5jb25zdCBTZXJ2aWNlID0gKCkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6XCJibGFja1wiLCBwYWRkaW5nQm90dG9tOlwiNHJlbVwifX0+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG15LTVcIiA+XHJcbiAgICAgICA8aDEgY2xhc3NOYW1lPVwibXktNSB0ZXh0LWNlbnRlclwiPlNlcnZpY2U8L2gxPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+PFNlcnZpY2VDYXJkIHRleHQ9e3RleHR9IC8+PC9kaXY+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgU2VydmljZTsiLCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIlxyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCJcclxuXHJcbmNvbnN0IGJ1dHRvblN0eWxlID17XHJcbiAgICBkaXNwbGF5OlwiYmxvY2tcIixcclxuICAgIG1hcmdpbjpcImF1dG9cIixcclxuICAgIHdpZHRoOlwiMjAwcHhcIixcclxuICAgIHBhZGRpbmc6XCIycHhcIixcclxuICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxyXG4gICAgZm9udFNpemU6XCIxMnB4XCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOlwiM3B4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgyMzMuMDZkZWcsICNGRTE5MDMgLTYxLjgxJSwgI0Y4NzEwRiA3NC40MSUpXCJcclxuICB9XHJcblxyXG4gIGNvbnN0IHRleHRTdHlsZSA9e1xyXG4gICAgICBsZXR0ZXJTcGFjaW5nOlwiMnB4XCJcclxuXHJcbiAgfVxyXG5jb25zdCBXb3JrU3ViID0gKHt0ZXh0fSkgPT4gKFxyXG4gICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICcxNnJlbScsIGJhY2tncm91bmRDb2xvcjpcIiMzMDE5MjlcIiB9fT5cclxuICAgIDxhIGhyZWY9e3RleHQubGlua30+PENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9e3RleHQucGl4fSAvPjwvYT5cclxuICAgIDxDYXJkLkJvZHk+XHJcbiAgICA8Q2FyZC5UaXRsZT57dGV4dC50aXRsZX08L0NhcmQuVGl0bGU+XHJcbiAgICAgIDxDYXJkLlRleHQgc3R5bGUgPXt0ZXh0U3R5bGV9PlxyXG4gICAgICAgIHt0ZXh0LmRlc2NyaXB0aW9ufVxyXG4gICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgPEJ1dHRvbiBidXR0b25TdHlsZT17YnV0dG9uU3R5bGV9IHRleHQ9XCJTZWUgbW9yZVwiLz5cclxuICAgIDwvQ2FyZC5Cb2R5PlxyXG4gIDwvQ2FyZD5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IFdvcmtTdWI7IiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFdvcmtTdWIgZnJvbSBcIi4vV29ya1N1YlwiO1xyXG5cclxuY29uc3QgdGV4dD0ge1xyXG4gICAgdGl0bGU6XCJHcmVhdCB1cFwiLFxyXG4gICAgbGluazpcIi9saW5rXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXCIsXHJcbiAgICBwaXg6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjU2NzM3L3BleGVscy1waG90by0yNTY3MzcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCJcclxufVxyXG5jb25zdCBoZWFkZXJTdHlsZT17XHJcbiAgICBcclxufSBcclxuXHJcblxyXG5jb25zdCBXb3JrcyA9ICgpID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzMwMTkyOVwiLCBwYWRkaW5nQm90dG9tOlwiNHJlbVwifX0+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG15LTVcIiA+XHJcbiAgICAgICA8aDEgY2xhc3NOYW1lPVwibXktNVwiPkRpc2NvdmVyIE91ciBXb3JrczwvaDE+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+PFdvcmtTdWIgdGV4dD17dGV4dH0gLz48L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPjxXb3JrU3ViIHRleHQ9e3RleHR9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+PFdvcmtTdWIgdGV4dD17dGV4dH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj48V29ya1N1YiB0ZXh0PXt0ZXh0fSAvPjwvZGl2PlxyXG5cclxuICAgICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKTtcclxuICBleHBvcnQgZGVmYXVsdCBXb3JrczsiLCIvLyBwYWdlcy9pbmRleC5qc1xyXG5cclxuey8qIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIiAvPiAqL31cclxuXHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgV29ya3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvV29ya3NcIjtcclxuaW1wb3J0IENlcnRpZmllZFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2VydGlmaWVkU2VjdGlvblwiO1xyXG5pbXBvcnQgU2VydmljZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VydmljZXNcIjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4gPExheW91dD5cclxuICAgIDxXb3JrcyAgLz5cclxuICAgIDxDZXJ0aWZpZWRTZWN0aW9uIC8+XHJcbiAgICA8U2VydmljZXMgLz5cclxuPC9MYXlvdXQ+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTmF2XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiKTsiXSwic291cmNlUm9vdCI6IiJ9