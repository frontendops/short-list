import React, { SetStateAction, useEffect, useState } from 'react';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

interface SearchResults {
  label: String;
}

interface SearchResponse {
  result: SearchResults;
}

interface SearchControlProps {
  onSearch: (res: SearchResponse) => SetStateAction<typeof res>;
}

const SearchControl: React.FC<SearchControlProps> = ({ onSearch }) => {
  // @ts-ignore
  const search = new GeoSearchControl({
    autoComplete: true,
    autoCompleteDelay: 800,
    provider: new OpenStreetMapProvider(),
    style: 'bar',
    showPopup: true,
    resultFormat: (res: SearchResponse) => {
      onSearch(res);
      return res.result.label;
    },
  });

  const map = useMap();

  // @ts-ignore
  useEffect(() => {
    map.addControl(search);
    return () => map.removeControl(search);
  }, []);
  return null;
};

const ItineraryMap: React.FC = () => {
  const [searchResults, setSearchResults] = useState({});
  console.log(searchResults);
  return (
    <MapContainer
      center={[48.864716, 2.349014]}
      scrollWheelZoom={false}
      style={{ height: '350px', width: '100%' }}
      zoom={10}
    >
      {/* define correct props */}
      {/* @ts-ignore */}
      <SearchControl onSearch={setSearchResults} />
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
  );
};
//   </div>/
export default ItineraryMap;
