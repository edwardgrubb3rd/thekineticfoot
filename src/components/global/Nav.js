import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Data from '../../data/Nav.json';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: 'navbar-menu',
      contactLink: '',
      bar: ''
    }
  }

  convertNumber() {
    if(Data.contact) {
      if(Data.contact.includes('.')) {
        let contactLink = Data.contact.split('.').join('');
        return contactLink;
      }
      if(Data.contact.includes('-')) {
        let contactLink = Data.contact.split('-').join('');
        return contactLink;
      }
    }
  }

  handleClick = () => {
    if(this.state.class === 'navbar-menu') {
      this.setState({
        class: 'navbar-menu mobile',
        bar: 'change'
      });
    }
    if(this.state.class === 'navbar-menu mobile') {
      this.setState({
        class: 'navbar-menu',
        bar: ''
      });
    }
  }

  render() {
    return (
      <div className="navbar">
      	<div className="navbar-wrapper">
      		<div className="logo">
            {
              Data.logo ?
              <Link to='/' className="navbar-link"><img src={Data.logo} alt="the kinetic foot and ankle clinic logo"/></Link>
              :
              <Link to='/' className="navbar-link">Kinetic Foot & Ankle</Link>
            }
      		</div>
      		<div className={this.state.class}>
      			{
              Data.links ?
              (
                Data.links.map(({title, link}) => (
                  <div className="navbar-item" key={title}>
                    <Link to={link} className="navbar-link">{title}</Link>
            			</div>
                ))
              )
              :
              null
            }
      		</div>
      		<div className={`mobile-menu ${this.state.bar}`} onClick={this.handleClick}>
      			<div className="nav-list bar1"></div>
      			<div className="nav-list bar2"></div>
      			<div className="nav-list bar3"></div>
      		</div>
      		<div className="navbar-contact">
      			<a href={`tel:${this.convertNumber()}`} className="navbar-link">{Data.contact}</a>
      		</div>
      	</div>
      </div>
    )
  }
}

export default withRouter(Nav);
