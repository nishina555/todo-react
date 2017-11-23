// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const Todo = props => (
  <li>
    {props.title}
  </li>
);

// class Todo extends Component {
//   render() {
//     return (
//       <li>
//         {this.props.title}
//       </li>
//     );
//   }
// }

Todo.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Todo;
