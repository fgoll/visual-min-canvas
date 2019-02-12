import React, { Component } from 'react';
import 'antd/dist/antd.css'; 
import './App.css';
import {view as Toolbar} from './tool-bar/'
import {view as Canvas} from './canvas/'
import {view as Attribute} from './attribute'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar></Toolbar>
        <Canvas/>
        <Attribute></Attribute>
      </div>
    );
  }
}

export default App;
