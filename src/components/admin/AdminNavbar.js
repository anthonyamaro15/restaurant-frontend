import React from "react";
import logo from "../../imgs/logo.jpeg";
import { NavLink, useHistory } from "react-router-dom";

import { useRouteMatch } from "react-router-dom";

const Navbar = () => {
  const rout = useRouteMatch();
  const history = useHistory();

  const toggleForm = () => {};

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <div className="navbar-wrapper">
      <div className="Navbar">
        <div className="logo-wrapper">
          {/**
       <img src={logo} alt="restaurant logo" />
      */}
          <img src={logo} alt="restaurant logo" />

          {/**
       <h1>felipitos</h1>
      */}
        </div>
        <nav className="links">
          <button onClick={logout}>logout</button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
