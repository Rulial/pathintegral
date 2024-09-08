import ExtLink from './ext-link'

import contactStyles from '../styles/contact.module.css'
import React from 'react';

// Your component code here


import Xicon from '../components/svgs/Xicon'
import Envelope from '../components/svgs/envelope'
import Notion from '../components/svgs/notion'

const footer = [
  {
    Comp: Xicon,
    alt: 'twitter icon',
    link: 'https://twitter.com/pathintegral0',
  },
  
  {
    Comp: Notion,
    alt: 'notion icon',
    link: 'https://pathintegral0.notion.site/PATH-INTEGRAL-9ac7252efb2a4b43a7411fc26f5d1a50?pvs=4',
  },
  
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:hello@path-integral.com?subject=metagame',
  },

  
]

export default function Footer() {
  return (
    <>
      <footer>
        <span></span>
        
        <span> 
          {' '}
          <ExtLink href="">
           
          </ExtLink>
          
        </span>
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
      </footer>
    </>
  )
}
