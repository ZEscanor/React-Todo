import React from "react";
import "../components/Todo.css"


const ToDo = (props) => {

  return(

    <div className={`${props.task.completed ? "complete":""} `} onClick ={()=> props.clear(props.task.id)}>
      <p> {props.task.task} </p>
    {console.log(props.task.task)}

    </div>
  )
}

export default ToDo;


