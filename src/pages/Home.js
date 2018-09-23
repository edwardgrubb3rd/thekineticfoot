import React, { Component } from 'react';
import { DataConsumer } from '../context/DataContext';

// Components
import Hero from '../components/global/Hero';
import About from '../components/home/About';
import Philosophy from '../components/home/Philosophy';
import Contact from '../components/home/Contact';

export default class Home extends Component {
  render() {
    return (
      <DataConsumer>
        {({getPageData, data: {contact, hero, about, philosophy}}) => (
          <div className="homepage">
            <Hero get={getPageData} hero={hero} />
            <About get={getPageData} about={about} />
            <Philosophy get={getPageData} philosophy={philosophy} />
            <Contact get={getPageData} contact={contact} />
          </div>
        )}
      </DataConsumer>
    )
  }
}
