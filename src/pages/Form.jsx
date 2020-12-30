import React from "react"
import { useAppState } from "../AppState"

const Form = (props) => {
    const { state } = useAppState()
    const { token } = state
    const action = props.type
    const [formData, setFormData] = React.useState(state[action])

    const actions = {
        new: () => {
            return fetch(state.url + "/birthdays", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "bearer " + token
                },
                body: JSON.stringify(formData),
            }).then((response) => response.json())
        },
        edit: () => {
            return fetch(state.url + "/birthdays/" + state.edit.id, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "bearer " + token
                },
                body: JSON.stringify(formData),
            }).then((response) => response.json())
        }
    }


    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        actions[action]().then((data) => {
            props.getBirthdays()
            props.history.push("/home")
        })
    }

    return (
        <main>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                    <input type="date" name="date" value={formData.date} onChange={handleChange} />
                    <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
                    <input type="submit" className="submit" value={action.toUpperCase()} />
                </form>
            </div>
        </main>
    )
}

export default Form