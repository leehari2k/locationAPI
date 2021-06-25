const express = require("express");
const router = express.Router();
const {
  handleGetProvince,
  handleGetDistrict,
  handleGetVillage,
} = require("../controller/index");
const { validateParam, schemas } = require("../middleware/validate");
const { DEFAULT_ROUTER } = require("../common/constant");

router.route(DEFAULT_ROUTER.GET_PROVINCE).get(handleGetProvince);
router
  .route(DEFAULT_ROUTER.GET_DISTRICT)
  .get(validateParam(schemas.idProvince), handleGetDistrict);
router
  .route(DEFAULT_ROUTER.GET_VILLAGE)
  .get(validateParam(schemas.idDistrict), handleGetVillage);

module.exports = router;
