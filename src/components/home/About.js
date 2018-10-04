import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class About extends Component {

  state = {
    data: {
      "title": "About Us",
      "sections": [
        {
          "title": "Our Health Mission",
          "description": "Our experienced medical professionals are proud to put your healing needs first with care and compassion.",
          "image": "key.svg"
        },
        {
          "title": "Experience",
          "description": "With more than 15 years of experience, we assist you in creating a custom recovery plan that's right for you, so that you can get back to what you love faster.",
          "image": "doctor.svg"
        },
        {
          "title": "A Team Who Cares",
          "description": "We strive to help you improve your quality of life and achieve your wellness goals, so you can live your best life possible.",
          "image": "team.svg"
        }
      ],
      "buttonText": "find out more",
      "link": "#"
    }
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
          <Fragment>
            <span className="title">{this.state.data.title}</span>
            <div className="about-grid">
              {
                this.state.data.sections.map(({image, title, description}) => (
                  <div className="about-item" key={title}>
                    <img className="about-item-img" src={require(`../../assets/icons/${image}`)} alt="kinetic foot ankle team about us" />
                    <span className="about-item-subtitle">{title}</span>
                    <p className="about-item-desc">{description}</p>
                  </div>
                ))
              }
            </div>
            {
              this.state.data.link !== '#' ?
              <Link to={this.state.data.link} className="btn-secondary">{this.state.data.buttonText}</Link>
              :
              null
            }
          </Fragment>
        }
      </div>
    )
  }
}

export default withRouter(About);
