import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  onTodoClick(e) {
    e.preventDefault();
    this.props.onTodoClick({
      id: this.props.id,
      title: this.props.title,
      status: this.props.status === 'Active' ? 'Completed' : 'Active',
    });
  }
  render() {
    const style = {
      textDecoration: this.props.status === 'Active' ? 'none' : 'line-through',
    };

    return (
      <li style={style} onClick={this.onTodoClick.bind(this)}>
        {this.props.title}
      </li>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default Todo;
