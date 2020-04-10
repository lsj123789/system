// 初始化mongoose
const mongoose = require("mongoose")
const db = "mongodb://localhost:27017/manage"

const glob = require("glob")
const path = require("path")
exports.initSchemas = () => {
  //引入所有schema
  glob.sync(path.resolve(__dirname, "./model", "*.js")).forEach(require)
}

exports.connect = () => {
  //连接数据库 解析url
  mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  //监听数据库连接  没连上以及发生错误时时重连 并且发生错误时打印错误
  mongoose.connection.on("disconnected", () => {
    mongoose.connect(db)
  })
  mongoose.connection.on("error", error => {
    console.log(error)
    mongoose.connect(db)
  })
  //连接时
  mongoose.connection.once("open", () => {
    console.log("mongodb connected success")
  })
}
