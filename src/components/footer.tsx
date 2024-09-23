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


const footer = [
  {
    Comp: Xicon,
    alt: 'twitter icon',
    link: 'https://twitter.com/pathintegral0',
  },
  
  {
    Comp: Notion,
    alt: 'notion icon',
    link: 'https://pathintegral0.notion.site/Path-Integral-AI-Native-Game-Engine-d5c888bb53304b80b1faa8feb852cb7e?pvs=25',
  },
  
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:hello@path-integral.com?subject=AI Native Game Engine',
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
    Comp: Signal,
    alt: 'signal icon',
    link: 'https://signal.me/#eu/T1Y9fQNYp2vuX-WuyfmYDYdLbTZlXLjLQVnddtQtUivXYubqlvhPv6Vh-5KIMiUe',
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
          <text> Do read the FAQ on Notion.
            </text> 
            </span>
        
      
<br />
<br />
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
          {'©️Path Integral 2024-2025.'}
          <ExtLink href="https://pathintegral0.notion.site/Privacy-Policy-1ee06e48617541d99aee889d0f57f8dd?pvs=25">
           <text> Privacy Policy. 🗽 </text>
          </ExtLink>
          
        </span>
      </footer>
    </>
  )
}
