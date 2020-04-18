const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ResumeSchema = new Schema({
  resumeId: Schema.Types.ObjectId,
  username: String,
  id: { unique: true, index: true, type: String }
})

module.exports = mongoose.model("Resume", ResumeSchema)
