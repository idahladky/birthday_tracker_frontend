import React from "react"
import { useAppState } from "../AppState"

const Month = (props) => {

    const { state } = useAppState()
    const { birthdays } = state
    const month_id = props.match.params.id //single month number

    const filteredMonth = (month) => {        
        const thisBirthday = birthdays.filter((val) => { 
           if (month <= 9) { // if the number is less than 09 (so, January - September)
                return val.date.toString().split("-")[1] == `0${month}` // turn the date into a string, split it by the dash, check for the first number and the second number (09) and see if it equals similar to the month number
            } else { // October - December
                return val.date.toString().split("-")[1] == month // checks for the first number and the second number (10) and see if it equals similar to the month number
            }
        })
        return thisBirthday
    }
    filteredMonth(birthdays)
    

    const [filterBirthday, setFilterBirthday] = React.useState()

    React.useEffect(() => {setFilterBirthday(filteredMonth(month_id))}, [])

    return (
        <>
        <ul>
            {filterBirthday ? filterBirthday.map((birthday) => (
                <div key={birthday.id}>
                    <h2>{birthday.name}</h2>
                    <div>{birthday.date}</div>
                    <div>{birthday.age}</div>
                </div>
                
            )) : (<h1>Loading</h1>)}
        </ul>
    
        </>
    )
}

export default Month