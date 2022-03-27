import React, { useEffect, useState } from "react"
import { searchProject } from "../../api/tasks"
import { useApp } from "../../AuthContext/ApplicationContext"

import "./SearchBar.css"

const SearchBar = () => {
	const { searchData } = useApp()
	const [data, setData] = useState(searchData)
	const [searchParam, setSearchParam] = useState("")

	useEffect(async () => {
		const foundProj = async () => {
			const [error, result] = await searchProject(searchParam)

			if (error) {
				console.log(error)
			}

			setData(result)
		}

		foundProj()
	}, [searchParam])

	return (
		<div className="search-container">
			<input
				type="text"
				placeholder="Søk blant prosjekter"
				className="searchForm"
				value={searchParam}
				onChange={(e) => setSearchParam(e.target.value)}
			></input>
			<button type="submit" className="search-button">
				Search
			</button>
		</div>
	)
}

export default SearchBar
