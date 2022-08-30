import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

interface Props {
  formValues?: Object;
  onSubmit?: () => {};
}

// eslint-disable-next-line no-unused-vars
const DestinationForm: React.FC<Props> = ({ formValues, onSubmit }) => {
  // @ts-ignore
  const [formState, setFormState] = useState({
    city: '',
    arrivalDate: '',
    departureDate: '',
  });

  // @ts-ignore
  const handleChange = (e, key) => {
    const val = e.target.value;
    // @ts-ignore

    setFormState((prevState) => ({ ...prevState, [key]: val }));
  };
  return (
    <div>
      <form>
        <TextField
          id="city"
          label="city"
          variant="standard"
          value={formState.city}
          onChange={(e) => handleChange(e, 'city')}
          placeholder="Please enter city"
        />
        <TextField
          id="dates-arrival"
          label="Arrival Date"
          variant="standard"
          value={formState.arrivalDate}
          onChange={(e) => handleChange(e, 'arrivalDate')}
          placeholder="Please enter arrival date (need react datepicker compoenent)"
        />
        <TextField
          id="dates-departure"
          label="Departure Date"
          variant="standard"
          value={formState.departureDate}
          onChange={(e) => handleChange(e, 'departureDate')}
          placeholder="Please enter departure date (need react datepicker compoenent)"
        />
        <Button variant="contained" onClick={() => console.log(formState)}>
          Submit
        </Button>
      </form>
    </div>
  );
};

DestinationForm.defaultProps = {
  formValues: {},
  onSubmit: () => ({}),
};

export default DestinationForm;
