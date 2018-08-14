import React, { Component, Fragment } from 'react';
import data from '../../data/Hero.json';

export default class Hero extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    if(window.location.href.includes('github')) {
      this.setState({data});
    }
    else {
      this.props.get();
    }
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
          this.state.data ?
          <div className="hero">
            <div className="hero-overlay"></div>

             <div className="hero-content">
              <h1 className="title">{this.state.data.title}</h1>
              <span className="subtitle">
                {this.state.data.content}
              </span>
              {
                this.state.data.link ?
                <a href={this.state.data.link} className="cta-button" target="_blank">{this.state.data.button}</a>
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
