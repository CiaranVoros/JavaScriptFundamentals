import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {

	const [list, setList] = useState([]);
	const [task, setTask] = useState("");



	const createTask = (e) => {
		e.preventDefault();

		const oneTask = {
			text : task,
			completed : false
		}

		setList([...list, oneTask]);
	}

	const handleTask = (e) => {
		setTask(e.target.value);
		
	}

	return (
		<div className="App">
			<form onSubmit={createTask}>
				<div>
					<input onChange={handleTask} type='text'></input>
					<input type="submit" value="Add Task"></input>
				</div>
			</form>
			<ToDoList list={list} setList={setList} task = {task} setTask = {setTask}></ToDoList>
		</div>
	);
}

export default App;
