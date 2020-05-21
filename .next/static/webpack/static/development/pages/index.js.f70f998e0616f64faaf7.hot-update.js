webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _this = undefined,
    _jsxFileName = "D:\\Personal\\BigTimeProject\\bigtime\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// components/Header.js


var headerStyle = {
  backgroundColor: "blue",
  color: "white",
  width: "100%",
  height: "50px"
};

var Header = function Header() {
  return __jsx("div", {
    className: "Header",
    style: headerStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    secondary: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 8
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    name: "home",
    active: activeItem === 'home',
    onClick: _this.handleItemClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    name: "messages",
    active: activeItem === 'messages',
    onClick: _this.handleItemClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    name: "friends",
    active: activeItem === 'friends',
    onClick: _this.handleItemClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    icon: "search",
    placeholder: "Search...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    name: "logout",
    active: activeItem === 'logout',
    onClick: _this.handleItemClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }))), __jsx("h1", {
    "class": "ui header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 3
    }
  }, "First Header"), __jsx("h2", {
    "class": "ui header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 3
    }
  }, "Second Header"), __jsx("h3", {
    "class": "ui header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 3
    }
  }, "Third Header"), __jsx("h4", {
    "class": "ui header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 3
    }
  }, "Fourth Header"), __jsx("h5", {
    "class": "ui header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 3
    }
  }, "Fifth Header"), __jsx("h6", {
    "class": "ui header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 3
    }
  }, "Sixth Header"));
};

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJoZWFkZXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJIZWFkZXIiLCJhY3RpdmVJdGVtIiwiaGFuZGxlSXRlbUNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUc7QUFDaEJDLGlCQUFlLEVBQUUsTUFERDtBQUVoQkMsT0FBSyxFQUFFLE9BRlM7QUFHaEJDLE9BQUssRUFBRSxNQUhTO0FBSWhCQyxRQUFNLEVBQUU7QUFKUSxDQUFwQjs7QUFPRSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFNBQ2I7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUF3QixTQUFLLEVBQUVMLFdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHNEQUFELENBQU0sSUFBTjtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsVUFBTSxFQUFFTSxVQUFVLEtBQUssTUFGekI7QUFHRSxXQUFPLEVBQUUsS0FBSSxDQUFDQyxlQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFNQyxNQUFDLHNEQUFELENBQU0sSUFBTjtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsVUFBTSxFQUFFRCxVQUFVLEtBQUssVUFGekI7QUFHRSxXQUFPLEVBQUUsS0FBSSxDQUFDQyxlQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkQsRUFXQyxNQUFDLHNEQUFELENBQU0sSUFBTjtBQUNFLFFBQUksRUFBQyxTQURQO0FBRUUsVUFBTSxFQUFFRCxVQUFVLEtBQUssU0FGekI7QUFHRSxXQUFPLEVBQUUsS0FBSSxDQUFDQyxlQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEQsRUFnQkMsTUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxZQUFRLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsZUFBVyxFQUFDLFdBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyxzREFBRCxDQUFNLElBQU47QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFVBQU0sRUFBRUQsVUFBVSxLQUFLLFFBRnpCO0FBR0UsV0FBTyxFQUFFLEtBQUksQ0FBQ0MsZUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBaEJELENBREgsRUE4QkY7QUFBSSxhQUFNLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkE5QkUsRUErQkY7QUFBSSxhQUFNLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEvQkUsRUFnQ0Y7QUFBSSxhQUFNLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFoQ0UsRUFpQ0Y7QUFBSSxhQUFNLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQ0UsRUFrQ0Y7QUFBSSxhQUFNLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFsQ0UsRUFtQ0Y7QUFBSSxhQUFNLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFuQ0UsQ0FEYTtBQUFBLENBQWY7O0tBQU1GLE07QUF5Q1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5mNzBmOTk4ZTA2MTZmNjRmYWFmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9IZWFkZXIuanNcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW5wdXQsIE1lbnUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuXHJcbmNvbnN0IGhlYWRlclN0eWxlID0ge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIixcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiNTBweFwiXHJcbiAgfTtcclxuICBcclxuICBjb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlclwiIHN0eWxlPXtoZWFkZXJTdHlsZX0+XHJcbiAgICAgICA8TWVudSBzZWNvbmRhcnk+XHJcbiAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgbmFtZT0naG9tZSdcclxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2hvbWUnfVxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICBuYW1lPSdtZXNzYWdlcydcclxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ21lc3NhZ2VzJ31cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgbmFtZT0nZnJpZW5kcydcclxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2ZyaWVuZHMnfVxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TWVudS5NZW51IHBvc2l0aW9uPSdyaWdodCc+XHJcbiAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8SW5wdXQgaWNvbj0nc2VhcmNoJyBwbGFjZWhvbGRlcj0nU2VhcmNoLi4uJyAvPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgIG5hbWU9J2xvZ291dCdcclxuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnbG9nb3V0J31cclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTWVudS5NZW51PlxyXG4gICAgICA8L01lbnU+XHJcblxyXG4gICAgICBcclxuICA8aDEgY2xhc3M9XCJ1aSBoZWFkZXJcIj5GaXJzdCBIZWFkZXI8L2gxPlxyXG4gIDxoMiBjbGFzcz1cInVpIGhlYWRlclwiPlNlY29uZCBIZWFkZXI8L2gyPlxyXG4gIDxoMyBjbGFzcz1cInVpIGhlYWRlclwiPlRoaXJkIEhlYWRlcjwvaDM+XHJcbiAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Rm91cnRoIEhlYWRlcjwvaDQ+XHJcbiAgPGg1IGNsYXNzPVwidWkgaGVhZGVyXCI+RmlmdGggSGVhZGVyPC9oNT5cclxuICA8aDYgY2xhc3M9XCJ1aSBoZWFkZXJcIj5TaXh0aCBIZWFkZXI8L2g2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=