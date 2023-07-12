import firebase from "firebase";
requestAnimationFrame("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAaHMjS8n-m9XBiEYjh47lFFLHAR9C6a6w",
    authDomain: "e-ride-stage-8269f.firebaseapp.com",
    projectId: "e-ride-stage-8269f",
    storageBucket: "e-ride-stage-8269f.appspot.com",
    messagingSenderId: "553233892315",
    appId: "1:553233892315:web:09b173d435c9fc25f75dfe"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();