import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0o5yM3ut8u38XlZBTD5Zy2VKITkPgSeY",
  authDomain: "curso-svelte-46dae.firebaseapp.com",
  projectId: "curso-svelte-46dae",
  storageBucket: "curso-svelte-46dae.appspot.com",
  messagingSenderId: "967535405810",
  appId: "1:967535405810:web:8da1bbbf15d728f2ef3e6b",
};

firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider };
