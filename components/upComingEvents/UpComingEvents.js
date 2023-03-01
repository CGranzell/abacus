'use client';
import React, { useState, useEffect, forwardRef } from 'react';
import styles from '../../styles/upComingEvents/UpComingEvents.module.css';
import EventCard from './EventCard';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import LoadingSpinner from '../LoadingSpinner';

const UpComingEvents = forwardRef(({ onBackClick }, ref) => {
  // Alla Events
  const [events, setEvents] = useState([]);

  // Spinner
  const [isLoading, setIsLoading] = useState(true);

  // Referens till databasen
  const eventsCollectionRef = collection(db, 'events');

  // Hämtar events
  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(eventsCollectionRef);
      console.log(data);
      setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEvents();
    setIsLoading(false);
  }, []);

  // Sorterar events efter datum
  const sortedEvents = events.sort(function (date1, date2) {
    return date1 - date2;
  });

  console.log(sortedEvents);

  return (
    <div className={styles.mainContainer} ref={ref}>
      <div className={styles.headerContainer}>
        <h1>Kommande Events</h1>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.cardContainer}>
          {sortedEvents.slice(0, 6).map((event) => {
            return <EventCard key={event.id} event={event} />;
          })}
        </div>
      )}
    </div>
  );
});

export default UpComingEvents;
