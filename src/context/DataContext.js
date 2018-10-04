import React, { Component } from 'react';
import { db } from '../config/firebase';

export const DataContext = React.createContext({});

// This is the consumer of the values (state)
export const DataConsumer = DataContext.Consumer;

export class DataProvider extends Component {
  state = {

  }

  componentDidMount() {
    this.loading(true);
  }

  getPageData = (page) => {
    db.collection('pages').doc(page).get().then(doc => {
      this.setState({
        [page]: doc.data()
      });
      setTimeout(() => {
        this.loading(false);
      }, 1500);
    });
  }

  loading = (bool) => {
    this.setState({
      loading: bool
    });
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
