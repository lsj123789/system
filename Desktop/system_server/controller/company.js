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

module.exports = router
