'use client';
import React, { useState } from 'react';
import styles from '../../styles/login/EditEventModal.module.css';
import { FaWindowClose } from 'react-icons/fa';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase';

const EditEventModal = ({ children, shown, close, event }) => {
  // Updatera Event

  const [newTitle, setNewTitle] = useState(event.title);
  const [newText, setNewText] = useState(event.text);
  const [newDate, setNewDate] = useState(event.date);
  const [newLink, setNewLink] = useState(event.link);

  const updateEvent = async (id) => {
    const eventDoc = doc(db, 'events', id);
    const newFields = {
      title: newTitle,
      text: newText,
      date: newDate,
      link: newLink
    };

    try {

      await updateDoc(eventDoc, newFields);
    } catch(error) {
          console.log(error);
    }

  };

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

        
          <form className={styles.mainContainer}
            onSubmit={(e) => {
             e.preventDefault();
            //  window.location.reload();
             close();
              updateEvent(event.id, event.title, event.text, event.date, event.link);
            }}
          >
          <div className={styles.titleContainer}>
            <p>Titel :</p>
            <input
              type="text"
              
              value={newTitle}
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
            />
            </div>
            <div className={styles.textContainer}>
            <p>Text:</p>
            <textarea
              type="text"
              value={newText}
              onChange={(e) => {
                setNewText(e.target.value);
              }}
            />
            </div>
            <div className={styles.dateContainer}>
            <p>Datum:</p>
            <input
              type="date"
              value={newDate}
              onChange={(e) => {
                setNewDate(e.target.value);
              }}
            />
            </div>
            <div className={styles.linkContainer}>
            <p>Länk:</p>
            <input
              type="text"
              value={newLink}
              onChange={(e) => {
                setNewLink(e.target.value);
              }}
            />
            </div>
            <div className={styles.createBtnContainer}>

            <button type="submit">Change name</button>
            </div>
          </form>
          
        
      </div>

      {children}
    </div>
  ) : null;
};

export default EditEventModal;
