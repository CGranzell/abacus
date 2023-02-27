import React, { useState } from 'react';
import styles from '../../styles/login/EventTableRow.module.css';
import { MdEdit, MdDelete } from 'react-icons/md';
import EditEventModal from './EditEventModal';
import {  doc, deleteDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import LoadingSpinner from "../../components/LoadingSpinner";

const EventTableRow = ({ event }) => {
  // Modal För Att Uppdatera Event
  const [editModalShown, toggleEditModalShown] = useState(false);

   // Spinner
   const [isLoading, setIsLoading] = useState(false);

  // Radera Event
  const deleteEvent = async (e,id) => {
    const eventDoc = doc(db, 'events', id);
    e.preventDefault();
    await deleteDoc(eventDoc);
  };

  return (
    <>
      <EditEventModal
        key={event.id}
        event={event}
        shown={editModalShown}
        close={() => {
          toggleEditModalShown(false);
        }}
      />

      <tr className={styles.tr}>
        <td className={styles.tdTitle}>{event.title.substring(0, 20)}</td>
        <td>{event.text.substring(0, 30)}...</td>
        <td>
          <p>{event.date}</p>
        </td>
        <td>{event.link.substring(0, 20)}</td>
        <td className={styles.tdBtns}>
          <div className={styles.wrapperBtns}>
            <MdEdit
              onClick={toggleEditModalShown}
              className={styles.iconEdit}
            />
            <form
              onSubmit={(e) => {
               
                deleteEvent(event.id);
              }}
            >
              <button type="submit" className={styles.iconDelete}>
                <MdDelete />
              </button>
            </form>
          </div>
        </td>
      </tr>
    </>
  );
};

export default EventTableRow;
