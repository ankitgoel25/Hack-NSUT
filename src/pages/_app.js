import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import { UserProvider } from '../context/UserContext';
import '../styles/globals.css';


import { onSnapshot } from 'firebase/firestore';
import { auth, createUserProfileDocument } from '../firebase';
import { UserContext } from '../context/UserContext';






function MyApp({ Component, pageProps }) {
  const { user, setUser, loading, setLoading } = useContext(UserContext);

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

  return (
    <>
      <Head>
        <title>Team Unknown</title>
      </Head>
      <SnackbarProvider maxSnack={3}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </SnackbarProvider>
    </>
  );
}

export default MyApp;
