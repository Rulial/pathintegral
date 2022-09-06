import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'


import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import Notion from '../components/svgs/notion'
import Discord from '../components/svgs/discord'

const contacts = [
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

export default function Contact() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <div className={contactStyles.avatar}>
          <img src="/avtar-contact.png" alt="metagame" height={60} />
        </div>

        <h1 style={{ marginTop: 0 }}></h1>

        <div className={contactStyles.name}>
          Lets build the future of {' '}
          <ExtLink href=""> work and play!</ExtLink>
        </div>

        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </div>
    </>
  )
}
