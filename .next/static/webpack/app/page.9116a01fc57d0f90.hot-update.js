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

/***/ "(app-pages-browser)/./src/app/components/ProfileCarousel/index.jsx":
/*!******************************************************!*\
  !*** ./src/app/components/ProfileCarousel/index.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProfileCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_card_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-card-carousel */ \"(app-pages-browser)/./node_modules/react-card-carousel/build/index.js\");\n/* harmony import */ var react_card_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_card_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _app_assets_avtar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/assets/avtar.png */ \"(app-pages-browser)/./src/app/assets/avtar.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst profiles = [\n    {\n        name: \"Abhishek Gupta\",\n        title: \"마케팅\",\n        experience: \"2y+\",\n        countryFlag: \"/flag.png\",\n        avatar: \"/avatar.jpg\",\n        skills: [\n            \"마케팅 콘텐츠 제작\",\n            \"인스타그램 관리\",\n            \"트위터 관리\",\n            \"블로그 글 작성\"\n        ]\n    },\n    {\n        name: \"Abhishek Gupta\",\n        title: \"마케팅\",\n        experience: \"1y+\",\n        countryFlag: \"/flag.png\",\n        avatar: \"/avatar.jpg\",\n        skills: [\n            \"마케팅 콘텐츠 제작\",\n            \"인스타그램 관리\",\n            \"트위터 관리\",\n            \"블로그 글 작성\"\n        ]\n    },\n    {\n        name: \"Abhishek Gupta\",\n        title: \"마케팅\",\n        experience: \"3y+\",\n        countryFlag: \"/flag.png\",\n        avatar: \"/avatar.jpg\",\n        skills: [\n            \"마케팅 콘텐츠 제작\",\n            \"인스타그램 관리\",\n            \"트위터 관리\",\n            \"블로그 글 작성\"\n        ]\n    }\n];\nfunction ProfileCarousel() {\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    // Go to the next slide\n    const nextSlide = ()=>{\n        setCurrentIndex((prevIndex)=>(prevIndex + 1) % profiles.length);\n    };\n    // Go to the previous slide\n    const prevSlide = ()=>{\n        setCurrentIndex((prevIndex)=>(prevIndex - 1 + profiles.length) % profiles.length);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: prevSlide,\n                className: \"absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg\",\n                children: \"❮\"\n            }, void 0, false, {\n                fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: nextSlide,\n                className: \"absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg\",\n                children: \"❯\"\n            }, void 0, false, {\n                fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_card_carousel__WEBPACK_IMPORTED_MODULE_1___default()), {\n                autoplay: true,\n                autoplay_speed: 2500,\n                children: profiles.map((profile, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"keen-slider__slide flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white rounded-xl shadow-lg p-4 w-60\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-center mb-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: _app_assets_avtar_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                        alt: \"Profile picture\",\n                                        className: \"rounded-full\",\n                                        width: 100,\n                                        height: 100\n                                    }, void 0, false, {\n                                        fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-center mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-black text-2xl font-bold\",\n                                            children: profile.name\n                                        }, void 0, false, {\n                                            fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-blue-500 font-bold\",\n                                            children: [\n                                                profile.title,\n                                                \" • \",\n                                                profile.experience\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-2\",\n                                    children: profile.skills.map((skill, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"inline-block bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm\",\n                                            children: skill\n                                        }, index, false, {\n                                            fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, this)\n                    }, idx, false, {\n                        fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ProfileCarousel, \"tusBbsahUVevXfyh6oH5R6YDC9Q=\");\n_c = ProfileCarousel;\nvar _c;\n$RefreshReg$(_c, \"ProfileCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9maWxlQ2Fyb3VzZWwvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMkM7QUFDWjtBQUNhO0FBQ1g7QUFFakMsTUFBTUksV0FBVztJQUNmO1FBQ0VDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxZQUFZO1FBQ1pDLGFBQWE7UUFDYkMsUUFBUTtRQUNSQyxRQUFRO1lBQ047WUFDQTtZQUNBO1lBQ0E7U0FDRDtJQUNIO0lBQ0E7UUFDRUwsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFlBQVk7UUFDWkMsYUFBYTtRQUNiQyxRQUFRO1FBQ1JDLFFBQVE7WUFDTjtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQTtRQUNFTCxNQUFNO1FBQ05DLE9BQU87UUFDUEMsWUFBWTtRQUNaQyxhQUFhO1FBQ2JDLFFBQVE7UUFDUkMsUUFBUTtZQUNOO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7SUFDSDtDQUVEO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBRWpELHVCQUF1QjtJQUN2QixNQUFNVyxZQUFZO1FBQ2hCRCxnQkFBZ0IsQ0FBQ0UsWUFBYyxDQUFDQSxZQUFZLEtBQUtYLFNBQVNZLE1BQU07SUFDbEU7SUFFQSwyQkFBMkI7SUFDM0IsTUFBTUMsWUFBWTtRQUNoQkosZ0JBQ0UsQ0FBQ0UsWUFBYyxDQUFDQSxZQUFZLElBQUlYLFNBQVNZLE1BQU0sSUFBSVosU0FBU1ksTUFBTTtJQUV0RTtJQUVBLHFCQUNFOzswQkFFRSw4REFBQ0U7Z0JBQ0NDLFNBQVNGO2dCQUNURyxXQUFVOzBCQUNYOzs7Ozs7MEJBS0QsOERBQUNGO2dCQUNDQyxTQUFTTDtnQkFDVE0sV0FBVTswQkFDWDs7Ozs7OzBCQUdELDhEQUFDcEIsNERBQVFBO2dCQUFDcUIsVUFBVTtnQkFBTUMsZ0JBQWdCOzBCQUN2Q2xCLFNBQVNtQixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msb0JBQ3RCLDhEQUFDQzt3QkFBY04sV0FBVTtrQ0FDdkIsNEVBQUNNOzRCQUFJTixXQUFVOzs4Q0FDYiw4REFBQ007b0NBQUlOLFdBQVU7OENBQ2IsNEVBQUNuQixrREFBS0E7d0NBQ0owQixLQUFLekIsNkRBQU1BO3dDQUNYMEIsS0FBSTt3Q0FDSlIsV0FBVTt3Q0FDVlMsT0FBTzt3Q0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7OENBR1osOERBQUNKO29DQUFJTixXQUFVOztzREFDYiw4REFBQ1c7NENBQUdYLFdBQVU7c0RBQ1hJLFFBQVFuQixJQUFJOzs7Ozs7c0RBRWYsOERBQUMyQjs0Q0FBRVosV0FBVTs7Z0RBQ1ZJLFFBQVFsQixLQUFLO2dEQUFDO2dEQUFJa0IsUUFBUWpCLFVBQVU7Ozs7Ozs7Ozs7Ozs7OENBR3pDLDhEQUFDbUI7b0NBQUlOLFdBQVU7OENBQ1pJLFFBQVFkLE1BQU0sQ0FBQ2EsR0FBRyxDQUFDLENBQUNVLE9BQU9DLHNCQUMxQiw4REFBQ0M7NENBRUNmLFdBQVU7c0RBRVRhOzJDQUhJQzs7Ozs7Ozs7Ozs7Ozs7Ozt1QkF0QkxUOzs7Ozs7Ozs7Ozs7QUFtQ3BCO0dBckV3QmQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1Byb2ZpbGVDYXJvdXNlbC9pbmRleC5qc3g/MTc1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtY2FyZC1jYXJvdXNlbFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAL2FwcC9hc3NldHMvYXZ0YXIucG5nXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBwcm9maWxlcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiQWJoaXNoZWsgR3VwdGFcIixcbiAgICB0aXRsZTogXCLrp4jsvIDtjIVcIixcbiAgICBleHBlcmllbmNlOiBcIjJ5K1wiLFxuICAgIGNvdW50cnlGbGFnOiBcIi9mbGFnLnBuZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGggZm9yIHRoZSBmbGFnXG4gICAgYXZhdGFyOiBcIi9hdmF0YXIuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgYXZhdGFyIGltYWdlIHBhdGhcbiAgICBza2lsbHM6IFtcbiAgICAgIFwi66eI7LyA7YyFIOy9mO2FkOy4oCDsoJzsnpFcIixcbiAgICAgIFwi7J247Iqk7YOA6re4656oIOq0gOumrFwiLFxuICAgICAgXCLtirjsnITthLAg6rSA66asXCIsXG4gICAgICBcIuu4lOuhnOq3uCDquIAg7J6R7ISxXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQWJoaXNoZWsgR3VwdGFcIixcbiAgICB0aXRsZTogXCLrp4jsvIDtjIVcIixcbiAgICBleHBlcmllbmNlOiBcIjF5K1wiLFxuICAgIGNvdW50cnlGbGFnOiBcIi9mbGFnLnBuZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGggZm9yIHRoZSBmbGFnXG4gICAgYXZhdGFyOiBcIi9hdmF0YXIuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgYXZhdGFyIGltYWdlIHBhdGhcbiAgICBza2lsbHM6IFtcbiAgICAgIFwi66eI7LyA7YyFIOy9mO2FkOy4oCDsoJzsnpFcIixcbiAgICAgIFwi7J247Iqk7YOA6re4656oIOq0gOumrFwiLFxuICAgICAgXCLtirjsnITthLAg6rSA66asXCIsXG4gICAgICBcIuu4lOuhnOq3uCDquIAg7J6R7ISxXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQWJoaXNoZWsgR3VwdGFcIixcbiAgICB0aXRsZTogXCLrp4jsvIDtjIVcIixcbiAgICBleHBlcmllbmNlOiBcIjN5K1wiLFxuICAgIGNvdW50cnlGbGFnOiBcIi9mbGFnLnBuZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGggZm9yIHRoZSBmbGFnXG4gICAgYXZhdGFyOiBcIi9hdmF0YXIuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgYXZhdGFyIGltYWdlIHBhdGhcbiAgICBza2lsbHM6IFtcbiAgICAgIFwi66eI7LyA7YyFIOy9mO2FkOy4oCDsoJzsnpFcIixcbiAgICAgIFwi7J247Iqk7YOA6re4656oIOq0gOumrFwiLFxuICAgICAgXCLtirjsnITthLAg6rSA66asXCIsXG4gICAgICBcIuu4lOuhnOq3uCDquIAg7J6R7ISxXCIsXG4gICAgXSxcbiAgfSxcbiAgLy8gQWRkIG1vcmUgcHJvZmlsZXMgaGVyZS4uLlxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZUNhcm91c2VsKCkge1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gR28gdG8gdGhlIG5leHQgc2xpZGVcbiAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRJbmRleCgocHJldkluZGV4KSA9PiAocHJldkluZGV4ICsgMSkgJSBwcm9maWxlcy5sZW5ndGgpO1xuICB9O1xuXG4gIC8vIEdvIHRvIHRoZSBwcmV2aW91cyBzbGlkZVxuICBjb25zdCBwcmV2U2xpZGUgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEluZGV4KFxuICAgICAgKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCAtIDEgKyBwcm9maWxlcy5sZW5ndGgpICUgcHJvZmlsZXMubGVuZ3RoXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogTGVmdCBBcnJvdyAqL31cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17cHJldlNsaWRlfVxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBiZy1ncmF5LTIwMCBwLTIgcm91bmRlZC1mdWxsIHNoYWRvdy1sZ1wiXG4gICAgICA+XG4gICAgICAgIOKdrlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIHsvKiBSaWdodCBBcnJvdyAqL31cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17bmV4dFNsaWRlfVxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgYmctZ3JheS0yMDAgcC0yIHJvdW5kZWQtZnVsbCBzaGFkb3ctbGdcIlxuICAgICAgPlxuICAgICAgICDina9cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPENhcm91c2VsIGF1dG9wbGF5PXt0cnVlfSBhdXRvcGxheV9zcGVlZD17MjUwMH0+XG4gICAgICAgIHtwcm9maWxlcy5tYXAoKHByb2ZpbGUsIGlkeCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cImtlZW4tc2xpZGVyX19zbGlkZSBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LWxnIHAtNCB3LTYwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e0F2YXRhcn1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2ZpbGUgcGljdHVyZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ibGFjayB0ZXh0LTJ4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGUudGl0bGV9IOKAoiB7cHJvZmlsZS5leHBlcmllbmNlfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAge3Byb2ZpbGUuc2tpbGxzLm1hcCgoc2tpbGwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBweS0xIHB4LTMgcm91bmRlZC1mdWxsIHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c2tpbGx9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsIkltYWdlIiwiQXZhdGFyIiwidXNlU3RhdGUiLCJwcm9maWxlcyIsIm5hbWUiLCJ0aXRsZSIsImV4cGVyaWVuY2UiLCJjb3VudHJ5RmxhZyIsImF2YXRhciIsInNraWxscyIsIlByb2ZpbGVDYXJvdXNlbCIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsIm5leHRTbGlkZSIsInByZXZJbmRleCIsImxlbmd0aCIsInByZXZTbGlkZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJhdXRvcGxheSIsImF1dG9wbGF5X3NwZWVkIiwibWFwIiwicHJvZmlsZSIsImlkeCIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDIiLCJwIiwic2tpbGwiLCJpbmRleCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProfileCarousel/index.jsx\n"));

/***/ })

});