import React, { Component } from 'react';
import { Modal, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import Brew from "../utils/brewHelp.js";
import "../stylesheets/Breweries.css";

class BreweryModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false,
      beers: undefined
    }
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    //console.log("Open Happened");
    let app = this;
    let breweryId = this.props.breweries[this.props.selected].breweryId
    let data = {brewery: breweryId}
    //console.log("breweryId: ", breweryId);
    this.setState({ showModal: true });
    Brew.brews(data).then(function(res){
      //console.log(res);
      if (res){
        app.setState({
          beers: res
        })
      } else {
        app.setState({
          beers: undefined
        })
      };
    })
  }

  _populateBeers(){
    let background = "";
    console.log("All beers: ", this.state.beers.length);
    let beers = this.state.beers.map(function(beer, i){
      if (!beer.availableId){
        return null
      }
      if (beer.labels && beer.labels.large){
        background = beer.labels.large
      }
      console.log("Beer with availableId: ",beer);
      return (
        <ListGroupItem className="beer-entry" key={i}>
          <div id="beer-image" style={{backgroundImage:`url(${background})`}}> </div>
          <div>
            <h4 id="beer-content">{beer.name}</h4>
          </div>
          <div id="beer-content">{beer.description}</div>
          <div>
            <p id="beer-content">IBU: {beer.ibu}</p>
            <p id="beer-content">ABV: {beer.abv}</p>
          </div>
        </ListGroupItem>
      )
    })
    return beers
  }

  _buildModal(brewery){
    if (brewery === undefined){
      return (
        <Modal show={this.state.showModal} onHide={ () => this.close() }>
          <Modal.Header closeButton>
            <Modal.Title>Loading Brewery</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>........</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ () => this.close() }>Close</Button>
          </Modal.Footer>
        </Modal>
      )
    }
    return(
      <Modal show={this.state.showModal} onHide={ () => this.close() }>
        <Modal.Header closeButton>
          <Modal.Title>{brewery.brewery.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{brewery.streetAddress}</p>
          <p>{brewery.phone}</p>
          <a target="_blank" href={brewery.website}>{brewery.website}</a>
          <hr />

          <h4>Description:</h4>
          <p>{brewery.brewery.description}</p>
        </Modal.Body>
        <div className="modal-header">
          <h4 className="modal-title">
            Beer:
          </h4>
        </div>
        <ListGroup>
          {this.state.beers === undefined ? null : this._populateBeers()}
        </ListGroup>
        <Modal.Footer>
          <Button onClick={ () => this.close() }>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
  render(){
    let brewery = this.props.breweries[this.props.selected]
    return (
      <div>
        {this.props.breweries ? this._buildModal(brewery) : <h4>No brews listed!</h4>}
      </div>
    )
  }
}


export default BreweryModal
