const Koa = require("koa")
const app = new Koa()

//解决跨域
const cors = require("koa2-cors")
app.use(
  cors({
    origin: ["http://localhost:8080"],
    credentials: true,
  })
)

//处理post请求
const bodyParser = require("koa-bodyparser")
app.use(bodyParser())

const Router = require("koa-router")
let user = require("./controller/user")
let studentBasis = require("./controller/studentBasis")
let studentExperience = require("./controller/studentExperience")
let studentProject = require("./controller/studentProject")
let studentEducation = require("./controller/studentEducation")
let studentService = require("./controller/studentService")

let router = new Router()
router.use("/user", user.routes())
router.use("/studentBasis", studentBasis.routes())
router.use("/studentExperience", studentExperience.routes())
router.use("/studentProject", studentProject.routes())
router.use("/studentEducation", studentEducation.routes())
router.use("/studentService", studentService.routes())
app.use(router.routes())
app.use(router.allowedMethods()) //接受get就是get post就是post

//入口文件中引入 初始化mongoose文件
const { connect, initSchemas } = require("./init")

const startDB = async () => {
  await connect()
  initSchemas()
}
startDB()

app.use(async ctx => {
  ctx.body = "hello world"
})

app.listen(3000, () => {
  console.log("start system server")
})
