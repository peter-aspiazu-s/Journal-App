import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCkA3VpvoG2OuDtwPQmbE0PNXekTDDFi1w",
    authDomain: "journal-app-fe11c.firebaseapp.com",
    projectId: "journal-app-fe11c",
    storageBucket: "journal-app-fe11c.appspot.com",
    messagingSenderId: "627461222884",
    appId: "1:627461222884:web:b409bee395846447a917f1"
  
  };
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  // esta es la base de datos

  const db = firebase.firestore();
  // esta es la referencia a firestore
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  // este es mi auth provider para que yo pueda hacer
  // autenticacion con google

  export {
      db,
      googleAuthProvider,
      firebase
  }