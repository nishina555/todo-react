import React from 'react';
import TodoList from './TodoList';

const App = () => (
  <div>
    <form>
      <input type="text" placeholder="title" />
      {/* <textarea placeholder="description" rows="8" /><br /> */}
      <button type="submit">Create</button>
    </form>
    <div>
      <ul>
        <li>todo1</li>
        <li>todo2</li>
      </ul>
    </div>
  </div>
);
export default App;
