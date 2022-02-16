import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDVn-E7qfXXI6XPcQPd-Qldprh_9XhY_TM",
  authDomain: "twitter-clone-1a84a.firebaseapp.com",
  projectId: "twitter-clone-1a84a",
  storageBucket: "twitter-clone-1a84a.appspot.com",
  messagingSenderId: "34471919089",
  appId: "1:34471919089:web:5cc3fcf0d862b829309850",
  measurementId: "G-3FB0TSEK0D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;