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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProfileCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_card_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-card-carousel */ \"(app-pages-browser)/./node_modules/react-card-carousel/build/index.js\");\n/* harmony import */ var react_card_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_card_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _app_assets_avtar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/assets/avtar.png */ \"(app-pages-browser)/./src/app/assets/avtar.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst profiles = [\n    {\n        name: \"Abhishek Gupta\",\n        title: \"마케팅\",\n        experience: \"2y+\",\n        countryFlag: \"/flag.png\",\n        avatar: \"/avatar.jpg\",\n        skills: [\n            \"마케팅 콘텐츠 제작\",\n            \"인스타그램 관리\",\n            \"트위터 관리\",\n            \"블로그 글 작성\"\n        ]\n    },\n    {\n        name: \"Abhishek Gupta\",\n        title: \"마케팅\",\n        experience: \"1y+\",\n        countryFlag: \"/flag.png\",\n        avatar: \"/avatar.jpg\",\n        skills: [\n            \"마케팅 콘텐츠 제작\",\n            \"인스타그램 관리\",\n            \"트위터 관리\",\n            \"블로그 글 작성\"\n        ]\n    },\n    {\n        name: \"Abhishek Gupta\",\n        title: \"마케팅\",\n        experience: \"3y+\",\n        countryFlag: \"/flag.png\",\n        avatar: \"/avatar.jpg\",\n        skills: [\n            \"마케팅 콘텐츠 제작\",\n            \"인스타그램 관리\",\n            \"트위터 관리\",\n            \"블로그 글 작성\"\n        ]\n    }\n];\nfunction ProfileCarousel() {\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    // Go to the next slide\n    const nextSlide = ()=>{\n        setCurrentIndex((prevIndex)=>(prevIndex + 1) % profiles.length);\n    };\n    // Go to the previous slide\n    const prevSlide = ()=>{\n        setCurrentIndex((prevIndex)=>(prevIndex - 1 + profiles.length) % profiles.length);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_card_carousel__WEBPACK_IMPORTED_MODULE_1___default()), {\n        autoplay: true,\n        autoplay_speed: 2500,\n        showArrows: true,\n        pauseOnHover: true,\n        leftArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            children: \"←\"\n        }, void 0, false, {\n            fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n            lineNumber: 71,\n            columnNumber: 18\n        }, void 0),\n        rightArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            children: \"→\"\n        }, void 0, false, {\n            fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n            lineNumber: 72,\n            columnNumber: 19\n        }, void 0),\n        children: profiles.map((profile, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"keen-slider__slide flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-xl shadow-lg p-4 w-60\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center mb-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: _app_assets_avtar_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"Profile picture\",\n                                className: \"rounded-full\",\n                                width: 100,\n                                height: 100\n                            }, void 0, false, {\n                                fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-black text-2xl font-bold\",\n                                    children: profile.name\n                                }, void 0, false, {\n                                    fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-blue-500 font-bold\",\n                                    children: [\n                                        profile.title,\n                                        \" • \",\n                                        profile.experience\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: profile.skills.map((skill, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"inline-block bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm\",\n                                    children: skill\n                                }, index, false, {\n                                    fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, this)\n            }, idx, false, {\n                fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/home/developer/Documents/Desktop/hyperhire/src/app/components/ProfileCarousel/index.jsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(ProfileCarousel, \"tusBbsahUVevXfyh6oH5R6YDC9Q=\");\n_c = ProfileCarousel;\nvar _c;\n$RefreshReg$(_c, \"ProfileCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9maWxlQ2Fyb3VzZWwvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMkM7QUFDWjtBQUNhO0FBQ1g7QUFFakMsTUFBTUksV0FBVztJQUNmO1FBQ0VDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxZQUFZO1FBQ1pDLGFBQWE7UUFDYkMsUUFBUTtRQUNSQyxRQUFRO1lBQ047WUFDQTtZQUNBO1lBQ0E7U0FDRDtJQUNIO0lBQ0E7UUFDRUwsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFlBQVk7UUFDWkMsYUFBYTtRQUNiQyxRQUFRO1FBQ1JDLFFBQVE7WUFDTjtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQTtRQUNFTCxNQUFNO1FBQ05DLE9BQU87UUFDUEMsWUFBWTtRQUNaQyxhQUFhO1FBQ2JDLFFBQVE7UUFDUkMsUUFBUTtZQUNOO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7SUFDSDtDQUVEO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBRWpELHVCQUF1QjtJQUN2QixNQUFNVyxZQUFZO1FBQ2hCRCxnQkFBZ0IsQ0FBQ0UsWUFBYyxDQUFDQSxZQUFZLEtBQUtYLFNBQVNZLE1BQU07SUFDbEU7SUFFQSwyQkFBMkI7SUFDM0IsTUFBTUMsWUFBWTtRQUNoQkosZ0JBQ0UsQ0FBQ0UsWUFBYyxDQUFDQSxZQUFZLElBQUlYLFNBQVNZLE1BQU0sSUFBSVosU0FBU1ksTUFBTTtJQUV0RTtJQUVBLHFCQUNFLDhEQUFDaEIsNERBQVFBO1FBQ1BrQixVQUFVO1FBQ1ZDLGdCQUFnQjtRQUNoQkMsWUFBWTtRQUNaQyxjQUFjO1FBQ2RDLHlCQUFXLDhEQUFDQztzQkFBTzs7Ozs7O1FBQ25CQywwQkFBWSw4REFBQ0Q7c0JBQU87Ozs7OztrQkFFbkJuQixTQUFTcUIsR0FBRyxDQUFDLENBQUNDLFNBQVNDLG9CQUN0Qiw4REFBQ0M7Z0JBQWNDLFdBQVU7MEJBQ3ZCLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDNUIsa0RBQUtBO2dDQUNKNkIsS0FBSzVCLDZEQUFNQTtnQ0FDWDZCLEtBQUk7Z0NBQ0pGLFdBQVU7Z0NBQ1ZHLE9BQU87Z0NBQ1BDLFFBQVE7Ozs7Ozs7Ozs7O3NDQUdaLDhEQUFDTDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNLO29DQUFHTCxXQUFVOzhDQUFpQ0gsUUFBUXJCLElBQUk7Ozs7Ozs4Q0FDM0QsOERBQUM4QjtvQ0FBRU4sV0FBVTs7d0NBQ1ZILFFBQVFwQixLQUFLO3dDQUFDO3dDQUFJb0IsUUFBUW5CLFVBQVU7Ozs7Ozs7Ozs7Ozs7c0NBR3pDLDhEQUFDcUI7NEJBQUlDLFdBQVU7c0NBQ1pILFFBQVFoQixNQUFNLENBQUNlLEdBQUcsQ0FBQyxDQUFDVyxPQUFPQyxzQkFDMUIsOERBQUNDO29DQUVDVCxXQUFVOzhDQUVUTzttQ0FISUM7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFwQkxWOzs7Ozs7Ozs7O0FBZ0NsQjtHQXpEd0JoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJvZmlsZUNhcm91c2VsL2luZGV4LmpzeD8xNzU5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1jYXJkLWNhcm91c2VsXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkAvYXBwL2Fzc2V0cy9hdnRhci5wbmdcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHByb2ZpbGVzID0gW1xuICB7XG4gICAgbmFtZTogXCJBYmhpc2hlayBHdXB0YVwiLFxuICAgIHRpdGxlOiBcIuuniOy8gO2MhVwiLFxuICAgIGV4cGVyaWVuY2U6IFwiMnkrXCIsXG4gICAgY291bnRyeUZsYWc6IFwiL2ZsYWcucG5nXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aCBmb3IgdGhlIGZsYWdcbiAgICBhdmF0YXI6IFwiL2F2YXRhci5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBhdmF0YXIgaW1hZ2UgcGF0aFxuICAgIHNraWxsczogW1xuICAgICAgXCLrp4jsvIDtjIUg7L2Y7YWQ7LigIOygnOyekVwiLFxuICAgICAgXCLsnbjsiqTtg4Dqt7jrnqgg6rSA66asXCIsXG4gICAgICBcIu2KuOychO2EsCDqtIDrpqxcIixcbiAgICAgIFwi67iU66Gc6re4IOq4gCDsnpHshLFcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBYmhpc2hlayBHdXB0YVwiLFxuICAgIHRpdGxlOiBcIuuniOy8gO2MhVwiLFxuICAgIGV4cGVyaWVuY2U6IFwiMXkrXCIsXG4gICAgY291bnRyeUZsYWc6IFwiL2ZsYWcucG5nXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aCBmb3IgdGhlIGZsYWdcbiAgICBhdmF0YXI6IFwiL2F2YXRhci5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBhdmF0YXIgaW1hZ2UgcGF0aFxuICAgIHNraWxsczogW1xuICAgICAgXCLrp4jsvIDtjIUg7L2Y7YWQ7LigIOygnOyekVwiLFxuICAgICAgXCLsnbjsiqTtg4Dqt7jrnqgg6rSA66asXCIsXG4gICAgICBcIu2KuOychO2EsCDqtIDrpqxcIixcbiAgICAgIFwi67iU66Gc6re4IOq4gCDsnpHshLFcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBYmhpc2hlayBHdXB0YVwiLFxuICAgIHRpdGxlOiBcIuuniOy8gO2MhVwiLFxuICAgIGV4cGVyaWVuY2U6IFwiM3krXCIsXG4gICAgY291bnRyeUZsYWc6IFwiL2ZsYWcucG5nXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aCBmb3IgdGhlIGZsYWdcbiAgICBhdmF0YXI6IFwiL2F2YXRhci5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBhdmF0YXIgaW1hZ2UgcGF0aFxuICAgIHNraWxsczogW1xuICAgICAgXCLrp4jsvIDtjIUg7L2Y7YWQ7LigIOygnOyekVwiLFxuICAgICAgXCLsnbjsiqTtg4Dqt7jrnqgg6rSA66asXCIsXG4gICAgICBcIu2KuOychO2EsCDqtIDrpqxcIixcbiAgICAgIFwi67iU66Gc6re4IOq4gCDsnpHshLFcIixcbiAgICBdLFxuICB9LFxuICAvLyBBZGQgbW9yZSBwcm9maWxlcyBoZXJlLi4uXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlQ2Fyb3VzZWwoKSB7XG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICAvLyBHbyB0byB0aGUgbmV4dCBzbGlkZVxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEluZGV4KChwcmV2SW5kZXgpID0+IChwcmV2SW5kZXggKyAxKSAlIHByb2ZpbGVzLmxlbmd0aCk7XG4gIH07XG5cbiAgLy8gR28gdG8gdGhlIHByZXZpb3VzIHNsaWRlXG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50SW5kZXgoXG4gICAgICAocHJldkluZGV4KSA9PiAocHJldkluZGV4IC0gMSArIHByb2ZpbGVzLmxlbmd0aCkgJSBwcm9maWxlcy5sZW5ndGhcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENhcm91c2VsXG4gICAgICBhdXRvcGxheT17dHJ1ZX1cbiAgICAgIGF1dG9wbGF5X3NwZWVkPXsyNTAwfVxuICAgICAgc2hvd0Fycm93cz17dHJ1ZX1cbiAgICAgIHBhdXNlT25Ib3Zlcj17dHJ1ZX1cbiAgICAgIGxlZnRBcnJvdz17PGJ1dHRvbj7ihpA8L2J1dHRvbj59XG4gICAgICByaWdodEFycm93PXs8YnV0dG9uPuKGkjwvYnV0dG9uPn1cbiAgICA+XG4gICAgICB7cHJvZmlsZXMubWFwKChwcm9maWxlLCBpZHgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwia2Vlbi1zbGlkZXJfX3NsaWRlIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LWxnIHAtNCB3LTYwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e0F2YXRhcn1cbiAgICAgICAgICAgICAgICBhbHQ9XCJQcm9maWxlIHBpY3R1cmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHRleHQtMnhsIGZvbnQtYm9sZFwiPntwcm9maWxlLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICB7cHJvZmlsZS50aXRsZX0g4oCiIHtwcm9maWxlLmV4cGVyaWVuY2V9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAge3Byb2ZpbGUuc2tpbGxzLm1hcCgoc2tpbGwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBweS0xIHB4LTMgcm91bmRlZC1mdWxsIHRleHQtc21cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtza2lsbH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9DYXJvdXNlbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsIkltYWdlIiwiQXZhdGFyIiwidXNlU3RhdGUiLCJwcm9maWxlcyIsIm5hbWUiLCJ0aXRsZSIsImV4cGVyaWVuY2UiLCJjb3VudHJ5RmxhZyIsImF2YXRhciIsInNraWxscyIsIlByb2ZpbGVDYXJvdXNlbCIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsIm5leHRTbGlkZSIsInByZXZJbmRleCIsImxlbmd0aCIsInByZXZTbGlkZSIsImF1dG9wbGF5IiwiYXV0b3BsYXlfc3BlZWQiLCJzaG93QXJyb3dzIiwicGF1c2VPbkhvdmVyIiwibGVmdEFycm93IiwiYnV0dG9uIiwicmlnaHRBcnJvdyIsIm1hcCIsInByb2ZpbGUiLCJpZHgiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgyIiwicCIsInNraWxsIiwiaW5kZXgiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProfileCarousel/index.jsx\n"));

/***/ })

});