import React from 'react';
import styles from './Statistics.module.css'; 

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.statistics}>
    <h2>Statistics</h2>
    {total === 0 ? (
      <p>There is no feedback yet.</p>
    ) : (
      <>
        <p className={styles.statItem}>
          <span className={styles.statLabel}>Good:</span> <span className={styles.statValue}>{good}</span>
        </p>
        <p className={styles.statItem}>
          <span className={styles.statLabel}>Neutral:</span> <span className={styles.statValue}>{neutral}</span>
        </p>
        <p className={styles.statItem}>
          <span className={styles.statLabel}>Bad:</span> <span className={styles.statValue}>{bad}</span>
        </p>
        <p className={styles.statItem}>
          <span className={styles.statLabel}>Total:</span> <span className={styles.statValue}>{total}</span>
        </p>
        <p className={styles.statItem}>
          <span className={styles.statLabel}>Positive Percentage:</span>{' '}
          <span className={styles.statValue}>{positivePercentage.toFixed(2)}%</span>
        </p>
      </>
    )}
  </div>
);

export default Statistics;

