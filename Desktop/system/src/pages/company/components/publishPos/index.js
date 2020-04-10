import React, { Component } from "react"
import { Tabs, Form, Input, Select } from "antd"
import { AndroidOutlined, CaretRightOutlined } from "@ant-design/icons"
// import styles from "./index.module.scss"

const { TabPane } = Tabs
const { Item } = Form
const { Option } = Select
const { TextArea } = Input

class PublishPos extends Component {
  constructor(props) {
    super(props)
  }

  renderCompany = () => {
    return (
      <Form name="company" initialValues={{ remember: true }}>
        <Item
          label="公司名称"
          name="companyName"
          rules={[{ required: true, message: "请输入公司名称" }]}
        >
          <Input />
        </Item>
        <Item
          label="所属行业"
          name="trade"
          rules={[{ required: true, message: "请选择公司所属行业" }]}
        >
          <Select defaultValue="请选择公司所属行业">
            <Option value="software">计算机软件</Option>
            <Option value="ec">电子商务</Option>
            <Option value="food">食品</Option>
            <Option value="travel">旅游</Option>
            <Option value="advertisement">广告营销</Option>
            <Option value="logistical ">物流</Option>
            <Option value="secure">信息安全</Option>
          </Select>
        </Item>
        <Item
          label="融资阶段"
          name="finance"
          rules={[{ required: true, message: "请选择公司当前融资阶段" }]}
        >
          <Select defaultValue="请选择公司当前融资阶段">
            <Option value="angelRound">天使轮</Option>
            <Option value="ARound">A轮</Option>
            <Option value="BRound">B轮</Option>
            <Option value="CRound">C轮</Option>
            <Option value="DRound">D轮及以上</Option>
            <Option value="noFinance">不需要融资</Option>
          </Select>
        </Item>
        <Item
          label="公司规模"
          name="scale"
          rules={[{ required: true, message: "请选择公司规模" }]}
        >
          <Select defaultValue="请选择公司规模">
            <Option value="20person">0-20人</Option>
            <Option value="99person">20-99人</Option>
            <Option value="499person">100-499人</Option>
            <Option value="999person">500-999人</Option>
            <Option value="9999person">1000-9999人</Option>
            <Option value="10000person">10000人以上</Option>
          </Select>
        </Item>
        <Item label="公司简介" name="companyDesc">
          <TextArea placeholder="请输入公司简介..." />
        </Item>
      </Form>
    )
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                填写公司信息 <CaretRightOutlined />
              </span>
            }
            key="1"
          >
            {this.renderCompany()}
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                填写职位信息 <CaretRightOutlined />
              </span>
            }
            key="2"
          >
            Tab 2
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                填写个人信息
              </span>
            }
            key="3"
          >
            Tab 3
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default PublishPos
