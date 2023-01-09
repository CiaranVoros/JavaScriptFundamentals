import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import BoxForm from './components/BoxForm';
import React, {useState} from 'react';



function App() {

	const [boxes, setBoxes] = useState([]);

	return (
		<div className="App">
			<BoxForm setBoxes = {setBoxes} boxes = {boxes}/>
			<Box boxes = {boxes}/>
		</div>
	);
}

export default App;
