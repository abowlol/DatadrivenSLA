import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import AdminView from './views/AdminView';
import ErrandsView from './views/ErrandsView';
import Gold from './views/Gold';
import Platinum from './views/Platinum';
import Silver from './views/Silver';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/errands">Errands</Link></li>
            <li><Link to="/gold">Gold</Link></li>
            <li><Link to="/platinum">Platinum</Link></li>
            <li><Link to="/silver">Silver</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/errands" element={<ErrandsView />} />
          <Route path="/gold" element={<Gold />} />
          <Route path="/platinum" element={<Platinum />} />
          <Route path="/silver" element={<Silver />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;