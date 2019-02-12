import React, { Component } from 'react';
import './App.css';
import CountriesPanel from "./containers/CountriesPanel/CountriesPanel";

class App extends Component {
  render() {
    return (
        <div className="App">
            <CountriesPanel />
        </div>

    );
  }
}

export default App;
