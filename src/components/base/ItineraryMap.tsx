/* eslint-disable no-unused-vars */
import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import { EsriProvider, GeoSearchControl } from 'leaflet-geosearch';
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from 'react-leaflet';
// @ts-ignore - no typedefs available
import { geosearch } from 'esri-leaflet-geocoder/src/Controls/Geosearch';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';
// @ts-ignore - no typdefs available
import { arcgisOnlineProvider } from 'esri-leaflet-geocoder/src/Providers/ArcgisOnlineGeocoder';
import { Button, CardContent, Typography } from '@mui/material';
import { mapKey as apikeydonotcommit } from '../../apikey';
import { LocationResult, MarkerData } from '../../globalInterfaces';
import './ItineraryMap.css';

interface SearchResults {
  label: String;
}

interface SearchResponse {
  result: SearchResults;
}

interface ItineraryMapProps {
  markers: MarkerData[];
  onSearchResults: Function;
  onClear: () => void;
  onSaveMarker: Function;
}

interface SearchControlProps {
  onSearch: (res: SearchResponse) => SetStateAction<typeof res>;
}

interface ClearControlProps {
  position: string;
  onClear: () => void;
}

const POSITION_CLASSES: object = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-top leaflet-right',
};

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

const ClearControl: React.FC<ClearControlProps> = ({ position, onClear }) => {
  const positionClass =
    // @ts-ignore
    (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright;
  return (
    <div className={positionClass}>
      <div className="leaflet-control leaflet-bar">
        <button type="button" onClick={onClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

const ItineraryMap: React.FC<ItineraryMapProps> = ({
  markers,
  onSearchResults,
  onClear,
  onSaveMarker,
}) => {
  console.log(markers);
  const [searchResults, setSearchResults] = useState({});

  return (
    <div className="map-card">
      <MapContainer
        center={[48.864716, 2.349014]}
        scrollWheelZoom={false}
        style={{ height: '350px', width: '100%' }}
        zoom={10}
      >
        {/* @ts-ignore */}
        <SearchControl onSearch={onSearchResults} />
        <TileLayer
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
        />
        {/* @ts-ignore */}
        {Boolean(markers.filter((marker) => !marker.saved).length) && (
          <ClearControl position="bottomright" onClear={onClear} />
        )}

        <Button>Clear</Button>
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
                  onClick={() => onSaveMarker(marker)}
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
    </div>
  );
};
//   </div>/
export default ItineraryMap;
