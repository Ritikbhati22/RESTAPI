const express = require("express");
const router = express.Router();
const {getallproducts,getalltesting}=require("../controllers/product")
router.route("/").get(getallproducts);
router.route("/testing").get(getalltesting);
module.exports = router;
 