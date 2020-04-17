const SERVICE = "http://localhost:3000/"
const url = {
  //登录注册
  registerUser: SERVICE + "user/registerUser",
  loginUser: SERVICE + "user/loginUser",
  // 学生子系统
  postBasisInfo: SERVICE + "studentBasis/postBasisInfo",
  postExperience: SERVICE + "studentExperience/postExperience",
  postProject: SERVICE + "studentProject/postProject",
  postEducation: SERVICE + "studentEducation/postEducation",
  postService: SERVICE + "studentService/postService",
  getBasisInfo: SERVICE + "studentBasis/getBasisInfo",
  getExperience: SERVICE + "studentExperience/getExperience",
  getProject: SERVICE + "studentProject/getProject",
  getEducation: SERVICE + "studentEducation/getEducation",
  getService: SERVICE + "studentService/getService",
  getPassPublishInfo: SERVICE + "company/getPassPublishInfo",
  getByEducational: SERVICE + "company/getByEducational",
  getBySalary: SERVICE + "company/getBySalary",
  getByTrade: SERVICE + "company/getByTrade",
  getByScale: SERVICE + "company/getByScale",
  getByFinance: SERVICE + "company/getByFinance",
  searchPositionInfo: SERVICE + "company/searchPositionInfo",
  //企业子系统
  publishPos: SERVICE + "company/publishPos",
  getMyPublish: SERVICE + "company/getMyPublish",
  // 管理员子系统
  getAllPublishInfo: SERVICE + "company/getAllPublishInfo",
  passPublishInfo: SERVICE + "company/passPublishInfo",
  deletePublishInfo: SERVICE + "company/deletePublishInfo"
}

export default url
