import React from 'react';
import Header from '../header/Header';
import Intro from './header/intro';
import HeaderImage from './header/HeaderImage';
import About from './about/About';
import ServiceSection from './service/ServiceSection';
import CountrySection from './countries/CountrySection';
import Footer from '../footer/Footer';

const HomePage = () => {
  return (
    <React.Fragment>
      <Header 
        intro={<Intro />} 
        headerImage={<HeaderImage />}
      />
      <main className="mainContent" role="main">
        <About />
        <ServiceSection />
        <CountrySection />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;