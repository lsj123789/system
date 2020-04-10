import React, { Component } from "react"
import { Menu, Dropdown } from "antd"
import { DownOutlined } from "@ant-design/icons"
import { withRouter } from "react-router-dom"
import axios from "axios"
import url from "../../service.config"
import Home from "./components/home/index"
import Resume from "./components/resume/index"
import Apply from "./components/apply/index"
import Information from "./components/information/index"
import Analysis from "./components/analysis/index"
import styles from "./index.module.scss"

class StudentHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      componentKey: "",
      basisInfo: {},
      experienceInfo: {},
      projectInfo: {},
      educationInfo: {},
      serviceInfo: {}
    }
  }

  componentDidMount() {
    const { username } = this.props.match.params
    axios({
      method: "get",
      url: url.getBasisInfo,
      params: { username }
    }).then(res => {
      this.setState({
        basisInfo: res.data
      })
    })
    axios({
      method: "get",
      params: { username },
      url: url.getExperience
    }).then(res => {
      this.setState({
        experienceInfo: res.data
      })
    })
    axios({
      method: "get",
      params: { username },
      url: url.getProject
    }).then(res => {
      this.setState({
        projectInfo: res.data
      })
    })
    axios({
      method: "get",
      params: { username },
      url: url.getEducation
    }).then(res => {
      this.setState({
        educationInfo: res.data
      })
    })
    axios({
      method: "get",
      params: { username },
      url: url.getService
    }).then(res => {
      this.setState({
        serviceInfo: res.data
      })
    })
  }

  handleMenuClick = e => {
    this.setState({
      componentKey: e.key
    })
  }

  loginOut = () => {
    this.props.history.push("/")
  }

  renderComponent = () => {
    const { username } = this.props.match.params
    const {
      componentKey,
      basisInfo,
      experienceInfo,
      projectInfo,
      educationInfo,
      serviceInfo
    } = this.state
    const information = {
      username,
      basisInfo,
      experienceInfo,
      projectInfo,
      educationInfo,
      serviceInfo
    }
    switch (componentKey) {
      case "":
        return <Home />
      case "item_0":
        return <Resume />
      case "item_1":
        return <Apply />
      case "item_2":
        return <Information information={information} />
      case "item_3":
        return <Analysis />
      case "item_4":
        return this.loginOut()
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

export default withRouter(StudentHome)
