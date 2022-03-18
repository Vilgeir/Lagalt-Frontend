import React, { useState } from "react"
import FilterProject from "../components/Filter/FilterProjects"
import ProjectList from "../components/project-list/ProjectList"
import Data from "../data/data"

const Main = () => {
	const [data] = useState(Data)
	return (
		<>
			<FilterProject data={data} />
			<ProjectList data={data} />
		</>
	)
}

export default Main
