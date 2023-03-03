'use client';
import React, { useState } from 'react';
import styles from '../../styles/upComingEvents/EventCard.module.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { ImCalendar } from 'react-icons/im'
import EventModal from '../EventModal';

const EventCard = ({ event }) => {
  const [modalShown, toggleModal] = useState(false);

  return (
    <>
      <EventModal
        event={event}
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      />
      <div className={styles.mainContainer} onClick={toggleModal}>
        {/* Datum Container*/}
        <div className={styles.dateContainer}>
        <div className={styles.iconContainer}>
          <ImCalendar />
        </div>
          {/* Månad och Dag*/}
          <div className={styles.monthDateContainer}>
            <p>{event.date.substring(5, 10)}</p>
          </div>
          {/* År */}
          <div className={styles.yearContainer}>
            <p>{event.date.substring(0, 4)}</p>
          </div>
        </div>
        {/* Text Container*/}
        <div className={styles.textContainer}>
          {/* Titel */}
          <div className={styles.titleContainer}>
            <p>{event.title}</p>
          </div>
          {/* Brödtext */}
          <div className={styles.pContainer}>
            <p>{event.text.substring(0, 200)}...</p>
          </div>
          {/* Läs mer */}
          <div className={styles.readMoreContainer}>
            <button>Läs mer om {event.title} {">"}</button> 
            {/* <FaLongArrowAltRight className={styles.arrow} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
