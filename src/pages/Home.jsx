import React from "react"
import { Link, Route } from "react-router-dom"
import { useAppState } from "../AppState"
import Show from "../pages/Show"
const Home = (props) => {

    const { state, dispatch } = useAppState()
    const { token, url, birthdays, username, months } = state
    console.log(token)

    const getBirthdays = async () => {
        if (token) {
            console.log(token, state.token)
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
    }

    React.useEffect(() => {getBirthdays()}, [token])

    const loaded = () => {
        console.log(birthdays)
        return (
        <main>
            <div className="container" >
                <h1>Upcoming Birthdays</h1>
                <ul>
                    {birthdays.map((birthday) => (
                        <div key={birthday.id}>
                            <Route path={`/home/${birthday.id}`} render={(rp) => <Show {...rp} birthday={birthday} getBirthdays={getBirthdays}/>} />
                            <Link to={`/home/${birthday.id}`}>
                                <div className="line-items">
                                    <h2>{birthday.name}</h2>
                                    <p>{birthday.date}</p>
                                    <p>{birthday.age}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </ul>
            </div>
        </main>
    )}

    return birthdays ? loaded() : <h1>Loading</h1>
    // return <h1>Hello World</h1>
}

export default Home