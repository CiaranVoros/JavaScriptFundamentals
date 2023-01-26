import Main from './views/Main'
import Update from './views/Update';
import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthorForm from './views/AuthorForm';


function App() {
	return (
		<div className="App">
			<Routes>
				<Route element={<Main />} path="/authors" />
				<Route element={<Update />} path="/author/edit/:id" />
				<Route element={<AuthorForm />} path="/author/new" />
			</Routes>
		</div>
	);
}

export default App;
