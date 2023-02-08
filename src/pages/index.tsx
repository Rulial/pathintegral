import type { NextPage } from 'next'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'
import Image from 'next/image'

export default function Index() {
  return (
    <>
    
    <Header />
      
      <div className={sharedStyles.layout}>
        
      <img
          src="/mg01.png"
          height="640"
          width="640"
          alt="finally, a computer that asks questions."
        />
        

      
  
        </div>
      
    </>
  )
}
