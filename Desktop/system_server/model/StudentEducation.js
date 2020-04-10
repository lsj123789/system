const mongoose = require("mongoose")
const Schema = mongoose.Schema

const educationSchema = new Schema({
  experienceId: Schema.Types.ObjectId,
  username:String,
  major: String,
  school: String,
  schoolTime: Array,
  schoolExperience: String,
  record: String
})

module.exports = mongoose.model("Education", educationSchema)
