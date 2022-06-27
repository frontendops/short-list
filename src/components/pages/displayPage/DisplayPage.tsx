import { Typography } from '@mui/material';
import React from 'react';
import CardList from '../../base/CardList';
// import CardList from '../../base/CardList';
// import ItineraryForm from '../../base/ItineraryForm';
import ItineraryLocationDisplay from '../../base/ItineraryLocationsDisplay';
import ItineraryMap from '../../base/ItineraryMap';
import './DisplayPageStyle.css';

// create shared interface
interface CardData {
  id: string;
  date?: Date; // completion date,
  title: string;
  description?: string;
  category?: string;
  daysUntil?: number;
  timeUntil?: number; // this could be in miliseconds then converted to hours/ minutes
}

const cardData: CardData[] = [
  {
    id: '1',
    title: 'Pantheon',
    description: 'Visit the pantheon with friends.',
    category: 'travel',
    daysUntil: 0,
    timeUntil: 2,
  },
  {
    id: '2',
    title: 'Chez Nicos',
    description: 'Have to try a crepe a la maison!',
    category: 'dining',
    daysUntil: 0,
    timeUntil: 5,
  },
];

const locations = [
  { name: 'Dublin, IE', visited: true },
  { name: 'Paris, FR', visited: false },
  { name: 'Frankfurt, DE', visited: false },
];

const DisplayPage: React.FC = () => (
  <div className="display-page-container">
    {/* <CardList data={cardData} /> */}
    <ItineraryLocationDisplay locations={locations} />
    <ItineraryMap />
    <Typography variant="h4" component="h3" align="center" margin="2rem">
      Activities
    </Typography>
    <CardList data={cardData} />
    {/* <ItineraryForm
      onFormSubmit={() => {
        console.log('submit the form');
      }}
    /> */}
  </div>
);

export default DisplayPage;
