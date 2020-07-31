import React from "react";
import image from "../imgs/jarritos.jpg";
import Carausel from "./Carausel";

const Content = () => {
  return (
    <div>
      <section className="Content">
        {/**
      <h1>daily specials</h1>
      */}
        <h1>daily specials</h1>

        <div className="special-wrapper">
          <div className="special-description">
            <h2>special's name</h2>
            <span>$5.99</span>
            <p>specials description </p>
          </div>
          <div className="special-img-wrapper">
            <img src={image} alt="" />
          </div>
        </div>
      </section>

      <div className="med-content">
        <div className="med-content-inner">
          <h2>in a rush?</h2>
          <p>give us a call to prepare your oder.</p>
          <a href="tel:+702-343-2343">call</a>
        </div>
      </div>

      <div className="lower-content">
        <h1>new items</h1>

        <div className="lower-content-wrapper">
          <div className="menu-description">
            <h2>special's name</h2>
            <span>$5.99</span>
            <p>specials description </p>
          </div>

          <div className="menu-imgs">
            <Carausel />
          </div>
        </div>
      </div>

      <div className="Map-content">
        <h1>locations</h1>
        <div className="map-wrapper">
          <div className="restaurant-map">
            <div className="restaurant-desc">
              <h2>#one</h2>
              <p>phone number: 702-454-3232</p>
              <p>address</p>
            </div>
            <div className="map"></div>
          </div>
          <div className="restaurant-map">
            <div className="restaurant-desc">
              <h2>#two</h2>
              <p>phone number: 702-454-3232</p>
              <p>address</p>
            </div>
            <div className="map"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
