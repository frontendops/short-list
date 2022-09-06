import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import apikey from '../../apikey';
import { SuggestionRes } from '../../globalInterfaces';

interface Props {
  // eslint-disable-next-line no-unused-vars
  onSelect: (place: object) => void;
}

interface AutocompleteOption {
  text: string;
  label: string;
  magicKey: string;
  isCollection: boolean;
}

const AutocompleteCity: React.FC<Props> = ({ onSelect }) => {
  const [places, setPlaces] = useState<AutocompleteOption[]>([]);

  const handleChange = debounce(
    async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const inputVal = e.target.value;
      if (inputVal.length >= 4) {
        const url =
          'https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?';
        const res = await fetch(
          `${url}text=${inputVal}&category=Populated Place&f=json&token=${apikey}`,
          {
            //   mode: 'no-cors',
          }
        );
        const json: SuggestionRes = await res.json();
        console.log(json);
        // set values into places state (text, magickey) if results
        if (json.suggestions.length) {
          setPlaces(
            json.suggestions.map((suggestion) => ({
              ...suggestion,
              label: suggestion.text,
            }))
          );
        } else {
          setPlaces([]);
        }

        // https://developers.arcgis.com/rest/geocode/api-reference/geocoding-suggest.htm
        // // on form submit make request to get suggestion address and latlong before routing
        // When the user selects a suggestion, the text and magicKey values for that suggestion can
        //  be passed with a findAddressCandidates request as the values for the SingleLine and magicKey
        //  input parameters, respectively:

        //     https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?SingleLine="<text1>"&magicKey="<magicKey1>"&f=json
      } else {
        setPlaces([]);
      }
    },
    1000
  );
  // @ts-ignore
  const handleSelection = (e: any, newValue: any) => {
    onSelect(newValue);
  };

  return (
    <Autocomplete
      disablePortal
      id="places-search"
      options={places}
      onChange={handleSelection}
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
