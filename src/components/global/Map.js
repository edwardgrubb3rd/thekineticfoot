import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'

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
