import React from 'react';
import Header from '../header/Header';
import Intro from './header/intro';
import HeaderImage from './header/HeaderImage';
import About from './about/About';

const HomePage = () => {
  return (
    <React.Fragment>
      <Header 
        intro={<Intro />} 
        headerImage={<HeaderImage />}
      />
      <About />
    </React.Fragment>
  );
}

export default HomePage;