import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { Form, Input, Radio, Select, Button, DatePicker } from "antd"
import axios from "axios"
import url from "../../../../service.config"
import WrapperContent from "../../../common/wrapperContent/index"
import styles from "./index.module.scss"

const { Item } = Form
const { Group } = Radio
const { Option } = Select
const { TextArea } = Input
const { RangePicker } = DatePicker

class Information extends Component {
  constructor(props) {
    super(props)
    this.state = {
      basisButtonText: "编辑",
      basisDisabled: true,
      experienceButtonText: "编辑",
      experienceDisabled: true,
      projectButtonText: "编辑",
      projectDisabled: true,
      educationButtonText: "编辑",
      educationDisabled: true,
      serviceButtonText: "编辑",
      serviceDisabled: true
    }
  }

  //个人信息表单
  renderBasisForm = () => {
    const { basisButtonText, basisDisabled } = this.state
    const { information } = this.props
    const { username, basisInfo } = information
    const handleBasisInfo = values => {
      const {
        chineseName,
        englishName,
        age,
        sex,
        tel,
        mail,
        present,
        identity
      } = values
      if (basisButtonText === "提交") {
        axios({
          url: url.postBasisInfo,
          method: "post",
          data: {
            username,
            chineseName,
            englishName,
            age,
            sex,
            tel,
            mail,
            present,
            identity
          }
        })
      }
      this.setState({
        basisButtonText: basisButtonText === "提交" ? "编辑" : "提交",
        basisDisabled: !basisDisabled
      })
    }
    const initialValues = {
      chineseName: basisInfo.chineseName || "",
      englishName: basisInfo.englishName || "",
      age: basisInfo.age || "",
      sex: basisInfo.sex || "",
      tel: basisInfo.tel || "",
      present: basisInfo.present || "",
      mail: basisInfo.mail || "",
      identity: basisInfo.identity || ""
    }
    return (
      <>
        <WrapperContent title="个人信息" />
        <Form
          className={styles.form}
          layout="inline"
          name="basisInfo"
          initialValues={{ ...initialValues }}
          onFinish={values => handleBasisInfo(values)}
        >
          <Item
            label="中文名称"
            name="chineseName"
            style={{ width: "30%", height: "60px" }}
          >
            <Input
              placeholder="请输入中文名称"
              size="large"
              disabled={basisDisabled}
            />
          </Item>
          <Item
            label="英文名称"
            name="englishName"
            style={{ width: "30%", height: "60px" }}
          >
            <Input
              placeholder="请输入英文名称"
              size="large"
              disabled={basisDisabled}
            />
          </Item>
          <Item
            label="年龄"
            name="age"
            style={{ width: "30%", height: "60px" }}
          >
            <Input
              placeholder="请输入年龄"
              size="large"
              disabled={basisDisabled}
            />
          </Item>
          <Item
            label="性别"
            name="sex"
            style={{ width: "70%", height: "60px" }}
          >
            <Group buttonStyle="outline" disabled={basisDisabled}>
              <Radio.Button value="male" className={styles.radioButton}>
                男
              </Radio.Button>
              <Radio.Button value="female" className={styles.radioButton}>
                女
              </Radio.Button>
            </Group>
          </Item>
          <Item
            label="身份证号"
            name="identity"
            style={{ width: "30%", height: "60px" }}
          >
            <Input
              placeholder="请输入身份证号"
              size="large"
              disabled={basisDisabled}
            />
          </Item>
          <Item
            label="当前求职状态"
            name="present"
            style={{ width: "30%", height: "60px" }}
          >
            <Select placeholder="请选择" disabled={basisDisabled}>
              <Option value="demission">离职-随时到岗</Option>
              <Option value="putAside">在职-暂不考虑</Option>
              <Option value="consider">在职-考虑机会</Option>
              <Option value="duty">在职-月内到岗</Option>
            </Select>
          </Item>
          <Item
            label="电话"
            name="tel"
            style={{ width: "30%", height: "60px" }}
          >
            <Input
              placeholder="请输入手机号"
              size="large"
              disabled={basisDisabled}
            />
          </Item>
          <Item
            label="邮箱"
            name="mail"
            style={{ width: "30%", height: "60px" }}
          >
            <Input
              placeholder="请输入有效邮箱"
              size="large"
              disabled={basisDisabled}
            />
          </Item>
          <Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className={styles.basisButton}
            >
              {basisButtonText}
            </Button>
          </Item>
        </Form>
      </>
    )
  }

