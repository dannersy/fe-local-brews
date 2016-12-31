//Package Stuff
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

//Config
import Brew from "../utils/brewHelp.js";
import '../stylesheets/App.css';

// Components
import Map from "../components/Map.js";
import TopStuff from "../components/TopStuff.js";
import Breweries from "../components/Breweries.js";

// Styles
const styles = {
  map: {
    height: '100vh',
    width: '100vw',
    position: "fixed",
    zIndex: "-1"
  }
};

class App extends Component {
  constructor() {
    super()
    this.state = {
      breweries: [],
      selected: 0
    }
  }

  getBreweries(searchValue) {
    let app = this;
    Brew.breweries(searchValue).then(function(res){
      app.setState({breweries: res})
    })
  }

  selectLoc(num){
    console.log(num);
    this.setState({selected: num})
  }

  render() {
    console.log("new breweries state: ", this.state.breweries);
    return (
      <div>
        <TopStuff breweries={ (searchValue) => this.getBreweries(searchValue) } />
        <Grid fluid>
          <Row className="breweries">
            <Map sm={6} md={4} style={styles.map}/>
            <Col sm={6} md={4}><Breweries
                breweries={this.state.breweries}
                selectLoc={ (num) => this.selectLoc(num) }
                selected={this.state.selected}
                /></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
