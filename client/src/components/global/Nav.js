import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        {
          title: "Our Team",
          link: "/team"
        },
        {
          title: "Our Office",
          link: "/office"
        },
        {
          title: "Advanced Therapies",
          link: "/therapies"
        }
      ]
    }
  }

  render() {
    return (
      <div className="navbar">
      	<div className="navbar-wrapper">
      		<div className="logo">
      			<a href="/" className="navbar-link">Kinetic Foot & Ankle</a>
      		</div>
      		<div className="navbar-menu">
      			{
              this.state.links.map(({title, link}) => (
                <div className="navbar-item" key={title}>
                  <Link to={link} >{title}</Link>
          			</div>
              ))
            }
      		</div>
      		<div className="mobile-menu">
      			<div className="nav-list bar1"></div>
      			<div className="nav-list bar2"></div>
      			<div className="nav-list bar3"></div>
      		</div>
      		<div className="navbar-contact">
      			<a href="tel:7202954864" className="navbar-link">720.295.4864</a>
      		</div>
      	</div>
      </div>
    )
  }
}

export default withRouter(Nav);
