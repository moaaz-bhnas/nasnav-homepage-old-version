import React from 'react';
import NavBox from './NavBox';
import './ServiceSection.scss';
import Styles from './Styles';

const ServiceSection = () => {
  return (
    <section className="ServiceSection mainContent__ServiceSection" role="region" aria-labelledby="serviceSection__title">
      <div className="container">
        <h2 className="serviceSection__title" id="serviceSection__title">Services</h2>
        <ul className="list serviceList">
          <li className="serviceList__item">
            <NavBox />
          </li>
          <li className="serviceList__item">
            <Styles />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ServiceSection;