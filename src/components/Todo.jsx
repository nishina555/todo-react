import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const Todo = props => (
//   <li>
//     {props.title}
//   </li>
// );

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      done: this.props.done,
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      done: !this.state.done,
    });
  }
  render() {
    const link = this.state.done ? 'Undone' : 'Done';
    const style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
    };

    return (
      <li style={style} onClick={this.handleClick.bind(this)}>
        {this.state.title}
      </li>
    );
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default Todo;
