'use client';
import React, { useState } from 'react';
import styles from '../../styles/login/LoginForm.module.css';
import { auth } from '@/firebase';
import { AuthErrorCodes, signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = ({ monitorAuthState }) => {
  // Inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Meddelanden
  const [errorMessage, setErrorMessage] = useState('');

  // validering
  const [formIsValid, setFormIsValid] = useState(false);

  // Logga in med email och lösenord
  const loginEmailPassword = async () => {
    const loginEmail = email;
    const loginPassword = password;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      console.log(userCredential.user);
      setFormIsValid(true);
    } catch (error) {
      console.log(error);
      // setErrorMessage("Fel lösenord. Försök igen");
      showLoginError(error);
    }
  };

  // fel meddelande om inloggning misslyckas
  const showLoginError = (error) => {
    if (error.code == AuthErrorCodes.INVALID_EMAIL) {
      setErrorMessage('Fel email. Försök igen');
    } else if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
      setErrorMessage('Fel lösenord. Försök igen');
    } else {
      setErrorMessage(`Error: ${error.message}`);
    }
  };

  // // Formulär submit
  const onSubmit = (e) => {
    e.preventDefault();
    loginEmailPassword();
    monitorAuthState();
    console.log(email, password);
  };

  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <h1>Logga In</h1>
      {!formIsValid && errorMessage}
      <div className={styles.inputContainer}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.btnContainer}>
        <button type="submit">Logga in</button>
      </div>
    </form>
  );
};

export default LoginForm;
