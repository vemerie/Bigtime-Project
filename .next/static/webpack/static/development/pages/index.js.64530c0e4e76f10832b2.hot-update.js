webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar.js");
/* harmony import */ var _hooks_useSticky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useSticky */ "./hooks/useSticky.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\components\\Layout.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// components/Layout.js



var layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  margin: "0px",
  padding: "0px"
};
var contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

var Layout = function Layout(props) {
  _s();

  var _useSticky = Object(_hooks_useSticky__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      isSticky = _useSticky.isSticky,
      element = _useSticky.element;

  return __jsx("div", {
    className: "Layout",
    style: layoutStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 10
    }
  }, __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sticky: isSticky,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "Content",
    style: contentStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, props.children));
};

_s(Layout, "RTEioSzrVqUW/x1pyrvZnJzqu8A=", false, function () {
  return [_hooks_useSticky__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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

/***/ "./hooks/useSticky.js":
/*!****************************!*\
  !*** ./hooks/useSticky.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();



function useSticky() {
  _s();

  var _arguments = arguments,
      _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isSticky = _useState[0],
      setSticky = _useState[1];

  var element = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var handleScroll = function handleScroll() {
    window.scrollY > element.current.getBoundingClientRect().bottom ? setSticky(true) : setSticky(false);
  }; // This function handle the scroll performance issue


  var debounce = function debounce(func) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var timeOut;
    return function () {
      var context = _this,
          args = _arguments;

      var later = function later() {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("scroll", debounce(handleScroll));
    return function () {
      window.removeEventListener("scroll", function () {
        return handleScroll;
      });
    };
  }, [debounce, handleScroll]);
  return {
    isSticky: isSticky,
    element: element
  };
}

_s(useSticky, "LZR3uTxto6+Bh+TvKd7BTAN08Qg=");

/* harmony default export */ __webpack_exports__["default"] = (useSticky);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VTdGlja3kuanMiXSwibmFtZXMiOlsibGF5b3V0U3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsImNvbnRlbnRTdHlsZSIsImZsZXgiLCJMYXlvdXQiLCJwcm9wcyIsInVzZVN0aWNreSIsImlzU3RpY2t5IiwiZWxlbWVudCIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJzZXRTdGlja3kiLCJ1c2VSZWYiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdHRvbSIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lT3V0IiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSUEsSUFBTUEsV0FBVyxHQUFHO0FBQ2xCQyxTQUFPLEVBQUUsTUFEUztBQUVsQkMsZUFBYSxFQUFFLFFBRkc7QUFHbEJDLFFBQU0sRUFBRSxNQUhVO0FBSWxCQyxPQUFLLEVBQUUsTUFKVztBQUtsQkMsUUFBTSxFQUFDLEtBTFc7QUFNbEJDLFNBQU8sRUFBQztBQU5VLENBQXBCO0FBU0EsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxNQUFJLEVBQUUsQ0FEYTtBQUVuQlAsU0FBTyxFQUFFLE1BRlU7QUFHbkJDLGVBQWEsRUFBRTtBQUhJLENBQXJCOztBQU1BLElBQU1PLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUFBLG1CQUNRQyxnRUFBUyxFQURqQjtBQUFBLE1BQ2RDLFFBRGMsY0FDZEEsUUFEYztBQUFBLE1BQ0pDLE9BREksY0FDSkEsT0FESTs7QUFHdEIsU0FBTztBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQXdCLFNBQUssRUFBRWIsV0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMLE1BQUMsK0NBQUQ7QUFBUSxVQUFNLEVBQUVZLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESyxFQUVMO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsU0FBSyxFQUFFTCxZQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dHLEtBQUssQ0FBQ0ksUUFEVCxDQUZLLENBQVA7QUFNRCxDQVREOztHQUFNTCxNO1VBQzBCRSx3RDs7O0tBRDFCRixNO0FBV1NBLHFFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7O0FBRUEsU0FBU0UsU0FBVCxHQUFxQjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsa0JBQ1dJLHNEQUFRLENBQUMsS0FBRCxDQURuQjtBQUFBLE1BQ1pILFFBRFk7QUFBQSxNQUNGSSxTQURFOztBQUVuQixNQUFNSCxPQUFPLEdBQUdJLG9EQUFNLENBQUMsSUFBRCxDQUF0Qjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCQyxVQUFNLENBQUNDLE9BQVAsR0FBaUJQLE9BQU8sQ0FBQ1EsT0FBUixDQUFnQkMscUJBQWhCLEdBQXdDQyxNQUF6RCxHQUNJUCxTQUFTLENBQUMsSUFBRCxDQURiLEdBRUlBLFNBQVMsQ0FBQyxLQUFELENBRmI7QUFHRCxHQUpELENBSm1CLENBVW5COzs7QUFDQSxNQUFNUSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQXVDO0FBQUEsUUFBaENDLElBQWdDLHVFQUF6QixFQUF5QjtBQUFBLFFBQXJCQyxTQUFxQix1RUFBVCxJQUFTO0FBQ3RELFFBQUlDLE9BQUo7QUFDQSxXQUFPLFlBQU07QUFDWCxVQUFJQyxPQUFPLEdBQUcsS0FBZDtBQUFBLFVBQ0VDLElBQUksR0FBR0MsVUFEVDs7QUFFQSxVQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCSixlQUFPLEdBQUcsSUFBVjtBQUNBLFlBQUksQ0FBQ0QsU0FBTCxFQUFnQkYsSUFBSSxDQUFDUSxLQUFMLENBQVdKLE9BQVgsRUFBb0JDLElBQXBCO0FBQ2pCLE9BSEQ7O0FBSUEsVUFBTUksT0FBTyxHQUFHUCxTQUFTLElBQUksQ0FBQ0MsT0FBOUI7QUFDQU8sa0JBQVksQ0FBQ1AsT0FBRCxDQUFaO0FBQ0FBLGFBQU8sR0FBR1EsVUFBVSxDQUFDSixLQUFELEVBQVFOLElBQVIsQ0FBcEI7QUFDQSxVQUFJUSxPQUFKLEVBQWFULElBQUksQ0FBQ1EsS0FBTCxDQUFXSixPQUFYLEVBQW9CQyxJQUFwQjtBQUNkLEtBWEQ7QUFZRCxHQWREOztBQWdCQU8seURBQVMsQ0FBQyxZQUFNO0FBQ2RsQixVQUFNLENBQUNtQixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ2QsUUFBUSxDQUFDTixZQUFELENBQTFDO0FBQ0EsV0FBTyxZQUFNO0FBQ1hDLFlBQU0sQ0FBQ29CLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDO0FBQUEsZUFBTXJCLFlBQU47QUFBQSxPQUFyQztBQUNELEtBRkQ7QUFHRCxHQUxRLEVBS04sQ0FBQ00sUUFBRCxFQUFXTixZQUFYLENBTE0sQ0FBVDtBQU9BLFNBQU87QUFBRU4sWUFBUSxFQUFSQSxRQUFGO0FBQVlDLFdBQU8sRUFBUEE7QUFBWixHQUFQO0FBQ0Q7O0dBbkNRRixTOztBQXFDTUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjY0NTMwYzBlNGU3NmYxMDgzMmIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL0xheW91dC5qc1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9OYXZCYXJcIjtcclxuaW1wb3J0IHVzZVN0aWNreSBmcm9tIFwiLi4vaG9va3MvdXNlU3RpY2t5XCJcclxuXHJcblxyXG5cclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxuICBtYXJnaW46XCIwcHhcIixcclxuICBwYWRkaW5nOlwiMHB4XCJcclxufTtcclxuXHJcbmNvbnN0IGNvbnRlbnRTdHlsZSA9IHtcclxuICBmbGV4OiAxLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCJcclxufTtcclxuXHJcbmNvbnN0IExheW91dCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGlzU3RpY2t5LCBlbGVtZW50IH0gPSB1c2VTdGlja3koKVxyXG5cclxuICByZXR1cm4oPGRpdiBjbGFzc05hbWU9XCJMYXlvdXRcIiBzdHlsZT17bGF5b3V0U3R5bGV9PlxyXG4gICAgPE5hdkJhciBzdGlja3k9e2lzU3RpY2t5fSAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJDb250ZW50XCIgc3R5bGU9e2NvbnRlbnRTdHlsZX0+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PilcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZnVuY3Rpb24gdXNlU3RpY2t5KCkge1xyXG4gIGNvbnN0IFtpc1N0aWNreSwgc2V0U3RpY2t5XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGVsZW1lbnQgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFkgPiBlbGVtZW50LmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tXHJcbiAgICAgID8gc2V0U3RpY2t5KHRydWUpXHJcbiAgICAgIDogc2V0U3RpY2t5KGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgLy8gVGhpcyBmdW5jdGlvbiBoYW5kbGUgdGhlIHNjcm9sbCBwZXJmb3JtYW5jZSBpc3N1ZVxyXG4gIGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQgPSAyMCwgaW1tZWRpYXRlID0gdHJ1ZSkgPT4ge1xyXG4gICAgbGV0IHRpbWVPdXRcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGxldCBjb250ZXh0ID0gdGhpcyxcclxuICAgICAgICBhcmdzID0gYXJndW1lbnRzXHJcbiAgICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRpbWVPdXQgPSBudWxsXHJcbiAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lT3V0XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lT3V0KVxyXG4gICAgICB0aW1lT3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcclxuICAgICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBkZWJvdW5jZShoYW5kbGVTY3JvbGwpKVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4gaGFuZGxlU2Nyb2xsKVxyXG4gICAgfVxyXG4gIH0sIFtkZWJvdW5jZSwgaGFuZGxlU2Nyb2xsXSlcclxuXHJcbiAgcmV0dXJuIHsgaXNTdGlja3ksIGVsZW1lbnQgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTdGlja3kiXSwic291cmNlUm9vdCI6IiJ9