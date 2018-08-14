import React, { Component, Fragment } from 'react';

export default class Hero extends Component {
  componentDidMount() {
    this.props.get();
  }

  render() {
    return (
      <Fragment>
        {
          this.props.hero ?
          <div className="hero">
            <div className="hero-overlay"></div>

             <div className="hero-content">
              <h1 className="title">{this.props.hero.title}</h1>
              <span className="subtitle">
                {this.props.hero.content}
              </span>
              {
                this.props.hero.link ?
                <a href={this.props.hero.link} className="cta-button" target="_blank">{this.props.hero.button}</a>
                :
                null
              }
            </div>
          </div>
          :
          null
        }
      </Fragment>
    )
  }
};
