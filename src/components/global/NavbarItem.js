import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
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

  render() {
    return (
      <div className={this.state.show ? "navbar-item active" : "navbar-item"}>
        {
          this.props.link === '#' ?
          <Fragment>
            <span className="navbar-link" onClick={this.showMenu}>{this.props.title}</span>
            {
              this.state.show ?
              <div className="navbar-item-submenu">
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
          <Link to={this.props.link} className="navbar-link">{this.props.title}</Link>
        }
      </div>
    )
  }
};

export default withRouter(NavbarItem);
