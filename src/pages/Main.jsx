import React, { useEffect, useState } from "react"
import FilterProject from "../components/filter/FilterProjects"
import ProjectList from "../components/project-list/ProjectList"
import { getAllTasks } from "../api/tasks"
import "./Main.css"

const Main = () => {
	const [data, setData] = useState([])
	const [offset, setOffset] = useState(1)
	const [limit, setLimit] = useState(10)

	/* fetch("https://lagalt.azurewebsites.net/api/Projects/1")
		.then((res) => res.json())
		.then((data) => console.log(data)) */

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
			<FilterProject />
			<ProjectList data={data} />
			<button id="show-more" onClick={handleOffset}>
				Vis mer
			</button>
		</>
	)
}

export default Main
