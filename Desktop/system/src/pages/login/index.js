import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { Tabs, Form, Button, Input, Radio } from "antd"
import style from "./index.module.css"
import './index.css'

const { TabPane } = Tabs

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      radioValue: 1
    }
  }
  // 登录逻辑
  onLoginFinish = values => {
    console.log(values)
    this.props.history.push("/student/home")
  }
  //注册逻辑
  onRegisterFinish = values => {
    console.log(values)
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
                    <Button type="primary" htmlType="submit">
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
