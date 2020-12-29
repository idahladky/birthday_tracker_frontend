import React from "react"
import { Route, Link } from "react-router-dom"
import { useAppState } from "../AppState"
import Show from "./Show"

const Friends = (props) => {

    const { state, dispatch } = useAppState()
    const { token, url, birthdays, username, getBirthdays } = state

    // React.useEffect(() => {getBirthdays()}, [])

    return (
        <>
        <h1>Friends</h1>
        <ul>
            {state.birthdays.map((birthday) => (
                <div key={birthday.id}>
                    <Route path={`/friends/${birthday.id}`} render={(rp) => <Show {...rp} birthday={birthday}/>} />
                    <Link to={`/friends/${birthday.id}`}>
                        <div>
                            {/* <h2>{birthday.name}</h2> */}
                            <div>{birthday.date}</div>
                            <div>{birthday.age}</div>
                        </div>
                    </Link>
                </div>
            ))}
        </ul>
        </>
    )
}

export default Friends