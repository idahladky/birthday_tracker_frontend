// import logo from './logo.svg';
import '../App.css';
import React from "react"
import {Switch, Route} from "react-router-dom"
import Nav from "../pages/Nav"
import Home from "../pages/Home"
import Auth from "../pages/Auth"
import Dashboard from '../pages/Dashboard'
import { useAppState } from "../AppState"

const App = (props) => {

  const { state, dispatch } = useAppState()
  React.useState(() => {
    const auth = JSON.parse(window.localStorage.getItem("auth"))
    if (auth) { // if logged in, pushed to the dashboard
      dispatch({type: "auth", payload: auth})
      props.history.push("/dashboard")
    } else { // otherwise stay at login page
      props.history.push("/")
    }
  }, [])

  return <>
    <Route path="/" component={Nav} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/auth/:form" component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </>
}

export default App;
