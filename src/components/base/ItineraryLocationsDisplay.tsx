import { Box, Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react';

interface Location {
  name: string;
  visited: boolean;
}

// define on submit arguments
interface Props {
  locations: Location[];
}

const ItineraryLocationDisplay: React.FC<Props> = ({ locations }) => {
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
            <Step key={loc.name} completed={stepProps.completed}>
              <StepLabel>{loc.name}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};

export default ItineraryLocationDisplay;
