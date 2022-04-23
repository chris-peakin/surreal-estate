import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Link } from "react-router-dom";
import "../styles/NavBarStyles.css";

function NavBar() {
  const [userId, setUserId] = useState("");

  const onLogin = (response) => {
    setUserId(response.userID);
  };

  const onLogout = () => {
    window.FB.logout();
    setUserId("");
  };

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
  );
}

export default NavBar;
