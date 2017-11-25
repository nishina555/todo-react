import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      status: this.props.status,
    };
  }

  handleClick(e) {
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
      <li style={style} onClick={this.handleClick.bind(this)}>
        {this.props.title}
      </li>
    );
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Todo;
