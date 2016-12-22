import React, { Component } from 'react';
import TopStuff from "../components/TopStuff.js";
import Breweries from "../components/Breweries.js";
import Map from "../components/Map.js";
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopStuff />
        <div>
          <div>
          <Breweries />
          </div>
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
