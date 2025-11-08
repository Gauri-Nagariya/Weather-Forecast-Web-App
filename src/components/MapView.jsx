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
  const [theme, setTheme] = React.useState(
    document.documentElement.getAttribute("data-theme") || "light"
  );

  // 🌓 Watch for theme changes dynamically
  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute("data-theme");
      setTheme(newTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  // 🗺️ Define map styles for light/dark
  const tileURL =
    theme === "dark"
      ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

  return (
    <div
      id="map"
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <MapContainer
        center={position}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <ChangeView center={position} />
        <TileLayer
          url={tileURL}
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
        <Marker position={position}>
          <Popup>{city}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
