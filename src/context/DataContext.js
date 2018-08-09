import React, { Component } from 'react';
// import axios from 'axios';

export const DataContext = React.createContext({});

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

    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 250);
  }

  render() {
    return (
      <DataContext.Provider value={{data: this.state}}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}
