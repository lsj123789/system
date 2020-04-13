import React, { Component } from "react"
import { Tabs, Form, Input, Select, Button, Radio, message } from "antd"
import { AndroidOutlined, CaretRightOutlined } from "@ant-design/icons"
import axios from "axios"
import url from "../../../../service.config"
import styles from "./index.module.scss"

const { TabPane } = Tabs
const { Item } = Form
const { Option } = Select
const { TextArea } = Input

class PublishPos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      companyInfo: {},
      positionInfo: {},
      disabled: true
    }
  }

  formRef = React.createRef()

  renderCompany = () => {
    const handleCompany = values => {
      this.setState(
        {
          companyInfo: values
        },
        () => message.success("保存成功，请填写下一部分！")
      )
    }
    return (
      <Form
        name="company"
        initialValues={{ remember: true }}
        onFinish={values => handleCompany(values)}
      >
        <Item
          label="公司名称"
          name="companyName"
          rules={[{ required: true, message: "请输入公司名称" }]}
          style={{ width: "60%" }}
        >
          <Input size="large" placeholder="请输入公司名称" />
        </Item>
        <Item
          label="所属行业"
          name="trade"
          rules={[{ required: true, message: "请选择公司所属行业" }]}
          style={{ width: "60%" }}
        >
          <Select placeholder="请选择公司所属行业">
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
          style={{ width: "60%" }}
        >
          <Select placeholder="请选择公司当前融资阶段">
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
          style={{ width: "60%" }}
        >
          <Select placeholder="请选择公司规模">
            <Option value="20person">0-20人</Option>
            <Option value="99person">20-99人</Option>
            <Option value="499person">100-499人</Option>
            <Option value="999person">500-999人</Option>
            <Option value="9999person">1000-9999人</Option>
            <Option value="10000person">10000人以上</Option>
          </Select>
        </Item>
        <Item
          label="公司简介"
          name="companyDesc"
          rules={[{ required: true, message: "请简单介绍下公司..." }]}
          style={{ width: "60%" }}
        >
          <TextArea style={{ height: "150px" }} placeholder="请输入公司简介" />
        </Item>
        <Item>
          <Button
            className={styles.formButton}
            size="large"
            type="primary"
            htmlType="submit"
          >
            保存此部分
          </Button>
        </Item>
      </Form>
    )
  }

  renderPosition = () => {
    const handlePosition = values => {
      this.setState(
        {
          positionInfo: values
        },
        () => message.success("保存成功，请填写下一部分！")
      )
    }
    return (
      <Form
        name="position"
        initialValues={{ remember: true }}
        onFinish={values => handlePosition(values)}
      >
        <Item
          label="职位名称"
          name="positionName"
          rules={[{ required: true, message: "请输入职位名称" }]}
          style={{ width: "60%" }}
        >
          <Input size="large" placeholder="请输入职位名称" />
        </Item>
        <Item
          label="招聘人数"
          name="number"
          rules={[{ required: true, message: "请输入招聘人数" }]}
          style={{ width: "60%" }}
        >
          <Input placeholder="请输入招聘人数" size="large" />
        </Item>
        <Item
          label="薪资范围"
          name="pay"
          rules={[{ required: true, message: "请选择薪资范围" }]}
          style={{ width: "60%" }}
        >
          <Select placeholder="请选择薪资范围">
            <Option value="3k">3k及以下</Option>
            <Option value="5k">3k-5k</Option>
            <Option value="10k">10k-15k</Option>
            <Option value="15k">15k-20k</Option>
            <Option value="20k">20k-30k</Option>
            <Option value="30k">30k及以上</Option>
          </Select>
        </Item>
        <Item
          label="学历要求"
          name="educational"
          rules={[{ required: true, message: "请选择学历要求" }]}
          style={{ width: "60%" }}
        >
          <Select placeholder="请选择学历要求">
            <Option value="middle">初中及以下</Option>
            <Option value="senior">高中</Option>
            <Option value="regular">本科</Option>
            <Option value="master">硕士</Option>
            <Option value="doctor">博士</Option>
            <Option value="postDoctor">博士后</Option>
          </Select>
        </Item>
        <Item
          label="工作地点"
          name="workplace"
          rules={[{ required: true, message: "请输入工作地点..." }]}
          style={{ width: "60%" }}
        >
          <Input placeholder="请输入工作地点" size="large" />
        </Item>
        <Item
          label="具体要求"
          name="require"
          rules={[{ required: true, message: "请输入具体要求..." }]}
          style={{ width: "60%" }}
        >
          <TextArea style={{ height: "100px" }} placeholder="请输入具体要求" />
        </Item>
        <Item>
          <Button
            className={styles.formButton}
            size="large"
            type="primary"
            htmlType="submit"
          >
            保存此部分
          </Button>
        </Item>
      </Form>
    )
  }

  renderPersonal = () => {
    const { disabled, companyInfo, positionInfo } = this.state
    const { username } = this.props
    const handleRadio = () => {
      this.setState({
        disabled: !disabled
      })
    }
    const submitForm = values => {
      axios({
        url: url.publishPos,
        method: "post",
        data: {
          username,
          companyInfo,
          positionInfo,
          personalInfo: { ...values }
        }
      }).then(() => {
        message.success('提交成功，请等待管理员审核，审核成功后可到个人中心->我的发布中查看已发布职位')
        this.formRef.current.resetFields()
      })
    }
    return (
      <Form
        ref={this.formRef}
        name="personal"
        initialValues={{ remember: true }}
        onFinish={values => submitForm(values)}
      >
        <Item
          label="联系人姓名"
          name="personalName"
          rules={[{ required: true, message: "请输入联系人姓名" }]}
          style={{ width: "60%" }}
        >
          <Input size="large" placeholder="请输入联系人姓名" />
        </Item>
        <Item
          label="联系方式"
          name="tel"
          rules={[{ required: true, message: "请输入联系方式" }]}
          style={{ width: "60%" }}
        >
          <Input placeholder="请输入联系方式" size="large" />
        </Item>
        <Item
          label="联系人职位"
          name="personPos"
          rules={[{ required: true, message: "请输入联系人职位" }]}
          style={{ width: "60%" }}
        >
          <Input placeholder="请输入联系人职位" size="large" />
        </Item>
        <Item
          label="工作氛围"
          name="atmosphere"
          rules={[{ required: true, message: "请简单介绍下工作氛围" }]}
          style={{ width: "60%" }}
        >
          <TextArea
            style={{ height: "150px" }}
            placeholder="请简单介绍下工作氛围"
          />
        </Item>
        <Item>
          <Radio onChange={() => handleRadio()}>
            我已同意《高校毕业生就业信息管理系统发布规则》并确保所有发布信息的真实性
          </Radio>
        </Item>
        <Item>
          <Button
            className={styles.formButton}
            size="large"
            type="primary"
            htmlType="submit"
            disabled={disabled}
          >
            提交
          </Button>
        </Item>
      </Form>
    )
  }

  render() {
    return (
      <div className={styles.wrapper}>
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
            {this.renderPosition()}
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
            {this.renderPersonal()}
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default PublishPos
