"use strict";
exports.id = 3735;
exports.ids = [3735];
exports.modules = {

/***/ 2526:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1026);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);





function Breadcrumb() {
    const router = useRouter();
    const currentPathData = breadcrumbData.find((item)=>item.path === router.pathname);
    const lastPathSegment = currentPathData?.path.split("/").pop();
    return /*#__PURE__*/ _jsx("div", {
        className: "inner-page-banner",
        children: /*#__PURE__*/ _jsx("div", {
            className: "banner-wrapper",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "container-fluid",
                children: [
                    /*#__PURE__*/ _jsxs("ul", {
                        className: "breadcrumb-list",
                        children: [
                            /*#__PURE__*/ _jsx("li", {
                                children: /*#__PURE__*/ _jsx(Link, {
                                    legacyBehavior: true,
                                    href: "/",
                                    children: /*#__PURE__*/ _jsx("a", {
                                        children: "Home"
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                style: {
                                    textTransform: "capitalize"
                                },
                                children: lastPathSegment
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "banner-main-content-wrap",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "col-xl-6 col-lg-7 d-flex align-items-center",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "banner-content",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "sub-title",
                                                children: currentPathData?.sub_title || "Our Brief History"
                                            }),
                                            /*#__PURE__*/ _jsx("h1", {
                                                children: currentPathData?.title || "Our Brief History"
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "customar-review",
                                                children: /*#__PURE__*/ _jsxs("ul", {
                                                    children: [
                                                        /*#__PURE__*/ _jsx("li", {
                                                            children: /*#__PURE__*/ _jsxs("a", {
                                                                href: "#",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "review-top",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                className: "logo",
                                                                                children: /*#__PURE__*/ _jsx("img", {
                                                                                    src: "assets/img/home1/icon/trstpilot-logo.svg",
                                                                                    alt: ""
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                className: "star",
                                                                                children: /*#__PURE__*/ _jsx("img", {
                                                                                    src: "assets/img/home1/icon/trustpilot-star.svg",
                                                                                    alt: ""
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: "content",
                                                                        children: /*#__PURE__*/ _jsxs("ul", {
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxs("li", {
                                                                                    children: [
                                                                                        "Trust Rating ",
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            children: "5.0"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            children: "2348"
                                                                                        }),
                                                                                        " Reviews"
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("li", {
                                                            children: /*#__PURE__*/ _jsxs("a", {
                                                                href: "#",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "review-top",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                className: "logo",
                                                                                children: /*#__PURE__*/ _jsx("img", {
                                                                                    src: "assets/img/home1/icon/google-logo.svg",
                                                                                    alt: ""
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                className: "star",
                                                                                children: /*#__PURE__*/ _jsxs("ul", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("li", {
                                                                                            children: /*#__PURE__*/ _jsx("i", {
                                                                                                className: "bi bi-star-fill"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("li", {
                                                                                            children: /*#__PURE__*/ _jsx("i", {
                                                                                                className: "bi bi-star-fill"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("li", {
                                                                                            children: /*#__PURE__*/ _jsx("i", {
                                                                                                className: "bi bi-star-fill"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("li", {
                                                                                            children: /*#__PURE__*/ _jsx("i", {
                                                                                                className: "bi bi-star-fill"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("li", {
                                                                                            children: /*#__PURE__*/ _jsx("i", {
                                                                                                className: "bi bi-star-half"
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("div", {
                                                                        className: "content",
                                                                        children: /*#__PURE__*/ _jsxs("ul", {
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxs("li", {
                                                                                    children: [
                                                                                        "Trust Rating ",
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            children: "5.0"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            children: "2348"
                                                                                        }),
                                                                                        " Reviews"
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "col-xl-6 col-lg-5 d-lg-flex d-none align-items-center justify-content-end",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "banner-img",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: currentPathData?.img_src || "assets/img/inner-page/inner-banner-img.png",
                                            alt: ""
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Breadcrumb)));


/***/ }),

/***/ 3735:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Home1_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2780);
/* harmony import */ var _components_Footer_Footer1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8230);
/* harmony import */ var _components_Home1_Topbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3747);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2526);
/* harmony import */ var _components_Home1_Modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9998);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Home1_Topbar__WEBPACK_IMPORTED_MODULE_4__, _components_Home1_Modals__WEBPACK_IMPORTED_MODULE_6__]);
([_components_Home1_Topbar__WEBPACK_IMPORTED_MODULE_4__, _components_Home1_Modals__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function MainLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home1_Topbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home1_Modals__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home1_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_Footer1__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;