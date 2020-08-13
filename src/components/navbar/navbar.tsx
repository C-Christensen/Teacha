import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="wrapper">
      <div className="img-div">
        <a href="/dashboard">
          <img className="logo" src={logo} alt="pic" />
        </a>
      </div>

      <div className="navbar">
        <div className="navbar-item">
          <Link className="link" to="/dashboard">
            {" "}
            Dashboard{" "}
          </Link>
        </div>

        <div className="navbar-item">
          <Link className="link" to="/mentoringcircle">
            {" "}
            Mentor Circle{" "}
          </Link>
        </div>

        <div className="navbar-item">
          <Link className="link" to="/explore">
            {" "}
            Explore{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
