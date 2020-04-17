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

module.exports = router
