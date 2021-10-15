import React, { Component } from 'react';
import './Eleve.css';

class Eleve extends Component {
    render() {
        return (
            <div className="eleve">
                <h1>{this.props.name}</h1>
                <p>Moyenne scolaire : <b>{this.props.average}/20</b></p>
                <p>Age : <b>{Math.floor(Math.random() * 100)}</b></p>
            </div>
        );
    }
}

export default Eleve;