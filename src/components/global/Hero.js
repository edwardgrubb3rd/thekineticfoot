import React from 'react';
import Data from '../../data/Hero.json';

const Hero = (props) => (
  <div className="hero" style={{backgroundImage: `url(require(../../assets/img/${Data.img}))`}}>
    <div className="hero-overlay"></div>

     <div className="hero-content">
      <h1 className="title">{Data.title}</h1>
      <span className="subtitle">
        {Data.content}
      </span>
      {
        Data.link ?
        <a href={Data.link} className="cta-button" target="_blank">{Data.button}</a>
        :
        null
      }
    </div>

  </div>
);

export default Hero;
