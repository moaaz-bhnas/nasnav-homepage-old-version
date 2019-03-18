import React from 'react';
import Header from '../header/Header';
import Intro from './header/intro';
import HeaderImage from './header/HeaderImage';

const HomePage = () => {
  return (
    <React.Fragment>
      <Header 
        intro={<Intro />} 
        headerImage={<HeaderImage />}
      />
    </React.Fragment>
  );
}

export default HomePage;