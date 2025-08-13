// src/components/MapView.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function ChangeView({ center }) {
  const map = useMap();
  React.useEffect(() => {
    if (center) {
      map.setView(center, 10); // zoom level 10
    }
  }, [center, map]);
  return null;
}

export default function MapView({ lat, lon, city }) {
  const position = [lat, lon];

  return (
    <div
      id="map"
      style={{
        height: "400px",  // fixed height to ensure map shows properly
        width: "100%",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <MapContainer center={position} zoom={10} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <ChangeView center={position} />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
        <Marker position={position}>
          <Popup>{city}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
