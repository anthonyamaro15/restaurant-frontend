import React from "react";
import image from "../imgs/jarritos.jpg";

const Content = () => {
  return (
    <section className="Content">
      <h1>daily specials</h1>
      <div className="special-wrapper">
        <div className="special-img-wrapper">
          <img src={image} alt="" />
        </div>
        <div className="special-description">
          <h2>special's name</h2>
          <span>$5.99</span>
          <p>specials description </p>
        </div>
      </div>

      <div className="med-content">
        <h2>in a rush?</h2>
        <p>give us a call to prepare your oder.</p>
        <a href="tel:+702-343-2343">call</a>
      </div>
    </section>
  );
};

export default Content;
