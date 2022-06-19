import { Button } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => (
  <>
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
      <Outlet />
    </main>
  </>
);

export default Layout;
