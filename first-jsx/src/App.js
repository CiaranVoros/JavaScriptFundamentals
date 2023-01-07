import logo from './logo.svg';
import './App.css';
import NewComponent from './components/newComponent';
import PersonCard from './components/personCard';

function App() {
	return (
		<div className="App">
			<PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
			<NewComponent firstName = {"john"} lastName = {"smith"} age = {85} hairColor = {"brown"}/>
			<NewComponent firstName = {"maria"} lastName = {"smith"} age = {55} hairColor = {"brown"}/>
			<NewComponent firstName = {"fillmore"} lastName = {"Millard"} age = {65} hairColor = {"brown"}/>
		</div>
	);
}

export default App;
