webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Works.js":
/*!*****************************!*\
  !*** ./components/Works.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WorkSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkSub */ "./components/WorkSub.js");
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Video */ "./components/Video.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\Works.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var text = {
  title: "Great up",
  link: "/link",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  pix: "https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
};
var headerStyle = {};

var Works = function Works() {
  return __jsx("div", {
    id: "work",
    style: {
      background: "#0A0F14",
      minHeight: "800px",
      paddingBottom: "4rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container my-5",
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 8
    }
  }, "Discover Our Works"), __jsx("div", {
    className: "row ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "col-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }
  }, __jsx(_WorkSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 38
    }
  })), __jsx("div", {
    className: "col-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 12
    }
  }, __jsx(_WorkSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 38
    }
  })), __jsx("div", {
    className: "col-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(_WorkSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 39
    }
  })), __jsx("div", {
    className: "col-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(_WorkSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 39
    }
  })))), __jsx(_Video__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }
  }));
};

_c = Works;
/* harmony default export */ __webpack_exports__["default"] = (Works);

var _c;

$RefreshReg$(_c, "Works");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dvcmtzLmpzIl0sIm5hbWVzIjpbInRleHQiLCJ0aXRsZSIsImxpbmsiLCJkZXNjcmlwdGlvbiIsInBpeCIsImhlYWRlclN0eWxlIiwiV29ya3MiLCJiYWNrZ3JvdW5kIiwibWluSGVpZ2h0IiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLElBQUksR0FBRTtBQUNSQyxPQUFLLEVBQUMsVUFERTtBQUVSQyxNQUFJLEVBQUMsT0FGRztBQUdSQyxhQUFXLEVBQUMseUVBSEo7QUFJUkMsS0FBRyxFQUFFO0FBSkcsQ0FBWjtBQU1BLElBQU1DLFdBQVcsR0FBQyxFQUFsQjs7QUFLQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFNBQ1Y7QUFBSyxNQUFFLEVBQUMsTUFBUjtBQUFlLFNBQUssRUFBRTtBQUFDQyxnQkFBVSxFQUFDLFNBQVo7QUFBc0JDLGVBQVMsRUFBQyxPQUFoQztBQUF5Q0MsbUJBQWEsRUFBQztBQUF2RCxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0Q7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLEVBQWQ7QUFBaUIsU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUMsTUFBZjtBQUF1QkMsZUFBUyxFQUFDO0FBQWpDLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMEIsTUFBQyxnREFBRDtBQUFTLFFBQUksRUFBRVgsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTFCLENBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMEIsTUFBQyxnREFBRDtBQUFTLFFBQUksRUFBRUEsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTFCLENBRkosRUFHSztBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMEIsTUFBQyxnREFBRDtBQUFTLFFBQUksRUFBRUEsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTFCLENBSEwsRUFJSztBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMEIsTUFBQyxnREFBRDtBQUFTLFFBQUksRUFBRUEsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTFCLENBSkwsQ0FGSixDQURDLEVBVUQsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkMsQ0FEVTtBQUFBLENBQWQ7O0tBQU1NLEs7QUFjV0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmMyYjExZTZjZDQyYTZmOTZmMjgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgV29ya1N1YiBmcm9tIFwiLi9Xb3JrU3ViXCI7XHJcbmltcG9ydCBWaWRlbyBmcm9tIFwiLi9WaWRlb1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCB0ZXh0PSB7XHJcbiAgICB0aXRsZTpcIkdyZWF0IHVwXCIsXHJcbiAgICBsaW5rOlwiL2xpbmtcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcIixcclxuICAgIHBpeDogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yNTY3MzcvcGV4ZWxzLXBob3RvLTI1NjczNy5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIlxyXG59XHJcbmNvbnN0IGhlYWRlclN0eWxlPXtcclxuICAgIFxyXG59IFxyXG5cclxuXHJcbmNvbnN0IFdvcmtzID0gKCkgPT4gKFxyXG4gICAgPGRpdiBpZD1cIndvcmtcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMEEwRjE0XCIsbWluSGVpZ2h0OlwiODAwcHhcIiwgcGFkZGluZ0JvdHRvbTpcIjRyZW1cIn19PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteS01XCIgPlxyXG4gICAgICAgPGgxIGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTpcIjZyZW1cIiwgbWFyZ2luVG9wOlwiNnJlbVwifX0+RGlzY292ZXIgT3VyIFdvcmtzPC9oMT5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj48V29ya1N1YiB0ZXh0PXt0ZXh0fSAvPjwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj48V29ya1N1YiB0ZXh0PXt0ZXh0fSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+PFdvcmtTdWIgdGV4dD17dGV4dH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPjxXb3JrU3ViIHRleHQ9e3RleHR9IC8+PC9kaXY+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgIDxWaWRlbyAvPlxyXG4gICA8L2Rpdj5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IFdvcmtzOyJdLCJzb3VyY2VSb290IjoiIn0=