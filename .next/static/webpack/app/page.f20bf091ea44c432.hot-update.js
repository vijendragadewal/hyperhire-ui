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

/***/ "(app-pages-browser)/./src/app/molecules/ImageDescriptionBox/index.jsx":
/*!*********************************************************!*\
  !*** ./src/app/molecules/ImageDescriptionBox/index.jsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageDescriptionBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n//https://nextjs.org/icons/next.svg\nfunction ImageDescriptionBox(param) {\n    let { icon, descriptionText, width, height } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"py-2 bg-gray-50 text-black rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"p-2 rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    src: icon,\n                    width: width,\n                    height: height\n                }, void 0, false, {\n                    fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/ImageDescriptionBox/index.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/ImageDescriptionBox/index.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                class: \"text-gray-700 font-semibold\",\n                children: descriptionText\n            }, void 0, false, {\n                fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/ImageDescriptionBox/index.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/ImageDescriptionBox/index.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = ImageDescriptionBox;\nvar _c;\n$RefreshReg$(_c, \"ImageDescriptionBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW9sZWN1bGVzL0ltYWdlRGVzY3JpcHRpb25Cb3gvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0I7QUFFL0IsbUNBQW1DO0FBQ3BCLFNBQVNDLG9CQUFvQixLQUszQztRQUwyQyxFQUMxQ0MsSUFBSSxFQUNKQyxlQUFlLEVBQ2ZDLEtBQUssRUFDTEMsTUFBTSxFQUNQLEdBTDJDO0lBTTFDLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFNOzswQkFDVCw4REFBQ0Q7Z0JBQUlDLE9BQU07MEJBQ1QsNEVBQUNQLGtEQUFLQTtvQkFBQ1EsS0FBS047b0JBQU1FLE9BQU9BO29CQUFPQyxRQUFRQTs7Ozs7Ozs7Ozs7MEJBRzFDLDhEQUFDSTtnQkFBRUYsT0FBTTswQkFBK0JKOzs7Ozs7Ozs7Ozs7QUFHOUM7S0Fmd0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbW9sZWN1bGVzL0ltYWdlRGVzY3JpcHRpb25Cb3gvaW5kZXguanN4PzM0YjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbi8vaHR0cHM6Ly9uZXh0anMub3JnL2ljb25zL25leHQuc3ZnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZURlc2NyaXB0aW9uQm94KHtcbiAgaWNvbixcbiAgZGVzY3JpcHRpb25UZXh0LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJweS0yIGJnLWdyYXktNTAgdGV4dC1ibGFjayByb3VuZGVkLWxnXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicC0yIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgPEltYWdlIHNyYz17aWNvbn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8cCBjbGFzcz1cInRleHQtZ3JheS03MDAgZm9udC1zZW1pYm9sZFwiPntkZXNjcmlwdGlvblRleHR9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiSW1hZ2VEZXNjcmlwdGlvbkJveCIsImljb24iLCJkZXNjcmlwdGlvblRleHQiLCJ3aWR0aCIsImhlaWdodCIsImRpdiIsImNsYXNzIiwic3JjIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/molecules/ImageDescriptionBox/index.jsx\n"));

/***/ })

});