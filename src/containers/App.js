//Package Stuff
import React, { Component } from 'react';

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

  getBreweries(searchValue) {
    let app = this;
    Brew.breweries(searchValue).then(function(res){
      if (res){
        app.setState({
          breweries: res,
          bounds: {
            center: {lat: res[0].latitude, lng: res[0].longitude},
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
    console.log(num);
    this.setState({selected: num})
  }

  render() {
    console.log("new breweries state: ", this.state.breweries);
    return (
      <div>
        <TopStuff breweries={ (searchValue) => this.getBreweries(searchValue) } style={{zIndex: 0}}/>
        <div style={{position: 'absolute', right: 0, top: 50, width: '60%', height: '93%', zIndex: "1"}}>
          <Map style={styles.map} results={this.state} selectLoc={ (num) => this.selectLoc(num) } />
        </div>
        <div style={{position: 'absolute', left: 0, top: 50, width: '40%', height: '93%', overflow: "scroll", zIndex: "1"}}>
          <Breweries
            breweries={this.state.breweries}
            selectLoc={ (num) => this.selectLoc(num) }
            selected={this.state.selected}
            />
        </div>
      </div>
    );
  }
}

export default App;
