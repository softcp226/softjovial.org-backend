const express = require("express");
const Router = express.Router();
const validate_save_user_Info = require("../validation/validate_save_user_info");
const User_Info = require("../model/user_Info");
const verifyToken = require("../token/verifyToken");

Router.post("/", verifyToken, async (req, res) => {
  console.log(req.body);
  const request_isvalid = validate_save_user_Info(req.body);
  if (request_isvalid != true)
    return res.status(400).json({ error: true, errMessage: request_isvalid });

  try {
    const user_Info = await new User_Info({
      user: req.body.user,
      phone_number: req.body.phone_number,
      address_line: req.body.address_line,
      zip_code: req.body.zip_code,
      swift_code: req.body.swift_code,
      routing_number: req.body.routing_number,
      bank_name: req.body.bank_name,
      account_name: req.body.account_name,
      account_number: req.body.account_number,
    });

    await user_Info.save();
    res.status(200).json({ error: false, message: "success" });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});

module.exports = Router;
