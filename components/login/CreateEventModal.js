'use client';
import React, { useState } from 'react';
import styles from '../../styles/login/CreateEventModal.module.css';
import { GrClose } from 'react-icons/gr';
import { addDoc } from 'firebase/firestore';
import LoadingSpinner from '../../components/LoadingSpinner';

const CreateEventModal = ({ children, shown, close, eventsCollectionRef }) => {
  // Skapa event
  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('');
  const [newDate, setNewDate] = useState(null);
  const [newTime, setNewTime] = useState(null);
  const [newLink, setNewLink] = useState('');
  const [newLocation, setNewLocation] = useState('');

  // validering
  const [isValid, setIsValid] = useState(false);

  // Spinner
  const [isLoading, setIsLoading] = useState(false);

  const createEvent = async (e) => {
    e.preventDefault();
    if (newTitle === '' || newText === '' || newDate === null) {
      setIsValid(false);
    } else {
      setIsLoading(true);
      try {
        await addDoc(eventsCollectionRef, {
          title: newTitle,
          text: newText,
          date: newDate,
          time: newTime,
          link: newLink,
          location: newLocation,
        });

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

        <form className={styles.mainContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.formTitleContainer}>
              <p>Titel</p>
              {!isValid && (
                <p className={styles.errorMessage}> * Obligatorisk </p>
              )}
            </div>
            <input
              className={styles.input}
              type="text"
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
            />
          </div>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <div className={styles.textContainer}>
                <div className={styles.formTitleContainer}>
                  <p>Text</p>
                  {!isValid && (
                    <p className={styles.errorMessage}> * Obligatorisk </p>
                  )}
                </div>
                <textarea
                  className={styles.input}
                  type="text"
                  onChange={(e) => {
                    setNewText(e.target.value);
                  }}
                />
              </div>
              <div className={styles.dateContainer}>
                <div className={styles.formTitleContainer}>
                  <p>Datum</p>
                  {!isValid && (
                    <p className={styles.errorMessage}> * Obligatorisk </p>
                  )}
                </div>
                <input
                  className={styles.dateInput}
                  type="date"
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
                  type="link"
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
                  <button className={styles.saveBtn} onClick={createEvent}>
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

export default CreateEventModal;
