'use client';
import React, { useState } from 'react';
import styles from '../../styles/login/EditEventModal.module.css';
import { FaWindowClose } from 'react-icons/fa';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase';

const EditEventModal = ({ children, shown, close, event }) => {
  // Updatera Event

  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('');
  const [newDate, setNewDate] = useState(null);
  const [newLink, setNewLink] = useState('');

  const updateEvent = async (id, title) => {
    const eventDoc = doc(db, 'events', id);
    const newFields = {
      title: newTitle,
      text: newText,
      date: newDate,
      link: newLink
    };
    await updateDoc(eventDoc, newFields);
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

        <div>
          <form
            onSubmit={(e) => {
             
              updateEvent(event.id, event.title, event.text, event.date, event.link);
            }}
          >
            <input
              type="text"
              value={newTitle}
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
            />
            <input
              type="text"
              value={newText}
              onChange={(e) => {
                setNewText(e.target.value);
              }}
            />
            <input
              type="date"
              value={newDate}
              onChange={(e) => {
                setNewDate(e.target.value);
              }}
            />
            <input
              type="text"
              value={newLink}
              onChange={(e) => {
                setNewLink(e.target.value);
              }}
            />

            <button type="submit">Change name</button>
          </form>
          ;
        </div>
      </div>

      {children}
    </div>
  ) : null;
};

export default EditEventModal;
