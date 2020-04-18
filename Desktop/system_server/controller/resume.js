const Router = require("koa-router")
const router = new Router()
const mongoose = require("mongoose")

router.post("/postResume", async ctx => {
  const Resume = mongoose.model("Resume")
  const resume = new Resume(ctx.request.body)
  await resume.save().then(() => {
    ctx.body = {
      code: 200,
      message: "简历投递成功！"
    }
  })
})

router.get("/getMyApplyId", async ctx => {
  const Resume = mongoose.model("Resume")
  const username = ctx.request.query.username
  await Resume.find({ username }).then(res => {
    ctx.body = res
  })
})

router.get("/getMyApplyInfo", async ctx => {
  const company = mongoose.model("Company")
  const { applyId } = ctx.request.query
  await company.findOne({  _id: applyId  }).then(res => {
    ctx.body = res
  })
})

module.exports = router
