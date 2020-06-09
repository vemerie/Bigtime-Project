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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

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
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-reveal */ "react-awesome-reveal");
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__);
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
  id: "training",
  style: sectionStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
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
    lineNumber: 37,
    columnNumber: 4
  }
}, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__["RubberBand"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 8
  }
}, __jsx("h1", {
  className: "my-5 text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 20
  }
}, "Become a certified photographer")), __jsx("div", {
  className: "col-md-8 mx-auto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
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
    lineNumber: 41,
    columnNumber: 8
  }
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna")), __jsx(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: "Get Started",
  buttonStyle: buttonStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
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
  width: "200px",
  padding: "2px",
  borderRadius: "4px",
  fontSize: "12px",
  letterSpacing: "3px",
  background: "black",
  border: "1px solid #761903"
};
const textColor = {
  color: "#c3c3c3"
};

const Contact = () => __jsx("div", {
  id: "contact",
  style: {
    background: "black",
    padding: "6rem 0rem",
    minHeight: "700px"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 4
  }
}, __jsx("h1", {
  className: "text-center my-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 8
  }
}, "Contact"), __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 8
  }
}, __jsx("div", {
  className: "col-md-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 12
  }
}, __jsx("h2", {
  className: "mt-5",
  style: {
    color: "#FE1903"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 16
  }
}, "Feedbacks"), __jsx("p", {
  style: textColor,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 16
  }
}, "Get in touch with us and we will serve you to your satisfactions, we would respond to your enquiries as quick as within an hour of you messaging us"), __jsx("p", {
  style: textColor,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 16
  }
}, "Also let us know what you think about our products and service and how we can improve on them, your positive feedbacks and criticisms are highly regarded and will be put into consideration")), __jsx("div", {
  className: "col-md-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 12
  }
}, __jsx("div", {
  className: "form-row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 16
  }
}, __jsx("div", {
  className: "col-md-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 20
  }
}, __jsx("div", {
  className: "form-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
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
    lineNumber: 43,
    columnNumber: 29
  }
}))), __jsx("div", {
  className: "col-md-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 20
  }
}, __jsx("div", {
  className: "form-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
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
    lineNumber: 49,
    columnNumber: 29
  }
})))), __jsx("div", {
  className: "form-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
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
    lineNumber: 55,
    columnNumber: 20
  }
})), __jsx("div", {
  className: "form-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
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
    lineNumber: 59,
    columnNumber: 20
  }
})), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  text: "Send",
  buttonStyle: buttonStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
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
/* harmony import */ var social_media_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! social-media-icons-react */ "social-media-icons-react");
/* harmony import */ var social_media_icons_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(social_media_icons_react__WEBPACK_IMPORTED_MODULE_4__);
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
    lineNumber: 18,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "container my-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 4
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 8
  }
}, __jsx("div", {
  className: "col-md-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 12
  }
}, __jsx(_FooterList__WEBPACK_IMPORTED_MODULE_2__["default"], {
  text: text1,
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
    columnNumber: 12
  }
}, __jsx(_FooterList__WEBPACK_IMPORTED_MODULE_2__["default"], {
  text: text2,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 16
  }
}), __jsx("div", {
  className: "ml-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 17
  }
}, __jsx("span", {
  className: "mr-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 17
  }
}, __jsx(social_media_icons_react__WEBPACK_IMPORTED_MODULE_4__["SocialMediaIconsReact"], {
  backgroundColor: "grey",
  icon: "twitter",
  url: "https://twitter.com/your-twitter-handle",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 40
  }
})), __jsx("span", {
  className: "mr-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 17
  }
}, __jsx(social_media_icons_react__WEBPACK_IMPORTED_MODULE_4__["SocialMediaIconsReact"], {
  icon: "facebook",
  backgroundColor: "grey",
  url: "https://twitter.com/your-twitter-handle",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 40
  }
})), __jsx("span", {
  className: "mr-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 17
  }
}, __jsx(social_media_icons_react__WEBPACK_IMPORTED_MODULE_4__["SocialMediaIconsReact"], {
  icon: "youtube",
  backgroundColor: "grey",
  url: "https://twitter.com/your-twitter-handle",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 40
  }
})))), __jsx("div", {
  className: "col-md-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 13
  }
}), __jsx("div", {
  className: "col-md-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
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
    lineNumber: 35,
    columnNumber: 17
  }
}), __jsx("p", {
  className: "text-center text-secondary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 17
  }
}, "info@bigtime.com")))), __jsx(_FooterSub__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
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
/* harmony import */ var rc_banner_anim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-banner-anim */ "rc-banner-anim");
/* harmony import */ var rc_banner_anim__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rc_banner_anim__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-queue-anim */ "rc-queue-anim");
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_queue_anim__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-tween-one */ "rc-tween-one");
/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_tween_one__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-awesome-reveal */ "react-awesome-reveal");
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__);
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
const {
  Element
} = rc_banner_anim__WEBPACK_IMPORTED_MODULE_3___default.a;
const BgElement = Element.BgElement;

const Header = () => {
  return __jsx("div", {
    className: "Header",
    style: headerStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__["Slide"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "font-weight-bolder mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 24
    }
  }, "Photography For the Future")), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna")), __jsx("div", {
    className: "col-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__["Slide"], {
    damping: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, __jsx("h1", {
    style: imgStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 38
    }
  }, "BTS")), __jsx("div", {
    className: "centerWrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonStyle: buttonStyle,
    text: text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonStyle: buttonWatchStyle,
    text: textWatch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }))))));
};

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
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar.js");
/* harmony import */ var _hooks_useSticky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useSticky */ "./hooks/useSticky.js");
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

const Layout = props => {
  return __jsx("div", {
    className: "Layout",
    style: layoutStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 10
    }
  }, __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "Content",
    style: contentStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, props.children));
};

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
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
    lineNumber: 22,
    columnNumber: 5
  }
}, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
  expand: "lg",
  fixed: "top",
  variant: "dark",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }
}, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default.a.Brand, {
  href: "#home",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 7
  }
}, __jsx("img", {
  src: "/logo.png",
  style: logoStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 34
  }
})), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
  "aria-controls": "basic-navbar-nav",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }
}), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
  id: "basic-navbar-nav",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }
}, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a, {
  className: "ml-auto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 7
  }
}, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#home",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }
}, "Home"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#work",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }
}, "Work"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#training",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }
}, "Training"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#contact",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }
}, "Contact"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#service",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }
}, "Sevice"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#gallery",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }
}, "Gallery")))));

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
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-awesome-reveal */ "react-awesome-reveal");
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__);
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

const ServiceCard = () => __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__["Fade"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }
}, __jsx("div", {
  style: {
    border: "1px solid white",
    padding: "3rem 1rem 1rem 1rem"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 11
  }
}, __jsx("p", {
  className: "text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  buttonStyle: buttonStyle,
  text: "Photography",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }
}), __jsx("p", {
  className: "text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  buttonStyle: buttonStyle,
  text: "Movie Making",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }
}), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }
}), __jsx("p", {
  className: "text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  buttonStyle: buttonStyle,
  text: "Model Works",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }
})));

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
  background: "url( https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&dpr=4&w=500",
  // width: "2309px",
  height: "800px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "content",
  fontFamily: "Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;",
  fontFtyle: "normal",
  fontWeight: "normal",
  fontSize: "30px",
  lineHeight: "36px",
  color: "white",
  backgroundPosition: "left top",
  opacity: 1
};

const Service = () => __jsx("div", {
  id: "service",
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

/***/ "./components/Video.js":
/*!*****************************!*\
  !*** ./components/Video.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VideoSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoSub */ "./components/VideoSub.js");
/* harmony import */ var _WorkSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkSub */ "./components/WorkSub.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\Video.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const text = {
  title: "Great up",
  link: "/link",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  pix: "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
};
const buttonStyle = {
  display: "block",
  marginTop: "2rem",
  marginLeft: "auto",
  width: "200px",
  padding: "2px",
  borderRadius: "4px",
  fontSize: "12px",
  letterSpacing: "3px",
  background: "black",
  border: "1px solid #212233"
};

const Video = () => __jsx("div", {
  id: "work",
  style: {
    background: "#0A0F14",
    minHeight: "800px",
    paddingBottom: "4rem"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "container-fluid my-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 4
  }
}, __jsx("h2", {
  className: "text-center",
  style: {
    marginBottom: "6rem",
    marginTop: "6rem"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 8
  }
}, "Video Show"), __jsx("div", {
  className: "row ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 8
  }
}, __jsx("div", {
  className: "col-md-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 12
  }
}, __jsx(_VideoSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 38
  }
})), __jsx("div", {
  className: "col-md-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 12
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "col-md-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 13
  }
}, __jsx(_VideoSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 39
  }
})), __jsx("div", {
  className: "col-md-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 13
  }
}, __jsx(_VideoSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 39
  }
})), __jsx("div", {
  className: "col-md-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 13
  }
}, __jsx(_VideoSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 39
  }
})), __jsx("div", {
  className: "col-md-6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 13
  }
}, __jsx(_VideoSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 39
  }
}))))), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
  text: "See more",
  buttonStyle: buttonStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 8
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ }),

/***/ "./components/VideoSub.js":
/*!********************************!*\
  !*** ./components/VideoSub.js ***!
  \********************************/
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
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\VideoSub.js";
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

const VideoSub = ({
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
}));

/* harmony default export */ __webpack_exports__["default"] = (VideoSub);

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
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-awesome-reveal */ "react-awesome-reveal");
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__);
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
}) => __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__["Fade"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 1
  }
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
  style: {
    backgroundColor: "#301929"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }
}, __jsx("a", {
  href: text.link,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Img, {
  variant: "top",
  src: text.pix,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 25
  }
})), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Title, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}, text.title), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Text, {
  style: textStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }
}, text.description), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  buttonStyle: buttonStyle,
  text: "See more",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 7
  }
}))));

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
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Video */ "./components/Video.js");
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
  id: "work",
  style: {
    background: "#0A0F14",
    minHeight: "800px",
    paddingBottom: "4rem"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "container my-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 4
  }
}, __jsx("h1", {
  className: "",
  style: {
    marginBottom: "6rem",
    marginTop: "6rem"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 8
  }
}, "Discover Our Works"), __jsx("div", {
  className: "row ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 8
  }
}, __jsx("div", {
  className: "col-md-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 12
  }
}, __jsx(_WorkSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 38
  }
})), __jsx("div", {
  className: "col-md-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 12
  }
}, __jsx(_WorkSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 38
  }
})), __jsx("div", {
  className: "col-md-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 13
  }
}, __jsx(_WorkSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 39
  }
})), __jsx("div", {
  className: "col-md-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 13
  }
}, __jsx(_WorkSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 39
  }
})))), __jsx(_Video__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 4
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Works);

