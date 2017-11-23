import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

const TodoPage = () => (
  <div className="todo-page">
    <Form
      onSubmit={e => this.handleTodoSubmit(e)}
    />
    <TodoList />
  </div>
);

export default TodoPage;
