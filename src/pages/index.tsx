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
            <Io text= "Click To Start" color="#9370DB" />
          </a>

          <br />
          <br />

          <p> This is an unregistered venture <br /> raising a PRE SEED round 
            <br /> for building AI NATIVE GAME ENGINE.
        </p>
        
      </div>
      

    </>
  );
}