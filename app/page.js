'use client';
import React from 'react';
import UpComingEvents from '@/components/upComingEvents/UpComingEvents';
import WelcomeSection from '@/components/welcomeSection/WelcomeSection';
import styles from './page.module.css'



export default function Home() {
  

  // const eventsRef = useRef();

  return (
   <div className={styles.mainContainer}>
    <WelcomeSection />
    <UpComingEvents />
   </div>
  )
}
