'use client';
import React, { useState } from 'react';
import styles from '../../styles/upComingEvents/EventCard.module.css';
import { ImCalendar } from 'react-icons/im';
import EventModal from '../EventModal';

const EventCard = ({ event }) => {
  const [modalShown, toggleModal] = useState(false);

  const date = new Date(event.date); // 2009-11-10
  const month = date.toLocaleString('default', { month: 'short' });
  const day = event.date.slice(8, 10);
  const year = event.date.slice(0, 4);

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
            {/* <p>{event.date.substring(5, 10)}</p> */}
            
            <p>{day}</p>
            <p> {month}</p>
          </div>
          {/* År */}
          <div className={styles.yearContainer}>
            <p>{year}</p>
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
            <button>
              Läs mer om {event.title} {'>'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
