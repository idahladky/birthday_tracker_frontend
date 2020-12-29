import React from "react"
// import { Route, Link } from "react-router-dom"
import { useAppState } from "../AppState"
// import Form from "./Form"

const Show = (props) => {

    const { state, dispatch } = useAppState()
    const { token, url, birthdays, username, getBirthdays } = state

    return (
        <>
        <p>{state.birthday.name}</p>
        <p>{state.birthday.date}</p>
        <p>{state.birthday.age}</p>

        <button onClick={() => {
            dispatch({type: "select", payload: state.birthday})
            props.history.push("/edit")
        }}>Edit</button>

        <button onClick={() => {
            fetch(url + "/birthdays/" + state.birthday.id, {
                method: "delete",
                headers: {
                    Authorization: "bearer " + token
                }
            })
            // .then(() => getBirthdays())
            props.history.push("/")
        }}>Delete</button>

        </>
    )
}
export default Show