import './App.css';
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet'
import L from 'leaflet';

import teslaData from "./data/tesla-sites.json"

const customIcon = new L.Icon({
  iconUrl: "/tesla/img/marker-icon.png",
  iconSize: [38, 38]
})

const filterredStations = teslaData.filter(tsla => tsla.address.country === "Australia")

export default function App() {

  const position = [-37.815338, 144.963226]

  return (
    <MapContainer center={position} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {filterredStations.map(tsla => (
          <Marker  
            key={tsla.id} 
            icon={customIcon}
            position={[tsla.gps.latitude, tsla.gps.longitude]}>

            <Popup >
              <div>
                <h2>{tsla.name}</h2>
                <p>{"Status: " + tsla.status}</p>
                <p>{"Number of charing stations: " + tsla.stallCount}</p>
                <div>{tsla.address.street}, {tsla.address.city},{tsla.address.state} </div>
              </div>
              
            </Popup>

          </Marker>
      ))}
    </MapContainer>
  );
}


