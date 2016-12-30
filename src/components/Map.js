import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

export class Map extends Component {

  render() {
    return (
      <GoogleMap style={this.props.style}
        bootstrapURLKeys={{
          key: 'AIzaSyBwV_7tbM72Vm45JzB3CX-1nv9w7s14wh0',
          language: 'en'
        }}
        defaultCenter={{lat: 59.938043, lng: 30.337157}}
        defaultZoom={9}>
      </GoogleMap>
    );
  }
}

export default Map
