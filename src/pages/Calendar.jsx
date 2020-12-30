import React from "react"
import { useAppState } from "../AppState"

const Calendar = (props) => {

    const { state, dispatch } = useAppState()
    const { birthdays } = state
    const { months } = props
    
    const filteredMonth = (month) => {
        const filterBirthday = birthdays.filter((date) => {
            return Date(date.toString().split("-")[1]) === month
        })
        return filterBirthday
     }

    return (
        <>
        <h1>The Yearly Calendar</h1>
        <div className="calendar">
            {months ? months.map((month) => (
                <div className="month" key={month.id} onClick={() => {
                    dispatch({type: "filteredBirthdays", payload: filteredMonth(month.id)})
                    props.history.push(`/calendar/${month.id}`)
                }}>
                     {month.name}
                </div>
            )): (<h1>loading</h1>)}
        </div>
        </>
    )
}

export default Calendar