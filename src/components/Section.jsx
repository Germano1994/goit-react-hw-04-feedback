import React from 'react';
import styles from './Section.module.css'; 

const Section = ({ title, children }) => (
  <div className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    {children}
  </div>
);

export default Section;

