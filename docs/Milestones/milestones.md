---
id: milestones
title: Milestones
---

import styles from './milestones.module.css';
import Link from '@docusaurus/Link';

# Project Milestones

<div className={styles.milestonesContainer}>
  <Link to="/pei-nwdaf-microsite/docs/category/ms1-inception" className={styles.milestoneCard}>
    <div className={styles.milestoneHeader}>
      <h2>MS1</h2>
      <span className={`${styles.milestoneBadge} ${styles.done}`}>Done</span>
    </div>
    <h3>Inception</h3>
    <div className={styles.milestoneFooter}>
      <span className={styles.viewButton}>View Details →</span>
    </div>
  </Link>

  <Link to="/pei-nwdaf-microsite/docs/category/ms2-elaboration" className={styles.milestoneCard}>
    <div className={styles.milestoneHeader}>
      <h2>MS2</h2>
      <span className={`${styles.milestoneBadge} ${styles.done}`}>Done</span>
    </div>
    <h3>Elaboration</h3>
    <div className={styles.milestoneFooter}>
      <span className={styles.viewButton}>View Details →</span>
    </div>
  </Link>

  <Link to="/pei-nwdaf-microsite/docs/category/ms3-construction" className={styles.milestoneCard}>
    <div className={styles.milestoneHeader}>
      <h2>MS3</h2>
      <span className={`${styles.milestoneBadge} ${styles.done}`}>Done</span>
    </div>
    <h3>Construction</h3>
    <div className={styles.milestoneFooter}>
      <span className={styles.viewButton}>View Details →</span>
    </div>
  </Link>
</div>
