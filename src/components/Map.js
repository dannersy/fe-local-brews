import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Marker from "./Marker.js"

let markerWidth = 30;
let markerHeight = 30;
let originX = markerWidth * .5;
let originY = markerHeight;

let markerStyle = {}

class Map extends Component {

  _locations(){
    let app = this;
    let results = this.props.results;
    let text = "";
    let selected = false
    let locations = results.breweries.map(function(loc, i){
      if (results.selected === i){
        markerStyle = {
          // thanks Andreas Storm on CodePen!
          zIndex: "1",
          position: 'absolute',
          cursor: 'pointer',
          width: `${markerWidth}px`,
          height: `${markerHeight}px`,
          top: `-${originY}px`,
          left: `-${originX}px`,
          transform: "rotate(-45deg)",
          margin: 0,
          padding: 0,
          borderRadius: "50% 50% 50% 0",
          background: "#98434B"
        }
        text = `${i+1}.` + loc.brewery.nameShortDisplay;
        selected = true
      } else {
        text = `${i+1}`
        selected = false
        markerStyle = {
          // thanks Andreas Storm on CodePen!
          zIndex: 0,
          position: 'absolute',
          cursor: 'pointer',
          width: `${markerWidth}px`,
          height: `${markerHeight}px`,
          top: `-${originY}px`,
          left: `-${originX}px`,
          transform: "rotate(-45deg)",
          margin: 0,
          padding: 0,
          borderRadius: "50% 50% 50% 0",
          background: "#98434B"
        }
      }
      return(
        <Marker
          selectLoc={ () => app.props.selectLoc(i)}
          markerStyle={markerStyle}
          key={i}
          lat={loc.latitude}
          lng={loc.longitude}
          text={text}
          location={loc}
          selected={selected}
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
