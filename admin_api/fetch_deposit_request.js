const express = require("express");
const Router = express.Router();
const verifyToken = require("../secure-admin-api/verifyToken");
const Deposit_request = require("../model/deposit_request");
const Transaction = require("../model/transaction");
const Admin = require("../model/admin");

const validate_admin = require("../validation/validate-admin-fetchuser");
const validate_admin_fetch_deposit = require("../validation/validate_admin_fetch_deposit");
Router.post("/", verifyToken, async (req, res) => {
  const request_isvalid = validate_admin(req.body);
  if (request_isvalid != true)
    return res.status(400).json({ error: true, errMessage: request_isvalid });
  try {
    const admin = await Admin.findById(req.body.admin);
    if (!admin)
      return res.status(403).json({
        error: true,
        errMessage: "Forbidden!, please login again to access this api",
      });

    const deposit_request = await Deposit_request.find().populate("user");
    if (deposit_request.length < 1)
      return res.status(400).json({
        error: true,
        errMessage: "No one has made a deposit at the moment",
      });
    res.status(200).json({ error: false, message: deposit_request });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: true, errMessage: error.message });
  }
});

Router.post("/single", verifyToken, async (req, res) => {
  const request_isvalid = validate_admin_fetch_deposit(req.body);
  if (request_isvalid != true)
    return res.status(400).json({ error: true, errMessage: request_isvalid });

  try {
    const admin = await Admin.findById(req.body.admin);
    if (!admin)
      return res.status(403).json({
        error: true,
        errMessage: "Forbidden!, please login again to access this api",
      });

    const deposit_request = await Deposit_request.findById(
      req.body.deposit_request
    );
    if (!deposit_request)
      return res.status(404).json({
        error: true,
        errMessage: "the deposit request you requested for no longer exist",
      });
    res.status(200).json({ error: false, message: deposit_request });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});

Router.delete("/delete", verifyToken, async (req, res) => {
  const request_isvalid = validate_admin_fetch_deposit(req.body);
  if (request_isvalid != true)
    return res.status(400).json({ error: true, errMessage: request_isvalid });

  try {
    const admin = await Admin.findById(req.body.admin);
    if (!admin)
      return res.status(403).json({
        error: true,
        errMessage: "Forbidden!, please login again to access this api",
      });

    const deposit_request = await Deposit_request.findById(
      req.body.deposit_request
    );
    if (!deposit_request)
      return res.status(404).json({
        error: true,
        errMessage: "the deposit request you requested for no longer exist",
      });
    const transaction = await Transaction.findById(deposit_request.transaction);
    if (!transaction)
      return res.status(400).json({
        error: true,
        errMessage:
          "An unexpected error occured,the deposit you requested to delete is not associated with a transaction",
      });
    transaction.set({ status: "failed" });
    await transaction.save();
    await Deposit_request.findByIdAndDelete(req.body.deposit_request);

    res.status(200).json({
      error: false,
      message: "successfully deleted a deposit request",
    });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});

module.exports = Router;
