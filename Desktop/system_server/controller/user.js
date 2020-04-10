const Router = require("koa-router")
const router = new Router()
const mongoose = require("mongoose")

router.post("/loginUser", async ctx => {
  const loginUser = ctx.request.body
  const username = loginUser.username
  const password = loginUser.password
  const role = loginUser.role
  const User = mongoose.model("User")
  await User.findOne({ $or: [{ username: username }, { role: role }] })
    .exec()
    .then(async result => {
      if (result) {
        const newUser = new User()
        await newUser
          .comparePassword(password, result.password)
          .then(isMatch => {
            if (isMatch) {
              ctx.body = {
                code: 200,
                message: "登录成功",
                role: result.role
              }
            } else {
              ctx.body = {
                code: 202,
                message: "密码错误"
              }
            }
          })
      } else {
        ctx.body = {
          code: 201,
          message: "用户名不存在"
        }
      }
    })
    .catch(err => console.log(err))
})

router.post("/registerUser", async ctx => {
  const User = mongoose.model("User")
  const newUser = new User(ctx.request.body)
  await newUser
    .save()
    .then(() => {
      ctx.body = {
        code: 200,
        message: "注册成功，快去登录吧"
      }
    })
    .catch(err => {
      ctx.body = {
        code: 500,
        message: err
      }
    })
})

module.exports = router
