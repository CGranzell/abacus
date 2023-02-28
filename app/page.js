'use client';
import React, { useRef } from 'react';
import UpComingEvents from '@/components/upComingEvents/UpComingEvents';
import WelcomeSection from '@/components/welcomeSection/WelcomeSection';
import styles from './page.module.css'



export default function Home() {

  // ref till kommande events
  const upComingEventsRef = useRef();

  // scroll till events
  function handleBackClick() {
    upComingEventsRef.current.scrollIntoView({ behavior: 'smooth' })
}

  return (
   <div className={styles.mainContainer}>
    <WelcomeSection onBackClick={handleBackClick}/>
    <UpComingEvents ref={upComingEventsRef}/>
   </div>
  )
}
