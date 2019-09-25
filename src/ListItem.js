import React, { Component } from 'react'

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleEdit(e) {
    this.props.edit(e.target.id)
  }

  handleDelete(e) {
    this.props.delete(e.target.id)
  }

  handleClick(e) {
    this.props.onClick(e.target.id);
  }

  render() {

    return(
      <div className="List">
        <div onClick={this.handleClick} style={this.props.checkedOff ? { textDecoration: `line-through` } : { textDecoration: `none` }} id={this.props.id} className="ListItem">{this.props.item}</div>
        <div className="ListIcons">
          <i id={this.props.id} onClick={this.handleEdit} className="fas fa-pencil-alt"></i>
          <i id={this.props.id} onClick={this.handleDelete} className="fas fa-trash"></i>
        </div>
      </div>
    )
  }
}
export default ListItem;
