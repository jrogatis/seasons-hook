import React from 'react';

const Spinner = ({ message }) => {
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">{message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'loading...'
};

export default Spinner;
