import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Data from '../../data/About.json';

const About = (props) => (
  <div className="about section">
    <span className="title">{Data.title}</span>

    <div className="about-grid">
      {
        Data.sections ?
        (
          Data.sections.map(({image, title, description}) => (
            <div className="about-item" key={title}>
              <img className="about-item-img" src={require(`${image}`)} alt="kinetic foot ankle team about us" />
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
      Data.link ?
      <Link to={Data.link} className="btn-secondary">{Data.button}</Link>
      :
      null
    }

  </div>
)

export default withRouter(About);
