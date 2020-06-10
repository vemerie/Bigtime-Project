webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./hooks/live_dashboard_copy.js":
/*!**************************************!*\
  !*** ./hooks/live_dashboard_copy.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var signalR = __webpack_require__(/*! @microsoft/signalr */ "./node_modules/@microsoft/signalr/dist/esm/index.js");

var customerDashboardConnection = new signalR.HubConnectionBuilder().withUrl("http://104.238.100.236:2090/report-api/api/bookingsHub").configureLogging(signalR.LogLevel.Information).build();
var salesDashboardConnection = new signalR.HubConnectionBuilder().withUrl("http://104.238.100.236:2090/reports-api/api/salesHub").configureLogging(signalR.LogLevel.Information).build();

function start() {
  customerDashboardConnection.start();
}

customerDashboardConnection.on("currentCustomerBookingsDashboardWithData", function (model) {
  console.log("Current customer bookings dashboard");
  console.log(model);
});
salesDashboardConnection.on("currentTotalSalesByTrip", function (model) {
  console.log("Current total sales by trip");
  console.log(model);
});
salesDashboardConnection.on("currentTotalSalesByVehicle", function (model) {
  console.log("Current total sales by vehicle");
  console.log(model);
});
salesDashboardConnection.on("currentTotalSales", function (model) {
  console.log("Current total sales");
  console.log(model);
});
salesDashboardConnection.on("currentSalesByTerminal", function (model) {
  console.log("Current sales by terminal");
  console.log(model);
});
salesDashboardConnection.on("currentSalesByRoute", function (model) {
  console.log("Current sales by route");
  console.log(model);
});
customerDashboardConnection.onclose( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
  return _regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return start();

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
salesDashboardConnection.onclose( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
  return _regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return start();

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));

function startCustomerDashboardConnection() {
  return _startCustomerDashboardConnection.apply(this, arguments);
}

function _startCustomerDashboardConnection() {
  _startCustomerDashboardConnection = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return customerDashboardConnection.start();

          case 3:
            console.log("connected to customer bookings dashboard");
            _context3.next = 10;
            break;

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            setTimeout(function () {
              return start();
            }, 5000);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 6]]);
  }));
  return _startCustomerDashboardConnection.apply(this, arguments);
}

;

function startSalesDashboardConnection() {
  return _startSalesDashboardConnection.apply(this, arguments);
}

function _startSalesDashboardConnection() {
  _startSalesDashboardConnection = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return salesDashboardConnection.start();

          case 3:
            console.log("connected to sales dashboard");
            _context4.next = 10;
            break;

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            setTimeout(function () {
              return start();
            }, 5000);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));
  return _startSalesDashboardConnection.apply(this, arguments);
}

; // Start the connection.

