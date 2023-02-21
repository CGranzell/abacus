import styles from '../../styles/upComingEvents/EventCard.module.css';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';


const EventCard = ( { event }) => {
  // Konverterar datum till rätt format
  const date = event.date.toDate().toDateString()
            {console.log(date)}
  return (
    <div className={styles.mainContainer}>
    {/* Datum Container*/}
        <div className={styles.dateContainer}>
        {/* Månad och Dag*/}
           <div className={styles.monthDateContainer}>
            <p>{date.substring(4, date.length-4)}</p>
           </div>
           {/* År */}
          <div className={styles.yearContainer}>
            <p>{date.slice(10)}</p>
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
            <p>{event.text.substring(0,40)}...</p>
          </div>
          {/* Läs mer */}
          <div className={styles.readMoreContainer}>
            <Link href={"/"}>Läs mer</Link> 
            <FaLongArrowAltRight className={styles.arrow}/>
          </div> 
        </div>
    </div>
  )
}

export default EventCard