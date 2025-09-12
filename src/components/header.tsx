
import Head from 'next/head';
import Link from 'next/link';
import ExtLink from './ext-link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';
import React from 'react';

const navItems = [
  { label: 'AGENCY BLOG', link: 'src/pages/agency.tsx' }, // Add a 'page' property here
];

const ogImageUrl = '';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <Head>
        <title>AI Native Operating Engine </title>
        <meta
          name="description"
          content="ANNA+SOLO"
        />

        <meta name="og:title" content="imagintion>0" />
       
      </Head>

      <ul>
        {navItems.map(({ label, link }) => (
          <li key={label}>
             {link ? (
             <Link href={link}>
                <a className={pathname === link ? 'active' : undefined}>
                  {label}
                </a>
              </Link> 
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>

    </header>
  );
};

export default Header;

