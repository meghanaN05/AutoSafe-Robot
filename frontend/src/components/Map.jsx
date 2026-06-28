import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const Map = ({ accident }) => {
  if (!accident) return null;

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: accident.latitude,
          lng: accident.longitude,
        }}
        zoom={14}
      >
        <Marker
          position={{
            lat: accident.latitude,
            lng: accident.longitude,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;