import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";
import MobileNavar from "../MobileNavbar";

const ForgotPassword = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const history = useHistory();

  const onSubmit = (value) => {
    axiosWithAuth()
      .patch("/api/auth/forgot", value)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        history.push("/");
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <MobileNavar />
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
    </>
  );
};

export default ForgotPassword;
