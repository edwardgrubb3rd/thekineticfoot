import React from 'react';

const Loading = (props) => (
  <div className="loading">
    <div className="loading-wrapper">
      <img className="loading-logo" src={require('../../assets/logo/logo.svg')} alt="the kinetic foot"/>
    </div>
  </div>
);

export default Loading;
