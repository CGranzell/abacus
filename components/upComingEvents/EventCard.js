'use client';
import React, { useState } from 'react';
import styles from '../../styles/upComingEvents/EventCard.module.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import EventModal from '../EventModal';


const EventCard = ( { event }) => {

  const [modalShown, toggleModal] = useState(false);

  // Konverterar datum till rätt format
  // const date = event.date.toDate().toDateString()
           
  return (
  <>
      <EventModal
      event={event}
      // date={date}
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
       />
    <div className={styles.mainContainer} onClick={toggleModal}>
    {/* Datum Container*/}
        <div className={styles.dateContainer} >
        {/* Månad och Dag*/}
           <div className={styles.monthDateContainer}>
            {/* <p>{date.substring(4, date.length-4)}</p> */}
            <p>{event.date}</p>
           </div>
           {/* År */}
          <div className={styles.yearContainer} >
            {/* <p>{event.date.slice(10)}</p> */}
            <p>{event.date}</p>
          </div> 
        </div>
        {/* Text Container*/}
        <div className={styles.textContainer} >
        {/* Titel */}
           <div className={styles.titleContainer} >
            <p>{event.title}</p>
           </div>
           {/* Brödtext */}
          <div className={styles.pContainer} >
            <p>{event.text.substring(0,40)}...</p>
          </div>
          {/* Läs mer */}
          <div className={styles.readMoreContainer} >
            {/* <Link href={"/"}>Läs mer</Link>  */}
            <button>Läs mer</button>
            <FaLongArrowAltRight className={styles.arrow}/>
          </div> 
        </div>
    </div>
    </>
  )
}

export default EventCard