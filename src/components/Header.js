import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <div className="inner-wrapper">
        <h1>best mexican food in town!</h1>
        <p>Fresh authentic mexican food everyday.</p>
        <Link to="/">see menu</Link>
      </div>
    </header>
  );
};

export default Header;

// at felipitos mexican restaurant we use traditional ingredients and family recipes
