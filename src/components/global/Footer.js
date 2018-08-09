import React, { Component, Fragment } from 'react';
import Data from '../../data/Footer.json';

class Footer extends Component {
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
      <div className="footer section">
        <div className="footer-section left">
          <span className="title">The Kinetic Foot & Ankle Clinic</span>
          <div className="footer-contact">
            {
              Data.contact_info ?
              <Fragment>
                <span>{Data.contact_info.street_address}</span>
                <div className="city-state">
                  <span>{Data.contact_info.city}, &nbsp;</span>
                  <span>{Data.contact_info.state}</span>
                </div>
                <span>{Data.contact_info.zip}</span>
                <a className="footer-link" href={`tel:${this.convertNumber(Data.contact_info.phone)}`}>Phone: {Data.contact_info.phone}</a>
                <span>Fax: {Data.contact_info.fax}</span>
              </Fragment>
              :
              null
            }
          </div>
        </div>
        <div className="footer-section right">
          {
            Data.social_media ?
            <div className="social-contact" style={{width: `calc(${Data.social_media.length} * 50px)`}}>
              {
                Data.social_media.map(({link, social_app}) => (
                  <a href={link} key={social_app} className="social-icon">
                    <img src={require(`../../assets/icons/${social_app.toLowerCase()}.svg`)} alt={`'${social_app}' dr house the kinetic foot`}/>
                  </a>
                ))
              }
            </div>
              :
              null
            }
          <span className="copyright">&copy; 2018 The Kinetic Foot & Ankle Clinic</span>
        </div>
      </div>
    )
  }
}

export default Footer;
