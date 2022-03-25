import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import { UserProvider } from '../context/UserContext';
import { ThemeProvider } from '@mui/material/styles';
import { myTheme } from '../utils/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Team Unknown</title>
      </Head>
      <ThemeProvider theme={myTheme}>
        <SnackbarProvider maxSnack={3}>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
