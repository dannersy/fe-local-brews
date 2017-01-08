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
    //let background = "";
    let beerStyle = ""
    console.log("All beers: ", this.state.beers.length);
    let beers = this.state.beers.map(function(beer, i){
      if (!beer.availableId){
        return null
      }
      if (beer.style){
        beerStyle = beer.style.shortName
      }
      // if (beer.labels && beer.labels.large){
      //   background = beer.labels.large
      // }
      console.log("Beer with availableId: ",beer);
      return (
        <ListGroupItem className="beer-entry" key={i}>
          <div className="title-box">
            <h4 id="beer-content">{beer.name}</h4>
            <h4>{beerStyle}</h4>
          </div>
          <div id="beer-content" style={{marginBottom: "5px"}}>{beer.description}</div>
          <div>
            <p id="beer-content" style={{margin: "0px"}}>IBU: {beer.ibu}</p>
            <p id="beer-content">ABV: {beer.abv}</p>
          </div>
          {/*<div id="beer-image" style={{backgroundImage:`url(${background})`}}> </div>*/}
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
          <Modal.Title>
            <p className="brewery-title">{brewery.brewery.name}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{brewery.streetAddress}</p>
          <p>{brewery.phone}</p>
          <a target="_blank" href={brewery.website}>{brewery.website}</a>
          <hr />

          <h4>Description:</h4>
          <p style={{marginTop: "10px"}}>{brewery.brewery.description}</p>
        </Modal.Body>
        <div className="modal-header">
          <h4 className="modal-title">
            Beer List:
          </h4>
        </div>
        <ListGroup>
          {this.state.beers === undefined ? <h4 style={{padding: "15px"}}>No Beers Listed</h4> : this._populateBeers()}
        </ListGroup>
        <Modal.Footer>
          <Button onClick={ () => this.close() }>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
  render(){
    let brewery = [];
    if (this.props.breweries){
      brewery = this.props.breweries[this.props.selected];
    }
    return (
      <div>
        {this.props.breweries ? this._buildModal(brewery) : null}
      </div>
    )
  }
}


export default BreweryModal
