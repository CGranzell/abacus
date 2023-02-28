'use client';
import React, { useState } from 'react';
import styles from '../../styles/login/ConfirmDeleteModal.module.css';
import { FaWindowClose } from 'react-icons/fa';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '@/firebase';

const ConfirmDeleteModal = ({ children, shown, close, event }) => {
  // Radera Event
  const deleteEvent = async (id) => {
    const eventDoc = doc(db, 'events', id);

    await deleteDoc(eventDoc);
    window.location.reload();
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
        <div className={styles.confirmContainer}>
          <p>Är du säker på att du vill radera eventet?</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              deleteEvent(event.id);
            }}
          >
            <div className={styles.btnContainer}>
              <button type="submit" className={styles.confirmBtn}>Radera</button>
              <button onClick={(e) => close()} className={styles.noBtn}>Avbryt</button>
            </div>
          </form>
        </div>
      </div>

      {children}
    </div>
  ) : null;
};

export default ConfirmDeleteModal;
