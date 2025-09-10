import Header from '../components/header';
import sharedStyles from '../styles/shared.module.css';
import Link from 'next/link'; // Import Link from Next.js
import React from 'react';

import Logo from '../components/svgs/logo';

export default function Index() {
  return (
    <>
      <Header />


        <div className={sharedStyles.layout}>
        
          <a href="mailto:rohitb@path-integral.com?subject=AI Native Game Engine-Funding Secured!">
            <Logo />
          </a>

          <br />
          <br />

          <p>
  This is an unregistered venture <br />
  raising a <span style={{ color: "#DAA520", backgroundColor: "#F0F0F0", padding: "2px", borderRadius: "2px" }}>PRE SEED</span> round
  <br />
  for building <span style={{ color: "#191970", backgroundColor: "#F0F0F0", padding: "2px", borderRadius: "2px" }}>AI NATIVE GAME ENGINE.</span>
</p>
        
      </div>
      

    </>
  );
}