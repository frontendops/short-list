import './App.css';
import 'leaflet-geosearch/dist/geosearch.css';

import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayPage from '../pages/displayPage/DisplayPage';
import Layout from './Layout';
import ItineraryCreationPage from '../pages/ItineraryCreationPage/ItineraryCreationPage';
import 'react-datepicker/dist/react-datepicker.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#498EF6',
      light: '#6EA8FD',
    },
    secondary: {
      main: '#6A7A92',
    },
  },
});

const App: React.FC = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DisplayPage />} />
            <Route path="new" element={<ItineraryCreationPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </div>
);

export default App;
