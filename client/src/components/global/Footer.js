import React, { Fragment } from 'react';
// import { Facebook } from '../../assets/icons/facebook.svg';
// import { Twitter } from '../../assets/icons/twitter.svg';
// import { LinkedIn } from '../../assets/icons/linkedin.svg';
// import { YouTube } from '../../assets/icons/youtube.svg';
// import { Instagram } from '../../assets/icons/instagram.svg';

const Footer = (props) => (
  <div className="footer section">
    <div className="footer-section left">
      <span className="title">The Kinetic Foot & Ankle Clinic</span>
      <div className="footer-contact">
        {
          props.contact_info ?
          <Fragment>
            <span>{props.contact_info.street_address}</span>
            <div className="city-state">
              <span>{props.contact_info.city}, &nbsp;</span>
              <span>{props.contact_info.state}</span>
            </div>
            <span>{props.contact_info.zip}</span>
            <span>Phone: {props.contact_info.phone}</span>
            <span>Fax: {props.contact_info.fax}</span>
          </Fragment>
          :
          null
        }
      </div>
    </div>
    <div className="footer-section right">
      {
        props.social_media ?
        <div className="social-contact" style={{width: `calc(${props.social_media.length} * 50px)`}}>
          {
            props.social_media.map(({link, social_app}) => (
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
);

export default Footer;
