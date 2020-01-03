import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCC-VbpyHRP5pu4xy5iRLM5viuLhlewtJA",
  authDomain: "social-network-dev-845aa.firebaseapp.com",
  databaseURL: "https://social-network-dev-845aa.firebaseio.com",
  projectId: "social-network-dev-845aa",
  storageBucket: "social-network-dev-845aa.appspot.com",
  messagingSenderId: "674464808555",
  appId: "1:674464808555:web:0e706e6e2a2e048929bb2e",
  measurementId: "G-M9B84ETVS5"
};
firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;
