import React, { Component, Fragment } from 'react';

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
              this.props.contact_info ?
              <Fragment>
                <span>{this.props.contact_info.street_address}</span>
                <div className="city-state">
                  <span>{this.props.contact_info.city}, &nbsp;</span>
                  <span>{this.props.contact_info.state}</span>
                </div>
                <span>{this.props.contact_info.zip}</span>
                <a href={`tel:${this.convertNumber(this.props.contact_info.phone)}`}>Phone: {this.props.contact_info.phone}</a>
                <span>Fax: {this.props.contact_info.fax}</span>
              </Fragment>
              :
              null
            }
          </div>
        </div>
        <div className="footer-section right">
          {
            this.props.social_media ?
            <div className="social-contact" style={{width: `calc(${this.props.social_media.length} * 50px)`}}>
              {
                this.props.social_media.map(({link, social_app}) => (
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
