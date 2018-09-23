import React, { Component } from 'react';
import api from '../config/api';

export const DataContext = React.createContext({});

// This is the consumer of the values (state)
export const DataConsumer = DataContext.Consumer;

export class DataProvider extends Component {
  state = {
    loading: false
  }

  getPageData = (page) => {

    this.setLoading(true);

    let url = '/api/pages/' + page;

    api.getData(url).then(({data}) => {
      this.setState({
        [page]: data
      });

      this.setLoading(false);
    });
  }

  setLoading = (loading) => {
    this.setState({loading})
  }

  render() {
    return (
      <DataContext.Provider value={{
        data: this.state,
        getPageData: this.getPageData
      }}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}
