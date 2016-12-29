import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import TopStuff from "../components/TopStuff.js";
import Breweries from "../components/Breweries.js";
import Map from "../components/Map.js";
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <TopStuff />
        <Grid>
          <Row className="breweries">
            <Col sm={6} md={6}><Map /></Col>
            <Col sm={6} md={6}><Breweries /></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
