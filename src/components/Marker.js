import React, { Component } from 'react';
import "../stylesheets/Marker.css";

let active = {
  position: "absolute",
  overflow: "hidden",
  zIndex: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  left: "-15px",
  top: "18px",
  background: "white",
  width: "150px",
  height: "50px",
  margin: "5px 0px 0px 5px",
  border: "solid #98434B 5px",
  borderRadius: "15px",
  transform: "rotate(45deg)",
  textAlign: "center",
  fontWeight: "bolder",
  fontSize: "16px"
}

let dot = {
  position: "absolute",
  zIndex: 0,
  content: '',
  background: "white",
  width: "20px",
  height: "20px",
  margin: "5px 0 0 5px",
  borderRadius: "50%",
  transform: "rotate(45deg)",
  textAlign: "center",
  fontWeight: "bolder",
  fontSize: "16px"
}

class Marker extends Component {


  _active(){
    return(
      <div className="marker" style={this.props.markerStyle} onClick={ () => this.props.selectLoc() }>
        <div style={active}>
          {this.props.text}
        </div>
      </div>
    )
  }

  _notActive(){
    return(
      <div className="marker" style={this.props.markerStyle} onClick={ () => this.props.selectLoc() }>
        <div className="not-active" style={dot}>
          {this.props.text}
        </div>
      </div>
    )
  }

  render(){
    return(
      <div>
        {this.props.selected ? this._active() : this._notActive()}
        {/*this.props.selected+1 === this.props.key ? this._selected() : this._notSelected()*/}
      </div>
    )
  }
}

export default Marker
