'use client';
import React, { useState, useEffect } from 'react';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';
import styles from './page.module.css';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import CreateEventModal from '../../../components/login/CreateEventModal';
import { useRouter } from 'next/router'

const Admin = ({ setIsLoggedIn, user }) => {
  // Alla Events
  const [events, setEvents] = useState([]);

   

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
    await signOut(auth);
    setIsLoggedIn(false);
  };

  // Modal
  const [modalShown, toggleModal] = useState(false);

  return (
    <>
    <CreateEventModal eventsCollectionRef={eventsCollectionRef}
      // date={date}
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}/>
    
    <div className={styles.mainContainer}>
    {/* user name och logout */}
      <div className={styles.userCredContainer}>
          <p>Du är inloggad som {user.email}</p>
          <button onClick={logOut}>Logga ut</button>
      </div>

      <div className={styles.addEventBtnContainer}>
          <button onClick={toggleModal}>Lägg till event +</button>
          
      </div>
            <div className={styles.h2Container}><h2>Events</h2></div>
      {/* tabell med event data */}
      <div className={styles.tableContainer}>
        <table>
        <thead>

          <tr>
            <th>Titel</th>
            <th>Text</th>
            <th>Datum</th>
            <th>Länk</th>
            <th>Ändra</th>
            <th>Ta bort</th>
          </tr>
        </thead>
          {events.map((event) => {
            // Konverterar datum till rätt format
            {/* const date = event.date.toDate().toDateString(); */}
            return (
              <>
              <tbody>

                <tr>
                  <td>{event.title}</td>
                  <td>{event.text}</td>
                  <td>
                    {' '}
                    {/* <p>{date.substring(4, date.length - 4)}</p>{' '}
                    <p>{date.slice(10)}</p> */}
                    <p>{event.date}</p>
                  </td>
                  <td>{event.link}</td>
                  <td>Ändra</td>
                  <td>Ta bort</td>
                </tr>
              </tbody>
              </>
            );
          })}
        </table>
      </div>
    </div>
    </>
  );
};

export default Admin;
