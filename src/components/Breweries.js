import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import "../stylesheets/Breweries.css"


class Breweries extends Component {

  constructor(){
    super()
    this.state = {
      beers: []
    }
  }

  _noMatch(){
    return (
      <div>
        <h3 style={{padding: "15px"}}>No results found with your search</h3>
      </div>
    )
  }

  _giveButton(selected){
    if (selected === true){
      return (
        <div className={"btn btn-default"} style={{float: "right"}} onClick={() => this.props.showModal()}>Show Info & Beers</div>
      )
    }
    return
  }

  _populateList(){
    if (this.props.breweries.length === 0){
      return (
        <div>
          <h3 style={{padding: "10px"}}>Search a city, address or zipcode above to find breweries!</h3>
        </div>
      )
    }
    let app = this
    let image = 'url("https://placehold.it/100x100?text=No+Image")'
    let breweryList = app.props.breweries.map(function(loc, i){
      let selected = false;
      if (app.props.selected === i){
        selected = true
      }
      if (loc.brewery.images){
        image = `url(${loc.brewery.images.medium})`;
      } else {
        image = 'url("https://placehold.it/100x100?text=No+Image")'
      }
      return (
        <ListGroupItem
          onClick={() => app.props.selectLoc(i)}
          active={selected}
          id={loc.breweryId}
          key={i}
          >
          <div className="breweryImage" style={{backgroundImage: image}}></div>
          <h4 className="brewery-listing">{i+1}. {loc.brewery.name}</h4>
          <p style={{margin: "0px"}}>{loc.locationTypeDisplay}</p>
          {app._giveButton(selected)}
        </ListGroupItem>
      )
    })
    return breweryList
  }


  render(){
    return(
      <ListGroup style={{marginTop: "10px"}}>
        {this.props.breweries ? this._populateList() : this._noMatch()}
      </ListGroup>
    )
  }
}

export default Breweries
