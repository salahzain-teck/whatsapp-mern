import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBidxtKjscc7nSRFIGU1u41exzQAC_vJI4",
    authDomain: "whatsapp-mern-7608a.firebaseapp.com",
    projectId: "whatsapp-mern-7608a",
    storageBucket: "whatsapp-mern-7608a.appspot.com",
    messagingSenderId: "884061449070",
    appId: "1:884061449070:web:6728682e47229b8d0daf7f",
    measurementId: "G-Y1PZX9NFCP"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
