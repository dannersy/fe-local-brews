import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';


class Breweries extends Component {
  // constructor(props){
  //   super(props)
  // }

  _populateList(){
    let app = this
    let list = app.props.breweries.map(function(loc, i){
      let selected = false;
      if (app.props.selected === i){
        selected = true
      }
      return <ListGroupItem onClick={() => app.props.selectLoc(i)} active={selected} key={i}>Link {i}</ListGroupItem>
    })
    return list
  }


  render(){
    return(
      <ListGroup>
        {this.props.breweries.length ? this._populateList() : null }
      </ListGroup>
    )
  }
}

export default Breweries
