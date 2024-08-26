exports.id = 5509;
exports.ids = [5509];
exports.modules = {

/***/ 5509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3735);
/* harmony import */ var _components_Home1_CarLeftSideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8907);
/* harmony import */ var _utils_SelectComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5671);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9824);
/* harmony import */ var _contexts_CarContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2505);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9648);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_globalFunctions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5484);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__, _components_Home1_CarLeftSideBar__WEBPACK_IMPORTED_MODULE_3__, _utils_api__WEBPACK_IMPORTED_MODULE_6__, axios__WEBPACK_IMPORTED_MODULE_9__]);
([_layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__, _components_Home1_CarLeftSideBar__WEBPACK_IMPORTED_MODULE_3__, _utils_api__WEBPACK_IMPORTED_MODULE_6__, axios__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






 // Ensure you have this import for your fetchCars function





const preprocessCarData = (car, isNewCar)=>{
    if (isNewCar) {
        return {
            ...car,
            id: car.id,
            label: car.carLabel,
            uri: car.carUri,
            price: car.carMinPrice || car.carMaxPrice || "N/A",
            image: car.carDefaultImage,
            brand: car.carBrand,
            model: car.carModel,
            fuel: car.raw?.fuel || "N/A",
            electric: car.raw?.electric || "N/A",
            mileage: null,
            city: null // New cars don't have city data
        };
    } else {
        return {
            ...car,
            id: car.id,
            label: car.label,
            uri: car.carUri,
            price: car.carPrice,
            image: car.carDefautlImage,
            brand: car.carBrand,
            model: car.carModel,
            fuel: car.carFuel?.value || "N/A",
            electric: car.carElectric || "N/A",
            mileage: `${car.carMileageMin} - ${car.carMileageMax} miles`,
            city: car.carCity?.label || "Unknown city"
        };
    }
};
// const processBrands = (data, t, locale) => {
const processBrands = (data, locale)=>{
    let itemsNameResult = [];
    for(let index = 0; index < data[0].valeurs.length; index++){
        itemsNameResult.push({
            label: data[0].valeurs[index].translations[locale] ?? data[0].valeurs[index].value,
            value: data[0].id + "|" + data[0].valeurs[index].id + "|" + data[0].valeurs[index].key
        });
    }
    itemsNameResult.sort((a, b)=>a.label.toLowerCase().localeCompare(b.label.toLowerCase(), undefined, {
            sensitivity: "base"
        }));
    itemsNameResult.unshift({
        // label: t("Common.all"),
        label: "Tout",
        value: 0
    });
    let res = {
        critereon: {
            id: data.id,
            label: data.label
        },
        valeurs: itemsNameResult
    };
    return res;
};
const processModels = (data, locale)=>{
    let itemsModelResult = [];
    for(let index = 0; index < data.valeurs.length; index++){
        itemsModelResult.push({
            label: data.valeurs[index].translations[locale] ?? data.valeurs[index].translations.fr ?? data.valeurs[index].value,
            value: data.id + "|" + data.valeurs[index].id + "|" + data.valeurs[index].key
        });
    }
    // console.log("models:", itemsModelResult);
    itemsModelResult.sort((a, b)=>a.label.toLowerCase().localeCompare(b.label.toLowerCase(), undefined, {
            sensitivity: "base"
        }));
    itemsModelResult.unshift({
        // label: t("Common.all"),
        label: "Tout",
        value: 0
    });
    let res = {
        critereon: {
            id: data.id,
            label: data.label
        },
        valeurs: itemsModelResult
    };
    return res;
};
// const processCities = (data, t, locale) => {
const processCities = (data, locale)=>{
    let itemsCityResult = [];
    for(let index = 0; index < data.length; index++){
        itemsCityResult.push({
            label: data[index].translations[locale] ?? data[index].label,
            value: data[index].id
        });
    }
    itemsCityResult.unshift({
        // label: t("Common.all"),
        label: "Tout",
        value: 0
    });
    let res = {
        critereon: {},
        valeurs: itemsCityResult
    };
    return itemsCityResult;
};
// const processSources = (data, t) => {
const processSources = (data)=>{
    let itemsSourcesResult = [];
    for(let index = 0; index < data.length; index++){
        itemsSourcesResult.push({
            label: (0,_utils_globalFunctions__WEBPACK_IMPORTED_MODULE_11__/* .getBaseUri */ .u5)(data[index].url) ?? data[index].label,
            value: data[index].id
        });
    }
    itemsSourcesResult.sort((a, b)=>a.label.toLowerCase().localeCompare(b.label.toLowerCase(), undefined, {
            sensitivity: "base"
        }));
    itemsSourcesResult.unshift({
        // label: t("Common.all"),
        label: "Tout",
        value: 0
    });
    let res = {
        critereon: {},
        valeurs: itemsSourcesResult
    };
    return itemsSourcesResult;
};
const processChips = (data)=>{
    let chipsResult = [];
    for(let index = 0; index < data.length; index++){
        chipsResult.push({
            label: data[index].label,
            valeurs: data[index].valeurs,
            id: data[index].id,
            defaultValue: data[index].defaultValue
        });
    }
    return chipsResult;
};
const processSliders = (data)=>{
    let sliderResult = [];
    for(let index = 0; index < data.length; index++){
        let rangeValues = [];
        if (data[index].rangeValues) {
            data[index].rangeValues.sort((a, b)=>{
                return a - b;
            });
            rangeValues.splice(0, rangeValues.length);
            for(let j = 0; j < data[index].rangeValues.length; j++){
                const element = data[index].rangeValues[j];
                rangeValues.push({
                    label: element,
                    value: j + "$" + Math.random()
                });
            }
        }
        rangeValues = rangeValues.reverse();
        sliderResult.push({
            label: data[index].label,
            minValue: parseInt(data[index].minValue),
            maxValue: parseInt(data[index].maxValue),
            rangeValues: rangeValues,
            id: data[index].id
        });
    }
    return sliderResult;
};
function CarListingLeftSidebar({ productId, brands, sources, cities, sliders, chips }) {
    const locale = (0,next_intl__WEBPACK_IMPORTED_MODULE_10__.useLocale)();
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_10__.useTranslations)();
    // brands = processBrands(brands, t, locale)
    brands = processBrands(brands, locale);
    // sources = processSources(sources, t)
    sources = processSources(sources);
    // cities = processCities(cities, t, locale)
    cities = processCities(cities, locale);
    sliders = processSliders(sliders);
    chips = processChips(chips);
    const [models, setModels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const secteurs = [];
    const [activeClass, setActiveClass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("grid-group-wrapper");
    const [cars, setCars] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Initialize as an empty array
    const values = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({});
    const { setCar } = (0,_contexts_CarContext__WEBPACK_IMPORTED_MODULE_7__/* .useCar */ .o)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const conditions = [
        "Used Car",
        "New Car"
    ];
    const currentPage = router.query.page ?? 0; // Initialize currentPage state
    const selectedCondition = router.query.condition === "new" ? "New Car" : "Used Car";
    // console.log("CONDITION", selectedCondition, "PAGE", currentPage);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const alert = router.query.alert;
        const loadCars = async ()=>{
            try {
                // console.log(`Fetching cars for condition: ${selectedCondition}`);
                const data = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_6__/* .fetchCars */ .cf)(selectedCondition, alert, currentPage);
                // console.log('Raw API response:', data);
                const isNewCar = selectedCondition === "New Car";
                const carArray = Array.isArray(data) ? data : Object.keys(data).map((key)=>data[key]);
                const processedCars = carArray.map((car)=>preprocessCarData(car, isNewCar));
                // console.log('Processed car array:', processedCars);
                setCars(processedCars || []); // Ensure carArray is an array
            } catch (error) {
                console.error("Error loading cars", error);
                setCars([]); // Set cars to an empty array on error
            }
        };
        loadCars();
    }, [
        router.query
    ]);
    function loadModels() {
        if (values.current.valueName && values.current.valueName.length > 1) {
            const brandId = values.current.valueName.split("|")[1];
            axios__WEBPACK_IMPORTED_MODULE_9__["default"].get(`/api/valeurs/comboListParent/${brandId}`).then((response)=>{
                console.log("modelsss", response.data);
                const mods = processModels(response.data, locale);
                setModels(mods);
            });
        }
    }
    const toggleView = ()=>{
        setActiveClass(activeClass === "grid-group-wrapper" ? "list-group-wrapper" : "grid-group-wrapper");
    };
    const handlePageChange = (page)=>{
        if (page >= 0) {
            const routerOpts = {
                ...router.query,
                page
            };
            router.push({
                pathname: router.pathname,
                query: routerOpts
            }, undefined, {
                shallow: false
            });
        }
    };
    const handleViewDetails = (car)=>{
        setCar(car);
        console.log("car to show", car);
        router.push({
            pathname: "/car-deatils",
            query: {
                id: car.id,
                condition: router.query.condition ?? "used"
            }
        });
    };
    async function handleSearch(e) {
        // e.preventDefault()
        const newAlert = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_6__/* .search */ .yC)(productId, values.current, "search" + crypto.randomUUID(), selectedCondition);
        console.log("newAlert", newAlert);
        // Update the URL with the new searchTerm
        if (newAlert?.data?.id) {
            let routerOpts = {
                condition: router.query.condition,
                alert: newAlert.data.id,
                page: 0
            };
            if (routerOpts != router.query) router.push({
                pathname: router.pathname,
                query: routerOpts
            }, undefined, {
                shallow: false
            });
        }
    }
    // Determine the cars to display on the current page
    const carsToDisplay = cars.slice((currentPage - 1) * 10, currentPage * 10);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "product-page pt-50 mb-50",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row g-xl-4 gy-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home1_CarLeftSideBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            brands: brands,
                            onBrandChange: (critereon, val)=>{
                                values.current = {
                                    ...values.current,
                                    valueName: val.value,
                                    valueNameLabel: val.label,
                                    valueNameModel: undefined,
                                    valueNameModelLabel: undefined
                                };
                                console.log("CURRENT VALUES : ", values.current);
                                loadModels();
                            },
                            models: models,
                            onModelChange: (critereon, val)=>{
                                values.current = {
                                    ...values.current,
                                    valueNameModel: val.value,
                                    valueNameModelLabel: val.label
                                };
                                console.log("CURRENT VALUES : ", values.current);
                            },
                            cities: cities,
                            onCityChange: (critereon, val)=>{
                                values.current = {
                                    ...values.current,
                                    valueLocationCity: val.value,
                                    valueLocationCityLabel: val.label,
                                    valueLocationSectLabel: undefined,
                                    valueLocationSect: undefined
                                };
                                console.log("CURRENT VALUES : ", values.current);
                            },
                            secteurs: secteurs,
                            onSecteurChange: (critereon, val)=>{
                                values.current = {
                                    ...values.current,
                                    valueLocationSect: val.value,
                                    valueLocationSectLabel: val.label
                                };
                                console.log("CURRENT VALUES : ", values.current);
                            },
                            chips: chips,
                            onChipChange: (critereon, val)=>{
                                values.current = {
                                    ...values.current,
                                    [critereon.id + "|" + critereon.label]: val.id != 0 ? val.key + "&" + val.value + "&" + val.id : undefined
                                };
                                console.log("CURRENT VALUES : ", values.current);
                            },
                            sliders: sliders,
                            onSliderChange: (critereon, val)=>{
                                values.current = {
                                    ...values.current,
                                    [critereon.id + "|" + critereon.label + "_max"]: val[1] ? val[1] + "&" + val[1] : undefined,
                                    [critereon.id + "|" + critereon.label + "_min"]: val[0] ? val[0] + "&" + val[0] : undefined
                                };
                            },
                            onSearchClick: handleSearch
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-xl-8 order-xl-2 order-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row mb-40",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-12",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "show-item-and-filte",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "filter-view",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "view",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "btn-group list-grid-btn-group",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: `${activeClass === "grid-group-wrapper" ? "active" : ""} grid`,
                                                                onClick: ()=>setActiveClass("grid-group-wrapper")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: `${activeClass === "list-group-wrapper" ? "active" : ""} lists`,
                                                                onClick: ()=>setActiveClass("list-group-wrapper")
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "list-grid-main",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `list-grid-product-wrap ${activeClass}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "row g-4 justify-content-center mb-40",
                                                children: cars.length > 0 ? cars.map((car, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-lg-6 col-md-6 col-sm-12 wow fadeInUp item",
                                                        "data-wow-delay": `${200 + index * 100}ms`,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "product-card",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "product-img",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: "#",
                                                                            className: "fav"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "swiper product-img-slider",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "swiper-wrapper",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "swiper-slide",
                                                                                    children: car.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                        src: car.image,
                                                                                        alt: "image",
                                                                                        style: {
                                                                                            height: "400px",
                                                                                            width: "100%",
                                                                                            objectFit: "cover"
                                                                                        }
                                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        style: {
                                                                                            height: "400px",
                                                                                            width: "100%",
                                                                                            display: "flex",
                                                                                            justifyContent: "center",
                                                                                            alignItems: "center",
                                                                                            backgroundColor: "#f0f0f0"
                                                                                        },
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            children: "Image not available"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "product-content",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                onClick: ()=>handleViewDetails(car),
                                                                                children: car.label || "No label available"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "price-location",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "price",
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                                                        children: [
                                                                                            "$",
                                                                                            car.price
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "location",
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                        href: "#",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "bi bi-geo-alt"
                                                                                            }),
                                                                                            " ",
                                                                                            car.city
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                            className: "features",
                                                                            children: [
                                                                                selectedCondition === "Used Car" && car.mileage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                src: "assets/img/home4/icon/miles.svg",
                                                                                                alt: ""
                                                                                            }),
                                                                                            car.mileage
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                car.fuel && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            src: "assets/img/home4/icon/fuel.svg",
                                                                                            alt: ""
                                                                                        }),
                                                                                        car.fuel
                                                                                    ]
                                                                                }),
                                                                                car.electric && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            src: "assets/img/home4/icon/electric.svg",
                                                                                            alt: ""
                                                                                        }),
                                                                                        car.electric
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "content-btm",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    className: "view-btn2",
                                                                                    onClick: ()=>handleViewDetails(car),
                                                                                    children: "View Details"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "brand",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                                        href: "/single-brand-category",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            src: "assets/img/home1/icon/mercedes-01.svg",
                                                                                            alt: "image"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }, car.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "No cars available."
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pagination-and-next-prev",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "next-prev-btn",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    className: "primary-btn3",
                                                                    onClick: ()=>handlePageChange(currentPage - 1),
                                                                    children: "Prev"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    className: "primary-btn3",
                                                                    onClick: ()=>handlePageChange(currentPage + 1),
                                                                    children: "Next"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
// This function gets called at build time
async function getStaticProps(context) {
    // console.log("getStaticProps is running"); // This should appear in your terminal
    // console.log("host", process.env.NEXT_PUBLIC_API_URI);
    // Call an external API endpoint to get posts
    const productId = await axios__WEBPACK_IMPORTED_MODULE_9__["default"].get(`${"https://smartalert-backend-stag.b2blink.ma:8080"}/api/products`).then((response)=>{
        return response.data[0].id;
    }).catch((err)=>{
        throw err;
    });
    let brands = await axios__WEBPACK_IMPORTED_MODULE_9__["default"].get(`${"https://smartalert-backend-stag.b2blink.ma:8080"}/api/combo-lists/product/${productId}`);
    brands = brands?.data;
    let cities = await axios__WEBPACK_IMPORTED_MODULE_9__["default"].get(`${"https://smartalert-backend-stag.b2blink.ma:8080"}/api/cities?sort=popular,desc&sort=label,asc&size=700&page=0`);
    cities = cities?.data;
    let sources = await axios__WEBPACK_IMPORTED_MODULE_9__["default"].get(`${"https://smartalert-backend-stag.b2blink.ma:8080"}/api/sources`);
    sources = sources?.data;
    let sliders = await axios__WEBPACK_IMPORTED_MODULE_9__["default"].get(`${"https://smartalert-backend-stag.b2blink.ma:8080"}/api/sliders/product/${productId}`);
    sliders = sliders?.data;
    let chips = await axios__WEBPACK_IMPORTED_MODULE_9__["default"].get(`${"https://smartalert-backend-stag.b2blink.ma:8080"}/api/radio-buttons/product/${productId}`);
    chips = chips?.data;
    // console.log("sttic", brands, cities, sources, chips, sliders);
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            productId,
            brands,
            sources,
            cities,
            sliders,
            chips,
            messages: (await __webpack_require__(3519)(`./${context.locale}.json`)).default
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarListingLeftSidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u5: () => (/* binding */ getBaseUri)
/* harmony export */ });
/* unused harmony exports numberFormat, getTime */
function numberFormat(num) {
    num = Math.floor(num);
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}
function getBaseUri(url) {
    if (url.length < 4) return null;
    let base = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    if (base) return base[1];
    return null;
}
function getTime(date) {
    // console.log("Time ",date)
    if (!date) {
        return "";
    }
    const time = new Date(date);
    let hours = time.getHours() + "";
    hours = hours.length < 2 ? "0" + hours : hours;
    let minutes = time.getMinutes() + "";
    minutes = minutes.length < 2 ? "0" + minutes : minutes;
    return time.toJSON().slice(0, 10).replace(/-/g, "/") + "  " + hours + ":" + minutes;
}


/***/ }),

/***/ 3519:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ar.json": [
		1489,
		1489
	],
	"./fr.json": [
		4015,
		4015
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 3519;
module.exports = webpackAsyncContext;

/***/ })

};
;