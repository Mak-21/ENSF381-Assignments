// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProductPage from './components/Productpage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        // ... other routes
      </Routes>
    </Router>
  );
}

export default App;
