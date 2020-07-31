import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Admin from "./admin/Admin";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import ForgotPassword from "./admin/ForgotPassword";
import ResetPassword from "./admin/ResetPassword";
import MainMenu from "./MainMenu";

const MainApp = () => {
  return (
    <div>
      <Route exact path="/">
        <Navbar />
        <MobileNavbar />
        <Header />
        <Content />
      </Route>
      <PrivateRoute path="/admin" exact component={Admin}></PrivateRoute>
      <Route exact path="/forgot">
        <ForgotPassword />
      </Route>

      <Route
        exact
        path="/api/auth/resetpassword/:token"
        component={ResetPassword}
      />

      <Route exact path="/menu/:category">
        <MainMenu />
      </Route>
      <Footer />
    </div>
  );
};

export default MainApp;

// /api/auth/register
// /api/auth/login
