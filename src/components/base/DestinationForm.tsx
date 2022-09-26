import { Button } from '@mui/material';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FormState } from '../../globalInterfaces';
import AutocompleteCity from './AutocompleteCity';

interface Props {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (formState: FormState) => void;
}

const DestinationForm: React.FC<Props> = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState(new Date());
  const tomorrow = new Date(startDate);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [endDate, setEndDate] = useState(tomorrow);
  const [formState, setFormState] = useState<FormState>({
    city: {
      text: '',
      magicKey: '',
      isCollection: true,
    },
    arrivalDate: '',
    departureDate: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | object,
    key: string
  ) => {
    // @ts-ignore
    const val = e;
    setFormState((prevState) => ({ ...prevState, [key]: val }));
  };

  return (
    <div>
      <form>
        <AutocompleteCity onSelect={(place) => handleChange(place, 'city')} />
        <DatePicker
          id="start-date"
          selected={startDate}
          onChange={(date: Date) => {
            setStartDate(date);
            handleChange(date, 'arrivalDate');
          }}
        />
        <DatePicker
          id="end-date"
          selected={endDate}
          onChange={(date: Date) => {
            setEndDate(date);
            handleChange(date, 'arrivalDate');
          }}
        />
        {/* <TextField
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
        /> */}
        <Button variant="contained" onClick={() => onSubmit(formState)}>
          Submit
        </Button>
      </form>
    </div>
  );
};

DestinationForm.defaultProps = {};

export default DestinationForm;
