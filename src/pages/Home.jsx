import React from "react"
import { useAppState } from "../AppState"

const Home = (props) => {

    const { state } = useAppState()
    const { token, birthdays } = state
    const { getBirthdays } = props


    React.useEffect(() => {getBirthdays()}, [token])

    const loaded = () => {
        return (
            // <main>
                <div>
                    <h1>Upcoming Birthdays</h1>
                    <ul>
                        {birthdays.map((birthday) => (
                            <div key={birthday.id}>
                                    <div>
                                        <h2>{birthday.name}</h2>
                                        <p>{birthday.date}</p>
                                        <p>{birthday.age}</p>
                                    </div>
                            </div>
                        ))}
                    </ul>
                </div>
            // </main>
        )}

    return birthdays ? loaded() : <h1>Loading</h1>
}

export default Home