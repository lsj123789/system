import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import Login from "./pages/login/index"
import StudentHome from "./pages/student/home/index"
import "./App.css"

function App() {
  return (
    <HashRouter>
      {/* <header className="header">
        <p>高校毕业生就业信息管理系统</p>
      </header> */}
      {/* <Login /> */}
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/student/home" component={StudentHome} />
      </Switch>
    </HashRouter>
  )
}

export default App
