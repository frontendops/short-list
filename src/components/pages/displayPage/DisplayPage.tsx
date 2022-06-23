import React from 'react';
// import CardList from '../../base/CardList';
import ItineraryForm from '../../base/ItineraryForm';
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

const DisplayPage: React.FC = () => (
  <div className="display-page-container">
    {/* <CardList data={cardData} /> */}
    <ItineraryForm
      onFormSubmit={() => {
        console.log('submit the form');
      }}
    />
  </div>
);

export default DisplayPage;
