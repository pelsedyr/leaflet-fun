import { useState } from 'react'
import './App.css'
import TextDisplay from './TextDisplay'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MyMapComponent from './MyMapComponent'
import 'leaflet/dist/leaflet.css';
import { getReverseGeocode } from './api/getGeocode'

function App() {

  const [displayText, setDisplayText] = useState('Hello, World!');
  const [latlng, setLatLng] = useState([51.505, -0.09]);
  const [zoom, setZoom] = useState(13);

  const handleTextChange = (text) => {
    setDisplayText(text);
  }

  const handleZoomLevel = (zoomLevel) => {
    setZoom(zoomLevel + 2);
    console.log("zoom: " + zoom);
  }

  const handleLatLngClick = (latlng) => {
    console.log(latlng);
    // setDisplayText(`Latitude: ${latlng.lat}, Longitude: ${latlng.lng}`);
    getReverseGeocode(latlng.lat, latlng.lng, zoom).then(data => {
      console.log(data);
      setDisplayText(data.display_name);
    });
    setLatLng([latlng.lat, latlng.lng]);
  }

  return (
    <div className="grid-container">
      <div className="grid-item">
        <MapContainer center={latlng} zoom={8} scrollWheelZoom={true} >
          <MyMapComponent onLatLngClick={handleLatLngClick} getZoomLevel={handleZoomLevel} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={latlng}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="grid-item">
        <TextDisplay text={displayText} />
      </div>
    </div>
  )
}

export default App
