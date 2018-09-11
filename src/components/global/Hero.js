import React, { Component, Fragment } from 'react';
import Spinner from './Spinner';

export default class Hero extends Component {
  state = {
    interval: true
  }

  componentDidMount() {
    if(this.props.get !== undefined) {
      this.props.get('hero');
    }
  }

  render() {
    return (
      <Fragment>
        {
          this.props.hero ?
          <div className="hero">
            <div className="hero-overlay"></div>
            {
              this.props.hero.heroCard ?
              <div className="hero-content-card">
               <h1 className="title">{this.props.hero.title}</h1>
               <span className="subtitle">
                 {this.props.hero.content}
               </span>
               {
                 this.props.hero.link ?
                 <a href={this.props.hero.link} className="cta-button" target="_blank">{this.props.hero.buttonText}</a>
                 :
                 null
               }
             </div>
             :
             <div className="hero-content">
               <h1 className="title white center">{this.props.hero.title}</h1>
               <span className="title-sm white center">
                 {this.props.hero.content}
               </span>
             </div>
            }
          </div>
          :
          <Spinner />
        }
      </Fragment>
    )
  }
};
