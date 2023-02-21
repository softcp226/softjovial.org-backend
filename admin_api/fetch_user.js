const express = require("express");
const Router = express.Router();
const verifyToken = require("../secure-admin-api/verifyToken");
const Users = require("../model/user");
const Admin = require("../model/admin");
const validate_admin_fetchuser = require("../validation/validate-admin-fetchuser");
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
    const users = await Users.find();
    if (users.length < 1)
      return res
        .status(400)
        .json({ error: true, errMessage: "No registerd user at the moment" });
    res.status(200).json({ error: false, message: users });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});
module.exports = Router;
