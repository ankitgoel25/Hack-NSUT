import { useState, createContext, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth, createUserProfileDocument } from '../firebase';
import { onSnapshot } from 'firebase/firestore';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const router = useRouter();
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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        onSnapshot(userRef, (snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          setLoading(false);
        });
      } else {
        setLoading(false);
        setUser(false);
      }
    });

    return unsubscribe;
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(user);
    if (!user && !loading) router.replace('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const contextProps = {
    user,
    setUser,
    signInWithGoogle,
    signOutUser,
    loading,
    setLoading,
  };

  return (
    <UserContext.Provider value={contextProps}>
      {/* {loading && <Loader />}
      {!loading && children} */}
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
