import React, { Component } from 'react';

import Map from '../global/Map';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render() {
    return (
      <div className="contact section">
        <span className="title">{this.props.title}</span>
        <div className="contact-section">
          {
            this.props.form ?
            <form className="contact-form">
              <span className="form-title">{this.props.form.form_title}</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email"/>
              <textarea name="message" placeholder="Message" cols="30" rows="10"></textarea>
              <button className="btn-secondary">{this.props.form.button_text}</button>
            </form>
            :
            null
          }
          <Map />
        </div>
      </div>
    )
  }
};
