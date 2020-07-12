import React from "react";
import logo from "../imgs/logo.jpeg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/locations" activeClassName="active">
            locations
          </NavLink>
          <NavLink to="/login" activeClassName="active">
            admin login
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
