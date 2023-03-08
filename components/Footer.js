import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import abb from '../public/images/abb-logga.png';
import fryx from '../public/images/fryx-logga.png';
import mäl from '../public/images/mälar-logga.png';
import FooterLinks from './FooterLinks';
import Link from 'next/link';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';
import FooterLinksMobile from './FooterLinksMobile';

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
    <div className={styles.mainWrapper}>

    
      {/* Vänster grid */}
      <div className={styles.leftGridContainer}>
        <div className={styles.textContainer}>
          <div className={styles.textWrapper}>
            <h3>Abacus Camp</h3>
            <p>Avancerad matematik och <br/> programmering</p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.konceptTextContainer}>
            <p>Koncept och idé i sammarbete med</p>
          </div>
          <div className={styles.imgLogoContainer}>
          <div className={styles.imgWrapperContainer}>

            <div className={styles.imgWrapper}>
              <Image src={abb} className={styles.logo} alt="" />
            </div>
            <div className={styles.imgWrapper}>
              <Image src={fryx} className={styles.logo} alt="" />
            </div>
            <div className={styles.imgWrapper}>
              <Image src={mäl} className={styles.logo} alt="" />
            </div>
          </div>
          </div>
        </div>
      </div>
      {/*  Mitten grid */}
      <div className={styles.midGridContainer}>
        <div className={styles.footerLinksWrapper}>
          <div className={styles.links}>
            <FooterLinks />
            
          </div>
          <div className={styles.mobileLinks}>
            <FooterLinksMobile />
          </div>
        </div>
      </div>
      {/* Höger grid */}
      <div className={styles.rightGridContainer}>
        <div className={styles.socialWrapper}>
          <div className={styles.textSocial}>
            <h3>Hitta oss på sociala medier</h3>
            <div className={styles.iconsSocial}>
              <Link href={'/'}>
                <FaFacebookSquare className={styles.icon} />
              </Link>
              <Link href={'/'}>
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
    </div>
  );
};

export default Footer;
