import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Admin from "./admin/Admin";
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
      <Route exact path="/">
        <Header />
        <Content />
      </Route>
      <PrivateRoute component={Admin} />
      <Footer />
    </div>
  );
};

export default MainApp;
