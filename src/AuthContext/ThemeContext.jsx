import React, { createContext, useContext, useState } from "react"

const ThemeContext = createContext()

export const useTheme = () => {
	return useContext(ThemeContext)
}

const ThemeProvider = ({ children }) => {
	const [privacy, setPrivacy] = useState(false)

	const state = {
		privacy,
		setPrivacy,
	}

	return <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
