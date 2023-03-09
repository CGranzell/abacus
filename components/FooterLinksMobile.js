import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import { BsPerson } from 'react-icons/bs';

const MENU_LIST = [
  { text: 'Hem', href: '/' },
  { text: 'Om oss', href: '/about-us' },
  { text: 'Kontakt', href: '/contact' },
];

const FooterLinksMobile = () => {
  return (
    <>
      <div className={styles.topRowLinks}>
        {MENU_LIST.map((item, key) => {
          return (
            <Link key={key} href={item.href}>
              {item.text}
            </Link>
          );
        })}
      </div>
      <div className={styles.bottomRowLinks}>
        <Link href={'/login-page'}>
          <BsPerson className={styles.iconAdmin} />
          <p>Logga in Admin</p>
        </Link>
      </div>
    </>
  );
};

export default FooterLinksMobile;
