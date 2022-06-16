import './App.css';

import React from 'react';
import Button from '@mui/material/Button';

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
  </div>
);

export default App;
