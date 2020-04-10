const Router = require("koa-router")
const router = new Router()
const mongoose = require("mongoose")

router.post("/postExperience", async ctx => {
  const ExperienceSchema = mongoose.model("Experience")
  const experienceSchema = new ExperienceSchema(ctx.request.body)
  await ExperienceSchema.find((err, res) => {
    if (res.length === 0) {
      experienceSchema.save()
      ctx.body = {
        code: 200,
        message: "保存成功"
      }
    } else {
      const id = res[0]._id
      ExperienceSchema.findByIdAndUpdate(id, ctx.request.body, (err, res) => {
        if (err) {
          ctx.body = {
            code: 500,
            message: "更新失败"
          }
        } else {
          ctx.body = {
            code: 200,
            message: "更新成功"
          }
        }
      })
    }
  })
})

router.get("/getExperience", async ctx => {
  const Experience = mongoose.model("Experience")
  await Experience.findOne({ username: ctx.query.username })
    .then(res => {
      ctx.body = res
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
