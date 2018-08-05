import React, { Component, Fragment } from 'react';
import { DataConsumer } from '../context/DataContext';

// Components
import Hero from '../components/global/Hero';
import About from '../components/home/About';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <DataConsumer>
          {({data: hero}) => (
            <Hero
              title={hero.hero_title}
              img={hero.background_image}
              content={hero.hero_subtitle}
              button={hero.button_text}
              link={hero.button_link}/>
          )}
        </DataConsumer>
        <DataConsumer>
          {({data:
            {about_title,
            about_sections,
            about_button_link,
            about_button_text}}) => (
            <About
              title={about_title}
              sections={about_sections}
              button={about_button_text}
              link={about_button_link}
               />
          )}
        </DataConsumer>
      </Fragment>
    )
  }
}
