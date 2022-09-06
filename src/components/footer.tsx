import ExtLink from './ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'


import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import Notion from '../components/svgs/notion'
import Discord from '../components/svgs/discord'

const footer = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/pathintegral0',
  },
  
  {
    Comp: Notion,
    alt: 'notion icon',
    link: 'https://pathintegral0.notion.site/PATH-INTEGRAL-6362babe30bf433f9ebdbf02aa7212e2',
  },
  
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:hello@path-integral.com?subject=metagame',
  },

  {
    Comp: Discord,
    alt: 'discord icon',
    link: '#',
  },
]

export default function Footer() {
  return (
    <>
      <footer>
        <span></span>
        <ExtLink href="https://app.path-integral.com">
          <img
            src="/PI0MASTER.png"
            height={70}
            width={46}
            alt="building metaverse"
          />
        </ExtLink>
        <span> 
          BUILDING {' '}
          <ExtLink href="https://twitter.com/pathintegral0">
           THE METAVERSE @ PATH INTEGRAL INC
          </ExtLink>
          
        </span>

         <div className={contactStyles.links}>
          {footer.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </footer>
    </>
  )
}
