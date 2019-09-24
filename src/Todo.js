import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // STATE
    }
    // BIND
  }

  render() {
    return(
      <div className="Todo">
        <h1>Todo List</h1>
        <NewTodoForm />
      </div>
    )
  }

}
export default Todo;
