import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import axios from "axios"
import url from "../../../../service.config"
import DetailModal from "../../../manage/components/detailModal/index"
import {
  MessageOutlined,
  WarningOutlined,
  ExclamationCircleOutlined
} from "@ant-design/icons"
import { Input, Select, Button, Modal, message } from "antd"
import styles from "./index.module.scss"

const { Search } = Input
const { Option } = Select

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      positionInfo: [],
      detailModalVisible: false,
      detailModalInfo: {}
    }
  }

  componentDidMount() {
    axios({
      url: url.getPassPublishInfo,
      method: "get",
      params: { condition: true }
    }).then(res => {
      this.setState({
        positionInfo: res.data
      })
    })
  }

  cancelDetailModal = () => {
    this.setState({
      detailModalVisible: false
    })
  }

  // 筛选学历
  filterRecord = values => {
    axios({
      method: "get",
      url: url.getByEducational,
      params: {
        educational: values
      }
    }).then(res => {
      this.setState({
        positionInfo: res.data
      })
    })
  }
  //筛选薪资
  filterSalary = values => {
    axios({
      method: "get",
      url: url.getBySalary,
      params: {
        pay: values
      }
    }).then(res => {
      this.setState({
        positionInfo: res.data
      })
    })
  }
  //筛选融资阶段
  filterFinance = values => {
    axios({
      method: "get",
      url: url.getByFinance,
      params: {
        finance: values
      }
    }).then(res => {
      this.setState({
        positionInfo: res.data
      })
    })
  }
  //筛选公司规模
  filterScale = values => {
    axios({
      method: "get",
      url: url.getByScale,
      params: {
        scale: values
      }
    }).then(res => {
      this.setState({
        positionInfo: res.data
      })
    })
  }
  //筛选公司行业
  filterCompany = values => {
    axios({
      method: "get",
      url: url.getByTrade,
      params: {
        trade: values
      }
    }).then(res => {
      this.setState({
        positionInfo: res.data
      })
    })
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
          <Option value="初中及以下">初中及以下</Option>
          <Option value="高中">高中</Option>
          <Option value="本科">本科</Option>
          <Option value="硕士">硕士</Option>
          <Option value="博士">博士</Option>
          <Option value="博士后">博士后</Option>
        </Select>
        <Select
          defaultValue="薪资要求"
          style={{ width: 100 }}
          bordered={false}
          onSelect={this.filterSalary}
        >
          <Option value="3k及以下">3k及以下</Option>
          <Option value="3k-5k">3k-5k</Option>
          <Option value="10k-15k">10k-15k</Option>
          <Option value="15k-20k">15k-20k</Option>
          <Option value="20k-30k">20k-30k</Option>
          <Option value="30k及以上">30k及以上</Option>
        </Select>
        <Select
          defaultValue="公司行业"
          style={{ width: 100 }}
          bordered={false}
          onSelect={this.filterCompany}
        >
          <Option value="计算机软件">计算机软件</Option>
          <Option value="电子商务">电子商务</Option>
          <Option value="食品">食品</Option>
          <Option value="旅游">旅游</Option>
          <Option value="广告营销">广告营销</Option>
          <Option value="物流 ">物流</Option>
          <Option value="信息安全">信息安全</Option>
        </Select>
        <Select
          defaultValue="融资阶段"
          style={{ width: 100 }}
          bordered={false}
          onSelect={this.filterFinance}
        >
          <Option value="天使轮">天使轮</Option>
          <Option value="A轮">A轮</Option>
          <Option value="B轮">B轮</Option>
          <Option value="C轮">C轮</Option>
          <Option value="D轮及以上">D轮及以上</Option>
          <Option value="不需要融资">不需要融资</Option>
        </Select>
        <Select
          defaultValue="公司规模"
          style={{ width: 100 }}
          bordered={false}
          onSelect={this.filterScale}
        >
          <Option value="0-20人">0-20人</Option>
          <Option value="20-99人">20-99人</Option>
          <Option value="100-499人">100-499人</Option>
          <Option value="500-999人">500-999人</Option>
          <Option value="1000-9999人">1000-9999人</Option>
          <Option value="10000人以上">10000人以上</Option>
        </Select>
      </div>
    )
  }

  renderCard = () => {
    const { positionInfo } = this.state

    const showDetailModal = item => {
      this.setState({
        detailModalVisible: true,
        detailModalInfo: item
      })
    }

    return positionInfo.length === 0 ? (
      <div className={styles.card}>
        <WarningOutlined
          style={{ marginTop: "6px", marginRight: "10px", color: "yellow" }}
        />
        <span style={{ textAlign: "center", fontSize: "16px" }}>
          暂无该条件下的招聘信息，敬请等待~
        </span>
      </div>
    ) : (
      positionInfo.map(item => {
        return (
          <div
            className={styles.card}
            key={item._id}
            onClick={() => {
              showDetailModal(item)
            }}
          >
            <div className={styles.leftContent}>
              <div className={styles.position}>
                {item.positionInfo.positionName}
              </div>
              <div>
                <span className={styles.salary}>{item.positionInfo.pay}</span>
                <span className={styles.line}>|</span>
                <span>{item.positionInfo.educational}</span>
                <span className={styles.contact}>
                  <MessageOutlined />
                  <span>
                    {item.personalInfo.personalName} |{" "}
                    {item.personalInfo.personPos}
                  </span>
                </span>
              </div>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.company}>
                {item.companyInfo.companyName}
              </div>
              <div>
                <span>{item.companyInfo.trade}</span>
                <span>|</span>
                <span>{item.companyInfo.finance}</span>
                <span>|</span>
                <span>{item.companyInfo.scale}</span>
              </div>
            </div>
          </div>
        )
      })
    )
  }

  handleSearch = value => {
    axios({
      method: "get",
      url: url.searchPositionInfo,
      params: {
        companyName: value,
        positionName: value
      }
    }).then(res => {
      this.setState({
        positionInfo: res.data
      })
    })
  }

  postResume = () => {
    const { username } = this.props
    Modal.confirm({
      title: "确定向该公司投递简历吗？",
      icon: <ExclamationCircleOutlined />,
      content: "",
      okText: "确定",
      okType: "primary",
      cancelText: "取消",
      onCancel() {},
      onOk: () => {
        axios({
          method: "post",
          url: url.postResume,
          data: { username: username }
        }).then(() => {
          message.success("投递成功！")
          this.cancelDetailModal()
        })
      }
    })
  }

  render() {
    const { detailModalVisible, detailModalInfo } = this.state
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Search
            placeholder="搜索职位、公司"
            onSearch={value => this.handleSearch(value)}
            enterButton
            size="large"
            className={styles.search}
          />
          {this.renderFilter()}
          {this.renderCard()}
        </div>
        <DetailModal
          title="招聘信息详情"
          visible={detailModalVisible}
          detailInfo={detailModalInfo}
          onCancel={this.cancelDetailModal}
          modalFooter={[
            <Button
              size="large"
              type="primary"
              onClick={() => this.postResume()}
            >
              投递简历
            </Button>,
            <Button
              key="取消"
              size="large"
              onClick={() => this.cancelDetailModal()}
            >
              取消
            </Button>
          ]}
        />
      </div>
    )
  }
}

export default withRouter(Home)
