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

     // create filter function to parse out month from date field (split date from dashes using middle item [month])

    //  const filteredMonth = (month) => {
    //     const filterBirthday = 
    //  }

    return (
        <>
        <h1>The Yearly Calendar</h1>
        <div className="calendar">
            {months ? months.map((month) => (
                <div className="month" key={month.id} onClick={() => {
                    // dispatch({type: "filteredBirthdays", payload: filteredMonth(month.id)})
                    // props.history.push(`/calendar/${month.id}`)
                }}>
                     {month.name}
                </div>
            )): (<h1>loading</h1>)}
        </div>
        </>
    )
}

export default Calendar