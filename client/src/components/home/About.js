import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const About = (props) => (
  <div className="about section">
    <span className="title">{props.title}</span>

    <div className="about-grid">
      {
        props.sections ?
        (
          props.sections.map(({image, title, description}) => (
            <div className="about-item" key={title}>
              <img className="about-item-img" src={image} alt="kinetic foot ankle team about us" />
              <span className="about-item-subtitle">{title}</span>
              <p className="about-item-desc">{description}</p>
            </div>
          ))
        )
        :
        null
      }
    </div>

    {
      props.link ?
      <Link to={props.link} className="btn-secondary">{props.button}</Link>
      :
      null
    }

  </div>
)

export default withRouter(About);
