'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/upComingEvents/UpComingEvents.module.css';
import EventCard from './EventCard';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore'


const UpComingEvents = ( ) => {
  // Alla Events
  const [events, setEvents] = useState([]);

  // const eventsRef = useRef();

  // Referens till databasen 
  const eventsCollectionRef = collection(db, "events");

      // Hämtar events
  useEffect(() => {
      const getEvents = async () => {
        const data = await getDocs(eventsCollectionRef);
        console.log(data);
        setEvents(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        
      } 

      getEvents();
  }, [])
  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <h1>Kommande Events</h1>
      
      </div>
      <div  className={styles.cardContainer}>
     
        {events.slice(0, 6).map((event) => {
          
          return (
            
            <EventCard key={event.id} event={event}/>
            
          )
        })}
      
      </div>
    </div>
  )
}

export default UpComingEvents