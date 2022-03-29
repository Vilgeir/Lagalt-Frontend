import React, { createContext, useContext, useState } from "react"

const AppContext = createContext()

export const useApp = () => {
	return useContext(AppContext)
}

const AppProvider = ({ children }) => {
	const [data, setData] = useState([])

	const state = {
		data,
		setData,
	}

	return <AppContext.Provider value={state}>{children}</AppContext.Provider>
}

export default AppProvider
