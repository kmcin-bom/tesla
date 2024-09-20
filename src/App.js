import './App.css';
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
} from 'react-leaflet'
import L from 'leaflet';

import teslaData from "./data/telsla-sites.json"

const customIcon = new L.Icon({
  iconUrl: "/img/marker-icon.png",
  iconSize: [38, 38]
})

export default function App() {
  console.log(teslaData)

  const position = [48.8566, 2.3522]


  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {teslaData.map(tsla => (
          <Marker 
            key={tsla.id}
            icon={customIcon}
            position={[tsla.gps.latitude, tsla.gps.longitude]}
          />
      ))}
    </MapContainer>
  );
}


