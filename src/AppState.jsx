import React, { useContext, useReducer } from "react"


// INITIAL STATE //
const initialState = {
    url: "https://birthdaytracker.herokuapp.com",
    // url: "http://localhost:3000",
    token: null,
    username: null,
    birthdays: [],
    new: {
        name: "",
        date: "",
        age: ""
    },
    edit: {
        id: 0,
        name: "",
        date: "",
        age: ""
    },
    filteredMonth: []
}

// REDUCER //

// action = {type: "", payload: ---}
const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case "auth":
            newState = { ...state, ...action.payload }
            return newState
            break
        case "logout":
            newState = { ...state, token: null, username: null }
            window.localStorage.removeItem("auth")
            return newState
            break
        case "getBirthdays":
            console.log(action.payload)
            newState = { ...state, birthdays: action.payload }
            return newState
            break
        case "select":
            newState = { ...state, edit: action.payload } 
            return newState
            break
        case "filteredBirthdays":
            newState = { ...state, filteredMonth: action.payload }
        default:
            return state
            break
    }
}

// APP CONTEXT //
const AppContext = React.createContext(null)

// APPSTATE COMPONENT //
export const AppState = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return <AppContext.Provider value={{state, dispatch}}>
        {props.children}
    </AppContext.Provider>
}

// USEAPPSTATE HOOK //
export const useAppState = () => {
    return React.useContext(AppContext)
}

