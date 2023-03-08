import styles from '../../styles/contact/Card.module.css';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ h2, href, img }) => {
  return (
    <Link href={href} className={styles.container}>
    <div className={styles.imgContainer}>

      <Image src={img} alt="" sizes="true" className={styles.img} />
    </div>
      <h2>{h2}</h2>
      <div className={styles.contactContainer}>
        {/* <div className={styles.link}> */}
          Besök {h2}s webbsida 
        {/* <div className={styles.iconContainer}> */}
          <HiOutlineExternalLink size="12px" className={styles.icon}/> 
        {/* </div> */}
        {' > '}
        {/* </div> */}
      </div>
    </Link>
  );
};

export default Card;
