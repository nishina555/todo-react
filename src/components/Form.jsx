import React from 'react';

const Form = () => (
  <form className="form">
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

export default Form;
