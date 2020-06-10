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

var customerDashboardConnection = new signalR.HubConnectionBuilder().withUrl("https://cors-anywhere.herokuapp.com/http://104.238.100.236:8010/report-api/api/boojkingsHub").configureLogging(signalR.LogLevel.Information).build();
var salesDashboardConnection = new signalR.HubConnectionBuilder().withUrl("https://cors-anywhere.herokuapp.com/http://104.238.100.236:8010/report-api/api/salesHub").configureLogging(signalR.LogLevel.Information).build();

function start() {
  customerDashboardConnection.start();
  salesDashboardConnection.start();
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
            _context3.next = 9;
            break;

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0); // setTimeout(() => start(), 5000);

          case 9:
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
            _context4.next = 9;
            break;

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0); // setTimeout(() => start(), 5000);

          case 9:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy9saXZlX2Rhc2hib2FyZF9jb3B5LmpzIl0sIm5hbWVzIjpbInNpZ25hbFIiLCJyZXF1aXJlIiwiY3VzdG9tZXJEYXNoYm9hcmRDb25uZWN0aW9uIiwiSHViQ29ubmVjdGlvbkJ1aWxkZXIiLCJ3aXRoVXJsIiwiY29uZmlndXJlTG9nZ2luZyIsIkxvZ0xldmVsIiwiSW5mb3JtYXRpb24iLCJidWlsZCIsInNhbGVzRGFzaGJvYXJkQ29ubmVjdGlvbiIsInN0YXJ0Iiwib24iLCJtb2RlbCIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwic3RhcnRDdXN0b21lckRhc2hib2FyZENvbm5lY3Rpb24iLCJzdGFydFNhbGVzRGFzaGJvYXJkQ29ubmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhDQUFhOzs7Ozs7QUFDYixJQUFNQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsK0VBQUQsQ0FBdkI7O0FBRUEsSUFBSUMsMkJBQTJCLEdBQUcsSUFBSUYsT0FBTyxDQUN4Q0csb0JBRDZCLEdBRTdCQyxPQUY2QixDQUVyQiw2RkFGcUIsRUFHN0JDLGdCQUg2QixDQUdaTCxPQUFPLENBQUNNLFFBQVIsQ0FBaUJDLFdBSEwsRUFJN0JDLEtBSjZCLEVBQWxDO0FBTUEsSUFBSUMsd0JBQXdCLEdBQUcsSUFBSVQsT0FBTyxDQUNyQ0csb0JBRDBCLEdBRTFCQyxPQUYwQixDQUVsQix5RkFGa0IsRUFHMUJDLGdCQUgwQixDQUdUTCxPQUFPLENBQUNNLFFBQVIsQ0FBaUJDLFdBSFIsRUFJMUJDLEtBSjBCLEVBQS9COztBQU9BLFNBQVNFLEtBQVQsR0FBZ0I7QUFDaEJSLDZCQUEyQixDQUFDUSxLQUE1QjtBQUNBRCwwQkFBd0IsQ0FBQ0MsS0FBekI7QUFDQzs7QUFFRFIsMkJBQTJCLENBQUNTLEVBQTVCLENBQStCLDBDQUEvQixFQUEyRSxVQUFVQyxLQUFWLEVBQWlCO0FBQ3hGQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxxQ0FBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILENBSEQ7QUFLQUgsd0JBQXdCLENBQUNFLEVBQXpCLENBQTRCLHlCQUE1QixFQUF1RCxVQUFVQyxLQUFWLEVBQWlCO0FBQ3BFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILENBSEQ7QUFLQUgsd0JBQXdCLENBQUNFLEVBQXpCLENBQTRCLDRCQUE1QixFQUEwRCxVQUFVQyxLQUFWLEVBQWlCO0FBQ3ZFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILENBSEQ7QUFLQUgsd0JBQXdCLENBQUNFLEVBQXpCLENBQTRCLG1CQUE1QixFQUFpRCxVQUFVQyxLQUFWLEVBQWlCO0FBQzlEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILENBSEQ7QUFLQUgsd0JBQXdCLENBQUNFLEVBQXpCLENBQTRCLHdCQUE1QixFQUFzRCxVQUFVQyxLQUFWLEVBQWlCO0FBQ25FQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILENBSEQ7QUFLQUgsd0JBQXdCLENBQUNFLEVBQXpCLENBQTRCLHFCQUE1QixFQUFtRCxVQUFVQyxLQUFWLEVBQWlCO0FBQ2hFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILENBSEQ7QUFLQVYsMkJBQTJCLENBQUNhLE9BQTVCLHdFQUFvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDMUJMLEtBQUssRUFEcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBcEM7QUFHQUQsd0JBQXdCLENBQUNNLE9BQXpCLHdFQUFpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDdkJMLEtBQUssRUFEa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBakM7O1NBSWVNLGdDOzs7OzsrRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVjZCwyQkFBMkIsQ0FBQ1EsS0FBNUIsRUFGZDs7QUFBQTtBQUdRRyxtQkFBTyxDQUFDQyxHQUFSLENBQVksMENBQVo7QUFIUjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtRRCxtQkFBTyxDQUFDQyxHQUFSLGVBTFIsQ0FNUTs7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBUUM7O1NBRWNHLDZCOzs7Ozs0RkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVjUix3QkFBd0IsQ0FBQ0MsS0FBekIsRUFGZDs7QUFBQTtBQUdRRyxtQkFBTyxDQUFDQyxHQUFSLENBQVksOEJBQVo7QUFIUjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtRRCxtQkFBTyxDQUFDQyxHQUFSLGVBTFIsQ0FNUTs7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBUUMsQyxDQUVEOztBQUNBRSxnQ0FBZ0M7QUFDaENDLDZCQUE2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYjk3YjQ3Mjc1NDhhN2JjMzgxMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5jb25zdCBzaWduYWxSID0gcmVxdWlyZShcIkBtaWNyb3NvZnQvc2lnbmFsclwiKTtcclxuXHJcbnZhciBjdXN0b21lckRhc2hib2FyZENvbm5lY3Rpb24gPSBuZXcgc2lnbmFsUlxyXG4gICAgLkh1YkNvbm5lY3Rpb25CdWlsZGVyKClcclxuICAgIC53aXRoVXJsKFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cDovLzEwNC4yMzguMTAwLjIzNjo4MDEwL3JlcG9ydC1hcGkvYXBpL2Jvb2praW5nc0h1YlwiKVxyXG4gICAgLmNvbmZpZ3VyZUxvZ2dpbmcoc2lnbmFsUi5Mb2dMZXZlbC5JbmZvcm1hdGlvbilcclxuICAgIC5idWlsZCgpO1xyXG5cclxudmFyIHNhbGVzRGFzaGJvYXJkQ29ubmVjdGlvbiA9IG5ldyBzaWduYWxSXHJcbiAgICAuSHViQ29ubmVjdGlvbkJ1aWxkZXIoKVxyXG4gICAgLndpdGhVcmwoXCJodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwOi8vMTA0LjIzOC4xMDAuMjM2OjgwMTAvcmVwb3J0LWFwaS9hcGkvc2FsZXNIdWJcIilcclxuICAgIC5jb25maWd1cmVMb2dnaW5nKHNpZ25hbFIuTG9nTGV2ZWwuSW5mb3JtYXRpb24pXHJcbiAgICAuYnVpbGQoKTtcclxuXHJcblxyXG5mdW5jdGlvbiBzdGFydCgpe1xyXG5jdXN0b21lckRhc2hib2FyZENvbm5lY3Rpb24uc3RhcnQoKTtcclxuc2FsZXNEYXNoYm9hcmRDb25uZWN0aW9uLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmN1c3RvbWVyRGFzaGJvYXJkQ29ubmVjdGlvbi5vbihcImN1cnJlbnRDdXN0b21lckJvb2tpbmdzRGFzaGJvYXJkV2l0aERhdGFcIiwgZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgY3VzdG9tZXIgYm9va2luZ3MgZGFzaGJvYXJkXCIpO1xyXG4gICAgY29uc29sZS5sb2cobW9kZWwpO1xyXG59KTtcclxuXHJcbnNhbGVzRGFzaGJvYXJkQ29ubmVjdGlvbi5vbihcImN1cnJlbnRUb3RhbFNhbGVzQnlUcmlwXCIsIGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgY29uc29sZS5sb2coXCJDdXJyZW50IHRvdGFsIHNhbGVzIGJ5IHRyaXBcIik7XHJcbiAgICBjb25zb2xlLmxvZyhtb2RlbCk7XHJcbn0pO1xyXG5cclxuc2FsZXNEYXNoYm9hcmRDb25uZWN0aW9uLm9uKFwiY3VycmVudFRvdGFsU2FsZXNCeVZlaGljbGVcIiwgZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgdG90YWwgc2FsZXMgYnkgdmVoaWNsZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKG1vZGVsKTtcclxufSk7XHJcblxyXG5zYWxlc0Rhc2hib2FyZENvbm5lY3Rpb24ub24oXCJjdXJyZW50VG90YWxTYWxlc1wiLCBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCB0b3RhbCBzYWxlc1wiKTtcclxuICAgIGNvbnNvbGUubG9nKG1vZGVsKTtcclxufSk7XHJcblxyXG5zYWxlc0Rhc2hib2FyZENvbm5lY3Rpb24ub24oXCJjdXJyZW50U2FsZXNCeVRlcm1pbmFsXCIsIGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgY29uc29sZS5sb2coXCJDdXJyZW50IHNhbGVzIGJ5IHRlcm1pbmFsXCIpO1xyXG4gICAgY29uc29sZS5sb2cobW9kZWwpO1xyXG59KTtcclxuXHJcbnNhbGVzRGFzaGJvYXJkQ29ubmVjdGlvbi5vbihcImN1cnJlbnRTYWxlc0J5Um91dGVcIiwgZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgc2FsZXMgYnkgcm91dGVcIik7XHJcbiAgICBjb25zb2xlLmxvZyhtb2RlbCk7XHJcbn0pO1xyXG5cclxuY3VzdG9tZXJEYXNoYm9hcmRDb25uZWN0aW9uLm9uY2xvc2UoYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgc3RhcnQoKTtcclxufSk7XHJcbnNhbGVzRGFzaGJvYXJkQ29ubmVjdGlvbi5vbmNsb3NlKGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IHN0YXJ0KCk7XHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc3RhcnRDdXN0b21lckRhc2hib2FyZENvbm5lY3Rpb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGN1c3RvbWVyRGFzaGJvYXJkQ29ubmVjdGlvbi5zdGFydCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGVkIHRvIGN1c3RvbWVyIGJvb2tpbmdzIGRhc2hib2FyZFwiKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiBzdGFydCgpLCA1MDAwKTtcclxuICAgIH1cclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0U2FsZXNEYXNoYm9hcmRDb25uZWN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBzYWxlc0Rhc2hib2FyZENvbm5lY3Rpb24uc3RhcnQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbm5lY3RlZCB0byBzYWxlcyBkYXNoYm9hcmRcIik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc3RhcnQoKSwgNTAwMCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBTdGFydCB0aGUgY29ubmVjdGlvbi5cclxuc3RhcnRDdXN0b21lckRhc2hib2FyZENvbm5lY3Rpb24oKTtcclxuc3RhcnRTYWxlc0Rhc2hib2FyZENvbm5lY3Rpb24oKTsiXSwic291cmNlUm9vdCI6IiJ9