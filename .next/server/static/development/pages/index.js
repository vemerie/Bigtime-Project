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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\Button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Button = ({
  link,
  buttonStyle,
  text
}) => __jsx("button", {
  style: buttonStyle,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
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
  link: "training",
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
      lineNumber: 63,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__["Slide"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "font-weight-bolder mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 24
    }
  }, "Photography For the Future")), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna")), __jsx("div", {
    className: "col-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__["Slide"], {
    damping: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, __jsx("h1", {
    style: imgStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 38
    }
  }, "BTS")), __jsx("div", {
    className: "centerWrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonStyle: buttonStyle,
    text: text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonStyle: buttonWatchStyle,
    text: textWatch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
var _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// components/Layout.js
 // import NavBar from "./NavBar";

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
      lineNumber: 24,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "Content",
    style: contentStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
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
}, __jsx("h1", {
  className: "",
  style: {
    marginBottom: "6rem",
    marginTop: "6rem"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 8
  }
}, "Discover Our Works"), __jsx("div", {
  className: "row ",
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
    columnNumber: 12
  }
}, __jsx(_WorkSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 38
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
})), __jsx("div", {
  className: "col-md-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 13
  }
}, __jsx(_WorkSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: text,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 39
  }
})))), __jsx(_Video__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 4
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Works);

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
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-gallery */ "react-grid-gallery");
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_grid_gallery__WEBPACK_IMPORTED_MODULE_1__);
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
}, {
  src: "https://images.pexels.com/photos/949193/pexels-photo-949193.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnail: "https://images.pexels.com/photos/949193/pexels-photo-949193.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  thumbnailWidth: 320,
  thumbnailHeight: 212
}];

