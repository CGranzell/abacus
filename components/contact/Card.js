import styles from '../../styles/contact/Card.module.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Image from 'next/image';

const Card = ({ h2, p, img }) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.imgContainer}> */}
        <Image src={img} alt="" sizes='true' className={img} />
      {/* </div> */}
      <h2>{h2}</h2> 
      <div className={styles.contactContainer}>
        Besök <FaLongArrowAltRight className={styles.arrow}/>
      </div>
    </div>
  );
};

export default Card;