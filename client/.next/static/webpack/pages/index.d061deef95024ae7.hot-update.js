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

/***/ "./web3/provider.js":
/*!**************************!*\
  !*** ./web3/provider.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eth\": function() { return /* binding */ eth; }\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"../node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar provider = function() {\n    if (typeof (web3__WEBPACK_IMPORTED_MODULE_0___default()) !== 'undefined') {\n        console.log(\"here1\");\n        return (web3__WEBPACK_IMPORTED_MODULE_0___default().currentProvider);\n    } else {\n        console.error(\"MetaMask does not seem to be installed.\");\n    }\n};\nvar eth = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider()).eth;\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWIzL3Byb3ZpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUI7QUFFdkIsR0FBSyxDQUFDQyxRQUFRLEdBQUcsUUFBUSxHQUFGLENBQUM7SUFDcEIsRUFBRSxFQUFFLE1BQU0sQ0FBQ0QsNkNBQUksS0FBSyxDQUFXLFlBQUUsQ0FBQztRQUM5QkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTztRQUNuQixNQUFNLENBQUNILDZEQUFvQjtJQUMvQixDQUFDLE1BQ0ksQ0FBQztRQUNGRSxPQUFPLENBQUNHLEtBQUssQ0FBQyxDQUF5QztJQUMzRCxDQUFDO0FBQ0wsQ0FBQztBQUVNLEdBQUssQ0FBQ0MsR0FBRyxHQUFHLEdBQUcsQ0FBQ04sNkNBQUksQ0FBQ0MsUUFBUSxJQUFJSyxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3dlYjMvcHJvdmlkZXIuanM/YmRhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2ViMyBmcm9tICd3ZWIzJ1xyXG5cclxuY29uc3QgcHJvdmlkZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdlYjMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoZXJlMVwiKTtcclxuICAgICAgICByZXR1cm4gd2ViMy5jdXJyZW50UHJvdmlkZXJcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXRhTWFzayBkb2VzIG5vdCBzZWVtIHRvIGJlIGluc3RhbGxlZC5cIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBldGggPSBuZXcgd2ViMyhwcm92aWRlcigpKS5ldGg7Il0sIm5hbWVzIjpbIndlYjMiLCJwcm92aWRlciIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50UHJvdmlkZXIiLCJlcnJvciIsImV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web3/provider.js\n");

/***/ })

});