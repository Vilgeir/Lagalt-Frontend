import "./Login.css"
import { useNavigate } from "react-router-dom"
import {
	facebookProvider,
	githubProvider,
	googleProvider,
} from "../../config/AuthMethods"
//import socialMediaAuth from "../../auth/auth"
export const Login = () => {
	const navigate = useNavigate()

	const handleLogin = async () => {
		//const res = await socialMediaAuth(provider)
		navigate("/profile")
	}

	return (
		<div className="card">
			<button onClick={() => handleLogin(googleProvider)} className="">
				<span>Continue with Google</span>{" "}
			</button>
			<button onClick={() => handleLogin(facebookProvider)} className="">
				<span>Continue with facebook</span>
			</button>
			<button onClick={() => handleLogin(githubProvider)}>Github</button>
		</div>
	)
}

// Auth = getAuth()
// signInWithPopup(Auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = provider.credentialFromResult(result)
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
//     const credential = provider.credentialFromError(error)
//     // ...
//   })
