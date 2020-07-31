import React from "react";
import imgs from "../imgs/burrito.jpg";

const SingleItem = () => {
  return (
    <div className="SingleItem">
      <div className="img-wrapper">
        <img src={imgs} alt="" />
      </div>
      <div className="description-plate">
        <h3>plate name</h3>
        <p>$5.99</p>
        <p>description</p>
      </div>
    </div>
  );
};

export default SingleItem;
