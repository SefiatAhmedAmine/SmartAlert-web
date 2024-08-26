(() => {
var exports = {};
exports.id = 4994;
exports.ids = [4994];
exports.modules = {

/***/ 7555:
/***/ (() => {

// import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// const prisma = new PrismaClient();
// export default async function handler(req, res) {
//   const { email, password } = req.body;
//   if (req.method !== 'POST') {
//     return res.status(405).end(); // Method Not Allowed
//   }
//   try {
//     const user = await prisma.user.findUnique({
//       where: { email },
//     });
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });
//     res.status(200).json({ token, user: { id: user.id, email: user.email } });
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7555));
module.exports = __webpack_exports__;

})();