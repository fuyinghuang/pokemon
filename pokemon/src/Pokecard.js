import React, { Component } from  'react';
import './Pokecard.css'
const Poke_APi = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
  render() {
    let imgSrc = `${Poke_APi}{this.props.id}.png`;
    return (
      <div className= 'Pokecard'>
        <div className='Pokecard-title'><h1>{this.props.name}</h1></div>
        <img src={imgSrc} alt={this.props.name}/>
        <div className='Pokecard-data'>Type: {this.props.type}</div>
        <div className='Pokecard-data'>Exp: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;