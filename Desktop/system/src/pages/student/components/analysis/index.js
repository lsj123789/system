import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { Progress } from "antd"
import WrapperContent from "../../../common/wrapperContent/index"
import styles from "./index.module.scss"

class Analysis extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // 学历竞争力分析
  renderEducation = () => {
    const { resume } = this.props
    const { educationInfo } = resume
    const { record } = educationInfo
    let percent = 0
    if (record === "初中及以下") {
      percent += 20
    } else if (record === "高中") {
      percent += 40
    } else if (record === "本科") {
      percent += 60
    } else if (record === "硕士") {
      percent += 75
    } else if (record === "博士") {
      percent += 86
    } else if (record === "博士后") {
      percent += 95
    }
    return (
      <div>
        <WrapperContent title="学历竞争力分析" />
        <div className={styles.progress}>
          <div className={styles.left}>
            <Progress
              type="circle"
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068"
              }}
              strokeWidth="10"
              percent={percent}
              width={200}
            />
          </div>
          <div className={styles.right}>
            恭喜您！您的综合学历竞争力已超过{percent}%的同学！
            <div>
              根据中国国家统计局数据显示人口数据统计结果：80后人口2.28亿,90后1.74亿,00后
              1.46亿，80-90占比约30%，计算总人数约为4亿人左右。
            </div>
            <div>
              根据您的学历背景、所在学校以及专业匹配度综合分析，您在该职位候选人的竞争力
              达到 {percent}%
            </div>
            <div>
              请保持手机畅通，方便hr同学和您联系。并时常查看邮箱，确认笔试面试邮件，祝好运！
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 项目竞争力分析
  renderProject = () => {
    const { resume } = this.props
    const { projectInfo } = resume
    const { projectAchievement, projectContent } = projectInfo
    const achieveLen = [...projectAchievement].length
    const contentLen = [...projectContent].length
    let percent = achieveLen + contentLen <= 80 ? achieveLen + contentLen : 90
    return (
      <div>
        <WrapperContent title="项目竞争力分析" />
        <div className={styles.progress}>
          <div className={styles.left}>
            <Progress
              type="circle"
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068"
              }}
              strokeWidth="10"
              percent={percent}
              width={200}
            />
          </div>
          <div className={styles.right}>
            恭喜您！您的项目经历竞争力已超过{percent}%的同学！
            <div>
              {percent < 40 ? (
                <span>
                  您的项目描述过于简单，项目成绩不太突出，建议您可以将项目描述展开来写,具体描述
                  下您在项目中做了哪些模块，实现了怎样的功能。最后请突出您在该项目中
                  所起到的作用以及项目最终取得了怎样的成绩
                </span>
              ) : (
                <span>
                  您的项目描述较为完整，但是项目成绩部分描述过少。建议您可以突出一下项目
                  最后取得了怎样的成绩。
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 社会竞争力分析
  renderService = () => {
    const { resume } = this.props
    const { serviceInfo } = resume
    const { serviceAchievement, serviceContent } = serviceInfo
    const achieveLen = [...serviceAchievement].length
    const contentLen = [...serviceContent].length
    let percent = achieveLen + contentLen <= 80 ? achieveLen + contentLen : 90
    return (
      <div>
        <WrapperContent title="社会竞争力分析" />
        <div className={styles.progress}>
          <div className={styles.left}>
            <Progress
              type="circle"
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068"
              }}
              strokeWidth="10"
              percent={percent}
              width={200}
            />
          </div>
          <div className={styles.right}>
            恭喜您！您的社会竞争力已超过{percent}%的同学！
            <div>
              {percent < 40 ? (
                <span>
                  您的志愿服务项目过于单调，和职位要求的项目经历匹配度不高，建议您根据职位要求完善一下
                  自己的社会服务经历。同时，您的服务时长相比之下不太高，这种情况下，您可以侧重于您的
                  项目成就，突出您在项目中做的贡献，以及该项目在您的贡献下取得了怎样的结果。
                </span>
              ) : (
                <span>
                  您的志愿服务经历比较完善，和职位要求的项目经历匹配度相对较高。超过了相当一部分同学
                  但是您的服务经历描述相对简单，建议您可以多多描述一下项目过程以及项目中遇到了
                  哪些困难，您是怎样解决的，您从这些困难中得到了怎样的启发。
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>我的竞争力分析</div>
        {this.renderEducation()}
        {this.renderProject()}
        {this.renderService()}
      </div>
    )
  }
}

export default withRouter(Analysis)
