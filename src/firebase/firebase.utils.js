import firebase from 'firebase/app'; 
import 'firebase/auth'; 
import 'firebase/firestore' 

export const config = {
    apiKey: "AIzaSyDfFBLL14A7JyGT-JBXwVN_h6zhzc0Vlbw",
    authDomain: "crwn-db-2746c.firebaseapp.com",
    databaseURL: "https://crwn-db-2746c.firebaseio.com",
    projectId: "crwn-db-2746c",
    storageBucket: "crwn-db-2746c.appspot.com",
    messagingSenderId: "31669809050",
    appId: "1:31669809050:web:b006779b0ea7e6afd01423",
    measurementId: "G-CLDV50ZKXD"
  }; 
 
  firebase.initializeApp(config); 

  export const auth = firebase.auth(); 
  export const firestore = firebase.firestore();  

  export const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'}); 
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider); 

  export default firebase;
 