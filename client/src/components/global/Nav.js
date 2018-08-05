import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: 'navbar-menu'
    }
  }

  handleClick = () => {
    if(this.state.class === 'navbar-menu') {
      this.setState({
        class: 'navbar-menu active'
      });
    }
    if(this.state.class === 'navbar-menu active') {
      this.setState({
        class: 'navbar-menu'
      });
    }
  }

  render() {
    return (
      <div className="navbar">
      	<div className="navbar-wrapper">
      		<div className="logo">
      			<a href="/" className="navbar-link">Kinetic Foot & Ankle</a>
      		</div>
      		<div className={this.state.class}>
      			{
              this.props.links ?
              (
                this.props.links.map(({title, link}) => (
                  <div className="navbar-item" key={title}>
                    <Link to={link} className="navbar-link">{title}</Link>
            			</div>
                ))
              )
              :
              null
            }
      		</div>
      		<div className="mobile-menu" onClick={this.handleClick}>
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
