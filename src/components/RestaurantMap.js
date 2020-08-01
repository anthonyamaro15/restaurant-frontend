import React from "react";
import GoogleMap from "./GoggleMap";

const RestaurantMap = ({ location }) => {
  return (
    <div className="restaurant-map">
      <div className="restaurant-desc">
        <h2>#one</h2>
        <address>
          <a href="tel:+13115552368">(311) 555-2368</a>
          <span>{location}</span>
        </address>
      </div>
      <div className="map">
        {/**
             <GoggleMap />
            */}
        <GoogleMap location={location} />
      </div>
    </div>
  );
};

export default RestaurantMap;

// 5095 S Decatur Blvd, Las Vegas, NV 89118
