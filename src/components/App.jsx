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

  handleTodoClick(todo) {
    console.log('handele App');
    const stateCopy = Object.assign([], this.state.todos);
    stateCopy[todo.id].status = todo.status;
    this.setState({
      todos: stateCopy,
    });
    console.log(this.state.todos);
  }

  render() {
    console.log('render');
    console.log(this.state.todos);
    return (
      <div className="app">
        <h1>TODO Management</h1>
        <Form
          onTodoSubmit={this.handleTodoSubmit.bind(this)}
        />
        <TodoList
          todos={this.state.todos}
          onTodoClick={this.handleTodoClick.bind(this)}
        />
      </div>
    );
  }
}

export default App;
