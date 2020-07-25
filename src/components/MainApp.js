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
import ResetPassword  from './admin/ResetPassword';

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
      <Route exact path="/forgot">
        <ForgotPassword />
      </Route>


      <PrivateRoute exact path="/api/auth/resetpassword/:token" component={ResetPassword}/>
      
      

      <Footer />
    </div>
  );
};

export default MainApp;

// /api/auth/register
// /api/auth/login
