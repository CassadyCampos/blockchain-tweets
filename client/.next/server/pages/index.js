"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IndexPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web3/provider */ \"./web3/provider.js\");\n\n\n\nclass IndexPage extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    async componentDidMount() {\n        try {\n            await ethereum.enable();\n            const addresses = await _web3_provider__WEBPACK_IMPORTED_MODULE_2__.eth.getAccounts();\n            console.log(addresses);\n            const balance = await _web3_provider__WEBPACK_IMPORTED_MODULE_2__.eth.getBalance(addresses[0]);\n            console.log(balance);\n        } catch (err) {\n            console.error(\"User denied access to ETH addresses!\");\n        }\n    }\n    render() {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n            __source: {\n                fileName: \"C:\\\\Users\\\\Cassady\\\\Documents\\\\GitHub\\\\tweether\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            },\n            __self: this,\n            children: \"Hello World!\"\n        }));\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ2E7QUFFdkIsTUFBTUUsU0FBUyxTQUFTRix3REFBZTtVQUM1Q0ksaUJBQWlCLEdBQUcsQ0FBQztRQUN2QixHQUFHLENBQUMsQ0FBQztZQUNELEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNO1lBQ3JCLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLEtBQUssQ0FBQ04sMkRBQWU7WUFFdkNRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxTQUFTO1lBRXJCLEtBQUssQ0FBQ0ksT0FBTyxHQUFHLEtBQUssQ0FBQ1YsMERBQWMsQ0FBQ00sU0FBUyxDQUFDLENBQUM7WUFDaERFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPO1FBQ3ZCLENBQUMsQ0FDRCxLQUFLLEVBQUVFLEdBQUcsRUFBRSxDQUFDO1lBQ1RKLE9BQU8sQ0FBQ0ssS0FBSyxDQUFDLENBQXNDO1FBQ3hELENBQUM7SUFDTCxDQUFDO0lBQ0RDLE1BQU0sR0FBRyxDQUFDO1FBQ04sTUFBTSxzRUFDREMsQ0FBRTs7Ozs7OztzQkFBQyxDQUFZOztJQUV4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGV0aCB9IGZyb20gJy4uL3dlYjMvcHJvdmlkZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgZXRoZXJldW0uZW5hYmxlKClcclxuICAgICAgICAgICAgY29uc3QgYWRkcmVzc2VzID0gYXdhaXQgZXRoLmdldEFjY291bnRzKClcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZHJlc3NlcylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBldGguZ2V0QmFsYW5jZShhZGRyZXNzZXNbMF0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJhbGFuY2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVzZXIgZGVuaWVkIGFjY2VzcyB0byBFVEggYWRkcmVzc2VzIVwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxoMT5IZWxsbyBXb3JsZCE8L2gxPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImV0aCIsIkluZGV4UGFnZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZE1vdW50IiwiZXRoZXJldW0iLCJlbmFibGUiLCJhZGRyZXNzZXMiLCJnZXRBY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJiYWxhbmNlIiwiZ2V0QmFsYW5jZSIsImVyciIsImVycm9yIiwicmVuZGVyIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./web3/provider.js":
/*!**************************!*\
  !*** ./web3/provider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eth\": () => (/* binding */ eth)\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\nconst provider = ()=>{\n    if (typeof (web3__WEBPACK_IMPORTED_MODULE_0___default()) !== 'undefined') {\n        console.log(\"here1\", (web3__WEBPACK_IMPORTED_MODULE_0___default().givenProvider));\n        return (web3__WEBPACK_IMPORTED_MODULE_0___default().givenProvider);\n    } else {\n        console.error(\"MetaMask does not seem to be installed.\");\n    }\n};\nconst eth = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider()).eth;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWIzL3Byb3ZpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QjtBQUV2QixLQUFLLENBQUNDLFFBQVEsT0FBUyxDQUFDO0lBQ3BCLEVBQUUsRUFBRSxNQUFNLENBQUNELDZDQUFJLEtBQUssQ0FBVyxZQUFFLENBQUM7UUFDOUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQU8sUUFBRUgsMkRBQWtCO1FBRXZDLE1BQU0sQ0FBQ0EsMkRBQWtCO0lBQzdCLENBQUMsTUFDSSxDQUFDO1FBQ0ZFLE9BQU8sQ0FBQ0csS0FBSyxDQUFDLENBQXlDO0lBQzNELENBQUM7QUFDTCxDQUFDO0FBRU0sS0FBSyxDQUFDQyxHQUFHLEdBQUcsR0FBRyxDQUFDTiw2Q0FBSSxDQUFDQyxRQUFRLElBQUlLLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIzL3Byb3ZpZGVyLmpzP2JkYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlYjMgZnJvbSAnd2ViMydcclxuXHJcbmNvbnN0IHByb3ZpZGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3ZWIzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVyZTFcIiwgd2ViMy5naXZlblByb3ZpZGVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHdlYjMuZ2l2ZW5Qcm92aWRlclxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1ldGFNYXNrIGRvZXMgbm90IHNlZW0gdG8gYmUgaW5zdGFsbGVkLlwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV0aCA9IG5ldyB3ZWIzKHByb3ZpZGVyKCkpLmV0aDsiXSwibmFtZXMiOlsid2ViMyIsInByb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsImdpdmVuUHJvdmlkZXIiLCJlcnJvciIsImV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web3/provider.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();