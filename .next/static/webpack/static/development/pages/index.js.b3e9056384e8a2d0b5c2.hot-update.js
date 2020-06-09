webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/FormControl */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\NavBar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// components/NavBar.js






var navBarStyle = {
  background: "transparent",
  color: "white",
  width: "100%",
  height: "60px"
};
var logoStyle = {
  height: "60px"
};

var NavBar = function NavBar() {
  var _jsx;

  return __jsx("div", {
    className: "navBarContainer",
    style: navBarStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], (_jsx = {
    expand: "lg",
    fixed: "top",
    className: "navBarContainer",
    variant: "dark"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "navbar"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }), _jsx), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"].Brand, {
    href: "#home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/logo.png",
    style: logoStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 34
    }
  })), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"].Collapse, {
    id: "basic-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "ml-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Link, {
    href: "#home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Home"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Link, {
    href: "#work",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Work"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Link, {
    href: "#training",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Training"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Link, {
    href: "#contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Contact"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Link, {
    href: "#service",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Sevice"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Link, {
    href: "#gallery",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Gallery"))));
};

_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

$RefreshReg$(_c, "NavBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJuYXZCYXJTdHlsZSIsImJhY2tncm91bmQiLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwibG9nb1N0eWxlIiwiTmF2QmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxXQUFXLEdBQUc7QUFDaEJDLFlBQVUsRUFBRSxhQURJO0FBRWhCQyxPQUFLLEVBQUUsT0FGUztBQUdoQkMsT0FBSyxFQUFFLE1BSFM7QUFJaEJDLFFBQU0sRUFBRTtBQUpRLENBQXBCO0FBTUUsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCRCxRQUFNLEVBQUM7QUFEUyxDQUFsQjs7QUFJQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBOztBQUFBLFNBQ2I7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBaUMsU0FBSyxFQUFFTixXQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyw4REFBRDtBQUFRLFVBQU0sRUFBQyxJQUFmO0FBQW9CLFNBQUssRUFBQyxLQUExQjtBQUFnQyxhQUFTLEVBQUMsaUJBQTFDO0FBQTRELFdBQU8sRUFBQztBQUFwRSxrSEFBcUYsUUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFLE1BQUMsOERBQUQsQ0FBUSxLQUFSO0FBQWMsUUFBSSxFQUFDLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkI7QUFBSyxPQUFHLEVBQUMsV0FBVDtBQUFxQixTQUFLLEVBQUVLLFNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBM0IsQ0FERixFQUVFLE1BQUMsOERBQUQsQ0FBUSxNQUFSO0FBQWUscUJBQWMsa0JBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsOERBQUQsQ0FBUSxRQUFSO0FBQWlCLE1BQUUsRUFBQyxrQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQywyREFBRDtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFELENBQUssSUFBTDtBQUFVLFFBQUksRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFLE1BQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQVUsUUFBSSxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0UsTUFBQywyREFBRCxDQUFLLElBQUw7QUFBVSxRQUFJLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLEVBSUUsTUFBQywyREFBRCxDQUFLLElBQUw7QUFBVSxRQUFJLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsRUFLRSxNQUFDLDJEQUFELENBQUssSUFBTDtBQUFVLFFBQUksRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixFQU1FLE1BQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQVUsUUFBSSxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLENBSkYsQ0FEQSxDQURhO0FBQUEsQ0FBZjs7S0FBTUMsTTtBQXNCU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmIzZTkwNTYzODRlOGEyZDBiNWMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL05hdkJhci5qc1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuXHJcblxyXG5jb25zdCBuYXZCYXJTdHlsZSA9IHtcclxuICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiNjBweFwiXHJcbiAgfTtcclxuICBjb25zdCBsb2dvU3R5bGUgPSB7XHJcbiAgICBoZWlnaHQ6XCI2MHB4XCIsXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IE5hdkJhciA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2QmFyQ29udGFpbmVyXCIgc3R5bGU9e25hdkJhclN0eWxlfT5cclxuICAgIDxOYXZiYXIgZXhwYW5kPVwibGdcIiBmaXhlZD1cInRvcFwiIGNsYXNzTmFtZT1cIm5hdkJhckNvbnRhaW5lclwiIHZhcmlhbnQ9XCJkYXJrXCIgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCI+PGltZyBzcmM9XCIvbG9nby5wbmdcIiBzdHlsZT17bG9nb1N0eWxlfS8+PC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cclxuICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj48L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XHJcbiAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjaG9tZVwiPkhvbWU8L05hdi5MaW5rPlxyXG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiI3dvcmtcIj5Xb3JrPC9OYXYuTGluaz5cclxuICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiN0cmFpbmluZ1wiPlRyYWluaW5nPC9OYXYuTGluaz5cclxuICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNjb250YWN0XCI+Q29udGFjdDwvTmF2Lkxpbms+XHJcbiAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjc2VydmljZVwiPlNldmljZTwvTmF2Lkxpbms+XHJcbiAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjZ2FsbGVyeVwiPkdhbGxlcnk8L05hdi5MaW5rPlxyXG5cclxuICAgICAgPC9OYXY+XHJcbiAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyJdLCJzb3VyY2VSb290IjoiIn0=