"use strict";
exports.id = 3510;
exports.ids = [3510];
exports.modules = {

/***/ 3510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ useCountdownTimer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Function to calculate the time remaining
function calculateTimeRemaining(endTime) {
    const currentTime = new Date();
    const timeDifference = new Date(endTime) - currentTime;
    if (timeDifference <= 0) {
        return {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00"
        };
    }
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(timeDifference % (1000 * 60) / 1000);
    return {
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0")
    };
}
function useCountdownTimer(endTime) {
    const [timeRemaining, setTimeRemaining] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(calculateTimeRemaining(endTime));
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const timerInterval = setInterval(()=>{
            setTimeRemaining(calculateTimeRemaining(endTime));
        }, 1000);
        return ()=>{
            clearInterval(timerInterval);
        };
    }, [
        endTime
    ]);
    return timeRemaining;
}


/***/ })

};
;