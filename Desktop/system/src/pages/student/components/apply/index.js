import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import WrapperContent from "../../../common/wrapperContent/index"
import {
  MessageOutlined,
  WarningOutlined,
  CheckCircleOutlined
} from "@ant-design/icons"
import axios from "axios"
import url from "../../../../service.config"
import styles from "./index.module.scss"

class Apply extends Component {
  constructor(props) {
    super(props)
    this.state = {
      applyId: [],
      applyInfo: []
    }
  }

  componentDidMount() {
    const { username } = this.props
    const applyInfo = []
    axios({
      method: "get",
      url: url.getMyApplyId,
      params: { username }
    }).then(res => {
      res.data.map(item => {
        return axios({
          method: "get",
          url: url.getMyApplyInfo,
          params: {
            applyId: item.id
          }
        }).then(res => {
          applyInfo.push(res.data)
          this.setState({
            applyInfo
          })
        })
      })
    })
  }

  render() {
    const { applyInfo } = this.state
    console.log(applyInfo)
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <WrapperContent title="求职申请" />
        </div>
        {applyInfo.length === 0 ? (
          <div className={styles.card}>
            <WarningOutlined
              style={{ marginTop: "6px", marginRight: "10px", color: "yellow" }}
            />
            <span style={{ textAlign: "center", fontSize: "16px" }}>
              您还未申请任何职位，请先申请再来查看~
            </span>
          </div>
        ) : (
          applyInfo.map(item => {
            return (
              <div className={styles.card} key={item._id}>
                <div className={styles.leftContent}>
                  <div className={styles.position}>
                    {item.positionInfo.positionName}
                  </div>
                  <div>
                    <span className={styles.salary}>
                      {item.positionInfo.pay}
                    </span>
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
                  <div className={styles.alreadyApply}>
                    <CheckCircleOutlined />
                    <span>已申请</span>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    )
  }
}

export default withRouter(Apply)
