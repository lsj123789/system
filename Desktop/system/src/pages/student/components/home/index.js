import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { MessageOutlined } from "@ant-design/icons"
import { Input, Select } from "antd"
import styles from "./index.module.scss"

const { Search } = Input
const { Option } = Select

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  // 筛选学历
  filterRecord = values => {
    console.log(values)
  }
  //筛选薪资
  filterSalary = values => {
    console.log(values)
  }
  //筛选融资阶段
  filterFinance = values => {
    console.log(values)
  }
  //筛选公司规模
  filterScale = values => {
    console.log(values)
  }
  //筛选公司行业
  filterCompany = values => {
    console.log(values)
  }

  renderFilter = () => {
    return (
      <div className={styles.select}>
        <Select
          defaultValue="学历要求"
          style={{ width: 100 }}
          bordered={false}
          onSelect={this.filterRecord}
        >
          <Option value="middle">初中及以下</Option>
          <Option value="senior">高中</Option>
          <Option value="regular">本科</Option>
          <Option value="master">硕士</Option>
          <Option value="doctor">博士</Option>
          <Option value="postDoctor">博士后</Option>
        </Select>
        <Select
          defaultValue="薪资要求"
          style={{ width: 100 }}
          bordered={false}
          onSelect={this.filterSalary}
        >
          <Option value="3k">3k及以下</Option>
          <Option value="5k">3k-5k</Option>
          <Option value="10k">10k-15k</Option>
          <Option value="15k">15k-20k</Option>
          <Option value="20k">20k-30k</Option>
          <Option value="30k">30k及以上</Option>
        </Select>
        <Select
          defaultValue="公司行业"
          style={{ width: 100 }}
          bordered={false}
          onSelect={this.filterCompany}
        >
          <Option value="software">计算机软件</Option>
          <Option value="ec">电子商务</Option>
          <Option value="food">食品</Option>
          <Option value="travel">旅游</Option>
          <Option value="advertisement">广告营销</Option>
          <Option value="logistical ">物流</Option>
          <Option value="secure">信息安全</Option>
        </Select>
        <Select
          defaultValue="融资阶段"
          style={{ width: 100 }}
          bordered={false}
          onSelect={this.filterFinance}
        >
          <Option value="angelRound">天使轮</Option>
          <Option value="ARound">A轮</Option>
          <Option value="BRound">B轮</Option>
          <Option value="CRound">C轮</Option>
          <Option value="DRound">D轮及以上</Option>
          <Option value="noFinance">不需要融资</Option>
        </Select>
        <Select
          defaultValue="公司规模"
          style={{ width: 100 }}
          bordered={false}
          onSelect={this.filterScale}
        >
          <Option value="20person">0-20人</Option>
          <Option value="99person">20-99人</Option>
          <Option value="499person">100-499人</Option>
          <Option value="999person">500-999人</Option>
          <Option value="9999person">1000-9999人</Option>
          <Option value="10000person">10000人以上</Option>
        </Select>
      </div>
    )
  }
  renderCard = () => {
    return (
      <div className={styles.card}>
        <div className={styles.leftContent}>
          <div className={styles.position}>网络安全专家</div>
          <div>
            <span className={styles.salary}>10-20k</span>
            <span className={styles.line}>|</span>
            <span>本科</span>
            <span className={styles.contact}>
              <MessageOutlined />
              <span>李先生 | 前端工程师</span>
            </span>
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.company}>华为</div>
          <div>
            <span>移动互联网</span>
            <span>|</span>
            <span>已上市</span>
            <span>|</span>
            <span>10000人以上</span>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Search
            placeholder="搜索职位、公司"
            onSearch={value => console.log(value)}
            enterButton
            size="large"
            className={styles.search}
          />
          {this.renderFilter()}
          {this.renderCard()}
        </div>
      </div>
    )
  }
}

export default withRouter(Home)
