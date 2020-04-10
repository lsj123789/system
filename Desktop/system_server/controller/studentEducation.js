const Router = require("koa-router")
const router = new Router()
const mongoose = require("mongoose")

router.post("/postEducation", async ctx => {
  const EducationSchema = mongoose.model("Education")
  const educationSchema = new EducationSchema(ctx.request.body)
  await EducationSchema.find((err, res) => {
    if (res.length === 0) {
      educationSchema.save()
      ctx.body = {
        code: 200,
        message: "保存成功"
      }
    } else {
      const id = res[0]._id
      EducationSchema.findByIdAndUpdate(id, ctx.request.body, (err, res) => {
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

router.get("/getEducation", async ctx => {
  const Education = mongoose.model("Education")
  await Education.findOne({ username: ctx.query.username })
    .then(res => {
      ctx.body = res
    })
    .catch(err => {
      console.log(err)
    })
})


module.exports = router
