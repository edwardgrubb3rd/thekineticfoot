import React, { Component, Fragment } from 'react';

export default class Contact extends Component {

  render() {
    return (
      <div className="contact section">
        <span className="title">{this.props.title}</span>
        <div className="contact-section">
          {
            this.props.form ?
            <Fragment>
              <form className="contact-form">
                <span className="form-title">{this.props.form.form_title}</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email"/>
                <textarea name="message" placeholder="Message" cols="30" rows="10"></textarea>
                <button className="btn-secondary no-hover">{this.props.form.button_text}</button>
              </form>
              <div className="more-info">
                <span className="form-title">Hours of Operation</span>
                <div className="hours-operation">
                  {
                    this.props.hours_of_operation.map(({days, hours}) => (
                      <div className="time-slot" key={days}>
                        <span className="day">{days}:</span>
                        <span className="hours">{hours}</span>
                      </div>
                    ))
                  }
                </div>
                <a href="https://www.google.com/maps?daddr=12510+East+Iliff+Avenue+Ste.+120,+Aurora,+Colorado+80014,+United+States"
                  target="_blank"
                  className="form-title"
                  rel="noopener noreferrer">
                  Directions To Our Clinic
                </a>
                <div className="bottom-section">
                  <span className="form-title">{this.props.emergency_contact}</span>
                  <p className="disclaimer">
                    If you are having a medical emergency please call <a href="tel:911">911</a>,
                    or go to the nearest Emergency Room or Urgent Care facility.
                  </p>
                </div>
              </div>
            </Fragment>
            :
            null
          }
        </div>
      </div>
    )
  }
};
