import React, { Component } from 'react';

class Footer extends Component {

  state ={

  }

  componentDidMount() {
    if(this.props.get) {
      this.props.get('footer');
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
        {
          this.props.data ?
          <div className="footer-section section">
            <div className="footer-section left">
              <div className="footer-title">
                <img className="logo-img" src={require('../../assets/logo/logo.svg')} alt="the kinetic foot & ankle clinic logo"/>
              </div>
              <div className="footer-contact">
                <span>{this.props.data.contactInfo.streetAddress}</span>
                <div className="city-state">
                  <span>{this.props.data.contactInfo.city}, &nbsp;</span>
                  <span>{this.props.data.contactInfo.state}</span>
                </div>
                <span>{this.props.data.contactInfo.zip}</span>
                <a className="footer-link magnolia" href={`tel:${this.convertNumber(this.props.data.contactInfo.phone)}`}>Phone: {this.props.data.contactInfo.phone}</a>
                <span>Fax: {this.props.data.contactInfo.fax}</span>
              </div>
            </div>
            <div className="footer-section right">
              <div className="social-contact" style={{width: `calc(${this.props.data.socialMedia.length} * 50px)`}}>
                {
                  this.props.data.socialMedia.map(({link, socialApp}) => (
                    <a href={link} key={socialApp} className="social-icon">
                      <img src={require(`../../assets/icons/${socialApp.toLowerCase()}.svg`)} alt={`'${socialApp}' dr house the kinetic foot`}/>
                    </a>
                  ))
                }
              </div>
              <span className="copyright">&copy; 2018 The Kinetic Foot & Ankle Clinic</span>
            </div>
          </div>
          :
          <span>..loading</span>
        }
      </div>
    )
  }
}

export default Footer;