startCustomerDashboardConnection();
startSalesDashboardConnection();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy9saXZlX2Rhc2hib2FyZF9jb3B5LmpzIl0sIm5hbWVzIjpbInNpZ25hbFIiLCJyZXF1aXJlIiwiY3VzdG9tZXJEYXNoYm9hcmRDb25uZWN0aW9uIiwiSHViQ29ubmVjdGlvbkJ1aWxkZXIiLCJ3aXRoVXJsIiwiY29uZmlndXJlTG9nZ2luZyIsIkxvZ0xldmVsIiwiSW5mb3JtYXRpb24iLCJidWlsZCIsInNhbGVzRGFzaGJvYXJkQ29ubmVjdGlvbiIsInN0YXJ0Iiwib24iLCJtb2RlbCIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwic3RhcnRDdXN0b21lckRhc2hib2FyZENvbm5lY3Rpb24iLCJzZXRUaW1lb3V0Iiwic3RhcnRTYWxlc0Rhc2hib2FyZENvbm5lY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw4Q0FBYTs7Ozs7O0FBQ2IsSUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLCtFQUFELENBQXZCOztBQUdBLElBQUlDLDJCQUEyQixHQUFHLElBQUlGLE9BQU8sQ0FDeENHLG9CQUQ2QixHQUU3QkMsT0FGNkIsQ0FFckIsd0RBRnFCLEVBRzdCQyxnQkFINkIsQ0FHWkwsT0FBTyxDQUFDTSxRQUFSLENBQWlCQyxXQUhMLEVBSTdCQyxLQUo2QixFQUFsQztBQU1BLElBQUlDLHdCQUF3QixHQUFHLElBQUlULE9BQU8sQ0FDckNHLG9CQUQwQixHQUUxQkMsT0FGMEIsQ0FFbEIsc0RBRmtCLEVBRzFCQyxnQkFIMEIsQ0FHVEwsT0FBTyxDQUFDTSxRQUFSLENBQWlCQyxXQUhSLEVBSTFCQyxLQUowQixFQUEvQjs7QUFPQSxTQUFTRSxLQUFULEdBQWdCO0FBQ2hCUiw2QkFBMkIsQ0FBQ1EsS0FBNUI7QUFDQzs7QUFFRFIsMkJBQTJCLENBQUNTLEVBQTVCLENBQStCLDBDQUEvQixFQUEyRSxVQUFVQyxLQUFWLEVBQWlCO0FBQ3hGQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxxQ0FBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILENBSEQ7QUFLQUgsd0JBQXdCLENBQUNFLEVBQXpCLENBQTRCLHlCQUE1QixFQUF1RCxVQUFVQyxLQUFWLEVBQWlCO0FBQ3BFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILENBSEQ7QUFLQUgsd0JBQXdCLENBQUNFLEVBQXpCLENBQTRCLDRCQUE1QixFQUEwRCxVQUFVQyxLQUFWLEVBQWlCO0FBQ3ZFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILENBSEQ7QUFLQUgsd0JBQXdCLENBQUNFLEVBQXpCLENBQTRCLG1CQUE1QixFQUFpRCxVQUFVQyxLQUFWLEVBQWlCO0FBQzlEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILENBSEQ7QUFLQUgsd0JBQXdCLENBQUNFLEVBQXpCLENBQTRCLHdCQUE1QixFQUFzRCxVQUFVQyxLQUFWLEVBQWlCO0FBQ25FQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILENBSEQ7QUFLQUgsd0JBQXdCLENBQUNFLEVBQXpCLENBQTRCLHFCQUE1QixFQUFtRCxVQUFVQyxLQUFWLEVBQWlCO0FBQ2hFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILENBSEQ7QUFLQVYsMkJBQTJCLENBQUNhLE9BQTVCLHdFQUFvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDMUJMLEtBQUssRUFEcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBcEM7QUFHQUQsd0JBQXdCLENBQUNNLE9BQXpCLHdFQUFpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDdkJMLEtBQUssRUFEa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBakM7O1NBSWVNLGdDOzs7OzsrRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVjZCwyQkFBMkIsQ0FBQ1EsS0FBNUIsRUFGZDs7QUFBQTtBQUdRRyxtQkFBTyxDQUFDQyxHQUFSLENBQVksMENBQVo7QUFIUjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtRRCxtQkFBTyxDQUFDQyxHQUFSO0FBQ0FHLHNCQUFVLENBQUM7QUFBQSxxQkFBTVAsS0FBSyxFQUFYO0FBQUEsYUFBRCxFQUFnQixJQUFoQixDQUFWOztBQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFRQzs7U0FFY1EsNkI7Ozs7OzRGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRWNULHdCQUF3QixDQUFDQyxLQUF6QixFQUZkOztBQUFBO0FBR1FHLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWjtBQUhSO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS1FELG1CQUFPLENBQUNDLEdBQVI7QUFDQUcsc0JBQVUsQ0FBQztBQUFBLHFCQUFNUCxLQUFLLEVBQVg7QUFBQSxhQUFELEVBQWdCLElBQWhCLENBQVY7O0FBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVFDLEMsQ0FFRDs7QUFDQU0sZ0NBQWdDO0FBQ2hDRSw2QkFBNkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjc0MDMxNzJlNzFjZjlkNmVkYmE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuY29uc3Qgc2lnbmFsUiA9IHJlcXVpcmUoXCJAbWljcm9zb2Z0L3NpZ25hbHJcIik7XHJcblxyXG5cclxudmFyIGN1c3RvbWVyRGFzaGJvYXJkQ29ubmVjdGlvbiA9IG5ldyBzaWduYWxSXHJcbiAgICAuSHViQ29ubmVjdGlvbkJ1aWxkZXIoKVxyXG4gICAgLndpdGhVcmwoXCJodHRwOi8vMTA0LjIzOC4xMDAuMjM2OjIwOTAvcmVwb3J0LWFwaS9hcGkvYm9va2luZ3NIdWJcIilcclxuICAgIC5jb25maWd1cmVMb2dnaW5nKHNpZ25hbFIuTG9nTGV2ZWwuSW5mb3JtYXRpb24pXHJcbiAgICAuYnVpbGQoKTtcclxuXHJcbnZhciBzYWxlc0Rhc2hib2FyZENvbm5lY3Rpb24gPSBuZXcgc2lnbmFsUlxyXG4gICAgLkh1YkNvbm5lY3Rpb25CdWlsZGVyKClcclxuICAgIC53aXRoVXJsKFwiaHR0cDovLzEwNC4yMzguMTAwLjIzNjoyMDkwL3JlcG9ydHMtYXBpL2FwaS9zYWxlc0h1YlwiKVxyXG4gICAgLmNvbmZpZ3VyZUxvZ2dpbmcoc2lnbmFsUi5Mb2dMZXZlbC5JbmZvcm1hdGlvbilcclxuICAgIC5idWlsZCgpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0KCl7XHJcbmN1c3RvbWVyRGFzaGJvYXJkQ29ubmVjdGlvbi5zdGFydCgpO1xyXG59XHJcblxyXG5jdXN0b21lckRhc2hib2FyZENvbm5lY3Rpb24ub24oXCJjdXJyZW50Q3VzdG9tZXJCb29raW5nc0Rhc2hib2FyZFdpdGhEYXRhXCIsIGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgY29uc29sZS5sb2coXCJDdXJyZW50IGN1c3RvbWVyIGJvb2tpbmdzIGRhc2hib2FyZFwiKTtcclxuICAgIGNvbnNvbGUubG9nKG1vZGVsKTtcclxufSk7XHJcblxyXG5zYWxlc0Rhc2hib2FyZENvbm5lY3Rpb24ub24oXCJjdXJyZW50VG90YWxTYWxlc0J5VHJpcFwiLCBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCB0b3RhbCBzYWxlcyBieSB0cmlwXCIpO1xyXG4gICAgY29uc29sZS5sb2cobW9kZWwpO1xyXG59KTtcclxuXHJcbnNhbGVzRGFzaGJvYXJkQ29ubmVjdGlvbi5vbihcImN1cnJlbnRUb3RhbFNhbGVzQnlWZWhpY2xlXCIsIGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgY29uc29sZS5sb2coXCJDdXJyZW50IHRvdGFsIHNhbGVzIGJ5IHZlaGljbGVcIik7XHJcbiAgICBjb25zb2xlLmxvZyhtb2RlbCk7XHJcbn0pO1xyXG5cclxuc2FsZXNEYXNoYm9hcmRDb25uZWN0aW9uLm9uKFwiY3VycmVudFRvdGFsU2FsZXNcIiwgZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgdG90YWwgc2FsZXNcIik7XHJcbiAgICBjb25zb2xlLmxvZyhtb2RlbCk7XHJcbn0pO1xyXG5cclxuc2FsZXNEYXNoYm9hcmRDb25uZWN0aW9uLm9uKFwiY3VycmVudFNhbGVzQnlUZXJtaW5hbFwiLCBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBzYWxlcyBieSB0ZXJtaW5hbFwiKTtcclxuICAgIGNvbnNvbGUubG9nKG1vZGVsKTtcclxufSk7XHJcblxyXG5zYWxlc0Rhc2hib2FyZENvbm5lY3Rpb24ub24oXCJjdXJyZW50U2FsZXNCeVJvdXRlXCIsIGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgY29uc29sZS5sb2coXCJDdXJyZW50IHNhbGVzIGJ5IHJvdXRlXCIpO1xyXG4gICAgY29uc29sZS5sb2cobW9kZWwpO1xyXG59KTtcclxuXHJcbmN1c3RvbWVyRGFzaGJvYXJkQ29ubmVjdGlvbi5vbmNsb3NlKGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IHN0YXJ0KCk7XHJcbn0pO1xyXG5zYWxlc0Rhc2hib2FyZENvbm5lY3Rpb24ub25jbG9zZShhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBzdGFydCgpO1xyXG59KTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0Q3VzdG9tZXJEYXNoYm9hcmRDb25uZWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBjdXN0b21lckRhc2hib2FyZENvbm5lY3Rpb24uc3RhcnQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbm5lY3RlZCB0byBjdXN0b21lciBib29raW5ncyBkYXNoYm9hcmRcIik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc3RhcnQoKSwgNTAwMCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzdGFydFNhbGVzRGFzaGJvYXJkQ29ubmVjdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgc2FsZXNEYXNoYm9hcmRDb25uZWN0aW9uLnN0YXJ0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb25uZWN0ZWQgdG8gc2FsZXMgZGFzaGJvYXJkXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHN0YXJ0KCksIDUwMDApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gU3RhcnQgdGhlIGNvbm5lY3Rpb24uXHJcbnN0YXJ0Q3VzdG9tZXJEYXNoYm9hcmRDb25uZWN0aW9uKCk7XHJcbnN0YXJ0U2FsZXNEYXNoYm9hcmRDb25uZWN0aW9uKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==