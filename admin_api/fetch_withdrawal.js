const express = require("express");
const Router = express.Router();
const verifyToken = require("../secure-admin-api/verifyToken");
const Withdrawal_request = require("../model/withdrawal_request");
const Admin = require("../model/admin");
const validate_admin_fetchuser = require("../validation/validate-admin-fetchuser");
const validate_admin_delete_withdrawal = require("../validation/validate-admin-delete-withdrawal");
Router.post("/", verifyToken, async (req, res) => {
  const request_isvalid = validate_admin_fetchuser(req.body);
  if (request_isvalid != true)
    return res.status(400).json({ error: true, errMessage: request_isvalid });

  try {
    const admin = await Admin.findById(req.body.admin);
    if (!admin)
      return res.status(403).json({
        error: true,
        errMessage: "Forbidden!, please login again to access this api",
      });
    const withdrawal = await Withdrawal_request.find().populate("user");
    if (withdrawal.length < 1)
      return res.status(400).json({
        error: true,
        errMessage: "No one has initiated a withdraw transaction at the moment",
      });
    res.status(200).json({ error: false, message: withdrawal });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});

Router.delete("/withdrawal/delete", verifyToken, async (req, res) => {
  const request_isvalid = validate_admin_delete_withdrawal(req.body);
  if (request_isvalid != true)
    return res.status(400).json({ error: true, errMessage: request_isvalid });

  try {
    const admin = await Admin.findById(req.body.admin);
    if (!admin)
      return res.status(403).json({
        error: true,
        errMessage: "Forbidden!, please login again to access this api",
      });
    await Withdrawal_request.findByIdAndDelete(req.body.withdrawal_request);
    res.status(200).json({
      error: false,
      message: "you successfully deleted a withdrawal request",
    });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});

module.exports = Router;
