'use client';
import styles from '../styles/EventModal.module.css';
import Link from 'next/link';
import { FaWindowClose } from 'react-icons/fa'

const EventModal = ({ children, shown, close, event, date }) => {
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
      <FaWindowClose className={styles.closeBtn} onClick={close}/>
        {/* <button className={styles.closeBtn} onClick={close}>
          X
        </button> */}
        {/* event data */}

        {/* Titel */}
        <div className={styles.titleContainer}>
          <p>{event.title}</p>
        </div>
        {/* Datum Container*/}
        <div className={styles.dateContainer}>
          {/* Månad och Dag*/}
          <div className={styles.monthDateContainer}>
            {/* <p>{date.substring(4, date.length - 4)}</p> */}
            <p>{event.date}</p>
          </div>

          {/* År */}
          <div className={styles.yearContainer}>
            {/* <p>{date.slice(10)}</p> */}
            <p>{event.date.slice(10)}</p>
          </div>
        </div>
        <div className={styles.textContainer}>
          {/* Brödtext */}
          <div className={styles.pContainer}>
            <p>{event.text}</p>
          </div>
        </div>
      <div className={styles.linkContainer}>
      <p>Anmäl dig här</p>
        <Link href={event.link}>{event.link}</Link>
      </div>
      </div>
      {/* event data slut */}
      {children}
    </div>
  ) : null;
};

export default EventModal;
