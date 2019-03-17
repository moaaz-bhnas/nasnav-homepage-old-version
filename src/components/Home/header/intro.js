import React from 'react';
import play from '../../../image/play.svg';

const Intro = () => {
  return (
    <div className="intro header__intro">
      <p className="paragraph paragraph_size_xLarge paragraph_color_white paragraph_weight_light intro__paragraph">
        <strong>Nasorg</strong> is the next generation of big businesses data.
      </p>
      <p className="paragraph paragraph_line_high paragraph_color_white intro__paragraph">
        Our services are not to be reckoned with upload Products can sliping in your home and see theyou an edge over the online competitors.of big businesses data
      </p>
      <button className="button button_color_blue button_size_large">Get Started</button>
      <button className="button button_color_blue button_size_large">
        <img src={play} alt="Watch video" className="image"/>
      </button>
    </div>  
  );
}

export default Intro;