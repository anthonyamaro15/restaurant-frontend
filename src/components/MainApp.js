import React from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Header from "./Header";
import Content from "./Content";

const MainApp = () => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <Header />
      <Content />
    </div>
  );
};

export default MainApp;
