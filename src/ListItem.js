import React, { Component } from 'react'

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      item: this.props.item
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleEdit(e) {
    this.setState({ editing: !this.state.editing })
  }

  handleUpdate(e) {
    e.preventDefault()
    this.props.update(this.props.id, this.state.item);
    this.setState({ editing: false })
  }

  handleDelete(e) {
    this.props.delete(e.target.id)
  }

  handleClick(e) {
    this.props.onClick(e.target.id);
  }

  handleChange(e) {
    this.setState({ item: e.target.value });
  }

  render() {
    let card;
    if(this.state.editing === true) {
      card = (
        <div>
          <div className="List">
            <div
              onClick={this.handleClick}
              style={this.props.checkedOff ? { textDecoration: `line-through` } : { textDecoration: `none` }}
              id={this.props.id}
              style={{ filter: "saturate(15%)" }}
              className="ListItem">{this.props.item}
            </div>

            <div className="ListIcons" style={{ filter: "saturate(15%)" }}>
              <i id={this.props.id} onClick={this.handleEdit} className="fas fa-pencil-alt"></i>
              <i id={this.props.id} onClick={this.handleDelete} className="fas fa-trash"></i>
            </div>
          </div>
            <form className="edit-form" onSubmit={this.handleUpdate}>
              <div className="form-flex">
                <input type="text" value={this.state.item} onChange={this.handleChange}/>
                <button className="List-Button">EDIT</button>
              </div>
            </form>
        </div>
      )

    } else {

    card = (
      <div className="List">
        <div
          onClick={this.handleClick}
          style={this.props.checkedOff ? { textDecoration: `line-through` } : { textDecoration: `none` }}
          id={this.props.id}
          className="ListItem">{this.props.item}
        </div>

        <div className="ListIcons">
          <i id={this.props.id} onClick={this.handleEdit} className="fas fa-pencil-alt"></i>
          <i id={this.props.id} onClick={this.handleDelete} className="fas fa-trash"></i>
        </div>
      </div>
    )}

    return(
      <div>
        {card}
      </div>
    )
  }
}
export default ListItem;
