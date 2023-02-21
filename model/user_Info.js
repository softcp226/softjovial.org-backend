const mongoose = require("mongoose");
const connect = require("./dbConnector");
connect("connected to user database");
require("./user");
const user_Info_Schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  phone_number: String,
  address_line: String,
  zip_code: {
    type: String,
    required: true,
  },
  swift_code: String,
  routing_number: {
    type: String,
    required: true,
  },
  bank_name: {
    type: String,
    required: true,
  },
  account_name: {
    type: String,
    required: true,
  },
  account_number: {
    type: String,
    required: true,
  },
});

const User_Info = mongoose.model("user_Info", user_Info_Schema);
module.exports = User_Info;
