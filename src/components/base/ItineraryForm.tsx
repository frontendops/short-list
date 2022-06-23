import { Button, TextField } from '@mui/material';
import React from 'react';

// define on submit arguments
interface Props {
  onFormSubmit: () => void;
}

const ItineraryForm: React.FC<Props> = ({ onFormSubmit }) => (
  <form className="itinerary-form-container">
    {/* make this autocomplete */}
    <TextField
      id="location-input"
      label="Location"
      variant="outlined"
      placeholder="Where are you going?"
    />
    <TextField
      id="date-input"
      label="When"
      type="date"
      variant="outlined"
      placeholder="When are you going?"
    />
    <Button variant="contained" onClick={onFormSubmit}>
      Submit
    </Button>
  </form>
);

export default ItineraryForm;
