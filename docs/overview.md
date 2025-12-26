---
id: overview
title: Overview
slug: /
---

import Link from '@docusaurus/Link';
import styles from '@site/src/css/overview.module.css';

# Documentation overview

<div className={styles.overviewGrid}>
  <Link to="/docs/Milestones/" className={styles.overviewCard}>
    <h3 className={styles.cardTitle}>Milestones</h3>
    <p className={styles.cardDescription}>Project progress through development milestones (MS): MS1, MS2...</p>
  </Link>

  <Link to="/docs/category/meetings" className={styles.overviewCard}>
    <h3 className={styles.cardTitle}>Meetings</h3>
    <p className={styles.cardDescription}>Meeting minutes and project discussion.</p>
  </Link>
</div>

<style>{`
  [data-theme='dark'] .overview-card {
    background: var(--ifm-card-background-color);
    border-color: var(--color-border);
  }
  [data-theme='dark'] .overview-card:hover {
    border-color: var(--ifm-color-primary);
    box-shadow:
      0 12px 28px rgba(96, 165, 250, 0.25),
      0 24px 48px rgba(0, 0, 0, 0.3);
  }
  [data-theme='dark'] .card-title {
    background: linear-gradient(135deg, var(--ifm-color-primary-light) 0%, var(--ifm-color-primary-lighter) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  [data-theme='dark'] .overview-card:hover .card-title {
    background: linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-lighter) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`}</style>

---
