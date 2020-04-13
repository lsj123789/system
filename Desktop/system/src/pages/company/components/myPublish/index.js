import React, { Component } from "react"
// import { Tabs } from "antd"
import { MessageOutlined } from "@ant-design/icons"
import axios from "axios"
import url from "../../../../service.config"
import styles from "./index.module.scss"

// const { TabPane } = Tabs

class MyPublish extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myPublish: []
    }
  }

  componentDidMount() {
    const { username } = this.props
    axios({
      url: url.getMyPublish,
      method: "get",
      params: username
    }).then(res => {
      this.setState({
        myPublish: res.data.data
      })
    })
  }

  renderPublishCard = () => {
    const { myPublish } = this.state
    return myPublish.length === 0 ? (
      <div className={styles.noCard}>
        <div className={styles.bg} />
        <div className={styles.message}>
          您还未发布任何职位，请先发布之后再来查看~
        </div>
      </div>
    ) : (
      myPublish.map(item => {
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
            </div>
          </div>
        )
      })
    )
  }

  render() {
    return <div className={styles.wrapper}>{this.renderPublishCard()}</div>
  }
}

export default MyPublish
