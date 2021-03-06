import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  handlesubmit(e) {
    e.preventDefault();
    const title = this.refs.title.value.trim();
    if (!title) {
      return;
    }

    this.props.onTodoSubmit({
      id: new Date(),
      title,
      status: 'Active',
    });
    this.refs.title.value = '';
  }

  render() {
    return (
      <form className="form" onSubmit={this.handlesubmit.bind(this)}>
        <input
          className="place-input"
          type="text"
          size="20"
          ref="title"
        />
        {/* <textarea placeholder="description" rows="8" /><br /> */}
        <input className="submit-button" type="submit" value="Add" />
      </form>
    );
  }
}

Form.propTypes = {
  onTodoSubmit: PropTypes.func.isRequired,
};

export default Form;
