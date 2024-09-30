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

/***/ "(app-pages-browser)/./src/app/molecules/Dropdown/index.jsx":
/*!**********************************************!*\
  !*** ./src/app/molecules/Dropdown/index.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Dropdown = (param)=>{\n    let { label, data } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(label);\n    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const toggleDropdown = ()=>{\n        setIsOpen(!isOpen);\n    };\n    const handleClickOutside = (event)=>{\n        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {\n            setIsOpen(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener(\"mousedown\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n        };\n    }, []);\n    const handleSelect = (item)=>{\n        console.log(\"Selected: \".concat(item));\n        setSelectedValue(item);\n        setIsOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative inline-block text-left\",\n        ref: dropdownRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#\",\n                className: \"hover:text-gray-300 font-bold cursor-pointer\",\n                onClick: (e)=>{\n                    e.preventDefault();\n                    toggleDropdown();\n                },\n                children: [\n                    selectedValue,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"▼\"\n                    }, void 0, false, {\n                        fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/Dropdown/index.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/Dropdown/index.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: data === null || data === void 0 ? void 0 : data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"px-4 py-2 hover:bg-gray-100 cursor-pointer\",\n                            onClick: ()=>handleSelect(\"해외 개발자 원격 채용\"),\n                            children: item\n                        }, item, false, {\n                            fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/Dropdown/index.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/Dropdown/index.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/Dropdown/index.jsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/Dropdown/index.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dropdown, \"Jnw4tf/3BCNQMgfuOGLY7RG7068=\");\n_c = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown);\nvar _c;\n$RefreshReg$(_c, \"Dropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW9sZWN1bGVzL0Ryb3Bkb3duL2luZGV4LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkQ7QUFFM0QsTUFBTUksV0FBVztRQUFDLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFOztJQUMvQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDUSxlQUFlQyxpQkFBaUIsR0FBR1QsK0NBQVFBLENBQUNJO0lBQ25ELE1BQU1NLGNBQWNULDZDQUFNQSxDQUFDO0lBRTNCLE1BQU1VLGlCQUFpQjtRQUNyQkosVUFBVSxDQUFDRDtJQUNiO0lBRUEsTUFBTU0scUJBQXFCLENBQUNDO1FBQzFCLElBQUlILFlBQVlJLE9BQU8sSUFBSSxDQUFDSixZQUFZSSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsTUFBTUcsTUFBTSxHQUFHO1lBQ3RFVCxVQUFVO1FBQ1o7SUFDRjtJQUVBTCxnREFBU0EsQ0FBQztRQUNSZSxTQUFTQyxnQkFBZ0IsQ0FBQyxhQUFhTjtRQUN2QyxPQUFPO1lBQ0xLLFNBQVNFLG1CQUFtQixDQUFDLGFBQWFQO1FBQzVDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTVEsZUFBZSxDQUFDQztRQUNwQkMsUUFBUUMsR0FBRyxDQUFDLGFBQWtCLE9BQUxGO1FBQ3pCWixpQkFBaUJZO1FBQ2pCZCxVQUFVO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ2lCO1FBQUlDLFdBQVU7UUFBa0NDLEtBQUtoQjs7MEJBQ3BELDhEQUFDaUI7Z0JBQ0NDLE1BQUs7Z0JBQ0xILFdBQVU7Z0JBQ1ZJLFNBQVMsQ0FBQ0M7b0JBQ1JBLEVBQUVDLGNBQWM7b0JBQ2hCcEI7Z0JBQ0Y7O29CQUVDSDtvQkFBYztrQ0FBQyw4REFBQ3dCO2tDQUFLOzs7Ozs7Ozs7Ozs7WUFFdkIxQix3QkFDQyw4REFBQ2tCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDUTs4QkFDRTVCLGlCQUFBQSwyQkFBQUEsS0FBTTZCLEdBQUcsQ0FBQyxDQUFDYixxQkFDViw4REFBQ2M7NEJBRUNWLFdBQVU7NEJBQ1ZJLFNBQVMsSUFBTVQsYUFBYTtzQ0FFM0JDOzJCQUpJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXJCO0dBekRNbEI7S0FBQUE7QUEyRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tb2xlY3VsZXMvRHJvcGRvd24vaW5kZXguanN4PzE0ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBEcm9wZG93biA9ICh7IGxhYmVsLCBkYXRhIH0pID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkVmFsdWUsIHNldFNlbGVjdGVkVmFsdWVdID0gdXNlU3RhdGUobGFiZWwpO1xuICBjb25zdCBkcm9wZG93blJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHtcbiAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGRyb3Bkb3duUmVmLmN1cnJlbnQgJiYgIWRyb3Bkb3duUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGl0ZW0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhgU2VsZWN0ZWQ6ICR7aXRlbX1gKTtcbiAgICBzZXRTZWxlY3RlZFZhbHVlKGl0ZW0pO1xuICAgIHNldElzT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1ibG9jayB0ZXh0LWxlZnRcIiByZWY9e2Ryb3Bkb3duUmVmfT5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTMwMCBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0b2dnbGVEcm9wZG93bigpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7c2VsZWN0ZWRWYWx1ZX0gPHNwYW4+4pa8PC9zcGFuPlxuICAgICAgPC9hPlxuICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIG10LTIgdy01NiBiZy13aGl0ZSB0ZXh0LWJsYWNrIHJvdW5kZWQtbWQgc2hhZG93LWxnIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01IGZvY3VzOm91dGxpbmUtbm9uZSB6LTUwXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2RhdGE/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMTAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QoXCLtlbTsmbgg6rCc67Cc7J6QIOybkOqyqSDssYTsmqlcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJEcm9wZG93biIsImxhYmVsIiwiZGF0YSIsImlzT3BlbiIsInNldElzT3BlbiIsInNlbGVjdGVkVmFsdWUiLCJzZXRTZWxlY3RlZFZhbHVlIiwiZHJvcGRvd25SZWYiLCJ0b2dnbGVEcm9wZG93biIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNlbGVjdCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3BhbiIsInVsIiwibWFwIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/molecules/Dropdown/index.jsx\n"));

/***/ })

});