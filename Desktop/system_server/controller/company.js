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
//删选通过审核的招聘信息
router.get("/getPassPublishInfo", async ctx => {
  const company = mongoose.model("Company")
  const condition = ctx.request.query.condition
  await company.find({ condition }).then(res => {
    ctx.body = res
  })
})
//通过学历筛选
router.get("/getByEducational", async ctx => {
  const company = mongoose.model("Company")
  const educational = ctx.request.query.educational
  await company.find({ "positionInfo.educational": educational }).then(res => {
    ctx.body = res
  })
})

//通过薪资筛选
router.get("/getBySalary", async ctx => {
  const company = mongoose.model("Company")
  const pay = ctx.request.query.pay
  await company.find({ "positionInfo.pay": pay }).then(res => {
    ctx.body = res
  })
})

//通过公司行业筛选
router.get("/getByTrade", async ctx => {
  const company = mongoose.model("Company")
  const trade = ctx.request.query.trade
  await company.find({ "companyInfo.trade": trade }).then(res => {
    ctx.body = res
  })
})

//通过公司规模筛选
router.get("/getByScale", async ctx => {
  const company = mongoose.model("Company")
  const scale = ctx.request.query.scale
  await company.find({ "companyInfo.scale": scale }).then(res => {
    ctx.body = res
  })
})

//通过融资阶段筛选
router.get("/getByFinance", async ctx => {
  const company = mongoose.model("Company")
  const finance = ctx.request.query.finance
  await company.find({ "companyInfo.finance": finance }).then(res => {
    ctx.body = res
  })
})

// 搜索
router.get("/searchPositionInfo", async ctx => {
  const company = mongoose.model("Company")
  const { positionName, companyName } = ctx.request.query
  await company
    .find({
      $or: [
        { "companyInfo.companyName": companyName },
        { "positionInfo.positionName": positionName }
      ]
    })
    .then(res => {
      ctx.body = res
    })
})

router.post("/passPublishInfo", async ctx => {
  const company = mongoose.model("Company")
  const { id, condition } = ctx.request.body
  await company.updateOne({ _id: id }, { condition: condition }).then(res => {
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
