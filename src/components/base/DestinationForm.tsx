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
    <div className="destination-form-container">
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
        <div className="submit-container">
          <Button variant="contained" onClick={() => onSubmit(formState)}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

DestinationForm.defaultProps = {};

export default DestinationForm;
