import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.FeedButtons}>
      {options.map(option => {
        return (
          <button
            className={styles.btn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
