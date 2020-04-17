import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import Login from "./pages/login/index"
import Student from "./pages/student/index"
import Company from "./pages/company/index"
import Manage from "./pages/manage/index"
import "./App.css"

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Login} exact />
      </Switch>
      <Route path="/student:username" component={Student} />
      <Route path="/company:username" component={Company} />
      <Route path="/manage:username" component={Manage} />
    </HashRouter>
  )
}

export default App
