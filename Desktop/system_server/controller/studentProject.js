const Router = require("koa-router")
const router = new Router()
const mongoose = require("mongoose")

router.post("/postProject", async ctx => {
  const ProjectSchema = mongoose.model("Project")
  const projectSchema = new ProjectSchema(ctx.request.body)
  await ProjectSchema.find((err, res) => {
    if (res.length === 0) {
      projectSchema.save()
      ctx.body = {
        code: 200,
        message: "保存成功"
      }
    } else {
      const id = res[0]._id
      ProjectSchema.findByIdAndUpdate(id, ctx.request.body, (err, res) => {
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


router.get("/getProject", async ctx => {
  const ProjectSchema = mongoose.model("Project")
  await ProjectSchema.findOne({ username: ctx.query.username })
    .then(res => {
      ctx.body = res
    })
    .catch(err => {
      console.log(err)
    })
})


module.exports = router
