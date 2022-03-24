import "./Login.css"
import { useNavigate } from "react-router-dom"
import {
	facebookProvider,
	githubProvider,
	googleProvider,
} from "../../config/AuthMethods"
import socialMediaAuth from "../../auth/auth"

const Login = () => {
	const navigate = useNavigate()

	const handleLogin = async (provider) => {
		const res = await socialMediaAuth(provider)
		console.log(res)

		navigate("/profile")
	}

	return (
		<div className="card">
			<button
				onClick={() => handleLogin(googleProvider)}
				className="login-button"
			>
				<img className="logo" src="/images/google-logo.png"></img>
				<span>Logg inn med Google</span>
			</button>
			<button
				onClick={() => handleLogin(facebookProvider)}
				className="login-button"
			>
				<img className="logo" src="/images/facebook-logo.png"></img>
				<span>Logg inn med facebook</span>
			</button>
			<button
				onClick={() => handleLogin(githubProvider)}
				className="login-button"
			>
				<img className="logo" src="/images/guthub-logo.png"></img>
				<span>Logg inn med GitHub</span>
			</button>
		</div>
	)
}

export default Login

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
