import React, { Component } from 'react';

class Footer extends Component {

  state ={
    data: {
      "socialMedia": [
        {
          "socialApp": "Facebook",
          "link": "https://www.facebook.com/kineticfoot/"
        },
        {
          "socialApp": "Twitter",
          "link": "https://twitter.com/kineticfoot/"
        }
      ],
      "contactInfo": {
        "streetAddress": "12510 East Iliff Avenue Ste. 120",
        "city": "Aurora",
        "state": "Colorado",
        "zip": "80014",
        "phone": "720.295.4864",
        "fax": "1.855.805.9391"
      }
    }
  }

  convertNumber = (num) => {
    if(num) {
      if(num.includes('.')) {
        let contactLink = num.split('.').join('');
        return contactLink;
      }
      if(num.includes('-')) {
        let contactLink = num.split('-').join('');
        return contactLink;
      }
    }
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-section section">
          <div className="footer-section left">
            <div className="footer-title">
              <img className="logo-img" src={require('../../assets/logo/logo.svg')} alt="the kinetic foot & ankle clinic logo"/>
            </div>
            <div className="footer-contact">
              <span>{this.state.data.contactInfo.streetAddress}</span>
              <div className="city-state">
                <span>{this.state.data.contactInfo.city}, &nbsp;</span>
                <span>{this.state.data.contactInfo.state}</span>
              </div>
              <span>{this.state.data.contactInfo.zip}</span>
              <a className="footer-link" href={`tel:${this.convertNumber(this.state.data.contactInfo.phone)}`}>Phone: {this.state.data.contactInfo.phone}</a>
              <span>Fax: {this.state.data.contactInfo.fax}</span>
            </div>
          </div>
          <div className="footer-section right">
            <div className="social-contact" style={{width: `calc(${this.state.data.socialMedia.length} * 50px)`}}>
              {
                this.state.data.socialMedia.map(({link, socialApp}) => (
                  <a href={link} key={socialApp} className="social-icon">
                    <img src={require(`../../assets/icons/${socialApp.toLowerCase()}.svg`)} alt={`'${socialApp}' dr house the kinetic foot`}/>
                  </a>
                ))
              }
            </div>
            <span className="copyright">&copy; 2018 The Kinetic Foot & Ankle Clinic</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
