export default `
// button.js
import React from 'react';
import cx from 'classanames';

const Button = ({ primary, children }) => (
  <button
    className={cx({
        'block__element': true,
        'block__element--primary': primary,
    })}
  >
    {children}
  </button>
);

// .scss
.block__element {
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  &--primary {
    background: palevioletred;
    color: white;
  }
}
`