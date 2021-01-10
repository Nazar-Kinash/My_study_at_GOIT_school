import React from 'react';
import PropTypes from 'prop-types';
import StatisticsStyles from './Statistics.module.css';
import randomColor from '../../helpers/randomcolor';

const Statistics = ({ title, stats }) => {
  return (
    <section className={StatisticsStyles.Statistics}>
      {title && <h2 className={StatisticsStyles.Title}>Upload stats</h2>}

      <ul className={StatisticsStyles['stat-list']}>
        {stats.map((stat) => (
          <li
            className={StatisticsStyles.Item}
            key={stat.id}
            style={{ backgroundColor: randomColor() }}>
            <span className={StatisticsStyles.Label}>{stat.label}</span>
            <span className={StatisticsStyles.Percentage}>
              {stat.percentage}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Statistics;
