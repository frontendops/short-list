import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { FormState } from '../../globalInterfaces';

interface Props {
  formValues?: Object;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (formState: FormState) => void;
}

// eslint-disable-next-line no-unused-vars
const DestinationForm: React.FC<Props> = ({ formValues, onSubmit }) => {
  const [formState, setFormState] = useState<FormState>({
    city: '',
    arrivalDate: '',
    departureDate: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    const val = e.target.value;
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
        <Button variant="contained" onClick={() => onSubmit(formState)}>
          Submit
        </Button>
      </form>
    </div>
  );
};

DestinationForm.defaultProps = {
  formValues: {},
};

export default DestinationForm;
