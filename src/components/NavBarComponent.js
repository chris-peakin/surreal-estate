import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBarStyles.css";

function NavBar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="estate-logo"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/add-property">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
