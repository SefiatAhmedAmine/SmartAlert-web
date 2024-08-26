"use strict";
exports.id = 6947;
exports.ids = [6947];
exports.modules = {

/***/ 6947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// Reducer function to manage quantity state
function quantityReducer(state, action) {
    switch(action.type){
        case "INCREMENT":
            return {
                quantity: state.quantity + 1
            };
        case "DECREMENT":
            return {
                quantity: state.quantity > 1 ? state.quantity - 1 : state.quantity
            };
        case "SET":
            return {
                quantity: action.payload >= 1 ? action.payload : 1
            };
        default:
            return state;
    }
}
function HandleQuantity() {
    // Create separate state and dispatch for each item
    const [state1, dispatch1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(quantityReducer, {
        quantity: 1
    });
    const [state2, dispatch2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(quantityReducer, {
        quantity: 1
    });
    const increment1 = ()=>{
        dispatch1({
            type: "INCREMENT"
        });
    };
    const decrement1 = ()=>{
        dispatch1({
            type: "DECREMENT"
        });
    };
    const handleInputChange1 = (e)=>{
        const newValue = parseInt(e.target.value, 10);
        dispatch1({
            type: "SET",
            payload: newValue
        });
    };
    const increment2 = ()=>{
        dispatch2({
            type: "INCREMENT"
        });
    };
    const decrement2 = ()=>{
        dispatch2({
            type: "DECREMENT"
        });
    };
    const handleInputChange2 = (e)=>{
        const newValue = parseInt(e.target.value, 10);
        dispatch2({
            type: "SET",
            payload: newValue
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "quantity",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "quantity__minus",
                    onClick: decrement1,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "bi bi-dash"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    name: "quantity1",
                    type: "text",
                    className: "quantity__input",
                    value: state1.quantity,
                    onChange: handleInputChange1
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "quantity__plus",
                    onClick: increment1,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "bi bi-plus"
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HandleQuantity);


/***/ })

};
;