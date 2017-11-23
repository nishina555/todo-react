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

  handleTodoSubmit(e) {
    e.preventDefault();
    const title = e.target.value;
    if (!title) {
      return;
    }
    this.setState({
      todos: this.state.todos.concat({ title, done: false }),
    });
  }

  render() {
    return (
      <div className="app">
        <Form
          onSubmit={e => this.handleTodoSubmit(e)}
        />
        <TodoList
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
