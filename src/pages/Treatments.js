import React, { Component, Fragment } from 'react';

// Components
import Hero from '../components/global/Hero';

export default class Treatments extends Component {
  state = {

  }

  componentDidMount() {
    if(this.props.get) {
      this.props.get('treatments');
    }
  }

  render() {
    return (
      <div className="treatments">
        {
          this.props.data ?
          <Fragment>
            <Hero
              heroCard={this.props.data.heroCard}
              title={this.props.data.title}
              content={this.props.data.content}
            />
            <div className="section treatment-grid">
              {
                this.props.data.conditions.map(({name, description, link}) => (
                  <a className="treatment-card" key={name} href={link} target="_blank">
                    <span className="title-sm treatment-card-title">{name}</span>
                    {
                      description ?
                      <p className="treatment-card-description">{description}</p>
                      :
                      null
                    }
                    <span className="treatment-card-link">Learn More</span>
                  </a>
                ))
              }
            </div>
          </Fragment>
          :
          <span>...loading</span>
        }
      </div>
    );
  }
};
