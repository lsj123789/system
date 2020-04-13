const mongoose = require("mongoose")
const Schema = mongoose.Schema

const companySchema = new Schema({
  username: String,
  companyInfo: {
    companyDesc: String,
    companyName: String,
    finance: String,
    scale: String,
    trade: String
  },
  personalInfo: {
    atmosphere: String,
    personPos: String,
    personalName: String,
    tel: String
  },
  positionInfo: {
    educational: String,
    number: Number,
    pay: String,
    positionName: String,
    require: String,
    workplace: String
  }
})

module.exports = mongoose.model("Company", companySchema)
