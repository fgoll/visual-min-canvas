import React, { Component } from 'react';

import './App.css';
import {view as Toolbar} from './tool-bar/'
import {view as Canvas} from './canvas/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar></Toolbar>
        <Canvas/>
      </div>
    );
  }
}

export default App;
