
import Header from '../components/header';
import sharedStyles from '../styles/shared.module.css';

// The 'Link' and 'React' imports were removed because they were unused.

export default function Agency() {
  return (
    <>
      <Header />
      <div className={sharedStyles.layout}>
        <a href="https://pathintegral0.notion.site/Ventures-AI-Native-Game-Engine-d5c888bb53304b80b1faa8feb852cb7e?pvs=4">ANNA + SOLO FAQ</a>
        <a href="#">Communication FAQ</a>
        <a href="#">Personal FAQ</a>
        <a href="#">Current Affairs FAQ</a>
        <a href="#">Insights</a>
      </div>

      
   
    </>
  );
  
}
