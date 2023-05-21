import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import Rsvp from './components/Rsvp';
import ParkingInfo from './components/ParkingInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/rsvp" Component={Rsvp} />
        <Route path="/parking" Component={ParkingInfo} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
