//import { ReactComponent } from "*.svg";
import React from "react";

class ToDoForm extends React.Component{
    constructor() {
     super();
     this.state = {
         task: "",
     };
     
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      submitT =e => {
        e.preventDefault();
        this.setState({task: "" });
        this.props.add(e, this.state.task);
      };
render() {
    return(
        <form onSubmit={this.submitT}>
        <input
          type="text"
          value={this.state.task}
          name="task"
          onChange={this.handleChange}
        />
        {/* {console.log(this.props.addTask)} */}
        {console.log()}
        <button> Add </button>
      </form>
    );
}
}


export default ToDoForm;