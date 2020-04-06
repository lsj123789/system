import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import Login from "./pages/login/index"
import StudentHome from "./pages/student/home/index"
import "./App.css"

function App() {
  return (
    <HashRouter>
      {/* <Login /> */}
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/student/home" component={StudentHome} />
      </Switch>
    </HashRouter>
  )
}

export default App
