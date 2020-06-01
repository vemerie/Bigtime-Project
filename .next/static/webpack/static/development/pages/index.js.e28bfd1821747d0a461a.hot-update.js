webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WorkSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkSub */ "./components/WorkSub.js");
/* harmony import */ var _FooterList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterList */ "./components/FooterList.js");
/* harmony import */ var _FooterSub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterSub */ "./components/FooterSub.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var text1 = ["Photography", "Videography", "Training", "Model shot", "Wedding Coverage", "Video Directing"];
var text2 = ["Photography", "Videography", "Training", "Video Making"];

var Footer = function Footer() {
  return __jsx("div", {
    style: {
      background: "#0A0F14",
      paddingBottom: "4rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container my-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "col-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }
  }, __jsx(_FooterList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: text1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 38
    }
  })), __jsx("div", {
    className: "col-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 12
    }
  }, __jsx(_FooterList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: text2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 38
    }
  })), __jsx("div", {
    className: "col-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "col-md-3",
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "text-center text-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "info@bigtime.com")))), __jsx(_FooterSub__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }));
};

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/FooterSub.js":
/*!*********************************!*\
  !*** ./components/FooterSub.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\FooterSub.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var FooterSub = function FooterSub() {
  return __jsx("div", {
    style: {
      background: "#0A0F14",
      padding: "4rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container my-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "text-default",
    style: {
      height: "150px",
      backgroundColor: "#432123"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 1
    }
  }, " Copyright @ ", Date.now(), __jsx("span", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 29
    }
  }, "Developed by Vimeron Tech")))));
};

_c = FooterSub;
/* harmony default export */ __webpack_exports__["default"] = (FooterSub);

var _c;

$RefreshReg$(_c, "FooterSub");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3RlclN1Yi5qcyJdLCJuYW1lcyI6WyJ0ZXh0MSIsInRleHQyIiwiRm9vdGVyIiwiYmFja2dyb3VuZCIsInBhZGRpbmdCb3R0b20iLCJ3aWR0aCIsIkZvb3RlclN1YiIsInBhZGRpbmciLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJEYXRlIiwibm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsS0FBSyxHQUFFLENBQUUsYUFBRixFQUFnQixhQUFoQixFQUE4QixVQUE5QixFQUEwQyxZQUExQyxFQUF3RCxrQkFBeEQsRUFBNEUsaUJBQTVFLENBQWI7QUFDQSxJQUFNQyxLQUFLLEdBQUUsQ0FBRSxhQUFGLEVBQWdCLGFBQWhCLEVBQThCLFVBQTlCLEVBQXlDLGNBQXpDLENBQWI7O0FBS0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxTQUNYO0FBQUssU0FBSyxFQUFFO0FBQUNDLGdCQUFVLEVBQUMsU0FBWjtBQUF1QkMsbUJBQWEsRUFBQztBQUFyQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRDtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCLE1BQUMsbURBQUQ7QUFBWSxRQUFJLEVBQUVKLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBMUIsQ0FESixFQUVJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQixNQUFDLG1EQUFEO0FBQVksUUFBSSxFQUFFQyxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTFCLENBRkosRUFHSztBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFITCxFQUlLO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFDLGNBQVQ7QUFBd0IsU0FBSyxFQUFFO0FBQUNJLFdBQUssRUFBQztBQUFQLEtBQS9CO0FBQStDLE9BQUcsRUFBQyxZQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFHLGFBQVMsRUFBQyw0QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKLENBSkwsQ0FGSixDQURDLEVBY0EsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEEsQ0FEVztBQUFBLENBQWY7O0tBQU1ILE07QUFrQldBLHFFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCRjs7QUFHQSxJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQ2Q7QUFBSyxTQUFLLEVBQUU7QUFBQ0gsZ0JBQVUsRUFBQyxTQUFaO0FBQXVCSSxhQUFPLEVBQUM7QUFBL0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0Q7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBOEIsU0FBSyxFQUFFO0FBQUNDLFlBQU0sRUFBQyxPQUFSO0FBQWlCQyxxQkFBZSxFQUFDO0FBQWpDLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFpQkMsSUFBSSxDQUFDQyxHQUFMLEVBQWpCLEVBQTRCO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQTVCLENBREcsQ0FEQSxDQURDLENBRGM7QUFBQSxDQUFsQjs7S0FBTUwsUztBQVVXQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZTI4YmZkMTgyMTc0N2QwYTQ2MWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXb3JrU3ViIGZyb20gXCIuL1dvcmtTdWJcIjtcclxuaW1wb3J0IEZvb3Rlckxpc3QgZnJvbSBcIi4vRm9vdGVyTGlzdFwiO1xyXG5pbXBvcnQgRm9vdGVyU3ViIGZyb20gXCIuL0Zvb3RlclN1YlwiO1xyXG5cclxuXHJcblxyXG5jb25zdCB0ZXh0MT0gWyBcIlBob3RvZ3JhcGh5XCIsXCJWaWRlb2dyYXBoeVwiLFwiVHJhaW5pbmdcIiwgXCJNb2RlbCBzaG90XCIsIFwiV2VkZGluZyBDb3ZlcmFnZVwiLCBcIlZpZGVvIERpcmVjdGluZ1wiXVxyXG5jb25zdCB0ZXh0Mj0gWyBcIlBob3RvZ3JhcGh5XCIsXCJWaWRlb2dyYXBoeVwiLFwiVHJhaW5pbmdcIixcIlZpZGVvIE1ha2luZ1wiXVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMEEwRjE0XCIsIHBhZGRpbmdCb3R0b206XCI0cmVtXCJ9fT5cclxuICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXktNVwiID5cclxuICAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPVwibXktNVwiPkRpc2NvdmVyIE91ciBXb3JrczwvaDE+ICovfVxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+PEZvb3Rlckxpc3QgdGV4dD17dGV4dDF9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPjxGb290ZXJMaXN0IHRleHQ9e3RleHQyfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiQmlndGltZSBMb2dvXCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19IHNyYz1cIi9sb2dvMi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zZWNvbmRhcnlcIj5pbmZvQGJpZ3RpbWUuY29tPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgICA8Rm9vdGVyU3ViIC8+XHJcbiAgIDwvZGl2PlxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsIlxyXG5cclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5jb25zdCBGb290ZXJTdWIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDpcIiMwQTBGMTRcIiwgcGFkZGluZzpcIjRyZW1cIn19PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteS01XCIgPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGVmYXVsdFwiIHN0eWxlPXt7aGVpZ2h0OlwiMTUwcHhcIiwgYmFja2dyb3VuZENvbG9yOlwiIzQzMjEyM1wifX0+XHJcbjxwPiBDb3B5cmlnaHQgQCB7RGF0ZS5ub3coKX08c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkRldmVsb3BlZCBieSBWaW1lcm9uIFRlY2g8L3NwYW4+PC9wPlxyXG48L2Rpdj5cclxuICAgPC9kaXY+XHJcbiBcclxuICAgPC9kaXY+XHJcbiAgKTtcclxuICBleHBvcnQgZGVmYXVsdCBGb290ZXJTdWI7Il0sInNvdXJjZVJvb3QiOiIifQ==