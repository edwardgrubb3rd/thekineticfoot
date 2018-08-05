import React from 'react';

const About = (props) => (
  <div className="about section">
    <span className="title">{props.title}</span>

    <div className="about-grid">
      {
        props.sections ?
        (
          props.sections.map(({image, title, description}) => (
            <div className="about-item" key={title}>
              <img className="about-item-img" src={image} alt="" />
              <span className="about-item-subtitle">{title}</span>
              <p className="about-item-desc">{description}</p>
            </div>
          ))
        )
        :
        null
      }
    </div>
  </div>
)

export default About;
