exports.id = 8907;
exports.ids = [8907];
exports.modules = {

/***/ 4428:
/***/ ((module) => {

// Exports
module.exports = {
	"gradientBackground": "CarLeftSidebar_gradientBackground__AQfme"
};


/***/ }),

/***/ 8907:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_SelectComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5671);
/* harmony import */ var _CarLeftSidebar_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4428);
/* harmony import */ var _CarLeftSidebar_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_CarLeftSidebar_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_ChoiceList_ChoiceList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9390);
/* harmony import */ var _common_ChoiceChip_ChoiceChip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8892);
/* harmony import */ var _common_RangeSlider_RangeSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5059);
/* harmony import */ var _common_InputField_InputField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6090);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_ChoiceList_ChoiceList__WEBPACK_IMPORTED_MODULE_3__, _common_ChoiceChip_ChoiceChip__WEBPACK_IMPORTED_MODULE_4__]);
([_common_ChoiceList_ChoiceList__WEBPACK_IMPORTED_MODULE_3__, _common_ChoiceChip_ChoiceChip__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function CarLeftSidebar({ brands, onBrandChange, models, onModelChange, sources, onSourceChange, cities, onCityChange, secteurs, onSecteurChange, chips, onChipChange, sliders, onSliderChange, onSearchClick }) {
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_7__.useTranslations)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "col-xl-4 order-xl-1 order-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "filter-area mb-40",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "title-and-close-btn mb-20",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        children: "Filtres de recherche:"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `product-sidebar`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `product-widget mb-20 ${(_CarLeftSidebar_module_css__WEBPACK_IMPORTED_MODULE_8___default().gradientBackground)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "check-box-item",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "product-widget-title mb-20",
                                    children: t("Labels.brand")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "checkbox-container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ChoiceList_ChoiceList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        options: brands,
                                        onChoiceChange: onBrandChange
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `product-widget mb-20 ${(_CarLeftSidebar_module_css__WEBPACK_IMPORTED_MODULE_8___default().gradientBackground)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "check-box-item",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "product-widget-title mb-20",
                                    children: t("Labels.model")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "checkbox-container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ChoiceList_ChoiceList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        options: models,
                                        onChoiceChange: onModelChange
                                    })
                                })
                            ]
                        })
                    }),
                    sliders.map((slider, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `product-widget mb-20 ${(_CarLeftSidebar_module_css__WEBPACK_IMPORTED_MODULE_8___default().gradientBackground)}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "check-box-item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "product-widget-title mb-20",
                                        children: t("Labels." + slider.label)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "checkbox-container",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_RangeSlider_RangeSlider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            options: slider,
                                            onSliderChange: onSliderChange
                                        })
                                    })
                                ]
                            })
                        })),
                    chips.map((chip, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `product-widget mb-20 ${(_CarLeftSidebar_module_css__WEBPACK_IMPORTED_MODULE_8___default().gradientBackground)}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "check-box-item",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "product-widget-title mb-20",
                                            children: t("Labels." + chip.label)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "checkbox-container",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ChoiceChip_ChoiceChip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                options: chip,
                                                onChipChange: onChipChange
                                            })
                                        })
                                    ]
                                })
                            })
                        })),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "primary-btn2",
                        onClick: onSearchClick,
                        children: t("Common.search")
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarLeftSidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8892:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3554);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_select__WEBPACK_IMPORTED_MODULE_3__]);
react_select__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const choiceChip = (props)=>{
    const locale = (0,next_intl__WEBPACK_IMPORTED_MODULE_4__.useLocale)();
    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_4__.useTranslations)();
    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let opts = [
            {
                label: t("Common.all"),
                value: 0
            }
        ];
        for(let i = 0; i < props.options.valeurs.length; i++){
            const chip = props.options.valeurs[i];
            let tmp = {
                label: chip.translations[locale] ?? chip.value,
                value: chip.id
            };
            opts.push(tmp);
        }
        setOptions(opts);
    }, [
        props.options
    ]);
    const handleChange = (selectedOption)=>{
        if (props.onChipChange) props.onChipChange(props.options, selectedOption);
        setSelectedOption(selectedOption);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
        value: selectedOption,
        onChange: handleChange,
        options: options,
        isSearchable: true,
        placeholder: "Select an option..."
    });
};
choiceChip.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (choiceChip);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_select__WEBPACK_IMPORTED_MODULE_3__]);
react_select__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ChoiceList = (props)=>{
    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setOptions(props.options.valeurs);
        if (props.options.critereon?.label == "model") setSelectedOption(null);
    }, [
        props.options.valeurs
    ]);
    const handleChange = (selectedOption)=>{
        console.log(props.options, selectedOption);
        if (props.onChoiceChange) props.onChoiceChange(null, selectedOption);
        setSelectedOption(selectedOption);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
        value: selectedOption,
        onChange: handleChange,
        options: options,
        isSearchable: true,
        placeholder: "Select an option..."
    });
};
ChoiceList.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChoiceList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6090:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const InputField = ({ prefix, placeholder, defaultValue })=>{
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue ?? 0);
    const handleChange = (selectedOption)=>{
        setSelectedOption(selectedOption);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-value",
        children: [
            prefix ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: prefix
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                className: "from",
                defaultValue: value,
                placeholder: placeholder ?? ""
            })
        ]
    });
};
InputField.propTypes = {};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (InputField)));


/***/ }),

/***/ 5059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8098);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3682);
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1582);
/* harmony import */ var _mui_material_Input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Input__WEBPACK_IMPORTED_MODULE_6__);








const Input = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_material_Input__WEBPACK_IMPORTED_MODULE_6___default()))`
  width: 42px;
`;
const RangeSlider = ({ options, onSliderChange })=>{
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        options.minValue,
        options.maxValue
    ]);
    const criterion = {
        id: options.id,
        label: options.label
    };
    const step = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(Math.pow(10, Math.min(Math.floor((value[1] - value[0] + "").length - 2), 3)));
    // console.log("slider range", value, step, Math.min(Math.floor(((value[1]-value[0])+"").length -2),3));
    const handleSliderChange = (event, newValue)=>{
        // console.log("sliding", newValue);
        setValue(newValue);
        if (onSliderChange) onSliderChange(criterion, value);
    };
    const handleMinInputChange = (event)=>{
        setValue([
            event.target.value === "" ? 0 : Number(event.target.value),
            value[1]
        ]);
        if (onSliderChange) onSliderChange(criterion, value);
    };
    const handleMaxInputChange = (event)=>{
        setValue([
            value[0],
            event.target.value === "" ? 0 : Number(event.target.value)
        ]);
        if (onSliderChange) onSliderChange(criterion, value);
    };
    const handleBlur = ()=>{
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
        sx: {
            display: "flex",
            justifyContent: "space-between",
            mt: 2
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
            container: true,
            spacing: 2,
            alignItems: "center",
            justifyContent: "space-between",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                    item: true,
                    xs: 3,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Input, {
                        value: value[0],
                        size: "medium",
                        onChange: handleMinInputChange,
                        onBlur: handleBlur,
                        inputProps: {
                            step: step.current,
                            min: options.minValue,
                            max: options.maxValue,
                            type: "number",
                            "aria-labelledby": "input-slider"
                        },
                        style: {
                            width: "100%"
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Slider__WEBPACK_IMPORTED_MODULE_5___default()), {
                        value: value,
                        onChange: handleSliderChange,
                        valueLabelDisplay: "auto",
                        min: options.minValue,
                        max: options.maxValue,
                        step: step.current,
                        style: {
                            marginTop: 10
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                    item: true,
                    xs: 3,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Input, {
                        value: value[1],
                        size: "medium",
                        onChange: handleMaxInputChange,
                        onBlur: handleBlur,
                        inputProps: {
                            step: step.current,
                            min: options.minValue,
                            max: options.maxValue,
                            type: "number",
                            "aria-labelledby": "input-slider"
                        },
                        style: {
                            width: "100%"
                        }
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RangeSlider);


/***/ })

};
;