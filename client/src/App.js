import React, { Component, Fragment } from 'react';
import { DataConsumer } from './context/DataContext';
// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home';

// Components
import Nav from './components/global/Nav';
import Footer from './components/global/Footer';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <DataConsumer>
            {({data: {links, contact_number, logo}}) => (
              <Nav links={links} contact={contact_number} logo={logo} />
            )}
          </DataConsumer>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="*" component={Home} />
          </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
};
