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
import Loading from './components/global/Loading';

export default class App extends Component {
  render() {
    return (
      <DataConsumer>
        {({getPageData, data: {
          loading,
          home,
          about,
          philosophy,
          contact
        }}) => (
          loading ?
          <Loading />
          :
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Fragment>

              <Nav />
              <Switch>
                <Route exact path="/" render={() => (
                  <Home get={getPageData} data={home} about={about} philosophy={philosophy} contact={contact} />
                )} />
                <Route path="/conditions" render={() => (
                  <Treatments  />
                )} />
                <Route path="/team" render={() => (
                  <Team />
                )} />
                <Route exact path="*" render={() => (
                  <Home />
                )} />
              </Switch>
              <Footer />
            </Fragment>
          </BrowserRouter>
        )}
      </DataConsumer>
    );
  }
};