  //实习经历表单
  renderExperience = () => {
    const { experienceButtonText, experienceDisabled } = this.state
    const { information } = this.props
    const { username, experienceInfo } = information
    const initialValues = {
      companyName: experienceInfo.companyName || "",
      department: experienceInfo.department || "",
      positionName: experienceInfo.positionName || "",
      // positionTime: experienceInfo.positionTime || [],
      practiceAchievement: experienceInfo.practiceAchievement || "",
      practiceContent: experienceInfo.practiceContent || "",
      trade: experienceInfo.trade || ""
    }
    const handleExperience = values => {
      const {
        companyName,
        department,
        positionName,
        positionTime,
        practiceAchievement,
        practiceContent,
        trade
      } = values
      this.setState({
        experienceButtonText: experienceButtonText === "提交" ? "编辑" : "提交",
        experienceDisabled: !experienceDisabled
      })
      if (experienceButtonText === "提交") {
        axios({
          url: url.postExperience,
          method: "post",
          data: {
            username,
            companyName,
            department,
            positionName,
            positionTime,
            practiceAchievement,
            practiceContent,
            trade
          }
        })
      }
    }
    return (
      <>
        <WrapperContent title="实习经历" />
        <Form
          className={styles.form}
          layout="inline"
          name="experience"
          initialValues={{ ...initialValues }}
          onFinish={values => handleExperience(values)}
        >
          <Item
            label="公司名称"
            name="companyName"
            style={{ width: "30%", height: "60px" }}
          >
            <Input
              placeholder="请输入公司名称"
              size="large"
              disabled={experienceDisabled}
            />
          </Item>
          <Item
            label="所属行业"
            name="trade"
            style={{ width: "30%", height: "60px" }}
          >
            <Select
              placeholder="请选择公司所属行业"
              disabled={experienceDisabled}
            >
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
            label="所属部门（选填）"
            name="department"
            style={{ width: "30%", height: "60px" }}
          >
            <Input
              placeholder="请输入所属部门"
              size="large"
              disabled={experienceDisabled}
            />
          </Item>
          <Item
            label="职位名称（选填）"
            name="positionName"
            style={{ width: "30%", height: "60px" }}
          >
            <Input
              placeholder="请输入职位名称"
              size="large"
              disabled={experienceDisabled}
            />
          </Item>
          <Item label="在职时间" name="positionTime">
            <RangePicker
              disabled={experienceDisabled}
              style={{ width: "100%" }}
              size="large"
            />
          </Item>
          <Item
            label="实习内容"
            name="practiceContent"
            style={{ width: "93%" }}
          >
            <TextArea
              placeholder="请输入实习内容..."
              style={{ height: "150px" }}
              disabled={experienceDisabled}
            />
          </Item>
          <Item
            label="实习业绩"
            name="practiceAchievement"
            style={{ width: "93%" }}
          >
            <TextArea
              placeholder="请输入实习业绩..."
              style={{ height: "150px", margin: "20px 0" }}
              disabled={experienceDisabled}
            />
          </Item>
          <Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className={styles.formButton}
            >
              {experienceButtonText}
            </Button>
          </Item>
        </Form>
      </>
    )
  }

