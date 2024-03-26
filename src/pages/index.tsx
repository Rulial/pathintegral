

import Header from '../components/header';
import sharedStyles from '../styles/shared.module.css';
import Link from 'next/link'; // Import Link from Next.js
import React from 'react';

// this website is a massively redacted version of https://github.com/ijjk/notion-blog--> thank you.

export default function Index() {
  return (
    <>
      <Header />
      
      <div className={sharedStyles.layout}>
        {/* Use Next.js's Link component for internal navigation */}
        <Link href="/Debrief">
        <img
          src="/Imagine.jpeg"
          height="640"
          width="640"
          alt="A?I"
        />
        </Link>
      </div>
    </>
  )
}
