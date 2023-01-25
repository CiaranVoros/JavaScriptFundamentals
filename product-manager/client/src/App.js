import './App.css';
import Main from './views/Main';
import React from 'react'
import Detail from './views/Detail';
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route element={<Main />} path="/products" />
				<Route element={<Detail />} path="/api/product/:id" />
			</Routes>
		</div>
	);
}

export default App;
