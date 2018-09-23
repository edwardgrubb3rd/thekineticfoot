import React, { Component, Fragment } from 'react';
import { DataConsumer } from './context/DataContext';
// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import Team from './pages/Team';

// Components
import Nav from './components/global/Nav';
import Footer from './components/global/Footer';
import Spinner from './components/global/Spinner';

export default class App extends Component {
  render() {
    return (
      <DataConsumer>
        {({getPageData, data: {
          footer,
          nav
        }}) => (
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Fragment>
              <Nav get={getPageData} nav={nav} />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/conditions" render={() => (
                  <Treatments get={getPageData} />
                )} />
                <Route path="/team" component={Team} />
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
