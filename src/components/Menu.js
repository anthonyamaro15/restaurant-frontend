import React from "react";
import Navbar from "./Navbar";
import MobileNavar from "./MobileNavbar";
import MenuHeader from "./MenuHeader";

const Menu = () => {
  return (
    <div>
      <Navbar />
      <MobileNavar />
      <MenuHeader />
      <h2>Menu</h2>
    </div>
  );
};

export default Menu;
