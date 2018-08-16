import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';

class NavbarItem extends Component {
  state = {
    show: false,
    forms: false,
    handouts: false
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

  setChildrenRecusive = (parent, status) => {
    // console.log(parent);
  }

  componentDidMount() {
    console.log(this.props.options);
  }

  renderSubMenu = (options = []) => {
    console.log(options);
    // console.log(!options.length);

    if(!options.length) return null;

    return (
      <div className="navbar-submenu-recursive">
        {
          options.map(({title, options}) => (
            <Fragment key={title}>
              <span className="navbar-menu-link">{title}</span>
              {this.renderSubMenu(options)}
            </Fragment>
          ))
        }
      </div>
    )
  }

  render() {
    return (
      <div className={this.state.show ? "navbar-submenu active" : "navbar-submenu"}>
        {
          this.props.options.map(({title, options}) => (
            <Fragment key={title}>
              <span className="navbar-menu-link" onClick={this.showMenu}>{title}</span>
              {this.renderSubMenu(options)}
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
