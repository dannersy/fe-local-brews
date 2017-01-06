import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class BreweryModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false,

    }
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
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
