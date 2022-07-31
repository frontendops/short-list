import { Typography } from '@mui/material';
import React from 'react';
import { CardData, MarkerData, LocationData } from '../../../globalInterfaces';
import CardList from '../../base/CardList';
// import CardList from '../../base/CardList';
// import ItineraryForm from '../../base/ItineraryForm';
import ItineraryLocationDisplay from '../../base/ItineraryLocationsDisplay';
import ItineraryMap from '../../base/ItineraryMap';
import './DisplayPageStyle.css';

const cardData: CardData[] = [
  {
    id: '1',
    title: 'Pantheon',
    description: 'Visit the pantheon with friends.',
    category: 'travel',
    daysUntil: 0,
    imgUrl:
      'https://images.unsplash.com/photo-1605256526285-c0980b8c7805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    timeUntil: 2,
  },
  {
    id: '2',
    title: 'Chez Nicos',
    description: 'Have to try a crepe a la maison!',
    category: 'dining',
    daysUntil: 0,
    imgUrl:
      'https://images.unsplash.com/photo-1584278860047-22db9ff82bed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    timeUntil: 5,
  },
  {
    id: '3',
    title: 'Atelier des lumiers',
    description: 'Van Gogh brought to life',
    category: 'travel',
    daysUntil: 0,
    imgUrl:
      'https://images.unsplash.com/photo-1622572402015-2f8cde493c83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80',
    timeUntil: 7,
  },
  {
    id: '4',
    title: 'Cafe Renard',
    description: 'Sprited away plays in the background',
    category: 'dining',
    daysUntil: 0,
    imgUrl:
      'https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    timeUntil: 9,
  },
  {
    id: '5',
    title: 'Palace Versailles',
    description: `C'est pas versailles ici`,
    category: 'travel',
    daysUntil: 0,
    imgUrl:
      'https://images.unsplash.com/photo-1591828353335-197466da2a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    timeUntil: 11,
  },
];

const locations: LocationData[] = [
  { name: 'Dublin, IE', visited: true },
  { name: 'Paris, FR', visited: false },
  { name: 'Frankfurt, DE', visited: false },
];

const DisplayPage: React.FC = () => {
  const saveLocation = (marker: MarkerData) => {
    console.log(marker);
  };
  return (
    <div className="display-page-container">
      {/* <CardList data={cardData} /> */}
      <ItineraryLocationDisplay locations={locations} />
      <ItineraryMap onLocationAdd={saveLocation} />
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
};

export default DisplayPage;
