const SERVICE = "http://localhost:3000/"
const url = {
  registerUser: SERVICE + "user/registerUser",
  loginUser: SERVICE + "user/loginUser",
  postBasisInfo: SERVICE + "studentBasis/postBasisInfo",
  postExperience: SERVICE + "studentExperience/postExperience",
  postProject: SERVICE + "studentProject/postProject",
  postEducation: SERVICE + "studentEducation/postEducation",
  postService: SERVICE + "studentService/postService",
  getBasisInfo: SERVICE + "studentBasis/getBasisInfo",
  getExperience: SERVICE + "studentExperience/getExperience",
  getProject: SERVICE + "studentProject/getProject",
  getEducation: SERVICE + "studentEducation/getEducation",
  getService: SERVICE + "studentService/getService"
}

export default url
