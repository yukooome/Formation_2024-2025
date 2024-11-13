import React from 'react';
import '../App.css';
import './pokedex.css';

function Pokedex({ name, description, types, stats, image }) {
  // Supprimez les caractères indésirables de la description
  const cleanDescription = description.replace(/\f/g, ''); // Remplace le caractère \f par une chaîne vide

  return (
    <div className='poke-place'>
      <div className="pokemon-container">
        <li>
          <div className="pokemon-card">
            <div className='c-1'>
              <ul><strong>Name :</strong> {name}</ul>
              <ul><strong>Description :</strong> {cleanDescription}</ul>
              <ul><strong>Types :</strong> {types.join(', ')}</ul>
              <ul>
                <strong>Stats :</strong>
                <ul>PV: {stats.hp}</ul>
                <ul>Attack: {stats.attack}</ul>
                <ul>Defense: {stats.defense}</ul>
                <ul>Special-Attack: {stats['special-attack']}</ul>
                <ul>Special-Defense: {stats['special-defense']}</ul>
                <ul>Speed: {stats.speed}</ul>
              </ul>
            </div>

            <div className='c-2'>
              <ul>
                <img src={image} alt={name} className="pokemon-image" />
              </ul>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
}

export default Pokedex;
