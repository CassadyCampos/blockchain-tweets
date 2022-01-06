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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserInfo\": function() { return /* binding */ getUserInfo; },\n/* harmony export */   \"createUser\": function() { return /* binding */ createUser; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/regenerator-runtime/runtime.js */ \"../node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider */ \"./web3/provider.js\");\n/* harmony import */ var _web3_artifacts_UserStorage_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web3/artifacts/UserStorage.json */ \"./web3/artifacts/UserStorage.json\");\n/* harmony import */ var _web3_artifacts_UserController_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3/artifacts/UserController.json */ \"./web3/artifacts/UserController.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// we want to create a  function to grab the users info\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n// we want a function called createUser that calls the user controllers function \nvar getUserInfo = _asyncToGenerator(C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(userId) {\n    var storage, profile;\n    return C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return (0,_provider__WEBPACK_IMPORTED_MODULE_1__.getInstance)(_web3_artifacts_UserStorage_json__WEBPACK_IMPORTED_MODULE_2__);\n            case 2:\n                storage = _ctx.sent;\n                _ctx.next = 5;\n                return storage.profiles.call(userId);\n            case 5:\n                profile = _ctx.sent;\n                return _ctx.abrupt(\"return\", profile);\n            case 7:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar createUser = _asyncToGenerator(C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(username) {\n    var controller, addresses, result;\n    return C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return (0,_provider__WEBPACK_IMPORTED_MODULE_1__.getInstance)(_web3_artifacts_UserController_json__WEBPACK_IMPORTED_MODULE_3__);\n            case 2:\n                controller = _ctx.sent;\n                _ctx.prev = 3;\n                _ctx.next = 6;\n                return ethereum.enable();\n            case 6:\n                _ctx.next = 8;\n                return _provider__WEBPACK_IMPORTED_MODULE_1__.eth.getAccounts();\n            case 8:\n                addresses = _ctx.sent;\n                _ctx.next = 11;\n                return controller.CreateUser(_provider__WEBPACK_IMPORTED_MODULE_1__.eth.utils.fromAscii(username), {\n                    from: addresses[0] // first user\n                });\n            case 11:\n                result = _ctx.sent;\n                return _ctx.abrupt(\"return\", result);\n            case 15:\n                _ctx.prev = 15;\n                _ctx.t0 = _ctx[\"catch\"](3);\n                console.error(\"Error: \", _ctx.t0);\n            case 18:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee, null, [\n        [\n            3,\n            15\n        ]\n    ]);\n}));\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWIzL3VzZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLEVBQXVEO0FBQ1Y7QUFDZTtBQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEUsRUFBaUY7QUFDMUUsR0FBSyxDQUFDSSxXQUFXLHVKQUFHLFFBQVEsU0FBREMsTUFBTSxFQUFLLENBQUM7UUFDcENDLE9BQU8sRUFDUEMsT0FBTzs7Ozs7dUJBRFNOLHNEQUFXLENBQUNDLDZEQUFXOztnQkFBdkNJLE9BQU87O3VCQUNTQSxPQUFPLENBQUNFLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDSixNQUFNOztnQkFBNUNFLE9BQU87NkNBRU5BLE9BQU87Ozs7OztBQUNsQixDQUFDO0FBRU0sR0FBSyxDQUFDRyxVQUFVLHVKQUFHLFFBQVEsU0FBREMsUUFBUSxFQUFLLENBQUM7UUFDckNDLFVBQVUsRUFJTkMsU0FBUyxFQUVUQyxNQUFNOzs7Ozt1QkFOU2Isc0RBQVcsQ0FBQ0UsZ0VBQWM7O2dCQUE3Q1MsVUFBVTs7O3VCQUdORyxRQUFRLENBQUNDLE1BQU07Ozt1QkFDR2hCLHNEQUFlOztnQkFBakNhLFNBQVM7O3VCQUVNRCxVQUFVLENBQUNNLFVBQVUsQ0FDdENsQiwwREFBbUIsQ0FBQ1csUUFBUSxHQUM1QixDQUFDO29CQUNHVSxJQUFJLEVBQUVSLFNBQVMsQ0FBQyxDQUFDLENBQUUsQ0FBYTtnQkFDcEMsQ0FBQzs7Z0JBSkNDLE1BQU07NkNBT0xBLE1BQU07Ozs7Z0JBR2JRLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQVM7Ozs7Ozs7Ozs7O0FBRS9CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd2ViMy91c2Vycy5qcz80OGRiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHdlIHdhbnQgdG8gY3JlYXRlIGEgIGZ1bmN0aW9uIHRvIGdyYWIgdGhlIHVzZXJzIGluZm9cclxuaW1wb3J0IHsgZXRoLCBnZXRJbnN0YW5jZSB9IGZyb20gJy4vcHJvdmlkZXInXHJcbmltcG9ydCBVc2VyU3RvcmFnZSBmcm9tICcuLi93ZWIzL2FydGlmYWN0cy9Vc2VyU3RvcmFnZS5qc29uJ1xyXG5pbXBvcnQgVXNlckNvbnRyb2xsZXIgZnJvbSAnLi4vd2ViMy9hcnRpZmFjdHMvVXNlckNvbnRyb2xsZXIuanNvbidcclxuXHJcbi8vIHdlIHdhbnQgYSBmdW5jdGlvbiBjYWxsZWQgY3JlYXRlVXNlciB0aGF0IGNhbGxzIHRoZSB1c2VyIGNvbnRyb2xsZXJzIGZ1bmN0aW9uIFxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSBhc3luYyAodXNlcklkKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yYWdlID0gYXdhaXQgZ2V0SW5zdGFuY2UoVXNlclN0b3JhZ2UpXHJcbiAgICBjb25zdCBwcm9maWxlID0gYXdhaXQgc3RvcmFnZS5wcm9maWxlcy5jYWxsKHVzZXJJZClcclxuXHJcbiAgICByZXR1cm4gcHJvZmlsZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jICh1c2VybmFtZSkgPT4ge1xyXG4gICAgY29uc3QgY29udHJvbGxlciA9IGF3YWl0IGdldEluc3RhbmNlKFVzZXJDb250cm9sbGVyKVxyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGV0aGVyZXVtLmVuYWJsZSgpXHJcbiAgICAgICAgY29uc3QgYWRkcmVzc2VzID0gYXdhaXQgZXRoLmdldEFjY291bnRzKClcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJvbGxlci5DcmVhdGVVc2VyKFxyXG4gICAgICAgICAgICBldGgudXRpbHMuZnJvbUFzY2lpKHVzZXJuYW1lKSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJvbTogYWRkcmVzc2VzWzBdIC8vIGZpcnN0IHVzZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDsgIFxyXG4gICAgfSBcclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6IFwiLCBlcnIpXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiZXRoIiwiZ2V0SW5zdGFuY2UiLCJVc2VyU3RvcmFnZSIsIlVzZXJDb250cm9sbGVyIiwiZ2V0VXNlckluZm8iLCJ1c2VySWQiLCJzdG9yYWdlIiwicHJvZmlsZSIsInByb2ZpbGVzIiwiY2FsbCIsImNyZWF0ZVVzZXIiLCJ1c2VybmFtZSIsImNvbnRyb2xsZXIiLCJhZGRyZXNzZXMiLCJyZXN1bHQiLCJldGhlcmV1bSIsImVuYWJsZSIsImdldEFjY291bnRzIiwiQ3JlYXRlVXNlciIsInV0aWxzIiwiZnJvbUFzY2lpIiwiZnJvbSIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web3/users.js\n");

/***/ })

});