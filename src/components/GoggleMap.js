import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { GiPositionMarker } from "react-icons/gi";

const AnyReactComponent = ({ text }) => <div className="icon">{text}</div>;

const googleKey = process.env.REACT_APP_API_KEY_GOOGLE;

const GoogleMap = ({ location }) => {
  const [center] = useState(location);
  const [zoom] = useState(16);

  return (
    <div style={{ height: "100%", width: "100%" }} className="GoogleMaps">
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleKey }}
        center={center}
        center={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent
          lat={center.lat}
          lng={center.lng}
          text={<GiPositionMarker />}
        />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
