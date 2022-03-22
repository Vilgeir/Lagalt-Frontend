import React, { useEffect, useState } from "react"
import FilterProject from "../components/Filter/FilterProjects"
import ProjectList from "../components/project-list/ProjectList"
import { getAllTasks, getFilm, getMusic, getWeb, getGame } from "../api/tasks"
import { faImage } from "@fortawesome/free-solid-svg-icons"
import "./Main.css"

const Main = () => {
	const [data, setData] = useState([])
	const [sortedProperty, setSortedProperty] = useState("Sorter")
	const [filterCategory, setFilterProperty] = useState("")
	const [offset, setOffset] = useState(1)
	const [limit, setLimit] = useState(10)

	/* fetch("https://lagalt.azurewebsites.net/api/Projects/1")
		.then((res) => res.json())
		.then((data) => console.log(data)) */

	const filterByCategory = async (e) => {
		const filterValue = e.target.value
		if (filterValue === "") {
			setFilterProperty("")
			setData(data)
		}
		if (filterValue === "1") {
			const [error, result] = await getMusic()
			setFilterProperty("1")
			if (result) {
				setData(result)
			}
			return
		}
		if (filterValue === "2") {
			const [error, result] = await getFilm()
			if (result) {
				setFilterProperty("2")
				setData(result)
			}
			return
		}
		if (filterValue === "3") {
			const [error, result] = await getGame()
			if (result) {
				setFilterProperty("3")
				setData(result)
			}
			return
		}
		if (filterValue === "4") {
			const [error, result] = await getWeb()
			if (result) {
				setFilterProperty("4")
				setData(result)
			}
			return
		}
	}
	const sort = (e) => {
		const sortValue = e.target.value
		const sortedData = data.sort((a, b) => {
			if (sortValue === "DESC") {
				setSortedProperty(sortValue)

				return a.id > b.id ? 1 : -1
			}
			if (sortValue === "ASC") {
				setSortedProperty(sortValue)

				return a.projectTitle > b.projectTitle ? 1 : -1
			}
		})

		setSortedProperty(sortValue)
		setData(sortedData)
	}

	const handleOffset = () => {
		setOffset(offset + 10)
		setLimit(offset + 10)
	}

	useEffect(() => {
		const findTasks = async () => {
			const [error, taskData] = await getAllTasks(offset, limit)
			console.log(taskData)
			setData(data.concat(taskData))

			if (error) {
				console.log(error)
			}
		}
		findTasks()
	}, [offset])

	return (
		<>
			<FilterProject
				onSort={sort}
				sortProperty={sortedProperty}
				onFilter={filterByCategory}
				filterProperty={filterCategory}
			/>

			<ProjectList data={data} />
			<button id="show-more" onClick={handleOffset}>
				Vis mer
			</button>
		</>
	)
}

export default Main
