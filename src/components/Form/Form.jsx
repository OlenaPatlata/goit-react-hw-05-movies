import React from 'react';
import { useState } from 'react';
import s from './Form.module.css';

const Form = ({ onSubmit }) => {
  const [qwery, setQwery] = useState('');

  const handleChange = e => {
    e.preventDefault();
    const { value } = e.currentTarget;
    setQwery(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(qwery);
    reset();
  };

  const reset = () => setQwery('');

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={qwery}
          onChange={handleChange}
          className={s.input}
        ></input>
        <button type="submit" className={s.button}>
          Search movies
        </button>
      </form>
    </>
  );
};

export default Form;
