import React, { Component, Fragment } from 'react';

export default class Philosophy extends Component {
  state = {
    data: {
      "title": "Our Philosophy",
      "word": "ki·net·ic",
      "pronounce": "/kəˈnedik/",
      "adjective": "adjective",
      "definition": "1. relating to or resulting from motion.",
      "description": "o (of a work of art) depending on movement for its effect. The human body and specifically the foot are just that: a work of art in motion.  Millenia of evolution have produced a beautiful functional device that can take you anywhere over an entire lifetime.  When its injured, you need a compassionate,skilled craftsman with a specific toolkit designed especially for you and your lifestyle.  Entrust Kinetic Foot and Ankle Clinic to mend, maintain and optimize one of the most important human components. Stay in motion."
    }
  }

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
          <Fragment>
            <span className="title center magnolia">{this.state.data.title}</span>
            <div className="philosophy-wrapper magnolia">
              <div className="philosopy-definition magnolia">
                <span className="word magnolia">{this.state.data.word}</span>
                <span className="pronounce magnolia">{this.state.data.pronounce}</span>
                <span className="adjective magnolia">{this.state.data.adjective}</span>
                <span className="definition magnolia">{this.state.data.definition}</span>
              </div>
              <div className="philosophy-description magnolia">
                {this.state.data.description}
              </div>
            </div>
          </Fragment>
        }
      </div>
    );
  }
};
