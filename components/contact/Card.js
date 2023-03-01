import styles from '../../styles/contact/Card.module.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ h2, href, img }) => {
  return (
    <Link href={href} className={styles.container}>
      <Image src={img} alt="" sizes="true" className={img} />
      <h2>{h2}</h2>
      <div className={styles.contactContainer}>
        Besök <FaLongArrowAltRight className={styles.arrow} />
      </div>
    </Link>
  );
};

export default Card;
