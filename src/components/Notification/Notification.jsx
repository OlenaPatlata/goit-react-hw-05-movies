import s from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = props => {
  const { message } = props;
  return <p className={s.text}>{message}</p>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
