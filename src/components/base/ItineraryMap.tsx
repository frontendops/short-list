import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const ItineraryMap: React.FC = () => (
  //   <div id="map" style={{ height: '450px', width: '100%' }}>
  <MapContainer
    center={[48.864716, 2.349014]}
    zoom={10}
    scrollWheelZoom={false}
    style={{ height: '350px', width: '100%' }}
  >
    <TileLayer
      attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
    />
    <Marker position={[48.864716, 2.349014]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  //   </div>/
);

export default ItineraryMap;
