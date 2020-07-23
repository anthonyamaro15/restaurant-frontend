import React from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const MainApp = () => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default MainApp;
