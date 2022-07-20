/* eslint-disable no-unused-vars */
import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import { EsriProvider, GeoSearchControl } from 'leaflet-geosearch';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
// @ts-ignore - no typedefs available
import { geosearch } from 'esri-leaflet-geocoder/src/Controls/Geosearch';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';
// @ts-ignore - no typdefs available
import { arcgisOnlineProvider } from 'esri-leaflet-geocoder/src/Providers/ArcgisOnlineGeocoder';
import apikeydonotcommit from '../../apikey';
import { LocationResult } from '../../globalInterfaces';

interface SearchResult {
  latlng: number[];
  results: LocationResult[];
}

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
  const map = useMap();
  // @ts-ignore
  useEffect(() => {
    const searchConrol = geosearch({
      //  useMapBounds: false use this to search globally (when picking cities)
      placeholder: 'Search for a place or address',
      position: 'topright',
      expanded: true,
      providers: [
        arcgisOnlineProvider({
          apikey: apikeydonotcommit,
          maxResults: 15,
        }),
      ],
    });
    searchConrol.on('results', onSearch);
    map.addControl(searchConrol);

    return () => map.removeControl(searchConrol);
  }, []);
  return null;
};

const ItineraryMap: React.FC = () => {
  const [searchResults, setSearchResults] = useState({});
  const [markers, setMarkers] = useState([
    { id: '1', latlng: [48.864716, 2.349014] },
  ]);
  const handleSearchResults = (res: SearchResult) => {
    const resultsList = res.results;
    if (resultsList.length) {
      resultsList.forEach((result: LocationResult) => {
        setMarkers((prevState) => [
          ...prevState,
          {
            id: `${result.latlng.lat}${result.properties.LongLabel}`,
            latlng: [result.latlng.lat, result.latlng.lng],
          },
        ]);
      });
    }
  };

  console.log(searchResults);
  return (
    <MapContainer
      center={[48.864716, 2.349014]}
      scrollWheelZoom={false}
      style={{ height: '350px', width: '100%' }}
      zoom={10}
    >
      {/* @ts-ignore */}
      <SearchControl onSearch={handleSearchResults} />
      <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        // pass data into
        // @ts-ignore
        <Marker key={marker.id} position={marker.latlng} />
      ))}
    </MapContainer>
  );
};
//   </div>/
export default ItineraryMap;
