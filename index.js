const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());

// app.use("/", express.static("html"));
// /api/user/referral/fetch
// app.use("/admin", express.static("admin"));

const admin_login = require("./admin_api/login");
app.use("/api/admin/login", admin_login);
const admin_fetchuser = require("./admin_api/fetch_user");
app.use("/api/admin/fetch_users", admin_fetchuser);
const admin_deleteuser = require("./admin_api/delete_user");
app.use("/api/admin/users/delete_user", admin_deleteuser);
const admin_fetch_deposit_request = require("./admin_api/fetch_deposit_request");
app.use("/api/admin/deposit_request", admin_fetch_deposit_request);
const approve_deposit = require("./admin_api/approve_deposit");
app.use("/api/admin/deposit/approve", approve_deposit);

const fund_user = require("./admin_api/fund_user");
app.use("/api/admin/user/fund", fund_user);
const admin_fetch_investment = require("./admin_api/fetch_investment");
app.use("/api/admin/investment/fetch", admin_fetch_investment);
const admin_cancel_investment = require("./admin_api/cancel_investment");
app.use("/api/admin/investment/cancel", admin_cancel_investment);
const admin_fetch_withdrawal = require("./admin_api/fetch_withdrawal");
app.use("/api/admin/withdrawal/fetch", admin_fetch_withdrawal);
const raise_min_investment = require("./admin_api/upgrade_account");
app.use("/api/admin/user/investment_min/raise", raise_min_investment);
const login = require("./api/login");
app.use("/api/user/login", login);
const register = require("./api/register");
app.use("/api/newuser/register", register);

const save_user_info = require("./api/save_user_Info");
app.use("/api/user/user_info/save", save_user_info);

const complete_registration = require("./api/complete-registration");
app.use("/api/new_user/complete_registration", complete_registration);

const fetch_referral = require("./api/fetch_referrals");
app.use("/api/user/referral/fetch", fetch_referral);

const find_user = require("./api/find_user");
app.use("/api/user/find", find_user);
const create_new_deposit = require("./api/deposit_request");
app.use("/api/user/create_deposit", create_new_deposit);
const complete_deposit = require("./api/complete_deposit");
app.use("/api/user/deposit/complete", complete_deposit);
const fetch_transactions = require("./api/fetch_transactions");
app.use("/api/user/transactions/fetch", fetch_transactions);
const create_investment = require("./api/create_investment");
app.use("/api/user/create_investment", create_investment);

const cancel_investment = require("./api/cancel_investment");
app.use("/api/user/investment/cancel", cancel_investment);

const fetch_investment = require("./api/fetch_investment");
app.use("/api/user/investments/fetch", fetch_investment);

const withdrawal = require("./api/withdraw");
app.use("/api/user/withdraw", withdrawal);

const forgotten_password = require("./api/forgotten-password");
app.use("/api/password/forgotten", forgotten_password);
const reset_password = require("./api/reset-password");
app.use("/api/user/password/reset", reset_password);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`running on port ${port}`));

// ref
