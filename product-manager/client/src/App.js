import './App.css';
import Main from './views/Main';
import React from 'react'
import Detail from './views/Detail';
import { Routes, Route } from 'react-router-dom'
import Update from './views/Update';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route element={<Main />} path="/products" />
				<Route element={<Detail />} path="/api/product/:id" />
				<Route element={<Update/>} path="/api/product/:id/edit"/>
			</Routes>
		</div>
	);
}

export default App;
