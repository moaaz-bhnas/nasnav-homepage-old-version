import React from 'react';
import phone from '../../../image/home-header-phone.png';
import tablet from '../../../image/home-header-tablet.png';

const HeaderImage = () => {
  return (
    <div className="headerImageContainer headerImageContainer_width_third">
      <img src={tablet} alt="Tablet"/>
      <img src={phone} alt="Phone"/>
    </div>
  );
}

export default HeaderImage;