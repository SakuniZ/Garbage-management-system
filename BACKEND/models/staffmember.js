const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const staffmemberSchema = new Schema({
  mname: {
    type: String,
    required: true,
  },
  memail: {
    type: String,
    required: true,
  },
  mphone: {
    type: Number,
    required: true,
  },
  mdate: {
    type: String,
    required: true,
  },
  maddress: {
    type: String,
    required: true,
  },
  mage: {
    type: Number,
    required: true,
  },
  mgender: {
    type: String,
    required: true,
  },
  mrole: {
    type: String,
    required: true,
  },
  mnic: {
    type: Number,
    required: true,
  },
  mwdays: {
    type: String,
    required: true,
  },
  msalary: {
    type: Number,
    required: true,
  },
});

const StaffMember = mongoose.model("StaffMember", staffmemberSchema);
module.exports = StaffMember;
