import React, {Component} from 'react';
import Task from './Task';

const ToDoList = (props) => {


    const handleDelete = (index) => {
        const filteredList = props.list.filter((task, i) => {
            return i !== index;
        });
        props.setList(filteredList);
    }

    const handleCompleted = (item) => {
        if(item.completed) {
            item.completed = false
        }
        else {
            item.completed = true
        }
        props.setList([... props.list])
    }
    

    return (
        <div>
            {
                props.list.map((item, i) =>
                <div key={i}>
                    <span className={item.completed ? "done" : "nope"}>{item.text}</span>
                    <button onClick={() => handleDelete(i)}>Delete</button>
                    <input type="checkbox" checked={item.completed} onChange={() => handleCompleted(item)}/>
                </div>)
            }
        </div>
    )
}

export default ToDoList;