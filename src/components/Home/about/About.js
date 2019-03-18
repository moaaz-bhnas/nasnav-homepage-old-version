import React from 'react';
import logo from '../../../image/logo-blue.png';

const About = () => {
  return (
    <section className="aboutSection" role="region" aria-labelledby="aboutSection__title">
      <h2 className="aboutSection__title" id="aboutSection__title">About</h2>
      <img src={logo} alt="NasNav Logo"/>
      <p>
        We use proven technologies, combining them with new concepts and techniques wherever possible. In this way we rapidly develop tailor-made solutions which incubates location-based and retailers services technologies.
      </p>
      <button className="button button_size_large button_color_white">Get Started</button>
    </section>
  );
}

export default About;