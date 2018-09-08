import React, { Component, Fragment } from 'react';
import { DataConsumer } from './context/DataContext';
// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Treatments from './pages/Treatments';

// Components
import Nav from './components/global/Nav';
import Footer from './components/global/Footer';
import Spinner from './components/global/Spinner';

export default class App extends Component {
  render() {
    return (
      <DataConsumer>
        {({getPageData, data: {
          loading,
          footer,
          nav
        }}) => (
          loading ?
          <Spinner />
          :
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Fragment>
              <Nav get={getPageData} nav={nav} />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/treatments" render={() => (
                  <Treatments get={getPageData} />
                )} />
                <Route exact path="*" component={Home} />
              </Switch>
              <Footer get={getPageData} footer={footer} />
            </Fragment>
          </BrowserRouter>
        )}
      </DataConsumer>
    );
  }
};
