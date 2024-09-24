import Header from '../components/header';
import sharedStyles from '../styles/shared.module.css';
import Link from 'next/link'; // Import Link from Next.js
import React from 'react';

import Io from '../components/svgs/io';

export default function Index() {
  return (
    <>
      <Header />


        <div className={sharedStyles.layout}>
        
          <a href="mailto:rohitb@path-integral.com?subject=AI Native Game Engine">
            <Io text= "Click To Start" color="#DA70D6" />
          </a>

          <br />
          <br />

          <p> This is an unregistered venture <br /> raising a <span style={{ color: "#DAA520" }}>PRE SEED</span> round 
            <br /> for building <span style={{ color: "#191970" }}>AI NATIVE GAME ENGINE.</span>
        </p>
        
      </div>
      

    </>
  );
}