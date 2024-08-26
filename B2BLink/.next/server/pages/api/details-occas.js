"use strict";
(() => {
var exports = {};
exports.id = 4929;
exports.ids = [4929];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 5174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function handler(req, res) {
    console.log("ENTERING api/details-occas");
    if (req.method === "GET") {
        const { query: { id } } = req;
        let uri = `${"https://smartalert-backend-stag.b2blink.ma:8080"}/api/announcements/${id}`;
        console.log("send req to", uri, "id", id);
        axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(uri).then((response)=>{
            res.status(200).json({
                data: response.data
            });
        }).catch((err)=>{
            res.status(500).json(err);
        });
    } else {
    // Handle any other HTTP method
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5174));
module.exports = __webpack_exports__;

})();