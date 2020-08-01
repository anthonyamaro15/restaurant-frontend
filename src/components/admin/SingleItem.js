import React from "react";
import imgs from "../../imgs/example.jpg";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

const SingleItem = () => {
  return (
    <div className="SingleItem">
      <div className="description-plate">
        <h3>plate name</h3>
        <p className="description">description</p>
        <p className="price">$5.99</p>
        <div className="icons">
          <span>
            {" "}
            <MdDelete />
          </span>
          <span>
            <MdModeEdit />
          </span>
        </div>
      </div>
      <div className="img-wrapper">
        <img src={imgs} alt="" />
      </div>
    </div>
  );
};

export default SingleItem;
