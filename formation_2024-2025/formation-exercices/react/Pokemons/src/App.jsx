

import React, { useState } from 'react';
import './App.css';
import Pokedex from './pokedex/pokedex'; 
import pokedexData from './data/pokedex.json'; 

function App() {
  // gérer le type sélectionné
  const [selectedType, setSelectedType] = useState('all');

  // Filtrer les Pokémon en fonction du type sélectionné
  const filteredPokedexData = pokedexData.filter((pokemon) => { 
    if (selectedType === 'all') {
      return true; // Si "all" est sélectionné, afficher tous les Pokémon
    } else {
      return pokemon.types.includes(selectedType); // Sinon, filtrer par type
    }
  });

  // tableau des types
  const allTypes = ['all', 'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'];

  // const desc = pokemon.description.replace('\f', '');

  return (
    <>
      <h1>Pokedex</h1>

      {/* Boutons de filtre par type + prendre tout ce qu'il y a dans le tableau et en faire des butons */}
      <div className="filter-buttons">

        {allTypes.map((type, index) => (
          <button key={index} onClick={() => setSelectedType(type)}>
            {type}
          </button>
        ))}
        
      </div>

      {/* Affichage des Pokémon filtrés */}
      <ul>
        {filteredPokedexData.map((pokemon) => (
          <Pokedex 
            key={pokemon.id}
            name={pokemon.name}
            description={pokemon.description}
            types={pokemon.types}
            stats={pokemon.stats}
            image={pokemon.image}
          />
        ))}
      </ul>
    </>
  );
}

export default App;