"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/molecules/IconWithLabel/index.jsx":
/*!***************************************************!*\
  !*** ./src/app/molecules/IconWithLabel/index.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IconWithLabel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _atoms_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/Label */ \"(app-pages-browser)/./src/app/atoms/Label/index.jsx\");\n\n\n\n//https://nextjs.org/icons/next.svg\nfunction IconWithLabel(param) {\n    let { lableName, className, icon, position, width, height } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center space-x-2\",\n        children: [\n            position === \"front\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: icon,\n                width: width,\n                height: height,\n                alt: \"front-img\"\n            }, void 0, false, {\n                fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/IconWithLabel/index.jsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Label__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                displayName: lableName,\n                className: className\n            }, void 0, false, {\n                fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/IconWithLabel/index.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            position === \"back\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: icon,\n                width: width,\n                height: height,\n                alt: \"back-img\"\n            }, void 0, false, {\n                fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/IconWithLabel/index.jsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/IconWithLabel/index.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = IconWithLabel;\nvar _c;\n$RefreshReg$(_c, \"IconWithLabel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW9sZWN1bGVzL0ljb25XaXRoTGFiZWwvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStCO0FBQ087QUFFdEMsbUNBQW1DO0FBQ3BCLFNBQVNFLGNBQWMsS0FPckM7UUFQcUMsRUFDcENDLFNBQVMsRUFDVEMsU0FBUyxFQUNUQyxJQUFJLEVBQ0pDLFFBQVEsRUFDUkMsS0FBSyxFQUNMQyxNQUFNLEVBQ1AsR0FQcUM7SUFRcEMscUJBQ0UsOERBQUNDO1FBQUlMLFdBQVU7O1lBQ1pFLGFBQWEseUJBQ1osOERBQUNOLGtEQUFLQTtnQkFBQ1UsS0FBS0w7Z0JBQU1FLE9BQU9BO2dCQUFPQyxRQUFRQTtnQkFBUUcsS0FBSTs7Ozs7OzBCQUV0RCw4REFBQ1Ysb0RBQUtBO2dCQUFDVyxhQUFhVDtnQkFBV0MsV0FBV0E7Ozs7OztZQUN6Q0UsYUFBYSx3QkFDWiw4REFBQ04sa0RBQUtBO2dCQUFDVSxLQUFLTDtnQkFBTUUsT0FBT0E7Z0JBQU9DLFFBQVFBO2dCQUFRRyxLQUFJOzs7Ozs7Ozs7Ozs7QUFJNUQ7S0FuQndCVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL21vbGVjdWxlcy9JY29uV2l0aExhYmVsL2luZGV4LmpzeD8xNzIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuLi8uLi9hdG9tcy9MYWJlbFwiO1xuXG4vL2h0dHBzOi8vbmV4dGpzLm9yZy9pY29ucy9uZXh0LnN2Z1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSWNvbldpdGhMYWJlbCh7XG4gIGxhYmxlTmFtZSxcbiAgY2xhc3NOYW1lLFxuICBpY29uLFxuICBwb3NpdGlvbixcbiAgd2lkdGgsXG4gIGhlaWdodCxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAge3Bvc2l0aW9uID09PSBcImZyb250XCIgJiYgKFxuICAgICAgICA8SW1hZ2Ugc3JjPXtpY29ufSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBhbHQ9XCJmcm9udC1pbWdcIiAvPlxuICAgICAgKX1cbiAgICAgIDxMYWJlbCBkaXNwbGF5TmFtZT17bGFibGVOYW1lfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gLz5cbiAgICAgIHtwb3NpdGlvbiA9PT0gXCJiYWNrXCIgJiYgKFxuICAgICAgICA8SW1hZ2Ugc3JjPXtpY29ufSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBhbHQ9XCJiYWNrLWltZ1wiIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGFiZWwiLCJJY29uV2l0aExhYmVsIiwibGFibGVOYW1lIiwiY2xhc3NOYW1lIiwiaWNvbiIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJkaXYiLCJzcmMiLCJhbHQiLCJkaXNwbGF5TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/molecules/IconWithLabel/index.jsx\n"));

/***/ })

});