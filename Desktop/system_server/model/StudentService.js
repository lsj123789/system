const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ServiceSchema = new Schema({
  experienceId: Schema.Types.ObjectId,
  username:String,
  serviceAchievement: String,
  serviceContent: String,
  servicePeriod: Array,
  serviceName: String,
  serviceTime: String,
})

module.exports = mongoose.model("Service", ServiceSchema)
