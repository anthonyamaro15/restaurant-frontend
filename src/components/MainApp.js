import React from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Header from "./Header";

const MainApp = () => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <Header />
    </div>
  );
};

export default MainApp;
