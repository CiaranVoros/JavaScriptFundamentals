import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';


function App() {
	return (
		<div className="App">
			<Header />
			<div className='content'>
				<Navigation />
				<Main>
					<div className='yellow'>
						<SubContents />
						<SubContents />
						<SubContents />
					</div>
					<Advertisement />
				</Main>
			</div>
		</div>
	);
}

export default App;
