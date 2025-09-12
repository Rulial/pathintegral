
import Link from 'next/link';
import ExtLink from './ext-link';
import styles from '../styles/header.module.css';

import React from 'react';

// Renamed the component to 'PathIntegralHeader' to avoid conflict
export default function PathIntegralHeader() {
  const navItems = [
    { label: 'Path Integral', link: '/' },
  ];

  return (
    <header className={styles.header}>
      <ul>
        {navItems.map(({ label, link }) => (
          <li key={label}>
            {link ? (
              <Link href={link}>
                {label}
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
}