import React, { useState } from "react"
import FilterProject from "../components/filter/FilterProjects"
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
