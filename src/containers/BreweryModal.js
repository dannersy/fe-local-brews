import React, { Component } from 'react';
import { Modal, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import Brew from "../utils/brewHelp.js";

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
    console.log("All beers: ", this.state.beers.length);
    let beers = this.state.beers.map(function(beer, i){
      if (!beer.availableId){
        return
      }
      console.log("Beer with availableId: ",beer);
      // return (
      //   <ListGroupItem onClick={() => app.props.selectLoc(i)} active={selected} id={loc.breweryId} key={i}>
      //
      //   </ListGroupItem>
      // )
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
        {this.props.breweries ? this._buildModal(brewery) : null}
      </div>
    )
  }
}


export default BreweryModal
