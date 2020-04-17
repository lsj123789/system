const Router = require("koa-router")
const router = new Router()
const mongoose = require("mongoose")

router.post("/publishPos", async ctx => {
  const Company = mongoose.model("Company")
  const company = new Company(ctx.request.body)
  await company
    .save()
    .then(() => {
      ctx.body = {
        code: 200,
        message: "提交成功"
      }
    })
    .catch(err => console.log(err))
})

router.get("/getMyPublish", async ctx => {
  const Company = mongoose.model("Company")
  await Company.find({ username: ctx.request.query[0] })
    .then(res => {
      ctx.body = {
        code: 200,
        message: "请求成功",
        data: res
      }
    })
    .catch(err => console.log(err))
})

router.get("/getAllPublishInfo", async ctx => {
  const Company = mongoose.model("Company")
  await Company.find().then(res => {
    ctx.body = res
  })
})

router.post("/passPublishInfo", async ctx => {
  const company = mongoose.model("Company")
  const { id, condition } = ctx.request.body
  await company.update({ _id: id }, { condition: condition }).then(res => {
    ctx.body = {
      code: 200,
      message: "信息审核已通过"
    }
  })
})

router.post("/deletePublishInfo", async ctx => {
  const Company = mongoose.model("Company")
  const company = new Company()
  const { id } = ctx.request.body
  await company.delete({ _id: id }).then(() => {
    ctx.body = {
      code: 200,
      message: "删除成功！"
    }
  })
})

module.exports = router
