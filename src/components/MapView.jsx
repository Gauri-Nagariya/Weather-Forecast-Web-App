// src/components/MapView.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';


// export default function MapView({ lat, lon, city }) {
//   const position = [lat, lon];

//   return (
//     <div id="map">
//     <MapContainer
//       center={position}
//       zoom={10}
//       scrollWheelZoom={false}
//       style={{ height: '100%', width: '100%' }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; OpenStreetMap contributors'
//       />
//       <Marker position={position}>
//         <Popup>{city}</Popup>
//       </Marker>
//     </MapContainer>
//   </div>
//   );
// }
export default function MapView({ lat, lon, city }) {
  const position = [lat, lon];

  return (
    <div
      id="map"
      style={{
        height: '100%',
        width: '100%',
        borderRadius: '20px',
        overflow: 'hidden',
      }}
    >
      <MapContainer
        center={position}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        {/* <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        /> */}
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
