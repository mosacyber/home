import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import SavePage from './SavePage';
import './index.css';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/save" element={<SavePage />} />
      </Routes>
    </div>
  );
}

export default App;
