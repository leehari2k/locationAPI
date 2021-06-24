const { sendError, sendSuccess } = require("./controller");
const {
  getDistrict,
  getVillage,
  getProvince,
} = require("../services/index.services");

const handleGetProvince = async (req, res, next) => {
  try {
    const result = await getProvince();
    if (result.success) {
      return sendSuccess(res, result.data, result.message, result.status);
    }
    return sendError(res, result.message, result.status);
  } catch (error) {
    return sendError(res, error.message, error.status);
  }
};

const handleGetDistrict = async (req, res, next) => {
  try {
    const { ID } = req.params;
    const result = await getDistrict(ID);
    if (result.success) {
      return sendSuccess(res, result.data, result.message, result.status);
    }
    return sendError(res, result.message, result.status);
  } catch (error) {
    return sendError(res, error.message, error.status);
  }
};

const handleGetVillage = async (req, res, next) => {
  try {
    const { ID } = req.params;
    const result = await getVillage(ID);
    if (result.success) {
      return sendSuccess(res, result.data, result.message, result.status);
    }
    return sendError(res, result.message, result.status);
  } catch (error) {
    return sendError(res, error.message, error.status);
  }
};

module.exports = {
  handleGetProvince,
  handleGetDistrict,
  handleGetVillage,
};
