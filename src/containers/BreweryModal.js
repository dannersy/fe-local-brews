import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
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
    console.log("Open Happened");
    let app = this;
    let breweryId = this.props.breweries[this.props.selected].breweryId
    let data = {brewery: breweryId}
    console.log("breweryId: ", breweryId);
    this.setState({ showModal: true });
    Brew.brews(data).then(function(res){
      console.log(res);
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
        <Modal.Footer>
          <Button onClick={ () => this.close() }>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
  render(){
    let brewery = this.props.breweries[this.props.selected]
    console.log(brewery);
    return (
      <div>
        {this.props.breweries ? this._buildModal(brewery) : null}
      </div>
    )
  }
}


export default BreweryModal
