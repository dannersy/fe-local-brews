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
        <div style={{position: 'absolute', right: 0, top: 50, width: '60%', height: '100%'}}>
          <Map style={styles.map}/>
        </div>
        <div style={{position: 'absolute', left: 0, top: 50, width: '40%', height: '100%'}}>
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
