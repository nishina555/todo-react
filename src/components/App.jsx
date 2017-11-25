import React, { Component } from 'react';
import TodoList from './TodoList';
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      filter: 'All',
    };
  }

  handleTodoSubmit(todo) {
    this.setState({
      todos: this.state.todos.concat(todo),
    });
  }

  handleActive() {
    this.setState({
      filter: 'Active',
    });
  }

  handleAll() {
    this.setState({
      filter: 'All',
    });
  }

  handleComplete() {
    this.setState({
      filter: 'Completed',
    });
  }

  handleTodoClick(todo) {
    const stateCopy = Object.assign([], this.state.todos);
    stateCopy[todo.id].status = todo.status;
    this.setState({
      todos: stateCopy,
    });
  }

  render() {
    return (
      <div className="app">
        <h1>TODO Management</h1>
        <Form
          onTodoSubmit={this.handleTodoSubmit.bind(this)}
        />
        <TodoList
          filter={this.state.filter}
          todos={this.state.todos}
          onTodoClick={this.handleTodoClick.bind(this)}
        />
        <div className="filter-list">
          <span className="filter-name" onClick={this.handleAll.bind(this)}>All</span>
          <span className="filter-name" onClick={this.handleActive.bind(this)}>Active</span>
          <span className="filter-name" onClick={this.handleComplete.bind(this)}>Completed</span>
        </div>
      </div>
    );
  }
}

export default App;
