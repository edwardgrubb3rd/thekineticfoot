import React, { Component } from 'react';
import axios from 'axios';

export const DataContext = React.createContext({
  hero_title: '',
  hero_subtitle: '',
  button_text: '',
  button_link: '',
  background_image: '',
  about_title: '',
  about_sections: [],
  about_button_text: '',
  about_button_link: '',
  links: [],
  contact_number: '',
  logo: null,
  loading: false
});

// This is the consumer of the values (state)
export const DataConsumer = DataContext.Consumer;

export class DataProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    }

  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({
      loading: true
    });

    axios.get('/wp-json/acf/v3/pages/5/')
      .then(({data: {acf: {
        hero,
        about_title,
        about_sections,
        about_button_text,
        about_button_link,
        contact_title,
        contact_form
      }}}) => {
      this.setState({
        hero_title: hero.hero_title,
        hero_subtitle: hero.hero_subtitle,
        button_text: hero.button_text,
        button_link: hero.button_link,
        background_image: hero.background_image,
        about_title,
        about_sections,
        about_button_text,
        about_button_link,
        contact_title,
        contact_form
      });
    });

  axios.get('/wp-json/acf/v3/pages/40')
    .then(({data: {acf: {links, contact_number, logo}}}) => {
      this.setState({
        links,
        contact_number,
        logo
      });
    });

  axios.get('/wp-json/acf/v3/pages/50')
    .then(({data: {acf: {social_media, contact_info, hours_of_operation, emergency_contact}}}) => {
      this.setState({
        social_media,
        contact_info,
        hours_of_operation,
        emergency_contact
      });
    });

    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 1500);
  }

  render() {
    return (
      <DataContext.Provider value={{data: this.state}}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}