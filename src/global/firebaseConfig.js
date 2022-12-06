// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCKB0_dVGEeV60OsMKKaiY57R-V4Ycpfrk',
  authDomain: 'capstone-asikmen.firebaseapp.com',
  projectId: 'capstone-asikmen',
  storageBucket: 'capstone-asikmen.appspot.com',
  messagingSenderId: '1089822279708',
  appId: '1:1089822279708:web:ce721fc0cb1068db6d37d9',
  measurementId: 'G-H7GFQZ0VZY'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export const db = getDatabase(firebaseApp);

export default firebaseApp;
