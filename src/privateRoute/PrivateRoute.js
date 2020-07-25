import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useParams, useRouteMatch} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {


 
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token") || localStorage.getItem('message')) {
           
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
