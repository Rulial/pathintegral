import ExtLink from './ext-link'

import contactStyles from '../styles/contact.module.css'
import React from 'react';

// Your component code here

import Xicon from '../components/svgs/Xicon'
import Envelope from '../components/svgs/envelope'
import Notion from '../components/svgs/notion'
import Substack from '../components/svgs/substack'
import Instagram from '../components/svgs/instagram'
import Signal from '../components/svgs/signal'
import Bluesky from '../components/svgs/bluesky'
import FAQicon from '../components/svgs/Faq'


const footer = [
  
  {
    Comp: Notion,
    alt: 'notion icon',
    link: 'https://pathintegral0.notion.site/Path-Integral-AI-Native-Game-Engine-d5c888bb53304b80b1faa8feb852cb7e?pvs=25',
  },
  
  {
    Comp: FAQicon,
    alt: 'FAQ icon',
    link: 'https://pathintegral0.notion.site/ANNA-SOLO-FAQ-ed09f44607894d988c39d3c37c3a593f?pvs=4',
  },

  {
    Comp: Xicon,
    alt: 'twitter icon',
    link: 'https://twitter.com/pathintegral23',
  },

  {
    Comp: Substack,
    alt: 'substack icon',
    link: 'https://pathintegral.substack.com/',
  },

  {
    Comp: Instagram,
    alt: 'instagram icon',
    link: 'https://instagram.com/pathintegral0',
  },

  {
    Comp: Threads,
    alt: 'thread icon',
    link: 'https://www.threads.com/@pathintegral0',
  },

  
  {
    Comp: Bluesky,
    alt: 'bluesky icon',
    link: 'https://bsky.app/profile/pathintegral.bsky.social',
  },


]

export default function Footer() {
  return (
    <>
      <footer>
        <span>
          <text> 
            </text> 
            </span>
        
      
         <div className={contactStyles.links}>
          {footer.map(({ Comp, link, alt }) => {
            return (
              <a key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </a>
            )
          })}
        </div>
        <br />
        <span> 
          {'©️ Path Integral 2025 🗽'}
          <ExtLink href="https://pathintegral0.notion.site/Privacy-Policy-1ee06e48617541d99aee889d0f57f8dd?pvs=25">
           <br /> <text> Privacy Policy. </text>
          </ExtLink>
          
        </span>
      </footer>
    </>
  )
}
