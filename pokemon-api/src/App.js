import logo from './logo.svg';
import './App.css';
import PokeList from './components/PokemonList';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

	const [allPokemon, setAllPokemon] = useState([])
	const [showPokemon, setShowPokemon] = useState(false)
	
	useEffect(()=>{
		axios.get("	)
		.then(allPokemon=>{setAllPokemon(allPokemon.data.results)})
	}, []);

	const listPokemon = (e) => {
		e.preventDefault();
		if(!showPokemon) {
			setShowPokemon(true)
		}
		else {
			setShowPokemon(false)
		}
	}

	return (
		<div className="App">
		<button onClick={listPokemon}>All Pokemon</button>
		{
			showPokemon ?
			
				allPokemon.map((item, i) =>
				<div key={i}> {item.name} </div>)
			: ""
		}
		</div>
	);
}

export default App;
