import React from "react";
import Navbar from "./Navbar";
import MobileNavar from "./MobileNavbar";
import MenuPage from "./MenuPage";

const MainMenu = () => {
  return (
    <div>
      <Navbar />
      <MobileNavar />
      <MenuPage />
    </div>
  );
};

export default MainMenu;
