---
id: overview
title: Overview
slug: /
---

import React from 'react';
import Link from '@docusaurus/Link';

# Documentation overview

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5rem',
  marginTop: '2rem',
  marginBottom: '2rem'
}}>
  <Link to="/docs/Milestones/" style={{
    textDecoration: 'none',
    color: 'inherit',
    background: '#ffffff',
    border: '2px solid rgba(59, 130, 246, 0.2)',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(59, 130, 246, 0.05), 0 10px 15px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-8px)';
    e.currentTarget.style.borderColor = '#3b82f6';
    e.currentTarget.style.boxShadow = '0 12px 24px rgba(59, 130, 246, 0.2), 0 20px 40px rgba(0, 0, 0, 0.12)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
    e.currentTarget.style.boxShadow = '0 4px 6px rgba(59, 130, 246, 0.05), 0 10px 15px rgba(0, 0, 0, 0.08)';
  }}>
    <h3 style={{
      fontSize: '1.5rem',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0.75rem'
    }}>Milestones</h3>
    <p style={{
      color: '#64748b',
      fontSize: '1rem',
      lineHeight: '1.6',
      margin: 0
    }}>Project progress through development milestones (MS): MS1, MS2...</p>
  </Link>

  <Link to="/docs/meetings/meetings-overview" style={{
    textDecoration: 'none',
    color: 'inherit',
    background: '#ffffff',
    border: '2px solid rgba(59, 130, 246, 0.2)',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(59, 130, 246, 0.05), 0 10px 15px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-8px)';
    e.currentTarget.style.borderColor = '#3b82f6';
    e.currentTarget.style.boxShadow = '0 12px 24px rgba(59, 130, 246, 0.2), 0 20px 40px rgba(0, 0, 0, 0.12)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
    e.currentTarget.style.boxShadow = '0 4px 6px rgba(59, 130, 246, 0.05), 0 10px 15px rgba(0, 0, 0, 0.08)';
  }}>
    <h3 style={{
      fontSize: '1.5rem',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0.75rem'
    }}>Meetings</h3>
    <p style={{
      color: '#64748b',
      fontSize: '1rem',
      lineHeight: '1.6',
      margin: 0
    }}>Meeting minutes and project discussion.</p>
  </Link>
</div>

---
