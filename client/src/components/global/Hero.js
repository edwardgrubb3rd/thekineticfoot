import React from 'react';

const Hero = (props) => (
  <div className="hero" style={{backgroundImage: `url(${props.img})`}}>
    <div className="hero-overlay"></div>

     <div className="hero-content">
      <h1 className="title">{props.title}</h1>
      <span className="subtitle">
        {props.content}
      </span>
      {
        props.link ?
        <a href={props.link} className="cta-button" target="_blank">{props.button}</a>
        :
        null
      }
    </div>

  </div>
);

export default Hero;
