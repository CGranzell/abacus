'use client';
import React, { useState, useEffect } from 'react';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';
import styles from '../../styles/login/Admin.module.css';
import { db } from '@/firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import CreateEventModal from './CreateEventModal';
import EditEventModal from './EditEventModal';
import { MdEdit, MdDelete } from 'react-icons/md'

const Admin = ({ setIsLoggedIn, user }) => {
  // Alla Events
  const [events, setEvents] = useState([]);
  

  //  const { id, title, date, text, link } = events;

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
      {/* <EditEventModal
            key={event.id}
            event={event}
            shown={editModalShown}
            close={() => {
              toggleEditModalShown(false);
            }}
          /> */}
        
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
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.thTitle}>Titel</th>
                <th className={styles.thText}>Text</th>
                <th className={styles.thDate}>Datum</th>
                <th className={styles.thLink}>Länk</th>
                <th className={styles.thEdit}>Redigera</th>
                {/* <th>Ta bort</th> */}
              </tr>
            </thead>
            {events.map((event) => {
              return (
                <tbody key={event.id} className={styles.tBody}>
                  <tr >
                    <td className={styles.tdTitle}>{event.title.substring(0,20)}</td>
                    <td>{event.text.substring(0,30)}...</td>
                    <td>
                      <p>{event.date}</p>
                    </td>
                    <td>{event.link.substring(0,20)}</td>
                    <td className={styles.tdBtns}>
                    <div className={styles.wrapperBtns}>

                    

                      <MdEdit onClick={toggleEditModalShown} className={styles.iconEdit}/>
                      <form onSubmit={() => {
                      deleteEvent(event.id) 
                    }} >
                   
                      <button type='submit' className={styles.iconDelete}><MdDelete /></button>
                    </form>
                    </div>
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
