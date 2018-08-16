import React, { Component, Fragment } from 'react';
import { DataConsumer } from './context/DataContext';
// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home';

// Components
import Nav from './components/global/Nav';
import Footer from './components/global/Footer';
import Spinner from './components/global/Spinner';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <DataConsumer>
          {({getFooter, getNav, data: {
            loading,
            footer,
            nav
          }}) => (
            loading ?
            <Spinner />
            :
            <Fragment>
              <Nav get={getNav} nav={nav} />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="*" component={Home} />
              </Switch>
              <Footer get={getFooter} footer={footer} />
            </Fragment>
          )}
        </DataConsumer>
      </BrowserRouter>
    );
  }
};