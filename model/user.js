const mongoose = require("mongoose");
const connect = require("./dbConnector");
connect("connected to user database");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  first_name: String,
  last_name: String,
  passport: String,
  password: String,
  final_balance: {
    type: Number,
    default: 0,
  },
  profit_loss: {
    type: Number,
    default: 0,
  },
  active_investment: {
    type: Number,
    default: 0,
  },
  referral_bonus: {
    type: Number,
    default: 0,
  },
  referral_link: String,
  // has_made_deposit: {
  //   type: Boolean,
  //   required: true,
  //   default: false,
  // },
  referral: String,
  // created_basic_investment_more_than_once: {
  //   type: Number,
  //   default: 0,
  // },
  min_investment: {
    type: Number,
    required: true,
    default: 0,
  },
  made_first_deposit: {
    type: Boolean,
    required: true,
    default: false,
  },
  first_deposit: {
    type: Number,
    default: 0,
    required: true,










    
  },
  // created_same_investment_ealier: {
  //   type: Number,
  //   default: 0,
  // },
  // prev_investment: {
  //   type: Number,
  //   default: 0,
  // },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
