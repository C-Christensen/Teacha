import React from "react"
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className = "wrapper">
            <div className = "logo">
                <img src={logo} alt = "pic"/>
            </div>

            <div className = "navbar-item" >
                <Link className = "link" to="/dashboard">
                    Dashboard
                </Link>
            </div>

            <div className = "navbar-item" >
                <Link className = "link" to="/mentoringcircle">
                    Mentor Circle
                </Link>
            </div>

            <div className = "navbar-item" >
                <Link className = "link" to="/explore">
                    Explore
                </Link>
            </div>
       
        </div>
    )
}
export default Navbar