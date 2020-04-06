import React, { Component } from "react"
import {withRouter} from 'react-router-dom'
// import styles from "./index.module.scss"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div>home</div>
    )
  }
    
}

export default withRouter(Home)
