import { Typography } from '@mui/material';
import React from 'react';
import { FormState } from '../../../globalInterfaces';
import DestinationForm from '../../base/DestinationForm';

const ItineraryCreationPage: React.FC = () => {
  const handleSubmit = (formState: FormState) => {
    // push data to display page
    console.log(formState);
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
