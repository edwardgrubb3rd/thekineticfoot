import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Nav extends Component {
  state = {
    class: 'navbar-menu',
    contactLink: '',
    bar: ''
  }

  componentDidMount() {
    this.props.get();
  }

  convertNumber() {
    if(this.props.nav.contact) {
      if(this.props.nav.contact.includes('.')) {
        let contactLink = this.props.nav.contact.split('.').join('');
        return contactLink;
      }
      if(this.props.nav.contact.includes('-')) {
        let contactLink = this.props.nav.contact.split('-').join('');
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
      	{
          this.props.nav ?
          <div className="navbar-wrapper">
        		<div className="logo">
              {
                this.props.nav.logo ?
                <Link to='/' className="navbar-link"><img src={this.props.nav.logo} alt="the kinetic foot and ankle clinic logo"/></Link>
                :
                <Link to='/' className="navbar-link">Kinetic Foot & Ankle</Link>
              }
        		</div>
        		<div className={this.state.class}>
        			{
                this.props.nav.active ?
                (
                  this.props.nav.links.map(({title, link}) => (
                    <div className="navbar-item" key={title}>
                      <Link to={link} className="navbar-link">{title}</Link>
              			</div>
                  ))
                )
                :
                null
              }
        		</div>
            {
              this.props.nav.active ?
              <div className={`mobile-menu ${this.state.bar}`} onClick={this.handleClick}>
          			<div className="nav-list bar1"></div>
          			<div className="nav-list bar2"></div>
          			<div className="nav-list bar3"></div>
          		</div>
              :
              null
            }
        		<div className="navbar-contact">
        			<a href={`tel:${this.convertNumber()}`} className="navbar-link">{this.props.nav.contact}</a>
        		</div>
        	</div>
          :
          null
        }
      </div>
    )
  }
}

export default withRouter(Nav);
