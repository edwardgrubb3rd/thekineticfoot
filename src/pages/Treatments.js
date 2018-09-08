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
          <div className="treatments">
            <Hero hero={treatments} />
            <div className="section treatment-grid">

            </div>
          </div>
        )}
      </DataConsumer>
    );
  }
};
