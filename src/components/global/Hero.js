import React, { Component } from 'react';

export default class Hero extends Component {

  render() {
    return (
      <div className="hero">
        <div className="hero-overlay"></div>
        {
          this.props.heroCard ?
          <div className="hero-content-card">
           <h1 className="title">{this.props.title}</h1>
           <span className="subtitle">
             {this.props.content}
           </span>
           {
             this.props.link ?
             <a href={this.props.link} className="cta-button" target="_blank">{this.props.buttonText}</a>
             :
             null
           }
         </div>
         :
         <div className="hero-content">
           <h1 className="title white center">{this.props.title}</h1>
           <span className="title-sm white center">
             {this.props.content}
           </span>
         </div>
        }
      </div>
    )
  }
};
