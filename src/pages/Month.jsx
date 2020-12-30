import React from "react"
import { useAppState } from "../AppState"

const Month = (props) => {

    const { state } = useAppState()
    const { birthdays } = state
    const month_id = props.match.params.id //single month number

    const filteredMonth = (month) => {        
        const thisBirthday = birthdays.filter((val) => { //filter each index as an object
           if (month <= 9) { 
                return val.date.toString().split("-")[1][1] == month // check for the date
            } else {
                return val.date.toString().split("-")[1] == month
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