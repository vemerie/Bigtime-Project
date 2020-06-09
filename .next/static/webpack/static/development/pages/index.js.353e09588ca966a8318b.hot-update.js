webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-gallery */ "./node_modules/react-grid-gallery/lib/Gallery.js");
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_grid_gallery__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Viktor\\Desktop\\Pazon\\Bigtime-Project\\pages\\gallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var IMAGES = [{
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
}];

var GalleryPage = function GalleryPage() {
  return __jsx("div", {
    id: "gallery",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "my-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "Gallery"), __jsx(react_grid_gallery__WEBPACK_IMPORTED_MODULE_1___default.a, {
    images: IMAGES,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  })));
};

_c = GalleryPage;
/* harmony default export */ __webpack_exports__["default"] = (GalleryPage);

var _c;

$RefreshReg$(_c, "GalleryPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbIklNQUdFUyIsInNyYyIsInRodW1ibmFpbCIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwiaXNTZWxlY3RlZCIsImNhcHRpb24iLCJ0YWdzIiwidmFsdWUiLCJ0aXRsZSIsIkdhbGxlcnlQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUtBLElBQU1BLE1BQU0sR0FDWixDQUFDO0FBQ09DLEtBQUcsRUFBRSx3R0FEWjtBQUVPQyxXQUFTLEVBQUUsd0dBRmxCO0FBR09DLGdCQUFjLEVBQUUsR0FIdkI7QUFJT0MsaUJBQWUsRUFBRSxHQUp4QjtBQUtPQyxZQUFVLEVBQUUsS0FMbkI7QUFNT0MsU0FBTyxFQUFFO0FBTmhCLENBQUQsRUFRQTtBQUNRTCxLQUFHLEVBQUUsd0dBRGI7QUFFUUMsV0FBUyxFQUFFLHdHQUZuQjtBQUdRQyxnQkFBYyxFQUFFLEdBSHhCO0FBSVFDLGlCQUFlLEVBQUUsR0FKekI7QUFLUUcsTUFBSSxFQUFFLENBQUM7QUFBQ0MsU0FBSyxFQUFFLE9BQVI7QUFBaUJDLFNBQUssRUFBRTtBQUF4QixHQUFELEVBQW1DO0FBQUNELFNBQUssRUFBRSxRQUFSO0FBQWtCQyxTQUFLLEVBQUU7QUFBekIsR0FBbkMsQ0FMZDtBQU1RSCxTQUFPLEVBQUU7QUFOakIsQ0FSQSxFQWlCQTtBQUNRTCxLQUFHLEVBQUUsMEdBRGI7QUFFUUMsV0FBUyxFQUFFLDBHQUZuQjtBQUdRQyxnQkFBYyxFQUFFLEdBSHhCO0FBSVFDLGlCQUFlLEVBQUU7QUFKekIsQ0FqQkEsRUF1QkE7QUFDSUgsS0FBRyxFQUFFLDBHQURUO0FBRUlDLFdBQVMsRUFBRSwwR0FGZjtBQUdJQyxnQkFBYyxFQUFFLEdBSHBCO0FBSUlDLGlCQUFlLEVBQUUsR0FKckI7QUFLSUMsWUFBVSxFQUFFLEtBTGhCO0FBTUlDLFNBQU8sRUFBRTtBQU5iLENBdkJBLEVBK0JBO0FBQ0lMLEtBQUcsRUFBRSxpRUFEVDtBQUVJQyxXQUFTLEVBQUUsaUVBRmY7QUFHSUMsZ0JBQWMsRUFBRSxHQUhwQjtBQUlJQyxpQkFBZSxFQUFFLEdBSnJCO0FBS0lHLE1BQUksRUFBRSxDQUFDO0FBQUNDLFNBQUssRUFBRSxPQUFSO0FBQWlCQyxTQUFLLEVBQUU7QUFBeEIsR0FBRCxFQUFtQztBQUFDRCxTQUFLLEVBQUUsUUFBUjtBQUFrQkMsU0FBSyxFQUFFO0FBQXpCLEdBQW5DLENBTFY7QUFNSUgsU0FBTyxFQUFFO0FBTmIsQ0EvQkEsRUF3Q0E7QUFDSUwsS0FBRyxFQUFFLGlFQURUO0FBRUlDLFdBQVMsRUFBRSxpRUFGZjtBQUdJQyxnQkFBYyxFQUFFLEdBSHBCO0FBSUlDLGlCQUFlLEVBQUU7QUFKckIsQ0F4Q0EsRUE4Q0E7QUFDSUgsS0FBRyxFQUFFLGlFQURUO0FBRUlDLFdBQVMsRUFBRSxpRUFGZjtBQUdJQyxnQkFBYyxFQUFFLEdBSHBCO0FBSUlDLGlCQUFlLEVBQUUsR0FKckI7QUFLSUMsWUFBVSxFQUFFLEtBTGhCO0FBTUlDLFNBQU8sRUFBRTtBQU5iLENBOUNBLEVBc0RBO0FBQ0lMLEtBQUcsRUFBRSx3R0FEVDtBQUVJQyxXQUFTLEVBQUUsd0dBRmY7QUFHSUMsZ0JBQWMsRUFBRSxHQUhwQjtBQUlJQyxpQkFBZSxFQUFFLEdBSnJCO0FBS0lHLE1BQUksRUFBRSxDQUFDO0FBQUNDLFNBQUssRUFBRSxPQUFSO0FBQWlCQyxTQUFLLEVBQUU7QUFBeEIsR0FBRCxFQUFtQztBQUFDRCxTQUFLLEVBQUUsUUFBUjtBQUFrQkMsU0FBSyxFQUFFO0FBQXpCLEdBQW5DLENBTFY7QUFNSUgsU0FBTyxFQUFFO0FBTmIsQ0F0REEsRUErREE7QUFDSUwsS0FBRyxFQUFFLHdHQURUO0FBRUlDLFdBQVMsRUFBRSx3R0FGZjtBQUdJQyxnQkFBYyxFQUFFLEdBSHBCO0FBSUlDLGlCQUFlLEVBQUU7QUFKckIsQ0EvREEsRUFzRUE7QUFDSUgsS0FBRyxFQUFFLDBHQURUO0FBRUlDLFdBQVMsRUFBRSwwR0FGZjtBQUdJQyxnQkFBYyxFQUFFLEdBSHBCO0FBSUlDLGlCQUFlLEVBQUUsR0FKckI7QUFLSUcsTUFBSSxFQUFFLENBQUM7QUFBQ0MsU0FBSyxFQUFFLE9BQVI7QUFBaUJDLFNBQUssRUFBRTtBQUF4QixHQUFELEVBQW1DO0FBQUNELFNBQUssRUFBRSxRQUFSO0FBQWtCQyxTQUFLLEVBQUU7QUFBekIsR0FBbkMsQ0FMVjtBQU1JSCxTQUFPLEVBQUU7QUFOYixDQXRFQSxFQStFQTtBQUNJTCxLQUFHLEVBQUUsd0dBRFQ7QUFFSUMsV0FBUyxFQUFFLHdHQUZmO0FBR0lDLGdCQUFjLEVBQUUsR0FIcEI7QUFJSUMsaUJBQWUsRUFBRSxHQUpyQjtBQUtJRyxNQUFJLEVBQUUsQ0FBQztBQUFDQyxTQUFLLEVBQUUsT0FBUjtBQUFpQkMsU0FBSyxFQUFFO0FBQXhCLEdBQUQsRUFBbUM7QUFBQ0QsU0FBSyxFQUFFLFFBQVI7QUFBa0JDLFNBQUssRUFBRTtBQUF6QixHQUFuQyxDQUxWO0FBTUlILFNBQU8sRUFBRTtBQU5iLENBL0VBLENBREE7O0FBNkZBLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsU0FDaEI7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsRUFHQSxNQUFDLHlEQUFEO0FBQVMsVUFBTSxFQUFFVixNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEEsQ0FESixDQURnQjtBQUFBLENBQXBCOztLQUFNVSxXO0FBU1dBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zNTNlMDk1ODhjYTk2NmE4MzE4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gJ3JlYWN0LWdyaWQtZ2FsbGVyeSc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBJTUFHRVMgPVxyXG5be1xyXG4gICAgICAgIHNyYzogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yNDcyMDQvcGV4ZWxzLXBob3RvLTI0NzIwNC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgICAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjQ3MjA0L3BleGVscy1waG90by0yNDcyMDQuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICAgICAgdGh1bWJuYWlsV2lkdGg6IDMyMCxcclxuICAgICAgICB0aHVtYm5haWxIZWlnaHQ6IDE3NCxcclxuICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICBjYXB0aW9uOiBcIkFmdGVyIFJhaW4gKEplc2h1IEpvaG4gLSBkZXNpZ25lcnNwaWNzLmNvbSlcIlxyXG59LFxyXG57XHJcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzI1NjUyMC9wZXhlbHMtcGhvdG8tMjU2NTIwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiLFxyXG4gICAgICAgIHRodW1ibmFpbDogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yNTY1MjAvcGV4ZWxzLXBob3RvLTI1NjUyMC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgICAgICB0aHVtYm5haWxXaWR0aDogMzIwLFxyXG4gICAgICAgIHRodW1ibmFpbEhlaWdodDogMTc0LFxyXG4gICAgICAgIHRhZ3M6IFt7dmFsdWU6IFwiT2NlYW5cIiwgdGl0bGU6IFwiT2NlYW5cIn0sIHt2YWx1ZTogXCJQZW9wbGVcIiwgdGl0bGU6IFwiUGVvcGxlXCJ9XSxcclxuICAgICAgICBjYXB0aW9uOiBcIkJvYXRzIChKZXNodSBKb2huIC0gZGVzaWduZXJzcGljcy5jb20pXCJcclxufSxcclxuXHJcbntcclxuICAgICAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTMxNzcxMi9wZXhlbHMtcGhvdG8tMTMxNzcxMi5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgICAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTMxNzcxMi9wZXhlbHMtcGhvdG8tMTMxNzcxMi5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgICAgICB0aHVtYm5haWxXaWR0aDogMzIwLFxyXG4gICAgICAgIHRodW1ibmFpbEhlaWdodDogMTc0XHJcbn0sXHJcbntcclxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xMjY0MjEwL3BleGVscy1waG90by0xMjY0MjEwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiLFxyXG4gICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzEyNjQyMTAvcGV4ZWxzLXBob3RvLTEyNjQyMTAuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICB0aHVtYm5haWxXaWR0aDogMzIwLFxyXG4gICAgdGh1bWJuYWlsSGVpZ2h0OiAxNzQsXHJcbiAgICBpc1NlbGVjdGVkOiBmYWxzZSxcclxuICAgIGNhcHRpb246IFwiQWZ0ZXIgUmFpbiAoSmVzaHUgSm9obiAtIGRlc2lnbmVyc3BpY3MuY29tKVwiXHJcbn0sXHJcbntcclxuICAgIHNyYzogXCJodHRwczovL2MyLnN0YXRpY2ZsaWNrci5jb20vOS84MzU2LzI4ODk3MTIwNjgxXzNiMmMwZjQzZTBfYi5qcGdcIixcclxuICAgIHRodW1ibmFpbDogXCJodHRwczovL2MyLnN0YXRpY2ZsaWNrci5jb20vOS84MzU2LzI4ODk3MTIwNjgxXzNiMmMwZjQzZTBfbi5qcGdcIixcclxuICAgIHRodW1ibmFpbFdpZHRoOiAzMjAsXHJcbiAgICB0aHVtYm5haWxIZWlnaHQ6IDIxMixcclxuICAgIHRhZ3M6IFt7dmFsdWU6IFwiT2NlYW5cIiwgdGl0bGU6IFwiT2NlYW5cIn0sIHt2YWx1ZTogXCJQZW9wbGVcIiwgdGl0bGU6IFwiUGVvcGxlXCJ9XSxcclxuICAgIGNhcHRpb246IFwiQm9hdHMgKEplc2h1IEpvaG4gLSBkZXNpZ25lcnNwaWNzLmNvbSlcIlxyXG59LFxyXG5cclxue1xyXG4gICAgc3JjOiBcImh0dHBzOi8vYzQuc3RhdGljZmxpY2tyLmNvbS85Lzg4ODcvMjg4OTcxMjQ4OTFfOThjNGZkZDgyYl9iLmpwZ1wiLFxyXG4gICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vYzQuc3RhdGljZmxpY2tyLmNvbS85Lzg4ODcvMjg4OTcxMjQ4OTFfOThjNGZkZDgyYl9uLmpwZ1wiLFxyXG4gICAgdGh1bWJuYWlsV2lkdGg6IDMyMCxcclxuICAgIHRodW1ibmFpbEhlaWdodDogMjEyXHJcbn0sXHJcbntcclxuICAgIHNyYzogXCJodHRwczovL2MyLnN0YXRpY2ZsaWNrci5jb20vOS84ODE3LzI4OTczNDQ5MjY1XzA3ZTNhYTVkMmVfYi5qcGdcIixcclxuICAgIHRodW1ibmFpbDogXCJodHRwczovL2MyLnN0YXRpY2ZsaWNrci5jb20vOS84ODE3LzI4OTczNDQ5MjY1XzA3ZTNhYTVkMmVfbi5qcGdcIixcclxuICAgIHRodW1ibmFpbFdpZHRoOiAzMjAsXHJcbiAgICB0aHVtYm5haWxIZWlnaHQ6IDE3NCxcclxuICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgY2FwdGlvbjogXCJBZnRlciBSYWluIChKZXNodSBKb2huIC0gZGVzaWduZXJzcGljcy5jb20pXCJcclxufSxcclxue1xyXG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzY2NzIwMC9wZXhlbHMtcGhvdG8tNjY3MjAwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiLFxyXG4gICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzY2NzIwMC9wZXhlbHMtcGhvdG8tNjY3MjAwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiLFxyXG4gICAgdGh1bWJuYWlsV2lkdGg6IDMyMCxcclxuICAgIHRodW1ibmFpbEhlaWdodDogMjEyLFxyXG4gICAgdGFnczogW3t2YWx1ZTogXCJPY2VhblwiLCB0aXRsZTogXCJPY2VhblwifSwge3ZhbHVlOiBcIlBlb3BsZVwiLCB0aXRsZTogXCJQZW9wbGVcIn1dLFxyXG4gICAgY2FwdGlvbjogXCJCb2F0cyAoSmVzaHUgSm9obiAtIGRlc2lnbmVyc3BpY3MuY29tKVwiXHJcbn0sXHJcblxyXG57XHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvOTQ5MTkzL3BleGVscy1waG90by05NDkxOTMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvOTQ5MTkzL3BleGVscy1waG90by05NDkxOTMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICB0aHVtYm5haWxXaWR0aDogMzIwLFxyXG4gICAgdGh1bWJuYWlsSGVpZ2h0OiAyMTJcclxufSxcclxuXHJcbntcclxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zNjU1NzgyL3BleGVscy1waG90by0zNjU1NzgyLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiLFxyXG4gICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzM2NTU3ODIvcGV4ZWxzLXBob3RvLTM2NTU3ODIuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIsXHJcbiAgICB0aHVtYm5haWxXaWR0aDogMzIwLFxyXG4gICAgdGh1bWJuYWlsSGVpZ2h0OiAyMTIsXHJcbiAgICB0YWdzOiBbe3ZhbHVlOiBcIk9jZWFuXCIsIHRpdGxlOiBcIk9jZWFuXCJ9LCB7dmFsdWU6IFwiUGVvcGxlXCIsIHRpdGxlOiBcIlBlb3BsZVwifV0sXHJcbiAgICBjYXB0aW9uOiBcIkJvYXRzIChKZXNodSBKb2huIC0gZGVzaWduZXJzcGljcy5jb20pXCJcclxufSxcclxuXHJcbntcclxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy82NjcyMDAvcGV4ZWxzLXBob3RvLTY2NzIwMC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgIHRodW1ibmFpbDogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy82NjcyMDAvcGV4ZWxzLXBob3RvLTY2NzIwMC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIixcclxuICAgIHRodW1ibmFpbFdpZHRoOiAzMjAsXHJcbiAgICB0aHVtYm5haWxIZWlnaHQ6IDIxMixcclxuICAgIHRhZ3M6IFt7dmFsdWU6IFwiT2NlYW5cIiwgdGl0bGU6IFwiT2NlYW5cIn0sIHt2YWx1ZTogXCJQZW9wbGVcIiwgdGl0bGU6IFwiUGVvcGxlXCJ9XSxcclxuICAgIGNhcHRpb246IFwiQm9hdHMgKEplc2h1IEpvaG4gLSBkZXNpZ25lcnNwaWNzLmNvbSlcIlxyXG59LFxyXG5dXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBHYWxsZXJ5UGFnZSA9ICgpID0+IChcclxuICAgIDxkaXYgaWQ9XCJnYWxsZXJ5XCIgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15LTVcIj5HYWxsZXJ5PC9oMT5cclxuXHJcbiAgICAgICAgPEdhbGxlcnkgaW1hZ2VzPXtJTUFHRVN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgR2FsbGVyeVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==