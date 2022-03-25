import React, { useEffect, useState } from "react"
import FilterProject from "../components/Filter/FilterProjects"
import ProjectList from "../components/project-list/ProjectList"
import { getAllTasks, getFilteredCategory } from "../api/tasks"
import "./Main.css"

const Main = (props) => {
	/* fetch("https://lagalt.azurewebsites.net/api/Projects/1")
		.then((res) => res.json())
		.then((data) => console.log(data)) */
	const { data, sortedProperty, filterCategory, offset, limit } = props

	const [dataMain, setData] = useState(data)
	const [sortedPropertyMain, setSortedProperty] = useState(sortedProperty)
	const [filterCategoryMain, setFilterProperty] = useState(filterCategory)
	const [offsetMain, setOffset] = useState(offset)
	const [limitMain, setLimit] = useState(limit)

	const filterByCategory = async (e) => {
		const filterValue = e.target.value
		if (filterValue === "") {
			setFilterProperty("")
			setData(dataMain)
		}
		if (filterValue === "1") {
			const [error, result] = await getFilteredCategory(1)
			setFilterProperty("1")
			if (result) {
				setData(result)
			}
			return
		}
		if (filterValue === "2") {
			const [error, result] = await getFilteredCategory(2)
			if (result) {
				setFilterProperty("2")
				setData(result)
			}
			return
		}
		if (filterValue === "3") {
			const [error, result] = await getFilteredCategory(3)
			if (result) {
				setFilterProperty("3")
				setData(result)
			}
			return
		}
		if (filterValue === "4") {
			const [error, result] = await getFilteredCategory(4)
			if (result) {
				setFilterProperty("4")
				setData(result)
			}
			return
		}
	}
	const sort = (e) => {
		const sortValue = e.target.value
		const sortedData = dataMain.sort((a, b) => {
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
		setOffset(offsetMain + 10)
		setLimit(offsetMain + 10)
	}

	useEffect(() => {
		const findTasks = async () => {
			const [error, taskData] = await getAllTasks(offsetMain, limitMain)
			console.log(taskData)
			setData(dataMain.concat(taskData))

			if (error) {
				console.log(error)
			}
		}
		findTasks()
	}, [offsetMain])

	return (
		<>
			<FilterProject
				onSort={sort}
				sortProperty={sortedPropertyMain}
				onFilter={filterByCategory}
				filterProperty={filterCategoryMain}
			/>

			<ProjectList data={dataMain} />
			<button id="show-more" onClick={handleOffset}>
				Vis mer
			</button>
		</>
	)
}

export default Main
