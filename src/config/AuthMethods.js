import firebase, { auth } from "./config-firebase"
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()

//facebook

// const FacebookAuth = getAuth()
// signInWithPopup(FacebookAuth, facebookProvider)
//   .then((result) => {
//     // The signed-in user info.
//     const user = result.user

//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     const credential = FacebookAuthProvider.credentialFromResult(result)
//     const accessToken = credential.accessToken

//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code
//     const errorMessage = error.message
//     // The email of the user's account used.
//     const email = error.email
//     // The AuthCredential type that was used.
//     const credential = FacebookAuthProvider.credentialFromError(error)

//     // ...
//   })

// //github

// const githubAuth = getAuth()
// signInWithPopup(auth, githubProvider)
//   .then((result) => {
//     // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//     const credential = GithubAuthProvider.credentialFromResult(result)
//     const token = credential.accessToken

//     // The signed-in user info.
//     const user = result.user
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code
//     const errorMessage = error.message
//     // The email of the user's account used.
//     const email = error.email
//     // The AuthCredential type that was used.
//     const credential = GithubAuthProvider.credentialFromError(error)
//     // ...
//   })
