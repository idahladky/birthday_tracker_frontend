import React from "react"
import { Link } from "react-router-dom"

const Root = (props) => {

    return (
        <>
        <Link to="/auth/signup"><button>Sign Up</button></Link>
        <Link to="/auth/login"><button>Log In</button></Link>
        </>
    )

}

export default Root