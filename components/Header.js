'use client';
import React, { useState, useRef } from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import logo from '../public/Abacus Camp-logga.svg';
import Link from 'next/link';
// import { BsPersonCircle } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import useOutsideClick from '@/hooks/useOutsideClick';
import NavItem from './NavItem';
import NavItemBurger from './NavItemBurger';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  // Hanterar klick utanför hamburgermeny
  useOutsideClick(ref, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  // Hantera hamburgermeny öppen/stängd
  const handleBurger = () => {
    setIsOpen((prev) => !prev);
  };

  // Hantera css klass om hamburger är öppen/stängd
  const clicked = isOpen ? styles.hamburgerOpen : styles.hamburgerClosed;

  return (
    <nav className={styles.mainContainer}>
    <div className={styles.mainWrapper}>
    <div className={styles.logoContainer}>
        <div className={styles.logoWrapper}>
          <Link href={'/'}>
            <Image src={logo} className={styles.logo} alt="logo" priority />
          </Link>
        </div>
      </div>
      {/* Hamburger */}

      <div className={clicked} onClick={handleBurger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* Hamburger länkar */}
      {isOpen && (
        <div className={styles.burgerMenu} ref={ref}>
          <NavItemBurger setIsOpen={setIsOpen} />
        </div>
      )}
      {/* Desktop länkar  */}
      <div className={styles.pageLinksContainer}>
        <NavItem />
      </div>
      {/* Logga in */}
      <div className={styles.loginContainer}>
        <Link href={'/login-page'}>
          <BsPerson className={styles.icon} />
          <p>Admin</p>
        </Link>
      </div>
    </div>
    
    </nav>
  );
};

export default Header;
