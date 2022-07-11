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

interface SearchResults {
  label: String;
}

interface SearchResponse {
  result: SearchResults;
}

interface SearchControlProps {
  onSearch: (res: SearchResponse) => SetStateAction<typeof res>;
}

// const SearchControl: React.FC<SearchControlProps> = ({ onSearch }) => {
//   const provider = new EsriProvider({
//     params: {
//       //   'findAddressCandidates?': 'Starbucks',
//       token: API_KEY_DO_NOT_COMMIT,
//     },
//   });

//   console.log(provider.getUrl('https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=pjson&'));
//   // @ts-ignore
//   const search = new GeoSearchControl({
//     autoComplete: true,
//     autoCompleteDelay: 800,
//     provider,
//     style: 'bar',
//     showPopup: true,
//     resultFormat: (res: SearchResponse) => {
//       onSearch(res);
//       return res.result.label;
//     },
//   });

//   const map = useMap();

//   // @ts-ignore
//   useEffect(() => {
//     map.addControl(search);
//     return () => map.removeControl(search);
//   }, []);
//   return null;
// };

const SearchControl: React.FC<SearchControlProps> = ({ onSearch }) => {
  const map = useMap();
  console.log('searching');
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
  const [markers, setMarkers] = useState([[48.864716, 2.349014]]);
  const handleSearchResults = (results: []) => {
    console.log(results);
    setMarkers((prevState) => [
      ...prevState,
      // @ts-ignore
      [results.latlng.lat, results.latlng.lng],
    ]);
  };

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
      <SearchControl onSearch={handleSearchResults} />
      <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        // @ts-ignore
        <Marker key={marker[0]} position={marker} />
      ))}
    </MapContainer>
  );
};
//   </div>/
export default ItineraryMap;
