{/* import Head from 'next/head';
import Link from 'next/link';
import ExtLink from './ext-link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';
import React from 'react';

const navItems = [
  { label: 'IMAGINATION > 0' },
];

const ogImageUrl = '';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <Head>
        <title>PI? </title>
        <meta
          name="description"
          content="ANNA"
        />
        
        <meta name="og:title" content="A?I" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@pathintegral0" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
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

export default Header; */}

import Head from 'next/head';
import Link from 'next/link';
import ExtLink from './ext-link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';
import React from 'react';

const navItems = [
  { label: 'IMAGINATION > 0', link: 'https://www.notion.so/pathintegral0/PATH-INTEGRAL-6362babe30bf433f9ebdbf02aa7212e2?pvs=4' }, // Add a 'page' property here
];

const ogImageUrl = '';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <Head>
        <title>PI? </title>
        <meta
          name="description"
          content="ANNA"
        />

        <meta name="og:title" content="A?I" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@pathintegral0" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
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

