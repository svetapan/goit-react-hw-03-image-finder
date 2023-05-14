import React from 'react';
import css from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={css.button} onClick={onClick} type="button">
      Load more
    </button>
  );
};

export default Button;
