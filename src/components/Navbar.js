import React from "react";
import logo from "../imgs/logo.jpeg";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

const Navbar = () => {
  const toggleForm = () => {};
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
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/menu" exact activeClassName="active">
            menu
          </NavLink>
          <div className="FormModal">
            <Modal />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
