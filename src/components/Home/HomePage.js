import React from 'react';
import Header from '../header/Header';
import Intro from './header/intro';

const HomePage = () => {
  return (
    <React.Fragment>
      <Header 
        intro={<Intro />} 
      />
    </React.Fragment>
  );
}

export default HomePage;