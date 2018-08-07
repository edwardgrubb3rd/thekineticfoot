import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'

const key = 'AIzaSyCBBphg7655iUt3b_VX-szE52Zyno6Qbws';

class Map extends Component {

  state = {
    center: {
      latitude: 39.674115,
      longitude: -104.841677,
    },
    zoom: 13
  };

  render() {
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          >
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
