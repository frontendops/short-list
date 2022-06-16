import './App.css';

import React from 'react';
import Button from '@mui/material/Button';
import CardList from '../base/CardList';

const cardData = [
  {
    id: '1',
    title: 'Pay rent',
    description: 'Gotta keep a roof over my head',
    category: 'Finance',
    daysUntil: 15,
  },
  {
    id: '2',
    title: 'Study french',
    description: 'Achete moi une baguette elle est bien cuite',
    category: 'Study',
    daysUntil: 1,
  },
];

const App: React.FC = () => (
  <div className="App">
    <header className="app-header">
      {/* Use react router to create pages */}
      <nav className="app-nav">
        <Button variant="contained" color="primary">
          Log In
        </Button>
        <Button variant="contained" color="secondary">
          Sign Up
        </Button>
      </nav>
    </header>
    <main>
      <CardList data={cardData} />
    </main>
  </div>
);

export default App;
