import React, { Component, Fragment } from 'react';
import { DataConsumer } from '../context/DataContext';

// Components
import Hero from '../components/global/Hero';
import About from '../components/home/About';
import Contact from '../components/home/Contact';

export default class Home extends Component {
  render() {
    return (
      <DataConsumer>
        {({getContact, getHero, getAbout, data: {contact, hero, about}}) => (
          <Fragment>
            <Hero get={getHero} hero={hero} />
            <About get={getAbout} about={about} />
            <Contact get={getContact} contact={contact} />
          </Fragment>
        )}
      </DataConsumer>
    )
  }
}
