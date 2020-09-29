// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from "./Todo";



const ToDoList = (props) => {
    return (
        <div className= "checklist">
            {console.log(props)}
        {props.todo.map((item) => (
         // console.log(item)
       <ToDo key={item.id} task ={item} clear={props.clear}/> 
        ))}
         
        <button className="clear-Marked" onClick={props.completed}>
            Clear Done
        </button>
 
      </div>
        );
};

export default ToDoList;