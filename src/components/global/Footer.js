import React, { Component, Fragment } from 'react';

class Footer extends Component {

  componentDidMount() {
    this.props.get('footer');
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
      <Fragment>
        {
          this.props.footer ?
          <div className="footer">
            <div className="footer-section section">
              <div className="footer-section left">
                <span className="title">The Kinetic Foot & Ankle Clinic</span>
                <div className="footer-contact">
                  <span>{this.props.footer.contactInfo.streetAddress}</span>
                  <div className="city-state">
                    <span>{this.props.footer.contactInfo.city}, &nbsp;</span>
                    <span>{this.props.footer.contactInfo.state}</span>
                  </div>
                  <span>{this.props.footer.contactInfo.zip}</span>
                  <a className="footer-link" href={`tel:${this.convertNumber(this.props.footer.contactInfo.phone)}`}>Phone: {this.props.footer.contactInfo.phone}</a>
                  <span>Fax: {this.props.footer.contactInfo.fax}</span>
                </div>
              </div>
              <div className="footer-section right">
                <div className="social-contact" style={{width: `calc(${this.props.footer.socialMedia.length} * 50px)`}}>
                  {
                    this.props.footer.socialMedia.map(({link, socialApp}) => (
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
          :
          null
        }
      </Fragment>
    )
  }
}

export default Footer;
