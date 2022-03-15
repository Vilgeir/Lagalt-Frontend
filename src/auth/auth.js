import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth"
import firebase from "../config/config-firebase"

const socialMediaAuth = async (provider) => {
  try {
    const res = await firebase.auth().signInWithPopup(provider)
    return res.user
  } catch (er) {
    return er
  }
}

export default socialMediaAuth
