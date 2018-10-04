import React, { Component, Fragment } from 'react';

export default class Philosophy extends Component {
  state = {}

  componentDidMount() {
    if(this.props.get) {
      this.props.get('philosophy');
    }
  }

  render() {
    return (
      <div className="philosophy">
        {
          this.props.data ?
          <Fragment>
            <span className="title center magnolia">{this.props.data.title}</span>
            <div className="philosophy-wrapper magnolia">
              <div className="philosopy-definition magnolia">
                <span className="word magnolia">{this.props.data.word}</span>
                <span className="pronounce magnolia">{this.props.data.pronounce}</span>
                <span className="adjective magnolia">{this.props.data.adjective}</span>
                <span className="definition magnolia">{this.props.data.definition}</span>
              </div>
              <div className="philosophy-description magnolia">
                {this.props.data.description}
              </div>
            </div>
          </Fragment>
          :
          <span>...loading</span>
        }
      </div>
    );
  }
};
