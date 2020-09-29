import React from 'react';
import ToDoForm from './components/TodoForm';
import ToDoList from "./components/TodoList";
import "./components/Todo.css"



const todo = [
  
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
];


class App extends React.Component {

  constructor(){

  
    super();
    this.state = {
      todo
    };
  }

  clear = (id) => {  
    this.setState({
      ...this.state,
      todo:this.state.todo.map((item)=>{
        if(id === item.id) {
          return {...item, completed:!item.completed};
        }
        else {
          return item;
        } 
      }) 
    })
  };
  add = (e, item) => {
    e.preventDefault();
    const another = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, another],
    });
  };

  clearPurchased = (e) => {
    e.preventDefault();
    // if item is purchased (item.purchased is true) then filter out
    this.setState({
      todo: this.state.todo.filter((item) => !item.completed)
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <h2>To Do List</h2>
        <ToDoList 
        todo={this.state.todo}
        clear={this.clear}
        completed={this.clearPurchased}
        />
       <ToDoForm add={this.add} />
       {console.log(this.add)}
      </div>

    );
  }
}

export default App;
