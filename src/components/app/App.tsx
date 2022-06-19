import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayPage from '../pages/displayPage/DisplayPage';
import Layout from './Layout';

const App: React.FC = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DisplayPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
