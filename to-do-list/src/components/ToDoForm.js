import React, {useState} from 'react';

const ToDoForm = (props) => {
    const [task, setTask] = useState("");
    const [completed, setCompleted] = useState(false);

    const createTask = (e) => {
        e.preventDefault();
        props.list.push(task);
        props.setList([... props.list]);
    }

    const handleTask = (e) => {
        setTask(e.target.value);
    }

    return (
        <div>
            <form onSubmit={createTask}>
                <div>
                    <input onChange={handleTask} type='text'></input>
                    <input type="submit" value="Add Task"></input>
                </div>
            </form>
        </div>
    )
}

export default ToDoForm;