import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { Tabs, Button, Modal, message } from "antd"
import { MessageOutlined, ExclamationCircleOutlined } from "@ant-design/icons"
import axios from "axios"
import url from "../../service.config"
import DetailModal from "./components/detailModal/index"
import styles from "./index.module.scss"

const { TabPane } = Tabs

class Manage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allPublishInfo: [],
      passPublishInfo: [],
      noPassPublishInfo: [],
      detailModalVisible: false,
      detailInfo: {},
      modalFooter: []
    }
  }

  componentDidMount() {
    const { noPassPublishInfo, passPublishInfo } = this.state
    axios.get(`${url.getAllPublishInfo}`).then(res => {
      res.data.filter(item => {
        return item.condition === false
          ? noPassPublishInfo.push(item)
          : passPublishInfo.push(item)
      })
      this.setState({ allPublishInfo: res.data })
    })
    return
  }

  reGetPublishInfo = () => {
    const { noPassPublishInfo, passPublishInfo } = this.state
    axios.get(`${url.getAllPublishInfo}`).then(res => {
      res.data.filter(item => {
        return item.condition === false
          ? noPassPublishInfo.push(item)
          : passPublishInfo.push(item)
      })
      this.setState({ allPublishInfo: res.data })
    })
    return
  }

  handlePass = item => {
    axios({
      url: url.passPublishInfo,
      method: "post",
      data: {
        id: item._id,
        condition: true
      }
    }).then(() => {
      this.reGetPublishInfo()
      this.handleCancelModal()
    })
  }

  handleDelete = id => {
    Modal.confirm({
      title: "确定删除该条招聘信息吗？",
      icon: <ExclamationCircleOutlined />,
      content: "",
      okText: "确定",
      okType: "danger",
      cancelText: "取消",
      onCancel() {
        this.handleCancelModal()
      },
      onOk: () => {
        axios({
          url: url.deletePublishInfo,
          method: "post",
          data: {
            id
          }
        }).then(() => {
          this.reGetPublishInfo()
          this.handleCancelModal()
          message.success("删除成功！")
        })
      }
    })
  }

  handleCancelModal = () => {
    this.setState({
      detailModalVisible: false
    })
  }

  renderPublishCard = () => {
    const { allPublishInfo } = this.state

    const handleGoDetail = item => {
      this.setState({
        detailModalVisible: true,
        detailInfo: item,
        modalFooter: [
          <Button
            key="取消"
            size="large"
            onClick={() => this.handleCancelModal()}
          >
            取消
          </Button>,
          <Button
            key="delete"
            size="large"
            type="danger"
            onClick={() => this.handleDelete(item._id)}
          >
            删除
          </Button>
        ]
      })
    }

    return allPublishInfo.map(item => {
      return (
        <div
          className={styles.card}
          onClick={() => handleGoDetail(item)}
          key={item._id}
        >
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
            <div className={styles.company}>{item.companyInfo.companyName}</div>
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
  }

  renderPassPublishInfo = () => {
    const { passPublishInfo } = this.state

    const handleGoDetail = item => {
      this.setState({
        detailModalVisible: true,
        detailInfo: item,
        modalFooter: [
          <Button
            key="取消"
            size="large"
            onClick={() => this.handleCancelModal()}
          >
            取消
          </Button>,
          <Button
            key="pass"
            size="large"
            type="primary"
            onClick={() => this.handlePass(item)}
            disabled={true}
          >
            通过审核
          </Button>,
          <Button
            key="delete"
            size="large"
            type="danger"
            onClick={() => this.handleDelete(item._id)}
          >
            删除
          </Button>
        ]
      })
    }

    return passPublishInfo.map(item => {
      return (
        <div
          className={styles.card}
          onClick={() => handleGoDetail(item)}
          key={item._id}
        >
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
            <div className={styles.company}>{item.companyInfo.companyName}</div>
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
  }

  renderNoPassPublishInfo = () => {
    const { noPassPublishInfo } = this.state

    const handleGoDetail = item => {
      this.setState({
        detailModalVisible: true,
        detailInfo: item,
        modalFooter: [
          <Button
            key="取消"
            size="large"
            onClick={() => this.handleCancelModal()}
          >
            取消
          </Button>,
          <Button
            key="pass"
            size="large"
            type="primary"
            onClick={() => this.handlePass(item)}
          >
            通过审核
          </Button>,
          <Button
            key="delete"
            size="large"
            type="danger"
            onClick={() => this.handleDelete(item._id)}
          >
            删除
          </Button>
        ]
      })
    }

    return noPassPublishInfo.map(item => {
      return (
        <div
          className={styles.card}
          onClick={() => handleGoDetail(item)}
          key={item._id}
        >
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
            <div className={styles.company}>{item.companyInfo.companyName}</div>
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
  }

  logOut = () => {
    this.props.history.push("/")
  }

  render() {
    const {
      detailModalVisible,
      allPublishInfo,
      detailInfo,
      modalFooter
    } = this.state
    return (
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <span className={styles.title}>高校毕业生就业信息管理系统</span>
          <div className={styles.dropDown} onClick={() => this.logOut()}>
            退出登录
          </div>
        </header>
        <Tabs defaultActiveKeys="1" className={styles.tabs}>
          <TabPane tab="全部招聘信息" key="1">
            {this.renderPublishCard()}
          </TabPane>
          <TabPane tab="未通过审核" key="2">
            {this.renderNoPassPublishInfo()}
          </TabPane>
          <TabPane tab="已通过审核" key="3">
            {this.renderPassPublishInfo()}
          </TabPane>
        </Tabs>
        <DetailModal
          title="招聘信息详情"
          visible={detailModalVisible}
          allPublishInfo={allPublishInfo}
          modalFooter={modalFooter}
          onCancel={this.handleCancelModal}
          detailInfo={detailInfo}
        />
      </div>
    )
  }
}

export default withRouter(Manage)
