import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import AdminNavbar from "./AdminNavbar";

const Admin = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [img_url, setImg] = useState("");

  const onSubmit = (values) => {
    const newValues = { ...values, img_url };
    axiosWithAuth()
      .post("/api/items/add", newValues)
      .then((res) => {
        alert(res.data.message);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadImage = (e) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "pl2czq6m");
    formData.append("file", files);

    axios
      .post(`https://api.cloudinary.com/v1_1/dedps0vtx/image/upload`, formData)
      .then((res) => {
        setImg(res.data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Admin">
      <AdminNavbar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="item name"
            ref={register}
          />
          <p className="error">erorr here</p>
        </label>

        <label htmlFor="price">
          <input
            type="number"
            name="price"
            id="price"
            placeholder="price"
            ref={register}
          />
          <p className="error">erorr here</p>
        </label>
        <label htmlFor="desc">
          <input
            type="text"
            name="desc_english"
            id="desc"
            placeholder="item description"
            ref={register}
          />
          <p className="error">erorr here</p>
        </label>

        <label>
          <input
            type="file"
            name="img_url"
            id="file"
            placeholder="select image"
            onChange={uploadImage}
          />
          <p className="error">erorr here</p>
        </label>
        <label htmlFor="items">
          <select name="category" id="items" ref={register}>
            <option value="">Category</option>
            <option value="combination_plates">Combination Plates</option>
            <option value="a_la_carte">a la carte</option>
            <option value="side_orders">side orders</option>
            <option value="breakfast">breakfast</option>
            <option value="daily_specials">daily specials</option>
            <option value="super_combo">super combos</option>
          </select>
          <p className="error">erorr here</p>
        </label>

        <button type="submit">add item</button>
      </form>
    </div>
  );
};

export default Admin;
