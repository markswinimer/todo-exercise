import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import ListItem from './ListItem';
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: []
    }
    this.addItem = this.addItem.bind(this);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
    this.checkOff = this.checkOff.bind(this);
  }

  addItem(item) {
    this.setState({ itemList: [...this.state.itemList, item] })
  }

  delete(id) {
    this.setState({
      itemList: this.state.itemList.filter(item => item.id !== id)
    })
  }

  update(id, edit) {
    const updatedList = this.state.itemList.map(item => {
      if(item.id === id) {
        return {...item, item: edit};
      }
      return item;
    })
    this.setState({ itemList: updatedList })
  }

  checkOff(id) {
    let newState = this.state.itemList.map(item => {
      if(item.id === id){
        return { ...item, checkedOff: !item.checkedOff }
      } else {
        return item
      }
    })
    this.setState({ itemList: newState })
  }

  render() {
    let list = this.state.itemList.map(newItem =>
      <ListItem
        update={this.update}
        onClick={this.checkOff}
        item={newItem.item}
        id={newItem.id}
        delete={this.delete}
        checkedOff={newItem.checkedOff}
      />
    )
    return(
      <div className="Todo">
        <h1>Todo List</h1>
          {this.state.itemList[0] ? list : <div className="BlankItem">Add an Item</div>}
        <NewTodoForm addItem={this.addItem}/>
      </div>
    )
  }

}
export default Todo;
