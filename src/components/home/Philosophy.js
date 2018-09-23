import React, { Component, Fragment } from 'react';

export default class Philosophy extends Component {
  componentDidMount() {
    this.props.get('philosophy');
  }

  render() {
    return (
      <div className="philosophy">
        {
          this.props.philosophy ?
          <Fragment>
            <span className="title center magnolia">{this.props.philosophy.title}</span>
            <div className="philosophy-wrapper magnolia">
              <div className="philosopy-definition magnolia">
                <span className="word magnolia">{this.props.philosophy.word}</span>
                <span className="pronounce magnolia">{this.props.philosophy.pronounce}</span>
                <span className="adjective magnolia">{this.props.philosophy.adjective}</span>
                <span className="definition magnolia">{this.props.philosophy.definition}</span>
              </div>
              <div className="philosophy-description magnolia">
                {this.props.philosophy.description}
              </div>
            </div>
          </Fragment>
          :
          null
        }
      </div>
    );
  }
};
