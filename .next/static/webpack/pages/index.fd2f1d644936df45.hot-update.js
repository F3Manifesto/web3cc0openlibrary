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

/***/ "./components/Item/item.js":
/*!*********************************!*\
  !*** ./components/Item/item.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/Item/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_api_projects_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/api/projects.json */ \"./pages/api/projects.json\");\n\n\n\n\nvar _this = undefined;\nvar Item = function(param) {\n    var ProjectData1 = param.ProjectData;\n    var _this1 = _this;\n    // All: 'All',\n    // NFTs: 'NFTs',\n    // Protocol: 'Protocol',\n    // PFP: 'PFP',\n    // DeFi: 'DeFi',\n    // Gaming: 'Gaming',\n    // Metaverse: 'Metaverse',\n    // Fashion: 'Fashion',\n    // Modeling: 'Modeling',\n    // Publishing: 'Publishing',\n    // Recreational: 'Recreational',\n    // Dev: 'Dev',\n    // Music: 'Misc',\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().section4),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().gallery),\n                    children: ProjectData1.map(function(project) {\n                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().galleryItem),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().category),\n                                    children: project.category\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/Code/web3cc0openlibrary/components/Item/item.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 19\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: project.url,\n                                    target: \"_blank\",\n                                    rel: \"noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().galleryImage),\n                                        src: project.image\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/Code/web3cc0openlibrary/components/Item/item.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 76\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/Code/web3cc0openlibrary/components/Item/item.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 19\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title2),\n                                    children: project.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/Code/web3cc0openlibrary/components/Item/item.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 19\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().description),\n                                    children: project.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/Code/web3cc0openlibrary/components/Item/item.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 19\n                                }, _this1)\n                            ]\n                        }, project.id, true, {\n                            fileName: \"/Users/mac/Documents/Code/web3cc0openlibrary/components/Item/item.js\",\n                            lineNumber: 35,\n                            columnNumber: 19\n                        }, _this1));\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/Code/web3cc0openlibrary/components/Item/item.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/Code/web3cc0openlibrary/components/Item/item.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Documents/Code/web3cc0openlibrary/components/Item/item.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_c = Item;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);\n{}var _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0l0ZW0vaXRlbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0Q7QUFDVDtBQUNjOztBQUd2RCxHQUFLLENBQUNLLElBQUksR0FBRyxRQUFRLFFBQWEsQ0FBQztRQUFuQkQsWUFBVyxTQUFYQSxXQUFXOztJQUduQixFQUFjO0lBQ2QsRUFBZ0I7SUFDaEIsRUFBd0I7SUFDeEIsRUFBYztJQUNkLEVBQWdCO0lBQ2hCLEVBQW9CO0lBQ3BCLEVBQTBCO0lBQzFCLEVBQXNCO0lBQ3RCLEVBQXdCO0lBQ3hCLEVBQTRCO0lBQzVCLEVBQWdDO0lBQ2hDLEVBQWM7SUFDZCxFQUFpQjtJQUl2QixNQUFNOzhGQUVERSxDQUFPO1lBQUNDLFNBQVMsRUFBRUoscUVBQWU7a0dBQ2hDTSxDQUFHO2dCQUFDRixTQUFTLEVBQUVKLHNFQUFnQjtzR0FHN0JNLENBQUc7b0JBQUNGLFNBQVMsRUFBRUosb0VBQWM7OEJBRTlCQyxZQUFXLENBQUNRLEdBQUcsQ0FBRSxRQUFRLENBQVBDLE9BQU8sRUFBSyxDQUFDO3dCQUN6QixNQUFNLDZFQUNISixDQUFHOzRCQUFDRixTQUFTLEVBQUVKLHdFQUFrQjs7NEdBQ2pDWSxDQUFJO29DQUFDUixTQUFTLEVBQUVKLHFFQUFlOzhDQUFJVSxPQUFPLENBQUNHLFFBQVE7Ozs7Ozs0R0FDbkRDLENBQUM7b0NBQUNDLElBQUksRUFBR0wsT0FBTyxDQUFDTSxHQUFHO29DQUFHQyxNQUFNLEVBQUMsQ0FBUTtvQ0FBQ0MsR0FBRyxFQUFDLENBQVk7MEhBQUVDLENBQUc7d0NBQUNmLFNBQVMsRUFBRUoseUVBQW1CO3dDQUFFcUIsR0FBRyxFQUFHWCxPQUFPLENBQUNZLEtBQUs7Ozs7Ozs7Ozs7OzRHQUNoSGhCLENBQUc7b0NBQUNGLFNBQVMsRUFBRUosbUVBQWE7OENBQUdVLE9BQU8sQ0FBQ2MsS0FBSzs7Ozs7OzRHQUM1Q2xCLENBQUc7b0NBQUNGLFNBQVMsRUFBRUosd0VBQWtCOzhDQUFHVSxPQUFPLENBQUNlLFdBQVc7Ozs7Ozs7MkJBSmZmLE9BQU8sQ0FBQ2dCLEVBQUU7Ozs7O29CQVF2RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9mLENBQUM7S0E1Q0t4QixJQUFJO0FBOENWLCtEQUFlQSxJQUFJO0FBSWYsQ0FBQyxDQWdCYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0l0ZW0vaXRlbS5qcz8zMmVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IFByb2plY3REYXRhIGZyb20gXCIuLi8uLi9wYWdlcy9hcGkvcHJvamVjdHMuanNvblwiXG5cblxuY29uc3QgSXRlbSA9ICh7IFByb2plY3REYXRhIH0pID0+IHtcblxuXG4gICAgICAgIC8vIEFsbDogJ0FsbCcsXG4gICAgICAgIC8vIE5GVHM6ICdORlRzJyxcbiAgICAgICAgLy8gUHJvdG9jb2w6ICdQcm90b2NvbCcsXG4gICAgICAgIC8vIFBGUDogJ1BGUCcsXG4gICAgICAgIC8vIERlRmk6ICdEZUZpJyxcbiAgICAgICAgLy8gR2FtaW5nOiAnR2FtaW5nJyxcbiAgICAgICAgLy8gTWV0YXZlcnNlOiAnTWV0YXZlcnNlJyxcbiAgICAgICAgLy8gRmFzaGlvbjogJ0Zhc2hpb24nLFxuICAgICAgICAvLyBNb2RlbGluZzogJ01vZGVsaW5nJyxcbiAgICAgICAgLy8gUHVibGlzaGluZzogJ1B1Ymxpc2hpbmcnLFxuICAgICAgICAvLyBSZWNyZWF0aW9uYWw6ICdSZWNyZWF0aW9uYWwnLFxuICAgICAgICAvLyBEZXY6ICdEZXYnLFxuICAgICAgICAvLyBNdXNpYzogJ01pc2MnLFxuICAgICBcblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb240fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnl9PlxuICAgICAgICAgIHtcbiAgICAgICAgICBQcm9qZWN0RGF0YS5tYXAoIChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5SXRlbX0ga2V5PXtwcm9qZWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT57IHByb2plY3QuY2F0ZWdvcnkgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBwcm9qZWN0LnVybCB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj48aW1nIGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnlJbWFnZX0gc3JjPXsgcHJvamVjdC5pbWFnZSB9Lz48L2E+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlMn0+e3Byb2plY3QudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57cHJvamVjdC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX0gXG4gICAgXG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtXG4gIDtcblxuICAgICAgICBcbiAgICB7LypcbiAgICAgICAgPGRpdiBpZD1cIm15QnRuQ29udGFpbmVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhY3RpdmVcIiBvbmNsaWNrPVwiZmlsdGVyU2VsZWN0aW9uKCdBbGwnKVwiPkFsbDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBvbmNsaWNrPVwiZmlsdGVyU2VsZWN0aW9uKCdORlRzJylcIj5ORlRzPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIG9uY2xpY2s9XCJmaWx0ZXJTZWxlY3Rpb24oJ1Byb3RvY29sJylcIj5Qcm90b2NvbC9FY29zeXN0ZW08L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgb25jbGljaz1cImZpbHRlclNlbGVjdGlvbignUEZQJylcIj5QRlA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgb25jbGljaz1cImZpbHRlclNlbGVjdGlvbignRGVGaScpXCI+RGVGaTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBvbmNsaWNrPVwiZmlsdGVyU2VsZWN0aW9uKCdHYW1pbmcnKVwiPkdhbWluZzwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBvbmNsaWNrPVwiZmlsdGVyU2VsZWN0aW9uKCdNZXRhdmVyc2UnKVwiPk1ldGF2ZXJzZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBvbmNsaWNrPVwiZmlsdGVyU2VsZWN0aW9uKCdNdXNpYycpXCI+TXVzaWM8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgb25jbGljaz1cImZpbHRlclNlbGVjdGlvbignRmFzaGlvbicpXCI+RmFzaGlvbjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBvbmNsaWNrPVwiZmlsdGVyU2VsZWN0aW9uKCdNb2RlbGluZycpXCI+TW9kZWxpbmc8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgb25jbGljaz1cImZpbHRlclNlbGVjdGlvbignUHVibGlzaGluZycpXCI+UHVibGlzaGluZzwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBvbmNsaWNrPVwiZmlsdGVyU2VsZWN0aW9uKCdSZWNyZWF0aW9uYWwnKVwiPlJlY3JlYXRpb25hbDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBvbmNsaWNrPVwiZmlsdGVyU2VsZWN0aW9uKCdEZXYnKVwiPkRldjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBvbmNsaWNrPVwiZmlsdGVyU2VsZWN0aW9uKCdNaXNjJylcIj5NaXNjPC9idXR0b24+XG4gICAgICAgIDwvZGl2PiAqL30iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIlByb2plY3REYXRhIiwiSXRlbSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJzZWN0aW9uNCIsImRpdiIsImNvbnRhaW5lciIsImdhbGxlcnkiLCJtYXAiLCJwcm9qZWN0IiwiZ2FsbGVyeUl0ZW0iLCJzcGFuIiwiY2F0ZWdvcnkiLCJhIiwiaHJlZiIsInVybCIsInRhcmdldCIsInJlbCIsImltZyIsImdhbGxlcnlJbWFnZSIsInNyYyIsImltYWdlIiwidGl0bGUyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Item/item.js\n");

/***/ })

});