import React from "react"
import { Route, Link } from "react-router-dom"
import { useAppState } from "../AppState"
import Form from "./Form"

const Dashboard = (props) => {

    const { state, dispatch } = useAppState()
    const { token, url, birthdays, username } = state

    // const getBirthdays = async () => {
    //     const response = await fetch(url + "/birthdays/", {
    //         method: "get",
    //         headers: {
    //             Authorization: "bearer " + token
    //         }
    //     })
    //     const fetchedBirthdays = await response.json()
    //     dispatch({type: "getBirthdays", payload: fetchedBirthdays})
    // }

    // React.useEffect(() => {getBirthdays()}, [])

    const loaded = () => {
        return (
        <>
        <h1>Upcoming Birthdays</h1>
        {/* <Link to="/dashboard/new"><button>Add a Birthday</button></Link>
        <Route path="/dashboard/:action" render={(rp) => <Form {...rp} getBirthdays={getBirthdays} />} /> */}
        <ul>
            {state.birthdays.map((birthday) => (
                <div key={birthday.id}>
                    <p>{birthday.name}</p>
                    <p>{birthday.date}</p>
                </div>
            ))}
        </ul>
        </>
    )}

    return birthdays ? loaded() : <h1>Loading</h1>
}

export default Dashboard