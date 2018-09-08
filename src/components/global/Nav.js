import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import data from '../../data/Nav.json';

import NavbarItem from './NavbarItem';

class Nav extends Component {
  state = {
    class: 'navbar-menu',
    contactLink: '',
    bar: '',
    data: null,
    lastScrollY: 0,
    activeClass: ''
  }

  componentDidMount() {
    if(window.location.href.includes('github')) {
      this.setState({data});
      window.addEventListener("resize", this.updateDimensions);
      window.addEventListener("scroll", this.handleScroll);
    }
    else {
      this.props.get('nav');
      window.addEventListener("resize", this.updateDimensions);
      window.addEventListener("scroll", this.handleScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("scroll", this.handleScroll);
  }

  convertNumber(num) {
    if(num) {
      if(num.includes('.')) {
        let contactLink = num.split('.').join('');
        return contactLink;
      }
      if(num.includes('-')) {
        let contactLink = num.split('-').join('');
        return contactLink;
      }
    }
  }

  updateDimensions = () => {
    if(window.innerWidth > 600 && this.state.class === 'navbar-menu mobile') {
      this.setState({
        class: 'navbar-menu',
        bar: ''
      });
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

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if(window.innerWidth <= 900) {
      if(currentScrollY < lastScrollY) {
        this.setState({
          activeClass: ' scrollUp',
        });
      }
      if(currentScrollY > lastScrollY) {
        this.setState({
          activeClass: ' scrollDown',
        });
      }
      if(currentScrollY <= 102 || lastScrollY <= 102) {
        this.setState({
          activeClass: '',
        });
      }
      this.setState({
        lastScrollY: currentScrollY
      });
    }
    if(window.innerWidth > 900) {
      this.setState({
        activeClass: ''
      });
    }
  }

  render() {
    return (
      <div className={"navbar" + this.state.activeClass}>
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
                this.props.nav.links.map(({active, title, sublinks, link}, index) => (
                  active ?
                  <NavbarItem
                    key={title}
                    title={title}
                    link={link}
                    sublinks={sublinks}
                  />
                  :
                  null
                ))
              }
        		</div>
            <div className={`mobile-menu ${this.state.bar}`} onClick={this.handleClick}>
              <div className="nav-list bar1"></div>
              <div className="nav-list bar2"></div>
              <div className="nav-list bar3"></div>
            </div>
        		<div className="navbar-contact">
        			<a href={`tel:${this.convertNumber(this.props.nav.contact)}`} className="navbar-link">{this.props.nav.contact}</a>
        		</div>
        	</div>
          :
          this.state.data ?
          <div className="navbar-wrapper">
        		<div className="logo">
              {
                this.state.data.logo ?
                <Link to='/' className="navbar-link"><img src={this.state.data.logo} alt="the kinetic foot and ankle clinic logo"/></Link>
                :
                <Link to='/' className="navbar-link">Kinetic Foot & Ankle</Link>
              }
        		</div>
        		<div className={this.state.class}>
        			{
                this.state.data.links.map(({active, title, sublinks, link}, index) => (
                  active ?
                  <NavbarItem
                    key={title}
                    title={title}
                    link={link}
                    sublinks={sublinks}
                  />
                  :
                  null
                ))
              }
        		</div>
            <div className={`mobile-menu ${this.state.bar}`} onClick={this.handleClick}>
              <div className="nav-list bar1"></div>
              <div className="nav-list bar2"></div>
              <div className="nav-list bar3"></div>
            </div>
        		<div className="navbar-contact">
        			<a href={`tel:${this.convertNumber(this.state.data.contact)}`} className="navbar-link">{this.state.data.contact}</a>
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
