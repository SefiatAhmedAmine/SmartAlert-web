"use strict";
exports.id = 5671;
exports.ids = [5671];
exports.modules = {

/***/ 5671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ utils_SelectComponent)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/hooks/useCustomSelect.js

const useCustomSelect = (initialOptions, isOpenByDefault = false)=>{
    const [isOpen, setIsOpen] = (0,external_react_.useState)(isOpenByDefault);
    const [selectedOption, setSelectedOption] = (0,external_react_.useState)(null);
    const options = initialOptions;
    const openDropdown = ()=>{
        setIsOpen(true);
    };
    const closeDropdown = ()=>{
        setIsOpen(false);
    };
    const toggleDropdown = ()=>{
        setIsOpen(!isOpen);
    };
    const selectOption = (option)=>{
        setSelectedOption(option);
        closeDropdown();
    };
    return {
        isOpen,
        selectedOption,
        options,
        openDropdown,
        closeDropdown,
        toggleDropdown,
        selectOption
    };
};
/* harmony default export */ const hooks_useCustomSelect = (useCustomSelect);

;// CONCATENATED MODULE: ./src/utils/SelectComponent.jsx



const SelectComponent = ({ options, placeholder, open, customClass, onChange })=>{
    const { isOpen, selectedOption, openDropdown, closeDropdown, toggleDropdown, selectOption } = hooks_useCustomSelect(options, open);
    const dropdownRef = (0,external_react_.useRef)(null);
    const handleClickOutside = (event)=>{
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            // Click is outside the dropdown, close the dropdown
            closeDropdown();
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (isOpen) {
            // Add event listener when the component mounts
            document.addEventListener("click", handleClickOutside);
        }
        // Remove event listener when the component unmounts
        return ()=>{
            document.removeEventListener("click", handleClickOutside);
        };
    }, [
        isOpen
    ]);
    const dropdownClassName = `nice-select ${customClass || ""} ${isOpen ? "open" : ""}`;
    const handleOptionClick = (option)=>{
        selectOption(option);
        if (onChange) {
            onChange({
                target: {
                    value: option
                }
            }); // Trigger the onChange event
        }
        closeDropdown(); // Close the dropdown after selection
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: dropdownClassName,
        tabIndex: "0",
        onClick: toggleDropdown,
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "current",
                children: selectedOption || placeholder
            }),
            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                className: "list",
                children: options.map((option, index)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: `option${selectedOption === option ? " selected focus" : ""}`,
                        "data-value": index,
                        onClick: ()=>handleOptionClick(option),
                        children: option
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const utils_SelectComponent = (SelectComponent);


/***/ })

};
;