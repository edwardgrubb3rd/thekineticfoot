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

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if(this.node.contains(e.target)) {
      return;
    }
    if(!this.node.contains(e.target) && this.state.show) {
      this.showSubMenu('show');
    }

  }

  render() {
    return (
      <div className="navbar-item" ref={node => this.node = node}>
        {
          this.props.link === '#' ?
          <Fragment>
            <span className="navbar-link" onClick={this.showMenu}>{this.props.title}</span>
            {
              this.state.show ?
              <div className="navbar-submenu">
                {
                  this.props.sublinks.map(({title, link}, index) => (
                    <a key={index} href={link} target="_blank" className="navbar-submenu-link">{title}</a>
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
