import React from 'react';

const Hero = (props) => (
  <div className="hero" style={{backgroundImage: `url(${props.img})`}}>

     <div className="hero-content">
      <h1 className="title">{props.title}</h1>
      <span className="subtitle">
        {props.content}
      </span>
      <a href={props.link} className="cta-button" target="_blank">{props.button}</a>
    </div>

  </div>
);

export default Hero;
