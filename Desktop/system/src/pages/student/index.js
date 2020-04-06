import React, { Component } from "react"
import { Menu, Dropdown } from "antd"
import { DownOutlined } from "@ant-design/icons"
import { withRouter } from "react-router-dom"
import Home from "./components/home/index"
import Resume from "./components/resume/index"
import Information from "./components/information/index"
import Analysis from "./components/analysis/index"
import styles from "./index.module.scss"

class StudentHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      componentKey: ""
    }
  }

  handleMenuClick = e => {
    this.setState({
      componentKey: e.key
    })
  }

  renderComponent = () => {
    const { componentKey } = this.state
    switch (componentKey) {
      case "":
        return <Home />
        break
      case "item_0":
        return <Resume />
        break
      case "item_1":
        return <Information />
        break
      case "item_2":
        return <Analysis />
        break
      default:
        return <Home />
    }
  }

  renderMenu = () => {
    return (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item>个人简历</Menu.Item>
        <Menu.Item>求职申请</Menu.Item>
        <Menu.Item>基本资料</Menu.Item>
        <Menu.Item>竞争力分析</Menu.Item>
      </Menu>
    )
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <span className={styles.title}>高校毕业生就业信息管理系统</span>
          <Dropdown overlay={this.renderMenu()} className={styles.dropDown}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              个人中心 <DownOutlined />
            </a>
          </Dropdown>
        </header>
        <div>{this.renderComponent()}</div>
      </div>
    )
  }
}

export default withRouter(StudentHome)
