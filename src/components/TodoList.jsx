// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

class TodoList extends React.PureComponent {
  render() {
    const todos = [];
    for (let i = 0; i < this.props.todos.length; i += 1) {
      todos.push(<Todo
        key={i}
        title={this.props.todos[i].title}
        done={this.props.todos[i].done}
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
