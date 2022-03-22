import React, { useEffect, useState } from "react"
import FilterProject from "../components/filter/FilterProjects"
import ProjectList from "../components/project-list/ProjectList"
import { getAllTasks } from "../api/tasks"

const Main = () => {
	const [data, setData] = useState([])

	/* fetch("https://lagalt.azurewebsites.net/api/Projects/1")
		.then((res) => res.json())
		.then((data) => console.log(data)) */

	useEffect(() => {
		const findTasks = async () => {
			const [error, taskData] = await getAllTasks()
			setData(taskData)
		}
		findTasks()
	}, [])

	return (
		<>
			<FilterProject />
			<ProjectList data={data} />
		</>
	)
}

export default Main
