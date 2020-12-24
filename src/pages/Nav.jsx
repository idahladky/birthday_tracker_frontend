import React from "react"
import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <header>
            <h1>Birthday Tracker</h1>
            <nav>
                <Link to="/"><div>Home</div></Link>
                <Link to="/auth/signup"><div>Sign Up</div></Link>
                <Link to="/auth/login"><div>Log In</div></Link>
                <Link to="/auth/logout"><div>Log Out</div></Link>
            </nav>

        </header>
    )
}

export default Nav