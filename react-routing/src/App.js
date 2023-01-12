import logo from './logo.svg';
import './App.css';
import {
	Routes,
	Route,
	Link
} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Welcome = (props) => {
	return (
		<h1>Welcome</h1>
	)
}

const Word = (props) => {
	const {word} = useParams("");

	if(isNaN(word)) {
		return (
			<h1>The Word is {word}</h1>
		)
	}
	else {
		return (
			<h1>The Number is {word}</h1>
		)
	}
}



function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/welcome" element={<Welcome/>}/>
				<Route path="/:word" element={<Word/>}/>
			</Routes>
		</div>
	);
}	

export default App;
