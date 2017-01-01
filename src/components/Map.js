import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Marker from "./Marker.js"

class Map extends Component {

  constructor(){
    super()
    this.state = {
      center: {lat: 39.50, lng: -98.35},
      zoom: 4
    }
  }

  _locations(){
    // this.setState({
    //   center: {
    //     lat: this.props.breweries[0].lat,
    //     lng: this.props.breweries[0].lng
    //   },
    //   zoom: 7
    // })
    // return console.log(this.state.center);
  }

  render() {
    return (
      <GoogleMap style={this.props.style}
        bootstrapURLKeys={{
          key: 'AIzaSyBwV_7tbM72Vm45JzB3CX-1nv9w7s14wh0',
          language: 'en'
        }}
        center={this.state.center}
        zoom={this.state.zoom}>
        <Marker lat={39.50} lng={-98.35} text={'A'} />
        {this.props.breweries.length ? this._locations() : null}
      </GoogleMap>
    )
  }
}

export default Map
