import React, { Component } from 'react';
import "../stylesheets/Marker.css";

const dot = {
  content: '',
  background: "white",
  width: "20px",
  height: "20px",
  margin: "5px 0 0 5px",
  position: "absolute",
  borderRadius: "50%",
  transform: "rotate(45deg)",
  textAlign: "center",
  fontWeight: "bolder",
  fontSize: "16px"
}

class Marker extends Component {

  render(){
    return (
    <div style={this.props.markerStyle} onClick={ () => this.props.selectLoc() }>
      <div style={dot}>
        {this.props.text}
      </div>
      {/*this.props.selected+1 === this.props.key ? this._selected() : this._notSelected()*/}
    </div>
    )
  }
}

export default Marker
