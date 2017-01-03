import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import "../stylesheets/Breweries.css"

// let styles = {
//   icon: {
//     height: "100px",
//     width: "100px",
//     backgroundPosition: "center",
//     float: "left",
//     marginRight: "10px",
//   }
// };

class Breweries extends Component {
  // constructor(props){
  //   super(props)
  // }

  _noMatch(){
    return (
      <div>
        <h3>No results found with your search</h3>
      </div>
    )
  }

  _populateList(){
    if (this.props.breweries.length === 0){
      return (
        <div>
          <h3>Search a city, address or zipcode above to find breweries!</h3>
        </div>
      )
    }
    let app = this
    let image = 'url("http://placehold.it/100x100?text=No+Image")'
    let breweryList = app.props.breweries.map(function(loc, i){
      let selected = false;
      if (app.props.selected === i){
        selected = true
      }
      if (loc.brewery.images){
        image = `url(${loc.brewery.images.medium})`;
      } else {
        image = 'url("http://placehold.it/100x100?text=No+Image")'
      }
      return (
        <ListGroupItem onClick={() => app.props.selectLoc(i)} active={selected} id={loc.breweryId} key={i}>
          <div className="breweryImage" style={{backgroundImage: image}}></div>
          <h3>{i+1}. {loc.brewery.name}</h3>
          <p>{loc.locationTypeDisplay}</p>
        </ListGroupItem>
      )
    })
    return breweryList
  }


  render(){
    return(
      <ListGroup>
        {this.props.breweries ? this._populateList() : this._noMatch()}
      </ListGroup>
    )
  }
}

export default Breweries
