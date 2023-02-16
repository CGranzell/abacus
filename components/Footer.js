import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import loggor from '../public/images/loggor.png';
import FooterLinks from './FooterLinks';
import Link from 'next/link';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      {/* Vänster grid */}
      <div className={styles.gridContainer}>
        <div className={styles.textWrapper}>
          <h3>Abacus Camp</h3>
          <p>Avancerad matematik och programmering</p>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.konceptTextContainer}>
            <p>Koncept och idé i sammarbete med</p>
          </div>
          <div className={styles.imgWrapper}>
            <Image src={loggor} className={styles.logo} alt="" />
          </div>
        </div>
      </div>
      {/*  Mitten grid */}
      <div className={styles.gridContainer}>
        <div className={styles.footerLinksWrapper}>
          <div className={styles.links}>
            <FooterLinks />
          </div>
        </div>
      </div>
      {/* Höger grid */}
      <div className={styles.gridContainer}>
        <div className={styles.socialContainer}>
          <div className={styles.socialWrapper}>
            <div className={styles.textSocial}>
              <h3>Hitta oss på sociala medier</h3>
            </div>
            <div className={styles.iconsSocial}>
              <Link href={'/'}>
                {' '}
                <FaFacebookSquare className={styles.icon} />
              </Link>
              <Link href={'/'}>
                {' '}
                <FaInstagramSquare className={styles.icon} />
              </Link>
              <Link href={'/'}>
                <FaLinkedin className={styles.icon} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
