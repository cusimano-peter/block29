import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/players" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
