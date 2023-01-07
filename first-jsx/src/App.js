import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello Dojo</h1>
				<h3>Things I need to do</h3>
				<ul>
					<li>Learn React</li>
					<li>Climb Mt everest</li>
					<li>Run a marathon</li>
					<li>Feed the dogs</li>
				</ul>
			</div>
		);
	}
}

export default App;
