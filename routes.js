const get=require("./controller")
const router = require("express").Router();

router.route('/whoami').get(get.getData)

module.exports = router