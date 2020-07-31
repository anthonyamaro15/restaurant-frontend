import React from "react";
import imgs from "../imgs/burrito.jpg";

const SingleItem = () => {
  return (
    <div className="SingleItem">
      <div className="description-plate">
        <h3>plate name</h3>
        <p className="description">description</p>
        <p className="price">$5.99</p>
      </div>
      <div className="img-wrapper">
        <img src={imgs} alt="" />
      </div>
    </div>
  );
};

export default SingleItem;
