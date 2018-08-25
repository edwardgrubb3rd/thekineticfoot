import React, { Component, Fragment } from 'react';
import data from '../../data/Hero.json';

export default class Hero extends Component {
  state = {
    data: null,
    activeIndex: 1,
    interval: true
  }

  componentDidMount() {
    if(window.location.href.includes('github')) {
      this.setState({data});
    }
    else {
      this.props.get();
    }

    this.startInterval();
  }

  componentWillUnmount() {
    this.stopInterval();
    clearInterval(this.startInterval);
  }

  stopInterval = () => {
    console.log('stopping interval');
    this.setState({
      interval: false
    });
  }

  startInterval = () => {
    if(this.state.interval) {
      setInterval(() => {
        this.carousel();
      }, 8000);
    }
    else {
      clearInterval();
    }
  }

  carousel = () => {
    if(this.state.activeIndex >= 1 && this.state.activeIndex < 4) {
      this.setState({
        activeIndex: this.state.activeIndex + 1
      });
    }
    if(this.state.activeIndex === 4) {
      this.setState({
        activeIndex: 1
      });
    }
  }

  render() {
    return (
      <Fragment>
        {
          this.props.hero ?
          <div className="hero" style={{backgroundImage: `url('../assets/img/hero${this.state.activeIndex}.jpg')`}}>
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
          <div className="hero" style={{backgroundImage: `url('../assets/img/hero${this.state.activeIndex}.jpg')`}}>
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
