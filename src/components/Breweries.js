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

  _populateList(){
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
        <ListGroupItem onClick={() => app.props.selectLoc(i)} active={selected} key={i}>
          <div className="breweryImage" style={{backgroundImage: image}}></div>
          <h3>{loc.brewery.name}</h3>
          <p>{loc.locationTypeDisplay}</p>
        </ListGroupItem>
      )
    })
    return breweryList
  }


  render(){
    return(
      <ListGroup>
        {this.props.breweries.length ? this._populateList() :
          <ListGroupItem active={true}>
            <div className="breweryImage" style={{backgroundImage: 'url("http://placehold.it/100x100?text=No+Image")'}}></div>
            <h3>Test</h3>
            <p>Test</p>
          </ListGroupItem>
        }
      </ListGroup>
    )
  }
}

export default Breweries
