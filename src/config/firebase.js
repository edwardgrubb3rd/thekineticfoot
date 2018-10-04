
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDrHV9A-NVXPDe6xvmpqAmSlwtSuitVZjE",
    authDomain: "the-kinetic-foot-218315.firebaseapp.com",
    databaseURL: "https://the-kinetic-foot-218315.firebaseio.com",
    projectId: "the-kinetic-foot-218315",
    storageBucket: "the-kinetic-foot-218315.appspot.com",
    messagingSenderId: "710045599777"
  };
  firebase.initializeApp(config);

export const fire = firebase;
export const database = firebase.database();
export const auth = firebase.auth;
export const db = firebase.firestore();
