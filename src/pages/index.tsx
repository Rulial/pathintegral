import type { NextPage } from 'next'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'
import Image from 'next/image'

export default function Index() {
  return (
    <>
      <Header titlePre="METAGAME" />
      
      <div className={sharedStyles.layout}>
        
      <img
          src="/metaverse02.png"
          height="1024"
          width="1024"
          alt="made with midjourney"
        />
        

        <Features />
        <img
          src="/metafow03.png"
          height="689"
          width="1920"
          alt="PI01"
        />
        </div>
      
    </>
  )
}
