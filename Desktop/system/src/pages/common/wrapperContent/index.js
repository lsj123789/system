import React, { Component } from "react"
import styles from "./index.module.scss"

class WrapperContent extends Component {
  render() {
    const { title } = this.props
    return (
      <div className={styles.wrapper}>
        <span className={styles.line} />
        <span>{title}</span>
      </div>
    )
  }
}

export default WrapperContent
