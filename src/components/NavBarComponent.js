import React from "react";
import FacebookLogin from "react-facebook-login";
import { Link } from "react-router-dom";
import "../styles/NavBarStyles.css";
import PropTypes from "prop-types";

function NavBar({ userId, onLogin, onLogout }) {
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
      <div className="login-button">
        {(userId && (
          <button type="submit" onClick={onLogout}>
            Sign Out
          </button>
        )) || (
          <FacebookLogin
            appId="564065984911435"
            autoLoad
            callback={onLogin}
            textButton="Login"
          />
        )}
      </div>
    </div>
  );
}

export default NavBar;

NavBar.propTypes = {
  userId: PropTypes.number,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
}.isRequired;
