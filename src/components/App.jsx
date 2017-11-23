import React, { Component } from 'react';
import TodoList from './TodoList';
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  handleTodoSubmit(todo) {
    this.setState({
      todos: this.state.todos.concat(todo),
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
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
