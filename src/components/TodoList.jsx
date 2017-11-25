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
      const todo = this.props.todos[i];
      if (todo.status === this.props.filter || this.props.filter === 'All') {
        todos.push(<Todo
          key={i}
          id={i}
          title={todo.title}
          status={todo.status}
          onTodoClick={this.onTodoClick.bind(this)}
        />);
      }
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
  onTodoClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default TodoList;
