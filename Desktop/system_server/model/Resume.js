const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ResumeSchema = new Schema({
  resumeInd:Schema.Types.ObjectId,
  username: String
})

module.exports = mongoose.model("Resume", ResumeSchema)
