import React from "react"
import { Route, Link } from "react-router-dom"
import { useAppState } from "../AppState"
import Form from "./Form"

const Month = (props) => {

    const { state, dispatch } = useAppState()
    const { token, url, birthdays, username } = state
    const { months } = props
    const month_id = props.match.params.id

    const month = months[month_id - 1] // pulling the whole object out of the array

    const getBirthdays = async () => {
        const response = await fetch(url + "/birthdays/", {
            method: "get",
            headers: {
                Authorization: "bearer " + token
            }
        })
        const fetchedBirthdays = await response.json()
        dispatch({type: "getBirthdays", payload: fetchedBirthdays})
    }

    React.useEffect(() => {getBirthdays()}, [])



    return (
        <>
        <h1>{month.name}</h1>
        <ul>
            {state.birthdays.map((birthday) => (
                <div key={birthday.id}>
                    <h2>{birthday.name}</h2>
                    <div>{birthday.date}</div>
                    <div>{birthday.age}</div>
                    <button onClick={() => {
                        dispatch({type: "select", payload: birthday})
                        props.history.push("/dashboard/edit")
                    }}>Edit</button>
                    <button onClick={() => {
                        fetch(url + "/birthdays/" + birthday.id, {
                            method: "delete",
                            headers: {
                                Authorization: "bearer " + token
                            }
                        })
                        .then(() => getBirthdays())
                    }}>Delete</button>
                </div>
            ))}
        </ul>
    
        </>
    )
}

export default Month