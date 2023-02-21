const Joi = require("joi");

const validate_save_user_Info = (req) => {
  const schema = Joi.object({
    user: Joi.string().required(),
    phone_number: Joi.string().allow(""),
    address_line: Joi.string().allow(""),
    zip_code: Joi.string().required(),
    swift_code: Joi.string().allow(""),
    routing_number: Joi.string().required(),
    bank_name: Joi.string().required(),
    account_name: Joi.string().required(),
    account_number: Joi.string().required(),
  });
  const result = schema.validate({
    user: req.user,
    phone_number: req.phone_number,
    address_line: req.address_line,
    zip_code: req.zip_code,
    swift_code: req.swift_code,
    routing_number: req.routing_number,
    bank_name: req.bank_name,
    account_name: req.account_name,
    account_number: req.account_number,
  });
  if (result.error) return result.error.message;
  return true;
};

module.exports = validate_save_user_Info;
