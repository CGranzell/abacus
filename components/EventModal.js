'use client';
import styles from '../styles/EventModal.module.css';
import Link from 'next/link';
// import { FaWindowClose } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { ImCalendar } from 'react-icons/im';
import { MdOutlineLocationOn } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';

const EventModal = ({ children, shown, close, event }) => {
  const date = new Date(event.date); // 2009-11-10
  const month = date.toLocaleString('default', { month: 'short' });
  const day = event.date.slice(8, 10);
  const year = event.date.slice(0, 4);

  console.log(event.date);

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
        {/* left container */}
        <div className={styles.leftContainer}>
          <div className={styles.leftWrapper}>
            <div className={styles.leftTopContainer}>
              <div className={styles.leftTopIcon}>
                <ImCalendar className={styles.icon} />
              </div>
              <div className={styles.leftTopText}>
                <p>
                  {day} {month} {year}
                </p>
              </div>
            </div>
            <div className={styles.leftMidContainer}>
              <div className={styles.midIcon}>
                <MdOutlineLocationOn className={styles.icon} size="20px" />
              </div>
              <div className={styles.midText}>
                <p>{event.location}</p>
              </div>
            </div>
            <div className={styles.leftBottomContainer}>
              <div className={styles.midIcon}>
                <BiTimeFive className={styles.icon} size="20px" />
              </div>
              <div className={styles.midText}>
                <p>{event.time}</p>
              </div>
            </div>
          </div>
        </div>
        {/* mid container */}
        <div className={styles.midContainer}>
          <div className={styles.redLine}></div>
        </div>
        {/* right container */}
        <div className={styles.rightContainer}>
          <div className={styles.rightTopContainer}>
            <p>{event.title}</p>
            {/* <FaWindowClose className={styles.closeBtn} onClick={close} /> */}
            <GrClose className={styles.closeBtn} onClick={close} />
          </div>
          <div className={styles.rightMidContainer}>
            <p>{event.text}</p>
          </div>
          <div className={styles.rightBottomContainer}>
            <div className={styles.linkToEventContainer}>
              <Link href={event.link}>
                Anmälan till {event.title} {'>'}
              </Link>
            </div>
          </div>
        </div>

        {/* <div className={styles.dateContainer}> */}
        {/* Månad och Dag*/}
        {/* <div className={styles.monthDateContainer}>
            <p>{event.date}</p>
          </div> */}
        {/* År */}
        {/* <div className={styles.yearContainer}>
            <p>{event.date.slice(10)}</p>
          </div> */}
      </div>
      {/* <div className={styles.textContainer}> */}
      {/* Brödtext */}
      {/* <div className={styles.pContainer}>
            <p>{event.text}</p>
          </div>
        </div> */}
      {/* <div className={styles.linkContainer}>
          <p>Anmäl dig här</p>
          <Link href={event.link}>{event.link}</Link>
        </div> */}
      {/* </div> */}
      {/* event data slut */}
      {children}
    </div>
  ) : null;
};

export default EventModal;
