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
  //企业子系统
  publishPos: SERVICE + "company/publishPos"
}

export default url
