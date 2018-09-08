import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

class NavbarItem extends Component {
  state = {
    show: false
  }

  showMenu = () => {
    this.setState({
      show: !this.state.show
    });
  }

  showSubMenu = (name) => {

    let val = {...this.state, [name]: !this.state[name]};

    this.setState(val);
  }

  render() {
    return (
      <div className="navbar-item">
        {
          this.props.link === '#' ?
          <Fragment>
            <span className="navbar-link" onClick={this.showMenu}>{this.props.title}</span>
            {
              this.state.show ?
              <div className="navbar-submenu">
                {
                  this.props.sublinks.map(({title, link}) => (
                    <a key={title} href={link} target="_blank" className="navbar-submenu-link">{title}</a>
                  ))
                }
              </div>
              :
              null
            }
          </Fragment>
          :
          <NavLink to={this.props.link} className="navbar-link" activeClassName="active" onClick={this.props.onClick}>{this.props.title}</NavLink>
        }
      </div>
    )
  }
};

export default withRouter(NavbarItem);
