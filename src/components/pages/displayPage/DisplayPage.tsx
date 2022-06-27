import React from 'react';
// import CardList from '../../base/CardList';
// import ItineraryForm from '../../base/ItineraryForm';
import ItineraryLocationDisplay from '../../base/ItineraryLocationsDisplay';
import ItineraryMap from '../../base/ItineraryMap';
import './DisplayPageStyle.css';

// const cardData = [
//   {
//     id: '1',
//     title: 'Pay rent',
//     description: 'Gotta keep a roof over my head',
//     category: 'Finance',
//     daysUntil: 15,
//   },
//   {
//     id: '2',
//     title: 'Study french',
//     description: 'Achete moi une baguette elle est bien cuite',
//     category: 'Study',
//     daysUntil: 1,
//   },
// ];

// // create shared interface
// interface CardData {
//   id: string;
//   date?: Date; // completion date,
//   title: string;
//   description?: string;
//   category?: string;
//   daysUntil?: number;
// }

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
    {/* <ItineraryForm
      onFormSubmit={() => {
        console.log('submit the form');
      }}
    /> */}
  </div>
);

export default DisplayPage;
