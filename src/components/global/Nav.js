import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

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
    this.props.get('nav');
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("scroll", this.handleScroll);
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

  handleClick = (val) => {
    if(window.innerWidth < 900) {
      if(!val) {
        if(this.state.class === 'navbar-menu') {
          this.setState({
            class: 'navbar-menu mobile',
            bar: 'change'
          });
          document.body.classList.add('nav-open');
        }
        if(this.state.class === 'navbar-menu mobile') {
          this.setState({
            class: 'navbar-menu',
            bar: ''
          });
          document.body.classList.remove('nav-open');
        }
      }
      if(val) {
        if(this.state.class === 'navbar-menu mobile') {
          this.setState({
            class: 'navbar-menu',
            bar: ''
          });
          document.body.classList.remove('nav-open');
        }
      }
    }
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if(window.innerWidth <= 900 && this.state.class !== 'navbar-menu mobile') {
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
              <Link to='/' className="navbar-link logo-link" onClick={() => this.handleClick(1)}><img src={require('../../assets/logo/logo-alt.svg')} alt="the kinetic foot and ankle clinic logo"/></Link>
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
                    index={index}
                    onClick={() => this.handleClick()}
                  />
                  :
                  null
                ))
              }
        		</div>
            <div className={`mobile-menu ${this.state.bar}`} onClick={() => this.handleClick()}>
              <div className="nav-list bar1"></div>
              <div className="nav-list bar2"></div>
              <div className="nav-list bar3"></div>
            </div>
        		<div className="navbar-contact">
        			<a href={`tel:${this.convertNumber(this.props.nav.contact)}`} className="navbar-link">{this.props.nav.contact}</a>
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
