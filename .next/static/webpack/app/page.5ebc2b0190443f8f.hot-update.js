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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Dropdown = (param)=>{\n    let { label, data } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // Toggle dropdown on button click\n    const toggleDropdown = ()=>{\n        setIsOpen(!isOpen);\n    };\n    // Close dropdown when clicking outside\n    const handleClickOutside = (event)=>{\n        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {\n            setIsOpen(false);\n        }\n    };\n    // Attach event listener for clicks outside the dropdown\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener(\"mousedown\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n        };\n    }, []);\n    // Handle selection and close dropdown\n    const handleSelect = (item)=>{\n        console.log(\"Selected: \".concat(item)); // Perform your action here\n        setIsOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative inline-block text-left\",\n        ref: dropdownRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#\",\n                className: \"hover:text-gray-300 font-bold cursor-pointer\",\n                onClick: (e)=>{\n                    e.preventDefault(); // Prevent default anchor behavior\n                    toggleDropdown();\n                },\n                children: [\n                    label,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"▼\"\n                    }, void 0, false, {\n                        fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/Dropdown/index.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/Dropdown/index.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"px-4 py-2 hover:bg-gray-100 cursor-pointer\",\n                        onClick: ()=>handleSelect(\"해외 개발자 원격 채용\"),\n                        children: \"해외 개발자 원격 채용\"\n                    }, void 0, false, {\n                        fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/Dropdown/index.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/Dropdown/index.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/Dropdown/index.jsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/molecules/Dropdown/index.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dropdown, \"uhOyve9TWk+bvhPJTPlaMsUEQAY=\");\n_c = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown);\nvar _c;\n$RefreshReg$(_c, \"Dropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW9sZWN1bGVzL0Ryb3Bkb3duL2luZGV4LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkQ7QUFFM0QsTUFBTUksV0FBVztRQUFDLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFOztJQUMvQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFDckMsTUFBTVEsY0FBY1AsNkNBQU1BLENBQUM7SUFFM0Isa0NBQWtDO0lBQ2xDLE1BQU1RLGlCQUFpQjtRQUNyQkYsVUFBVSxDQUFDRDtJQUNiO0lBRUEsdUNBQXVDO0lBQ3ZDLE1BQU1JLHFCQUFxQixDQUFDQztRQUMxQixJQUFJSCxZQUFZSSxPQUFPLElBQUksQ0FBQ0osWUFBWUksT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sR0FBRztZQUN0RVAsVUFBVTtRQUNaO0lBQ0Y7SUFFQSx3REFBd0Q7SUFDeERMLGdEQUFTQSxDQUFDO1FBQ1JhLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFOO1FBQ3ZDLE9BQU87WUFDTEssU0FBU0UsbUJBQW1CLENBQUMsYUFBYVA7UUFDNUM7SUFDRixHQUFHLEVBQUU7SUFFTCxzQ0FBc0M7SUFDdEMsTUFBTVEsZUFBZSxDQUFDQztRQUNwQkMsUUFBUUMsR0FBRyxDQUFDLGFBQWtCLE9BQUxGLFFBQVMsMkJBQTJCO1FBQzdEWixVQUFVO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ2U7UUFBSUMsV0FBVTtRQUFrQ0MsS0FBS2hCOzswQkFDcEQsOERBQUNpQjtnQkFDQ0MsTUFBSztnQkFDTEgsV0FBVTtnQkFDVkksU0FBUyxDQUFDQztvQkFDUkEsRUFBRUMsY0FBYyxJQUFJLGtDQUFrQztvQkFDdERwQjtnQkFDRjs7b0JBRUNMO29CQUFNO2tDQUFDLDhEQUFDMEI7a0NBQUs7Ozs7Ozs7Ozs7OztZQUVmeEIsd0JBQ0MsOERBQUNnQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ1E7OEJBQ0MsNEVBQUNDO3dCQUNDVCxXQUFVO3dCQUNWSSxTQUFTLElBQU1ULGFBQWE7a0NBQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7R0F4RE1mO0tBQUFBO0FBMEROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbW9sZWN1bGVzL0Ryb3Bkb3duL2luZGV4LmpzeD8xNGZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRHJvcGRvd24gPSAoeyBsYWJlbCwgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGRyb3Bkb3duUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIFRvZ2dsZSBkcm9wZG93biBvbiBidXR0b24gY2xpY2tcbiAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICB9O1xuXG4gIC8vIENsb3NlIGRyb3Bkb3duIHdoZW4gY2xpY2tpbmcgb3V0c2lkZVxuICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZHJvcGRvd25SZWYuY3VycmVudCAmJiAhZHJvcGRvd25SZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICAvLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXIgZm9yIGNsaWNrcyBvdXRzaWRlIHRoZSBkcm9wZG93blxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBIYW5kbGUgc2VsZWN0aW9uIGFuZCBjbG9zZSBkcm9wZG93blxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTZWxlY3RlZDogJHtpdGVtfWApOyAvLyBQZXJmb3JtIHlvdXIgYWN0aW9uIGhlcmVcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdGV4dC1sZWZ0XCIgcmVmPXtkcm9wZG93blJlZn0+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS0zMDAgZm9udC1ib2xkIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgZGVmYXVsdCBhbmNob3IgYmVoYXZpb3JcbiAgICAgICAgICB0b2dnbGVEcm9wZG93bigpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9IDxzcGFuPuKWvDwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCBtdC0yIHctNTYgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgZm9jdXM6b3V0bGluZS1ub25lIHotNTBcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMTAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KFwi7ZW07Jm4IOqwnOuwnOyekCDsm5Dqsqkg7LGE7JqpXCIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDtlbTsmbgg6rCc67Cc7J6QIOybkOqyqSDssYTsmqlcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkRyb3Bkb3duIiwibGFiZWwiLCJkYXRhIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiZHJvcGRvd25SZWYiLCJ0b2dnbGVEcm9wZG93biIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNlbGVjdCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3BhbiIsInVsIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/molecules/Dropdown/index.jsx\n"));

/***/ })

});