/* eslint-disable no-unused-vars */
import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import { EsriProvider, GeoSearchControl } from 'leaflet-geosearch';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
// @ts-ignore - no typedefs available
import { geosearch } from 'esri-leaflet-geocoder/src/Controls/Geosearch';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';
// @ts-ignore - no typdefs available
import { arcgisOnlineProvider } from 'esri-leaflet-geocoder/src/Providers/ArcgisOnlineGeocoder';
import { Button, CardContent, Typography } from '@mui/material';
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

interface MarkerData {
  id: string;
  latlng: [number, number];
  data: LocationResult;
  saved: boolean;
}

interface SearchControlProps {
  onSearch: (res: SearchResponse) => SetStateAction<typeof res>;
}

const copyAddr = (addr: string) => {
  navigator.clipboard.writeText(addr);
};

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
  const [markers, setMarkers] = useState<MarkerData[]>([
    // @ts-ignore
    { id: '1', latlng: [48.864716, 2.349014], data: {}, saved: true },
  ]);
  const handleSearchResults = (res: SearchResult) => {
    // reset markers in the display
    // leave the ones that are selected
    setMarkers((prevState) => prevState.filter((marker) => marker.saved));
    const resultsList = res.results;
    if (resultsList.length) {
      resultsList.forEach((result: LocationResult) => {
        console.log(result);
        setMarkers((prevState) => [
          ...prevState,
          {
            id: `${result.latlng.lat}${result.properties.LongLabel}`,
            latlng: [result.latlng.lat, result.latlng.lng],
            data: result,
            saved: false,
          },
        ]);
      });
    }
  };

  const saveMarker = (id: string) => {
    setMarkers((prevState) =>
      prevState.map((marker) =>
        marker.id === id ? { ...marker, saved: true } : marker
      )
    );
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
      {markers.map((marker: MarkerData) => (
        // pass data into
        <Marker
          key={marker.id}
          position={marker.latlng}
          opacity={marker.saved ? 1 : 0.7}
        >
          <Popup>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {marker?.data?.properties?.Type || 'Category'}
              </Typography>
              <Typography variant="h5" component="div">
                {marker?.data?.text || 'title'}
              </Typography>

              <Typography variant="body2">
                {marker?.data?.properties?.Place_addr || 'Address'}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => saveMarker(marker.id)}
              >
                Save Location
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  copyAddr(marker?.data?.properties?.LongLabel || 'addr')
                }
              >
                Copy Address
              </Button>
            </CardContent>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
//   </div>/
export default ItineraryMap;
