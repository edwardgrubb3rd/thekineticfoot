import React, { Component, Fragment } from 'react';
import { DataConsumer } from '../context/DataContext';

// Components
import Hero from '../components/global/Hero';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <DataConsumer>
        {({data:
          hero,
          about_title,
          about_sections,
          about_button_link,
          about_button_text}) => (
          <Fragment>
            <Hero title={hero.hero_title} img={hero.background_image} content={hero.hero_subtitle} button={hero.button_text} link={hero.button_link}/>
          </Fragment>
        )}
      </DataConsumer>
    )
  }
}
