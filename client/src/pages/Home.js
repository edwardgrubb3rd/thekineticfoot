import React, { Component, Fragment } from 'react';

// Components
import Hero from '../components/global/Hero';
import About from '../components/home/About';
import Contact from '../components/home/Contact';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <About />
        <Contact />
      </Fragment>
    )
  }
}
