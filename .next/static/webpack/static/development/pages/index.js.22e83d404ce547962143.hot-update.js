webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ServiceCard.js":
/*!***********************************!*\
  !*** ./components/ServiceCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WorkSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkSub */ "./components/WorkSub.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _this = undefined,
    _jsxFileName = "D:\\Personal\\BigTimeProject\\bigtime\\components\\ServiceCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var text = {
  title: "Great up",
  link: "/link",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  pix: "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
};
var buttonStyle = {
  display: "block",
  margin: "auto",
  width: "200px",
  padding: "2px",
  borderRadius: "4px",
  fontSize: "12px",
  letterSpacing: "3px",
  background: "linear-gradient(233.06deg, #FE1903 -61.81%, #F8710F 74.41%)"
};

var ServiceCard = function ServiceCard() {
  return __jsx("div", {
    style: {
      background: "#transparent",
      paddingBottom: "4rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonStyle: buttonStyle,
    text: "Photography",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonStyle: buttonStyle,
    text: "Movie Making",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonStyle: buttonStyle,
    text: "Model Works",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }));
};

_c = ServiceCard;
/* harmony default export */ __webpack_exports__["default"] = (ServiceCard);

var _c;

$RefreshReg$(_c, "ServiceCard");

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

/***/ "./components/Services.js":
/*!********************************!*\
  !*** ./components/Services.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ServiceCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceCard */ "./components/ServiceCard.js");
var _this = undefined,
    _jsxFileName = "D:\\Personal\\BigTimeProject\\bigtime\\components\\Services.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var text = {
  title: "Great up",
  link: "/link",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  pix: "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
};
var headerStyle = {};

var Service = function Service() {
  return __jsx("div", {
    style: {
      background: "#301929",
      paddingBottom: "4rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container my-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }
  }, __jsx("h1", {
    className: "my-5 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 8
    }
  }, "Service"), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "col-md-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 12
    }
  }, __jsx(_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 38
    }
  })))));
};

_c = Service;
/* harmony default export */ __webpack_exports__["default"] = (Service);

var _c;

