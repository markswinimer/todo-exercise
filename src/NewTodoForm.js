import React, { Component } from 'react';
import uuid from 'uuid/v4'

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newItem = {item: this.state.item, id: uuid(), checkedOff: false}
    this.props.addItem(newItem);
    this.setState({ item: "" })
  }

  handleChange(e) {
    this.setState({ item: e.target.value });
  }

  render() {

    return(
      <div className="Todo-Form">
        <h2>New Todo</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-flex">
            <input
              type="text"
              name="listItem"
              value={this.state.item}
              onChange={this.handleChange}
              id="listItem"
            />
            <button>NEW ITEM</button>
          </div>
        </form>
      </div>
    )
  }
}
export default NewTodoForm;
