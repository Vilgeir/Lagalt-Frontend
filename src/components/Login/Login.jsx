import "./Login.css"
import { useNavigate } from "react-router-dom"
import {
	facebookProvider,
	githubProvider,
	googleProvider,
} from "../../config/AuthMethods"
import socialMediaAuth from "../../auth/auth"
export const Login = () => {
	const navigate = useNavigate()

	const handleLogin = async (provider) => {
		const res = await socialMediaAuth(provider)

		console.log(res.user)

		navigate("/profile")
	}

	return (
		<div className="card">
			<button
				onClick={() => handleLogin(googleProvider)}
				className="login-button"
			>
				<span>Continue with Google</span>
			</button>
			<button
				onClick={() => handleLogin(facebookProvider)}
				className="login-button"
			>
				<span>Continue with facebook</span>
			</button>
			<button
				onClick={() => handleLogin(githubProvider)}
				className="login-button"
			>
				Github
			</button>
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
