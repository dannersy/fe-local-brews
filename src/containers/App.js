//Package Stuff
import React, { Component } from 'react';

//Config
import Brew from "../utils/brewHelp.js";
import '../stylesheets/App.css';

// Containers

import BreweryModal from "../containers/BreweryModal.js";

// Components
import Map from "../components/Map.js";
import TopStuff from "../components/TopStuff.js";
import Breweries from "../components/Breweries.js";

// Styles
const styles = {
  map: {
    height: "100%",
    width: "100%",
  }
};

class App extends Component {
  constructor() {
    super()
    this.state = {
      breweries: [],
      selected: 0,
      bounds: {
        center: {lat: 39.50, lng: -98.35},
        zoom: 4
      }
    }
  }

  getBreweries(searchValue, radius) {
    let app = this;
    let data = {
      loc: searchValue.location,
      rad: radius
    }
    Brew.breweries(data).then(function(res){
      if (res){
        app.setState({
          breweries: res,
          bounds: {
            center: {lat: searchValue.location.lat, lng: searchValue.location.lng},
            zoom: 13
          }
        })
      } else {
        app.setState({
          breweries: undefined
        })
      };
    })
  }

  selectLoc(num){
    this.setState({selected: num})
  }

  render() {
    return (
      <div>
        <BreweryModal ref="modal" breweries={this.state.breweries} selected={this.state.selected} />
        <TopStuff breweries={ (searchValue, radius) => this.getBreweries(searchValue, radius) } style={{zIndex: 0}}/>
        <div style={{position: 'absolute', right: 0, top: 50, width: '60%', height: '93%', zIndex: "1"}}>
          <Map style={styles.map} results={this.state} selectLoc={ (num) => this.selectLoc(num) } />
        </div>
        <div style={{position: 'absolute', left: 0, top: 50, width: '40%', height: '93%', overflow: "scroll", zIndex: "1"}}>
          <Breweries
            breweries={this.state.breweries}
            selectLoc={ (num) => this.selectLoc(num) }
            selected={this.state.selected}
            showModal={ () => this.refs.modal.open() }
            />
        </div>
      </div>
    );
  }
}

export default App;