const GalleryPage = () => __jsx("div", {
  id: "gallery",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "container-fluid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 9
  }
}, __jsx("h1", {
  className: "mb-5 text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144,
    columnNumber: 9
  }
}, "Gallery"), __jsx(react_grid_gallery__WEBPACK_IMPORTED_MODULE_1___default.a, {
  images: IMAGES,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146,
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







 // import  '../hooks/live_dashboard_copy'; 

const Index = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 21
  }
}, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
}), __jsx(_components_CertifiedSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}), __jsx(_components_Works__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }
}), __jsx(_pages_gallery__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }
}), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {
  id: "contact",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }
}), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NlcnRpZmllZFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250YWN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3RlclN1Yi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlcnZpY2VDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9WaWRlby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvU3ViLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV29ya1N1Yi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dvcmtzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJjLWJhbm5lci1hbmltXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmMtcXVldWUtYW5pbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJjLXR3ZWVuLW9uZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXdlc29tZS1yZXZlYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvUm93XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZ3JpZC1nYWxsZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NpYWwtbWVkaWEtaWNvbnMtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJCdXR0b24iLCJsaW5rIiwiYnV0dG9uU3R5bGUiLCJ0ZXh0IiwiaGVhZGVyU3R5bGUiLCJzZWN0aW9uU3R5bGUiLCJwb3NpdGlvbiIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsInRleHRUcmFuc2Zvcm0iLCJkaXNwbGF5IiwibWFyZ2luIiwibGV0dGVyU3BhY2luZyIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwiQ2VydGlmaWVkU2VjdGlvbiIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwiZm9ybUVsZW1lbnRTdHlsZSIsImNvbG9yIiwiYm9yZGVyIiwid2lkdGgiLCJ0ZXh0Q29sb3IiLCJDb250YWN0IiwibWluSGVpZ2h0IiwidGV4dDEiLCJ0ZXh0MiIsIkZvb3RlciIsInBhZGRpbmdCb3R0b20iLCJ0ZXh0U3R5bGUiLCJGb290ZXJMaXN0IiwibWFwIiwicmVzIiwia2V5IiwibGlzdFN0eWxlIiwiRm9vdGVyU3ViIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ1RvcCIsIm1hcmdpbkxlZnQiLCJmb250RmFtaWx5IiwiZm9udEZ0eWxlIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJvcGFjaXR5IiwiYnV0dG9uV2F0Y2hTdHlsZSIsIm1pbldpZHRoIiwidGV4dFdhdGNoIiwiaW1nU3R5bGUiLCJ0ZXh0QWxpZ24iLCJFbGVtZW50IiwiQmFubmVyQW5pbSIsIkJnRWxlbWVudCIsIkhlYWRlciIsImxheW91dFN0eWxlIiwiZmxleERpcmVjdGlvbiIsImNvbnRlbnRTdHlsZSIsImZsZXgiLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwibmF2QmFyU3R5bGUiLCJsb2dvU3R5bGUiLCJOYXZCYXIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGl4IiwiU2VydmljZUNhcmQiLCJDb250YWluZXJTdHlsZSIsIlNlcnZpY2UiLCJWaWRlbyIsIm1hcmdpbkJvdHRvbSIsIlZpZGVvU3ViIiwiV29ya1N1YiIsIldvcmtzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91cmwiLCJfdXRpbHMiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJpc0xvY2FsIiwiaHJlZiIsInVybCIsInBhcnNlIiwib3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJob3N0IiwicHJvdG9jb2wiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdEZ1bmMiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJhcyIsInJlc3VsdCIsImZvcm1hdFVybCIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwib2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiTGluayIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsImUiLCJub2RlTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJyZXNvbHZlIiwicHJldmVudERlZmF1bHQiLCJzY3JvbGwiLCJpbmRleE9mIiwicmVwbGFjZSIsInNoYWxsb3ciLCJ0aGVuIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZG9jdW1lbnQiLCJib2R5IiwiZm9jdXMiLCJwcmVmZXRjaCIsIndhcm4iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicGFyc2VkSHJlZiIsInBhcnNlZEFzIiwicmVzb2x2ZWRIcmVmIiwiaGFuZGxlUmVmIiwicmVmIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImpvaW4iLCJvcHRpb25zIiwicGF0aHMiLCJjYXRjaCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJ0eXBlIiwicHJvY2VzcyIsImNsb25lRWxlbWVudCIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsInZhbHVlIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsImV2ZW50Iiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiRXJyb3IiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsIl9sZW4iLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJzbGljZSIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInN1YnN0ciIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwicXVlcnkiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJmZXRjaCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJvayIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiY29kZSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsInNkYyIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwibWV0aG9kIiwiX2FzIiwicmVqZWN0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiVEVTVF9ST1VURSIsInRlc3QiLCJyZSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfIiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwibm9ybWFsaXplZFJvdXRlIiwiZXNjYXBlZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsIiQxIiwiaXNDYXRjaEFsbCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiUmVnRXhwIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfYSIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXQiLCJTUCIsIm1lYXN1cmUiLCJJTUFHRVMiLCJzcmMiLCJ0aHVtYm5haWwiLCJ0aHVtYm5haWxXaWR0aCIsInRodW1ibmFpbEhlaWdodCIsImlzU2VsZWN0ZWQiLCJjYXB0aW9uIiwidGFncyIsIkdhbGxlcnlQYWdlIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBRUE7O0FBQ0EsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBQ0MsTUFBRDtBQUFPQyxhQUFQO0FBQW9CQztBQUFwQixDQUFELEtBRVg7QUFBUyxPQUFLLEVBQUVELFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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QUFBO0FBQUE7QUFBQSxFQUpnQixFQU1oQixNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFOZ0IsRUFRaEIsTUFBQywyREFBRDtBQUFTLElBQUUsRUFBQyxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFSZ0IsRUFTaEIsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVGdCLENBQXBCOztBQVllQSxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmNvbnN0IEJ1dHRvbiA9ICh7bGluaywgYnV0dG9uU3R5bGUsIHRleHR9KSA9PiAoXHJcbiAgIFxyXG4gICAgPGJ1dHRvbiAgc3R5bGU9e2J1dHRvblN0eWxlfT5cclxuICAgICAgICB7dGV4dH1cclxuICAgIDwvYnV0dG9uPlxyXG4gICBcclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xyXG5pbXBvcnQgeyBSdWJiZXJCYW5kIH0gZnJvbSAncmVhY3QtYXdlc29tZS1yZXZlYWwnO1xyXG5cclxuXHJcblxyXG5jb25zdCBoZWFkZXJTdHlsZT17XHJcbiAgICBcclxufSBcclxuXHJcbmNvbnN0IHNlY3Rpb25TdHlsZSA9e1xyXG4gICAgcG9zaXRpb246XCJyZWxhdGl2ZVwiLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOlwidXJsKC9WZWN0b3Iuc3ZnKVwiLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDpcIm5vLXJlcGVhdFwiLFxyXG4gICAgaGVpZ2h0OlwiODAwcHhcIixcclxuICAgIGJhY2tncm91bmRTaXplOlwiNTAlXCIsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246XCItMzAlIDE0MCVcIixcclxuXHJcblxyXG5cclxufVxyXG5jb25zdCAgYnV0dG9uU3R5bGU9IHtcclxuICAgIHRleHRUcmFuc2Zvcm06IFwiQ2FwaXRhbGl6ZVwiLFxyXG4gICAgZGlzcGxheTpcImJsb2NrXCIsXHJcbiAgICBtYXJnaW46XCIzcmVtIGF1dG9cIixcclxuICAgIGxldHRlclNwYWNpbmc6XCIzcHhcIixcclxuICAgIHBhZGRpbmc6XCI4cHggMTVweFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOlwiNXB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgyMzMuMDZkZWcsICNGRTE5MDMgLTYxLjgxJSwgI0Y4NzEwRiA3NC40MSUpXCIsXHJcblxyXG5cclxufVxyXG5cclxuY29uc3QgQ2VydGlmaWVkU2VjdGlvbiA9ICgpID0+IChcclxuICAgIDxkaXYgaWQ9XCJ0cmFpbmluZ1wiIHN0eWxlPXtzZWN0aW9uU3R5bGV9PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7bWFyZ2luVG9wOlwiMTVyZW1cIn19ID5cclxuICAgICAgIDxSdWJiZXJCYW5kPjxoMSBjbGFzc05hbWU9XCJteS01IHRleHQtY2VudGVyXCI+QmVjb21lIGEgY2VydGlmaWVkIHBob3RvZ3JhcGhlcjwvaDE+XHJcbiAgICAgICA8L1J1YmJlckJhbmQ+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04IG14LWF1dG9cIj5cclxuICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3tmb250U2l6ZTpcIjEzcHhcIn19PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmE8L3A+XHJcbiAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICA8QnV0dG9uICBsaW5rPVwidHJhaW5pbmdcIiB0ZXh0PVwiR2V0IFN0YXJ0ZWRcIiBidXR0b25TdHlsZT17YnV0dG9uU3R5bGV9IC8+XHJcbiAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IENlcnRpZmllZFNlY3Rpb247IiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFdvcmtTdWIgZnJvbSBcIi4vV29ya1N1YlwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcclxuXHJcbmNvbnN0IGZvcm1FbGVtZW50U3R5bGU9e1xyXG4gICAgYmFja2dyb3VuZDpcIiMwQTBGMTRcIixcclxuICAgIGNvbG9yOlwid2hpdGVcIixcclxuICAgIGJvcmRlcjpcIm5vbmVcIlxyXG59IFxyXG5cclxuY29uc3QgYnV0dG9uU3R5bGUgPXtcclxuICAgXHJcbiAgICB3aWR0aDpcIjIwMHB4XCIsXHJcbiAgICBwYWRkaW5nOlwiMnB4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcclxuICAgIGZvbnRTaXplOlwiMTJweFwiLFxyXG4gICAgbGV0dGVyU3BhY2luZzpcIjNweFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJibGFja1wiLFxyXG4gICAgYm9yZGVyOlwiMXB4IHNvbGlkICM3NjE5MDNcIlxyXG59XHJcblxyXG5jb25zdCB0ZXh0Q29sb3IgPXtcclxuICAgIGNvbG9yOlwiI2MzYzNjM1wiXHJcbn1cclxuXHJcblxyXG5jb25zdCBDb250YWN0ID0gKCkgPT4gKFxyXG4gICAgPGRpdiBpZD1cImNvbnRhY3RcIiBzdHlsZT17e2JhY2tncm91bmQ6XCJibGFja1wiLCBwYWRkaW5nOlwiNnJlbSAwcmVtXCIsIG1pbkhlaWdodDpcIjcwMHB4XCIsIH19PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiID5cclxuICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBteS01XCI+Q29udGFjdDwvaDE+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTVcIiBzdHlsZT17e2NvbG9yOlwiI0ZFMTkwM1wifX0+RmVlZGJhY2tzPC9oMj5cclxuICAgICAgICAgICAgICAgPHAgc3R5bGU9e3RleHRDb2xvcn0+R2V0IGluIHRvdWNoIHdpdGggdXMgYW5kIHdlIHdpbGwgc2VydmUgeW91IHRvIHlvdXIgc2F0aXNmYWN0aW9ucywgd2Ugd291bGQgcmVzcG9uZCB0byB5b3VyIGVucXVpcmllcyBhcyBxdWljayBhcyB3aXRoaW4gYW4gaG91ciBvZiB5b3UgbWVzc2FnaW5nIHVzPC9wPlxyXG4gICAgICAgICAgICAgICA8cCBzdHlsZT17dGV4dENvbG9yfT5BbHNvIGxldCB1cyBrbm93IHdoYXQgeW91IHRoaW5rIGFib3V0IG91ciBwcm9kdWN0cyBhbmQgc2VydmljZSBhbmQgaG93IHdlIGNhbiBpbXByb3ZlIG9uIHRoZW0sIHlvdXIgcG9zaXRpdmUgZmVlZGJhY2tzIGFuZCBjcml0aWNpc21zIGFyZSBoaWdobHkgcmVnYXJkZWQgYW5kIHdpbGwgYmUgcHV0IGludG8gY29uc2lkZXJhdGlvbjwvcD5cclxuICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIHN0eWxlPXtmb3JtRWxlbWVudFN0eWxlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiIG5hbWUgPVwiZmlyc3QtbmFtZVwiIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBzdHlsZT17Zm9ybUVsZW1lbnRTdHlsZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiIG5hbWUgPVwibGFzdC1uYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e2Zvcm1FbGVtZW50U3R5bGV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBuYW1lID1cImVtYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgPC9kaXY+IFxyXG5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgc3R5bGU9e3toZWlnaHQ6XCIzMDBweFwiLCAgYmFja2dyb3VuZDpcIiMwQTBGMTRcIiwgY29sb3I6XCJ3aGl0ZVwiLCAgYm9yZGVyOlwibm9uZVwiLCB9fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPSBcInRleHRcIiBwbGFjZWhvbGRlcj1cIkNvbW1lbnRcIiBuYW1lPVwiY29tbWVudFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiU2VuZFwiIGJ1dHRvblN0eWxlPXtidXR0b25TdHlsZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG5cclxuICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgQ29udGFjdDsiLCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgV29ya1N1YiBmcm9tIFwiLi9Xb3JrU3ViXCI7XHJcbmltcG9ydCBGb290ZXJMaXN0IGZyb20gXCIuL0Zvb3Rlckxpc3RcIjtcclxuaW1wb3J0IEZvb3RlclN1YiBmcm9tIFwiLi9Gb290ZXJTdWJcIjtcclxuaW1wb3J0IHtTb2NpYWxNZWRpYUljb25zUmVhY3R9IGZyb20gJ3NvY2lhbC1tZWRpYS1pY29ucy1yZWFjdCc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCB0ZXh0MT0gWyBcIlBob3RvZ3JhcGh5XCIsXCJWaWRlb2dyYXBoeVwiLFwiVHJhaW5pbmdcIiwgXCJNb2RlbCBzaG90XCIsIFwiV2VkZGluZyBDb3ZlcmFnZVwiLCBcIlZpZGVvIERpcmVjdGluZ1wiXVxyXG5jb25zdCB0ZXh0Mj0gWyBcIlBob3RvZ3JhcGh5XCIsXCJWaWRlb2dyYXBoeVwiLFwiVHJhaW5pbmdcIixcIlZpZGVvIE1ha2luZ1wiXVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMEEwRjE0XCIsIHBhZGRpbmdCb3R0b206XCJcIn19PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteS01XCIgPlxyXG4gICAgICAgey8qIDxoMSBjbGFzc05hbWU9XCJteS01XCI+RGlzY292ZXIgT3VyIFdvcmtzPC9oMT4gKi99XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj48Rm9vdGVyTGlzdCB0ZXh0PXt0ZXh0MX0gLz48L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgIDxGb290ZXJMaXN0IHRleHQ9e3RleHQyfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0zXCI+PFNvY2lhbE1lZGlhSWNvbnNSZWFjdCBiYWNrZ3JvdW5kQ29sb3I9XCJncmV5XCIgaWNvbj1cInR3aXR0ZXJcIiB1cmw9XCJodHRwczovL3R3aXR0ZXIuY29tL3lvdXItdHdpdHRlci1oYW5kbGVcIi8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItM1wiPjxTb2NpYWxNZWRpYUljb25zUmVhY3QgaWNvbj1cImZhY2Vib29rXCIgYmFja2dyb3VuZENvbG9yPVwiZ3JleVwiIHVybD1cImh0dHBzOi8vdHdpdHRlci5jb20veW91ci10d2l0dGVyLWhhbmRsZVwiLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0zXCI+PFNvY2lhbE1lZGlhSWNvbnNSZWFjdCBpY29uPVwieW91dHViZVwiICBiYWNrZ3JvdW5kQ29sb3I9XCJncmV5XCIgdXJsPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS95b3VyLXR3aXR0ZXItaGFuZGxlXCIvPjwvc3Bhbj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJCaWd0aW1lIExvZ29cIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gc3JjPVwiL2xvZ28yLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNlY29uZGFyeVwiPmluZm9AYmlndGltZS5jb208L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICAgIDxGb290ZXJTdWIgLz5cclxuICAgPC9kaXY+XHJcbiAgKTtcclxuICBleHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCJcclxuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiXHJcblxyXG5jb25zdCBidXR0b25TdHlsZSA9e1xyXG4gICAgZGlzcGxheTpcImJsb2NrXCIsXHJcbiAgICBtYXJnaW46XCJhdXRvXCIsXHJcbiAgICB3aWR0aDpcIjIwMHB4XCIsXHJcbiAgICBwYWRkaW5nOlwiMnB4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcclxuICAgIGZvbnRTaXplOlwiMTJweFwiLFxyXG4gICAgbGV0dGVyU3BhY2luZzpcIjNweFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMjMzLjA2ZGVnLCAjRkUxOTAzIC02MS44MSUsICNGODcxMEYgNzQuNDElKVwiXHJcbiAgfVxyXG5cclxuICBjb25zdCB0ZXh0U3R5bGUgPXtcclxuICAgICAgbGV0dGVyU3BhY2luZzpcIjJweFwiXHJcblxyXG4gIH1cclxuY29uc3QgRm9vdGVyTGlzdCA9ICh7dGV4dH0pID0+IChcclxuICAgIDx1bD5cclxuICAgICAgICB7dGV4dC5tYXAoKHJlcywga2V5KT0+XHJcbiAgICAgICAgICAgIDxsaSBzdHlsZT17e2xpc3RTdHlsZTpcIm5vbmVcIn19IGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5XCI+e3Jlc308L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgRm9vdGVyTGlzdDsiLCJcclxuXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuY29uc3QgRm9vdGVyU3ViID0gKCkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6XCJibGFja1wifX0+XHJcbiAgXHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kZWZhdWx0IHB4LTVcIiBzdHlsZT17e2hlaWdodDpcIjgwcHhcIiwgYmFja2dyb3VuZENvbG9yOlwiYmxhY2tcIix9fT5cclxuICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiIHN0eWxlPXt7cGFkZGluZ1RvcDpcIjJyZW1cIn19ID4gQ29weXJpZ2h0IDIwMjA8c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHJlbVwifX0+RGV2ZWxvcGVkIGJ5IFZpbWVyb24gVGVjaDwvc3Bhbj48L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiBcclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IEZvb3RlclN1YjsiLCIvLyBjb21wb25lbnRzL0hlYWRlci5qc1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL05hdkJhclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiXHJcbmltcG9ydCBCYW5uZXJBbmltIGZyb20gJ3JjLWJhbm5lci1hbmltJztcclxuaW1wb3J0IFF1ZXVlQW5pbSBmcm9tICdyYy1xdWV1ZS1hbmltJztcclxuaW1wb3J0IFR3ZWVuT25lIGZyb20gJ3JjLXR3ZWVuLW9uZSc7XHJcbmltcG9ydCB7IEZhZGUgfSBmcm9tICdyZWFjdC1hd2Vzb21lLXJldmVhbCc7XHJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSAncmVhY3QtYXdlc29tZS1yZXZlYWwnO1xyXG5cclxuXHJcblxyXG5jb25zdCBoZWFkZXJTdHlsZSA9IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInVybChodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xNTk1MjMzL3BleGVscy1waG90by0xNTk1MjMzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9NCZ3PTUwMClcIixcclxuICAgIC8vIHdpZHRoOiBcIjIzMDlweFwiLFxyXG4gICAgbWluSGVpZ2h0OiBcIjcwMHB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0Olwibm8tcmVwZWF0XCIsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTpcImNvbnRlbnRcIixcclxuICAgIGZvbnRGYW1pbHk6IFwiQWxlZ3JleWEgU2Fuc1wiLFxyXG4gICAgZm9udEZ0eWxlOiBcIm5vcm1hbFwiLFxyXG4gICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcclxuICAgIGZvbnRTaXplOiBcIjMwcHhcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMzZweFwiLFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjpcImxlZnQgdG9wXCIsXHJcbiAgICBvcGFjaXR5OjFcclxuICB9O1xyXG5cclxuY29uc3QgYnV0dG9uU3R5bGUgPXtcclxuICB3aWR0aDpcIjIwMHB4XCIsXHJcbiAgcGFkZGluZzpcIjVweFwiLFxyXG4gIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDIzMy4wNmRlZywgI0ZFMTkwMyAtNjEuODElLCAjRjg3MTBGIDc0LjQxJSlcIlxyXG59XHJcblxyXG5jb25zdCBidXR0b25XYXRjaFN0eWxlID17XHJcbiAgbWluV2lkdGg6XCIyMDBweFwiLFxyXG4gIHBhZGRpbmc6XCI1cHhcIixcclxuICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgYm9yZGVyOlwiMnB4IHNvbGlkIHdoaXRlXCIsXHJcbiAgbWFyZ2luTGVmdDpcIjE1cHhcIlxyXG5cclxufVxyXG5jb25zdCB0ZXh0PSBcIlRyYWluaW5nXCI7XHJcbmNvbnN0IHRleHRXYXRjaD0gXCJXYXRjaCBWaWRlb1wiO1xyXG5cclxuICAgY29uc3QgaW1nU3R5bGUgPXtcclxuICAgIG9wYWNpdHk6MSxcclxuICAgIGZvbnRTaXplOlwiMTQwcHhcIixcclxuICAgIGZvbnRXZWlnaHQ6OTAwLFxyXG4gICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbiAgICBtYXJnaW5Ub3A6XCIxNXJlbVwiXHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IHsgRWxlbWVudCB9ID0gQmFubmVyQW5pbTtcclxuY29uc3QgQmdFbGVtZW50ID0gRWxlbWVudC5CZ0VsZW1lbnQ7XHJcbiAgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgPGRpdiAgY2xhc3NOYW1lPVwiSGVhZGVyXCIgc3R5bGU9e2hlYWRlclN0eWxlfT5cclxuICAgICAgICAgIHsvKiA8TmF2QmFyICAvPiAqL31cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZCBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICA8U2xpZGU+PGgxIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRlciBtdC01XCI+UGhvdG9ncmFwaHkgRm9yIHRoZSBGdXR1cmU8L2gxPjwvU2xpZGU+XHJcbiAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmE8L3A+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTbGlkZSBkYW1waW5nPXszfT48aDEgc3R5bGU9e2ltZ1N0eWxlfSAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEJUU1xyXG4gICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8L1NsaWRlPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJjZW50ZXJXcmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvblN0eWxlfSB0ZXh0PXt0ZXh0fT48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBidXR0b25TdHlsZT17YnV0dG9uV2F0Y2hTdHlsZX0gdGV4dD17dGV4dFdhdGNofT48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICB7LyogPEJhbm5lckFuaW0+XHJcbiAgICAgIDxFbGVtZW50IGtleT1cImFhYVwiXHJcbiAgICAgICAgcHJlZml4Q2xzPVwiYmFubmVyLXVzZXItZWxlbVwiXHJcbiAgICAgID5cclxuICAgICAgICA8QmdFbGVtZW50IGtleT1cImJnXCIgY2xhc3NOYW1lPVwiYmdcIj5cclxuICAgICAgICAgIDx2aWRlbyBsb29wIGF1dG9QbGF5PlxyXG4gICAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHBzOi8vb3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL0NvREZ2b3hhUXBUbkxPTS5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgPC9CZ0VsZW1lbnQ+XHJcbiAgICAgICAgPFF1ZXVlQW5pbSBuYW1lPVwiUXVldWVBbmltXCI+XHJcbiAgICAgICAgICA8aDEga2V5PVwiaDFcIj5BbnQgTW90aW9uIERlbW88L2gxPlxyXG4gICAgICAgICAgPHAga2V5PVwicFwiPkFudCBNb3Rpb24gRGVtby5BbnQgTW90aW9uIERlbW8uQW50IE1vdGlvbiBEZW1vLkFudCBNb3Rpb24gRGVtbzwvcD5cclxuICAgICAgICA8L1F1ZXVlQW5pbT5cclxuICAgICAgICA8VHdlZW5PbmUgYW5pbWF0aW9uPXt7IHk6IDUwLCBvcGFjaXR5OiAwLCB0eXBlOiAnZnJvbScgfX0gbmFtZT1cIlR3ZWVuT25lXCI+XHJcbiAgICAgICAgICBBbnQgTW90aW9uIERlbW8uQW50IE1vdGlvbkRlbW9cclxuICAgICAgICA8L1R3ZWVuT25lPlxyXG4gICAgICA8L0VsZW1lbnQ+XHJcbiAgICAgIDxFbGVtZW50IGtleT1cImJiYlwiXHJcbiAgICAgICAgcHJlZml4Q2xzPVwiYmFubmVyLXVzZXItZWxlbVwiXHJcbiAgICAgID5cclxuICAgICAgICA8QmdFbGVtZW50XHJcbiAgICAgICAgICBrZXk9XCJiZ1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZ1wiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly9vcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvSWhDTlRxUHBMZVRObndyLmpwZyknLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UXVldWVBbmltIG5hbWU9XCJRdWV1ZUFuaW1cIj5cclxuICAgICAgICAgIDxoMSBrZXk9XCJoMVwiPkFudCBNb3Rpb24gRGVtbzwvaDE+XHJcbiAgICAgICAgICA8cCBrZXk9XCJwXCI+QW50IE1vdGlvbiBEZW1vLkFudCBNb3Rpb24gRGVtby5BbnQgTW90aW9uIERlbW8uQW50IE1vdGlvbiBEZW1vPC9wPlxyXG4gICAgICAgIDwvUXVldWVBbmltPlxyXG4gICAgICAgIDxUd2Vlbk9uZSBhbmltYXRpb249e3sgeTogNTAsIG9wYWNpdHk6IDAsIHR5cGU6ICdmcm9tJywgZGVsYXk6IDIwMCB9fSBuYW1lPVwiVHdlZW5PbmVcIj5cclxuICAgICAgICAgIEFudCBNb3Rpb24gRGVtby5BbnQgTW90aW9uRGVtb1xyXG4gICAgICAgIDwvVHdlZW5PbmU+XHJcbiAgICAgIDwvRWxlbWVudD5cclxuICAgICAgPEVsZW1lbnQga2V5PVwiY2NjXCJcclxuICAgICAgICBwcmVmaXhDbHM9XCJiYW5uZXItdXNlci1lbGVtXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCZ0VsZW1lbnRcclxuICAgICAgICAgIGtleT1cImJnXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwidXJsKGh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzE1OTUyMzMvcGV4ZWxzLXBob3RvLTE1OTUyMzMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj00Jnc9NTAwKVwiLFxyXG4gICAgICAgICAgICAvLyB3aWR0aDogXCIyMzA5cHhcIixcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjcwMHB4XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6XCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6XCJjb250ZW50XCIsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQWxlZ3JleWEgU2Fuc1wiLFxyXG4gICAgICAgICAgICBmb250RnR5bGU6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIzNnB4XCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjpcImxlZnQgdG9wXCIsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6MVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxRdWV1ZUFuaW0gbmFtZT1cIlF1ZXVlQW5pbVwiPlxyXG4gICAgICAgICAgPGgxIGtleT1cImgxXCI+QW50IE1vdGlvbiBEZW1vPC9oMT5cclxuICAgICAgICAgIDxwIGtleT1cInBcIj5BbnQgTW90aW9uIERlbW8uQW50IE1vdGlvbiBEZW1vLkFudCBNb3Rpb24gRGVtby5BbnQgTW90aW9uIERlbW88L3A+XHJcbiAgICAgICAgPC9RdWV1ZUFuaW0+XHJcbiAgICAgICAgPFR3ZWVuT25lIGFuaW1hdGlvbj17eyB5OiA1MCwgb3BhY2l0eTogMCwgdHlwZTogJ2Zyb20nLCBkZWxheTogMjAwIH19IG5hbWU9XCJUd2Vlbk9uZVwiPlxyXG4gICAgICAgICAgQW50IE1vdGlvbiBEZW1vLkFudCBNb3Rpb24gRGVtb1xyXG4gICAgICAgIDwvVHdlZW5PbmU+XHJcbiAgICAgIDwvRWxlbWVudD5cclxuICAgIDwvQmFubmVyQW5pbT4gKi99XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTt9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsIi8vIGNvbXBvbmVudHMvTGF5b3V0LmpzXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG4vLyBpbXBvcnQgTmF2QmFyIGZyb20gXCIuL05hdkJhclwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIG1hcmdpbjpcIjBweFwiLFxyXG4gIHBhZGRpbmc6XCIwcHhcIlxyXG59O1xyXG5cclxuY29uc3QgY29udGVudFN0eWxlID0ge1xyXG4gIGZsZXg6IDEsXHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIlxyXG59O1xyXG5cclxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4ge1xyXG4gIHJldHVybig8ZGl2IGNsYXNzTmFtZT1cIkxheW91dFwiIHN0eWxlPXtsYXlvdXRTdHlsZX0+XHJcbiAgICB7LyogPE5hdkJhciAvPiAqL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGVudFwiICBzdHlsZT17Y29udGVudFN0eWxlfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsIi8vIGNvbXBvbmVudHMvTmF2QmFyLmpzXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5cclxuXHJcbmNvbnN0IG5hdkJhclN0eWxlID0ge1xyXG4gICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCI2MHB4XCJcclxuICB9O1xyXG4gIGNvbnN0IGxvZ29TdHlsZSA9IHtcclxuICAgIGhlaWdodDpcIjYwcHhcIixcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgTmF2QmFyID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZCYXJDb250YWluZXJcIiBzdHlsZT17bmF2QmFyU3R5bGV9PlxyXG4gICAgPE5hdmJhciBleHBhbmQ9XCJsZ1wiIGZpeGVkPVwidG9wXCIgIHZhcmlhbnQ9XCJkYXJrXCI+XHJcbiAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCI+PGltZyBzcmM9XCIvbG9nby5wbmdcIiBzdHlsZT17bG9nb1N0eWxlfS8+PC9OYXZiYXIuQnJhbmQ+XHJcblxyXG4gICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XHJcblxyXG4gICAgICA8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cclxuICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNob21lXCI+SG9tZTwvTmF2Lkxpbms+XHJcbiAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjd29ya1wiPldvcms8L05hdi5MaW5rPlxyXG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiI3RyYWluaW5nXCI+VHJhaW5pbmc8L05hdi5MaW5rPlxyXG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiI2NvbnRhY3RcIj5Db250YWN0PC9OYXYuTGluaz5cclxuICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNzZXJ2aWNlXCI+U2V2aWNlPC9OYXYuTGluaz5cclxuICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNnYWxsZXJ5XCI+R2FsbGVyeTwvTmF2Lkxpbms+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvTmF2PlxyXG4gICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuXHJcbiAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXb3JrU3ViIGZyb20gXCIuL1dvcmtTdWJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XHJcbmltcG9ydCB7IEZhZGUgfSBmcm9tICdyZWFjdC1hd2Vzb21lLXJldmVhbCc7XHJcblxyXG5cclxuY29uc3QgdGV4dD0ge1xyXG4gICAgdGl0bGU6XCJHcmVhdCB1cFwiLFxyXG4gICAgbGluazpcIi9saW5rXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXCIsXHJcbiAgICBwaXg6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjU2NzM3L3BleGVscy1waG90by0yNTY3MzcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCJcclxufVxyXG5jb25zdCBidXR0b25TdHlsZSA9e1xyXG4gICAgZGlzcGxheTpcImJsb2NrXCIsXHJcbiAgICBtYXJnaW46XCIxcmVtIGF1dG8gIDNyZW0gIGF1dG9cIixcclxuICAgIHdpZHRoOlwiMjAwcHhcIixcclxuICAgIHBhZGRpbmc6XCIycHhcIixcclxuICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxyXG4gICAgZm9udFNpemU6XCIxMnB4XCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOlwiM3B4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgyMzMuMDZkZWcsICNGRTE5MDMgLTYxLjgxJSwgI0Y4NzEwRiA3NC40MSUpXCJcclxuICB9XHJcblxyXG5jb25zdCBTZXJ2aWNlQ2FyZCA9ICgpID0+IChcclxuICAgIDxGYWRlPjxkaXYgc3R5bGU9e3sgYm9yZGVyOlwiMXB4IHNvbGlkIHdoaXRlXCIsIHBhZGRpbmc6XCIzcmVtIDFyZW0gMXJlbSAxcmVtXCJ9fT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kPC9wPlxyXG4gICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvblN0eWxlfSB0ZXh0PVwiUGhvdG9ncmFwaHlcIiAvPiBcclxuXHJcbiAgICAgICAgPHA+PC9wPlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kPC9wPlxyXG4gICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvblN0eWxlfSB0ZXh0PVwiTW92aWUgTWFraW5nXCIgLz4gXHJcblxyXG4gICAgICAgIDxwPjwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kPC9wPlxyXG4gICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvblN0eWxlfSB0ZXh0PVwiTW9kZWwgV29ya3NcIiAvPiBcclxuICAgPC9kaXY+XHJcbiAgIDwvRmFkZT5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IFNlcnZpY2VDYXJkOyIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTZXJ2aWNlQ2FyZCBmcm9tIFwiLi9TZXJ2aWNlQ2FyZFwiO1xyXG5cclxuY29uc3QgdGV4dD0ge1xyXG4gICAgdGl0bGU6XCJHcmVhdCB1cFwiLFxyXG4gICAgbGluazpcIi9saW5rXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXCIsXHJcbiAgICBwaXg6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjU2NzM3L3BleGVscy1waG90by0yNTY3MzcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCJcclxufVxyXG5jb25zdCBDb250YWluZXJTdHlsZT17XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJ1cmwoIGh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzE2NDQ4ODgvcGV4ZWxzLXBob3RvLTE2NDQ4ODguanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj00Jnc9NTAwXCIsXHJcbiAgICAvLyB3aWR0aDogXCIyMzA5cHhcIixcclxuICAgIGhlaWdodDogXCI4MDBweFwiLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDpcIm5vLXJlcGVhdFwiLFxyXG4gICAgYmFja2dyb3VuZFNpemU6XCJjb250ZW50XCIsXHJcbiAgICBmb250RmFtaWx5OiBcIkx1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1wiLFxyXG4gICAgZm9udEZ0eWxlOiBcIm5vcm1hbFwiLFxyXG4gICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcclxuICAgIGZvbnRTaXplOiBcIjMwcHhcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMzZweFwiLFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjpcImxlZnQgdG9wXCIsXHJcbiAgICBvcGFjaXR5OjF9IFxyXG5cclxuXHJcbmNvbnN0IFNlcnZpY2UgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGlkPVwic2VydmljZVwiICBzdHlsZT17Q29udGFpbmVyU3R5bGV9PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteS01XCIgPlxyXG4gICAgICAgPGgxIGNsYXNzTmFtZT1cIm15LTUgdGV4dC1jZW50ZXJcIj5TZXJ2aWNlPC9oMT5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPjxTZXJ2aWNlQ2FyZCB0ZXh0PXt0ZXh0fSAvPjwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IFNlcnZpY2U7IiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFZpZGVvU3ViIGZyb20gXCIuL1ZpZGVvU3ViXCI7XHJcbmltcG9ydCBXb3JrU3ViIGZyb20gXCIuL1dvcmtTdWJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuXHJcblxyXG5cclxuY29uc3QgdGV4dD0ge1xyXG4gICAgdGl0bGU6XCJHcmVhdCB1cFwiLFxyXG4gICAgbGluazpcIi9saW5rXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXCIsXHJcbiAgICBwaXg6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjU2NzM3L3BleGVscy1waG90by0yNTY3MzcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCJcclxufVxyXG5cclxuXHJcbmNvbnN0IGJ1dHRvblN0eWxlID17XHJcbiAgIGRpc3BsYXk6XCJibG9ja1wiLFxyXG4gICBtYXJnaW5Ub3A6XCIycmVtXCIsXHJcbiAgIG1hcmdpbkxlZnQ6XCJhdXRvXCIsXHJcbiAgICB3aWR0aDpcIjIwMHB4XCIsXHJcbiAgICBwYWRkaW5nOlwiMnB4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcclxuICAgIGZvbnRTaXplOlwiMTJweFwiLFxyXG4gICAgbGV0dGVyU3BhY2luZzpcIjNweFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJibGFja1wiLFxyXG4gICAgYm9yZGVyOlwiMXB4IHNvbGlkICMyMTIyMzNcIlxyXG59XHJcblxyXG5jb25zdCBWaWRlbyA9ICgpID0+IChcclxuICAgIDxkaXYgaWQ9XCJ3b3JrXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzBBMEYxNFwiLG1pbkhlaWdodDpcIjgwMHB4XCIsIHBhZGRpbmdCb3R0b206XCI0cmVtXCJ9fT5cclxuICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXktNVwiID5cclxuICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTpcIjZyZW1cIiwgbWFyZ2luVG9wOlwiNnJlbVwifX0+VmlkZW8gU2hvdzwvaDI+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+PFZpZGVvU3ViIHRleHQ9e3RleHR9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+PFZpZGVvU3ViIHRleHQ9e3RleHR9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj48VmlkZW9TdWIgdGV4dD17dGV4dH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPjxWaWRlb1N1YiB0ZXh0PXt0ZXh0fSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+PFZpZGVvU3ViIHRleHQ9e3RleHR9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8QnV0dG9uIHRleHQ9XCJTZWUgbW9yZVwiIGJ1dHRvblN0eWxlPXtidXR0b25TdHlsZX0gLz5cclxuXHJcbiAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IFZpZGVvOyIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiXHJcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIlxyXG5cclxuY29uc3QgYnV0dG9uU3R5bGUgPXtcclxuICAgIGRpc3BsYXk6XCJibG9ja1wiLFxyXG4gICAgbWFyZ2luOlwiYXV0b1wiLFxyXG4gICAgd2lkdGg6XCIyMDBweFwiLFxyXG4gICAgcGFkZGluZzpcIjJweFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOlwiNHB4XCIsXHJcbiAgICBmb250U2l6ZTpcIjEycHhcIixcclxuICAgIGxldHRlclNwYWNpbmc6XCIzcHhcIixcclxuICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDIzMy4wNmRlZywgI0ZFMTkwMyAtNjEuODElLCAjRjg3MTBGIDc0LjQxJSlcIlxyXG4gIH1cclxuXHJcbiAgY29uc3QgdGV4dFN0eWxlID17XHJcbiAgICAgIGxldHRlclNwYWNpbmc6XCIycHhcIlxyXG5cclxuICB9XHJcbmNvbnN0IFZpZGVvU3ViID0gKHt0ZXh0fSkgPT4gKFxyXG4gICAgPENhcmQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOlwiIzMwMTkyOVwiIH19PlxyXG4gICAgPGEgaHJlZj17dGV4dC5saW5rfT48Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz17dGV4dC5waXh9IC8+PC9hPlxyXG4gICAgPENhcmQuQm9keT5cclxuICAgIFxyXG4gICAgPC9DYXJkLkJvZHk+XHJcbiAgPC9DYXJkPlxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgVmlkZW9TdWI7IiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCJcclxuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSAncmVhY3QtYXdlc29tZS1yZXZlYWwnO1xyXG5cclxuXHJcbmNvbnN0IGJ1dHRvblN0eWxlID17XHJcbiAgICBkaXNwbGF5OlwiYmxvY2tcIixcclxuICAgIG1hcmdpbjpcImF1dG9cIixcclxuICAgIHdpZHRoOlwiMjAwcHhcIixcclxuICAgIHBhZGRpbmc6XCIycHhcIixcclxuICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxyXG4gICAgZm9udFNpemU6XCIxMnB4XCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOlwiM3B4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgyMzMuMDZkZWcsICNGRTE5MDMgLTYxLjgxJSwgI0Y4NzEwRiA3NC40MSUpXCJcclxuICB9XHJcblxyXG4gIGNvbnN0IHRleHRTdHlsZSA9e1xyXG4gICAgICBsZXR0ZXJTcGFjaW5nOlwiMnB4XCJcclxuXHJcbiAgfVxyXG5jb25zdCBXb3JrU3ViID0gKHt0ZXh0fSkgPT4gKFxyXG48RmFkZT5cclxuICAgIDxDYXJkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjpcIiMzMDE5MjlcIiB9fT5cclxuICAgIDxhIGhyZWY9e3RleHQubGlua30+PENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9e3RleHQucGl4fSAvPjwvYT5cclxuICAgIDxDYXJkLkJvZHk+XHJcbiAgICA8Q2FyZC5UaXRsZT57dGV4dC50aXRsZX08L0NhcmQuVGl0bGU+XHJcbiAgICAgIDxDYXJkLlRleHQgc3R5bGUgPXt0ZXh0U3R5bGV9PlxyXG4gICAgICAgIHt0ZXh0LmRlc2NyaXB0aW9ufVxyXG4gICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgPEJ1dHRvbiBidXR0b25TdHlsZT17YnV0dG9uU3R5bGV9IHRleHQ9XCJTZWUgbW9yZVwiLz5cclxuICAgIDwvQ2FyZC5Cb2R5PlxyXG4gIDwvQ2FyZD5cclxuICA8L0ZhZGU+XHJcbiAgKTtcclxuICBleHBvcnQgZGVmYXVsdCBXb3JrU3ViOyIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXb3JrU3ViIGZyb20gXCIuL1dvcmtTdWJcIjtcclxuaW1wb3J0IFZpZGVvIGZyb20gXCIuL1ZpZGVvXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IHRleHQ9IHtcclxuICAgIHRpdGxlOlwiR3JlYXQgdXBcIixcclxuICAgIGxpbms6XCIvbGlua1wiLFxyXG4gICAgZGVzY3JpcHRpb246XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFwiLFxyXG4gICAgcGl4OiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzI1NjczNy9wZXhlbHMtcGhvdG8tMjU2NzM3LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgV29ya3MgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGlkPVwid29ya1wiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwQTBGMTRcIixtaW5IZWlnaHQ6XCI4MDBweFwiLCBwYWRkaW5nQm90dG9tOlwiNHJlbVwifX0+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG15LTVcIiA+XHJcbiAgICAgICA8aDEgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOlwiNnJlbVwiLCBtYXJnaW5Ub3A6XCI2cmVtXCJ9fT5EaXNjb3ZlciBPdXIgV29ya3M8L2gxPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPjxXb3JrU3ViIHRleHQ9e3RleHR9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPjxXb3JrU3ViIHRleHQ9e3RleHR9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj48V29ya1N1YiB0ZXh0PXt0ZXh0fSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+PFdvcmtTdWIgdGV4dD17dGV4dH0gLz48L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICAgPFZpZGVvIC8+XHJcbiAgIDwvZGl2PlxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgV29ya3M7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXJsPXJlcXVpcmUoXCJ1cmxcIik7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO3ZhciBfcm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm91dGVyXCIpKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO2Z1bmN0aW9uIGlzTG9jYWwoaHJlZil7dmFyIHVybD0oMCxfdXJsLnBhcnNlKShocmVmLGZhbHNlLHRydWUpO3ZhciBvcmlnaW49KDAsX3VybC5wYXJzZSkoKDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpLGZhbHNlLHRydWUpO3JldHVybiF1cmwuaG9zdHx8dXJsLnByb3RvY29sPT09b3JpZ2luLnByb3RvY29sJiZ1cmwuaG9zdD09PW9yaWdpbi5ob3N0O31mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jKXt2YXIgbGFzdEhyZWY9bnVsbDt2YXIgbGFzdEFzPW51bGw7dmFyIGxhc3RSZXN1bHQ9bnVsbDtyZXR1cm4oaHJlZixhcyk9PntpZihsYXN0UmVzdWx0JiZocmVmPT09bGFzdEhyZWYmJmFzPT09bGFzdEFzKXtyZXR1cm4gbGFzdFJlc3VsdDt9dmFyIHJlc3VsdD1mb3JtYXRGdW5jKGhyZWYsYXMpO2xhc3RIcmVmPWhyZWY7bGFzdEFzPWFzO2xhc3RSZXN1bHQ9cmVzdWx0O3JldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZm9ybWF0VXJsKHVybCl7cmV0dXJuIHVybCYmdHlwZW9mIHVybD09PSdvYmplY3QnPygwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikodXJsKTp1cmw7fXZhciBvYnNlcnZlcjt2YXIgbGlzdGVuZXJzPW5ldyBNYXAoKTt2YXIgSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP3dpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcjpudWxsO3ZhciBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIGdldE9ic2VydmVyKCl7Ly8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbmlmKG9ic2VydmVyKXtyZXR1cm4gb2JzZXJ2ZXI7fS8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuaWYoIUludGVyc2VjdGlvbk9ic2VydmVyKXtyZXR1cm4gdW5kZWZpbmVkO31yZXR1cm4gb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9PntpZighbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKXtyZXR1cm47fXZhciBjYj1saXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCk7aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjApe29ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO2xpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KTtjYigpO319KTt9LHtyb290TWFyZ2luOicyMDBweCd9KTt9dmFyIGxpc3RlblRvSW50ZXJzZWN0aW9ucz0oZWwsY2IpPT57dmFyIG9ic2VydmVyPWdldE9ic2VydmVyKCk7aWYoIW9ic2VydmVyKXtyZXR1cm4oKT0+e307fW9ic2VydmVyLm9ic2VydmUoZWwpO2xpc3RlbmVycy5zZXQoZWwsY2IpO3JldHVybigpPT57dHJ5e29ic2VydmVyLnVub2JzZXJ2ZShlbCk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO31saXN0ZW5lcnMuZGVsZXRlKGVsKTt9O307Y2xhc3MgTGluayBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IocHJvcHMpe3N1cGVyKHByb3BzKTt0aGlzLnA9dm9pZCAwO3RoaXMuY2xlYW5VcExpc3RlbmVycz0oKT0+e307dGhpcy5mb3JtYXRVcmxzPW1lbW9pemVkRm9ybWF0VXJsKChocmVmLGFzSHJlZik9PntyZXR1cm57aHJlZjooMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGhyZWYpKSxhczphc0hyZWY/KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChhc0hyZWYpKTphc0hyZWZ9O30pO3RoaXMubGlua0NsaWNrZWQ9ZT0+e3Zhcntub2RlTmFtZSx0YXJnZXR9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZS5tZXRhS2V5fHxlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUubmF0aXZlRXZlbnQmJmUubmF0aXZlRXZlbnQud2hpY2g9PT0yKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxucmV0dXJuO312YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTtpZighaXNMb2NhbChocmVmKSl7Ly8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxucmV0dXJuO312YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjtocmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsaHJlZik7YXM9YXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxhcyk6aHJlZjtlLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG52YXJ7c2Nyb2xsfT10aGlzLnByb3BzO2lmKHNjcm9sbD09bnVsbCl7c2Nyb2xsPWFzLmluZGV4T2YoJyMnKTwwO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbl9yb3V0ZXIuZGVmYXVsdFt0aGlzLnByb3BzLnJlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdzp0aGlzLnByb3BzLnNoYWxsb3d9KS50aGVuKHN1Y2Nlc3M9PntpZighc3VjY2VzcylyZXR1cm47aWYoc2Nyb2xsKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtkb2N1bWVudC5ib2R5LmZvY3VzKCk7fX0pO307aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHByb3BzLnByZWZldGNoKXtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319dGhpcy5wPXByb3BzLnByZWZldGNoIT09ZmFsc2U7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7fWdldFBhdGhzKCl7dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247dmFye2hyZWY6cGFyc2VkSHJlZixhczpwYXJzZWRBc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTt2YXIgcmVzb2x2ZWRIcmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkSHJlZik7cmV0dXJuW3Jlc29sdmVkSHJlZixwYXJzZWRBcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEFzKTpyZXNvbHZlZEhyZWZdO31oYW5kbGVSZWYocmVmKXtpZih0aGlzLnAmJkludGVyc2VjdGlvbk9ic2VydmVyJiZyZWYmJnJlZi50YWdOYW1lKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt2YXIgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbdGhpcy5nZXRQYXRocygpLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldO2lmKCFpc1ByZWZldGNoZWQpe3RoaXMuY2xlYW5VcExpc3RlbmVycz1saXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCgpPT57dGhpcy5wcmVmZXRjaCgpO30pO319fS8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG5wcmVmZXRjaChvcHRpb25zKXtpZighdGhpcy5wfHx0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbnZhciBwYXRocz10aGlzLmdldFBhdGhzKCk7Ly8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbl9yb3V0ZXIuZGVmYXVsdC5wcmVmZXRjaChwYXRoc1svKiBocmVmICovMF0scGF0aHNbLyogYXNQYXRoICovMV0sb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7cHJlZmV0Y2hlZFtwYXRocy5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXT10cnVlO31yZW5kZXIoKXt2YXJ7Y2hpbGRyZW59PXRoaXMucHJvcHM7dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxudmFyIGNoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt2YXIgcHJvcHM9e3JlZjplbD0+e3RoaXMuaGFuZGxlUmVmKGVsKTtpZihjaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZil7aWYodHlwZW9mIGNoaWxkLnJlZj09PSdmdW5jdGlvbicpY2hpbGQucmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZC5yZWY9PT0nb2JqZWN0Jyl7Y2hpbGQucmVmLmN1cnJlbnQ9ZWw7fX19LG9uTW91c2VFbnRlcjplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXRoaXMucHJlZmV0Y2goe3ByaW9yaXR5OnRydWV9KTt9LG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe3RoaXMubGlua0NsaWNrZWQoZSk7fX19Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZih0aGlzLnByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7cHJvcHMuaHJlZj1hc3x8aHJlZjt9Ly8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCl7dmFyIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0PXJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O2lmKHByb3BzLmhyZWYmJnR5cGVvZiBfX05FWFRfREFUQV9fIT09J3VuZGVmaW5lZCcmJl9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCl7cHJvcHMuaHJlZj1yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKTt9fXJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO319aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt2YXIgd2Fybj0oMCxfdXRpbHMuZXhlY09uY2UpKGNvbnNvbGUuZXJyb3IpOy8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxudmFyIFByb3BUeXBlcz1yZXF1aXJlKCdwcm9wLXR5cGVzJyk7dmFyIGV4YWN0PXJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKTsvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG5MaW5rLnByb3BUeXBlcz1leGFjdCh7aHJlZjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLGFzOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLHByZWZldGNoOlByb3BUeXBlcy5ib29sLHJlcGxhY2U6UHJvcFR5cGVzLmJvb2wsc2hhbGxvdzpQcm9wVHlwZXMuYm9vbCxwYXNzSHJlZjpQcm9wVHlwZXMuYm9vbCxzY3JvbGw6UHJvcFR5cGVzLmJvb2wsY2hpbGRyZW46UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsKHByb3BzLHByb3BOYW1lKT0+e3ZhciB2YWx1ZT1wcm9wc1twcm9wTmFtZV07aWYodHlwZW9mIHZhbHVlPT09J3N0cmluZycpe3dhcm4oXCJXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+XCIpO31yZXR1cm4gbnVsbDt9XSkuaXNSZXF1aXJlZH0pO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL3ZhciBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG52YXIgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJ107dmFyIHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTt2YXIgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09ZnVuY3Rpb24oKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LGZ1bmN0aW9uKCl7dmFyIGV2ZW50RmllbGQ9XCJvblwiK2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2V2ZW50LnN1YnN0cmluZygxKTt2YXIgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJndW1lbnRzKTt9Y2F0Y2goZXJyKXsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihcIkVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiBcIitldmVudEZpZWxkKTsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihlcnIubWVzc2FnZStcIlxcblwiK2Vyci5zdGFjayk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7dmFyIG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG52YXIgY3JlYXRlUm91dGVyPWZ1bmN0aW9uIGNyZWF0ZVJvdXRlcigpe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9bmV3IEFycmF5KF9sZW4pLF9rZXk9MDtfa2V5PF9sZW47X2tleSsrKXthcmdzW19rZXldPWFyZ3VtZW50c1tfa2V5XTt9c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe3ZhciBfcm91dGVyPXJvdXRlcjt2YXIgaW5zdGFuY2U9e307Zm9yKHZhciBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKHt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT1mdW5jdGlvbigpe3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cmV0dXJuIGluc3RhbmNlO30iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPVwid2l0aFJvdXRlcihcIituYW1lK1wiKVwiO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fSIsIlwidXNlIHN0cmljdFwiO1xuLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtaXR0KCkge1xuICAgIGNvbnN0IGFsbCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb24odHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9LFxuICAgICAgICBvZmYodHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQodHlwZSwgLi4uZXZ0cykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKC4uLmV2dHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1pdHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbmNvbnN0IG1pdHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgaXNfZHluYW1pY18xID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbmNvbnN0IHJvdXRlX21hdGNoZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG5jb25zdCByb3V0ZV9yZWdleF8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoO1xufVxuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICAgICAgOiBwYXRoO1xufVxuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLyc7XG59XG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aCkgPT4gdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpO1xuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIGlzU2VydmVyUmVuZGVyLCBjYikge1xuICAgIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDE7XG4gICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYCksXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSksIHtcbiAgICAgICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBlcnIuY29kZSA9ICdQQUdFX0xPQURfRVJST1InO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUsIHF1ZXJ5LCBhcywgeyBpbml0aWFsUHJvcHMsIHBhZ2VMb2FkZXIsIEFwcCwgd3JhcEFwcCwgQ29tcG9uZW50LCBlcnIsIHN1YnNjcmlwdGlvbiwgaXNGYWxsYmFjaywgfSkge1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHt9O1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIHV0aWxzXzEuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAoZS5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgICAgICAgICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgICAgICAgICAgIHVybF8xLnBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUodXJsXzEucGFyc2UoYXNQYXRoKS5wYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICAgICAgICAgICAgOiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBudWxsLCB0aGlzLmlzU3NyLCBkYXRhID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHVybF8xLnBhcnNlKGFzUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMuYXNQYXRoID1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgIGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhcztcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICAgIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShyb3V0ZSwgbW9kKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IG1vZC5kZWZhdWx0IHx8IG1vZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IENvbXBvbmVudCwgX19OX1NTRzogbW9kLl9fTl9TU0csIF9fTl9TU1A6IG1vZC5fX05fU1NQIH0pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YTtcbiAgICAgICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICAgKi9cbiAgICBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcHVzaCh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICByZXBsYWNlKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjaGFuZ2UobWV0aG9kLCBfdXJsLCBfYXMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgICAgIGlmICh1dGlsc18xLlNUKSB7XG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybDtcbiAgICAgICAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzO1xuICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKTtcbiAgICAgICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcyk7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHVybF8xLnBhcnNlKGFzKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gcm91dGVfcmVnZXhfMS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcm91dGVfbWF0Y2hlcl8xLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW0gPT4gIXF1ZXJ5W3BhcmFtXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgICAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKHJvdXRlSW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IHV0aWxzXzEuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAgICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyLCBsb2FkRXJyb3JGYWlsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnaXBFcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcyA9PiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICB9KSwgcmVqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhKCgpID0+IF9fTl9TU0dcbiAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICB0aGlzLm5vdGlmeShkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgICAqL1xuICAgIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgICAqL1xuICAgIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICAgICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpO1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiB1dGlsc18xLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyk7XG4gICAgICAgICAgICBlLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhKSB7XG4gICAgICAgIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblJvdXRlci5ldmVudHMgPSBtaXR0XzEuZGVmYXVsdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87XG5mdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO1xufVxuZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZSA9IGlzRHluYW1pY1JvdXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkge1xuICAgIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleDtcbiAgICByZXR1cm4gKHBhdGhuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVjb2RlID0gKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtcbiAgICAgICAgICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXTtcbiAgICAgICAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcChlbnRyeSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgICAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVNYXRjaGVyID0gZ2V0Um91dGVNYXRjaGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKTtcbn1cbmZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKSB7XG4gICAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICAgIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJyk7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgbGV0IGdyb3VwSW5kZXggPSAxO1xuICAgIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICBncm91cHNbJDFcbiAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfTtcbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAnLyguKz8pJyA6ICcvKFteL10rPyknO1xuICAgIH0pO1xuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTtcbiAgICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJyk7XG4gICAgICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSwgZ3JvdXBzIH0sIChuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICAgICAgfVxuICAgICAgICA6IHt9KSk7XG59XG5leHBvcnRzLmdldFJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG4vKipcbiAqIFV0aWxzXG4gKi9cbmZ1bmN0aW9uIGV4ZWNPbmNlKGZuKSB7XG4gICAgbGV0IHVzZWQgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHJldHVybiAoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCF1c2VkKSB7XG4gICAgICAgICAgICB1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmV4ZWNPbmNlID0gZXhlY09uY2U7XG5mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWA7XG59XG5leHBvcnRzLmdldExvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW47XG5mdW5jdGlvbiBnZXRVUkwoKSB7XG4gICAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7XG59XG5leHBvcnRzLmdldFVSTCA9IGdldFVSTDtcbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IENvbXBvbmVudFxuICAgICAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG59XG5leHBvcnRzLmdldERpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWU7XG5mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnQ7XG59XG5leHBvcnRzLmlzUmVzU2VudCA9IGlzUmVzU2VudDtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCBjdHgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKChfYSA9IEFwcC5wcm90b3R5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICAgIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpO1xuICAgIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG59XG5leHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHMgPSBsb2FkR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy51cmxPYmplY3RLZXlzID0gW1xuICAgICdhdXRoJyxcbiAgICAnaGFzaCcsXG4gICAgJ2hvc3QnLFxuICAgICdob3N0bmFtZScsXG4gICAgJ2hyZWYnLFxuICAgICdwYXRoJyxcbiAgICAncGF0aG5hbWUnLFxuICAgICdwb3J0JyxcbiAgICAncHJvdG9jb2wnLFxuICAgICdxdWVyeScsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NsYXNoZXMnLFxuXTtcbmZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwb3J0cy51cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxfMS5mb3JtYXQodXJsLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb24gPSBmb3JtYXRXaXRoVmFsaWRhdGlvbjtcbmV4cG9ydHMuU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0cy5TVCA9IGV4cG9ydHMuU1AgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gJ3JlYWN0LWdyaWQtZ2FsbGVyeSc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBJTUFHRVMgPVxyXG5be1xyXG4gICAgICAgIHNyYzogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yNDcyMDQvcGV4ZWxzLXBob3RvLTI0NzIwNC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgICAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjQ3MjA0L3BleGVscy1waG90by0yNDcyMDQuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICAgICAgdGh1bWJuYWlsV2lkdGg6IDMyMCxcclxuICAgICAgICB0aHVtYm5haWxIZWlnaHQ6IDE3NCxcclxuICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICBjYXB0aW9uOiBcIkFmdGVyIFJhaW4gKEplc2h1IEpvaG4gLSBkZXNpZ25lcnNwaWNzLmNvbSlcIlxyXG59LFxyXG57XHJcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzI1NjUyMC9wZXhlbHMtcGhvdG8tMjU2NTIwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiLFxyXG4gICAgICAgIHRodW1ibmFpbDogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yNTY1MjAvcGV4ZWxzLXBob3RvLTI1NjUyMC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgICAgICB0aHVtYm5haWxXaWR0aDogMzIwLFxyXG4gICAgICAgIHRodW1ibmFpbEhlaWdodDogMTc0LFxyXG4gICAgICAgIHRhZ3M6IFt7dmFsdWU6IFwiT2NlYW5cIiwgdGl0bGU6IFwiT2NlYW5cIn0sIHt2YWx1ZTogXCJQZW9wbGVcIiwgdGl0bGU6IFwiUGVvcGxlXCJ9XSxcclxuICAgICAgICBjYXB0aW9uOiBcIkJvYXRzIChKZXNodSBKb2huIC0gZGVzaWduZXJzcGljcy5jb20pXCJcclxufSxcclxuXHJcbntcclxuICAgICAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTMxNzcxMi9wZXhlbHMtcGhvdG8tMTMxNzcxMi5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgICAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTMxNzcxMi9wZXhlbHMtcGhvdG8tMTMxNzcxMi5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgICAgICB0aHVtYm5haWxXaWR0aDogMzIwLFxyXG4gICAgICAgIHRodW1ibmFpbEhlaWdodDogMTc0XHJcbn0sXHJcbntcclxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xMjY0MjEwL3BleGVscy1waG90by0xMjY0MjEwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiLFxyXG4gICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzEyNjQyMTAvcGV4ZWxzLXBob3RvLTEyNjQyMTAuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICB0aHVtYm5haWxXaWR0aDogMzIwLFxyXG4gICAgdGh1bWJuYWlsSGVpZ2h0OiAxNzQsXHJcbiAgICBpc1NlbGVjdGVkOiBmYWxzZSxcclxuICAgIGNhcHRpb246IFwiQWZ0ZXIgUmFpbiAoSmVzaHUgSm9obiAtIGRlc2lnbmVyc3BpY3MuY29tKVwiXHJcbn0sXHJcbntcclxuICAgIHNyYzogXCJodHRwczovL2MyLnN0YXRpY2ZsaWNrci5jb20vOS84MzU2LzI4ODk3MTIwNjgxXzNiMmMwZjQzZTBfYi5qcGdcIixcclxuICAgIHRodW1ibmFpbDogXCJodHRwczovL2MyLnN0YXRpY2ZsaWNrci5jb20vOS84MzU2LzI4ODk3MTIwNjgxXzNiMmMwZjQzZTBfbi5qcGdcIixcclxuICAgIHRodW1ibmFpbFdpZHRoOiAzMjAsXHJcbiAgICB0aHVtYm5haWxIZWlnaHQ6IDIxMixcclxuICAgIHRhZ3M6IFt7dmFsdWU6IFwiT2NlYW5cIiwgdGl0bGU6IFwiT2NlYW5cIn0sIHt2YWx1ZTogXCJQZW9wbGVcIiwgdGl0bGU6IFwiUGVvcGxlXCJ9XSxcclxuICAgIGNhcHRpb246IFwiQm9hdHMgKEplc2h1IEpvaG4gLSBkZXNpZ25lcnNwaWNzLmNvbSlcIlxyXG59LFxyXG5cclxue1xyXG4gICAgc3JjOiBcImh0dHBzOi8vYzQuc3RhdGljZmxpY2tyLmNvbS85Lzg4ODcvMjg4OTcxMjQ4OTFfOThjNGZkZDgyYl9iLmpwZ1wiLFxyXG4gICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vYzQuc3RhdGljZmxpY2tyLmNvbS85Lzg4ODcvMjg4OTcxMjQ4OTFfOThjNGZkZDgyYl9uLmpwZ1wiLFxyXG4gICAgdGh1bWJuYWlsV2lkdGg6IDMyMCxcclxuICAgIHRodW1ibmFpbEhlaWdodDogMjEyXHJcbn0sXHJcbntcclxuICAgIHNyYzogXCJodHRwczovL2MyLnN0YXRpY2ZsaWNrci5jb20vOS84ODE3LzI4OTczNDQ5MjY1XzA3ZTNhYTVkMmVfYi5qcGdcIixcclxuICAgIHRodW1ibmFpbDogXCJodHRwczovL2MyLnN0YXRpY2ZsaWNrci5jb20vOS84ODE3LzI4OTczNDQ5MjY1XzA3ZTNhYTVkMmVfbi5qcGdcIixcclxuICAgIHRodW1ibmFpbFdpZHRoOiAzMjAsXHJcbiAgICB0aHVtYm5haWxIZWlnaHQ6IDE3NCxcclxuICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgY2FwdGlvbjogXCJBZnRlciBSYWluIChKZXNodSBKb2huIC0gZGVzaWduZXJzcGljcy5jb20pXCJcclxufSxcclxue1xyXG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzY2NzIwMC9wZXhlbHMtcGhvdG8tNjY3MjAwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiLFxyXG4gICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzY2NzIwMC9wZXhlbHMtcGhvdG8tNjY3MjAwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiLFxyXG4gICAgdGh1bWJuYWlsV2lkdGg6IDMyMCxcclxuICAgIHRodW1ibmFpbEhlaWdodDogMjEyLFxyXG4gICAgdGFnczogW3t2YWx1ZTogXCJPY2VhblwiLCB0aXRsZTogXCJPY2VhblwifSwge3ZhbHVlOiBcIlBlb3BsZVwiLCB0aXRsZTogXCJQZW9wbGVcIn1dLFxyXG4gICAgY2FwdGlvbjogXCJCb2F0cyAoSmVzaHUgSm9obiAtIGRlc2lnbmVyc3BpY3MuY29tKVwiXHJcbn0sXHJcblxyXG57XHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvOTQ5MTkzL3BleGVscy1waG90by05NDkxOTMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvOTQ5MTkzL3BleGVscy1waG90by05NDkxOTMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICB0aHVtYm5haWxXaWR0aDogMzIwLFxyXG4gICAgdGh1bWJuYWlsSGVpZ2h0OiAyMTJcclxufSxcclxuXHJcbntcclxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zNjU1NzgyL3BleGVscy1waG90by0zNjU1NzgyLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiLFxyXG4gICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzM2NTU3ODIvcGV4ZWxzLXBob3RvLTM2NTU3ODIuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICB0aHVtYm5haWxXaWR0aDogMzIwLFxyXG4gICAgdGh1bWJuYWlsSGVpZ2h0OiAyMTIsXHJcbiAgICB0YWdzOiBbe3ZhbHVlOiBcIk9jZWFuXCIsIHRpdGxlOiBcIk9jZWFuXCJ9LCB7dmFsdWU6IFwiUGVvcGxlXCIsIHRpdGxlOiBcIlBlb3BsZVwifV0sXHJcbiAgICBjYXB0aW9uOiBcIkJvYXRzIChKZXNodSBKb2huIC0gZGVzaWduZXJzcGljcy5jb20pXCJcclxufSxcclxue1xyXG4gICAgc3JjOiBcImh0dHBzOi8vYzIuc3RhdGljZmxpY2tyLmNvbS85Lzg4MTcvMjg5NzM0NDkyNjVfMDdlM2FhNWQyZV9iLmpwZ1wiLFxyXG4gICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vYzIuc3RhdGljZmxpY2tyLmNvbS85Lzg4MTcvMjg5NzM0NDkyNjVfMDdlM2FhNWQyZV9uLmpwZ1wiLFxyXG4gICAgdGh1bWJuYWlsV2lkdGg6IDMyMCxcclxuICAgIHRodW1ibmFpbEhlaWdodDogMTc0LFxyXG4gICAgaXNTZWxlY3RlZDogZmFsc2UsXHJcbiAgICBjYXB0aW9uOiBcIkFmdGVyIFJhaW4gKEplc2h1IEpvaG4gLSBkZXNpZ25lcnNwaWNzLmNvbSlcIlxyXG59LFxyXG57XHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNjY3MjAwL3BleGVscy1waG90by02NjcyMDAuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNjY3MjAwL3BleGVscy1waG90by02NjcyMDAuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICB0aHVtYm5haWxXaWR0aDogMzIwLFxyXG4gICAgdGh1bWJuYWlsSGVpZ2h0OiAyMTIsXHJcbiAgICB0YWdzOiBbe3ZhbHVlOiBcIk9jZWFuXCIsIHRpdGxlOiBcIk9jZWFuXCJ9LCB7dmFsdWU6IFwiUGVvcGxlXCIsIHRpdGxlOiBcIlBlb3BsZVwifV0sXHJcbiAgICBjYXB0aW9uOiBcIkJvYXRzIChKZXNodSBKb2huIC0gZGVzaWduZXJzcGljcy5jb20pXCJcclxufSxcclxuXHJcbntcclxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy85NDkxOTMvcGV4ZWxzLXBob3RvLTk0OTE5My5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgIHRodW1ibmFpbDogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy85NDkxOTMvcGV4ZWxzLXBob3RvLTk0OTE5My5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgIHRodW1ibmFpbFdpZHRoOiAzMjAsXHJcbiAgICB0aHVtYm5haWxIZWlnaHQ6IDIxMlxyXG59LFxyXG5cclxue1xyXG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzM2NTU3ODIvcGV4ZWxzLXBob3RvLTM2NTU3ODIuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMzY1NTc4Mi9wZXhlbHMtcGhvdG8tMzY1NTc4Mi5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgIHRodW1ibmFpbFdpZHRoOiAzMjAsXHJcbiAgICB0aHVtYm5haWxIZWlnaHQ6IDIxMixcclxuICAgIHRhZ3M6IFt7dmFsdWU6IFwiT2NlYW5cIiwgdGl0bGU6IFwiT2NlYW5cIn0sIHt2YWx1ZTogXCJQZW9wbGVcIiwgdGl0bGU6IFwiUGVvcGxlXCJ9XSxcclxuICAgIGNhcHRpb246IFwiQm9hdHMgKEplc2h1IEpvaG4gLSBkZXNpZ25lcnNwaWNzLmNvbSlcIlxyXG59LFxyXG5cclxue1xyXG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzY2NzIwMC9wZXhlbHMtcGhvdG8tNjY3MjAwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiLFxyXG4gICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzY2NzIwMC9wZXhlbHMtcGhvdG8tNjY3MjAwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiLFxyXG4gICAgdGh1bWJuYWlsV2lkdGg6IDMyMCxcclxuICAgIHRodW1ibmFpbEhlaWdodDogMjEyLFxyXG4gICAgdGFnczogW3t2YWx1ZTogXCJPY2VhblwiLCB0aXRsZTogXCJPY2VhblwifSwge3ZhbHVlOiBcIlBlb3BsZVwiLCB0aXRsZTogXCJQZW9wbGVcIn1dLFxyXG4gICAgY2FwdGlvbjogXCJCb2F0cyAoSmVzaHUgSm9obiAtIGRlc2lnbmVyc3BpY3MuY29tKVwiXHJcbn0sXHJcblxyXG57XHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvOTQ5MTkzL3BleGVscy1waG90by05NDkxOTMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvOTQ5MTkzL3BleGVscy1waG90by05NDkxOTMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICB0aHVtYm5haWxXaWR0aDogMzIwLFxyXG4gICAgdGh1bWJuYWlsSGVpZ2h0OiAyMTJcclxufSxcclxuXHJcbl1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEdhbGxlcnlQYWdlID0gKCkgPT4gKFxyXG4gICAgPGRpdiBpZD1cImdhbGxlcnlcIiA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWNlbnRlclwiPkdhbGxlcnk8L2gxPlxyXG5cclxuICAgICAgICA8R2FsbGVyeSBpbWFnZXM9e0lNQUdFU30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKTtcclxuICBleHBvcnQgZGVmYXVsdCBHYWxsZXJ5UGFnZTsiLCIvLyBwYWdlcy9pbmRleC5qc1xyXG5cclxuey8qIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIiAvPiAqL31cclxuXHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgV29ya3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvV29ya3NcIjtcclxuaW1wb3J0IENlcnRpZmllZFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2VydGlmaWVkU2VjdGlvblwiO1xyXG5pbXBvcnQgU2VydmljZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VydmljZXNcIjtcclxuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFjdFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgR2FsbGVyeVBhZ2UgZnJvbSBcIi4uL3BhZ2VzL2dhbGxlcnlcIjtcclxuLy8gaW1wb3J0ICAnLi4vaG9va3MvbGl2ZV9kYXNoYm9hcmRfY29weSc7IFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiA8TGF5b3V0PlxyXG4gICAgPEhlYWRlciAvPlxyXG4gICAgPFNlcnZpY2VzIGlkPVwic2VydmljZVwiLz5cclxuICAgIDxDZXJ0aWZpZWRTZWN0aW9uIC8+XHJcbiAgICA8V29ya3MgIC8+XHJcblxyXG4gICAgPEdhbGxlcnlQYWdlIC8+XHJcbiAgIFxyXG4gICAgPENvbnRhY3QgaWQ9XCJjb250YWN0XCIvPlxyXG4gICAgPEZvb3RlciAvPlxyXG48L0xheW91dD47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmMtYmFubmVyLWFuaW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmMtcXVldWUtYW5pbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYy10d2Vlbi1vbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXdlc29tZS1yZXZlYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTmF2XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ncmlkLWdhbGxlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29jaWFsLW1lZGlhLWljb25zLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9