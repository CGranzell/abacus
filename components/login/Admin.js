'use client';
import React, { useState, useEffect } from 'react';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';
import styles from '../../styles/login/Admin.module.css';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import CreateEventModal from './CreateEventModal';
import { MdAddBox } from 'react-icons/md';
import EventTableRow from './EventTableRow';

const Admin = ({ setIsLoggedIn, user }) => {
  // Alla Events
  const [events, setEvents] = useState([]);

    // Spinner
    const [isLoading, setIsLoading] = useState(false);

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
  }, []);

  // Loggar ut
  const logOut = async () => {
    setIsLoading(true);
    await signOut(auth);
    setIsLoggedIn(false);
    setIsLoading(false);
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
          <p>Du är inloggad som {user.email}</p>
          <button onClick={logOut}>Logga ut</button>
        </div>

        <div className={styles.addEventBtnContainer}>
          <button onClick={toggleCreateModalShown}>Lägg till event <MdAddBox className={styles.addIcon}/></button>
        </div>
        <div className={styles.h2Container}>
          <h2>Events</h2>
        </div>
        {/* tabell med event data */}
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
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
      </div>
    </>
  );
};

export default Admin;