/***/ }),

/***/ "./hooks/useSticky.js":
/*!****************************!*\
  !*** ./hooks/useSticky.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useSticky() {
  const {
    0: isSticky,
    1: setSticky
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const element = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleScroll = () => {
    window.scrollY > element.current.getBoundingClientRect().bottom ? setSticky(true) : setSticky(false);
  }; // This function handle the scroll performance issue


  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
          args = arguments;

      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };

      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("scroll", debounce(handleScroll));
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [debounce, handleScroll]);
  return {
    isSticky,
    element
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useSticky);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-gallery */ "react-grid-gallery");
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_gallery__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\pages\\gallery.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const IMAGES = [{
  src: "https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnail: "https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  isSelected: false,
  caption: "After Rain (Jeshu John - designerspics.com)"
}, {
  src: "https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnail: "https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  tags: [{
    value: "Ocean",
    title: "Ocean"
  }, {
    value: "People",
    title: "People"
  }],
  caption: "Boats (Jeshu John - designerspics.com)"
}, {
  src: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnail: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnailWidth: 320,
  thumbnailHeight: 174
}, {
  src: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnail: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  isSelected: false,
  caption: "After Rain (Jeshu John - designerspics.com)"
}, {
  src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{
    value: "Ocean",
    title: "Ocean"
  }, {
    value: "People",
    title: "People"
  }],
  caption: "Boats (Jeshu John - designerspics.com)"
}, {
  src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212
}, {
  src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  isSelected: false,
  caption: "After Rain (Jeshu John - designerspics.com)"
}, {
  src: "https://images.pexels.com/photos/667200/pexels-photo-667200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnail: "https://images.pexels.com/photos/667200/pexels-photo-667200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{
    value: "Ocean",
    title: "Ocean"
  }, {
    value: "People",
    title: "People"
  }],
  caption: "Boats (Jeshu John - designerspics.com)"
}, {
  src: "https://images.pexels.com/photos/949193/pexels-photo-949193.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnail: "https://images.pexels.com/photos/949193/pexels-photo-949193.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnailWidth: 320,
  thumbnailHeight: 212
}, {
  src: "https://images.pexels.com/photos/3655782/pexels-photo-3655782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnail: "https://images.pexels.com/photos/3655782/pexels-photo-3655782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{
    value: "Ocean",
    title: "Ocean"
  }, {
    value: "People",
    title: "People"
  }],
  caption: "Boats (Jeshu John - designerspics.com)"
}, {
  src: "https://images.pexels.com/photos/667200/pexels-photo-667200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnail: "https://images.pexels.com/photos/667200/pexels-photo-667200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{
    value: "Ocean",
    title: "Ocean"
  }, {
    value: "People",
    title: "People"
  }],
  caption: "Boats (Jeshu John - designerspics.com)"
}];

const GalleryPage = () => // <NavBar />
__jsx("div", {
  id: "gallery",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 9
  }
}, __jsx("h1", {
  className: "my-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 9
  }
}, "Gallery"), __jsx(react_grid_gallery__WEBPACK_IMPORTED_MODULE_2___default.a, {
  images: IMAGES,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 9
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (GalleryPage);

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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _pages_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/gallery */ "./pages/gallery.js");
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
    lineNumber: 21,
    columnNumber: 21
  }
}, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}), __jsx(_components_Works__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }
}), __jsx(_components_Services__WEBPACK_IMPORTED_MODULE_4__["default"], {
  id: "service",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }
}), __jsx(_pages_gallery__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}), __jsx(_components_CertifiedSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }
}), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {
  id: "contact",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "rc-banner-anim":
/*!*********************************!*\
  !*** external "rc-banner-anim" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-banner-anim");

/***/ }),

/***/ "rc-queue-anim":
/*!********************************!*\
  !*** external "rc-queue-anim" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-queue-anim");

/***/ }),

/***/ "rc-tween-one":
/*!*******************************!*\
  !*** external "rc-tween-one" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tween-one");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-awesome-reveal":
/*!***************************************!*\
  !*** external "react-awesome-reveal" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-awesome-reveal");

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

/***/ }),

