import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import Login from "./pages/login/index"
import Student from "./pages/student/index"
import Company from './pages/company/index'
import "./App.css"

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Login} exact />
      </Switch>
      <Route path="/student:username" component={Student} />
      <Route path="/company:username" component = {Company} />
    </HashRouter>
  )
}

export default App
