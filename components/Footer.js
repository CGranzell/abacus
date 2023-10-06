import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import abacusBild from '../public/images/abacus-bild.png';
import hitachi from '../public/images/hitachi-bild.png';
import fryx from '../public/images/fryx-logga.png';
import mäl from '../public/images/mälar-logga.png';
import poweredByHiq from '../public/Powered by HiQ.svg';
import FooterLinks from './FooterLinks';
import Link from 'next/link';
import {
  
  FaInstagramSquare,
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
              <p>
                Avancerad matematik och <br /> programmering
              </p>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.konceptTextContainer}>
              <p>Koncept och idé i sammarbete med</p>
            </div>
            <div className={styles.imgLogoContainer}>
              <div className={styles.imgWrapperContainer}>
                <div className={styles.imgWrapper}>
                  <Image src={hitachi} className={styles.logo} alt="" />
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
            </div>
            <div className={styles.iconsSocial}>
              
              <Link href={'https://www.instagram.com/abacuscamp1/'}>
                <FaInstagramSquare className={styles.icon} />
              </Link>
            </div>
          </div>
          <div className={styles.poweredByContainer}>
            <div className={styles.poweredByImgContainer}>
              <Link href="#">
                <Image
                  src={abacusBild}
                  className={styles.logo}
                  alt="logo"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
