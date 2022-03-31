import React, { useEffect, useState } from "react"
import { searchProject } from "../../api/tasks"

import "./SearchBar.css"

const SearchBar = (props) => {
	const { data, setData } = props

	console.log(data)

	const [searchParam, setSearchParam] = useState("")

	useEffect(async () => {
		if (searchParam === "") {
			return
		}
		const foundProj = async () => {
			const [error, result] = await searchProject(searchParam)

			if (result) {
				setData(...result)
			}

			if (error) {
				console.log(error)
			}
		}

		foundProj()
	}, [searchParam])

	const handleSearchButton = () => {
		setSearchParam("")
	}

	return (
		<div className="search-container">
			<input
				type="text"
				placeholder="Søk blant prosjekter"
				className="searchForm"
				value={searchParam}
				onChange={(e) => setSearchParam(e.target.value)}
			></input>
			<button
				type="submit"
				className="search-button"
				onChange={handleSearchButton}
			>
				Search
			</button>
		</div>
	)
}

export default SearchBar
