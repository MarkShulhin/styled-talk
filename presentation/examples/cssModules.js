export default `
// button.js
import React from 'react';
import cx from 'classanames';
import styles from './styles.css';

const Button = ({ primary, bold, children }) => (
  <button
    className={cx({
        [styles.button]: true,
        [styles.primary]: primary,
        [styles.bold]: bold,
    })}
  >
    {children}
  </button>
);

// styles.css
.button {
    border-radius: 25px;
    color: #a6a6a6;

    :hover {
        color: red;
    }
}

.primary {
    color: palevioletred;
}

.bold {
    font-weight: 700;
}
`;
