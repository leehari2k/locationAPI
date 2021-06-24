const express = require("express");
const router = express.Router();
const {handleGetProvinces, handleGetDistrict, handleGetVillage, handleTest} = require("../controller/index")
router.route("/province").get(handleGetProvinces);
router.route("/province/:ID/district").get(handleGetDistrict);
router.route("/district/:ID/village").get(handleGetVillage);
router.route("/get").get(handleTest)


module.exports = router;

