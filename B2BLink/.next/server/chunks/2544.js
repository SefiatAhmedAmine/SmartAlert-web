exports.id = 2544;
exports.ids = [2544];
exports.modules = {

/***/ 8657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Preloader = ({ onClose })=>{
    const [isPreloaderVisible, setIsPreloaderVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [isPreloaderClosed, setIsPreloaderClosed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleCloseClick = ()=>{
        setIsPreloaderClosed(true); // Set a state variable to track that the preloader is closed
        onClose(); // Call the onClose function passed from the parent component
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Hide the preloader after a delay (1600 milliseconds)
        const timeoutId = setTimeout(()=>{
            setIsPreloaderVisible(false);
        }, 3000);
        // Cleanup the timeout when the component unmounts
        return ()=>clearTimeout(timeoutId);
    }, []);
    // Define the class names for the egns-preloader element
    const preloaderClassNames = `egns-preloader ${isPreloaderClosed ? "close" : ""}`;
    return isPreloaderVisible && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: preloaderClassNames,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "preloader-close-btn",
                onClick: handleCloseClick,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "bi bi-x-lg"
                        }),
                        " Close"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row d-flex justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "circle-border",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "moving-circle"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "moving-circle"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "moving-circle"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                    width: "180px",
                                    height: "150px",
                                    viewBox: "0 0 187.3 93.7",
                                    preserveAspectRatio: "xMidYMid meet",
                                    style: {
                                        left: "50%",
                                        top: "50%",
                                        position: "absolute",
                                        transform: "translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            stroke: "#D90A2C",
                                            id: "outline",
                                            fill: "none",
                                            strokeWidth: 4,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeMiterlimit: 10,
                                            d: "M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            id: "outline-bg",
                                            opacity: "0.05",
                                            fill: "none",
                                            stroke: "#959595",
                                            strokeWidth: 4,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeMiterlimit: 10,
                                            d: "M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preloader);


/***/ }),

/***/ 1285:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ AuthProvider),
/* harmony export */   a: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9824);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_2__]);
_utils_api__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AuthProvider = ({ children })=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const login = async (email, password)=>{
        const data = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__/* .login */ .x4)(email, password);
        setUser(data);
    };
    const signup = async (userData)=>{
        const data = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__/* .signup */ .IU)(userData);
        setUser(data);
    };
    const logout = async ()=>{
        setUser(null);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user,
            login,
            signup,
            logout
        },
        children: children
    });
};
const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ CarProvider),
/* harmony export */   o: () => (/* binding */ useCar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CarContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useCar = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CarContext);
};
const CarProvider = ({ children })=>{
    const [car, setCar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarContext.Provider, {
        value: {
            car,
            setCar
        },
        children: children
    });
};


/***/ }),

/***/ 8375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_css_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3059);
/* harmony import */ var _public_assets_css_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(838);
/* harmony import */ var _public_assets_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1488);
/* harmony import */ var _public_assets_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8984);
/* harmony import */ var _public_assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_assets_css_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1408);
/* harmony import */ var _public_assets_css_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_assets_css_nice_select_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(271);
/* harmony import */ var _public_assets_css_nice_select_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_nice_select_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1897);
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8825);
/* harmony import */ var _public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_common_Preloader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8657);
/* harmony import */ var _src_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1285);
/* harmony import */ var _src_contexts_CarContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2505);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4595);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_13__]);
_src_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














 // Import the CarProvider



