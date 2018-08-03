import React, { Component, Fragment } from 'react';
// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home';

// Components
import Nav from './components/global/Nav';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
};
