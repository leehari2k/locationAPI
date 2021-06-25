const Joi = require("@hapi/joi");

module.exports.validateParam = (schema) => {
  return (req, res, next) => {
    const validatorResult = schema.validate(req.params);

    if (validatorResult.error)
      return res.status(400).json(validatorResult.error);
    else {
      if (!req.value) req.value = {};
      if (!req.value.params) req.value.params = validatorResult.value;
      next();
    }
  };
};

module.exports.schemas = {
  idProvince: Joi.object().keys({
    ID: Joi.string()
      .regex(/^[0-9]{2}$/)
      .required(),
  }),

  idDistrict: Joi.object().keys({
    ID: Joi.string()
      .regex(/^[0-9]{3}$/)
      .required(),
  }),
};
