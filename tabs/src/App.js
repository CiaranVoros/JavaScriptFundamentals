import logo from './logo.svg';
import './App.css';
import Tab from './components/Tab';
import React, {useState} from 'react';
import Content from './components/Content';


function App() {
	const [content, setContent] = useState([]);
	const [tabs, setTabs] = useState(["Tab 1", "Tab 2", "Tab 3"]);

	
	return (
		<div className="App">
			<Tab tabs = {tabs} content = {content} setContent = {setContent}/>
			<Content content = {content}/>
		</div>
	);
}

export default App;
