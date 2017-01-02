import React, { Component } from 'react';
import "../stylesheets/Marker.css";

class Marker extends Component {

  // _notSelected(){
  //   return(
  //     <div className="not-selected">{this.props.key}</div>
  //   )
  // }
  //
  // _selected(){
  //   return(
  //     <div className="selected">{this.props.location.brewery.nameShortDisplay}</div>
  //   )
  // }

  render(){
    return (
    <div>
      {this.props.text}
      {/*this.props.selected+1 === this.props.key ? this._selected() : this._notSelected()*/}
    </div>
    )
  }
}

export default Marker
