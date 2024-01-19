import React from 'react';
import './App.css';
import './global-styles.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';  // Moved HomePage here
import Navigation from './components/Navigation';
import ServicesPage from './components/Services';
import EducationPage from './components/Education';
import ContactPage from './components/Contact';
import BookNow from './components/BookNow';
// import Footer from './components/Footer';


const App = () => {
  return (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="/booknow" element={<BookNow />} />
      {/* Add more routes for other pages */}
    </Routes>
  </Router>
);
  }
export default App;
