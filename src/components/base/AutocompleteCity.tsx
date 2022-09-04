import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import apikey from '../../apikey';

interface Props {
  // eslint-disable-next-line no-unused-vars
  onSelect: (place: string) => void;
}

// eslint-disable-next-line no-unused-vars
const AutocompleteCity: React.FC<Props> = ({ onSelect }) => {
  // eslint-disable-next-line no-unused-vars
  const [places, setPlaces] = useState<string[]>([
    'Paris, FR',
    'Frankfurt, DE',
    'Zurich, CH',
  ]);

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputVal = e.target.value;
    if (inputVal.length >= 4) {
      const url =
        'https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?';
      const res = await fetch(
        `${url}text="${inputVal}"&f="json"&token="${apikey}"`
      );
      console.log(res);
      // make api reqest
      // set values into places state
      console.log(inputVal);
    }
  };

  return (
    <Autocomplete
      disablePortal
      id="places-search"
      options={places}
      //   onChange={}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="City"
          variant="standard"
          onChange={(e: any) => handleChange(e)}
        />
      )}
    />
  );
};

AutocompleteCity.defaultProps = {};

export default AutocompleteCity;
