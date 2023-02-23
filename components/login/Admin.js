'use client';
import React, { useState, useEffect } from 'react';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';
import styles from '../../styles/login/Admin.module.css';
import { db } from '@/firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import CreateEventModal from './CreateEventModal';
import EditEventModal from './EditEventModal';

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

  // Radera Event
  const deleteEvent = async (id) => {
    const eventDoc = doc(db, 'events', id);
    await deleteDoc(eventDoc);
  };

  // Modal För Att skapa Event
  const [createModalShown, toggleCreateModalShown] = useState(false);
  // Modal För Att Uppdatera Event
  const [editModalShown, toggleEditModalShown] = useState(false);

  return (
    <>
      {events.map((event) => {
        return (
          <EditEventModal
            key={event.id}
            event={event}
            shown={editModalShown}
            close={() => {
              toggleEditModalShown(false);
            }}
          />
        );
      })}
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
          <button onClick={toggleCreateModalShown}>Lägg till event +</button>
        </div>
        <div className={styles.h2Container}>
          <h2>Events</h2>
        </div>
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
              return (
                <tbody key={event.id}>
                  <tr>
                    <td>{event.title}</td>
                    <td>{event.text}</td>
                    <td>
                      <p>{event.date}</p>
                    </td>
                    <td>{event.link}</td>
                    <td>
                      <button onClick={toggleEditModalShown}>Ändra</button>
                    </td>
                    <td>
                    <form onSubmit={() => {
                      deleteEvent(event.id)
                    }}>
                      <button type='submit'>Radera</button>
                    </form>
                      
                    </td>
                  </tr>
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
