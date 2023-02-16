import styles from '../styles/Header.module.css';
import Image from 'next/image';
import logo from '../public/images/image.png';
import Link from 'next/link';
import { BsPersonCircle } from 'react-icons/bs';

const Header = () => {
  return (
    <nav className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.logoWrapper}>
          <Link href={'/'}>
            <Image src={logo} className={styles.logo} alt="logo" priority />
          </Link>
        </div>
      </div>
      <div className={styles.pageLinksContainer}>
        <Link href={'/'}>Nyheter</Link>
        <Link href={'/'}>Om Oss</Link>
        <Link href={'/'}>Kontakt</Link>
        <Link href={'/'}>Schema</Link>
      </div>
      <div className={styles.loginContainer}>
        <Link href={'/'}>
          <BsPersonCircle className={styles.icon} />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
