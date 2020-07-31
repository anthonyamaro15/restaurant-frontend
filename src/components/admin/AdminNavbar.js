import React, { useEffect, useState } from "react";
import logo from "../../imgs/logo.jpeg";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

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

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };
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
          <button onClick={logout}>logout</button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
