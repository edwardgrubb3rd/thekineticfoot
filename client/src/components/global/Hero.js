import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const Hero = (props) => (
  <div className="hero" style={{backgroundImage: `url(${props.img})`}}>

     <div className="hero-content">
      <h1 className="title">{props.title}</h1>
      <span className="subtitle">
        {props.content}
      </span>
      {
        props.link ?
        <Link to={props.link} className="cta-button" target="_blank">{props.button}</Link>
        :
        null
      }
    </div>

  </div>
);

export default withRouter(Hero);
