import React from "react"
import { useAppState } from "../AppState"
import cupcake from "../images/cupcake.png"

const Friends = (props) => {

    const { state, dispatch } = useAppState()
    const { token, url } = state
    const {getBirthdays} = props

    return (
        <>
        <h1>Friends</h1>
        <ul>
            {state.birthdays.map((birthday) => (
                <div className="line-items" key={birthday.id}>
                        <div>
                            <img src={cupcake} alt="cupcake" />
                            <div>{birthday.name}</div>
                            <div>{birthday.date}</div>
                            <div>{birthday.age}</div>
                            <button className="submit" onClick={() => {
                                dispatch({type: "select", payload: birthday})
                                props.history.push("/edit")
                            }}>Edit</button>

                            <button className="submit" onClick={() => {
                                fetch(url + "/birthdays/" + birthday.id, {
                                    method: "delete",
                                    headers: {
                                        Authorization: "bearer " + token
                                    }
                                })
                                .then(() => {getBirthdays()
                                props.history.push("/home")})
                            }}>Delete</button>
                        </div>
                </div>
            ))}
        </ul>
        </>
    )
}

export default Friends