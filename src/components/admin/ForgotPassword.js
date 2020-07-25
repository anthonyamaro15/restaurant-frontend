import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import { Link, useHistory, useRouteMatch } from "react-router-dom";


const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (value) => {
     console.log(value)
    axiosWithAuth()
      .patch('/api/auth/forgot', value)
         .then(res => {
            console.log(res.data);
            alert(res.data.message)
        localStorage.setItem("message", JSON.stringify(res.data.message));

         }).catch(err => {
            console.log(err);
         })
  };
  return (
    <div className="ForgotPassword">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter password"
            ref={register}
          />
          <p className="error">erorr here</p>
        </label>
        <button type="submit">reset</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
