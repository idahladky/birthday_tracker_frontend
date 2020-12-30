import React from "react"
// import { Route, Link } from "react-router-dom"
import { useAppState } from "../AppState"
// import Form from "./Form"

const Show = (props) => {

    const { state, dispatch } = useAppState()
    const { token, url, birthday } = state
    const {getBirthdays} = props

    return (
        <>
        <p>{props.birthday.name}</p>
        <p>{props.birthday.date}</p>
        <p>{props.birthday.age}</p>

        <button onClick={() => {
            dispatch({type: "select", payload: props.birthday})
            props.history.push("/edit")
        }}>Edit</button>

        <button onClick={() => {
            fetch(url + "/birthdays/" + props.birthday.id, {
                method: "delete",
                headers: {
                    Authorization: "bearer " + token
                }
            })
            .then(() => {getBirthdays()
            props.history.push("/home")})
            }}>Delete</button>

        </>
    )
}
export default Show