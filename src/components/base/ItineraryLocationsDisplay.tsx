import { Box, Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react';
import { LocationData } from '../../globalInterfaces';
import './ItineraryLocationsDisplay.css';

// define on submit arguments
interface Props {
  locations: LocationData[];
}

const ItineraryLocationDisplay: React.FC<Props> = ({ locations }) => {
  console.log(locations);
  // eslint-disable-next-line no-unused-vars
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Box
      sx={{
        maxWidth: 960,
        margin: '2rem auto',
      }}
    >
      <Stepper activeStep={activeStep}>
        {locations.map((loc) => {
          const stepProps: { completed?: boolean } = { completed: loc.visited };

          return (
            <Step key={loc.city.address} completed={stepProps.completed}>
              <StepLabel>{loc.city.address}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};

export default ItineraryLocationDisplay;
