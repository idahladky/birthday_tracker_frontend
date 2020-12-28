import React from "react"
import { Route, Link } from "react-router-dom"
import { useAppState } from "../AppState"
import Form from "./Form"

const Calendar = (props) => {

    const { state, dispatch } = useAppState()
    const { token, url, birthdays, username } = state
    const { months } = props

    const getBirthdays = async () => {
        const response = await fetch(url + "/birthdays/", {
            method: "get",
            headers: {
                Authorization: "bearer " + token
            }
        })
        const fetchedBirthdays = await response.json()
        dispatch({type: "getBirthdays", payload: fetchedBirthdays})
    }

    React.useEffect(() => {getBirthdays()}, [])

    return (
        <>
        <h1>The Yearly Calendar</h1>
        <Link to="/dashboard/new"><button>Add a Birthday</button></Link>
        <Route path="/dashboard/:action" render={(rp) => <Form {...rp} getBirthdays={getBirthdays} />} />
        <div className="calendar">
            {months ? months.map((month) => (
                <div className="month" key={month.id}>
                    <Link to={`/calendar/${month.id}`}>{month.name}</Link>
                </div>
            )): (<h1>loading</h1>)}
        </div>
        </>
    )
}

export default Calendar