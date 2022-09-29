import { Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import apikey from '../../../apikey';
import { CityResult, FormState } from '../../../globalInterfaces';
import DestinationForm from '../../base/DestinationForm';
// import { useHistory } from 'react-router-dom'

interface CityData {
  address: string;
  lat: number;
  long: number;
}

interface LocationData {
  city: CityData;
  arrivalDate: string;
  departureDate: string;
}

const ItineraryCreationPage: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = async (formState: FormState) => {
    // push data to display page
    console.log(formState);
    const url =
      'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?';
    const res = await fetch(
      `${url}SingleLine=${formState.city.text}&magicKey=${formState.city.magicKey}&f=json&token=${apikey}`
    );

    const json: CityResult = await res.json();
    console.log('this is the city data');

    const locationData: LocationData = {
      city: {
        address: json.candidates[0].address,
        lat: json.candidates[0].location.x,
        long: json.candidates[0].location.y,
      },
      arrivalDate: formState.arrivalDate,
      departureDate: formState.departureDate,
    };

    console.log(locationData);

    // get date picker component
    navigate('/', {
      state: {
        locationData,
      },
    });
  };

  return (
    <div className="itinerary-creation-page-container">
      <Typography variant="h2" gutterBottom>
        Enter Destination Details
      </Typography>

      <DestinationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ItineraryCreationPage;
