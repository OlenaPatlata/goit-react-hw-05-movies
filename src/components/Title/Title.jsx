import React from 'react';
import s from './Title.module.css';
import PropTypes from 'prop-types';

const Title = props => {
  const { title } = props;
  return <h1 className={s.title}>{title}</h1>;
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
