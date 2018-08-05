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
  about_button_link: ''
});

// This is the consumer of the values (state)
export const DataConsumer = DataContext.Consumer;

export class DataProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {}

  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get('/wp-json/acf/v3/pages/5/')
      .then(({data: {acf: {hero, about_title, about_sections, about_button_text, about_button_link}}}) => {
        this.setState({
          hero_title: hero.hero_title,
          hero_subtitle: hero.hero_subtitle,
          button_text: hero.button_text,
          button_link: hero.button_link,
          background_image: hero.background_image,
          about_title: about_title,
          about_sections: about_sections,
          about_button_text: about_button_text,
          about_button_link: about_button_link
        });
      });
    console.log(this.state);
  }

  render() {
    return (
      <DataContext.Provider value={{data: this.state}}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}
