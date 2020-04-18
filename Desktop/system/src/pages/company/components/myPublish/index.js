import React, { Component } from "react"
import { MessageOutlined } from "@ant-design/icons"
import WrapperContent from "../../../common/wrapperContent/index"
import styles from "./index.module.scss"

class MyPublish extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderPublishCard = () => {
    const { myPublish } = this.props
    return myPublish.length === 0 ? (
      <div className={styles.noCard}>
        <div className={styles.bg} />
        <div className={styles.message}>
          您还未发布任何职位，请先发布之后再来查看~
        </div>
      </div>
    ) : (
      <div className={styles.wrapper}>
        <WrapperContent title="我发布的职位" />
        {myPublish.map(item => {
          return (
            <div className={styles.card} key={item._id}>
              <div className={styles.leftContent}>
                <div className={styles.position}>
                  {item.positionInfo.positionName}
                </div>
                <div>
                  <span className={styles.salary}>{item.positionInfo.pay}</span>
                  <span className={styles.line}>|</span>
                  <span>{item.positionInfo.educational}</span>
                  <span className={styles.contact}>
                    <MessageOutlined />
                    <span>
                      {item.personalInfo.personalName} |{" "}
                      {item.personalInfo.personPos}
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.rightContent}>
                <div className={styles.company}>
                  {item.companyInfo.companyName}
                </div>
                <div>
                  <span>{item.companyInfo.trade}</span>
                  <span>|</span>
                  <span>{item.companyInfo.finance}</span>
                  <span>|</span>
                  <span>{item.companyInfo.scale}</span>
                </div>
                {item.condition === false ? (
                  <div className={styles.noPass}>等待审核中</div>
                ) : (
                  <div className={styles.pass}>已通过审核</div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    return <>{this.renderPublishCard()}</>
  }
}

export default MyPublish
