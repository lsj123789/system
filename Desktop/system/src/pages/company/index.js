import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import Home from "./components/home/index"
import PublishPos from "./components/publishPos/index"
import MyPublish from "./components/myPublish/index"
import Information from "./components/information/index"
import Analysis from "./components/analysis/index"
import { Menu, Dropdown } from "antd"
import { DownOutlined } from "@ant-design/icons"
import styles from "./index.module.scss"

class Company extends Component {
  constructor(props) {
    super(props)
    this.state = {
      componentKey: "",
      username: ""
    }
  }

  componentDidMount() {
    const { username } = this.props.match.params
    this.setState({
      username
    })
  }

  handleMenuClick = e => {
    this.setState({
      componentKey: e.key
    })
  }

  renderComponent = () => {
    const { componentKey, username } = this.state
    switch (componentKey) {
      case "":
        return <Home />
      case "item_0":
        return <PublishPos username={username} />
      case "item_1":
        return <MyPublish />
      case "item_2":
        return <Information />
      case "item_3":
        return <Analysis />
      case "item_4":
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
        <Menu.Item>基本资料</Menu.Item>
        <Menu.Item>竞争力分析</Menu.Item>
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
