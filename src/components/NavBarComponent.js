import React from 'react';
import '../styles/NavBarStyles.css';

function NavBar() {
  return (
        <div className="navbar">
            <img
                className="logo"
                src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
                alt="estate-logo" />
            <ul className="navbar-links">

                <ul className="navbar-links-item">View Properties</ul>
                <ul className="navbar-links-item">Add a Property</ul>
            </ul>
        </div>
    )
}

export default NavBar;
