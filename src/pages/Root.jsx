import React from "react"
import { Link, Route } from "react-router-dom"
import balloons from "../images/balloons.png"

const Root = (props) => {

    return (
        <div className="square">
            <Link to="/auth/signup">
                <img src={balloons} />
            </Link>
        </div>
    )

}

export default Root