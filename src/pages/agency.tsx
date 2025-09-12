
import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'; // Import Link from Next.js
import React from 'react';



// this website is a massively redacted version of https://github.com/ijjk/notion-blog--> thank you.

export default function Agency() {
  return (
    <>
    
    <Header />
      

        <div className={sharedStyles.layout}>
          <a href="https://pathintegral0.notion.site/Ventures-AI-Native-Game-Engine-d5c888bb53304b80b1faa8feb852cb7e?pvs=4"> ANNA + SOLO FAQ</a>
          
         <a href=""> Communication FAQ </a>
         <a href=""> Personal FAQ </a>
         <a href=""> Current Affairs FAQ</a>
         <a href=""> Isights </a>
          
       </div>
      
    </>
  )
}
