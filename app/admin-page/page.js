'use client';
import React, { useState, useEffect } from 'react';
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Admin from '@/components/login/Admin';

const page = () => {
  const router = useRouter();
  const [user, setUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Hanterar inloggat tillstånd
  const monitorAuthState = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(`${user.email} är inloggad från admin sidan`);
        // Visa inloggat läge
        setUser(user);
        setIsLoggedIn(true);
      } else {
        console.log(`${user} är utloggad`);
        // Visa inloggningsformulär
        setIsLoggedIn(false);
        router.push(`/login-page`);
      }
    });
  };

  monitorAuthState();

  return (
    <>
      <Admin user={user} setIsLoggedIn={setIsLoggedIn} />
    </>
  );
};

export default page;
