import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import NavbarItem from './NavbarItem';

class Nav extends Component {
  state = {
    class: 'navbar-menu',
    contactLink: '',
    bar: '',
    lastScrollY: 0,
    activeClass: '',
    data: {
      "contact": "720.295.4864",
      "logo": true
    },
    "links": [
      {
        "title": "Our Team",
        "link": "/team",
        "active": false
      },
      {
        "title": "Common Conditions",
        "link": "/conditions",
        "active": true
      },
      {
        "title": "Patient Documents",
        "active": true,
        "link": "#",
        "sublinks": [
          {
            "title": "Record Request",
            "link": "https://docs.google.com/document/d/1uQ0YMbGkGmrBEdn4PaRjYZRVi-Eqg48RRBvWE8OiYlc/edit?usp=sharing"
          },
          {
            "title": "Record Release",
            "link": "https://docs.google.com/document/d/1-2-1Q2YeJQdthJMemqW3PjwnW7kqV-3DAYmOZ-a0cBw/edit?usp=sharing"
          },
          {
            "title": "New Patient",
            "link": "https://docs.google.com/document/d/1YKlKyZD2zCZSbStIebEEe4pOgI71kexsQY35dxyeu6s/edit?usp=sharing"
          }
        ]
      },
      {
        "title": "Patient Resources",
        "active": true,
        "link": "#",
        sublinks: [
          {
            "title": "Pay My Bill",
            "link": "http://www.paymydoc.net/"
          },
          {
            "title": "Patient Portal",
            "link": "#"
          }
        ]
      }
    ]
  }

  componentDidMount() {
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
        <div className="navbar-wrapper">
          <div className="logo">
            <Link to='/' className="navbar-link logo-link" onClick={() => this.handleClick(1)}>
              <img src={require('../../assets/logo/logo-alt.svg')} alt="the kinetic foot and ankle clinic logo"/>
            </Link>
          </div>
          <div className={this.state.class}>
            {
              this.state.links.map(({active, title, sublinks, link}, index) => (
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
            <a href={`tel:${this.convertNumber(this.state.data.contact)}`} className="navbar-link">{this.state.data.contact}</a>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Nav);
