'use client';
import React, { useState, useEffect } from 'react';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';
import styles from '../../styles/login/Admin.module.css';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import CreateEventModal from './CreateEventModal';
import { HiPlusSm } from 'react-icons/hi';
import EventTableRow from './EventTableRow';
import LoadingSpinner from '../LoadingSpinner';

const Admin = ({ setIsLoggedIn, user }) => {
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

  // Loggar ut
  const logOut = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
  };

  // Modal För Att skapa Event
  const [createModalShown, toggleCreateModalShown] = useState(false);

  return (
    <>
      <CreateEventModal
        eventsCollectionRef={eventsCollectionRef}
        shown={createModalShown}
        close={() => {
          toggleCreateModalShown(false);
        }}
      />

      <div className={styles.mainContainer}>
        {/* user name och logout */}
        <div className={styles.userCredContainer}>
          <p>
            Du är inloggad som <br /> {user.email}
          </p>
          <button onClick={logOut}>Logga ut</button>
        </div>

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {/* tabell med event data */}
            <div className={styles.tableContainer}>
              <div className={styles.rowAboveTable}>
                <h2>Events</h2>
                  <button onClick={toggleCreateModalShown} className={styles.addEventBtn} > 
                    Skapa nytt event <HiPlusSm className={styles.addIcon} />
                  </button>
              </div>
              <table className={styles.table}>
                  
                <thead className={styles.thead}>
                  <tr >

                    <th className={styles.thTitle}>Titel</th>
                    <th className={styles.thText}>Text</th>
                    <th className={styles.thDate}>Datum</th>
                    <th className={styles.thLink}>Länk</th>
                    <th className={styles.thEdit}>Redigera</th>
                  </tr>
                </thead>
                 
                {events.map((event) => {
                  return (
                    <tbody key={event.id} className={styles.tBody}>
                      <EventTableRow event={event} />
                    </tbody>
                  );
                })}
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Admin;
