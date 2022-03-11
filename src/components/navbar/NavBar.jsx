import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";

const NavBar = () => {
  const [profile, setProfile] = useState(false);

  const toggleProfileHandler = () => {
    setProfile((prevProfile) => !prevProfile);
  };



  return (
    <div>
      <nav className="navbar-container">
        <h3><Link to={"/"}>Home</Link></h3>
        <button id="login-button" onClick={toggleProfileHandler}>
          {profile ? <Link to={"/profile"}>Profile</Link> : "Login"}
        </button>
      </nav>

      <div></div>
    </div>
  );
};

export default NavBar;
