import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';

class NavbarItem extends Component {
  state = {
    forms: false,
    handouts: false
  }

  forms = React.createRef();
  handouts = React.createRef();

  showMenu = (val) => {
    if(val === 'forms') {
      this.forms.current.focus();
    }
    else {
      this.handouts.current.focus();
    }
  }

  hideMenu = (val) => {
    // console.log(this[val].current);
  }

  showSubMenu = (name) => {

    let val = {...this.state, [name]: !this.state[name]};

    this.setState(val);
  }

  setChildrenRecusive = (parent, status) => {
    // console.log(parent);
  }

  renderSubMenu = (options = [], title) => {
    if(!options.length) return null;

    return (
      <div className="navbar-submenu-recursive" contextMenu={title} ref={title === 'forms' ? this.forms : this.handouts}>
        {
          options.map(({title, options}) => (
            <Fragment key={title}>
              <span className="navbar-menu-link lower">{title}</span>
              {this.renderSubMenu(options)}
            </Fragment>
          ))
        }
      </div>
    )
  }

  render() {
    return (
      <div className="navbar-submenu">
        {
          this.props.options.map(({title, options}) => (
            <Fragment key={title}>
              <span
                className="navbar-menu-link mid"
                onMouseEnter={() => this.showMenu(title)}
                onMouseLeave={() => this.hideMenu(title)}
              >
                {title}
              </span>
              {this.renderSubMenu(options, title)}
            </Fragment>
          ))
        }
      </div>
    )
  }
};

export default withRouter(NavbarItem);

// this.props.link === '#' ?
// <Fragment>
//   <span className="navbar-link" onClick={this.showMenu}>{this.props.title}</span>
//   {
//     this.state.show ?
//     <div className="navbar-item-menu">
//       {
//         this.props.options.map(({title, options}) => (
//           <Fragment key={title} >
//             <span className="navbar-menu-link" onClick={() => this.showSubMenu(title)}>{title}</span>
//             <div className={'navbar-submenu ' + title}>
//               {this.renderSubMenu(options)}
//             </div>
//           </Fragment>
//         ))
//       }
//     </div>
//     :
//     null
//   }
// </Fragment>
// :
// <Link to={this.props.link} className="navbar-link">{this.props.title}</Link>
