import React, { createContext, useContext, useEffect, useState } from "react"
import firebase from "../config/config-firebase"

const AuthContext = createContext()

export const useUser = () => {
	return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		console.log(user)
		firebase.auth().onAuthStateChanged(setUser)
	}, [])

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	)
}
export default AuthProvider
