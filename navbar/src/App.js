import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Form from './components/Form';
import FormWrapper from './components/FormWrapper';

function App() {
	return (
		<div className="App">
			<Wrapper>
				<Navbar></Navbar>
				<FormWrapper></FormWrapper>
			</Wrapper>
		</div>
	);
}

export default App;
