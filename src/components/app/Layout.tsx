import { Button } from '@mui/material';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="app-header">
        {/* Use react router to create pages */}
        <nav className="app-nav">
          <div className="app-contols">
            <Button color="primary" onClick={() => navigate('new')}>
              Add to trip
            </Button>
          </div>
          <div className="authorization-controls">
            <Button variant="contained" color="primary">
              Log In
            </Button>
            <Button variant="contained" color="secondary">
              Sign Up
            </Button>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
