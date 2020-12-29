import React from "react"
import { Route, Link } from "react-router-dom"
import { useAppState } from "../AppState"

const Calendar = (props) => {

    const { state, dispatch } = useAppState()
    // const { token, url, birthdays, username } = state
    const { months, getBirthdays } = props

    const getMonthBirthdays = (month_id) => {
        console.log(month_id)
    }

    return (
        <>
        <h1>The Yearly Calendar</h1>
        <div className="calendar">
            {months ? months.map((month) => (
                <div className="month" key={month.id} onClick={() => (getMonthBirthdays(month.id))}>
                    <Link to={`/calendar/${month.id}`}>{month.name}</Link>
                </div>
            )): (<h1>loading</h1>)}
        </div>
        </>
    )
}

export default Calendar