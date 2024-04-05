import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProductPage from './components/Productpage';
import LoginPage from './components/LoginPage'; // Import LoginPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/LoginPage" element={<LoginPage />} /> // Add Route for LoginPage
        
      </Routes>
    </Router>
  );
}

export default App;