  //项目经历
  renderProject = () => {
    const { projectButtonText, projectDisabled } = this.state
    const { information } = this.props
    const { projectInfo, username } = information
    const initialValues = {
      cosplay: projectInfo.cosplay || "",
      link: projectInfo.link || "",
      period: projectInfo.period || [],
      projectAchievement: projectInfo.projectAchievement || "",
      projectContent: projectInfo.projectContent || "",
      projectName: projectInfo.projectName || ""
    }
    const handleProject = values => {
      const {
        cosplay,
        link,
        period,
        projectAchievement,
        projectContent,
        projectName
      } = values
      const { projectButtonText, projectDisabled } = this.state
      this.setState({
        projectDisabled: !projectDisabled,
        projectButtonText: projectButtonText === "提交" ? "编辑" : "提交"
      })
      if (projectButtonText === "提交") {
        axios({
          method: "post",
          url: url.postProject,
          data: {
            username,
            cosplay,
            link,
            period,
            projectAchievement,
            projectContent,
            projectName
          }
        })
      }
    }

    return (
      <>
        <WrapperContent title="项目经历" />
        <Form
          name="project"
          layout="inline"
          className={styles.form}
          initialValues={{ ...initialValues }}
          onFinish={values => handleProject(values)}
        >
          <Item
            label="项目名称"
            name="projectName"
            style={{ width: "30%", height: "60px" }}
          >
            <Input
              placeholder="请输入项目名称"
              size="large"
              disabled={projectDisabled}
            />
          </Item>
          <Item
            label="项目角色"
            name="cosplay"
            style={{ width: "30%", height: "60px" }}
          >
            <Input
              placeholder="请输入您在项目中的角色"
              size="large"
              disabled={projectDisabled}
            />
          </Item>
          <Item
            label="项目链接（选填）"
            name="link"
            style={{ width: "90%", height: "60px" }}
          >
            <Input
              placeholder="请输入项目链接"
              size="large"
              disabled={projectDisabled}
            />
          </Item>
          <Item
            label="项目周期"
            name="period"
            style={{ width: "80%", height: "60px" }}
          >
            <>
              <DatePicker
                placeholder="开始时间"
                size="large"
                style={{ width: "30%" }}
                disabled={projectDisabled}
              />{" "}
              <span style={{ margin: "0 10px" }}>至</span>
              <DatePicker
                placeholder="结束时间"
                size="large"
                style={{ width: "30%" }}
                disabled={projectDisabled}
              />
            </>
          </Item>
          <Item label="项目描述" name="projectContent" style={{ width: "93%" }}>
            <TextArea
              placeholder="请输入项目描述..."
              style={{ height: "150px" }}
              disabled={projectDisabled}
            />
          </Item>
          <Item
            label="项目业绩"
            name="projectAchievement"
            style={{ width: "93%" }}
          >
            <TextArea
              placeholder="请输入项目业绩..."
              style={{ height: "150px", margin: "20px 0" }}
              disabled={projectDisabled}
            />
          </Item>
          <Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className={styles.formButton}
            >
              {projectButtonText}
            </Button>
          </Item>
        </Form>
      </>
    )
  }

  //教育经历
  renderEducation = () => {
    const { educationButtonText, educationDisabled } = this.state
    const { information } = this.props
    const { username, educationInfo } = information
    const initialValues = {
      major: educationInfo.major || "",
      school: educationInfo.school || "",
      // schoolTime: educationInfo.schoolTime || [],
      schoolExperience: educationInfo.schoolExperience || "",
      record: educationInfo.record || ""
    }
    const handleEducation = values => {
      const { major, school, schoolTime, schoolExperience, record } = values
      this.setState({
        educationButtonText: educationButtonText === "提交" ? "编辑" : "提交",
        educationDisabled: !educationDisabled
      })
      if (educationButtonText === "提交") {
        axios({
          url: url.postEducation,
          method: "post",
          data: {
            major,
            username,
            school,
            schoolTime,
            schoolExperience,
            record
          }
        })
      }
    }
    return (
      <>
        <WrapperContent title="教育经历" />
        <Form
          className={styles.form}
          name="education"
          layout="inline"
          initialValues={{ ...initialValues }}
          onFinish={values => handleEducation(values)}
        >
          <Item
            label="学校"
            name="school"
            style={{ width: "30%", height: "60px" }}
          >
            <Input
              placeholder="请输入学校名称"
              size="large"
              disabled={educationDisabled}
            />
          </Item>
          <Item
            label="专业"
            name="major"
            style={{ width: "30%", height: "60px" }}
          >
            <Input
              placeholder="请输入专业"
              size="large"
              disabled={educationDisabled}
            />
          </Item>
          <Item
            label="学历"
            name="record"
            style={{ width: "30%", height: "60px" }}
          >
            <Select placeholder="学历要求" disabled={educationDisabled}>
              <Option value="middle">初中及以下</Option>
              <Option value="senior">高中</Option>
              <Option value="regular">本科</Option>
              <Option value="master">硕士</Option>
              <Option value="doctor">博士</Option>
              <Option value="postDoctor">博士后</Option>
            </Select>
          </Item>
          <Item label="在校时间" name="schoolTime" style={{ width: "60%" }}>
            <RangePicker
              disabled={educationDisabled}
              style={{ width: "100%" }}
              size="large"
            />
          </Item>
          <Item
            label="在校经历"
            name="schoolExperience"
            style={{ width: "93%", margin: "20px 0" }}
          >
            <TextArea
              placeholder="请描述自己印象深刻的在校经历"
              style={{ height: "150px" }}
              disabled={educationDisabled}
            />
          </Item>
          <Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className={styles.formButton}
            >
              {educationButtonText}
            </Button>
          </Item>
        </Form>
      </>
    )
  }

