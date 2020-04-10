import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import axios from "axios"
import url from "../../service.config"
import { Tabs, Form, Button, Input, Radio, message } from "antd"
import style from "./index.module.scss"

const { TabPane } = Tabs

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      radioValue: 1
    }
  }
  formRef = React.createRef()
  // 登录逻辑
  onLoginFinish = values => {
    const { username, password, role } = values
    axios({
      method: "post",
      url: url.loginUser,
      headers: { "Content-type": "application/json" },
      data: {
        username,
        password,
        role
      }
    })
      .then(res => {
        console.log(res)
        if (res.data.code === 200) {
          message.success("登录成功！")
          if (res.data.role === 2) {
            this.props.history.push({ pathname: "/student" + username })
          } else if (res.data.role === 1) {
            this.props.history.push({ pathname: "/company" + username })
          }
        } else if (res.data.code === 202) {
          message.error("密码错误，请重新输入")
        } else if (res.data.code === 201) {
          message.error("用户名不存在，请先注册")
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  //注册逻辑
  onRegisterFinish = values => {
    const { username, password, role } = values
    axios({
      method: "post",
      url: url.registerUser,
      header: { "Content-type": "application/json" },
      data: {
        username,
        password,
        role
      }
    })
      .then(res => {
        if (res.data.code === 200) {
          message.success("注册成功，快去登录吧！")
          this.formRef.current.resetFields()
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  radioValueChange = e => {
    this.setState({
      radioValue: e.target.value
    })
  }
  render() {
    const { radioValue } = this.state
    return (
      <div className={style.wrapper}>
        <div className={style.tabs}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="登录" key="1">
              <div>
                <Form
                  initialValues={{
                    remember: true
                  }}
                  onFinish={this.onLoginFinish}
                  onFinishFailed={this.onLoginFinishFailed}
                >
                  <Form.Item
                    label="手机号"
                    name="username"
                    rules={[
                      {
                        required: true
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          let reg = /^1(3|4|5|6|7|8|9)\d{9}$/
                          if (!reg.test(value)) {
                            return Promise.reject(
                              "请输入正确格式的11位手机号！"
                            )
                          }
                          return Promise.resolve()
                        }
                      })
                    ]}
                  >
                    <Input size="large" placeholder="请输入11位手机号" />
                  </Form.Item>

                  <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "请输入密码"
                      }
                    ]}
                  >
                    <Input.Password size="large" placeholder="请输入密码" />
                  </Form.Item>
                  <Form.Item name="role" label="身份" required>
                    <Radio.Group
                      value={radioValue}
                      onChange={this.radioValueChange}
                      // defaultValue={radioValue}
                    >
                      <Radio value={1}>企业</Radio>
                      <Radio value={2}>毕业生</Radio>
                      <Radio value={3}>管理员</Radio>
                    </Radio.Group>
                  </Form.Item>

                  <Form.Item offset="8" span="16">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="styles.button"
                    >
                      登录
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </TabPane>
            <TabPane tab="注册" key="2">
              <div>
                <Form
                  initialValues={{
                    remember: true
                  }}
                  onFinish={this.onRegisterFinish}
                  ref={this.formRef}
                  //   onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="手机号"
                    name="username"
                    rules={[
                      {
                        required: true
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          let reg = /^1(3|4|5|6|7|8|9)\d{9}$/
                          if (!reg.test(value)) {
                            return Promise.reject(
                              "请输入正确格式的11位手机号！"
                            )
                          }
                          return Promise.resolve()
                        }
                      })
                    ]}
                  >
                    <Input size="large" placeholder="请输入11位手机号" />
                  </Form.Item>

                  <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "请输入密码"
                      }
                    ]}
                  >
                    <Input.Password size="large" placeholder="请输入密码" />
                  </Form.Item>
                  <Form.Item name="role" label="身份" required>
                    <Radio.Group
                      value={radioValue}
                      onChange={this.radioValueChange}
                      // defaultValue={radioValue}
                    >
                      <Radio value={1}>企业</Radio>
                      <Radio value={2}>毕业生</Radio>
                    </Radio.Group>
                  </Form.Item>

                  <Form.Item offset="8" span="16">
                    <Button type="primary" htmlType="submit">
                      注册
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
