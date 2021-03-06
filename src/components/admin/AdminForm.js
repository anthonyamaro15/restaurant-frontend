import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const AdminForm = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [img_url, setImg] = useState("");
  const [errImg, setErrImg] = useState("");

  const onSubmit = (values) => {
    const newValues = { ...values, img_url };

    if (img_url === "") {
      setErrImg("Select image");
    } else {
      axiosWithAuth()
        .post("/api/items/add", newValues)
        .then((res) => {
          alert(res.data.message);
          reset();
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
    <div className="AdminForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="item name"
            ref={register({ required: true })}
          />
          <p className="error">{errors.name && "Require Field"}</p>
        </label>

        <label htmlFor="price">
          <input
            type="number"
            name="price"
            id="price"
            placeholder="price"
            ref={register({ required: true })}
          />
          <p className="error">{errors.number && "Require Field"}</p>
        </label>
        <label htmlFor="desc">
          <input
            type="text"
            name="desc_english"
            id="desc"
            placeholder="item description"
            ref={register({ required: true })}
          />
          <p className="error">{errors.desc_english && "Require Field"}</p>
        </label>

        <label>
          <input
            type="file"
            name="img_url"
            id="file"
            placeholder="select image"
            onChange={uploadImage}
          />
          <p className="error">{errImg && errImg}</p>
        </label>
        <label htmlFor="items">
          <select name="category" id="items" ref={register({ required: true })}>
            <option value="">Category</option>
            <option value="combination_plates">Combination Plates</option>
            <option value="a_la_carte">a la carte</option>
            <option value="side_orders">side orders</option>
            <option value="breakfast">breakfast</option>
            <option value="daily_specials">daily specials</option>
            <option value="super_combo">super combos</option>
          </select>
          <p className="error">{errors.category && "Require Field"}</p>
        </label>

        <button type="submit">add item</button>
      </form>
    </div>
  );
};

export default AdminForm;
