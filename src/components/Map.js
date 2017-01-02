import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Marker from "./Marker.js"

class Map extends Component {

  _locations(){
    let results = this.props.results;
    let text = "";
    let locations = results.breweries.map(function(loc, i){
      if (results.selected === i){
        text = `${i+1}.` + loc.brewery.nameShortDisplay
      } else {
        text = `${i+1}`
      }
      return(
        <Marker
          key={i}
          lat={loc.latitude}
          lng={loc.longitude}
          text={text}
          location={loc}
        />
      )
    })
    return locations
  }

  render() {
    return (
      <GoogleMap style={this.props.style}
        bootstrapURLKeys={{
          key: 'AIzaSyBwV_7tbM72Vm45JzB3CX-1nv9w7s14wh0',
          language: 'en'
        }}
        center={this.props.results.bounds.center}
        zoom={this.props.results.bounds.zoom}>
        {this.props.results.breweries ? this._locations() : null}
      </GoogleMap>
    )
  }
}

export default Map
