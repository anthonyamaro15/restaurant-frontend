import React, { useEffect, useState } from "react";
import logo from "../imgs/logo.jpeg";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

const Navbar = () => {
  //   const toggleForm = () => {};

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 3) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      if (window.scrollY === 0) {
        setScrolling(false);
      }
    });
  }, []);

  const isUserScrolling = scrolling
    ? "navbar-wrapper scroll-color"
    : "navbar-wrapper";
  return (
    <div className={isUserScrolling}>
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
          <NavLink to="/menu/combination" exact activeClassName="active">
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
