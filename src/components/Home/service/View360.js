import React from 'react';
import dot from '../../../image/dot.svg';
import laptop from '../../../image/360-laptop.png';
import chair from '../../../image/chair.png';
import badge360 from '../../../image/360.png';
import modal from '../../../image/modal.png';
import eye from '../../../image/eye.png';
import './View360.scss';

const View360 = () => {
  return (
    <article className="service view360" role="article">
      <div className="serviceImageContainer serviceImageContainer_fixed">
        <img src={badge360} alt="360 badge" className="serviceImageContainer__360"/>
        <img src={laptop} alt="Laptop" className="image serviceImageContainer__laptop"/>
        <img src={eye} alt="" className="serviceImageContainer__eye"/>
      </div>
      <img src="" alt="" className="view360__image"/>
      <div className="service__content service__content_align_center service__content_width_ service__content_move_up">
        <h3 className="service__title">360 view</h3>
        <p className="paragraph service__paragraph paragraph_color_grey">
          Once your customers have a fun experience using 360 technology
        </p>
        <p className="paragraph service__paragraph paragraph_size_large">
          <strong>A new shopping</strong> experience for your customers
        </p>
        <p className="paragraph service__paragraph paragraph_color_grey paragraph_line_high">
          Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box
        </p>
        <ul className="list stepList">
          <li className="step stepList__step">
            <img src={dot} alt="Step icon" className="step__icon"/>
            <span className="step__explanation">
              Adjust the colors to suit your type of work
            </span>
          </li>
          <li className="step stepList__step">
            <img src={dot} alt="Step icon" className="step__icon"/>
            <span className="step__explanation">
              Edit photos and upload photos that reflect you
            </span>
          </li>
          <li className="step stepList__step">
            <img src={dot} alt="Step icon" className="step__icon"/>
            <span className="step__explanation">
              Add you logo and your ways of communication
            </span>
          </li>
        </ul>
        <button className="button service__button button_color_white button_back_blue button_shape_oval button_size_large buttn_color_white buttn_decoration_underline">Get Started</button>
        <button className="button button_color_white button_back_green button_shape_oval button_size_large  buttn_decoration_underline">Live Demo</button>
      </div>
      <div className="chair">
        <img className="image chair__image" src={chair} alt="Chair"/>
        <img className="chair__modal" src={modal} alt="Modal"/>
        <div className="chair__content">
          <h4 className="chair__title">Modern Chair</h4>
          <p className="paragraph paragraph_color_grey paragraph_line_high">
            Chair is a piece of furniture with raised surface supported by legs, commonly supported most often by four legs ..
          </p>
        </div>
        <img className="chair__eye" src={eye} alt=""/>
      </div>
    </article>
  );
}

export default View360;