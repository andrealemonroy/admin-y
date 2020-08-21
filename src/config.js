  
import * as firebase from 'firebase';
import 'firebase/firestore';
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBnHIyr_NSkaF7e7k34s8h_oysISsAawMk",
  authDomain: "yego-admin.firebaseapp.com",
  databaseURL: "https://yego-admin.firebaseio.com",
  projectId: "yego-admin",
  storageBucket: "yego-admin.appspot.com",
  messagingSenderId: "297866010307",
});

export default app;