import React, { Component } from "react"
import axios from "axios"
import url from "../../../../service.config"
import WrapperContent from "../../../common/wrapperContent/index"
import styles from "./index.module.scss"

class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {
      basisInfo: {},
      experienceInfo: {},
      projectInfo: {},
      educationInfo: {},
      serviceInfo: {}
    }
  }

  componentDidMount() {
    const { publishId } = this.props
    publishId.length !== 0 &&
      publishId.map(item => {
        return axios({
          method: "get",
          url: url.getResumeUser,
          params: { resumeId: item }
        }).then(res => {
          if (res.data) {
            const username = res.data.length !== 0 && res.data[0].username
            const promises = [
              axios({
                method: "get",
                url: url.getBasisInfo,
                params: { username }
              }).then(res => {
                this.setState({
                  basisInfo: res.data
                })
              }),
              axios({
                method: "get",
                params: { username },
                url: url.getExperience
              }).then(res => {
                this.setState({
                  experienceInfo: res.data
                })
              }),
              axios({
                method: "get",
                params: { username },
                url: url.getProject
              }).then(res => {
                this.setState({
                  projectInfo: res.data
                })
              }),
              axios({
                method: "get",
                params: { username },
                url: url.getEducation
              }).then(res => {
                this.setState({
                  educationInfo: res.data
                })
              }),
              axios({
                method: "get",
                params: { username },
                url: url.getService
              }).then(res => {
                this.setState({
                  serviceInfo: res.data
                })
              })
            ]
            Promise.all(promises)
          }
        })
      })
  }

  render() {
    const {
      basisInfo,
      experienceInfo,
      projectInfo,
      educationInfo,
      serviceInfo
    } = this.state
    return (
      <div className={styles.wrapper}>
        {Object.keys(basisInfo).length === 0 ? (
          "暂无收到的简历~"
        ) : (
          <>
            <div
              className={styles.header}
            >{`${basisInfo.chineseName}的简历`}</div>
            <WrapperContent title="个人信息" />
            <div className={styles.content}>
              <div className={styles.leftContent}>
                <div>中文名：{basisInfo.chineseName}</div>
                <div>年龄：{basisInfo.age}</div>
                <div>求职信息：{basisInfo.present}</div>
                <div> 联系方式：{basisInfo.tel}</div>
              </div>
              <div className={styles.rightContent}>
                <div>英文名：{basisInfo.englishName}</div>
                <div>性别：{basisInfo.sex}</div>
                <div>身份证号：{basisInfo.identity}</div>
                <div>邮箱：{basisInfo.mail}</div>
              </div>
            </div>
            <WrapperContent title="教育信息" />
            <div className={styles.content}>
              <div className={styles.leftContent}>
                <div>学校名称：{educationInfo.school}</div>
                <div>学历：{educationInfo.record}</div>
                <div style={{ width: "100%" }}>
                  在校经历：{educationInfo.schoolExperience}
                </div>
              </div>
              <div className={styles.rightContent}>
                <div>专业：{educationInfo.major}</div>
              </div>
            </div>
            <WrapperContent title="实习经历" />
            <div className={styles.flexContent}>
              <div className={styles.halfWidth}>
                <div>公司名称：{experienceInfo.companyName}</div>
                <div>职位名称：{experienceInfo.positionName}</div>
              </div>
              <div className={styles.halfWidth}>
                <div>公司所属行业：{experienceInfo.trade}</div>
                <div>所在部门：{experienceInfo.department}</div>
              </div>
            </div>
            <div className={styles.allWidth}>
              实习内容：{experienceInfo.practiceContent}
            </div>
            <div className={styles.allWidth} style={{ marginBottom: "20px" }}>
              实习成就：{experienceInfo.practiceAchievement}
            </div>
            <WrapperContent title="项目经历" />
            <div className={styles.flexContent}>
              <div className={styles.halfWidth}>
                <div>项目名称：{projectInfo.projectName}</div>
                <div>项目地址：{projectInfo.link}</div>
              </div>
              <div className={styles.halfWidth}>
                <div>项目中角色：{projectInfo.cosplay}</div>
              </div>
            </div>
            <div className={styles.allWidth}>
              项目内容：{projectInfo.projectContent}
            </div>
            <div className={styles.allWidth} style={{ marginBottom: "20px" }}>
              项目成就：{projectInfo.projectAchievement}
            </div>
            <WrapperContent title="志愿服务经历" />
            <div className={styles.flexContent}>
              <div className={styles.halfWidth}>
                <div>项目名称：{serviceInfo.serviceName}</div>
              </div>
              <div className={styles.halfWidth}>
                <div>服务时长：{serviceInfo.serviceTime}</div>
              </div>
            </div>
            <div className={styles.allWidth}>
              项目内容{serviceInfo.serviceContent}
            </div>
            <div className={styles.allWidth}>
              项目成就：{serviceInfo.serviceAchievement}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default Resume
