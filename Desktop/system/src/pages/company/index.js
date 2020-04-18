import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import Home from "./components/home/index"
import PublishPos from "./components/publishPos/index"
import MyPublish from "./components/myPublish/index"
import Resume from "./components/resume/index"
import axios from "axios"
import url from "../../service.config"
import { Menu, Dropdown } from "antd"
import { DownOutlined } from "@ant-design/icons"
import styles from "./index.module.scss"

class Company extends Component {
  constructor(props) {
    super(props)
    this.state = {
      componentKey: "",
      username: "",
      publishId: [],
      myPublish: []
    }
  }

  componentDidMount() {
    const { username } = this.props.match.params
    let idArr = []
    axios({
      url: url.getMyPublish,
      method: "get",
      params: username
    }).then(res => {
      let resArr = res.data.data
      resArr.length !== 0 &&
        resArr.map(item => {
          return idArr.push(item._id)
        })
      this.setState({
        myPublish: resArr,
        username,
        publishId: idArr
      })
    })
  }

  handleMenuClick = e => {
    this.setState({
      componentKey: e.key
    })
  }

  renderComponent = () => {
    const { componentKey, username, publishId, myPublish } = this.state
    switch (componentKey) {
      case "":
        return <Home />
      case "item_0":
        return <PublishPos username={username} />
      case "item_1":
        return <MyPublish username={username} myPublish={myPublish} />
      case "item_2":
        return <Resume publishId={publishId} />
      case "item_3":
        return this.props.history.push("/")
      default:
        return <Home />
    }
  }

  renderMenu = () => {
    return (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item>发布职位</Menu.Item>
        <Menu.Item>我的发布</Menu.Item>
        <Menu.Item>收到的简历</Menu.Item>
        <Menu.Item>退出登录</Menu.Item>
      </Menu>
    )
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <span className={styles.title}>高校毕业生就业信息管理系统</span>
          <Dropdown overlay={this.renderMenu()} className={styles.dropDown}>
            <span
              className="ant-dropdown-link"
              onClick={e => e.preventDefault()}
            >
              个人中心 <DownOutlined />
            </span>
          </Dropdown>
        </header>
        <div className={styles.content}>{this.renderComponent()}</div>
      </div>
    )
  }
}

export default withRouter(Company)
