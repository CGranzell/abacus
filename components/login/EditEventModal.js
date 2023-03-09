'use client';
import React, { useState } from 'react';
import styles from '../../styles/login/EditEventModal.module.css';
import { GrClose } from 'react-icons/gr';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase';
import LoadingSpinner from '../../components/LoadingSpinner';

const EditEventModal = ({ children, shown, close, event }) => {
  // validering
  const [isValid, setIsValid] = useState(false);

  // Spinner
  const [isLoading, setIsLoading] = useState(false);

  // Updatera Event
  const [newTitle, setNewTitle] = useState(event.title);
  const [newText, setNewText] = useState(event.text);
  const [newDate, setNewDate] = useState(event.date);
  const [newTime, setNewTime] = useState(event.time);
  const [newLink, setNewLink] = useState(event.link);
  const [newLocation, setNewLocation] = useState(event.location);

  const updateEvent = async (id) => {
    if (newTitle === '' || newText === '' || newDate === '') {
      setIsValid(false);
    } else {
      setIsLoading(true);
      const eventDoc = doc(db, 'events', id);
      const newFields = {
        title: newTitle,
        text: newText,
        date: newDate,
        time: newTime,
        link: newLink,
        location: newLocation,
      };

      try {
        await updateDoc(eventDoc, newFields);
        window.location.reload();
        setIsValid(true);
        setIsLoading(false);
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
        <GrClose className={styles.closeBtn} onClick={close} />
        <form
          className={styles.mainContainer}
          onSubmit={(e) => {
            e.preventDefault();

            updateEvent(
              event.id,
              event.title,
              event.text,
              event.date,
              event.time,
              event.link,
              event.location
            );
          }}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <div className={styles.requiredContainer}>
                * = Obligatoriskt fält
              </div>
              <div className={styles.titleContainer}>
                <div className={styles.formTitleContainer}>
                  <p>Titel</p>
                  {!isValid && <p className={styles.errorMessage}>*</p>}
                </div>
                <input
                  className={styles.input}
                  type="text"
                  value={newTitle}
                  onChange={(e) => {
                    setNewTitle(e.target.value);
                  }}
                />
              </div>
              <div className={styles.textContainer}>
                <div className={styles.formTitleContainer}>
                  <p>Text</p>
                  {!isValid && <p className={styles.errorMessage}>*</p>}
                </div>

                <textarea
                  className={styles.input}
                  type="text"
                  value={newText}
                  onChange={(e) => {
                    setNewText(e.target.value);
                  }}
                />
              </div>
              <div className={styles.dateContainer}>
                <div className={styles.formTitleContainer}>
                  <p>Datum</p>
                  {!isValid && <p className={styles.errorMessage}>*</p>}
                </div>
                <input
                  className={styles.dateInput}
                  type="date"
                  value={newDate}
                  onChange={(e) => {
                    setNewDate(e.target.value);
                  }}
                />
                <div className={styles.formTitleContainer}>
                  <p className={styles.timeText}>Tid</p>
                </div>
                <input
                  className={styles.dateInput}
                  type="time"
                  value={newTime}
                  onChange={(e) => {
                    setNewTime(e.target.value);
                  }}
                />
              </div>
              <div className={styles.locationContainer}>
                <div className={styles.formTitleContainer}>
                  <p>Plats</p>
                </div>
                <input
                  className={styles.input}
                  type="text"
                  value={newLocation}
                  onChange={(e) => {
                    setNewLocation(e.target.value);
                  }}
                />
              </div>
              <div className={styles.linkContainer}>
                <div className={styles.formTitleContainer}>
                  <p>Länk</p>
                </div>
                <input
                  className={styles.input}
                  type="text"
                  value={newLink}
                  onChange={(e) => {
                    setNewLink(e.target.value);
                  }}
                />
              </div>
              <div className={styles.createBtnContainer}>
                <div className={styles.btnWrapper}>
                  <button
                    className={styles.abortBtn}
                    onClick={() => {
                      close();
                    }}
                  >
                    Avbryt
                  </button>
                  <button className={styles.saveBtn} type="submit">
                    Spara
                  </button>
                </div>
              </div>
            </>
          )}
        </form>
      </div>

      {children}
    </div>
  ) : null;
};

export default EditEventModal;
