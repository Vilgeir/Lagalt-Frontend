import React, { useEffect, useState } from "react"
import { searchProject } from "../../api/tasks"

import "./SearchBar.css"

const SearchBar = (props) => {
	const { data, setData } = props

	const [searchParam, setSearchParam] = useState("")

	useEffect(async () => {
		console.log(data)

		const foundProj = async () => {
			const [error, result] = await searchProject(searchParam)
			setData(result)

			if (error) {
				console.log(error)
			}
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
