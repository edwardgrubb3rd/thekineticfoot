import React, { Component } from 'react';
import { DataConsumer } from '../context/DataContext';

// Components
import Hero from '../components/global/Hero';

export default class Team extends Component {
  componentDidMount() {
    this.props.get('team');
  }

  render() {
    return (
      <DataConsumer>
        {({data: {team}}) => (
          <div className="">
            <Hero hero={team} />
          </div>
        )}
      </DataConsumer>
    );
  }
};
