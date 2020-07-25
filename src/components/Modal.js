import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FormModal = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, errrors } = useForm();
  const history = useHistory();

  const onSubmit = (value) => {
    axiosWithAuth()
      .post("/api/auth/login", value)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        history.push("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
    setOpen(false);
  };

  const toggleBtn = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
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
                ref={register}
              />
              <p className="error">erorr here</p>
            </label>

            <label htmlFor="password">
              <input
                type="password"
                name="password"
                placeholder="password"
                ref={register}
              />
              <p className="error">erorr here</p>
            </label>

            <button type="submit">login</button>
          </form>
          <span>
            Forgot password? <Link to="/forgot">Click here</Link>{" "}
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default FormModal;

// api/items/add
