import logo from './logo.svg';
import './App.css';
import PokeList from './components/PokemonList';
import React, { useState } from 'react';

function App() {

	const [allPokemon, setAllPokemon] = useState([])

	return (
		<div className="App">
			<PokeList allPokemon={allPokemon} setAllPokemon={setAllPokemon}></PokeList>
		</div>
	);
}

export default App;
