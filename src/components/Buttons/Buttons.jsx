import { Component } from 'react';
import s from './Buttons.module.css';
import PropTypes from 'prop-types';

class Buttons extends Component {
  static propTypes = {
    names: PropTypes.arrayOf(PropTypes.string).isRequired,
    onIncrement: PropTypes.func.isRequired,
  };
  render() {
    const { names, onIncrement } = this.props;

    return (
      <div className={s.wrapper}>
        {names.map(name => (
          <button
            key={name}
            id={name}
            type="button"
            className={s.btn}
            onClick={onIncrement}
          >
            {name}
          </button>
        ))}
      </div>
    );
  }
}

export default Buttons;
