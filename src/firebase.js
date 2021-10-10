import firebase from 'firebase';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyCebEyU2sRpFokoHCbcEv167vqEC4Mrn2A',
    authDomain: 'qchat-41ec1.firebaseapp.com',
    projectId: 'qchat-41ec1',
    storageBucket: 'qchat-41ec1.appspot.com',
    messagingSenderId: '676531128433',
    appId: '1:676531128433:web:4d8d7ef84a4ae44cbd33d0',
  })
  .auth();
