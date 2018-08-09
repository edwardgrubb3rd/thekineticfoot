import React, { Component, Fragment } from 'react';
import Data from '../../data/Contact.json';

export default class Contact extends Component {

  render() {
    return (
      <div className="contact section">
        <span className="title">{Data.title}</span>
        <div className="contact-section">
          {
            Data.form ?
            <Fragment>
              <form className="contact-form">
                <span className="form-title">{Data.form.form_title}</span>
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" aria-label="name"/>
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" aria-label="email"/>
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" aria-label="message" cols="30" rows="10"></textarea>
                </div>
                <button className="btn-secondary no-hover" onClick={(e) => {e.preventDefault()}}>{Data.form.button_text}</button>
              </form>
              <div className="more-info">
                <span className="form-title">Hours of Operation</span>
                <div className="hours-operation">
                  {
                    Data.hours_of_operation.map(({days, hours}) => (
                      <div className="time-slot" key={days}>
                        <span className="day">{days}:</span>
                        <span className="hours">{hours}</span>
                      </div>
                    ))
                  }
                </div>
                <a href="https://www.google.com/maps?daddr=12510+East+Iliff+Avenue+Ste.+120,+Aurora,+Colorado+80014,+United+States"
                  target="_blank"
                  className="form-title darken"
                  rel="noopener noreferrer">
                  Directions To Our Clinic
                </a>
                <div className="bottom-section">
                  <span className="form-title">{Data.emergency_contact}</span>
                  <p className="disclaimer">
                    If you are having a medical emergency please call <a href="tel:911" className="darken large">911</a>,
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
