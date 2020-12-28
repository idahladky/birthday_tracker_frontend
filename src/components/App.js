// import logo from './logo.svg';
import '../App.css';
import React from "react"
import {Switch, Route} from "react-router-dom"
import Nav from "../pages/Nav"
import Auth from "../pages/Auth"
import Dashboard from '../pages/Dashboard'
import Friends from "../pages/Friends"
import Calendar from "../pages/Calendar"
import Month from "../pages/Month"
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

  const months = [
    {
        name: "January",
        id: 1
    },
    {
        name: "February",
        id: 2
    },
    {
        name: "March",
        id: 3
    },
    {
        name: "April",
        id: 4
    },
    {
        name: "May",
        id: 5
    },
    {
        name: "June",
        id: 6
    },
    {
        name: "July",
        id: 7
    },
    {
        name: "August",
        id: 8
    },
    {
        name: "September",
        id: 9
    },
    {
        name: "October",
        id: 10
    },
    {
        name: "November",
        id: 11
    },
    {
        name: "December",
        id: 12
    }
]


  return <>
    <Route path="/" component={Nav} />
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/auth/:form" component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/friends" component={Friends} />
      <Route exact path="/calendar" render={(rp) => <Calendar {...rp} months={months}/>} />
      <Route exact path="/calendar/:id" render={(rp) => <Month {...rp} months={months}/>} />
    </Switch>
  </>
}

export default App;
