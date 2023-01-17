import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import {
	Routes,
	Route,
	Link
} from 'react-router-dom'
import Content from './components/Content';


function App() {

	const [type, setType] = useState("")
	const [id, setId] = useState(1)

	return (
		<div className="App">
		<Form type={type} setType={setType} id={id} setId={setId}></Form>
			<Routes>
				<Route path='/:category/:id' element={<Content type={type} setType={setType} id={id} setId={setId}/>}/>
			</Routes>
		</div>
	);
}

export default App;
