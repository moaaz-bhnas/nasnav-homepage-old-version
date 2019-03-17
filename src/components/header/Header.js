import React from 'react';
import Topbar from './Topbar';
import Laptop from './Laptop';
import curve from '../../image/curve-cropped.png';
import './Header.scss';

const Header = (props) => {
  // const 
  return (
    <header className="header" role="banner">
      <div className="container">
        <Topbar />
        {props.intro} {/* <Intro /> */}
        <Laptop />
      </div>
      <img className="header__curve" src={curve} alt="" aria-hidden="true" />
    </header>
  );
}

export default Header;