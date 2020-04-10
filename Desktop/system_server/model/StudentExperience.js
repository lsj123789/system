const mongoose = require("mongoose")
const Schema = mongoose.Schema

const experienceSchema = new Schema({
  experienceId: Schema.Types.ObjectId,
  username:String,
  companyName: String,
  department: String,
  positionName: String,
  positionTime: Array,
  practiceAchievement: String,
  practiceContent: String,
  trade: String
})

module.exports = mongoose.model("Experience", experienceSchema)
