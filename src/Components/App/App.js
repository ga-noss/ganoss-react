import React, { Component } from 'react';
import './App.css';

import Eleve from '../Eleve/Eleve';

class App extends Component {
  state = {
    eleves: [
      { 
        name: 'Eva Dupont', 
        average: 15, 
        citation: '"Allez toujours plus loin !"' 
      },
      { 
        name: 'Timothée Galo', 
        average: 5, 
        citation: null
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Bienvenue dans la classe Terre</h1>

        <Eleve 
          name={this.state.eleves[0].name}  
          average={this.state.eleves[0].average}
        >
          {this.state.eleves[0].citation}
        </Eleve>

        <Eleve 
          name={this.state.eleves[1].name} 
          average={this.state.eleves[1].average}
        >
          {this.state.eleves[1].citation}
        </Eleve>
      </div>
    );
  }
}

export default App;