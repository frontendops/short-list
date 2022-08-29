import { Typography } from '@mui/material';
import React from 'react';
import DestinationForm from '../../base/DestinationForm';

const ItineraryCreationPage: React.FC = () => (
  <div className="itinerary-creation-page-container">
    <Typography variant="h2" gutterBottom>
      Enter Destination Details
    </Typography>

    <DestinationForm />
  </div>
);

export default ItineraryCreationPage;
