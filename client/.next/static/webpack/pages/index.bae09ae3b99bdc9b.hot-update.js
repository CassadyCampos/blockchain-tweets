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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/regenerator-runtime/runtime.js */ \"../node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3/provider */ \"./web3/provider.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {\n        }));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar IndexPage = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(IndexPage, _Component);\n    var _super = _createSuper(IndexPage);\n    function IndexPage() {\n        _classCallCheck(this, IndexPage);\n        return _super.apply(this, arguments);\n    }\n    _createClass(IndexPage, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                return _asyncToGenerator(C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var addresses, balance;\n                    return C_Users_Cassady_Documents_GitHub_tweether_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.prev = 0;\n                                _ctx.next = 3;\n                                return ethereum.enable();\n                            case 3:\n                                console.log(\"test\");\n                                _ctx.next = 6;\n                                return _web3_provider__WEBPACK_IMPORTED_MODULE_3__.eth.getAccounts();\n                            case 6:\n                                addresses = _ctx.sent;\n                                console.log(addresses);\n                                _ctx.next = 10;\n                                return _web3_provider__WEBPACK_IMPORTED_MODULE_3__.eth.getBalance(account[0]);\n                            case 10:\n                                balance = _ctx.sent;\n                                console.log(balance);\n                                _ctx.next = 17;\n                                break;\n                            case 14:\n                                _ctx.prev = 14;\n                                _ctx.t0 = _ctx[\"catch\"](0);\n                                console.error(\"User denied access to ETH addresses!\");\n                            case 17:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, null, [\n                        [\n                            0,\n                            14\n                        ]\n                    ]);\n                }))();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Cassady\\\\Documents\\\\GitHub\\\\tweether\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    },\n                    __self: this,\n                    children: \"Hello World!\"\n                }));\n            }\n        }\n    ]);\n    return IndexPage;\n}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpCRSxTQUFTLGlCQUFmLFFBQVE7O2NBQUZBLFNBQVM7OEJBQVRBLFNBQVM7YUFBVEEsU0FBUzs4QkFBVEEsU0FBUzs7O2lCQUFUQSxTQUFTOztZQUNwQkMsR0FBaUIsRUFBakJBLENBQWlCO21CQUF2QixRQUFRLENBQUZBLGlCQUFpQjsyS0FBdkIsUUFBUSxXQUFrQixDQUFDO3dCQUliQyxTQUFTLEVBR1RDLE9BQU87Ozs7Ozt1Q0FMUEMsUUFBUSxDQUFDQyxNQUFNOztnQ0FDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQU07O3VDQUNNUiwyREFBZTs7Z0NBQWpDRyxTQUFTO2dDQUNmSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsU0FBUzs7dUNBRUNILDBEQUFjLENBQUNXLE9BQU8sQ0FBQyxDQUFDOztnQ0FBeENQLE9BQU87Z0NBQ2JHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixPQUFPOzs7Ozs7Z0NBR25CRyxPQUFPLENBQUNLLEtBQUssQ0FBQyxDQUFzQzs7Ozs7Ozs7Ozs7Z0JBRTVELENBQUM7Ozs7WUFDREMsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNOLE1BQU0sc0VBQ0RDLENBQUU7Ozs7Ozs7OEJBQUMsQ0FBWTs7WUFFeEIsQ0FBQzs7O1dBbkJnQmIsU0FBUztFQUFTRix3REFBZTtBQUF4QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZXRoIH0gZnJvbSAnLi4vd2ViMy9wcm92aWRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBldGhlcmV1bS5lbmFibGUoKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IGV0aC5nZXRBY2NvdW50cygpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZHJlc3NlcylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBldGguZ2V0QmFsYW5jZShhY2NvdW50WzBdKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhiYWxhbmNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVc2VyIGRlbmllZCBhY2Nlc3MgdG8gRVRIIGFkZHJlc3NlcyFcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8aDE+SGVsbG8gV29ybGQhPC9oMT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJldGgiLCJJbmRleFBhZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImFkZHJlc3NlcyIsImJhbGFuY2UiLCJldGhlcmV1bSIsImVuYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRBY2NvdW50cyIsImdldEJhbGFuY2UiLCJhY2NvdW50IiwiZXJyb3IiLCJyZW5kZXIiLCJoMSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});