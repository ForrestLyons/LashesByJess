import React from 'react';
import HomePage from './components/HomePage';  // Moved HomePage here
import ServicesPage from './components/Services';
import EducationPage from './components/Education';
import ContactPage from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <HomePage />
      <ServicesPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