  // 志愿服务经历
  renderService = () => {
    const { information } = this.props
    const { username, serviceInfo } = information
    const initialValues = {
      serviceAchievement: serviceInfo.serviceAchievement || "",
      serviceContent: serviceInfo.serviceContent || "",
      serviceName: serviceInfo.serviceName || "",
      serviceTime: serviceInfo.serviceTime || "",
      servicePeriod: serviceInfo.servicePeriod || []
    }
    const handleService = values => {
      const {
        serviceAchievement,
        serviceContent,
        servicePeriod,
        serviceName,
        serviceTime
      } = values
      const { serviceButtonText, serviceDisabled } = this.state
      this.setState({
        serviceDisabled: !serviceDisabled,
        serviceButtonText: serviceButtonText === "提交" ? "编辑" : "提交"
      })
      if (serviceButtonText === "提交") {
        axios({
          method: "post",
          url: url.postService,
          data: {
            username,
            serviceAchievement,
            serviceContent,
            servicePeriod,
            serviceName,
            serviceTime
          }
        })
      }
    }
    const { serviceButtonText, serviceDisabled } = this.state
    return (
      <>
        <WrapperContent title="志愿服务经历" />
        <Form
          name="service"
          layout="inline"
          className={styles.form}
          initialValues={{ ...initialValues }}
          onFinish={values => handleService(values)}
        >
          <Item
            label="项目名称"
            name="serviceName"
            style={{ width: "30%", height: "60px" }}
          >
            <Input
              placeholder="例如：中国红十字会医疗救助"
              size="large"
              disabled={serviceDisabled}
            />
          </Item>
          <Item
            label="总服务时长"
            name="serviceTime"
            style={{ width: "30%", height: "60px" }}
          >
            <Input
              placeholder="例如：32小时"
              size="large"
              disabled={serviceDisabled}
            />
          </Item>
          <Item
            label="项目周期"
            name="servicePeriod"
            style={{ width: "80%", height: "60px" }}
          >
            <>
              <DatePicker
                placeholder="开始时间"
                size="large"
                style={{ width: "30%" }}
                disabled={serviceDisabled}
              />{" "}
              <span style={{ margin: "0 10px" }}>至</span>
              <DatePicker
                placeholder="结束时间"
                size="large"
                style={{ width: "30%" }}
                disabled={serviceDisabled}
              />
            </>
          </Item>
          <Item label="项目描述" name="serviceContent" style={{ width: "93%" }}>
            <TextArea
              placeholder="请输入项目描述..."
              style={{ height: "150px" }}
              disabled={serviceDisabled}
            />
          </Item>
          <Item
            label="项目业绩"
            name="serviceAchievement"
            style={{ width: "93%" }}
          >
            <TextArea
              placeholder="请输入项目业绩..."
              style={{ height: "150px", margin: "20px 0" }}
              disabled={serviceDisabled}
            />
          </Item>
          <Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className={styles.formButton}
            >
              {serviceButtonText}
            </Button>
          </Item>
        </Form>
      </>
    )
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <header className={styles.header}>基本资料</header>
        {this.renderBasisForm()}
        {this.renderExperience()}
        {this.renderProject()}
        {this.renderEducation()}
        {this.renderService()}
      </div>
    )
  }
}

export default withRouter(Information)