/***/ "react-grid-gallery":
/*!*************************************!*\
  !*** external "react-grid-gallery" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-grid-gallery");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "social-media-icons-react":
/*!*******************************************!*\
  !*** external "social-media-icons-react" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("social-media-icons-react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NlcnRpZmllZFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250YWN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3RlclN1Yi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlcnZpY2VDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9WaWRlby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvU3ViLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV29ya1N1Yi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dvcmtzLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVN0aWNreS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYy1iYW5uZXItYW5pbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJjLXF1ZXVlLWFuaW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYy10d2Vlbi1vbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWF3ZXNvbWUtcmV2ZWFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdyaWQtZ2FsbGVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29jaWFsLW1lZGlhLWljb25zLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiQnV0dG9uIiwiYnV0dG9uU3R5bGUiLCJ0ZXh0IiwiaGVhZGVyU3R5bGUiLCJzZWN0aW9uU3R5bGUiLCJwb3NpdGlvbiIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsInRleHRUcmFuc2Zvcm0iLCJkaXNwbGF5IiwibWFyZ2luIiwibGV0dGVyU3BhY2luZyIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwiQ2VydGlmaWVkU2VjdGlvbiIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwiZm9ybUVsZW1lbnRTdHlsZSIsImNvbG9yIiwiYm9yZGVyIiwid2lkdGgiLCJ0ZXh0Q29sb3IiLCJDb250YWN0IiwibWluSGVpZ2h0IiwidGV4dDEiLCJ0ZXh0MiIsIkZvb3RlciIsInBhZGRpbmdCb3R0b20iLCJ0ZXh0U3R5bGUiLCJGb290ZXJMaXN0IiwibWFwIiwicmVzIiwia2V5IiwibGlzdFN0eWxlIiwiRm9vdGVyU3ViIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ1RvcCIsIm1hcmdpbkxlZnQiLCJmb250RmFtaWx5IiwiZm9udEZ0eWxlIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJvcGFjaXR5IiwiYnV0dG9uV2F0Y2hTdHlsZSIsIm1pbldpZHRoIiwidGV4dFdhdGNoIiwiaW1nU3R5bGUiLCJ0ZXh0QWxpZ24iLCJFbGVtZW50IiwiQmFubmVyQW5pbSIsIkJnRWxlbWVudCIsIkhlYWRlciIsImxheW91dFN0eWxlIiwiZmxleERpcmVjdGlvbiIsImNvbnRlbnRTdHlsZSIsImZsZXgiLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwibmF2QmFyU3R5bGUiLCJsb2dvU3R5bGUiLCJOYXZCYXIiLCJ0aXRsZSIsImxpbmsiLCJkZXNjcmlwdGlvbiIsInBpeCIsIlNlcnZpY2VDYXJkIiwiQ29udGFpbmVyU3R5bGUiLCJTZXJ2aWNlIiwiVmlkZW8iLCJtYXJnaW5Cb3R0b20iLCJWaWRlb1N1YiIsIldvcmtTdWIiLCJXb3JrcyIsInVzZVN0aWNreSIsImlzU3RpY2t5Iiwic2V0U3RpY2t5IiwidXNlU3RhdGUiLCJlbGVtZW50IiwidXNlUmVmIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3R0b20iLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZU91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3VybCIsIl91dGlscyIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsImlzTG9jYWwiLCJocmVmIiwidXJsIiwicGFyc2UiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsInRhcmdldCIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJMaW5rIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwiZSIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlc29sdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbCIsImluZGV4T2YiLCJyZXBsYWNlIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiam9pbiIsIm9wdGlvbnMiLCJwYXRocyIsImNhdGNoIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwidHlwZSIsInByb2Nlc3MiLCJjbG9uZUVsZW1lbnQiLCJleGVjT25jZSIsIlByb3BUeXBlcyIsImV4YWN0IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJwcm9wTmFtZSIsInZhbHVlIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50Iiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiRXJyb3IiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsIl9sZW4iLCJsZW5ndGgiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsIm9rIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIklNQUdFUyIsInNyYyIsInRodW1ibmFpbCIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwiaXNTZWxlY3RlZCIsImNhcHRpb24iLCJ0YWdzIiwiR2FsbGVyeVBhZ2UiLCJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtR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LHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCBCdXR0b24gPSAoe2J1dHRvblN0eWxlLCB0ZXh0fSkgPT4gKFxyXG4gICAgPGJ1dHRvbiAgc3R5bGU9e2J1dHRvblN0eWxlfT5cclxuICAgICAgICB7dGV4dH1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXHJcbmltcG9ydCB7IFJ1YmJlckJhbmQgfSBmcm9tICdyZWFjdC1hd2Vzb21lLXJldmVhbCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IGhlYWRlclN0eWxlPXtcclxuICAgIFxyXG59IFxyXG5cclxuY29uc3Qgc2VjdGlvblN0eWxlID17XHJcbiAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCIsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6XCJ1cmwoL1ZlY3Rvci5zdmcpXCIsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0Olwibm8tcmVwZWF0XCIsXHJcbiAgICBoZWlnaHQ6XCI4MDBweFwiLFxyXG4gICAgYmFja2dyb3VuZFNpemU6XCI1MCVcIixcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjpcIi0zMCUgMTQwJVwiLFxyXG5cclxuXHJcblxyXG59XHJcbmNvbnN0ICBidXR0b25TdHlsZT0ge1xyXG4gICAgdGV4dFRyYW5zZm9ybTogXCJDYXBpdGFsaXplXCIsXHJcbiAgICBkaXNwbGF5OlwiYmxvY2tcIixcclxuICAgIG1hcmdpbjpcIjNyZW0gYXV0b1wiLFxyXG4gICAgbGV0dGVyU3BhY2luZzpcIjNweFwiLFxyXG4gICAgcGFkZGluZzpcIjhweCAxNXB4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6XCI1cHhcIixcclxuICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDIzMy4wNmRlZywgI0ZFMTkwMyAtNjEuODElLCAjRjg3MTBGIDc0LjQxJSlcIixcclxuXHJcblxyXG59XHJcblxyXG5jb25zdCBDZXJ0aWZpZWRTZWN0aW9uID0gKCkgPT4gKFxyXG4gICAgPGRpdiBpZD1cInRyYWluaW5nXCIgc3R5bGU9e3NlY3Rpb25TdHlsZX0+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3ttYXJnaW5Ub3A6XCIxNXJlbVwifX0gPlxyXG4gICAgICAgPFJ1YmJlckJhbmQ+PGgxIGNsYXNzTmFtZT1cIm15LTUgdGV4dC1jZW50ZXJcIj5CZWNvbWUgYSBjZXJ0aWZpZWQgcGhvdG9ncmFwaGVyPC9oMT5cclxuICAgICAgIDwvUnViYmVyQmFuZD5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggbXgtYXV0b1wiPlxyXG4gICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e2ZvbnRTaXplOlwiMTNweFwifX0+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYTwvcD5cclxuICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgIDxCdXR0b24gIHRleHQ9XCJHZXQgU3RhcnRlZFwiIGJ1dHRvblN0eWxlPXtidXR0b25TdHlsZX0gLz5cclxuICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgQ2VydGlmaWVkU2VjdGlvbjsiLCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgV29ya1N1YiBmcm9tIFwiLi9Xb3JrU3ViXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xyXG5cclxuY29uc3QgZm9ybUVsZW1lbnRTdHlsZT17XHJcbiAgICBiYWNrZ3JvdW5kOlwiIzBBMEYxNFwiLFxyXG4gICAgY29sb3I6XCJ3aGl0ZVwiLFxyXG4gICAgYm9yZGVyOlwibm9uZVwiXHJcbn0gXHJcblxyXG5jb25zdCBidXR0b25TdHlsZSA9e1xyXG4gICBcclxuICAgIHdpZHRoOlwiMjAwcHhcIixcclxuICAgIHBhZGRpbmc6XCIycHhcIixcclxuICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxyXG4gICAgZm9udFNpemU6XCIxMnB4XCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOlwiM3B4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImJsYWNrXCIsXHJcbiAgICBib3JkZXI6XCIxcHggc29saWQgIzc2MTkwM1wiXHJcbn1cclxuXHJcbmNvbnN0IHRleHRDb2xvciA9e1xyXG4gICAgY29sb3I6XCIjYzNjM2MzXCJcclxufVxyXG5cclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGlkPVwiY29udGFjdFwiIHN0eWxlPXt7YmFja2dyb3VuZDpcImJsYWNrXCIsIHBhZGRpbmc6XCI2cmVtIDByZW1cIiwgbWluSGVpZ2h0OlwiNzAwcHhcIiwgfX0+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgPlxyXG4gICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LTVcIj5Db250YWN0PC9oMT5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtNVwiIHN0eWxlPXt7Y29sb3I6XCIjRkUxOTAzXCJ9fT5GZWVkYmFja3M8L2gyPlxyXG4gICAgICAgICAgICAgICA8cCBzdHlsZT17dGV4dENvbG9yfT5HZXQgaW4gdG91Y2ggd2l0aCB1cyBhbmQgd2Ugd2lsbCBzZXJ2ZSB5b3UgdG8geW91ciBzYXRpc2ZhY3Rpb25zLCB3ZSB3b3VsZCByZXNwb25kIHRvIHlvdXIgZW5xdWlyaWVzIGFzIHF1aWNrIGFzIHdpdGhpbiBhbiBob3VyIG9mIHlvdSBtZXNzYWdpbmcgdXM8L3A+XHJcbiAgICAgICAgICAgICAgIDxwIHN0eWxlPXt0ZXh0Q29sb3J9PkFsc28gbGV0IHVzIGtub3cgd2hhdCB5b3UgdGhpbmsgYWJvdXQgb3VyIHByb2R1Y3RzIGFuZCBzZXJ2aWNlIGFuZCBob3cgd2UgY2FuIGltcHJvdmUgb24gdGhlbSwgeW91ciBwb3NpdGl2ZSBmZWVkYmFja3MgYW5kIGNyaXRpY2lzbXMgYXJlIGhpZ2hseSByZWdhcmRlZCBhbmQgd2lsbCBiZSBwdXQgaW50byBjb25zaWRlcmF0aW9uPC9wPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgc3R5bGU9e2Zvcm1FbGVtZW50U3R5bGV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgbmFtZSA9XCJmaXJzdC1uYW1lXCIgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIHN0eWxlPXtmb3JtRWxlbWVudFN0eWxlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCIgbmFtZSA9XCJsYXN0LW5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17Zm9ybUVsZW1lbnRTdHlsZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIG5hbWUgPVwiZW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj4gXHJcblxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzdHlsZT17e2hlaWdodDpcIjMwMHB4XCIsICBiYWNrZ3JvdW5kOlwiIzBBMEYxNFwiLCBjb2xvcjpcIndoaXRlXCIsICBib3JkZXI6XCJub25lXCIsIH19IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9IFwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ29tbWVudFwiIG5hbWU9XCJjb21tZW50XCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJTZW5kXCIgYnV0dG9uU3R5bGU9e2J1dHRvblN0eWxlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcblxyXG4gICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKTtcclxuICBleHBvcnQgZGVmYXVsdCBDb250YWN0OyIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXb3JrU3ViIGZyb20gXCIuL1dvcmtTdWJcIjtcclxuaW1wb3J0IEZvb3Rlckxpc3QgZnJvbSBcIi4vRm9vdGVyTGlzdFwiO1xyXG5pbXBvcnQgRm9vdGVyU3ViIGZyb20gXCIuL0Zvb3RlclN1YlwiO1xyXG5pbXBvcnQge1NvY2lhbE1lZGlhSWNvbnNSZWFjdH0gZnJvbSAnc29jaWFsLW1lZGlhLWljb25zLXJlYWN0JztcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHRleHQxPSBbIFwiUGhvdG9ncmFwaHlcIixcIlZpZGVvZ3JhcGh5XCIsXCJUcmFpbmluZ1wiLCBcIk1vZGVsIHNob3RcIiwgXCJXZWRkaW5nIENvdmVyYWdlXCIsIFwiVmlkZW8gRGlyZWN0aW5nXCJdXHJcbmNvbnN0IHRleHQyPSBbIFwiUGhvdG9ncmFwaHlcIixcIlZpZGVvZ3JhcGh5XCIsXCJUcmFpbmluZ1wiLFwiVmlkZW8gTWFraW5nXCJdXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwQTBGMTRcIiwgcGFkZGluZ0JvdHRvbTpcIlwifX0+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG15LTVcIiA+XHJcbiAgICAgICB7LyogPGgxIGNsYXNzTmFtZT1cIm15LTVcIj5EaXNjb3ZlciBPdXIgV29ya3M8L2gxPiAqL31cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPjxGb290ZXJMaXN0IHRleHQ9e3RleHQxfSAvPjwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgPEZvb3Rlckxpc3QgdGV4dD17dGV4dDJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTNcIj48U29jaWFsTWVkaWFJY29uc1JlYWN0IGJhY2tncm91bmRDb2xvcj1cImdyZXlcIiBpY29uPVwidHdpdHRlclwiIHVybD1cImh0dHBzOi8vdHdpdHRlci5jb20veW91ci10d2l0dGVyLWhhbmRsZVwiLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0zXCI+PFNvY2lhbE1lZGlhSWNvbnNSZWFjdCBpY29uPVwiZmFjZWJvb2tcIiBiYWNrZ3JvdW5kQ29sb3I9XCJncmV5XCIgdXJsPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS95b3VyLXR3aXR0ZXItaGFuZGxlXCIvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTNcIj48U29jaWFsTWVkaWFJY29uc1JlYWN0IGljb249XCJ5b3V0dWJlXCIgIGJhY2tncm91bmRDb2xvcj1cImdyZXlcIiB1cmw9XCJodHRwczovL3R3aXR0ZXIuY29tL3lvdXItdHdpdHRlci1oYW5kbGVcIi8+PC9zcGFuPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIkJpZ3RpbWUgTG9nb1wiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSBzcmM9XCIvbG9nbzIucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc2Vjb25kYXJ5XCI+aW5mb0BiaWd0aW1lLmNvbTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gICAgPEZvb3RlclN1YiAvPlxyXG4gICA8L2Rpdj5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIlxyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCJcclxuXHJcbmNvbnN0IGJ1dHRvblN0eWxlID17XHJcbiAgICBkaXNwbGF5OlwiYmxvY2tcIixcclxuICAgIG1hcmdpbjpcImF1dG9cIixcclxuICAgIHdpZHRoOlwiMjAwcHhcIixcclxuICAgIHBhZGRpbmc6XCIycHhcIixcclxuICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxyXG4gICAgZm9udFNpemU6XCIxMnB4XCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOlwiM3B4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgyMzMuMDZkZWcsICNGRTE5MDMgLTYxLjgxJSwgI0Y4NzEwRiA3NC40MSUpXCJcclxuICB9XHJcblxyXG4gIGNvbnN0IHRleHRTdHlsZSA9e1xyXG4gICAgICBsZXR0ZXJTcGFjaW5nOlwiMnB4XCJcclxuXHJcbiAgfVxyXG5jb25zdCBGb290ZXJMaXN0ID0gKHt0ZXh0fSkgPT4gKFxyXG4gICAgPHVsPlxyXG4gICAgICAgIHt0ZXh0Lm1hcCgocmVzLCBrZXkpPT5cclxuICAgICAgICAgICAgPGxpIHN0eWxlPXt7bGlzdFN0eWxlOlwibm9uZVwifX0gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIj57cmVzfTwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxuICBleHBvcnQgZGVmYXVsdCBGb290ZXJMaXN0OyIsIlxyXG5cclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5jb25zdCBGb290ZXJTdWIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDpcImJsYWNrXCJ9fT5cclxuICBcclxuICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRlZmF1bHQgcHgtNVwiIHN0eWxlPXt7aGVpZ2h0OlwiODBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiLH19PlxyXG4gICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5XCIgc3R5bGU9e3twYWRkaW5nVG9wOlwiMnJlbVwifX0gPiBDb3B5cmlnaHQgMjAyMDxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcmVtXCJ9fT5EZXZlbG9wZWQgYnkgVmltZXJvbiBUZWNoPC9zcGFuPjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuIFxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgRm9vdGVyU3ViOyIsIi8vIGNvbXBvbmVudHMvSGVhZGVyLmpzXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vTmF2QmFyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCJcclxuaW1wb3J0IEJhbm5lckFuaW0gZnJvbSAncmMtYmFubmVyLWFuaW0nO1xyXG5pbXBvcnQgUXVldWVBbmltIGZyb20gJ3JjLXF1ZXVlLWFuaW0nO1xyXG5pbXBvcnQgVHdlZW5PbmUgZnJvbSAncmMtdHdlZW4tb25lJztcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gJ3JlYWN0LWF3ZXNvbWUtcmV2ZWFsJztcclxuaW1wb3J0IHsgU2xpZGUgfSBmcm9tICdyZWFjdC1hd2Vzb21lLXJldmVhbCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IGhlYWRlclN0eWxlID0ge1xyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIGJhY2tncm91bmQ6IFwidXJsKGh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzE1OTUyMzMvcGV4ZWxzLXBob3RvLTE1OTUyMzMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj00Jnc9NTAwKVwiLFxyXG4gICAgLy8gd2lkdGg6IFwiMjMwOXB4XCIsXHJcbiAgICBtaW5IZWlnaHQ6IFwiNzAwcHhcIixcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6XCJuby1yZXBlYXRcIixcclxuICAgIGJhY2tncm91bmRTaXplOlwiY29udGVudFwiLFxyXG4gICAgZm9udEZhbWlseTogXCJBbGVncmV5YSBTYW5zXCIsXHJcbiAgICBmb250RnR5bGU6IFwibm9ybWFsXCIsXHJcbiAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxyXG4gICAgZm9udFNpemU6IFwiMzBweFwiLFxyXG4gICAgbGluZUhlaWdodDogXCIzNnB4XCIsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOlwibGVmdCB0b3BcIixcclxuICAgIG9wYWNpdHk6MVxyXG4gIH07XHJcblxyXG5jb25zdCBidXR0b25TdHlsZSA9e1xyXG4gIHdpZHRoOlwiMjAwcHhcIixcclxuICBwYWRkaW5nOlwiNXB4XCIsXHJcbiAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMjMzLjA2ZGVnLCAjRkUxOTAzIC02MS44MSUsICNGODcxMEYgNzQuNDElKVwiXHJcbn1cclxuXHJcbmNvbnN0IGJ1dHRvbldhdGNoU3R5bGUgPXtcclxuICBtaW5XaWR0aDpcIjIwMHB4XCIsXHJcbiAgcGFkZGluZzpcIjVweFwiLFxyXG4gIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICBib3JkZXI6XCIycHggc29saWQgd2hpdGVcIixcclxuICBtYXJnaW5MZWZ0OlwiMTVweFwiXHJcblxyXG59XHJcbmNvbnN0IHRleHQ9IFwiVHJhaW5pbmdcIjtcclxuY29uc3QgdGV4dFdhdGNoPSBcIldhdGNoIFZpZGVvXCI7XHJcblxyXG4gICBjb25zdCBpbWdTdHlsZSA9e1xyXG4gICAgb3BhY2l0eToxLFxyXG4gICAgZm9udFNpemU6XCIxNDBweFwiLFxyXG4gICAgZm9udFdlaWdodDo5MDAsXHJcbiAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxuICAgIG1hcmdpblRvcDpcIjE1cmVtXCJcclxuICAgfVxyXG5cclxuICAgY29uc3QgeyBFbGVtZW50IH0gPSBCYW5uZXJBbmltO1xyXG5jb25zdCBCZ0VsZW1lbnQgPSBFbGVtZW50LkJnRWxlbWVudDtcclxuICBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICA8ZGl2ICBjbGFzc05hbWU9XCJIZWFkZXJcIiBzdHlsZT17aGVhZGVyU3R5bGV9PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlPjxoMSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkZXIgbXQtNVwiPlBob3RvZ3JhcGh5IEZvciB0aGUgRnV0dXJlPC9oMT48L1NsaWRlPlxyXG4gICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmE8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hPC9wPlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2xpZGUgZGFtcGluZz17M30+PGgxIHN0eWxlPXtpbWdTdHlsZX0gID5cclxuICAgICAgICAgICAgICAgICAgICBCVFNcclxuICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPC9TbGlkZT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiY2VudGVyV3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGJ1dHRvblN0eWxlPXtidXR0b25TdHlsZX0gdGV4dD17dGV4dH0+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvbldhdGNoU3R5bGV9IHRleHQ9e3RleHRXYXRjaH0+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgey8qIDxCYW5uZXJBbmltPlxyXG4gICAgICA8RWxlbWVudCBrZXk9XCJhYWFcIlxyXG4gICAgICAgIHByZWZpeENscz1cImJhbm5lci11c2VyLWVsZW1cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJnRWxlbWVudCBrZXk9XCJiZ1wiIGNsYXNzTmFtZT1cImJnXCI+XHJcbiAgICAgICAgICA8dmlkZW8gbG9vcCBhdXRvUGxheT5cclxuICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwczovL29zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9Db0RGdm94YVFwVG5MT00ubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XHJcbiAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgIDwvQmdFbGVtZW50PlxyXG4gICAgICAgIDxRdWV1ZUFuaW0gbmFtZT1cIlF1ZXVlQW5pbVwiPlxyXG4gICAgICAgICAgPGgxIGtleT1cImgxXCI+QW50IE1vdGlvbiBEZW1vPC9oMT5cclxuICAgICAgICAgIDxwIGtleT1cInBcIj5BbnQgTW90aW9uIERlbW8uQW50IE1vdGlvbiBEZW1vLkFudCBNb3Rpb24gRGVtby5BbnQgTW90aW9uIERlbW88L3A+XHJcbiAgICAgICAgPC9RdWV1ZUFuaW0+XHJcbiAgICAgICAgPFR3ZWVuT25lIGFuaW1hdGlvbj17eyB5OiA1MCwgb3BhY2l0eTogMCwgdHlwZTogJ2Zyb20nIH19IG5hbWU9XCJUd2Vlbk9uZVwiPlxyXG4gICAgICAgICAgQW50IE1vdGlvbiBEZW1vLkFudCBNb3Rpb25EZW1vXHJcbiAgICAgICAgPC9Ud2Vlbk9uZT5cclxuICAgICAgPC9FbGVtZW50PlxyXG4gICAgICA8RWxlbWVudCBrZXk9XCJiYmJcIlxyXG4gICAgICAgIHByZWZpeENscz1cImJhbm5lci11c2VyLWVsZW1cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJnRWxlbWVudFxyXG4gICAgICAgICAga2V5PVwiYmdcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmdcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKGh0dHBzOi8vb3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL0loQ05UcVBwTGVUTm53ci5qcGcpJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFF1ZXVlQW5pbSBuYW1lPVwiUXVldWVBbmltXCI+XHJcbiAgICAgICAgICA8aDEga2V5PVwiaDFcIj5BbnQgTW90aW9uIERlbW88L2gxPlxyXG4gICAgICAgICAgPHAga2V5PVwicFwiPkFudCBNb3Rpb24gRGVtby5BbnQgTW90aW9uIERlbW8uQW50IE1vdGlvbiBEZW1vLkFudCBNb3Rpb24gRGVtbzwvcD5cclxuICAgICAgICA8L1F1ZXVlQW5pbT5cclxuICAgICAgICA8VHdlZW5PbmUgYW5pbWF0aW9uPXt7IHk6IDUwLCBvcGFjaXR5OiAwLCB0eXBlOiAnZnJvbScsIGRlbGF5OiAyMDAgfX0gbmFtZT1cIlR3ZWVuT25lXCI+XHJcbiAgICAgICAgICBBbnQgTW90aW9uIERlbW8uQW50IE1vdGlvbkRlbW9cclxuICAgICAgICA8L1R3ZWVuT25lPlxyXG4gICAgICA8L0VsZW1lbnQ+XHJcbiAgICAgIDxFbGVtZW50IGtleT1cImNjY1wiXHJcbiAgICAgICAgcHJlZml4Q2xzPVwiYmFubmVyLXVzZXItZWxlbVwiXHJcbiAgICAgID5cclxuICAgICAgICA8QmdFbGVtZW50XHJcbiAgICAgICAgICBrZXk9XCJiZ1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZ1wiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInVybChodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xNTk1MjMzL3BleGVscy1waG90by0xNTk1MjMzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9NCZ3PTUwMClcIixcclxuICAgICAgICAgICAgLy8gd2lkdGg6IFwiMjMwOXB4XCIsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogXCI3MDBweFwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0Olwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOlwiY29udGVudFwiLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkFsZWdyZXlhIFNhbnNcIixcclxuICAgICAgICAgICAgZm9udEZ0eWxlOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMzZweFwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246XCJsZWZ0IHRvcFwiLFxyXG4gICAgICAgICAgICBvcGFjaXR5OjFcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UXVldWVBbmltIG5hbWU9XCJRdWV1ZUFuaW1cIj5cclxuICAgICAgICAgIDxoMSBrZXk9XCJoMVwiPkFudCBNb3Rpb24gRGVtbzwvaDE+XHJcbiAgICAgICAgICA8cCBrZXk9XCJwXCI+QW50IE1vdGlvbiBEZW1vLkFudCBNb3Rpb24gRGVtby5BbnQgTW90aW9uIERlbW8uQW50IE1vdGlvbiBEZW1vPC9wPlxyXG4gICAgICAgIDwvUXVldWVBbmltPlxyXG4gICAgICAgIDxUd2Vlbk9uZSBhbmltYXRpb249e3sgeTogNTAsIG9wYWNpdHk6IDAsIHR5cGU6ICdmcm9tJywgZGVsYXk6IDIwMCB9fSBuYW1lPVwiVHdlZW5PbmVcIj5cclxuICAgICAgICAgIEFudCBNb3Rpb24gRGVtby5BbnQgTW90aW9uIERlbW9cclxuICAgICAgICA8L1R3ZWVuT25lPlxyXG4gICAgICA8L0VsZW1lbnQ+XHJcbiAgICA8L0Jhbm5lckFuaW0+ICovfVxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7fVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCIvLyBjb21wb25lbnRzL0xheW91dC5qc1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9OYXZCYXJcIjtcclxuaW1wb3J0IHVzZVN0aWNreSBmcm9tIFwiLi4vaG9va3MvdXNlU3RpY2t5XCJcclxuXHJcblxyXG5cclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxuICBtYXJnaW46XCIwcHhcIixcclxuICBwYWRkaW5nOlwiMHB4XCJcclxufTtcclxuXHJcbmNvbnN0IGNvbnRlbnRTdHlsZSA9IHtcclxuICBmbGV4OiAxLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCJcclxufTtcclxuXHJcbmNvbnN0IExheW91dCA9IHByb3BzID0+IHtcclxuICByZXR1cm4oPGRpdiBjbGFzc05hbWU9XCJMYXlvdXRcIiBzdHlsZT17bGF5b3V0U3R5bGV9PlxyXG4gICAgPE5hdkJhciAgLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGVudFwiICBzdHlsZT17Y29udGVudFN0eWxlfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsIi8vIGNvbXBvbmVudHMvTmF2QmFyLmpzXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5cclxuXHJcbmNvbnN0IG5hdkJhclN0eWxlID0ge1xyXG4gICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCI2MHB4XCJcclxuICB9O1xyXG4gIGNvbnN0IGxvZ29TdHlsZSA9IHtcclxuICAgIGhlaWdodDpcIjYwcHhcIixcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgTmF2QmFyID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZCYXJDb250YWluZXJcIiBzdHlsZT17bmF2QmFyU3R5bGV9PlxyXG4gICAgPE5hdmJhciBleHBhbmQ9XCJsZ1wiIGZpeGVkPVwidG9wXCIgIHZhcmlhbnQ9XCJkYXJrXCI+XHJcbiAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCI+PGltZyBzcmM9XCIvbG9nby5wbmdcIiBzdHlsZT17bG9nb1N0eWxlfS8+PC9OYXZiYXIuQnJhbmQ+XHJcblxyXG4gICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XHJcblxyXG4gICAgICA8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cclxuICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNob21lXCI+SG9tZTwvTmF2Lkxpbms+XHJcbiAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjd29ya1wiPldvcms8L05hdi5MaW5rPlxyXG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiI3RyYWluaW5nXCI+VHJhaW5pbmc8L05hdi5MaW5rPlxyXG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiI2NvbnRhY3RcIj5Db250YWN0PC9OYXYuTGluaz5cclxuICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNzZXJ2aWNlXCI+U2V2aWNlPC9OYXYuTGluaz5cclxuICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNnYWxsZXJ5XCI+R2FsbGVyeTwvTmF2Lkxpbms+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvTmF2PlxyXG4gICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuXHJcbiAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXb3JrU3ViIGZyb20gXCIuL1dvcmtTdWJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XHJcbmltcG9ydCB7IEZhZGUgfSBmcm9tICdyZWFjdC1hd2Vzb21lLXJldmVhbCc7XHJcblxyXG5cclxuY29uc3QgdGV4dD0ge1xyXG4gICAgdGl0bGU6XCJHcmVhdCB1cFwiLFxyXG4gICAgbGluazpcIi9saW5rXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXCIsXHJcbiAgICBwaXg6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjU2NzM3L3BleGVscy1waG90by0yNTY3MzcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCJcclxufVxyXG5jb25zdCBidXR0b25TdHlsZSA9e1xyXG4gICAgZGlzcGxheTpcImJsb2NrXCIsXHJcbiAgICBtYXJnaW46XCIxcmVtIGF1dG8gIDNyZW0gIGF1dG9cIixcclxuICAgIHdpZHRoOlwiMjAwcHhcIixcclxuICAgIHBhZGRpbmc6XCIycHhcIixcclxuICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxyXG4gICAgZm9udFNpemU6XCIxMnB4XCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOlwiM3B4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgyMzMuMDZkZWcsICNGRTE5MDMgLTYxLjgxJSwgI0Y4NzEwRiA3NC40MSUpXCJcclxuICB9XHJcblxyXG5jb25zdCBTZXJ2aWNlQ2FyZCA9ICgpID0+IChcclxuICAgIDxGYWRlPjxkaXYgc3R5bGU9e3sgYm9yZGVyOlwiMXB4IHNvbGlkIHdoaXRlXCIsIHBhZGRpbmc6XCIzcmVtIDFyZW0gMXJlbSAxcmVtXCJ9fT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kPC9wPlxyXG4gICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvblN0eWxlfSB0ZXh0PVwiUGhvdG9ncmFwaHlcIiAvPiBcclxuXHJcbiAgICAgICAgPHA+PC9wPlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kPC9wPlxyXG4gICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvblN0eWxlfSB0ZXh0PVwiTW92aWUgTWFraW5nXCIgLz4gXHJcblxyXG4gICAgICAgIDxwPjwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kPC9wPlxyXG4gICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvblN0eWxlfSB0ZXh0PVwiTW9kZWwgV29ya3NcIiAvPiBcclxuICAgPC9kaXY+XHJcbiAgIDwvRmFkZT5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IFNlcnZpY2VDYXJkOyIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTZXJ2aWNlQ2FyZCBmcm9tIFwiLi9TZXJ2aWNlQ2FyZFwiO1xyXG5cclxuY29uc3QgdGV4dD0ge1xyXG4gICAgdGl0bGU6XCJHcmVhdCB1cFwiLFxyXG4gICAgbGluazpcIi9saW5rXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXCIsXHJcbiAgICBwaXg6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjU2NzM3L3BleGVscy1waG90by0yNTY3MzcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCJcclxufVxyXG5jb25zdCBDb250YWluZXJTdHlsZT17XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJ1cmwoIGh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzE2NDQ4ODgvcGV4ZWxzLXBob3RvLTE2NDQ4ODguanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj00Jnc9NTAwXCIsXHJcbiAgICAvLyB3aWR0aDogXCIyMzA5cHhcIixcclxuICAgIGhlaWdodDogXCI4MDBweFwiLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDpcIm5vLXJlcGVhdFwiLFxyXG4gICAgYmFja2dyb3VuZFNpemU6XCJjb250ZW50XCIsXHJcbiAgICBmb250RmFtaWx5OiBcIkx1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1wiLFxyXG4gICAgZm9udEZ0eWxlOiBcIm5vcm1hbFwiLFxyXG4gICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcclxuICAgIGZvbnRTaXplOiBcIjMwcHhcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMzZweFwiLFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjpcImxlZnQgdG9wXCIsXHJcbiAgICBvcGFjaXR5OjF9IFxyXG5cclxuXHJcbmNvbnN0IFNlcnZpY2UgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGlkPVwic2VydmljZVwiICBzdHlsZT17Q29udGFpbmVyU3R5bGV9PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteS01XCIgPlxyXG4gICAgICAgPGgxIGNsYXNzTmFtZT1cIm15LTUgdGV4dC1jZW50ZXJcIj5TZXJ2aWNlPC9oMT5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPjxTZXJ2aWNlQ2FyZCB0ZXh0PXt0ZXh0fSAvPjwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IFNlcnZpY2U7IiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFZpZGVvU3ViIGZyb20gXCIuL1ZpZGVvU3ViXCI7XHJcbmltcG9ydCBXb3JrU3ViIGZyb20gXCIuL1dvcmtTdWJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuXHJcblxyXG5cclxuY29uc3QgdGV4dD0ge1xyXG4gICAgdGl0bGU6XCJHcmVhdCB1cFwiLFxyXG4gICAgbGluazpcIi9saW5rXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXCIsXHJcbiAgICBwaXg6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjU2NzM3L3BleGVscy1waG90by0yNTY3MzcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCJcclxufVxyXG5cclxuXHJcbmNvbnN0IGJ1dHRvblN0eWxlID17XHJcbiAgIGRpc3BsYXk6XCJibG9ja1wiLFxyXG4gICBtYXJnaW5Ub3A6XCIycmVtXCIsXHJcbiAgIG1hcmdpbkxlZnQ6XCJhdXRvXCIsXHJcbiAgICB3aWR0aDpcIjIwMHB4XCIsXHJcbiAgICBwYWRkaW5nOlwiMnB4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcclxuICAgIGZvbnRTaXplOlwiMTJweFwiLFxyXG4gICAgbGV0dGVyU3BhY2luZzpcIjNweFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJibGFja1wiLFxyXG4gICAgYm9yZGVyOlwiMXB4IHNvbGlkICMyMTIyMzNcIlxyXG59XHJcblxyXG5jb25zdCBWaWRlbyA9ICgpID0+IChcclxuICAgIDxkaXYgaWQ9XCJ3b3JrXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzBBMEYxNFwiLG1pbkhlaWdodDpcIjgwMHB4XCIsIHBhZGRpbmdCb3R0b206XCI0cmVtXCJ9fT5cclxuICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXktNVwiID5cclxuICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTpcIjZyZW1cIiwgbWFyZ2luVG9wOlwiNnJlbVwifX0+VmlkZW8gU2hvdzwvaDI+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+PFZpZGVvU3ViIHRleHQ9e3RleHR9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+PFZpZGVvU3ViIHRleHQ9e3RleHR9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj48VmlkZW9TdWIgdGV4dD17dGV4dH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPjxWaWRlb1N1YiB0ZXh0PXt0ZXh0fSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+PFZpZGVvU3ViIHRleHQ9e3RleHR9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8QnV0dG9uIHRleHQ9XCJTZWUgbW9yZVwiIGJ1dHRvblN0eWxlPXtidXR0b25TdHlsZX0gLz5cclxuXHJcbiAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IFZpZGVvOyIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiXHJcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIlxyXG5cclxuY29uc3QgYnV0dG9uU3R5bGUgPXtcclxuICAgIGRpc3BsYXk6XCJibG9ja1wiLFxyXG4gICAgbWFyZ2luOlwiYXV0b1wiLFxyXG4gICAgd2lkdGg6XCIyMDBweFwiLFxyXG4gICAgcGFkZGluZzpcIjJweFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOlwiNHB4XCIsXHJcbiAgICBmb250U2l6ZTpcIjEycHhcIixcclxuICAgIGxldHRlclNwYWNpbmc6XCIzcHhcIixcclxuICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDIzMy4wNmRlZywgI0ZFMTkwMyAtNjEuODElLCAjRjg3MTBGIDc0LjQxJSlcIlxyXG4gIH1cclxuXHJcbiAgY29uc3QgdGV4dFN0eWxlID17XHJcbiAgICAgIGxldHRlclNwYWNpbmc6XCIycHhcIlxyXG5cclxuICB9XHJcbmNvbnN0IFZpZGVvU3ViID0gKHt0ZXh0fSkgPT4gKFxyXG4gICAgPENhcmQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOlwiIzMwMTkyOVwiIH19PlxyXG4gICAgPGEgaHJlZj17dGV4dC5saW5rfT48Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz17dGV4dC5waXh9IC8+PC9hPlxyXG4gICAgPENhcmQuQm9keT5cclxuICAgIFxyXG4gICAgPC9DYXJkLkJvZHk+XHJcbiAgPC9DYXJkPlxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgVmlkZW9TdWI7IiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCJcclxuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSAncmVhY3QtYXdlc29tZS1yZXZlYWwnO1xyXG5cclxuXHJcbmNvbnN0IGJ1dHRvblN0eWxlID17XHJcbiAgICBkaXNwbGF5OlwiYmxvY2tcIixcclxuICAgIG1hcmdpbjpcImF1dG9cIixcclxuICAgIHdpZHRoOlwiMjAwcHhcIixcclxuICAgIHBhZGRpbmc6XCIycHhcIixcclxuICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxyXG4gICAgZm9udFNpemU6XCIxMnB4XCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOlwiM3B4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgyMzMuMDZkZWcsICNGRTE5MDMgLTYxLjgxJSwgI0Y4NzEwRiA3NC40MSUpXCJcclxuICB9XHJcblxyXG4gIGNvbnN0IHRleHRTdHlsZSA9e1xyXG4gICAgICBsZXR0ZXJTcGFjaW5nOlwiMnB4XCJcclxuXHJcbiAgfVxyXG5jb25zdCBXb3JrU3ViID0gKHt0ZXh0fSkgPT4gKFxyXG48RmFkZT5cclxuICAgIDxDYXJkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjpcIiMzMDE5MjlcIiB9fT5cclxuICAgIDxhIGhyZWY9e3RleHQubGlua30+PENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9e3RleHQucGl4fSAvPjwvYT5cclxuICAgIDxDYXJkLkJvZHk+XHJcbiAgICA8Q2FyZC5UaXRsZT57dGV4dC50aXRsZX08L0NhcmQuVGl0bGU+XHJcbiAgICAgIDxDYXJkLlRleHQgc3R5bGUgPXt0ZXh0U3R5bGV9PlxyXG4gICAgICAgIHt0ZXh0LmRlc2NyaXB0aW9ufVxyXG4gICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgPEJ1dHRvbiBidXR0b25TdHlsZT17YnV0dG9uU3R5bGV9IHRleHQ9XCJTZWUgbW9yZVwiLz5cclxuICAgIDwvQ2FyZC5Cb2R5PlxyXG4gIDwvQ2FyZD5cclxuICA8L0ZhZGU+XHJcbiAgKTtcclxuICBleHBvcnQgZGVmYXVsdCBXb3JrU3ViOyIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXb3JrU3ViIGZyb20gXCIuL1dvcmtTdWJcIjtcclxuaW1wb3J0IFZpZGVvIGZyb20gXCIuL1ZpZGVvXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IHRleHQ9IHtcclxuICAgIHRpdGxlOlwiR3JlYXQgdXBcIixcclxuICAgIGxpbms6XCIvbGlua1wiLFxyXG4gICAgZGVzY3JpcHRpb246XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFwiLFxyXG4gICAgcGl4OiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzI1NjczNy9wZXhlbHMtcGhvdG8tMjU2NzM3LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiXHJcbn1cclxuY29uc3QgaGVhZGVyU3R5bGU9e1xyXG4gICAgXHJcbn0gXHJcblxyXG5cclxuY29uc3QgV29ya3MgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGlkPVwid29ya1wiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwQTBGMTRcIixtaW5IZWlnaHQ6XCI4MDBweFwiLCBwYWRkaW5nQm90dG9tOlwiNHJlbVwifX0+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG15LTVcIiA+XHJcbiAgICAgICA8aDEgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOlwiNnJlbVwiLCBtYXJnaW5Ub3A6XCI2cmVtXCJ9fT5EaXNjb3ZlciBPdXIgV29ya3M8L2gxPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPjxXb3JrU3ViIHRleHQ9e3RleHR9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPjxXb3JrU3ViIHRleHQ9e3RleHR9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj48V29ya1N1YiB0ZXh0PXt0ZXh0fSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+PFdvcmtTdWIgdGV4dD17dGV4dH0gLz48L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICAgPFZpZGVvIC8+XHJcbiAgIDwvZGl2PlxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgV29ya3M7IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmZ1bmN0aW9uIHVzZVN0aWNreSgpIHtcclxuICBjb25zdCBbaXNTdGlja3ksIHNldFN0aWNreV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBlbGVtZW50ID0gdXNlUmVmKG51bGwpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxZID4gZWxlbWVudC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbVxyXG4gICAgICA/IHNldFN0aWNreSh0cnVlKVxyXG4gICAgICA6IHNldFN0aWNreShmYWxzZSlcclxuICB9XHJcblxyXG4gIC8vIFRoaXMgZnVuY3Rpb24gaGFuZGxlIHRoZSBzY3JvbGwgcGVyZm9ybWFuY2UgaXNzdWVcclxuICBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0ID0gMjAsIGltbWVkaWF0ZSA9IHRydWUpID0+IHtcclxuICAgIGxldCB0aW1lT3V0XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBsZXQgY29udGV4dCA9IHRoaXMsXHJcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50c1xyXG4gICAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcclxuICAgICAgICB0aW1lT3V0ID0gbnVsbFxyXG4gICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZU91dFxyXG4gICAgICBjbGVhclRpbWVvdXQodGltZU91dClcclxuICAgICAgdGltZU91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpXHJcbiAgICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZGVib3VuY2UoaGFuZGxlU2Nyb2xsKSlcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IGhhbmRsZVNjcm9sbClcclxuICAgIH1cclxuICB9LCBbZGVib3VuY2UsIGhhbmRsZVNjcm9sbF0pXHJcblxyXG4gIHJldHVybiB7IGlzU3RpY2t5LCBlbGVtZW50IH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3RpY2t5IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXJsPXJlcXVpcmUoXCJ1cmxcIik7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO3ZhciBfcm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm91dGVyXCIpKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO2Z1bmN0aW9uIGlzTG9jYWwoaHJlZil7dmFyIHVybD0oMCxfdXJsLnBhcnNlKShocmVmLGZhbHNlLHRydWUpO3ZhciBvcmlnaW49KDAsX3VybC5wYXJzZSkoKDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpLGZhbHNlLHRydWUpO3JldHVybiF1cmwuaG9zdHx8dXJsLnByb3RvY29sPT09b3JpZ2luLnByb3RvY29sJiZ1cmwuaG9zdD09PW9yaWdpbi5ob3N0O31mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jKXt2YXIgbGFzdEhyZWY9bnVsbDt2YXIgbGFzdEFzPW51bGw7dmFyIGxhc3RSZXN1bHQ9bnVsbDtyZXR1cm4oaHJlZixhcyk9PntpZihsYXN0UmVzdWx0JiZocmVmPT09bGFzdEhyZWYmJmFzPT09bGFzdEFzKXtyZXR1cm4gbGFzdFJlc3VsdDt9dmFyIHJlc3VsdD1mb3JtYXRGdW5jKGhyZWYsYXMpO2xhc3RIcmVmPWhyZWY7bGFzdEFzPWFzO2xhc3RSZXN1bHQ9cmVzdWx0O3JldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZm9ybWF0VXJsKHVybCl7cmV0dXJuIHVybCYmdHlwZW9mIHVybD09PSdvYmplY3QnPygwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikodXJsKTp1cmw7fXZhciBvYnNlcnZlcjt2YXIgbGlzdGVuZXJzPW5ldyBNYXAoKTt2YXIgSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP3dpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcjpudWxsO3ZhciBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIGdldE9ic2VydmVyKCl7Ly8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbmlmKG9ic2VydmVyKXtyZXR1cm4gb2JzZXJ2ZXI7fS8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuaWYoIUludGVyc2VjdGlvbk9ic2VydmVyKXtyZXR1cm4gdW5kZWZpbmVkO31yZXR1cm4gb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9PntpZighbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKXtyZXR1cm47fXZhciBjYj1saXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCk7aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjApe29ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO2xpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KTtjYigpO319KTt9LHtyb290TWFyZ2luOicyMDBweCd9KTt9dmFyIGxpc3RlblRvSW50ZXJzZWN0aW9ucz0oZWwsY2IpPT57dmFyIG9ic2VydmVyPWdldE9ic2VydmVyKCk7aWYoIW9ic2VydmVyKXtyZXR1cm4oKT0+e307fW9ic2VydmVyLm9ic2VydmUoZWwpO2xpc3RlbmVycy5zZXQoZWwsY2IpO3JldHVybigpPT57dHJ5e29ic2VydmVyLnVub2JzZXJ2ZShlbCk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO31saXN0ZW5lcnMuZGVsZXRlKGVsKTt9O307Y2xhc3MgTGluayBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IocHJvcHMpe3N1cGVyKHByb3BzKTt0aGlzLnA9dm9pZCAwO3RoaXMuY2xlYW5VcExpc3RlbmVycz0oKT0+e307dGhpcy5mb3JtYXRVcmxzPW1lbW9pemVkRm9ybWF0VXJsKChocmVmLGFzSHJlZik9PntyZXR1cm57aHJlZjooMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGhyZWYpKSxhczphc0hyZWY/KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChhc0hyZWYpKTphc0hyZWZ9O30pO3RoaXMubGlua0NsaWNrZWQ9ZT0+e3Zhcntub2RlTmFtZSx0YXJnZXR9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZS5tZXRhS2V5fHxlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUubmF0aXZlRXZlbnQmJmUubmF0aXZlRXZlbnQud2hpY2g9PT0yKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxucmV0dXJuO312YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTtpZighaXNMb2NhbChocmVmKSl7Ly8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxucmV0dXJuO312YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjtocmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsaHJlZik7YXM9YXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxhcyk6aHJlZjtlLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG52YXJ7c2Nyb2xsfT10aGlzLnByb3BzO2lmKHNjcm9sbD09bnVsbCl7c2Nyb2xsPWFzLmluZGV4T2YoJyMnKTwwO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbl9yb3V0ZXIuZGVmYXVsdFt0aGlzLnByb3BzLnJlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdzp0aGlzLnByb3BzLnNoYWxsb3d9KS50aGVuKHN1Y2Nlc3M9PntpZighc3VjY2VzcylyZXR1cm47aWYoc2Nyb2xsKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtkb2N1bWVudC5ib2R5LmZvY3VzKCk7fX0pO307aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHByb3BzLnByZWZldGNoKXtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319dGhpcy5wPXByb3BzLnByZWZldGNoIT09ZmFsc2U7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7fWdldFBhdGhzKCl7dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247dmFye2hyZWY6cGFyc2VkSHJlZixhczpwYXJzZWRBc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTt2YXIgcmVzb2x2ZWRIcmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkSHJlZik7cmV0dXJuW3Jlc29sdmVkSHJlZixwYXJzZWRBcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEFzKTpyZXNvbHZlZEhyZWZdO31oYW5kbGVSZWYocmVmKXtpZih0aGlzLnAmJkludGVyc2VjdGlvbk9ic2VydmVyJiZyZWYmJnJlZi50YWdOYW1lKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt2YXIgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbdGhpcy5nZXRQYXRocygpLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldO2lmKCFpc1ByZWZldGNoZWQpe3RoaXMuY2xlYW5VcExpc3RlbmVycz1saXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCgpPT57dGhpcy5wcmVmZXRjaCgpO30pO319fS8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG5wcmVmZXRjaChvcHRpb25zKXtpZighdGhpcy5wfHx0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbnZhciBwYXRocz10aGlzLmdldFBhdGhzKCk7Ly8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbl9yb3V0ZXIuZGVmYXVsdC5wcmVmZXRjaChwYXRoc1svKiBocmVmICovMF0scGF0aHNbLyogYXNQYXRoICovMV0sb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7cHJlZmV0Y2hlZFtwYXRocy5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXT10cnVlO31yZW5kZXIoKXt2YXJ7Y2hpbGRyZW59PXRoaXMucHJvcHM7dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxudmFyIGNoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt2YXIgcHJvcHM9e3JlZjplbD0+e3RoaXMuaGFuZGxlUmVmKGVsKTtpZihjaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZil7aWYodHlwZW9mIGNoaWxkLnJlZj09PSdmdW5jdGlvbicpY2hpbGQucmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZC5yZWY9PT0nb2JqZWN0Jyl7Y2hpbGQucmVmLmN1cnJlbnQ9ZWw7fX19LG9uTW91c2VFbnRlcjplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXRoaXMucHJlZmV0Y2goe3ByaW9yaXR5OnRydWV9KTt9LG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe3RoaXMubGlua0NsaWNrZWQoZSk7fX19Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZih0aGlzLnByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7cHJvcHMuaHJlZj1hc3x8aHJlZjt9Ly8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCl7dmFyIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0PXJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O2lmKHByb3BzLmhyZWYmJnR5cGVvZiBfX05FWFRfREFUQV9fIT09J3VuZGVmaW5lZCcmJl9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCl7cHJvcHMuaHJlZj1yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKTt9fXJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO319aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt2YXIgd2Fybj0oMCxfdXRpbHMuZXhlY09uY2UpKGNvbnNvbGUuZXJyb3IpOy8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxudmFyIFByb3BUeXBlcz1yZXF1aXJlKCdwcm9wLXR5cGVzJyk7dmFyIGV4YWN0PXJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKTsvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG5MaW5rLnByb3BUeXBlcz1leGFjdCh7aHJlZjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLGFzOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLHByZWZldGNoOlByb3BUeXBlcy5ib29sLHJlcGxhY2U6UHJvcFR5cGVzLmJvb2wsc2hhbGxvdzpQcm9wVHlwZXMuYm9vbCxwYXNzSHJlZjpQcm9wVHlwZXMuYm9vbCxzY3JvbGw6UHJvcFR5cGVzLmJvb2wsY2hpbGRyZW46UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsKHByb3BzLHByb3BOYW1lKT0+e3ZhciB2YWx1ZT1wcm9wc1twcm9wTmFtZV07aWYodHlwZW9mIHZhbHVlPT09J3N0cmluZycpe3dhcm4oXCJXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+XCIpO31yZXR1cm4gbnVsbDt9XSkuaXNSZXF1aXJlZH0pO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL3ZhciBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG52YXIgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJ107dmFyIHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTt2YXIgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09ZnVuY3Rpb24oKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LGZ1bmN0aW9uKCl7dmFyIGV2ZW50RmllbGQ9XCJvblwiK2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2V2ZW50LnN1YnN0cmluZygxKTt2YXIgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJndW1lbnRzKTt9Y2F0Y2goZXJyKXsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihcIkVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiBcIitldmVudEZpZWxkKTsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihlcnIubWVzc2FnZStcIlxcblwiK2Vyci5zdGFjayk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7dmFyIG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG52YXIgY3JlYXRlUm91dGVyPWZ1bmN0aW9uIGNyZWF0ZVJvdXRlcigpe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9bmV3IEFycmF5KF9sZW4pLF9rZXk9MDtfa2V5PF9sZW47X2tleSsrKXthcmdzW19rZXldPWFyZ3VtZW50c1tfa2V5XTt9c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe3ZhciBfcm91dGVyPXJvdXRlcjt2YXIgaW5zdGFuY2U9e307Zm9yKHZhciBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKHt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT1mdW5jdGlvbigpe3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cmV0dXJuIGluc3RhbmNlO30iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPVwid2l0aFJvdXRlcihcIituYW1lK1wiKVwiO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fSIsIlwidXNlIHN0cmljdFwiO1xuLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtaXR0KCkge1xuICAgIGNvbnN0IGFsbCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb24odHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9LFxuICAgICAgICBvZmYodHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQodHlwZSwgLi4uZXZ0cykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKC4uLmV2dHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1pdHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbmNvbnN0IG1pdHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgaXNfZHluYW1pY18xID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbmNvbnN0IHJvdXRlX21hdGNoZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG5jb25zdCByb3V0ZV9yZWdleF8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoO1xufVxuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICAgICAgOiBwYXRoO1xufVxuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLyc7XG59XG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aCkgPT4gdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpO1xuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIGlzU2VydmVyUmVuZGVyLCBjYikge1xuICAgIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDE7XG4gICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYCksXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSksIHtcbiAgICAgICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBlcnIuY29kZSA9ICdQQUdFX0xPQURfRVJST1InO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUsIHF1ZXJ5LCBhcywgeyBpbml0aWFsUHJvcHMsIHBhZ2VMb2FkZXIsIEFwcCwgd3JhcEFwcCwgQ29tcG9uZW50LCBlcnIsIHN1YnNjcmlwdGlvbiwgaXNGYWxsYmFjaywgfSkge1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHt9O1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIHV0aWxzXzEuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAoZS5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgICAgICAgICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgICAgICAgICAgIHVybF8xLnBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUodXJsXzEucGFyc2UoYXNQYXRoKS5wYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICAgICAgICAgICAgOiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBudWxsLCB0aGlzLmlzU3NyLCBkYXRhID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHVybF8xLnBhcnNlKGFzUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMuYXNQYXRoID1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgIGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhcztcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICAgIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShyb3V0ZSwgbW9kKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IG1vZC5kZWZhdWx0IHx8IG1vZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IENvbXBvbmVudCwgX19OX1NTRzogbW9kLl9fTl9TU0csIF9fTl9TU1A6IG1vZC5fX05fU1NQIH0pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YTtcbiAgICAgICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICAgKi9cbiAgICBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcHVzaCh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICByZXBsYWNlKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjaGFuZ2UobWV0aG9kLCBfdXJsLCBfYXMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgICAgIGlmICh1dGlsc18xLlNUKSB7XG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybDtcbiAgICAgICAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzO1xuICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKTtcbiAgICAgICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcyk7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHVybF8xLnBhcnNlKGFzKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gcm91dGVfcmVnZXhfMS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcm91dGVfbWF0Y2hlcl8xLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW0gPT4gIXF1ZXJ5W3BhcmFtXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgICAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKHJvdXRlSW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IHV0aWxzXzEuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAgICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyLCBsb2FkRXJyb3JGYWlsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnaXBFcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcyA9PiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICB9KSwgcmVqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhKCgpID0+IF9fTl9TU0dcbiAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICB0aGlzLm5vdGlmeShkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgICAqL1xuICAgIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgICAqL1xuICAgIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICAgICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpO1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiB1dGlsc18xLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyk7XG4gICAgICAgICAgICBlLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhKSB7XG4gICAgICAgIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblJvdXRlci5ldmVudHMgPSBtaXR0XzEuZGVmYXVsdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87XG5mdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO1xufVxuZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZSA9IGlzRHluYW1pY1JvdXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkge1xuICAgIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleDtcbiAgICByZXR1cm4gKHBhdGhuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVjb2RlID0gKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtcbiAgICAgICAgICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXTtcbiAgICAgICAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcChlbnRyeSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgICAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVNYXRjaGVyID0gZ2V0Um91dGVNYXRjaGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKTtcbn1cbmZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKSB7XG4gICAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICAgIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJyk7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgbGV0IGdyb3VwSW5kZXggPSAxO1xuICAgIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICBncm91cHNbJDFcbiAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfTtcbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAnLyguKz8pJyA6ICcvKFteL10rPyknO1xuICAgIH0pO1xuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTtcbiAgICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJyk7XG4gICAgICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSwgZ3JvdXBzIH0sIChuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICAgICAgfVxuICAgICAgICA6IHt9KSk7XG59XG5leHBvcnRzLmdldFJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG4vKipcbiAqIFV0aWxzXG4gKi9cbmZ1bmN0aW9uIGV4ZWNPbmNlKGZuKSB7XG4gICAgbGV0IHVzZWQgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHJldHVybiAoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCF1c2VkKSB7XG4gICAgICAgICAgICB1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmV4ZWNPbmNlID0gZXhlY09uY2U7XG5mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWA7XG59XG5leHBvcnRzLmdldExvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW47XG5mdW5jdGlvbiBnZXRVUkwoKSB7XG4gICAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7XG59XG5leHBvcnRzLmdldFVSTCA9IGdldFVSTDtcbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IENvbXBvbmVudFxuICAgICAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG59XG5leHBvcnRzLmdldERpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWU7XG5mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnQ7XG59XG5leHBvcnRzLmlzUmVzU2VudCA9IGlzUmVzU2VudDtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCBjdHgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKChfYSA9IEFwcC5wcm90b3R5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICAgIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpO1xuICAgIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG59XG5leHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHMgPSBsb2FkR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy51cmxPYmplY3RLZXlzID0gW1xuICAgICdhdXRoJyxcbiAgICAnaGFzaCcsXG4gICAgJ2hvc3QnLFxuICAgICdob3N0bmFtZScsXG4gICAgJ2hyZWYnLFxuICAgICdwYXRoJyxcbiAgICAncGF0aG5hbWUnLFxuICAgICdwb3J0JyxcbiAgICAncHJvdG9jb2wnLFxuICAgICdxdWVyeScsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NsYXNoZXMnLFxuXTtcbmZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwb3J0cy51cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxfMS5mb3JtYXQodXJsLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb24gPSBmb3JtYXRXaXRoVmFsaWRhdGlvbjtcbmV4cG9ydHMuU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0cy5TVCA9IGV4cG9ydHMuU1AgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInO1xyXG5pbXBvcnQgR2FsbGVyeSBmcm9tICdyZWFjdC1ncmlkLWdhbGxlcnknO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgSU1BR0VTID1cclxuW3tcclxuICAgICAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjQ3MjA0L3BleGVscy1waG90by0yNDcyMDQuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICAgICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzI0NzIwNC9wZXhlbHMtcGhvdG8tMjQ3MjA0LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiLFxyXG4gICAgICAgIHRodW1ibmFpbFdpZHRoOiAzMjAsXHJcbiAgICAgICAgdGh1bWJuYWlsSGVpZ2h0OiAxNzQsXHJcbiAgICAgICAgaXNTZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgY2FwdGlvbjogXCJBZnRlciBSYWluIChKZXNodSBKb2huIC0gZGVzaWduZXJzcGljcy5jb20pXCJcclxufSxcclxue1xyXG4gICAgICAgIHNyYzogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yNTY1MjAvcGV4ZWxzLXBob3RvLTI1NjUyMC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgICAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjU2NTIwL3BleGVscy1waG90by0yNTY1MjAuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICAgICAgdGh1bWJuYWlsV2lkdGg6IDMyMCxcclxuICAgICAgICB0aHVtYm5haWxIZWlnaHQ6IDE3NCxcclxuICAgICAgICB0YWdzOiBbe3ZhbHVlOiBcIk9jZWFuXCIsIHRpdGxlOiBcIk9jZWFuXCJ9LCB7dmFsdWU6IFwiUGVvcGxlXCIsIHRpdGxlOiBcIlBlb3BsZVwifV0sXHJcbiAgICAgICAgY2FwdGlvbjogXCJCb2F0cyAoSmVzaHUgSm9obiAtIGRlc2lnbmVyc3BpY3MuY29tKVwiXHJcbn0sXHJcblxyXG57XHJcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzEzMTc3MTIvcGV4ZWxzLXBob3RvLTEzMTc3MTIuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICAgICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzEzMTc3MTIvcGV4ZWxzLXBob3RvLTEzMTc3MTIuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICAgICAgdGh1bWJuYWlsV2lkdGg6IDMyMCxcclxuICAgICAgICB0aHVtYm5haWxIZWlnaHQ6IDE3NFxyXG59LFxyXG57XHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTI2NDIxMC9wZXhlbHMtcGhvdG8tMTI2NDIxMC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgIHRodW1ibmFpbDogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xMjY0MjEwL3BleGVscy1waG90by0xMjY0MjEwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiLFxyXG4gICAgdGh1bWJuYWlsV2lkdGg6IDMyMCxcclxuICAgIHRodW1ibmFpbEhlaWdodDogMTc0LFxyXG4gICAgaXNTZWxlY3RlZDogZmFsc2UsXHJcbiAgICBjYXB0aW9uOiBcIkFmdGVyIFJhaW4gKEplc2h1IEpvaG4gLSBkZXNpZ25lcnNwaWNzLmNvbSlcIlxyXG59LFxyXG57XHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9jMi5zdGF0aWNmbGlja3IuY29tLzkvODM1Ni8yODg5NzEyMDY4MV8zYjJjMGY0M2UwX2IuanBnXCIsXHJcbiAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9jMi5zdGF0aWNmbGlja3IuY29tLzkvODM1Ni8yODg5NzEyMDY4MV8zYjJjMGY0M2UwX24uanBnXCIsXHJcbiAgICB0aHVtYm5haWxXaWR0aDogMzIwLFxyXG4gICAgdGh1bWJuYWlsSGVpZ2h0OiAyMTIsXHJcbiAgICB0YWdzOiBbe3ZhbHVlOiBcIk9jZWFuXCIsIHRpdGxlOiBcIk9jZWFuXCJ9LCB7dmFsdWU6IFwiUGVvcGxlXCIsIHRpdGxlOiBcIlBlb3BsZVwifV0sXHJcbiAgICBjYXB0aW9uOiBcIkJvYXRzIChKZXNodSBKb2huIC0gZGVzaWduZXJzcGljcy5jb20pXCJcclxufSxcclxuXHJcbntcclxuICAgIHNyYzogXCJodHRwczovL2M0LnN0YXRpY2ZsaWNrci5jb20vOS84ODg3LzI4ODk3MTI0ODkxXzk4YzRmZGQ4MmJfYi5qcGdcIixcclxuICAgIHRodW1ibmFpbDogXCJodHRwczovL2M0LnN0YXRpY2ZsaWNrci5jb20vOS84ODg3LzI4ODk3MTI0ODkxXzk4YzRmZGQ4MmJfbi5qcGdcIixcclxuICAgIHRodW1ibmFpbFdpZHRoOiAzMjAsXHJcbiAgICB0aHVtYm5haWxIZWlnaHQ6IDIxMlxyXG59LFxyXG57XHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9jMi5zdGF0aWNmbGlja3IuY29tLzkvODgxNy8yODk3MzQ0OTI2NV8wN2UzYWE1ZDJlX2IuanBnXCIsXHJcbiAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9jMi5zdGF0aWNmbGlja3IuY29tLzkvODgxNy8yODk3MzQ0OTI2NV8wN2UzYWE1ZDJlX24uanBnXCIsXHJcbiAgICB0aHVtYm5haWxXaWR0aDogMzIwLFxyXG4gICAgdGh1bWJuYWlsSGVpZ2h0OiAxNzQsXHJcbiAgICBpc1NlbGVjdGVkOiBmYWxzZSxcclxuICAgIGNhcHRpb246IFwiQWZ0ZXIgUmFpbiAoSmVzaHUgSm9obiAtIGRlc2lnbmVyc3BpY3MuY29tKVwiXHJcbn0sXHJcbntcclxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy82NjcyMDAvcGV4ZWxzLXBob3RvLTY2NzIwMC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgIHRodW1ibmFpbDogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy82NjcyMDAvcGV4ZWxzLXBob3RvLTY2NzIwMC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgIHRodW1ibmFpbFdpZHRoOiAzMjAsXHJcbiAgICB0aHVtYm5haWxIZWlnaHQ6IDIxMixcclxuICAgIHRhZ3M6IFt7dmFsdWU6IFwiT2NlYW5cIiwgdGl0bGU6IFwiT2NlYW5cIn0sIHt2YWx1ZTogXCJQZW9wbGVcIiwgdGl0bGU6IFwiUGVvcGxlXCJ9XSxcclxuICAgIGNhcHRpb246IFwiQm9hdHMgKEplc2h1IEpvaG4gLSBkZXNpZ25lcnNwaWNzLmNvbSlcIlxyXG59LFxyXG5cclxue1xyXG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzk0OTE5My9wZXhlbHMtcGhvdG8tOTQ5MTkzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiLFxyXG4gICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzk0OTE5My9wZXhlbHMtcGhvdG8tOTQ5MTkzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiLFxyXG4gICAgdGh1bWJuYWlsV2lkdGg6IDMyMCxcclxuICAgIHRodW1ibmFpbEhlaWdodDogMjEyXHJcbn0sXHJcblxyXG57XHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMzY1NTc4Mi9wZXhlbHMtcGhvdG8tMzY1NTc4Mi5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgIHRodW1ibmFpbDogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zNjU1NzgyL3BleGVscy1waG90by0zNjU1NzgyLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiLFxyXG4gICAgdGh1bWJuYWlsV2lkdGg6IDMyMCxcclxuICAgIHRodW1ibmFpbEhlaWdodDogMjEyLFxyXG4gICAgdGFnczogW3t2YWx1ZTogXCJPY2VhblwiLCB0aXRsZTogXCJPY2VhblwifSwge3ZhbHVlOiBcIlBlb3BsZVwiLCB0aXRsZTogXCJQZW9wbGVcIn1dLFxyXG4gICAgY2FwdGlvbjogXCJCb2F0cyAoSmVzaHUgSm9obiAtIGRlc2lnbmVyc3BpY3MuY29tKVwiXHJcbn0sXHJcblxyXG57XHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNjY3MjAwL3BleGVscy1waG90by02NjcyMDAuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNjY3MjAwL3BleGVscy1waG90by02NjcyMDAuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICB0aHVtYm5haWxXaWR0aDogMzIwLFxyXG4gICAgdGh1bWJuYWlsSGVpZ2h0OiAyMTIsXHJcbiAgICB0YWdzOiBbe3ZhbHVlOiBcIk9jZWFuXCIsIHRpdGxlOiBcIk9jZWFuXCJ9LCB7dmFsdWU6IFwiUGVvcGxlXCIsIHRpdGxlOiBcIlBlb3BsZVwifV0sXHJcbiAgICBjYXB0aW9uOiBcIkJvYXRzIChKZXNodSBKb2huIC0gZGVzaWduZXJzcGljcy5jb20pXCJcclxufSxcclxuXVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgR2FsbGVyeVBhZ2UgPSAoKSA9PiAoXHJcbiAgICAvLyA8TmF2QmFyIC8+XHJcbiAgICA8ZGl2IGlkPVwiZ2FsbGVyeVwiID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJteS01XCI+R2FsbGVyeTwvaDE+XHJcblxyXG4gICAgICAgIDxHYWxsZXJ5IGltYWdlcz17SU1BR0VTfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IEdhbGxlcnlQYWdlOyIsIi8vIHBhZ2VzL2luZGV4LmpzXHJcblxyXG57LyogPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4yL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiIC8+ICovfVxyXG5cclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBXb3JrcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Xb3Jrc1wiO1xyXG5pbXBvcnQgQ2VydGlmaWVkU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9DZXJ0aWZpZWRTZWN0aW9uXCI7XHJcbmltcG9ydCBTZXJ2aWNlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZXJ2aWNlc1wiO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWN0XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBHYWxsZXJ5UGFnZSBmcm9tIFwiLi4vcGFnZXMvZ2FsbGVyeVwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiA8TGF5b3V0PlxyXG4gICAgPEhlYWRlciAvPlxyXG4gICAgPFdvcmtzICAvPlxyXG4gICAgPFNlcnZpY2VzIGlkPVwic2VydmljZVwiLz5cclxuICAgIDxHYWxsZXJ5UGFnZSAvPlxyXG4gICAgPENlcnRpZmllZFNlY3Rpb24gLz5cclxuICAgIDxDb250YWN0IGlkPVwiY29udGFjdFwiLz5cclxuICAgIDxGb290ZXIgLz5cclxuPC9MYXlvdXQ+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJjLWJhbm5lci1hbmltXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJjLXF1ZXVlLWFuaW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmMtdHdlZW4tb25lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWF3ZXNvbWUtcmV2ZWFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Db2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL05hdlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ3JpZC1nYWxsZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2lhbC1tZWRpYS1pY29ucy1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==