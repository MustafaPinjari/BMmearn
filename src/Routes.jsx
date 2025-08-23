import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;