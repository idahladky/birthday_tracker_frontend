import React from "react"
import { Route, Link } from "react-router-dom"
import { useAppState } from "../AppState"
import Form from "./Form"

const Friends = (props) => {

    const { state, dispatch } = useAppState()
    const { token, url, birthdays, username, getBirthdays } = state

    // React.useEffect(() => {getBirthdays()}, [])

    return (
        <>
        <h1>Friends</h1>
        <ul>
            {state.birthdays.map((birthday) => (
                <Link to={`/friends/:id`}>
                    <div key={birthday.id}>
                        <h2>{birthday.name}</h2>
                        <div>{birthday.date}</div>
                        <div>{birthday.age}</div>
                    </div>
                </Link>
            ))}
        </ul>
        </>
    )
}

export default Friends