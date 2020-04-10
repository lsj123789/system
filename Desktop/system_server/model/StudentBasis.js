const mongoose = require("mongoose")
const Schema = mongoose.Schema

const basisSchema = new Schema({
  basisId: Schema.Types.ObjectId,
  username:String,
  chineseName: String,
  englishName: String,
  age: Number,
  sex: String,
  identity: Number,
  present: String,
  tel: Number,
  mail: String
})

module.exports = mongoose.model("Basis", basisSchema)
