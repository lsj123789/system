const mongoose = require("mongoose")
const Schema = mongoose.Schema

const projectSchema = new Schema({
  experienceId: Schema.Types.ObjectId,
  username:String,
  cosplay: String,
  link: String,
  period: Array,
  projectAchievement: String,
  projectContent: String,
  projectName: String
})

module.exports = mongoose.model("Project", projectSchema)
