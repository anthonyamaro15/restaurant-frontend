import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory, useParams } from "react-router-dom";

const ResetPassword = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { token } = useParams();
  const history = useHistory();

  const onSubmit = (value) => {
    const { password, rpassword } = value;
    if (password !== rpassword) {
      setError("Passwords do not match!");
    } else {
      const newPass = {
        password,
      };

      setLoading(true);
      axiosWithAuth()
        .patch(`/api/auth/resetpassword/${token}`, newPass)
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
    }
  };
  return (
    <div className="ResetPassword">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            ref={register({ required: true })}
            placeholder="enter password"
          />
          <p className="error">{errors.password && "Password Require"}</p>
          <p className="error">{error && error}</p>
        </label>

        <label htmlFor="rpassword">
          <input
            type="password"
            name="rpassword"
            id="rpassword"
            ref={register({ required: true })}
            placeholder="re enter password"
          />
          <p className="error">
            {errors.rpassword && "Comfirm Password Require"}
          </p>
          <p className="error">{error && error}</p>
        </label>

        <button
          type="submit"
          disabled={loading}
          className={loading ? "isLoading" : ""}
        >
          {loading ? "reseting.." : "reset"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
