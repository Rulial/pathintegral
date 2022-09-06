import ExtLink from './ext-link'

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
      </footer>
    </>
  )
}
