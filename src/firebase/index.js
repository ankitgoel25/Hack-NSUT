import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDy_tXoXTKV0qt36l5Hd6fVyXOlzcLa9cQ',
  authDomain: 'hacknsut-c18fc.firebaseapp.com',
  projectId: 'hacknsut-c18fc',
  storageBucket: 'hacknsut-c18fc.appspot.com',
  messagingSenderId: '1003193021514',
  appId: '1:1003193021514:web:393ced3ff9dbae4e5ca2b3',
  measurementId: 'G-9098VGBWR2',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export const createUserProfileDocument = async (
  userAuth,
  additionalData = {},
) => {
  if (!userAuth) return;

  const userRef = doc(db, 'users', `${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        userImage: photoURL,
        meetings: [],
        chats: [],
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating the User', error.message);
    }
  } else {
    const { photoURL } = userAuth;

    try {
      await updateDoc(userRef, {
        userImage: photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating the User', error.message);
    }
  }

  return userRef;
};

export default app;
