import React, { Component, Fragment} from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class About extends Component {
  componentDidMount() {
    this.props.get();
  }

  render() {
    return (
      <Fragment>
        {
          this.props.about ?
          <div className="about section">
            <span className="title">{this.props.about.title}</span>
            <div className="about-grid">
              {
                this.props.about.sections.map(({image, title, description}) => (
                  <div className="about-item" key={title}>
                    <img className="about-item-img" src={require(`../../assets/icons/${image}`)} alt="kinetic foot ankle team about us" />
                    <span className="about-item-subtitle">{title}</span>
                    <p className="about-item-desc">{description}</p>
                  </div>
                ))
              }
            </div>
            <Link to={this.props.about.link} className="btn-secondary">{this.props.about.button}</Link>
          </div>
          :
          null
        }
      </Fragment>
    )
  }
}

export default withRouter(About);
