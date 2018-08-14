import React, { Component } from 'react';
import api from '../config/api';

export const DataContext = React.createContext({});

// This is the consumer of the values (state)
export const DataConsumer = DataContext.Consumer;

export class DataProvider extends Component {
  state = {
    loading: false
  }

  getContactData = () => {
    api.getData('/api/pages/contact').then(({data}) => {
      this.setState({
        contact: data
      });
    });
  }

  getHeroData = () => {
    api.getData('/api/pages/hero').then(({data}) => {
      this.setState({
        hero: data
      });
    });
  }

  getAboutData = () => {
    api.getData('/api/pages/about').then(({data}) => {
      this.setState({
        about: data
      });
    });
  }

  getFooterData = () => {
    api.getData('/api/pages/footer').then(({data}) => {
      this.setState({
        footer: data
      });
    });
  }

  getNavData = () => {
    api.getData('/api/pages/nav').then(({data}) => {
      this.setState({
        nav: data
      });
    });
  }

  render() {
    return (
      <DataContext.Provider value={{
        data: this.state,
        getContact: this.getContactData,
        getHero: this.getHeroData,
        getAbout: this.getAboutData,
        getFooter: this.getFooterData,
        getNav: this.getNavData
      }}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}
