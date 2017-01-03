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

  _handleSubmit(e){
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
    // console.log(derp);
    suggestion = suggest
  }

  render(){
    return (
      <Navbar fluid staticTop style={{marginBottom: "0", height: "50px"}}>
        <Navbar.Header style={{marginBottom: "-10px"}}>
          <Navbar.Brand>
            <p>Local Brews</p>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
          <Geosuggest
            placeholder={"Enter a city, address or zipcode"}
            country={"us"}
            autoActivateFirstSuggest={true}
            onSuggestSelect={this.onSuggestSelect}
             />
          {/*<Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search Zip" onChange={(event) =>
                  this.setState({searchValue: event.target.value})} />
            </FormGroup>
            {' '}
          </Navbar.Form>
          <Navbar.Brand>
            <p>Radius(mi):</p>
          </Navbar.Brand>*/}
          <DropdownButton title={`${this.state.radius} mi`} onSelect={(e) => this._selectRadius(e)} id="dropdown-radius" >
            <MenuItem eventKey="1">1 mi</MenuItem>
            <MenuItem eventKey="5">5 mi</MenuItem>
            <MenuItem eventKey="10">10 mi</MenuItem>
          </DropdownButton>
          <Button type="submit" onClick={(event) => this._handleSubmit(event)}>Submit</Button>
        <Navbar.Collapse style={{overflow: "visible", backgroundColor: "#F8F8F8"}}>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default TopStuff
