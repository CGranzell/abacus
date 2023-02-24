'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import LoginForm from '../../components/login/LoginForm';
import { useRouter } from 'next/navigation';
import LoadingSpinner from "../../components/LoadingSpinner";

const page = () => {
  const router = useRouter();

  // Spinner
  const [isLoading, setIsLoading] = useState(false);

  // Kollar om user är inloggad
  const isUserLoggedIn = () => {
    
    onAuthStateChanged(auth, (user) => {
      // setIsLoading(true)
      if (user) {
        router.push(`/admin-page`);
        setIsLoading(true);
        
      }
    });
  };

  isUserLoggedIn();

  // Hanterar inloggat tillstånd
  const monitorAuthState = async () => {
    // setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(`${user.email} är inloggad`);
        // Visa inloggat läge
        router.push(`/admin-page`);
      } else {
        console.log(`${user} är utloggad`);
        // Visa inloggningsformulär
        // setIsLoading(false)
      }
    });
  };

  return (
    <div className={styles.mainContainer}>
    {isLoading ? <LoadingSpinner /> :
    
      <LoginForm monitorAuthState={monitorAuthState} />
    }
    </div>
  );
};

export default page;
