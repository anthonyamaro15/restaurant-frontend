import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

/// adding comment
const FormModal = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  // comments

  const onSubmit = (value) => {
    setLoading(true);
    axiosWithAuth()
      .post("/api/auth/login", value)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        history.push("/admin");
        window.location.reload(true);
        setLoading(false);
        setOpen(false);
      })
      .catch((err) => {
        setError(err.response.data.errMessage);
        setLoading(false);
      });
  };

  const toggleBtn = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const redirectTo = () => {
    setOpen(false);

    history.push("/forgot");
    window.location.reload(true);
  };
  return (
    <div>
      <button className="button" onClick={toggleBtn}>
        admin login
      </button>
      <Modal open={open} onClose={closeModal}>
        <div className="form-wrapper">
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                placeholder="email"
                ref={register({ required: true })}
              />
              <p className="error">{errors.email && "Email require"}</p>
              <p className="error">{error && error}</p>
            </label>

            <label htmlFor="password">
              <input
                type="password"
                name="password"
                placeholder="password"
                ref={register({ required: true })}
              />
              <p className="error">{errors.password && "Password Require"}</p>
              <p className="error">{error && error}</p>
            </label>

            <button
              type="submit"
              className={loading ? "isLoading" : ""}
              disabled={loading}
            >
              {loading ? "loging in" : "login"}
            </button>
          </form>
          <span>
            Forgot password? <button onClick={redirectTo}>Click here</button>{" "}
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default FormModal;

// api/items/add
