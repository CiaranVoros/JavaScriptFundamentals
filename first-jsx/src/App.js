import logo from './logo.svg';
import './App.css';
import NewComponent from './components/newComponent';

function App() {
	return (
		<div className="App">
			<NewComponent firstName = {"jane"} lastName = {"doe"} age = {25} hairColor = {"black"}/>
			<NewComponent firstName = {"john"} lastName = {"smith"} age = {85} hairColor = {"brown"}/>
			<NewComponent firstName = {"maria"} lastName = {"smith"} age = {55} hairColor = {"brown"}/>
			<NewComponent firstName = {"fillmore"} lastName = {"Millard"} age = {65} hairColor = {"brown"}/>
		</div>
	);
}

export default App;
