const Router = require("koa-router")
const router = new Router()
const mongoose = require("mongoose")

router.post("/postBasisInfo", async ctx => {
  const BasisSchema = mongoose.model("Basis")
  const basisSchema = new BasisSchema(ctx.request.body)
  await BasisSchema.find((err, res) => {
    if (res.length === 0) {
      basisSchema.save()
      ctx.body = {
        code: 200,
        message: "保存成功"
      }
    } else {
      const id = res[0]._id
      BasisSchema.findByIdAndUpdate(id, ctx.request.body, (err, res) => {
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

router.get("/getBasisInfo", async ctx => {
  const BasisSchema = mongoose.model("Basis")
  await BasisSchema.findOne({ username: ctx.query.username })
    .then(res => {
      ctx.body = res
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
