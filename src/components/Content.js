import React from "react";
import image from "../imgs/jarritos.jpg";
import Carausel from "./Carausel";
import GoggleMap from "./GoggleMap";

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

      <div className="Map-content" id="locations">
        <h1>locations</h1>
        <div className="map-wrapper">
          <div className="restaurant-map">
            <div className="restaurant-desc">
              <h2>#one</h2>
              <address>
                <a href="tel:+7023649934">(702) 364-9934</a>
                <span>5095 S Decatur Blvd, Las Vegas, NV 89118</span>
                <span>Open 24 hours</span>
              </address>
            </div>
            <div className="map">
              {/**
             <GoggleMap />
             <GoggleMap location={{ lat: 36.0974845, lng: -115.2088623 }} />
            */}
            </div>
          </div>
          <div className="restaurant-map">
            <div className="restaurant-desc">
              <h2>#two</h2>
              <address>
                <a href="tel:+7025228444">(702) 522-8444</a>
                <span>1680 W Sunset Rd suite a, Henderson, NV 89014</span>
                <span>Monday through Saturday 7AM-11PM, Sunday 8AM-11PM</span>
              </address>
            </div>
            <div className="map">
              {/**
           <GoggleMap location={{ lat: 36.0643037, lng: -115.0591439 }} />
            */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
