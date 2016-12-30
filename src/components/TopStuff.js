import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

class TopStuff extends Component {
  render(){
    return (
      <Navbar fluid style={{marginBottom: "0", height: "50px"}}>
        <Navbar.Header>
          <Navbar.Brand>
            <p>Local Brews</p>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search Zip" />
            </FormGroup>
            {' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default TopStuff
