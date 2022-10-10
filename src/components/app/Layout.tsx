import { Button } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => (
  //   const navigate = useNavigate();
  <>
    <header className="app-header">
      {/* Use react router to create pages */}
      <nav className="app-nav">
        <div className="app-user">
          <h2 className="app-user-heading">Welcome, Alex</h2>
          <span>
            <i className="fa fa-map-marker fa-xs" aria-hidden="true" />
            <h2 className="app-user-location">Greenville, SC</h2>
          </span>
        </div>
        {/* <div className="app-contols">
            <Button
              color="primary"
              variant="text"
              onClick={() => navigate('new')}
            >
              Add to trip
            </Button>
          </div> */}
        <div className="authorization-controls">
          <Button variant="text" color="primary">
            Log In
          </Button>
          <Button variant="text" color="secondary">
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
export default Layout;
