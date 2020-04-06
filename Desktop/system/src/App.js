import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import Login from "./pages/login/index"
import Student from "./pages/student/index"
import "./App.css"

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Login} exact />
      </Switch>
      <Route path="/student" component={Student} />
    </HashRouter>
  )
}

export default App
