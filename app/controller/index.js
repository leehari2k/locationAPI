const { sendError, sendSuccess } = require("./Controller");
const {getAllProvinces, getDistricts, getVillages} = require("../services/index.services")

const handleGetProvinces = async (req, res, next) => {
  try {
    const result = await getAllProvinces()
    if (result.success) {
      return sendSuccess(res, result.data, result.message, result.status)
    }
    return sendError(res, result.message, result.status)
  } catch (error) {
    return sendError(res, error.message, error.status)
  }
}

const handleGetDistrict = async (req, res, next) => {
  try {
    const { ID } = req.params;
    const result = await getDistricts(ID)
    if (result.success) {
      return sendSuccess(res, result.data, result.message, result.status)
    }
    return sendError(res, result.message, result.status)
  } catch (error) {
    return sendError(res, error.message, error.status)
  }
}

const handleGetVillage = async (req, res, next) => {
  try {
    const { ID } = req.params;
    const result = await getVillages(ID)
    if (result.success) {
      return sendSuccess(res, result.data, result.message, result.status)
    }
    return sendError(res, result.message, result.status)
  } catch (error) {
    return sendError(res, error.message, error.status)
  }
}

module.exports = {
  handleGetProvinces,
  handleGetDistrict,
  handleGetVillage,
}