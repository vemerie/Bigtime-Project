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
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-awesome-reveal */ "./node_modules/react-awesome-reveal/dist/index.js");
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\WorkSub.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





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
var textStyle = {
  letterSpacing: "2px"
};

var WorkSub = function WorkSub(_ref) {
  var text = _ref.text;
  return __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__["Fade"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 1
    }
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      backgroundColor: "#301929"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: text.link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__["default"].Img, {
    variant: "top",
    src: text.pix,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  })), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__["default"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__["default"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, text.title), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__["default"].Text, {
    style: textStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, text.description), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonStyle: buttonStyle,
    text: "See more",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dvcmtTdWIuanMiXSwibmFtZXMiOlsiYnV0dG9uU3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luIiwid2lkdGgiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiYmFja2dyb3VuZCIsInRleHRTdHlsZSIsIldvcmtTdWIiLCJ0ZXh0IiwiYmFja2dyb3VuZENvbG9yIiwibGluayIsInBpeCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsV0FBVyxHQUFFO0FBQ2ZDLFNBQU8sRUFBQyxPQURPO0FBRWZDLFFBQU0sRUFBQyxNQUZRO0FBR2ZDLE9BQUssRUFBQyxPQUhTO0FBSWZDLFNBQU8sRUFBQyxLQUpPO0FBS2ZDLGNBQVksRUFBQyxLQUxFO0FBTWZDLFVBQVEsRUFBQyxNQU5NO0FBT2ZDLGVBQWEsRUFBQyxLQVBDO0FBUWZDLFlBQVUsRUFBRTtBQVJHLENBQW5CO0FBV0UsSUFBTUMsU0FBUyxHQUFFO0FBQ2JGLGVBQWEsRUFBQztBQURELENBQWpCOztBQUlGLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBRUMsSUFBRixRQUFFQSxJQUFGO0FBQUEsU0FDaEIsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFNLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxFQUFDO0FBQWxCLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUcsUUFBSSxFQUFFRCxJQUFJLENBQUNFLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQixNQUFDLDREQUFELENBQU0sR0FBTjtBQUFVLFdBQU8sRUFBQyxLQUFsQjtBQUF3QixPQUFHLEVBQUVGLElBQUksQ0FBQ0csR0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFwQixDQURBLEVBRUEsTUFBQyw0REFBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsNERBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYUgsSUFBSSxDQUFDSSxLQUFsQixDQURBLEVBRUUsTUFBQyw0REFBRCxDQUFNLElBQU47QUFBVyxTQUFLLEVBQUdOLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsSUFBSSxDQUFDSyxXQURSLENBRkYsRUFLRSxNQUFDLCtDQUFEO0FBQVEsZUFBVyxFQUFFaEIsV0FBckI7QUFBa0MsUUFBSSxFQUFDLFVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQUZBLENBREosQ0FEZ0I7QUFBQSxDQUFoQjs7S0FBTVUsTztBQWNXQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZjM5MGE4N2ZlNGIwMjIxZWY2NzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiXHJcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gJ3JlYWN0LWF3ZXNvbWUtcmV2ZWFsJztcclxuXHJcblxyXG5jb25zdCBidXR0b25TdHlsZSA9e1xyXG4gICAgZGlzcGxheTpcImJsb2NrXCIsXHJcbiAgICBtYXJnaW46XCJhdXRvXCIsXHJcbiAgICB3aWR0aDpcIjIwMHB4XCIsXHJcbiAgICBwYWRkaW5nOlwiMnB4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcclxuICAgIGZvbnRTaXplOlwiMTJweFwiLFxyXG4gICAgbGV0dGVyU3BhY2luZzpcIjNweFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMjMzLjA2ZGVnLCAjRkUxOTAzIC02MS44MSUsICNGODcxMEYgNzQuNDElKVwiXHJcbiAgfVxyXG5cclxuICBjb25zdCB0ZXh0U3R5bGUgPXtcclxuICAgICAgbGV0dGVyU3BhY2luZzpcIjJweFwiXHJcblxyXG4gIH1cclxuY29uc3QgV29ya1N1YiA9ICh7dGV4dH0pID0+IChcclxuPEZhZGU+XHJcbiAgICA8Q2FyZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6XCIjMzAxOTI5XCIgfX0+XHJcbiAgICA8YSBocmVmPXt0ZXh0Lmxpbmt9PjxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPXt0ZXh0LnBpeH0gLz48L2E+XHJcbiAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgPENhcmQuVGl0bGU+e3RleHQudGl0bGV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICA8Q2FyZC5UZXh0IHN0eWxlID17dGV4dFN0eWxlfT5cclxuICAgICAgICB7dGV4dC5kZXNjcmlwdGlvbn1cclxuICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgIDxCdXR0b24gYnV0dG9uU3R5bGU9e2J1dHRvblN0eWxlfSB0ZXh0PVwiU2VlIG1vcmVcIi8+XHJcbiAgICA8L0NhcmQuQm9keT5cclxuICA8L0NhcmQ+XHJcbiAgPC9GYWRlPlxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgV29ya1N1YjsiXSwic291cmNlUm9vdCI6IiJ9