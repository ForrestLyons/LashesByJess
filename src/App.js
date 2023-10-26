import React from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';  // Moved HomePage here
import ServicesPage from './components/Services';
import EducationPage from './components/Education';
import ContactPage from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navigation />
      <HomePage />
      <ServicesPage />
      <EducationPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
