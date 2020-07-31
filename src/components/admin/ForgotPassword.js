import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";
import MobileNavar from "../MobileNavbar";

const ForgotPassword = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const onSubmit = (value) => {
    setLoading(true);
    axiosWithAuth()
      .patch("/api/auth/forgot", value)
      .then((res) => {
        alert(res.data.message);
        history.push("/");
        reset();
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.errMessage);
        setLoading(false);
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
              ref={register({ required: true })}
            />
            <p className="error">{errors.email && "Email Require"}</p>
            <p className="error">{error && error}</p>
          </label>
          <button
            type="submit"
            className={loading ? "isLoading" : ""}
            disabled={loading}
          >
            {loading ? "sending..." : "reset"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
