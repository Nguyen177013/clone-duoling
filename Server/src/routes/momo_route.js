const router = require('express').Router();
const momo_controller = require("../controllers/momo_controller");
router.get('/',momo_controller.getMomo);
router.get('/callback',momo_controller.momo_callBack);
module.exports = router
