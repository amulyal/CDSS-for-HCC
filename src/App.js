import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SurvivalPrediction from './components/SurvivalPrediction';
import Analyser from './components/Analyser';
import Metroticket from './components/Metroticket';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="predictor" element={<SurvivalPrediction />} />
        <Route path="analyser" element={<Analyser />} />
        <Route path="metroticket" element={<Metroticket />} />
      </Routes>
    </>
  );
}

export default App;
