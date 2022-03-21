import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMZ9M3hYknfb7shg2d0OCeU7GfHisvqp4",
  authDomain: "galeria-boda.firebaseapp.com",
  projectId: "galeria-boda",
  storageBucket: "galeria-boda.appspot.com",
  messagingSenderId: "791365323708",
  appId: "1:791365323708:web:a88a130edd5d202aadb9b9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };