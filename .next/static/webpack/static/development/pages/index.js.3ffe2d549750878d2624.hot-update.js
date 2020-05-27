webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/WorkSub.js":
/*!*******************************!*\
  !*** ./components/WorkSub.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
var _this = undefined,
    _jsxFileName = "D:\\Personal\\BigTimeProject\\bigtime\\components\\WorkSub.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var buttonStyle = {
  display: "block",
  margin: "auto",
  width: "200px",
  padding: "2px",
  borderRadius: "4px",
  fontSize: "12px",
  letterSpacing: "3px",
  fontFamily: "Alegreya Sans",
  background: "linear-gradient(233.06deg, #FE1903 -61.81%, #F8710F 74.41%)"
};
var textStyle = {
  letterSpacing: "2px"
};

var WorkSub = function WorkSub(_ref) {
  var text = _ref.text;
  return __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      width: '16rem',
      backgroundColor: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: text.link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__["default"].Img, {
    variant: "top",
    src: text.pix,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  })), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__["default"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__["default"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, text.title), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__["default"].Text, {
    style: textStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, text.description), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonStyle: buttonStyle,
    text: "See more",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  })));
};

_c = WorkSub;
/* harmony default export */ __webpack_exports__["default"] = (WorkSub);

var _c;

$RefreshReg$(_c, "WorkSub");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dvcmtTdWIuanMiXSwibmFtZXMiOlsiYnV0dG9uU3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luIiwid2lkdGgiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udEZhbWlseSIsImJhY2tncm91bmQiLCJ0ZXh0U3R5bGUiLCJXb3JrU3ViIiwidGV4dCIsImJhY2tncm91bmRDb2xvciIsImxpbmsiLCJwaXgiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFFO0FBQ2ZDLFNBQU8sRUFBQyxPQURPO0FBRWZDLFFBQU0sRUFBQyxNQUZRO0FBR2ZDLE9BQUssRUFBQyxPQUhTO0FBSWZDLFNBQU8sRUFBQyxLQUpPO0FBS2ZDLGNBQVksRUFBQyxLQUxFO0FBTWZDLFVBQVEsRUFBQyxNQU5NO0FBT2ZDLGVBQWEsRUFBQyxLQVBDO0FBUWZDLFlBQVUsRUFBRSxlQVJHO0FBU2ZDLFlBQVUsRUFBRTtBQVRHLENBQW5CO0FBWUUsSUFBTUMsU0FBUyxHQUFFO0FBQ2JILGVBQWEsRUFBQztBQURELENBQWpCOztBQUlGLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBRUMsSUFBRixRQUFFQSxJQUFGO0FBQUEsU0FDWixNQUFDLDREQUFEO0FBQU0sU0FBSyxFQUFFO0FBQUVULFdBQUssRUFBRSxPQUFUO0FBQWtCVSxxQkFBZSxFQUFDO0FBQWxDLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUcsUUFBSSxFQUFFRCxJQUFJLENBQUNFLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQixNQUFDLDREQUFELENBQU0sR0FBTjtBQUFVLFdBQU8sRUFBQyxLQUFsQjtBQUF3QixPQUFHLEVBQUVGLElBQUksQ0FBQ0csR0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFwQixDQURBLEVBRUEsTUFBQyw0REFBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsNERBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYUgsSUFBSSxDQUFDSSxLQUFsQixDQURBLEVBRUUsTUFBQyw0REFBRCxDQUFNLElBQU47QUFBVyxTQUFLLEVBQUdOLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsSUFBSSxDQUFDSyxXQURSLENBRkYsRUFLRSxNQUFDLCtDQUFEO0FBQVEsZUFBVyxFQUFFakIsV0FBckI7QUFBa0MsUUFBSSxFQUFDLFVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQUZBLENBRFk7QUFBQSxDQUFoQjs7S0FBTVcsTztBQVlXQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuM2ZmZTJkNTQ5NzUwODc4ZDI2MjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiXHJcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIlxyXG5cclxuY29uc3QgYnV0dG9uU3R5bGUgPXtcclxuICAgIGRpc3BsYXk6XCJibG9ja1wiLFxyXG4gICAgbWFyZ2luOlwiYXV0b1wiLFxyXG4gICAgd2lkdGg6XCIyMDBweFwiLFxyXG4gICAgcGFkZGluZzpcIjJweFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOlwiNHB4XCIsXHJcbiAgICBmb250U2l6ZTpcIjEycHhcIixcclxuICAgIGxldHRlclNwYWNpbmc6XCIzcHhcIixcclxuICAgIGZvbnRGYW1pbHk6IFwiQWxlZ3JleWEgU2Fuc1wiLFxyXG4gICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMjMzLjA2ZGVnLCAjRkUxOTAzIC02MS44MSUsICNGODcxMEYgNzQuNDElKVwiXHJcbiAgfVxyXG5cclxuICBjb25zdCB0ZXh0U3R5bGUgPXtcclxuICAgICAgbGV0dGVyU3BhY2luZzpcIjJweFwiXHJcblxyXG4gIH1cclxuY29uc3QgV29ya1N1YiA9ICh7dGV4dH0pID0+IChcclxuICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnMTZyZW0nLCBiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiIH19PlxyXG4gICAgPGEgaHJlZj17dGV4dC5saW5rfT48Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz17dGV4dC5waXh9IC8+PC9hPlxyXG4gICAgPENhcmQuQm9keT5cclxuICAgIDxDYXJkLlRpdGxlPnt0ZXh0LnRpdGxlfTwvQ2FyZC5UaXRsZT5cclxuICAgICAgPENhcmQuVGV4dCBzdHlsZSA9e3RleHRTdHlsZX0+XHJcbiAgICAgICAge3RleHQuZGVzY3JpcHRpb259XHJcbiAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICA8QnV0dG9uIGJ1dHRvblN0eWxlPXtidXR0b25TdHlsZX0gdGV4dD1cIlNlZSBtb3JlXCIvPlxyXG4gICAgPC9DYXJkLkJvZHk+XHJcbiAgPC9DYXJkPlxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgV29ya1N1YjsiXSwic291cmNlUm9vdCI6IiJ9