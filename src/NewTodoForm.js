import React, { Component } from 'react';
import uuid from 'uuid/v4';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {

    return(
      <div className="Todo-Form">
        <h2>New Todo</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="height"
            value={this.state.listItem}
            onChange={this.handleChange}
            id="height"
          />
          <button>NEW ITEM</button>
        </form>
      </div>
    )
  }
}
export default NewTodoForm;
