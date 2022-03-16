import firebase from "../config/config-firebase"

const socialMediaAuth = async (provider) => {
	try {
		const res = await firebase.auth().signInWithPopup(provider)
		return res.user
	} catch (error) {
		return error
	}
}

export default socialMediaAuth
