import React, { Component } from 'react';
import { Navbar, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import "../stylesheets/TopStuff.css";
import Geosuggest from 'react-geosuggest';

let suggestion = "derp"

class TopStuff extends Component {
  constructor(props){
    super(props)
    this.state = {
      radius: 5
    }
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.breweries(suggestion, this.state.radius);
  }

  _selectRadius(e){
    switch(e){
      case "1":
        this.setState({radius: 1})
        break;
      case "5":
        this.setState({radius: 5})
        break;
      case "10":
        this.setState({radius: 10})
        break;
      default:
        return
    }
  }

  onSuggestSelect(suggest) {
    // console.log(this.props);
    suggestion = suggest
  }

  render(){
    return (
      <Navbar fluid staticTop style={{marginBottom: "0", height: "60px"}}>
        <Navbar.Header style={{marginBottom: "-10px"}}>
          <Navbar.Brand>
            <p className="title">Local Brews</p>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse style={{overflow: "visible", backgroundColor: "#F8F8F8", padding: "0px"}} timeout={0}>
          <Geosuggest
            placeholder={"Enter a city, address or zipcode"}
            country={"us"}
            autoActivateFirstSuggest={true}
            onSuggestSelect={this.onSuggestSelect}
            onBlur={this.onBlur}
             />
          <DropdownButton title={`${this.state.radius} mi`} onSelect={(e) => this._selectRadius(e)} id="dropdown-radius" >
            <MenuItem eventKey="1">1 mi</MenuItem>
            <MenuItem eventKey="5">5 mi</MenuItem>
            <MenuItem eventKey="10">10 mi</MenuItem>
          </DropdownButton>
          <Button type="submit" onClick={(event) => this.handleSubmit(event)}>Submit</Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default TopStuff