function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(true);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_17__.useRouter)();
    const handlePreloaderClose = ()=>{
        setLoading(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        // Simulate loading for 3 seconds (adjust as needed)
        setTimeout(()=>{
            setLoading(false);
        }, 3000);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        __webpack_require__.e(/* import() */ 6332).then(__webpack_require__.t.bind(__webpack_require__, 6332, 23));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_intl__WEBPACK_IMPORTED_MODULE_16__.NextIntlClientProvider, {
        locale: router.locale,
        messages: pageProps.messages,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_13__/* .AuthProvider */ .H, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_contexts_CarContext__WEBPACK_IMPORTED_MODULE_14__/* .CarProvider */ .X, {
                children: loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                    children: "Loading...."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "icon",
                                    href: "assets/img/sm-logo.svg",
                                    type: "image/gif",
                                    sizes: "20x20"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    href: "../../public/assets/img/favicon.ico",
                                    rel: "icon"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Preloader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            onClose: handlePreloaderClose
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                    children: "SmartAlert - Car Dealer NExt Js Template"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                    charSet: "UTF-8"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                    httpEquiv: "X-UA-Compatible",
                                    content: "IE=edge"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                    name: "viewport",
                                    content: "width=device-width, initial-scale=1.0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                    name: "description",
                                    content: "Generated by create next app"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "icon",
                                    href: "assets/img/sm-logo.svg",
                                    type: "image/gif",
                                    sizes: "20x20"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800&display=swap",
                                    rel: "stylesheet"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    href: "../../public/assets/img/favicon.ico",
                                    rel: "icon"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9824:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Eu: () => (/* binding */ fetchCarDetails),
/* harmony export */   IU: () => (/* binding */ signup),
/* harmony export */   S0: () => (/* binding */ fetchBrands),
/* harmony export */   XX: () => (/* binding */ fetchSliderCriteria),
/* harmony export */   cG: () => (/* binding */ fetchMultichoiceCriteria),
/* harmony export */   cf: () => (/* binding */ fetchCars),
/* harmony export */   e3: () => (/* binding */ fetchSectors),
/* harmony export */   fm: () => (/* binding */ fetchModels),
/* harmony export */   gT: () => (/* binding */ fetchCities),
/* harmony export */   nX: () => (/* binding */ fetchFilteredCars),
/* harmony export */   x4: () => (/* binding */ login),
/* harmony export */   yC: () => (/* binding */ search)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const serverName = "/api";
const fetchCars = async (condition, alert, page)=>{
    try {
        let url = "";
        if (condition === "New Car") {
            url = `${serverName}/new/announcements?page=${page}&size=10&sort=_id,desc${alert ? "&alert=" + alert : ""}`;
        } else {
            url = `${serverName}/announcements?page=${page}&size=10&sort=datePosted,desc${alert ? "&alert=" + alert : ""}`;
        }
        console.log("fetching cars from", url);
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error fetching cars", error);
        throw error;
    }
};
const fetchCarDetails = async (id, condition)=>{
    try {
        let response;
        console.log("condition detail car", condition, id);
        if (condition === "new") response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/api/details-neuf?id=${id}`);
        else response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/api/details-occas?id=${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching car details", error);
        throw error;
    }
};
const fetchMultichoiceCriteria = async ()=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${serverName}/radio-buttons/product/64b66e3c52b46f2c79eb2661`);
        return response.data;
    } catch (error) {
        console.error("Error fetching multichoice criteria", error);
        throw error;
    }
};
const fetchSliderCriteria = async ()=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${serverName}/sliders/product/64b66e3c52b46f2c79eb2661`);
        return response.data;
    } catch (error) {
        console.error("Error fetching slider criteria", error);
        throw error;
    }
};
const fetchCities = async ()=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${serverName}/cities?sort=popular,desc&sort=label,asc&size=700`);
        return response.data;
    } catch (error) {
        console.error("Error fetching cities", error);
        throw error;
    }
};
const fetchSectors = async (cityId)=>{
    try {
        console.log(`Fetching sectors for city ID: ${cityId}`);
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${serverName}/secteurs?city=${cityId}`);
        console.log("Sectors fetched:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching sectors", error.response ? error.response.data : error.message);
        throw error;
    }
};
const fetchBrands = async ()=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${serverName}/combo-lists/product/64b66e3c52b46f2c79eb2661`);
        return response.data[0].valeurs; // Adjusted to return the correct array of brands
    } catch (error) {
        console.error("Error fetching brands", error);
        throw error;
    }
};
const fetchModels = async (brandId)=>{
    try {
        console.log(`Fetching models for brand ID: ${brandId}`);
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${serverName}/valeurs/comboListParent/${brandId}`);
        console.log("Models fetched:", response.data);
        return response.data.valeurs;
    } catch (error) {
        console.error("Error fetching models", error.response ? error.response.data : error.message);
        throw error;
    }
};
const fetchFilteredCars = async (carType, searchDTO)=>{
    try {
        const url = carType === "neuf" ? `${serverName}/new/announcements/search` : `${serverName}/alerts/search`;
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, searchDTO);
        return response.data;
    } catch (error) {
        console.error("Error fetching filtered cars", error);
        throw error;
    }
};
const gpt6Token = 471732;
const login = async (email, password)=>{
    try {
        console.log("Login request payload:", {
            username: email,
            password: password,
            expoToken: gpt6Token
        });
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${serverName}/authenticate`, {
            username: email,
            password: password,
            expoToken: gpt6Token
        });
        console.log("Login response:", response);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error.response ? error.response.data : error.message);
        throw error;
    }
};
const signup = async ({ firstName, email, password })=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${serverName}/register`, {
            email: email,
            firstName: firstName,
            password: password,
            langKey: "fr"
        });
        return response.data;
    } catch (error) {
        console.error("Error signing up", error);
        throw error;
    }
};
async function search(productId, values, alertLabel, type) {
    console.log("ENTERING search with ", type);
    let result = [];
    console.log("values to send::: ", values);
    // console.log("getting announcements for user of token : " + token);
    // if (values.valueNameLabel != t("Common.all")) {
    if (values.valueNameLabel && values.valueNameLabel != "Tout") {
        if (values.valueName.split("|")[0]) {
            result.push({
                label: "brand",
                key: values.valueName.split("|")[2],
                valeur: values.valueNameLabel,
                valeurObject: {
                    id: values.valueName.split("|")[1]
                },
                criteria: {
                    id: values.valueName.split("|")[0]
                }
            });
        }
    }
    // if (values.valueNameModelLabel != t("Common.all")) {
    if (values.valueNameModelLabel && values.valueNameModelLabel != "Tout") {
        if (values.valueNameModel) {
            result.push({
                label: "model",
                key: values.valueNameModel.split("|")[2],
                valeur: values.valueNameModelLabel,
                valeurObject: {
                    id: values.valueNameModel.split("|")[1]
                },
                criteria: {
                    id: values.valueNameModel.split("|")[0]
                }
            });
        }
    }
    Object.keys(values).map((element)=>{
        let key = "";
        if (element.includes("valueNameModel") || element.includes("valueLocationSect") || element.includes("valueLocationCity") || element.includes("valueSource") || element.includes("valueName")) {} else {
            if (element.includes("min")) key = "min";
            else if (element.includes("max")) key = "max";
            else key = element.split("|")[1];
            if (values[element]) {
                // console.log(values[element]);
                result.push({
                    label: key,
                    key: key,
                    valeur: (values[element] + "")?.split("$")[0].split("&")[1],
                    valeurObject: (values[element] + "")?.split("$")[0].split("&").length > 2 ? {
                        id: (values[element] + "")?.split("$")[0].split("&")[1]
                    } : null,
                    criteria: {
                        id: element.split("|")[0].split("$")[0] + ""
                    }
                });
            }
        }
    });
    let data = {};
    if (values.valueLocationSect && // values.valueLocationSectLabel != t("Common.all")
    values.valueLocationSectLabel != "Tout") {
        data.secteur = {
            id: values.valueLocationSect
        };
    }
    data.product = {
        id: productId
    };
    // if (values.valueLocationCityLabel && values.valueLocationCityLabel != t("Common.all")) {
    if (values.valueLocationCityLabel && values.valueLocationCityLabel != "Tout") {
        data.city = {
            id: values.valueLocationCity
        };
    }
    // if (values.valueSourceLabel && values.valueSourceLabel != t("Common.all")) {
    if (values.valueSourceLabel && values.valueSourceLabel != "Tout") {
        data.sources = [
            {
                id: values.valueSource
            }
        ];
    }
    data.label = alertLabel;
    data.searches = result;
    let uri = `/api/search-occasion`;
    if (type == "New Car") {
        uri = `/api/search-neuf`;
    }
    console.log("search object", data);
    console.log("uri", uri);
    return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(uri, data).then((response)=>{
        console.log("search response", response.data);
        return response.data;
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3059:
/***/ (() => {



/***/ }),

/***/ 8984:
/***/ (() => {



/***/ }),

/***/ 838:
/***/ (() => {



/***/ }),

/***/ 1488:
/***/ (() => {



/***/ }),

/***/ 271:
/***/ (() => {



/***/ }),

/***/ 8825:
/***/ (() => {



/***/ }),

/***/ 1408:
/***/ (() => {



/***/ }),

/***/ 1897:
/***/ (() => {



/***/ })

};
;