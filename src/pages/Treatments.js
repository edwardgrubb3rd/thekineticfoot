import React, { Component } from 'react';
import { DataConsumer } from '../context/DataContext';
import { NavLink } from 'react-router-dom';

// Components
import Hero from '../components/global/Hero';

export default class Treatments extends Component {
  componentDidMount() {
    this.props.get('treatments');
  }

  render() {
    return (
      <DataConsumer>
        {({data: {treatments}}) => (
          (
            treatments ?
            <div className="treatments">
              <Hero hero={treatments} />
              <div className="section treatment-grid">
                {
                  treatments.treatments.map(({name, description, linkName}) => (
                    <div className="treatment-card" key={name}>
                      <span className="title-sm treatment-card-title">{name}</span>
                      <p className="treatment-card-description">{description}</p>
                      <NavLink to={`/treatments/${linkName}`} className="treatment-card-link">Learn More</NavLink>
                    </div>
                  ))
                }
              </div>
            </div>
            :
            null
          )
        )}
      </DataConsumer>
    );
  }
};
