import React, { Component } from 'react';
import './App.css';

import Eleve from '../Eleve/Eleve';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bienvenue dans la classe Terre</h1>
        <Eleve name="Eva Dupont" average="15" />
        <Eleve name="Timothée Galo" average="5" />
      </div>
    );
  }
}

export default App;