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
      <BrowserRouter>
        <DataConsumer>
          {({data: {
            loading,
            links,
            contact_number,
            logo,
            social_media,
            contact_info,
            hours_of_operation,
            emergency_contact
          }}) => (
            loading ?
            <Spinner />
            :
            <Fragment>
              <Nav
                links={links}
                contact={contact_number}
                logo={logo} />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="*" component={Home} />
              </Switch>
              <Footer
                social_media={social_media}
                contact_info={contact_info}
                hours_of_operation={hours_of_operation}
                emergency_contact={emergency_contact} />
            </Fragment>
          )}
        </DataConsumer>
      </BrowserRouter>
    );
  }
};
