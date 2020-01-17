import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: "1:211474728132:web:8e7ef9805524c1a0167591",
  measurementId: "G-S1YNL0KBPD"
};
const firebaseConfigDev = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY_DEV,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN_DEV,
  databaseURL: process.env.REACT_APP_DATABASE_URL_DEV,
  projectId: process.env.REACT_APP_PROJECT_ID_DEV,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET_DEV,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID_DEV,
  appId: "1:314007227879:web:c60c774608bdde84888142",
  measurementId: "G-1K0MZFX1CJ"
};

const config =
  process.env.NODE_ENV === 'production' ? firebaseConfig : firebaseConfigDev;


class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
    this.storage = app.storage();
  }

  // Firebase Auth Functions
  doCreateUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);
  
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  
  doSignOut = () => this.auth.signOut();

  // *** User API ***
  brother = uid => this.db.ref(`brothers/${uid}`);
  brothers = () => this.db.ref('brothers');
  currentUser = () => this.auth.currentUser;

  // Storage
  brotherImage = () => this.storage.ref('brothers');
}
export default Firebase;