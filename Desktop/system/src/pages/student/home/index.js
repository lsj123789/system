import React, { Component } from "react"
import styles from "./index.module.css"

class StudentHome extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <p>高校毕业生就业信息管理系统</p>
        </header>
      </div>
    )
  }
}

export default StudentHome
