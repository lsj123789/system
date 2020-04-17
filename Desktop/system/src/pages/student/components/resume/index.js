import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import WrapperContent from "../../../common/wrapperContent/index"
import styles from "./index.module.scss"

class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { resume } = this.props
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>个人简历</div>
        <WrapperContent title="个人信息" />
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <div>中文名：{resume.basisInfo.chineseName}</div>
            <div>年龄：{resume.basisInfo.age}</div>
            <div>求职信息：{resume.basisInfo.present}</div>
            <div> 联系方式：{resume.basisInfo.tel}</div>
          </div>
          <div className={styles.rightContent}>
            <div>英文名：{resume.basisInfo.englishName}</div>
            <div>性别：{resume.basisInfo.sex}</div>
            <div>身份证号：{resume.basisInfo.identity}</div>
            <div>邮箱：{resume.basisInfo.mail}</div>
          </div>
        </div>
        <WrapperContent title="教育信息" />
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <div>学校名称：{resume.educationInfo.school}</div>
            <div>学历：{resume.educationInfo.record}</div>
            <div style={{ width: "100%" }}>
              在校经历：{resume.educationInfo.schoolExperience}
            </div>
          </div>
          <div className={styles.rightContent}>
            <div>专业：{resume.educationInfo.major}</div>
          </div>
        </div>
        <WrapperContent title="实习经历" />
        <div className={styles.flexContent}>
          <div className={styles.halfWidth}>
            <div>公司名称：{resume.experienceInfo.companyName}</div>
            <div>职位名称：{resume.experienceInfo.positionName}</div>
          </div>
          <div className={styles.halfWidth}>
            <div>公司所属行业：{resume.experienceInfo.trade}</div>
            <div>所在部门：{resume.experienceInfo.department}</div>
          </div>
        </div>
        <div className={styles.allWidth}>
          实习内容：{resume.experienceInfo.practiceContent}
        </div>
        <div className={styles.allWidth} style={{marginBottom:'20px'}}>
          实习成就：{resume.experienceInfo.practiceAchievement}
        </div>
        <WrapperContent title="项目经历" />
        <div className={styles.flexContent}>
          <div className={styles.halfWidth}>
            <div>项目名称：{resume.projectInfo.projectName}</div>
            <div>项目地址：{resume.projectInfo.link}</div>
          </div>
          <div className={styles.halfWidth}>
            <div>项目中角色：{resume.projectInfo.cosplay}</div>
          </div>
        </div>
        <div className={styles.allWidth}>
          项目内容：{resume.projectInfo.projectContent}
        </div>
        <div className={styles.allWidth} style={{marginBottom:'20px'}}>
          项目成就：{resume.projectInfo.projectAchievement}
        </div>
        <WrapperContent title="志愿服务经历" />
        <div className={styles.flexContent}>
          <div className={styles.halfWidth}>
            <div>项目名称：{resume.serviceInfo.serviceName}</div>
          </div>
          <div className={styles.halfWidth}>
            <div>服务时长：{resume.serviceInfo.serviceTime}</div>
          </div>
        </div>
        <div className={styles.allWidth}>
          项目内容{resume.serviceInfo.serviceContent}
        </div>
        <div className={styles.allWidth}>
          项目成就：{resume.serviceInfo.serviceAchievement}
        </div>
      </div>
    )
  }
}

export default withRouter(Resume)
