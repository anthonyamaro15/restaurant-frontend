import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  const [isMoblie, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMoblie);
  };
  return (
    <div>
      <div
        className={isMoblie ? "burger-menu" : "burger-menu close"}
        onClick={toggleMenu}
      >
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
      <div className={!isMoblie ? "MobileNavbar show" : "MobileNavbar"}>
        <nav>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/locations" activeClassName="active">
            Locations
          </NavLink>
          <NavLink to="/login" activeClassName="active">
            Admin Login
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
