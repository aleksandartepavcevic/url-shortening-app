import React from 'react';
import AboutSection from './components/AboutSection';
import BoostYourLink from './components/BoostYourLink';
import Footer from './components/Footer';
import LandingSection from './components/LandingSection';

const App = () => {
  return (
    <div>
      <LandingSection />

      <AboutSection />

      <BoostYourLink />

      <Footer />
    </div>
  );
};

export default App;
