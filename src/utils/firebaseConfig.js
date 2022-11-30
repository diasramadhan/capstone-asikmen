import { initializeApp } from 'firebase/app';
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
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
