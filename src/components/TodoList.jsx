// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

class TodoList extends React.PureComponent {
  onTodoClick(todo) {
    this.props.onTodoClick(todo);
  }
  render() {
    const todos = [];
    for (let i = 0; i < this.props.todos.length; i += 1) {
      todos.push(<Todo
        key={i}
        id={i}
        title={this.props.todos[i].title}
        status={this.props.todos[i].status}
        onTodoClick={this.onTodoClick.bind(this)}
      />);
    }
    return (
      <ul>
        { todos }
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
