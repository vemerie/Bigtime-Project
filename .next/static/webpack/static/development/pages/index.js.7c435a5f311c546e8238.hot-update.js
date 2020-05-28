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
      border: "1px solid #77777",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlcnZpY2VDYXJkLmpzIl0sIm5hbWVzIjpbInRleHQiLCJ0aXRsZSIsImxpbmsiLCJkZXNjcmlwdGlvbiIsInBpeCIsImJ1dHRvblN0eWxlIiwiZGlzcGxheSIsIm1hcmdpbiIsIndpZHRoIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwibGV0dGVyU3BhY2luZyIsImJhY2tncm91bmQiLCJTZXJ2aWNlQ2FyZCIsImJvcmRlciIsInBhZGRpbmdCb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUU7QUFDUkMsT0FBSyxFQUFDLFVBREU7QUFFUkMsTUFBSSxFQUFDLE9BRkc7QUFHUkMsYUFBVyxFQUFDLHlFQUhKO0FBSVJDLEtBQUcsRUFBRTtBQUpHLENBQVo7QUFNQSxJQUFNQyxXQUFXLEdBQUU7QUFDZkMsU0FBTyxFQUFDLE9BRE87QUFFZkMsUUFBTSxFQUFDLE1BRlE7QUFHZkMsT0FBSyxFQUFDLE9BSFM7QUFJZkMsU0FBTyxFQUFDLEtBSk87QUFLZkMsY0FBWSxFQUFDLEtBTEU7QUFNZkMsVUFBUSxFQUFDLE1BTk07QUFPZkMsZUFBYSxFQUFDLEtBUEM7QUFRZkMsWUFBVSxFQUFFO0FBUkcsQ0FBbkI7O0FBV0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxTQUNoQjtBQUFLLFNBQUssRUFBRTtBQUFDRCxnQkFBVSxFQUFDLGNBQVo7QUFBMkJFLFlBQU0sRUFBQyxrQkFBbEM7QUFBc0RDLG1CQUFhLEVBQUM7QUFBcEUsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVKQURKLEVBRUksTUFBQywrQ0FBRDtBQUFRLGVBQVcsRUFBRVgsV0FBckI7QUFBa0MsUUFBSSxFQUFDLGFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQU1JO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1SkFOSixFQU9JLE1BQUMsK0NBQUQ7QUFBUSxlQUFXLEVBQUVBLFdBQXJCO0FBQWtDLFFBQUksRUFBQyxjQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosRUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosRUFVSTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUpBVkosRUFXSSxNQUFDLCtDQUFEO0FBQVEsZUFBVyxFQUFFQSxXQUFyQjtBQUFrQyxRQUFJLEVBQUMsYUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLENBRGdCO0FBQUEsQ0FBcEI7O0tBQU1TLFc7QUFlV0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjdjNDM1YTVmMzExYzU0NmU4MjM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgV29ya1N1YiBmcm9tIFwiLi9Xb3JrU3ViXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xyXG5cclxuY29uc3QgdGV4dD0ge1xyXG4gICAgdGl0bGU6XCJHcmVhdCB1cFwiLFxyXG4gICAgbGluazpcIi9saW5rXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXCIsXHJcbiAgICBwaXg6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjU2NzM3L3BleGVscy1waG90by0yNTY3MzcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCJcclxufVxyXG5jb25zdCBidXR0b25TdHlsZSA9e1xyXG4gICAgZGlzcGxheTpcImJsb2NrXCIsXHJcbiAgICBtYXJnaW46XCJhdXRvXCIsXHJcbiAgICB3aWR0aDpcIjIwMHB4XCIsXHJcbiAgICBwYWRkaW5nOlwiMnB4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcclxuICAgIGZvbnRTaXplOlwiMTJweFwiLFxyXG4gICAgbGV0dGVyU3BhY2luZzpcIjNweFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMjMzLjA2ZGVnLCAjRkUxOTAzIC02MS44MSUsICNGODcxMEYgNzQuNDElKVwiXHJcbiAgfVxyXG5cclxuY29uc3QgU2VydmljZUNhcmQgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDpcIiN0cmFuc3BhcmVudFwiLGJvcmRlcjpcIjFweCBzb2xpZCAjNzc3NzdcIiwgcGFkZGluZ0JvdHRvbTpcIjRyZW1cIn19PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2Q8L3A+XHJcbiAgICAgICAgPEJ1dHRvbiBidXR0b25TdHlsZT17YnV0dG9uU3R5bGV9IHRleHQ9XCJQaG90b2dyYXBoeVwiIC8+IFxyXG5cclxuICAgICAgICA8cD48L3A+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2Q8L3A+XHJcbiAgICAgICAgPEJ1dHRvbiBidXR0b25TdHlsZT17YnV0dG9uU3R5bGV9IHRleHQ9XCJNb3ZpZSBNYWtpbmdcIiAvPiBcclxuXHJcbiAgICAgICAgPHA+PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2Q8L3A+XHJcbiAgICAgICAgPEJ1dHRvbiBidXR0b25TdHlsZT17YnV0dG9uU3R5bGV9IHRleHQ9XCJNb2RlbCBXb3Jrc1wiIC8+IFxyXG4gICA8L2Rpdj5cclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IFNlcnZpY2VDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=