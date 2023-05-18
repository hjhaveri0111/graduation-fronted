import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import Rsvp from './components/Rsvp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/rsvp" Component={Rsvp} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
