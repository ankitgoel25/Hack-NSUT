import Head from 'next/head';
import { useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import { UserProvider } from '../context/UserContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
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
