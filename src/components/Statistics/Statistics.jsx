import { Component } from 'react';
// import s from './Statistics.module.css';
import Item from 'components/Item/Item';
import Notification from 'components/Notification/Notification';
import PropTypes from 'prop-types';

class Statistics extends Component {
  static propTypes = {
    statisticArray: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
    total: PropTypes.number,
  };
  render() {
    const { statisticArray, total } = this.props;

    return total > 0 ? (
      <ul>
        {statisticArray.map(array => {
          return <Item key={array[0]} array={array} />;
        })}
      </ul>
    ) : (
      <Notification message="There is no feedback" />
    );
  }
}

export default Statistics;
