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

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_projects_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/projects.json */ \"./src/data/projects.json\");\n/* harmony import */ var _styles_page_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/page.module.scss */ \"./src/styles/page.module.scss\");\n/* harmony import */ var _styles_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_page_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_SplineViewer_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SplineViewer.jsx */ \"./src/components/SplineViewer.jsx\");\n/* harmony import */ var _components_TextReveal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TextReveal */ \"./src/components/TextReveal.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_javascript_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../public/javascript.svg */ \"./public/javascript.svg\");\n/* harmony import */ var _public_php_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../public/php.svg */ \"./public/php.svg\");\n/* harmony import */ var _public_mysql_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../public/mysql.svg */ \"./public/mysql.svg\");\n/* harmony import */ var _public_html5_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../public/html5.svg */ \"./public/html5.svg\");\n/* harmony import */ var _public_css3_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../public/css3.svg */ \"./public/css3.svg\");\n/* harmony import */ var _public_sass_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../public/sass.svg */ \"./public/sass.svg\");\n/* harmony import */ var _public_nextjs_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../public/nextjs.svg */ \"./public/nextjs.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            const date = new Date();\n            const options = {\n                timeZone: \"Europe/Paris\",\n                hour: \"numeric\",\n                minute: \"numeric\"\n            };\n            setTime(new Intl.DateTimeFormat(\"fr-FR\", options).format(date));\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    const programmingLanguages = [\n        {\n            name: \"JavaScript\",\n            image: _public_javascript_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n        },\n        {\n            name: \"PHP\",\n            image: _public_php_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n        },\n        {\n            name: \"MySQL\",\n            image: _public_mysql_svg__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n        },\n        {\n            name: \"HTML\",\n            image: _public_html5_svg__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n        },\n        {\n            name: \"CSS\",\n            image: _public_css3_svg__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n        },\n        {\n            name: \"Sass\",\n            image: _public_sass_svg__WEBPACK_IMPORTED_MODULE_13__[\"default\"]\n        },\n        {\n            name: \"Next.js\",\n            image: _public_nextjs_svg__WEBPACK_IMPORTED_MODULE_14__[\"default\"]\n        }\n    ];\n    // Répéter les langages de programmation jusqu'à ce qu'ils soient tous affichés\n    const allProgrammingLanguages = [\n        ...programmingLanguages,\n        ...programmingLanguages\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_styles_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().head),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headTitle),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SplineViewer_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Alexandre Ghmir\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Multimedia Student\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headBottom),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"\\uD83D\\uDCCD Based in Paris, France\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"LOCAL TIME : \",\n                                        time\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    id: \"about\",\n                    className: (_styles_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().about),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutImage)\n                        }, void 0, false, {\n                            fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutText),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"About me\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextReveal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    text: \"I'm a multimedia student based in Paris, France. I'm passionate about web development, design, and digital art. I'm currently studying at Gustave Eiffel, a university in Paris. I'm always looking for new opportunities to learn and grow. Feel free to contact me if you want to work together or just to say hi!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().carousel),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().move),\n                                        children: allProgrammingLanguages.map((param, index)=>{\n                                            let { name, image } = param;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                                        src: image,\n                                                        alt: name,\n                                                        width: 25,\n                                                        height: 25\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    name\n                                                ]\n                                            }, \"\".concat(name, \"-\").concat(index), true, {\n                                                fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 19\n                                            }, this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutButton),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/cv.pdf\",\n                                        download: \"ALEXANDRE GHMIR.pdf\",\n                                        children: \"Get my resume\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_styles_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().projects),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            id: \"projects\",\n                            children: \"My projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().projectsContainer),\n                            children: _data_projects_json__WEBPACK_IMPORTED_MODULE_3__.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\".concat(project.slug),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().project),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: project.id\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: project.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: project.date\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().projectImage),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: project.image,\n                                                    alt: project.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 17\n                                    }, this)\n                                }, project.id, false, {\n                                    fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alex/Documents/portfolio/portfolio/src/pages/index.jsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"PsMgnLgzzQiamQWS0F3M3yb0/nk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlDLFdBQVcvQixtRkFBd0I7c0NBQ3JDRCxvREFBWSxDQUFDLENBQUMwRCx3QkFDYiw4REFBQzNELGtEQUFJQTtvQ0FBQ3dELE1BQU0sSUFBaUIsT0FBYkcsUUFBUUMsSUFBSTs4Q0FDMUIsNEVBQUM1Qjt3Q0FBSUMsV0FBVy9CLHlFQUFjOzswREFDNUIsOERBQUMyRDswREFBSUYsUUFBUW5CLEVBQUU7Ozs7OzswREFDZiw4REFBQ3NCOzBEQUFJSCxRQUFRSSxLQUFLOzs7Ozs7MERBQ2xCLDhEQUFDeEI7MERBQUdvQixRQUFRekMsSUFBSTs7Ozs7OzBEQUNoQiw4REFBQ2M7Z0RBQUlDLFdBQVcvQiw4RUFBbUI7MERBQ2pDLDRFQUFDK0Q7b0RBQUlmLEtBQUtTLFFBQVE3QixLQUFLO29EQUFFcUIsS0FBS1EsUUFBUUksS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBTlpKLFFBQVFuQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCN0Q7R0F0RndCM0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzeD9kMzVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBwcm9qZWN0cyBmcm9tICcuLi9kYXRhL3Byb2plY3RzLmpzb24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2UubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBTcGxpbmVWaWV3ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TcGxpbmVWaWV3ZXIuanN4JztcbmltcG9ydCBUZXh0UmV2ZWFsIGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dFJldmVhbCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgSmF2YVNjcmlwdEltYWdlIGZyb20gJy9wdWJsaWMvamF2YXNjcmlwdC5zdmcnO1xuaW1wb3J0IFBIUEltYWdlIGZyb20gJy9wdWJsaWMvcGhwLnN2Zyc7XG5pbXBvcnQgTXlTUUxJbWFnZSBmcm9tICcvcHVibGljL215c3FsLnN2Zyc7XG5pbXBvcnQgSFRNTEltYWdlIGZyb20gJy9wdWJsaWMvaHRtbDUuc3ZnJztcbmltcG9ydCBDU1NJbWFnZSBmcm9tICcvcHVibGljL2NzczMuc3ZnJztcbmltcG9ydCBTYXNzSW1hZ2UgZnJvbSAnL3B1YmxpYy9zYXNzLnN2Zyc7XG5pbXBvcnQgTmV4dEpTSW1hZ2UgZnJvbSAnL3B1YmxpYy9uZXh0anMuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHRpbWVab25lOiAnRXVyb3BlL1BhcmlzJyxcbiAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgIH07XG4gICAgICBzZXRUaW1lKG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdmci1GUicsIG9wdGlvbnMpLmZvcm1hdChkYXRlKSk7XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcHJvZ3JhbW1pbmdMYW5ndWFnZXMgPSBbXG4gICAgeyBuYW1lOiAnSmF2YVNjcmlwdCcsIGltYWdlOiBKYXZhU2NyaXB0SW1hZ2UgfSxcbiAgICB7IG5hbWU6ICdQSFAnLCBpbWFnZTogUEhQSW1hZ2UgfSxcbiAgICB7IG5hbWU6ICdNeVNRTCcsIGltYWdlOiBNeVNRTEltYWdlIH0sXG4gICAgeyBuYW1lOiAnSFRNTCcsIGltYWdlOiBIVE1MSW1hZ2UgfSxcbiAgICB7IG5hbWU6ICdDU1MnLCBpbWFnZTogQ1NTSW1hZ2UgfSxcbiAgICB7IG5hbWU6ICdTYXNzJywgaW1hZ2U6IFNhc3NJbWFnZSB9LFxuICAgIHsgbmFtZTogJ05leHQuanMnLCBpbWFnZTogTmV4dEpTSW1hZ2UgfSxcbiAgXTtcblxuICAvLyBSw6lww6l0ZXIgbGVzIGxhbmdhZ2VzIGRlIHByb2dyYW1tYXRpb24ganVzcXUnw6AgY2UgcXUnaWxzIHNvaWVudCB0b3VzIGFmZmljaMOpc1xuICBjb25zdCBhbGxQcm9ncmFtbWluZ0xhbmd1YWdlcyA9IFsuLi5wcm9ncmFtbWluZ0xhbmd1YWdlcywgLi4ucHJvZ3JhbW1pbmdMYW5ndWFnZXNdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZFRpdGxlfT5cbiAgICAgICAgICAgIDxTcGxpbmVWaWV3ZXIgLz5cbiAgICAgICAgICAgIDxoMT5BbGV4YW5kcmUgR2htaXI8L2gxPlxuICAgICAgICAgICAgPGgxPk11bHRpbWVkaWEgU3R1ZGVudDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkQm90dG9tfT5cbiAgICAgICAgICAgIDxwPvCfk40gQmFzZWQgaW4gUGFyaXMsIEZyYW5jZTwvcD5cbiAgICAgICAgICAgIDxwPkxPQ0FMIFRJTUUgOiB7dGltZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBpZD1cImFib3V0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRJbWFnZX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dFRleHR9PlxuICAgICAgICAgICAgPGgxPkFib3V0IG1lPC9oMT5cbiAgICAgICAgICAgIDxUZXh0UmV2ZWFsIHRleHQ9XCJJJ20gYSBtdWx0aW1lZGlhIHN0dWRlbnQgYmFzZWQgaW4gUGFyaXMsIEZyYW5jZS4gSSdtIHBhc3Npb25hdGUgYWJvdXQgd2ViIGRldmVsb3BtZW50LCBkZXNpZ24sIGFuZCBkaWdpdGFsIGFydC4gSSdtIGN1cnJlbnRseSBzdHVkeWluZyBhdCBHdXN0YXZlIEVpZmZlbCwgYSB1bml2ZXJzaXR5IGluIFBhcmlzLiBJJ20gYWx3YXlzIGxvb2tpbmcgZm9yIG5ldyBvcHBvcnR1bml0aWVzIHRvIGxlYXJuIGFuZCBncm93LiBGZWVsIGZyZWUgdG8gY29udGFjdCBtZSBpZiB5b3Ugd2FudCB0byB3b3JrIHRvZ2V0aGVyIG9yIGp1c3QgdG8gc2F5IGhpIVwiPjwvVGV4dFJldmVhbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWx9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vdmV9PlxuICAgICAgICAgICAgICAgIHthbGxQcm9ncmFtbWluZ0xhbmd1YWdlcy5tYXAoKHsgbmFtZSwgaW1hZ2UgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YCR7bmFtZX0tJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD17bmFtZX0gd2lkdGg9ezI1fSBoZWlnaHQ9ezI1fSAvPlxuICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dEJ1dHRvbn0+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvY3YucGRmXCIgZG93bmxvYWQ9XCJBTEVYQU5EUkUgR0hNSVIucGRmXCI+R2V0IG15IHJlc3VtZTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdHN9PlxuICAgICAgICAgIDxoMSBpZD1cInByb2plY3RzXCI+TXkgcHJvamVjdHM8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdHNDb250YWluZXJ9PlxuICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7cHJvamVjdC5zbHVnfWB9IGtleT17cHJvamVjdC5pZH0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdH0+XG4gICAgICAgICAgICAgICAgICA8aDM+e3Byb2plY3QuaWR9PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxoMj57cHJvamVjdC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgPHA+e3Byb2plY3QuZGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RJbWFnZX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9qZWN0LmltYWdlfSBhbHQ9e3Byb2plY3QudGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwicHJvamVjdHMiLCJzdHlsZXMiLCJTcGxpbmVWaWV3ZXIiLCJUZXh0UmV2ZWFsIiwiSW1hZ2UiLCJKYXZhU2NyaXB0SW1hZ2UiLCJQSFBJbWFnZSIsIk15U1FMSW1hZ2UiLCJIVE1MSW1hZ2UiLCJDU1NJbWFnZSIsIlNhc3NJbWFnZSIsIk5leHRKU0ltYWdlIiwiSG9tZSIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImRhdGUiLCJEYXRlIiwib3B0aW9ucyIsInRpbWVab25lIiwiaG91ciIsIm1pbnV0ZSIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsImZvcm1hdCIsImNsZWFySW50ZXJ2YWwiLCJwcm9ncmFtbWluZ0xhbmd1YWdlcyIsIm5hbWUiLCJpbWFnZSIsImFsbFByb2dyYW1taW5nTGFuZ3VhZ2VzIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImhlYWQiLCJoZWFkVGl0bGUiLCJoMSIsImhlYWRCb3R0b20iLCJwIiwiaWQiLCJhYm91dCIsImFib3V0SW1hZ2UiLCJhYm91dFRleHQiLCJ0ZXh0IiwiY2Fyb3VzZWwiLCJtb3ZlIiwibWFwIiwiaW5kZXgiLCJzcGFuIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJhYm91dEJ1dHRvbiIsImEiLCJocmVmIiwiZG93bmxvYWQiLCJwcm9qZWN0c0NvbnRhaW5lciIsInByb2plY3QiLCJzbHVnIiwiaDMiLCJoMiIsInRpdGxlIiwicHJvamVjdEltYWdlIiwiaW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n"));

/***/ })

});