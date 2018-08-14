import React, { Component, Fragment } from 'react';
import data from '../../data/Footer.json';

class Footer extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    if(window.location.href.includes('github')) {
      this.setState({data});
    }
    else {
      this.props.get();
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
      <Fragment>
        {
          this.props.footer ?
          <div className="footer section">
            <div className="footer-section left">
              <span className="title">The Kinetic Foot & Ankle Clinic</span>
              <div className="footer-contact">
                <span>{this.props.footer.contact_info.street_address}</span>
                <div className="city-state">
                  <span>{this.props.footer.contact_info.city}, &nbsp;</span>
                  <span>{this.props.footer.contact_info.state}</span>
                </div>
                <span>{this.props.footer.contact_info.zip}</span>
                <a className="footer-link" href={`tel:${this.convertNumber(this.props.footer.contact_info.phone)}`}>Phone: {this.props.footer.contact_info.phone}</a>
                <span>Fax: {this.props.footer.contact_info.fax}</span>
              </div>
            </div>
            <div className="footer-section right">
              <div className="social-contact" style={{width: `calc(${this.props.footer.social_media.length} * 50px)`}}>
                {
                  this.props.footer.social_media.map(({link, social_app}) => (
                    <a href={link} key={social_app} className="social-icon">
                      <img src={require(`../../assets/icons/${social_app.toLowerCase()}.svg`)} alt={`'${social_app}' dr house the kinetic foot`}/>
                    </a>
                  ))
                }
              </div>
              <span className="copyright">&copy; 2018 The Kinetic Foot & Ankle Clinic</span>
            </div>
          </div>
          :
          this.state.data ?
          <div className="footer section">
            <div className="footer-section left">
              <span className="title">The Kinetic Foot & Ankle Clinic</span>
              <div className="footer-contact">
                <span>{this.state.data.contact_info.street_address}</span>
                <div className="city-state">
                  <span>{this.state.data.contact_info.city}, &nbsp;</span>
                  <span>{this.state.data.contact_info.state}</span>
                </div>
                <span>{this.state.data.contact_info.zip}</span>
                <a className="footer-link" href={`tel:${this.convertNumber(this.state.data.contact_info.phone)}`}>Phone: {this.state.data.contact_info.phone}</a>
                <span>Fax: {this.state.data.contact_info.fax}</span>
              </div>
            </div>
            <div className="footer-section right">
              <div className="social-contact" style={{width: `calc(${this.state.data.social_media.length} * 50px)`}}>
                {
                  this.state.data.social_media.map(({link, social_app}) => (
                    <a href={link} key={social_app} className="social-icon">
                      <img src={require(`../../assets/icons/${social_app.toLowerCase()}.svg`)} alt={`'${social_app}' dr house the kinetic foot`}/>
                    </a>
                  ))
                }
              </div>
              <span className="copyright">&copy; 2018 The Kinetic Foot & Ankle Clinic</span>
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
