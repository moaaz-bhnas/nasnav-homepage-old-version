import React from 'react';
import kuwait from '../../../image/kuwait.png';
import egypt from '../../../image/egypt.png';
import poland from '../../../image/poland.png';
import nigeria from '../../../image/nigeria.png';
import london from '../../../image/london.png';
import map from '../../../image/map.png';
import './Map.scss';

const Map = () => {
  const countryFlags = [
    {
      country: 'kuwait',
      flag: 'kuwait Flag',
      image: kuwait
    },
    {
      country: 'egypt',
      flag: 'egypt Flag',
      image: egypt
    },
    {
      country: 'poland',
      flag: 'poland Flag',
      image: poland
    },
    {
      country: 'nigeria',
      flag: 'nigeria Flag',
      image: nigeria
    },
    {
      country: 'london',
      flag: 'london Flag',
      image: london
    }
  ];

  return (
    <div className="map countries__map">
      <img src={map} alt="Map" className="image mapImage" />
      <ul className="list flagList">
        {
          countryFlags.map((countryFlag, index) => {
            const {country, flag, image} = countryFlag;
            return (
              <li className={`flagList__item flagList__item_country_${country}`} key={index}>
                <img src={image} alt={flag} className="flagList__flag" />
                <span className="flagList__pointer" />
              </li>
            );
          })
        }
      </ul>
      <div className="modal map__modal">
        <p className="paragraph paragraph_weight_bold paragraph_size_med modal__paragraph">
          Join our family now wherever you are
        </p>
        <p className="paragraph paragraph_color_grey modal__paragraph">
          <a href="#" className="modal__joinLink">
            You can join us easily and increase your profits
          </a>
        </p>
        <button className="button button_color_white button_back_blue button_shape_oval button_size_large">Get Started</button>
      </div>
    </div>
  );
}

export default Map;