import { Button, TextField } from '@mui/material';
import React from 'react';

interface Props {
  formValues?: Object;
  onSubmit?: () => {};
}

// eslint-disable-next-line no-unused-vars
const DestinationForm: React.FC<Props> = ({ formValues, onSubmit }) => (
  <div>
    <form>
      <TextField
        id="city"
        label="city"
        variant="standard"
        placeholder="Please enter city"
      />
      <TextField
        id="dates"
        label="Dates"
        variant="standard"
        placeholder="Please enter dates (need react datepicker compoenent)"
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  </div>
);

DestinationForm.defaultProps = {
  formValues: {},
  onSubmit: () => ({}),
};

export default DestinationForm;
