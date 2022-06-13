import './App.css';

import React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Use react router to create pages */}
        <Button>Log In</Button>
        <Button>Sign Up</Button>
      </header>
    </div>
  );
}

export default App;
