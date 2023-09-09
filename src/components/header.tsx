import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
 // { label: 'PATH INTEGRAL', page: '/' },
  
  { label: 'VENTURES', link: 'https://www.notion.so/pathintegral0/Ventures-f538ee0d88a44ed8ab2130cf692084bd?pvs=4' },
]

const ogImageUrl = ''

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} PI? </title>
        <meta
          name="description"
          content="METAGAME FOR THE METAVERSE"
        />
        <meta name="og:title" content="A?I" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@pathintegral0" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
