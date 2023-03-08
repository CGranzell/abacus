import styles from './page.module.css';
import Image from 'next/image';
import Card from '../../components/contact/Card';
import abb from '../../public/images/abb-logga.png';
import fryx from '../../public/images/fryx-logga.png';
import mäl from '../../public/images/mälar-logga.png';
import math from '../../public/images/elev-grey.png';

const page = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.headerContainer}> */}
      <div className={styles.imgContainer}>
        <div className={styles.h1Wrapper}>
          <h1 className={styles.h1}>Kontakta oss</h1>
        </div>
        <Image src={math} alt="" sizes="true" className={styles.mathImg} />
      </div>

      {/* </div> */}
      <div className={styles.mainCardContainer}>
        <div className={styles.mainWrapper}>
        <div className={styles.visitText}>
          <p>Besök någon av våra sidor för att läsa mer</p>
        </div>


        <div className={styles.cardContainer}>
          <div className={styles.cardWrapper}>
            <Card
              href={'https://www.abbgymnasiet.se/'}
              img={abb}
              h2={'ABB-Gymnasiet'}
            />
          </div>
          
          <div className={styles.cardWrapper}>
            <Card
              href={'https://fryx.se/'}
              img={fryx}
              h2={'Fryxellska skolan'}
            />
          </div>
          
          <div className={styles.cardWrapper}>
            <Card
              href={'https://www.misv.se/'}
              img={mäl}
              h2={'Mälardalens international school'}
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default page;
