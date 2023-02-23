'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import LoginForm from '../../components/login/LoginForm';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  // Kollar om user är inloggad
  const isUserLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push(`/admin-page`);
      }
    });
  };

  isUserLoggedIn();

  // Hanterar inloggat tillstånd
  const monitorAuthState = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(`${user.email} är inloggad`);
        // Visa inloggat läge
        router.push(`/admin-page`);
      } else {
        console.log(`${user} är utloggad`);
        // Visa inloggningsformulär
      }
    });
  };

  return (
    <div className={styles.mainContainer}>
      <LoginForm monitorAuthState={monitorAuthState} />
    </div>
  );
};

export default page;
