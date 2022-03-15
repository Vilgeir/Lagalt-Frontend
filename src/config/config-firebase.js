import firebase from "firebase/compat/app"
import "firebase/compat/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDa7QwYVTDy87yE_7H-CQsR8pP0YRYXf4U",
  authDomain: "lagalt-344108.firebaseapp.com",
  projectId: "lagalt-344108",
  storageBucket: "lagalt-344108.appspot.com",
  messagingSenderId: "292234871320",
  appId: "1:292234871320:web:f541628a1b5712a8e1f96d",
}

// Initialize Firebase

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export default firebase
