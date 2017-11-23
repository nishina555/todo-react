import React from 'react';
import PropTypes from 'prop-types';

const Form = props => (
  <form className="form" onSubmit={e => props.onSubmit(e)}>
    <input
      className="place-input"
      type="text"
      size="20"
      placeholder="go shopping"
    />
    {/* <textarea placeholder="description" rows="8" /><br /> */}
    <input className="submit-button" type="submit" value="Add" />
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
