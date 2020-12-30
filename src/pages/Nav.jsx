import React from "react"
import { Link } from "react-router-dom"
import { useAppState } from "../AppState"


const Nav = (props) => {

    const {state, dispatch} = useAppState()

    return (
        <header>
            <h1>Birthday Tracker</h1>
            <nav>
                {!state.token ? 
                    (<>
                        <Link to="/auth/signup"><div>Sign Up</div></Link>
                        <Link to="/auth/login"><div>Log In</div></Link>
                    </>) 
                : null}
                {state.token ? 
                   (<>
                        <Link to="/home"><div>Home</div></Link>
                        <Link to="/friends"><div>Friends</div></Link>
                        <Link to="/calendar"><div>Calendar</div></Link>
                            <p onClick={() => {
                                dispatch({type: "logout"})
                                props.history.push("/")
                            }}>Log Out</p>
                        <Link className="new" to="/new"><button>Add a Birthday</button></Link>
                    </>)
                : null}
            </nav>
        </header>
    )
}

export default Nav