$RefreshReg$(_c, "Service");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlcnZpY2VDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VydmljZXMuanMiXSwibmFtZXMiOlsidGV4dCIsInRpdGxlIiwibGluayIsImRlc2NyaXB0aW9uIiwicGl4IiwiYnV0dG9uU3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luIiwid2lkdGgiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiYmFja2dyb3VuZCIsIlNlcnZpY2VDYXJkIiwicGFkZGluZ0JvdHRvbSIsImhlYWRlclN0eWxlIiwiU2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRTtBQUNSQyxPQUFLLEVBQUMsVUFERTtBQUVSQyxNQUFJLEVBQUMsT0FGRztBQUdSQyxhQUFXLEVBQUMseUVBSEo7QUFJUkMsS0FBRyxFQUFFO0FBSkcsQ0FBWjtBQU1BLElBQU1DLFdBQVcsR0FBRTtBQUNmQyxTQUFPLEVBQUMsT0FETztBQUVmQyxRQUFNLEVBQUMsTUFGUTtBQUdmQyxPQUFLLEVBQUMsT0FIUztBQUlmQyxTQUFPLEVBQUMsS0FKTztBQUtmQyxjQUFZLEVBQUMsS0FMRTtBQU1mQyxVQUFRLEVBQUMsTUFOTTtBQU9mQyxlQUFhLEVBQUMsS0FQQztBQVFmQyxZQUFVLEVBQUU7QUFSRyxDQUFuQjs7QUFXQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFNBQ2hCO0FBQUssU0FBSyxFQUFFO0FBQUNELGdCQUFVLEVBQUMsY0FBWjtBQUE0QkUsbUJBQWEsRUFBQztBQUExQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUpBREosRUFFSSxNQUFDLCtDQUFEO0FBQVEsZUFBVyxFQUFFVixXQUFyQjtBQUFrQyxRQUFJLEVBQUMsYUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBTUk7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVKQU5KLEVBT0ksTUFBQywrQ0FBRDtBQUFRLGVBQVcsRUFBRUEsV0FBckI7QUFBa0MsUUFBSSxFQUFDLGNBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixFQVVJO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1SkFWSixFQVdJLE1BQUMsK0NBQUQ7QUFBUSxlQUFXLEVBQUVBLFdBQXJCO0FBQWtDLFFBQUksRUFBQyxhQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEosQ0FEZ0I7QUFBQSxDQUFwQjs7S0FBTVMsVztBQWVXQSwwRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENGO0FBQ0E7QUFFQSxJQUFNZCxJQUFJLEdBQUU7QUFDUkMsT0FBSyxFQUFDLFVBREU7QUFFUkMsTUFBSSxFQUFDLE9BRkc7QUFHUkMsYUFBVyxFQUFDLHlFQUhKO0FBSVJDLEtBQUcsRUFBRTtBQUpHLENBQVo7QUFNQSxJQUFNWSxXQUFXLEdBQUMsRUFBbEI7O0FBS0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUNaO0FBQUssU0FBSyxFQUFFO0FBQUNKLGdCQUFVLEVBQUMsU0FBWjtBQUF1QkUsbUJBQWEsRUFBQztBQUFyQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRDtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCLE1BQUMsb0RBQUQ7QUFBYSxRQUFJLEVBQUVmLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBMUIsQ0FESixDQUZKLENBREMsQ0FEWTtBQUFBLENBQWhCOztLQUFNaUIsTztBQVVXQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMjJlODNkNDA0Y2U1NDc5NjIxNDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXb3JrU3ViIGZyb20gXCIuL1dvcmtTdWJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XHJcblxyXG5jb25zdCB0ZXh0PSB7XHJcbiAgICB0aXRsZTpcIkdyZWF0IHVwXCIsXHJcbiAgICBsaW5rOlwiL2xpbmtcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcIixcclxuICAgIHBpeDogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yNTY3MzcvcGV4ZWxzLXBob3RvLTI1NjczNy5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIlxyXG59XHJcbmNvbnN0IGJ1dHRvblN0eWxlID17XHJcbiAgICBkaXNwbGF5OlwiYmxvY2tcIixcclxuICAgIG1hcmdpbjpcImF1dG9cIixcclxuICAgIHdpZHRoOlwiMjAwcHhcIixcclxuICAgIHBhZGRpbmc6XCIycHhcIixcclxuICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxyXG4gICAgZm9udFNpemU6XCIxMnB4XCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOlwiM3B4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgyMzMuMDZkZWcsICNGRTE5MDMgLTYxLjgxJSwgI0Y4NzEwRiA3NC40MSUpXCJcclxuICB9XHJcblxyXG5jb25zdCBTZXJ2aWNlQ2FyZCA9ICgpID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiI3RyYW5zcGFyZW50XCIsIHBhZGRpbmdCb3R0b206XCI0cmVtXCJ9fT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kPC9wPlxyXG4gICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvblN0eWxlfSB0ZXh0PVwiUGhvdG9ncmFwaHlcIiAvPiBcclxuXHJcbiAgICAgICAgPHA+PC9wPlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kPC9wPlxyXG4gICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvblN0eWxlfSB0ZXh0PVwiTW92aWUgTWFraW5nXCIgLz4gXHJcblxyXG4gICAgICAgIDxwPjwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kPC9wPlxyXG4gICAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvblN0eWxlfSB0ZXh0PVwiTW9kZWwgV29ya3NcIiAvPiBcclxuICAgPC9kaXY+XHJcbiAgKTtcclxuICBleHBvcnQgZGVmYXVsdCBTZXJ2aWNlQ2FyZDsiLCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2VydmljZUNhcmQgZnJvbSBcIi4vU2VydmljZUNhcmRcIjtcclxuXHJcbmNvbnN0IHRleHQ9IHtcclxuICAgIHRpdGxlOlwiR3JlYXQgdXBcIixcclxuICAgIGxpbms6XCIvbGlua1wiLFxyXG4gICAgZGVzY3JpcHRpb246XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFwiLFxyXG4gICAgcGl4OiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzI1NjczNy9wZXhlbHMtcGhvdG8tMjU2NzM3LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiXHJcbn1cclxuY29uc3QgaGVhZGVyU3R5bGU9e1xyXG4gICAgXHJcbn0gXHJcblxyXG5cclxuY29uc3QgU2VydmljZSA9ICgpID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzMwMTkyOVwiLCBwYWRkaW5nQm90dG9tOlwiNHJlbVwifX0+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG15LTVcIiA+XHJcbiAgICAgICA8aDEgY2xhc3NOYW1lPVwibXktNSB0ZXh0LWNlbnRlclwiPlNlcnZpY2U8L2gxPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+PFNlcnZpY2VDYXJkIHRleHQ9e3RleHR9IC8+PC9kaXY+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgU2VydmljZTsiXSwic291cmNlUm9vdCI6IiJ9