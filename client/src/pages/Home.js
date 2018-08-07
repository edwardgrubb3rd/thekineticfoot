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
        {({data: {
          hero_title,
          background_image,
          hero_subtitle,
          button_text,
          button_link,
          about_title,
          about_sections,
          about_button_link,
          about_button_text,
          contact_title,
          contact_form
        }}) => (
          <Fragment>
            <Hero
              title={hero_title}
              img={background_image}
              content={hero_subtitle}
              button={button_text}
              link={button_link}/>
            <About
              title={about_title}
              sections={about_sections}
              button={about_button_text}
              link={about_button_link}
               />
               <Contact
                 title={contact_title}
                 form={contact_form} />
          </Fragment>
        )}
      </DataConsumer>
    )
  }
}
