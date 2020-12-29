import React from "react"
import { Link } from "react-router-dom"
import { useAppState } from "../AppState"
import { ConsoleWriter } from "istanbul-lib-report"

const Home = (props) => {

    const { state, dispatch } = useAppState()
    const { token, url, birthdays, username, months } = state

    const getBirthdays = async () => {
        const response = await fetch(url + "/birthdays/", {
            method: "get",
            headers: {
                Authorization: "bearer " + token
            }
        })
        const fetchedBirthdays = await response.json()
        console.log(state)
        console.log(fetchedBirthdays)
        console.log("you are here")
        dispatch({type: "getBirthdays", payload: fetchedBirthdays})
        
    }

    React.useEffect(() => {getBirthdays()}, [])

    const loaded = () => {
        console.log(birthdays)
        return (
        <>
        <h1>Upcoming Birthdays</h1>
        <ul>
            {birthdays.map((birthday) => (
                <Link to={`/friends/:id`}>
                    <div key={birthday.id}>
                        <p>{birthday.name}</p>
                        <p>{birthday.date}</p>
                    </div>
                </Link>
            ))}
        </ul>
        </>
    )}

    return birthdays ? loaded() : <h1>Loading</h1>
}

export default Home