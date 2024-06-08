import { useEffect, useState } from 'react';
import { getAllPokemon, getPokemon } from './utils/pokemon';

import './App.css';

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      //all pokemon get
      let res = await getAllPokemon(initialURL);
      //every pokemon detail info
      loadPokemon(res.results);
      setLoading(false);
    }
    fetchPokemonData();
  }, []);

  const loadPokemon = (data) => {
    let _pokemonData = Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
  }

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Got the data</h1>
      )}
    </div>
  );
}

export default App;
