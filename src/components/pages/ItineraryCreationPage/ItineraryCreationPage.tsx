import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ItineraryCreationPageStyles.css';
import { CityResult, FormState, LocationData } from '../../../globalInterfaces';
import { mapKey } from '../../../apikey';
import DestinationForm from '../../base/DestinationForm';

const ItineraryCreationPage: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = async (formState: FormState) => {
    // push data to display page
    const url =
      'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?';
    const res = await fetch(
      `${url}SingleLine=${formState.city.text}&magicKey=${formState.city.magicKey}&f=json&token=${mapKey}`
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
      visited: false,
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
      <h2 className="app-heading">Enter Destination Details</h2>
      <DestinationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ItineraryCreationPage;
