"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./web3/users.js":
/*!***********************!*\
  !*** ./web3/users.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserInfo\": function() { return /* binding */ getUserInfo; },\n/* harmony export */   \"createUser\": function() { return /* binding */ createUser; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/regenerator-runtime/runtime.js */ \"../node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider */ \"./web3/provider.js\");\n/* harmony import */ var _web3_artifacts_UserStorage_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web3/artifacts/UserStorage.json */ \"./web3/artifacts/UserStorage.json\");\n/* harmony import */ var _web3_artifacts_UserController_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3/artifacts/UserController.json */ \"./web3/artifacts/UserController.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// we want to create a  function to grab the users info\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n// we want a function called createUser that calls the user controllers function \nvar getUserInfo = _asyncToGenerator(C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(userId) {\n    var storage, profile;\n    return C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return (0,_provider__WEBPACK_IMPORTED_MODULE_1__.getInstance)(_web3_artifacts_UserStorage_json__WEBPACK_IMPORTED_MODULE_2__);\n            case 2:\n                storage = _ctx.sent;\n                _ctx.next = 5;\n                return storage.profiles.call(userId);\n            case 5:\n                profile = _ctx.sent;\n                return _ctx.abrupt(\"return\", profile);\n            case 7:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar createUser = _asyncToGenerator(C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(username) {\n    var controller, addresses, result;\n    return C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return (0,_provider__WEBPACK_IMPORTED_MODULE_1__.getInstance)(_web3_artifacts_UserController_json__WEBPACK_IMPORTED_MODULE_3__);\n            case 2:\n                controller = _ctx.sent;\n                console.log(\"creating user: \", username);\n                _ctx.prev = 4;\n                _ctx.next = 7;\n                return ethereum.enable();\n            case 7:\n                console.log('enabled');\n                _ctx.next = 10;\n                return _provider__WEBPACK_IMPORTED_MODULE_1__.eth.getAccounts();\n            case 10:\n                addresses = _ctx.sent;\n                console.log('got addresses', addresses);\n                console.log('inserting bytes', _provider__WEBPACK_IMPORTED_MODULE_1__.eth.utils.fromAscii(username));\n                _ctx.next = 15;\n                return controller.createUser(_provider__WEBPACK_IMPORTED_MODULE_1__.eth.utils.fromAscii(username), {\n                    from: addresses[0] // first user\n                });\n            case 15:\n                result = _ctx.sent;\n                return _ctx.abrupt(\"return\", result);\n            case 19:\n                _ctx.prev = 19;\n                _ctx.t0 = _ctx[\"catch\"](4);\n                console.error(\"Error: \", _ctx.t0);\n            case 22:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee, null, [\n        [\n            4,\n            19\n        ]\n    ]);\n}));\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWIzL3VzZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLEVBQXVEO0FBQ1Y7QUFDZTtBQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEUsRUFBaUY7QUFDMUUsR0FBSyxDQUFDSSxXQUFXLHVKQUFHLFFBQVEsU0FBREMsTUFBTSxFQUFLLENBQUM7UUFDcENDLE9BQU8sRUFDUEMsT0FBTzs7Ozs7dUJBRFNOLHNEQUFXLENBQUNDLDZEQUFXOztnQkFBdkNJLE9BQU87O3VCQUNTQSxPQUFPLENBQUNFLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDSixNQUFNOztnQkFBNUNFLE9BQU87NkNBRU5BLE9BQU87Ozs7OztBQUNsQixDQUFDO0FBRU0sR0FBSyxDQUFDRyxVQUFVLHVKQUFHLFFBQVEsU0FBREMsUUFBUSxFQUFLLENBQUM7UUFDckNDLFVBQVUsRUFLTkMsU0FBUyxFQUdUQyxNQUFNOzs7Ozt1QkFSU2Isc0RBQVcsQ0FBQ0UsZ0VBQWM7O2dCQUE3Q1MsVUFBVTtnQkFDaEJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWlCLGtCQUFFTCxRQUFROzs7dUJBRTdCTSxRQUFRLENBQUNDLE1BQU07O2dCQUNyQkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUzs7dUJBQ0doQixzREFBZTs7Z0JBQWpDYSxTQUFTO2dCQUNmRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFlLGdCQUFFSCxTQUFTO2dCQUN0Q0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBaUIsa0JBQUVoQiwwREFBbUIsQ0FBQ1csUUFBUTs7dUJBQ3RDQyxVQUFVLENBQUNGLFVBQVUsQ0FDdENWLDBEQUFtQixDQUFDVyxRQUFRLEdBQzVCLENBQUM7b0JBQ0dXLElBQUksRUFBRVQsU0FBUyxDQUFDLENBQUMsQ0FBRSxDQUFhO2dCQUNwQyxDQUFDOztnQkFKQ0MsTUFBTTs2Q0FPTEEsTUFBTTs7OztnQkFHYkMsT0FBTyxDQUFDUSxLQUFLLENBQUMsQ0FBUzs7Ozs7Ozs7Ozs7QUFFL0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi93ZWIzL3VzZXJzLmpzPzQ4ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gd2Ugd2FudCB0byBjcmVhdGUgYSAgZnVuY3Rpb24gdG8gZ3JhYiB0aGUgdXNlcnMgaW5mb1xyXG5pbXBvcnQgeyBldGgsIGdldEluc3RhbmNlIH0gZnJvbSAnLi9wcm92aWRlcidcclxuaW1wb3J0IFVzZXJTdG9yYWdlIGZyb20gJy4uL3dlYjMvYXJ0aWZhY3RzL1VzZXJTdG9yYWdlLmpzb24nXHJcbmltcG9ydCBVc2VyQ29udHJvbGxlciBmcm9tICcuLi93ZWIzL2FydGlmYWN0cy9Vc2VyQ29udHJvbGxlci5qc29uJ1xyXG5cclxuLy8gd2Ugd2FudCBhIGZ1bmN0aW9uIGNhbGxlZCBjcmVhdGVVc2VyIHRoYXQgY2FsbHMgdGhlIHVzZXIgY29udHJvbGxlcnMgZnVuY3Rpb24gXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9IGFzeW5jICh1c2VySWQpID0+IHtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCBnZXRJbnN0YW5jZShVc2VyU3RvcmFnZSlcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBzdG9yYWdlLnByb2ZpbGVzLmNhbGwodXNlcklkKVxyXG5cclxuICAgIHJldHVybiBwcm9maWxlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKHVzZXJuYW1lKSA9PiB7XHJcbiAgICBjb25zdCBjb250cm9sbGVyID0gYXdhaXQgZ2V0SW5zdGFuY2UoVXNlckNvbnRyb2xsZXIpXHJcbiAgICBjb25zb2xlLmxvZyhcImNyZWF0aW5nIHVzZXI6IFwiLCB1c2VybmFtZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGV0aGVyZXVtLmVuYWJsZSgpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2VuYWJsZWQnKVxyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IGV0aC5nZXRBY2NvdW50cygpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dvdCBhZGRyZXNzZXMnLCBhZGRyZXNzZXMpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luc2VydGluZyBieXRlcycsIGV0aC51dGlscy5mcm9tQXNjaWkodXNlcm5hbWUpKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cm9sbGVyLmNyZWF0ZVVzZXIoXHJcbiAgICAgICAgICAgIGV0aC51dGlscy5mcm9tQXNjaWkodXNlcm5hbWUpLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiBhZGRyZXNzZXNbMF0gLy8gZmlyc3QgdXNlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0OyAgXHJcbiAgICB9IFxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjogXCIsIGVycilcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJldGgiLCJnZXRJbnN0YW5jZSIsIlVzZXJTdG9yYWdlIiwiVXNlckNvbnRyb2xsZXIiLCJnZXRVc2VySW5mbyIsInVzZXJJZCIsInN0b3JhZ2UiLCJwcm9maWxlIiwicHJvZmlsZXMiLCJjYWxsIiwiY3JlYXRlVXNlciIsInVzZXJuYW1lIiwiY29udHJvbGxlciIsImFkZHJlc3NlcyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJldGhlcmV1bSIsImVuYWJsZSIsImdldEFjY291bnRzIiwidXRpbHMiLCJmcm9tQXNjaWkiLCJmcm9tIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./web3/users.js\n");

/***/ })

});