import React, { Component } from 'react';
import { DataConsumer } from '../context/DataContext';

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
              {
                treatments.conditions ?
                <div className="section treatment-grid">
                  {
                    treatments.conditions.map(({name, description, link}) => (
                      <div className="treatment-card" key={name}>
                        <span className="title-sm treatment-card-title">{name}</span>
                        <p className="treatment-card-description">{description}</p>
                        <a href={link} target="_blank" className="treatment-card-link">Learn More</a>
                      </div>
                    ))
                  }
                </div>
                :
                null
              }
            </div>
            :
            null
          )
        )}
      </DataConsumer>
    );
  }
};
