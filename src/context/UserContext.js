import React, { useState, createContext } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => auth.currentUser);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    auth.useDeviceLanguage();
    await signInWithPopup(auth, provider).catch((error) => {
      console.log(error);
      setLoading(false);
    });
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  const contextProps = {
    user,
    setUser,
    signInWithGoogle,
    signOutUser,
    loading,
    setLoading,
  };

  return (
    <UserContext.Provider value={contextProps}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
