'use client';
import React, { useState } from 'react';
import styles from '../../styles/login/CreateEventModal.module.css';
import { FaWindowClose } from 'react-icons/fa';
import { addDoc } from 'firebase/firestore';

const CreateEventModal = ({ children, shown, close, eventsCollectionRef }) => {

  // Skapa event
  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");
  const [newDate, setNewDate] = useState(null);
  const [newLink, setNewLink] = useState("");
 
  const createEvent = async () => {
   await addDoc(eventsCollectionRef, {title: newTitle, text: newText, date: newDate, link: newLink})
   }

   const onSubmit = (e) => {
    // e.preventDefault()
   }

  return shown ? (
    <div
      className={styles.modalBackdrop}
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <FaWindowClose className={styles.closeBtn} onClick={close} />

        <div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Titel"
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Text"
              onChange={(e) => {
                setNewText(e.target.value);
              }}
            />
            <input
              type="date"
              placeholder="Datum"
              onChange={(e) => {
                setNewDate(e.target.value);
              }}
            />
            <input
              type="link"
              placeholder="Länk"
              onChange={(e) => {
                setNewLink(e.target.value);
              }}
            />
            <button onClick={createEvent}>Skapa Event</button>
          </form>
        </div>
      </div>

      {children}
    </div>
  ) : null;
};

export default CreateEventModal;
