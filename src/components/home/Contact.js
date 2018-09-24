import React, { Component, Fragment } from 'react';
import axios from 'axios';


export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    formError: false,
    emailError: false,
    data: {
      "title": "contact us",
      "form": {
        "formTitle": "Message Us or to Schedule an Appointment",
        "buttonText": "Send"
      },
      "hoursOfOperation": [
        {
          "days": "Monday - Thursday",
          "hours": "8 AM – 5 PM"
        },
        {
          "days": "Friday",
          "hours": "8 AM - 3 PM"
        },
        {
          "days": "Saturday - Sunday",
          "hours": "Closed"
        }
      ],
      "emergencyContact": "Emergency Service: 24/7, on call"
    }
  };

  handleInputChange = (e, name) => {
    let val = {...this.state, [name] : e.target.value};
    this.setState(val);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let test = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    let message = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    let header = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };

    if(!this.state.email.match(test)) {
      this.setState({
        emailError: true
      });
    }
    if(this.state.name === '' || this.state.message === '' || this.state.email === '') {
      this.setState({
        formError: true
      });
    }
    if(!this.state.formError && !this.state.emailError) {
      axios.post('/contact', message, header).then(res => {
        console.log(res);
      });
    }

  }

  checkDisabled = () => {
    if(!this.state.emailError
      && !this.state.formError
      && this.state.email !== ''
      && this.state.name !== ''
      && this.state.message !== ''
    ) {
      return false;
    }
    else {
      return true;
    }
  }

  render() {
    return (
      <div className="contact section">
        <span className="title">{this.state.data.title}</span>
        <div className="contact-section">
          {
            this.state.data.form ?
            <Fragment>
              <form className="contact-form card" onSubmit={this.handleSubmit}>
                <span className="form-title">{this.state.data.form.formTitle}</span>
                <div className="form-field">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    aria-label="name"
                    onChange={(e) => this.handleInputChange(e, 'name')}
                    style={{borderColor: this.state.formError ? '#FF5057' : '#D3DFB8'}}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    aria-label="email"
                    onChange={(e) => this.handleInputChange(e, 'email')}
                    style={{borderColor: this.state.emailError ? '#FF5057' : '#D3DFB8'}}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    aria-label="message"
                    cols="30"
                    rows="10"
                    onChange={(e) => this.handleInputChange(e, 'message')}
                    style={{borderColor: this.state.formError ? '#FF5057' : '#D3DFB8'}}
                    ></textarea>
                </div>
                {
                  this.state.formError ?
                  <div className="error-message">
                    <span>** Required Fields Cannot Be Empty</span>
                  </div>
                  :
                  this.state.emailError ?
                  <div className="error-message">
                    <span>** Please provide a correct email</span>
                  </div>
                  :
                  null
                }
                <button className="btn-secondary no-hover" disabled={this.checkDisabled()} type="submit">{this.state.data.form.buttonText}</button>
              </form>
              <div className="more-info">
                <span className="form-title">Hours of Operation</span>
                <div className="hours-operation">
                  {
                    this.state.data.hoursOfOperation.map(({days, hours}) => (
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
                  <span className="form-title">{this.state.data.emergencyContact}</span>
                  <p className="disclaimer">
                    If you are having a medical emergency please call <a href="tel:911" className="large">911</a>,
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
