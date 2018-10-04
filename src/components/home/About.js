import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class About extends Component {
  state = {

  }

  componentDidMount() {
    if(this.props.get) {
      this.props.get('about');
    }
  }

  render() {
    return (
      <div className="about section">
        {
          this.props.data ?
          <Fragment>
            <span className="title">{this.props.data.title}</span>
            <div className="about-grid">
              {
                this.props.data.sections.map(({image, title, description}) => (
                  <div className="about-item" key={title}>
                    <img className="about-item-img" src={require(`../../assets/icons/${image}`)} alt="kinetic foot ankle team about us" />
                    <span className="about-item-subtitle">{title}</span>
                    <p className="about-item-desc">{description}</p>
                  </div>
                ))
              }
            </div>
            {
              this.props.data.buttonText !== '' ?
              <Link to={this.props.data.link} className="btn-secondary">{this.props.data.buttonText}</Link>
              :
              null
            }
          </Fragment>
          :
          <span>...loading</span>
        }
      </div>
    )
  }
}

export default withRouter(About);
