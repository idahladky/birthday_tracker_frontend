// import logo from './logo.svg';
import '../App.css';
import React from "react"
import {Switch, Route} from "react-router-dom"
import { useAppState } from "../AppState"
import Nav from "../pages/Nav"
import Auth from "../pages/Auth"
import Friends from "../pages/Friends"
import Calendar from "../pages/Calendar"
import Month from "../pages/Month"
import Home from "../pages/Home"
import Form from "../pages/Form"
import Root from "../pages/Root"

const App = (props) => {

  const { state, dispatch } = useAppState()
  const { token, url } = state

  React.useState(() => {
    const auth = JSON.parse(window.localStorage.getItem("auth"))
    if (auth) {
      dispatch({type: "auth", payload: auth})
      props.history.push("/home")
    } else {
      props.history.push("/")
    }
  }, [])

  const getBirthdays = async () => {
    if (token) {
        const response = await fetch(url + "/birthdays/", {
            method: "get",
            headers: {
                Authorization: "bearer " + token
            }
        })
        const fetchedBirthdays = await response.json()
        dispatch({type: "getBirthdays", payload: fetchedBirthdays})
    }
}

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
    <Nav history={props.history}/>
    <Switch>
        <Route exact path="/" render={(rp) => <Root {...rp} />} />
        <Route path="/home" render={(rp) => <Home {...rp} getBirthdays={getBirthdays} />} />
        <Route path="/auth/:form" component={Auth} />
        <Route path="/friends" render={(rp) => <Friends {...rp} getBirthdays={getBirthdays} />} />
        <Route exact path="/calendar" render={(rp) => <Calendar {...rp} months={months} />} />
        <Route path="/calendar/:id" render={(rp) => <Month {...rp} months={months} />} />
        <Route path="/edit" render={(rp) => <Form {...rp} label="update" type="edit" getBirthdays={getBirthdays}/>} />
        <Route path="/new" render={(rp) => <Form {...rp} label="create" type="new" getBirthdays={getBirthdays}/>} />
    </Switch>
  </>
}

export default App;
