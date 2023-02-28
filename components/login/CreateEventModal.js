'use client';
import React, { useState } from 'react';
import styles from '../../styles/login/CreateEventModal.module.css';
import { FaWindowClose } from 'react-icons/fa';
import { addDoc } from 'firebase/firestore';

const CreateEventModal = ({ children, shown, close, eventsCollectionRef }) => {
  // Skapa event
  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('');
  const [newDate, setNewDate] = useState(null);
  const [newLink, setNewLink] = useState('');

  const createEvent = async (e) => {
    e.preventDefault();
   
    if (newTitle === "" || newText === "" || newDate === null) {
      return;
    }
     else { 
      try {
        await addDoc(eventsCollectionRef, {
          title: newTitle,
          text: newText,
          date: newDate,
          link: newLink,
        });

        window.location.reload();
      } catch (error) {
        console.log(error);
      }
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

        <form className={styles.mainContainer}>
          <div className={styles.titleContainer}>
        <div className={styles.errorContainer}>
              <p>Title:</p>
              {<p className={styles.errorMessage}> * Obligatoriskt fält  </p>}
            </div>
            <input
              type="text"
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.errorContainer}>
              <p>Text:</p>
              {<p className={styles.errorMessage}> * Obligatoriskt fält  </p>}
            </div>
            <textarea
              type="text"
              onChange={(e) => {
                setNewText(e.target.value);
              }}
            />
          </div>
          <div className={styles.dateContainer}>
            <div className={styles.errorContainer}>
              <p>Date:</p>
              {<p className={styles.errorMessage}> * Obligatoriskt fält  </p>}
            </div>
            <input
              type="date"
              onChange={(e) => {
                setNewDate(e.target.value);
              }}
            />
          </div>
          <div className={styles.linkContainer}>
            <p>Länk:</p>
            <input
              type="link"
              onChange={(e) => {
                setNewLink(e.target.value);
              }}
            />
          </div>
          <div className={styles.createBtnContainer}>
            <button onClick={createEvent}>Skapa Event</button>
          </div>
        </form>
      </div>

      {children}
    </div>
  ) : null;
};

export default CreateEventModal;
