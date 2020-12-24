import React, { useContext, useReducer } from "react"


// INITIAL STATE //
const initialState = {
    url: "http://birthdaytracker.herokuapp.com",
    token: null,
    username: null
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

