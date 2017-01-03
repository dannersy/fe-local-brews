import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import "../stylesheets/TopStuff.css";
import Geosuggest from 'react-geosuggest';

class TopStuff extends Component {
  constructor(){
    super()
    this.state = {
      searchValue: ''
    }
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.breweries(this.state.searchValue)
  }

  onSuggestSelect(suggest) {
    console.log(suggest);
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
        <Navbar.Collapse style={{overflow: "visible", backgroundColor: "#F8F8F8"}}>
          <Geosuggest
            placeholder={"Enter a city, address or zipcode"}
            country={"us"}
            types={null}
            autoActivateFirstSuggest={true}
            onSuggestSelect={this.onSuggestSelect}
             />
          {/*<Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search Zip" onChange={(event) =>
                  this.setState({searchValue: event.target.value})} />
            </FormGroup>
            {' '}
            <Button type="submit" onClick={(event) => this.handleSubmit(event)}>Submit</Button>
          </Navbar.Form>*/}
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default TopStuff
