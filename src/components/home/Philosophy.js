import React, { Component } from 'react';

export default class Philosophy extends Component {
  componentDidMount() {
    this.props.get('philosophy');
  }

  render() {
    return (
      <div className="philosophy">
        {
          this.props.philosophy ?
          <div className="philosophy-wrapper">
            <span className="title center">{this.props.philosophy.title}</span>
            <span className="word">{this.props.philosophy.word}</span>
            <span className="word">{this.props.philosophy.pronounce}</span>
          </div>
          :
          null
        }
      </div>
    );
  }
};
