import React, { createContext, useContext, useEffect, useState } from "react"

const AppContext = createContext()

export const useApp = () => {
	return useContext(AppContext)
}

const AppProvider = ({ children }) => {
	const [data, setData] = useState([])
	const [sortedProperty, setSortedProperty] = useState("Sorter")
	const [filterCategory, setFilterProperty] = useState("")
	const [offset, setOffset] = useState(1)
	const [limit, setLimit] = useState(10)

	const state = {
		data,
		setData,
		sortedProperty,
		setSortedProperty,
		filterCategory,
		setFilterProperty,
		offset,
		setOffset,
		limit,
		setLimit,
	}

	return <AppProvider.Provider value={state}>{children}</AppProvider.Provider>
}

export default AppProvider
