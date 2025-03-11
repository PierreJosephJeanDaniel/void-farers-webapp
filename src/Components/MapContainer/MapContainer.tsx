import React from "react";
import "./MapContainer.css";
import map from "../../assets/solarsystem.svg";

const MapContainer: React.FC = () => {
  return (
    <div className="map-container">
      <img src={map} height={4000} alt="Map" />
    </div>
  );
};

export default MapContainer;
