import React, { Component } from "react"
import { Modal } from "antd"
import WrapperContent from "../../../common/wrapperContent/index"
import styles from "./index.module.scss"

class DetailModal extends Component {
  constructor(props) {
    super(props)
    this.state={}
  }

  renderDetail = () => {
    const { detailInfo } = this.props
    return (
      <>
        <WrapperContent title="公司介绍" />
        <div className={styles.detail}>
          <div>公司名称：{detailInfo.companyInfo.companyName}</div>
          <div>公司规模：{detailInfo.companyInfo.scale}</div>
          <div>所属行业：{detailInfo.companyInfo.trade}</div>
          <div>融资阶段：{detailInfo.companyInfo.finance}</div>
          <div>公司简介：{detailInfo.companyInfo.companyDesc}</div>
        </div>
        <WrapperContent title="联系人信息" />
        <div className={styles.detail}>
          <div>联系人姓名：{detailInfo.personalInfo.personalName}</div>
          <div>联系人职位：{detailInfo.personalInfo.personPos}</div>
          <div>联系方式：{detailInfo.personalInfo.tel}</div>
          <div>福利待遇：{detailInfo.personalInfo.atmosphere}</div>
        </div>
        <WrapperContent title="职位信息" />
        <div className={styles.detail}>
          <div>招聘职位：{detailInfo.positionInfo.positionName}</div>
          <div>招聘人数：{detailInfo.positionInfo.number}</div>
          <div>薪资范围：{detailInfo.positionInfo.pay}</div>
          <div>学历要求：{detailInfo.positionInfo.educational}</div>
          <div>工作地点：{detailInfo.positionInfo.workplace}</div>
          <div>职位要求：{detailInfo.positionInfo.require}</div>
        </div>
      </>
    )
  }


  render() {
    const { title, visible, onCancel, detailInfo ,modalFooter} = this.props
    return (
      <Modal
        title={title}
        visible={visible}
        onCancel={onCancel}
        className={styles.modal}
        width="60%"
        footer={modalFooter}
      >
        {Object.keys(detailInfo).length !== 0 && this.renderDetail.call(this)}
      </Modal>
    )
  }
}

export default DetailModal
