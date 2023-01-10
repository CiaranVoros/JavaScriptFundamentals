import React, {Component} from 'react';
import Task from './Task';

const ToDoList = (props) => {


    const handleDelete = (index) => {
        const filteredList = props.list.filter((task, i) => {
            return i !== index;
        });
        props.setList(filteredList);
    }

    // const complete = (boo) => {
    //     let done = {
    //         textDecorationLine: "lineThrough",
    //     }
    //     if(boo) {
    //         console.log("true")
    //         return done
    //     }
    // }

    const handleCompleted = (item) => {
        if(item.completed) {
            item.completed = false
        }
        else {
            item.completed = true
        }
        props.setList([... props.list])
    }
    
    {
        props.list.map((item, i) => {
            if(item.completed) {
                item.class = "done"
            }
            else {
                item.class = "nope"
            }
        })
    }

    return (
        <div>
            {
                props.list.map((item, i) =>
                <div key={i}>
                    <span className={item.class}>{item.text}</span>
                    <button onClick={() => handleDelete(i)}>Delete</button>
                    <input type="checkbox" checked={item.completed} onChange={() => handleCompleted(item)}/>
                </div>)
            }
        </div>
    )
}

export default ToDoList;