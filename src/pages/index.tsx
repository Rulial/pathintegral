import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="METAGAME" />
      <div className={sharedStyles.layout}>
        <img
          src="/metaverse02.png"
          height="1080"
          width="1920"
          alt="metaverse"
        />
        <h1> imagination >0 </h1>
        <h2>

          <ExtLink
            href=""
            className="dotted"
            style={{ color: 'inherit' }}
          >
          A GAME THAT IS PLAYING ITSELF
          </ExtLink>
        </h2>

        <Features />

     

        <div className="explanation">
          
            <img
          src="/metafow03.png"
          height="689"
          width="1920"
          alt="metaverse"
        />
          <p>
        ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL /
          </p>
        </div>
      </div>
    </>
  )
}
