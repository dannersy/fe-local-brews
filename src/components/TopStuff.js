import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

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

  render(){
    return (
      <Navbar fluid staticTop style={{marginBottom: "0", height: "50px"}}>
        <Navbar.Header>
          <Navbar.Brand>
            <p>Local Brews</p>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search Zip" onChange={(event) =>
                  this.setState({searchValue: event.target.value})} />
            </FormGroup>
            {' '}
            <Button type="submit" onClick={(event) => this.handleSubmit(event)}>Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default TopStuff
